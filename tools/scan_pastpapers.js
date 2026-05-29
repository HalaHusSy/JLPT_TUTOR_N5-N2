#!/usr/bin/env node
/**
 * LOCAL-ONLY past-paper indexer.
 *
 * Walks pdf_source/mock_exam/ for real JLPT past papers (copyrighted — these
 * live only on this machine and are gitignored) and writes a browsable index
 * to data/pastpapers.local.json (also gitignored).
 *
 * The app's "ข้อสอบจริง" tab reads that file when present, so you can open the
 * scanned PDFs locally for personal study. Nothing here is ever pushed.
 *
 *   node tools/scan_pastpapers.js
 */
const fs = require("fs");
const path = require("path");

const ROOT = path.resolve(__dirname, "..");
const SCAN_DIR = path.join(ROOT, "pdf_source", "mock_exam");
const OUT = path.join(ROOT, "data", "pastpapers.local.json");

const MEDIA = /\.(pdf|mp3|m4a|wav|doc|docx)$/i;

// Classify a file into one of the 3 JLPT sections (+ answer/audio/exam) by filename keywords.
const L = {
  vocab: "言語知識 (文字・語彙・文法)",
  reading: "読解 (การอ่าน)",
  listening: "聴解 (การฟัง)",
  audio: "🔊 ไฟล์เสียง",
  script: "📝 สคริปต์ฟัง",
  answer: "✅ เฉลย",
  exam: "📄 ข้อสอบรวม (ทั้งชุด)",
};
function classify(name) {
  if (/\.(mp3|m4a|wav)$/i.test(name)) return { kind: "audio", label: L.audio };
  // JLPT single-letter section codes, e.g. N5V / N5G / N5R / N5L (digit + V/G/R/L)
  const stem = name.replace(/\.[^.]+$/, "");
  if (/\dV$/.test(stem)) return { kind: "vocab", label: "言語知識 (文字・語彙)" };
  if (/\dG$/.test(stem)) return { kind: "vocab", label: "言語知識 (文法)" };
  if (/\dR$/.test(stem)) return { kind: "reading", label: L.reading };
  if (/\dL$/.test(stem)) return { kind: "listening", label: L.listening };
  const hasShinExam = /真题|真題/.test(name);
  if (hasShinExam) {
    // combined package (exam + answers/analysis ± script) → treat as full exam
    if (/解析|解答|答案/.test(name)) return { kind: "exam", label: L.exam };
    if (/文字|词汇|語彙|語い/.test(name)) return { kind: "vocab", label: L.vocab };
    if (/読解|读解|文法/.test(name)) return { kind: "reading", label: L.reading };
    if (/听力|聴解|听解/.test(name)) return { kind: "listening", label: L.listening };
    return { kind: "exam", label: L.exam };
  }
  if (/听力原文|スクリプト|原文/.test(name)) return { kind: "script", label: L.script };
  if (/答案|解答|こたえ|答え/.test(name)) return { kind: "answer", label: L.answer };
  if (/听力|聴解|听解|聞き/.test(name)) return { kind: "listening", label: L.listening };
  if (/文字|词汇|語彙|語い/.test(name)) return { kind: "vocab", label: L.vocab };
  if (/読解|读解|文法/.test(name)) return { kind: "reading", label: L.reading };
  if (/解析/.test(name)) return { kind: "answer", label: L.answer };
  return { kind: "exam", label: L.exam };
}

const KIND_ORDER = { vocab: 0, reading: 1, listening: 2, audio: 3, script: 4, answer: 5, exam: 6 };

function walk(dir, acc) {
  let entries;
  try { entries = fs.readdirSync(dir, { withFileTypes: true }); }
  catch { return; }
  for (const e of entries) {
    const full = path.join(dir, e.name);
    if (e.isDirectory()) walk(full, acc);
    else if (MEDIA.test(e.name)) acc.push(full);
  }
}

function levelOf(relParts) {
  for (const p of relParts) {
    const m = /^N([1-5])$/.exec(p);
    if (m) return "N" + m[1];
  }
  return null;
}

function groupOf(relParts) {
  // segment right after the N# folder = exam/year folder
  const i = relParts.findIndex((p) => /^N[1-5]$/.test(p));
  if (i >= 0 && i + 1 < relParts.length - 1) return relParts[i + 1];
  return "(ไม่ระบุปี)";
}

function main() {
  if (!fs.existsSync(SCAN_DIR)) {
    console.log(`No ${path.relative(ROOT, SCAN_DIR)}/ — nothing to index. (That's fine on a public clone.)`);
    fs.writeFileSync(OUT, JSON.stringify({ generated_at: new Date().toISOString(), levels: {} }, null, 2));
    return;
  }
  const files = [];
  walk(SCAN_DIR, files);
  console.log(`Found ${files.length} media files under pdf_source/mock_exam/`);

  const levels = {}; // level -> group -> [ {label, kind, path} ]
  for (const full of files) {
    const rel = path.relative(ROOT, full).split(path.sep);
    const level = levelOf(rel);
    if (!level) continue;
    const group = groupOf(rel);
    const name = rel[rel.length - 1];
    const c = classify(name);
    const url = rel.join("/"); // forward-slash relative URL for the browser
    (levels[level] = levels[level] || {});
    (levels[level][group] = levels[level][group] || []).push({ label: c.label, kind: c.kind, name, path: url });
  }

  // sort groups (newest-ish first by string desc) and files by section order
  const out = { generated_at: new Date().toISOString(), levels: {} };
  for (const lv of ["N5", "N4", "N3", "N2", "N1"]) {
    if (!levels[lv]) continue;
    const groups = Object.keys(levels[lv]).sort((a, b) => b.localeCompare(a, "ja"));
    out.levels[lv] = groups.map((g) => ({
      group: g,
      files: levels[lv][g].sort((a, b) => (KIND_ORDER[a.kind] - KIND_ORDER[b.kind]) || a.name.localeCompare(b.name)),
    }));
  }

  fs.mkdirSync(path.dirname(OUT), { recursive: true });
  fs.writeFileSync(OUT, JSON.stringify(out));
  const total = Object.values(out.levels).reduce((s, gs) => s + gs.reduce((t, g) => t + g.files.length, 0), 0);
  console.log(`✓ data/pastpapers.local.json — ${Object.keys(out.levels).length} levels, ${total} files indexed`);
  for (const lv of Object.keys(out.levels)) {
    console.log(`  ${lv}: ${out.levels[lv].length} กลุ่ม`);
  }
}

main();
