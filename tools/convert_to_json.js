#!/usr/bin/env node
/**
 * Convert legacy data/*.js (window.* globals) → data/<kind>/<level>.json
 *
 * Reads the script tag order from index.html so dependent files (vocab-n5-pdf-a.js
 * which expects vocab-n5.js to have run first) execute in the right order, then
 * dumps every window.* global into a clean per-(kind, level) JSON tree:
 *
 *   data/index.json                  – manifest
 *   data/vocab/n5.json … n1.json     – deduped arrays (same dedupe rules as app.js)
 *   data/kanji/n5.json … n1.json
 *   data/grammar/n5.json … n1.json
 *   data/reading/n5.json … n1.json
 *   data/mock/n5.json … n1.json      – arrays of mock exams (1 file per level)
 *
 * Old .js files are left in place so we can roll back. Delete them after the
 * frontend is verified working with the new lazy-load loader.
 */

const fs = require("fs");
const path = require("path");
const vm = require("vm");

const ROOT = path.resolve(__dirname, "..");
const DATA = path.join(ROOT, "data");
const INDEX_HTML = path.join(ROOT, "index.html");

const LEVELS = ["N5", "N4", "N3", "N2", "N1"];
const KIND_KEY = { vocab: "word", kanji: "char", grammar: "pattern" };

function readScriptOrder() {
  // Preferred: explicit order from index.html <script src="data/..."> tags.
  const html = fs.readFileSync(INDEX_HTML, "utf8");
  const re = /<script src="data\/([^"]+)"><\/script>/g;
  const out = [];
  let m;
  while ((m = re.exec(html)) !== null) out.push(m[1]);
  if (out.length) return out;

  // Fallback: index.html no longer lists data scripts (lazy-load JSON loader).
  // Glob data/*.js directly. Base files (e.g. vocab-n5.js, which does a direct
  // `window.vocabN5 = [...]` assignment) MUST run before their extension files
  // (vocab-n5-pdf-*.js, which append via `window.vocabN5 = window.vocabN5 || []`).
  // A file whose stem is a dash-prefix of another (vocab-n5 ⊂ vocab-n5-pdf-a)
  // is the base and sorts first.
  console.log("  (no <script> tags in index.html — globbing data/*.js)");
  return fs
    .readdirSync(DATA)
    .filter((f) => f.endsWith(".js"))
    .sort((a, b) => {
      const sa = a.replace(/\.js$/, "");
      const sb = b.replace(/\.js$/, "");
      if (sb.startsWith(sa + "-")) return -1; // a is the base of b
      if (sa.startsWith(sb + "-")) return 1; // b is the base of a
      return sa < sb ? -1 : sa > sb ? 1 : 0;
    });
}

function evalAll(files) {
  const sandbox = { window: {}, console };
  vm.createContext(sandbox);
  for (const file of files) {
    const p = path.join(DATA, file);
    if (!fs.existsSync(p)) {
      console.warn(`  ! missing ${file}, skipping`);
      continue;
    }
    const code = fs.readFileSync(p, "utf8");
    try {
      vm.runInContext(code, sandbox, { filename: file });
    } catch (e) {
      console.error(`  ✗ ${file}: ${e.message}`);
      throw e;
    }
  }
  return sandbox.window;
}

function dedupe(arr, keyField) {
  const seen = new Set();
  const out = [];
  for (const item of arr) {
    const k = item && item[keyField];
    if (k && seen.has(k)) continue;
    if (k) seen.add(k);
    out.push(item);
  }
  return out;
}

function writeJSON(rel, data) {
  const p = path.join(DATA, rel);
  fs.mkdirSync(path.dirname(p), { recursive: true });
  fs.writeFileSync(p, JSON.stringify(data));
  const kb = (fs.statSync(p).size / 1024).toFixed(1);
  console.log(`  ✓ data/${rel.replace(/\\/g, "/")} — ${Array.isArray(data) ? data.length : "object"} items, ${kb}KB`);
}

function main() {
  console.log("→ Reading script order from index.html…");
  const files = readScriptOrder();
  console.log(`  Found ${files.length} script tags`);

  console.log("→ Evaluating all data scripts in order…");
  const win = evalAll(files);

  console.log("→ Dumping vocab/kanji/grammar…");
  for (const kind of Object.keys(KIND_KEY)) {
    for (const lv of LEVELS) {
      const arr = win[`${kind}${lv}`] || [];
      const deduped = dedupe(arr, KIND_KEY[kind]);
      writeJSON(path.join(kind, `${lv.toLowerCase()}.json`), deduped);
    }
  }

  console.log("→ Dumping readings…");
  const readings = win.READINGS || {};
  for (const lv of LEVELS) {
    writeJSON(path.join("reading", `${lv.toLowerCase()}.json`), readings[lv] || []);
  }

  console.log("→ Dumping mock exams…");
  const mocks = win.MOCK_EXAMS || {};
  for (const lv of LEVELS) {
    writeJSON(path.join("mock", `${lv.toLowerCase()}.json`), mocks[lv] || []);
  }

  console.log("→ Writing manifest…");
  const manifest = {
    generated_at: new Date().toISOString(),
    levels: LEVELS,
    kinds: {
      vocab: LEVELS.map((l) => l.toLowerCase()),
      kanji: LEVELS.map((l) => l.toLowerCase()),
      grammar: LEVELS.map((l) => l.toLowerCase()),
      reading: LEVELS.map((l) => l.toLowerCase()),
      mock: LEVELS.map((l) => l.toLowerCase()),
    },
  };
  fs.writeFileSync(path.join(DATA, "index.json"), JSON.stringify(manifest, null, 2));
  console.log("  ✓ data/index.json");

  console.log("\nDone.");
}

main();
