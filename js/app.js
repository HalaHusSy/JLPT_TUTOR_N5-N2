(function () {
  "use strict";

  // -------- STATE --------
  const state = {
    level: localStorage.getItem("jlpt-level") || "N5",
    tab: localStorage.getItem("jlpt-tab") || "vocab",
    search: "",
    revealAll: false,
    progress: JSON.parse(localStorage.getItem("jlpt-progress") || "{}"),
  };

  // -------- HELPERS --------
  const $ = (sel) => document.querySelector(sel);
  const $$ = (sel) => Array.from(document.querySelectorAll(sel));
  const el = (tag, attrs = {}, ...children) => {
    const e = document.createElement(tag);
    for (const k in attrs) {
      if (k === "class") e.className = attrs[k];
      else if (k === "html") e.innerHTML = attrs[k];
      else if (k.startsWith("on")) e.addEventListener(k.substring(2), attrs[k]);
      else e.setAttribute(k, attrs[k]);
    }
    children.forEach((c) => {
      if (c == null) return;
      e.appendChild(typeof c === "string" ? document.createTextNode(c) : c);
    });
    return e;
  };

  // -------- DATA LOADING (lazy-load JSON per kind+level, cached in memory) --------
  // Replaces the legacy "load all 55 .js files via <script> tags" approach.
  // Each dataset is fetched once on first access and cached. Dedupe is now done
  // by the build script (tools/convert_to_json.js), so this is a pure loader.
  const dataCache = new Map();
  const inflight = new Map();

  async function loadDataset(kind, level) {
    const key = `${kind}-${level}`;
    if (dataCache.has(key)) return dataCache.get(key);
    if (inflight.has(key)) return inflight.get(key);
    const url = `data/${kind}/${level.toLowerCase()}.json`;
    const p = fetch(url).then(async (r) => {
      if (!r.ok) throw new Error(`HTTP ${r.status} for ${url}`);
      const data = await r.json();
      dataCache.set(key, data);
      inflight.delete(key);
      return data;
    }).catch((e) => {
      console.error(`loadDataset failed: ${url}`, e);
      dataCache.set(key, []);
      inflight.delete(key);
      return [];
    });
    inflight.set(key, p);
    return p;
  }

  function showLoading(main) {
    main.innerHTML = '<div class="loading">กำลังโหลด…</div>';
  }

  function saveProgress() {
    localStorage.setItem("jlpt-progress", JSON.stringify(state.progress));
  }

  function markStudied(kind, level, id) {
    const k = `${kind}-${level}`;
    if (!state.progress[k]) state.progress[k] = {};
    state.progress[k][id] = (state.progress[k][id] || 0) + 1;
    saveProgress();
  }

  // -------- ROUTER --------
  // Each render fn is async because it fetches its dataset on demand.
  // We show a loading placeholder immediately so the UI never appears frozen.
  async function render() {
    const main = $("#content");
    showLoading(main);
    if (state.tab === "vocab") await renderVocab(main);
    else if (state.tab === "kanji") await renderKanji(main);
    else if (state.tab === "grammar") await renderGrammar(main);
    else if (state.tab === "reading") await renderReading(main);
    else if (state.tab === "mock") await renderMock(main);
    else if (state.tab === "pastpapers") await renderPastPapers(main);
    else if (state.tab === "stats") await renderStats(main);
  }

  // -------- VOCAB --------
  async function renderVocab(main) {
    const data = await loadDataset("vocab", state.level);
    main.innerHTML = "";
    const filtered = filterItems(data, state.search, ["word", "reading", "romaji", "meaning"]);

    main.appendChild(makeToolbar({
      placeholder: "ค้นหาคำศัพท์ / คำอ่าน / ความหมาย…",
      count: filtered.length,
      total: data.length,
      onQuiz: () => startQuiz("vocab", data),
    }));

    if (!filtered.length) {
      main.appendChild(el("div", { class: "empty" }, "ไม่มีข้อมูลที่ตรงกับการค้นหา"));
      return;
    }

    const grid = el("div", { class: "grid" });
    filtered.forEach((item) => grid.appendChild(makeVocabCard(item)));
    main.appendChild(grid);
  }

  function makeVocabCard(item) {
    const card = el("div", { class: "card" });
    const front = el("div", { class: "card-front" });
    front.appendChild(el("div", { class: "jp" }, item.word));
    if (item.reading && item.reading !== item.word) {
      front.appendChild(el("div", { class: "reading" }, item.reading));
    }
    const back = el("div", { class: "card-back hidden" });
    back.appendChild(el("div", { class: "romaji" }, item.romaji || ""));
    back.appendChild(el("div", { class: "meaning" }, "🇹🇭 " + item.meaning));
    if (item.examples && item.examples.length) {
      const exBox = el("div", { class: "examples" });
      item.examples.forEach((ex) => {
        const exDiv = el("div", { class: "ex" });
        exDiv.appendChild(el("span", { class: "ex-jp" }, ex.jp));
        exDiv.appendChild(el("span", { class: "ex-rom" }, ex.romaji || ""));
        exDiv.appendChild(el("span", { class: "ex-th" }, "→ " + ex.th));
        exBox.appendChild(exDiv);
      });
      back.appendChild(exBox);
    }
    const btn = el("button", { class: "reveal-btn" }, "เฉลย ▾");
    front.appendChild(btn);
    card.appendChild(front);
    card.appendChild(back);

    const toggle = (e) => {
      e.stopPropagation();
      const hidden = back.classList.contains("hidden");
      back.classList.toggle("hidden");
      btn.textContent = hidden ? "ซ่อน ▴" : "เฉลย ▾";
      if (hidden) markStudied("vocab", state.level, item.word);
    };
    btn.addEventListener("click", toggle);
    card.addEventListener("click", toggle);
    return card;
  }

  // -------- KANJI --------
  async function renderKanji(main) {
    const data = await loadDataset("kanji", state.level);
    main.innerHTML = "";
    const filtered = filterItems(data, state.search, ["char", "on", "kun", "meaning"]);

    main.appendChild(makeToolbar({
      placeholder: "ค้นหาคันจิ / คำอ่าน / ความหมาย…",
      count: filtered.length,
      total: data.length,
      onQuiz: () => startQuiz("kanji", data),
    }));

    if (!filtered.length) {
      main.appendChild(el("div", { class: "empty" }, "ไม่มีข้อมูล"));
      return;
    }

    const grid = el("div", { class: "grid" });
    filtered.forEach((item) => grid.appendChild(makeKanjiCard(item)));
    main.appendChild(grid);
  }

  function makeKanjiCard(item) {
    const card = el("div", { class: "card kanji" });
    const front = el("div", { class: "card-front" });
    front.appendChild(el("div", { class: "jp" }, item.char));
    const yomi = el("div", { class: "yomi" });
    yomi.appendChild(el("span", {}, "音: " + (item.on || "—")));
    yomi.appendChild(el("span", {}, "訓: " + (item.kun || "—")));
    front.appendChild(yomi);

    const back = el("div", { class: "card-back hidden" });
    back.appendChild(el("div", { class: "meaning" }, "🇹🇭 " + item.meaning));
    if (item.romaji) back.appendChild(el("div", { class: "romaji" }, item.romaji));
    if (item.examples && item.examples.length) {
      const exBox = el("div", { class: "examples" });
      item.examples.forEach((ex) => {
        const exDiv = el("div", { class: "ex" });
        exDiv.appendChild(el("span", { class: "ex-jp" }, ex.jp));
        exDiv.appendChild(el("span", { class: "ex-rom" }, ex.romaji || ""));
        exDiv.appendChild(el("span", { class: "ex-th" }, "→ " + ex.th));
        exBox.appendChild(exDiv);
      });
      back.appendChild(exBox);
    }

    const btn = el("button", { class: "reveal-btn" }, "เฉลย ▾");
    front.appendChild(btn);
    card.appendChild(front);
    card.appendChild(back);

    const toggle = (e) => {
      e.stopPropagation();
      const hidden = back.classList.contains("hidden");
      back.classList.toggle("hidden");
      btn.textContent = hidden ? "ซ่อน ▴" : "เฉลย ▾";
      if (hidden) markStudied("kanji", state.level, item.char);
    };
    btn.addEventListener("click", toggle);
    card.addEventListener("click", toggle);
    return card;
  }

  // -------- GRAMMAR --------
  async function renderGrammar(main) {
    const data = await loadDataset("grammar", state.level);
    main.innerHTML = "";
    const filtered = filterItems(data, state.search, ["pattern", "title", "meaning"]);

    main.appendChild(makeToolbar({
      placeholder: "ค้นหา pattern / ความหมาย…",
      count: filtered.length,
      total: data.length,
      hideQuiz: false,
      onQuiz: () => startGrammarQuiz(data),
    }));

    if (!filtered.length) {
      main.appendChild(el("div", { class: "empty" }, "ไม่มีข้อมูล"));
      return;
    }

    filtered.forEach((g) => main.appendChild(makeGrammarRow(g)));
  }

  function makeGrammarRow(g) {
    const row = el("div", { class: "row" });
    row.appendChild(el("h3", {}, g.title));
    row.appendChild(el("div", { class: "pattern" }, g.pattern));
    row.appendChild(el("div", { class: "desc" }, "🇹🇭 " + g.meaning));
    if (g.examples && g.examples.length) {
      g.examples.forEach((ex) => {
        const div = el("div", { class: "ex" });
        div.appendChild(el("span", { class: "ex-jp" }, ex.jp));
        div.appendChild(el("span", { class: "ex-rom" }, ex.romaji || ""));
        div.appendChild(el("span", { class: "ex-th" }, "→ " + ex.th));
        row.appendChild(div);
      });
    }
    return row;
  }

  // -------- READING --------
  async function renderReading(main) {
    const arr = await loadDataset("reading", state.level);
    main.innerHTML = "";

    main.appendChild(makeToolbar({
      placeholder: "ค้นหาบทอ่าน…",
      count: arr.length,
      total: arr.length,
      hideQuiz: true,
    }));

    if (!arr.length) {
      main.appendChild(el("div", { class: "empty" }, "ยังไม่มีบทอ่านระดับนี้"));
      return;
    }

    arr.forEach((r, i) => {
      const row = el("div", { class: "row" });
      row.appendChild(el("h3", {}, `📖 ${r.title}`));
      row.appendChild(el("div", { class: "ex", html: `<span class="ex-jp" style="font-size:16px;line-height:1.9">${r.jp}</span>` }));
      const btn = el("button", { class: "reveal-btn" }, "ดูคำแปล / คำอ่าน ▾");
      const trans = el("div", { class: "ex hidden" });
      trans.appendChild(el("span", { class: "ex-rom" }, r.romaji || ""));
      trans.appendChild(el("span", { class: "ex-th", html: "🇹🇭 " + r.th }));
      btn.addEventListener("click", () => {
        trans.classList.toggle("hidden");
        btn.textContent = trans.classList.contains("hidden") ? "ดูคำแปล / คำอ่าน ▾" : "ซ่อน ▴";
      });
      row.appendChild(btn);
      row.appendChild(trans);

      if (r.questions && r.questions.length) {
        const qHead = el("div", { class: "desc" }, "❓ คำถามท้ายบท:");
        row.appendChild(qHead);
        r.questions.forEach((q, idx) => {
          row.appendChild(makeQuestion(q, idx + 1));
        });
      }
      main.appendChild(row);
    });
  }

  // -------- MOCK EXAM --------
  async function renderMock(main) {
    const exams = await loadDataset("mock", state.level);
    main.innerHTML = "";

    if (!exams.length) {
      main.appendChild(el("div", { class: "empty" }, `ยังไม่มี Mock Exam สำหรับ ${state.level}`));
      return;
    }

    main.appendChild(el("h2", {}, `🧪 Mock Exam — ${state.level}`));
    main.appendChild(el("p", { class: "desc", style: "color:var(--muted)" },
      "ข้อสอบจำลองที่ออกแบบตามรูปแบบ JLPT (ไม่ใช่ข้อสอบจริงเก่า — ข้อสอบจริงเป็นลิขสิทธิ์ JEES) · กดดูเฉลยและคำแปลไทยได้หลังตอบ"));

    const list = el("div", { class: "mock-list" });
    exams.forEach((exam) => {
      const card = el("div", { class: "mock-card" });
      card.appendChild(el("h4", {}, exam.title));
      card.appendChild(el("small", {}, `${countExamQuestions(exam)} ข้อ`));
      card.addEventListener("click", () => startMockExam(exam));
      list.appendChild(card);
    });
    main.appendChild(list);
  }

  // Flatten a mock exam to its question list, supporting both the legacy
  // { questions: [...] } shape and the sectioned { sections: [{name, instruction, questions}] } shape.
  function flattenExam(exam) {
    if (Array.isArray(exam.sections)) {
      return exam.sections.reduce((acc, s) => acc.concat(s.questions || []), []);
    }
    return exam.questions || [];
  }
  function countExamQuestions(exam) {
    return flattenExam(exam).length;
  }

  // Render the exam body (section headers + questions) into `wrap`.
  // Question numbering and the `answers` map use a continuous global index.
  function renderExamBody(exam, wrap, answers, showAnswer) {
    const sections = Array.isArray(exam.sections)
      ? exam.sections
      : [{ questions: exam.questions || [] }];
    let idx = 0;
    sections.forEach((sec) => {
      if (sec.name || sec.instruction) {
        const head = el("div", { class: "section-head" });
        if (sec.name) head.appendChild(el("div", { class: "section-name" }, sec.name));
        if (sec.instruction) head.appendChild(el("div", { class: "section-instr" }, sec.instruction));
        wrap.appendChild(head);
      }
      // Sectioned listening: one MP3 covers all questions in this 問題.
      if (sec.audio_src) {
        const audioWrap = el("div", { style: "margin:8px 0 14px" });
        audioWrap.appendChild(el("div", { class: "ex-rom", style: "font-size:12px;margin-bottom:4px;color:var(--muted)" },
          "🔊 ฟังเสียงทั้ง問題แล้วตอบทีละข้อตามลำดับ"));
        audioWrap.appendChild(el("audio", { controls: "", preload: "none", src: encodeURI(sec.audio_src), style: "width:100%;max-width:520px" }));
        wrap.appendChild(audioWrap);
      }
      if (sec.passage) {
        wrap.appendChild(el("div", { class: "exam-passage", html: sec.passage }));
      }
      (sec.questions || []).forEach((q) => {
        idx++;
        wrap.appendChild(makeExamQuestion(q, idx, answers, showAnswer));
      });
    });
  }

  function startMockExam(exam) {
    const main = $("#content");
    main.innerHTML = "";
    const back = el("button", { class: "tab", style: "background:var(--card);border:1px solid var(--line);color:var(--text);padding:8px 14px;border-radius:8px;margin-bottom:14px;cursor:pointer" }, "← กลับ");
    back.addEventListener("click", () => render());
    main.appendChild(back);
    main.appendChild(el("h2", {}, exam.title));
    const flat = flattenExam(exam);
    main.appendChild(el("p", { class: "desc", style: "color:var(--muted)" },
      `${flat.length} ข้อ · ตอบให้ครบแล้วกด "ส่งคำตอบ"`));

    const answers = {};
    const wrap = el("div", {});
    renderExamBody(exam, wrap, answers, false);
    main.appendChild(wrap);

    const submit = el("button", {
      style: "background:var(--accent);color:white;border:none;padding:12px 24px;border-radius:8px;font-weight:700;cursor:pointer;font-size:15px;margin-top:14px"
    }, "✓ ส่งคำตอบและดูเฉลย");
    submit.addEventListener("click", () => {
      let correct = 0;
      flat.forEach((q, i) => {
        if (answers[i] === q.answer) correct++;
      });
      const result = el("div", { class: "exam-result" });
      result.appendChild(el("h3", {}, "ผลคะแนน"));
      const pct = Math.round((correct / flat.length) * 100);
      result.appendChild(el("div", { class: "score" }, `${correct} / ${flat.length}`));
      result.appendChild(el("div", { class: "desc" }, `${pct}% — ${pct >= 70 ? "ผ่าน 🎉" : pct >= 50 ? "ใกล้ผ่านแล้ว 💪" : "ฝึกต่อไปนะ 📚"}`));
      main.insertBefore(result, wrap);

      // re-render with answers shown
      wrap.innerHTML = "";
      renderExamBody(exam, wrap, answers, true);
      submit.remove();
      window.scrollTo({ top: 0, behavior: "smooth" });
    });
    main.appendChild(submit);
  }

  function makeExamQuestion(q, num, answers, showAnswer) {
    const wrap = el("div", { class: "exam-question" });
    wrap.appendChild(el("div", { class: "qnum" }, `ข้อที่ ${num}`));
    if (q.context) {
      wrap.appendChild(el("div", { class: "desc", style: "font-style:italic" }, q.context));
    }
    const qtext = el("div", { class: "qtext" });
    qtext.innerHTML = q.q.replace(/___/g, '<span class="blank">＿</span>');
    wrap.appendChild(qtext);

    const choices = el("div", { class: "choices" });
    q.choices.forEach((c, idx) => {
      const btn = el("button", { class: "choice" }, `${idx + 1}. ${c}`);
      if (showAnswer) {
        btn.disabled = true;
        if (idx === q.answer) btn.classList.add("correct");
        else if (answers[num - 1] === idx) btn.classList.add("wrong");
      } else {
        if (answers[num - 1] === idx) btn.classList.add("selected");
        btn.addEventListener("click", () => {
          answers[num - 1] = idx;
          choices.querySelectorAll(".choice").forEach((b) => b.classList.remove("selected"));
          btn.classList.add("selected");
        });
      }
      choices.appendChild(btn);
    });
    wrap.appendChild(choices);

    if (showAnswer) {
      const exp = el("div", { class: "explanation" });
      exp.appendChild(el("strong", {}, `เฉลย: ข้อ ${q.answer + 1} → ${q.choices[q.answer]}`));
      if (q.romaji) exp.appendChild(el("div", { class: "ex-rom" }, q.romaji));
      if (q.explanation) exp.appendChild(el("div", { class: "th" }, "🇹🇭 " + q.explanation));
      wrap.appendChild(exp);
    }
    return wrap;
  }

  function makeQuestion(q, num) {
    const wrap = el("div", { class: "exam-question" });
    wrap.appendChild(el("div", { class: "qnum" }, `Q${num}`));
    wrap.appendChild(el("div", { class: "qtext" }, q.q));
    const answers = {};
    const choices = el("div", { class: "choices" });
    q.choices.forEach((c, idx) => {
      const btn = el("button", { class: "choice" }, `${idx + 1}. ${c}`);
      btn.addEventListener("click", () => {
        choices.querySelectorAll(".choice").forEach((b) => {
          b.classList.remove("selected", "correct", "wrong");
        });
        if (idx === q.answer) btn.classList.add("correct");
        else btn.classList.add("wrong");
        const correctBtn = choices.children[q.answer];
        if (correctBtn !== btn) correctBtn.classList.add("correct");
        if (q.explanation && !wrap.querySelector(".explanation")) {
          const exp = el("div", { class: "explanation" });
          exp.appendChild(el("strong", {}, "🇹🇭 " + q.explanation));
          wrap.appendChild(exp);
        }
      });
      choices.appendChild(btn);
    });
    wrap.appendChild(choices);
    return wrap;
  }

  // -------- QUIZ MODE (vocab/kanji) --------
  function startQuiz(kind, data) {
    if (!data.length) return;
    const main = $("#content");
    main.innerHTML = "";

    const back = el("button", { style: "background:var(--card);border:1px solid var(--line);color:var(--text);padding:8px 14px;border-radius:8px;margin-bottom:14px;cursor:pointer" }, "← ออก");
    back.addEventListener("click", () => render());
    main.appendChild(back);
    main.appendChild(el("h2", {}, `🎯 Quiz — ${kind === "vocab" ? "คำศัพท์" : "คันจิ"} ${state.level}`));

    const sample = shuffle(data.slice()).slice(0, Math.min(10, data.length));
    let idx = 0, correct = 0;
    const answers = {};

    function renderQ() {
      const container = $("#quiz-area");
      container.innerHTML = "";
      if (idx >= sample.length) {
        const result = el("div", { class: "exam-result" });
        result.appendChild(el("h3", {}, "เสร็จแล้ว!"));
        result.appendChild(el("div", { class: "score" }, `${correct}/${sample.length}`));
        result.appendChild(el("div", { class: "desc" }, `${Math.round(correct / sample.length * 100)}% — ลองอีกรอบมั้ย?`));
        const again = el("button", { style: "margin-top:10px;background:var(--accent2);color:white;border:none;padding:10px 20px;border-radius:8px;cursor:pointer" }, "เริ่มใหม่");
        again.addEventListener("click", () => startQuiz(kind, data));
        result.appendChild(again);
        container.appendChild(result);
        return;
      }
      const item = sample[idx];
      const correctAns = kind === "vocab" ? item.meaning : item.meaning;
      const choices = shuffle([
        correctAns,
        ...shuffle(data.filter((d) => d !== item)).slice(0, 3).map((d) => d.meaning),
      ]);

      const q = el("div", { class: "exam-question" });
      q.appendChild(el("div", { class: "qnum" }, `ข้อ ${idx + 1} / ${sample.length} · คะแนนตอนนี้: ${correct}`));
      const qt = el("div", { class: "qtext", style: "font-size:36px;text-align:center" });
      qt.appendChild(el("div", { class: "jp" }, kind === "vocab" ? item.word : item.char));
      if (item.reading && kind === "vocab") qt.appendChild(el("div", { class: "reading", style: "font-size:14px;margin-top:6px" }, item.reading));
      q.appendChild(qt);

      const cBox = el("div", { class: "choices" });
      choices.forEach((c) => {
        const b = el("button", { class: "choice" }, c);
        b.addEventListener("click", () => {
          if (c === correctAns) {
            b.classList.add("correct");
            correct++;
          } else {
            b.classList.add("wrong");
            cBox.querySelectorAll(".choice").forEach((bt) => {
              if (bt.textContent === correctAns) bt.classList.add("correct");
            });
          }
          cBox.querySelectorAll(".choice").forEach((bt) => bt.disabled = true);
          setTimeout(() => { idx++; renderQ(); }, 1100);
        });
        cBox.appendChild(b);
      });
      q.appendChild(cBox);
      container.appendChild(q);
    }

    main.appendChild(el("div", { id: "quiz-area" }));
    renderQ();
  }

  function startGrammarQuiz(data) {
    if (!data.length) return;
    const main = $("#content");
    main.innerHTML = "";
    const back = el("button", { style: "background:var(--card);border:1px solid var(--line);color:var(--text);padding:8px 14px;border-radius:8px;margin-bottom:14px;cursor:pointer" }, "← ออก");
    back.addEventListener("click", () => render());
    main.appendChild(back);
    main.appendChild(el("h2", {}, `🎯 Grammar Quiz — ${state.level}`));

    const sample = shuffle(data.slice()).slice(0, Math.min(10, data.length));
    let idx = 0, correct = 0;

    function renderQ() {
      const container = $("#quiz-area");
      container.innerHTML = "";
      if (idx >= sample.length) {
        const result = el("div", { class: "exam-result" });
        result.appendChild(el("h3", {}, "จบ Quiz!"));
        result.appendChild(el("div", { class: "score" }, `${correct}/${sample.length}`));
        const again = el("button", { style: "margin-top:10px;background:var(--accent2);color:white;border:none;padding:10px 20px;border-radius:8px;cursor:pointer" }, "ลองใหม่");
        again.addEventListener("click", () => startGrammarQuiz(data));
        result.appendChild(again);
        container.appendChild(result);
        return;
      }
      const item = sample[idx];
      const choices = shuffle([
        item.meaning,
        ...shuffle(data.filter((d) => d !== item)).slice(0, 3).map((d) => d.meaning),
      ]);
      const q = el("div", { class: "exam-question" });
      q.appendChild(el("div", { class: "qnum" }, `ข้อ ${idx + 1} / ${sample.length} · ${correct} ถูก`));
      q.appendChild(el("div", { class: "qtext", style: "text-align:center" }, item.pattern));
      const cBox = el("div", { class: "choices" });
      choices.forEach((c) => {
        const b = el("button", { class: "choice" }, c);
        b.addEventListener("click", () => {
          if (c === item.meaning) { b.classList.add("correct"); correct++; }
          else {
            b.classList.add("wrong");
            cBox.querySelectorAll(".choice").forEach((bt) => {
              if (bt.textContent === item.meaning) bt.classList.add("correct");
            });
          }
          cBox.querySelectorAll(".choice").forEach((bt) => bt.disabled = true);
          setTimeout(() => { idx++; renderQ(); }, 1100);
        });
        cBox.appendChild(b);
      });
      q.appendChild(cBox);
      container.appendChild(q);
    }
    main.appendChild(el("div", { id: "quiz-area" }));
    renderQ();
  }

  // -------- STATS --------
  // -------- PAST PAPERS (local-only) --------
  let _pastPapersCache;
  async function loadPastPapers() {
    if (_pastPapersCache !== undefined) return _pastPapersCache;
    try {
      const r = await fetch("data/pastpapers.local.json");
      _pastPapersCache = r.ok ? await r.json() : null;
    } catch (e) {
      _pastPapersCache = null;
    }
    return _pastPapersCache;
  }

  // Transcribed (OCR'd) past-paper questions → interactive quizzes. Local-only.
  let _ppQuizCache;
  async function loadPastPapersQuiz() {
    if (_ppQuizCache !== undefined) return _ppQuizCache;
    try {
      const r = await fetch("data/pastpapers-quiz.local.json");
      _ppQuizCache = r.ok ? await r.json() : null;
    } catch (e) {
      _ppQuizCache = null;
    }
    return _ppQuizCache;
  }

  async function renderPastPapers(main) {
    main.innerHTML = "";
    main.appendChild(el("h2", {}, `📂 ข้อสอบจริง (真题) — ${state.level}`));

    const data = await loadPastPapers();
    const groups = data && data.levels && data.levels[state.level];
    const quizData = await loadPastPapersQuiz();
    const quizForLevel = (quizData && quizData[state.level]) || {};

    if (!groups || !groups.length) {
      const box = el("div", { class: "empty" });
      box.appendChild(el("p", {}, "ยังไม่มีดัชนีข้อสอบจริงในเครื่องนี้ (หรือไม่มีไฟล์ระดับนี้)"));
      box.appendChild(el("p", { class: "desc" , style:"color:var(--muted)"},
        "วางไฟล์ไว้ใน pdf_source/mock_exam/ แล้วรัน:  node tools/scan_pastpapers.js"));
      main.appendChild(box);
      return;
    }

    main.appendChild(el("p", { class: "desc", style: "color:var(--muted)" },
      "⚠️ ไฟล์ลิขสิทธิ์ JEES — โหมดนี้ใช้ดู/ฟังในเครื่องส่วนตัวเท่านั้น (ไม่ถูก push ขึ้น GitHub) · เปิด PDF/เล่นเสียงได้เลย"));

    groups.forEach((g) => {
      const row = el("div", { class: "row" });
      row.appendChild(el("h3", {}, `📁 ${g.group}`));

      // If this exam has a transcribed interactive quiz, offer to launch it.
      const quiz = quizForLevel[g.group];
      if (quiz) {
        const qn = flattenExam(quiz).length;
        const btn = el("button", {
          style: "display:inline-block;margin:2px 0 12px;padding:9px 16px;background:var(--accent);color:#fff;border:none;border-radius:8px;font-weight:700;cursor:pointer;font-size:13px",
        }, `▶ ทำเป็นข้อสอบ interactive (${qn} ข้อ · กดเฉลยได้)`);
        btn.addEventListener("click", () => startMockExam(quiz));
        row.appendChild(btn);
      }

      let lastLabel = null;
      g.files.forEach((f) => {
        if (f.label !== lastLabel) {
          row.appendChild(el("div", { class: "section-instr", style: "margin:10px 0 4px;font-weight:600" }, f.label));
          lastLabel = f.label;
        }
        const url = encodeURI(f.path);
        if (f.kind === "audio") {
          const wrap = el("div", { style: "margin:4px 0 10px" });
          wrap.appendChild(el("div", { class: "ex-rom", style: "font-size:12px;margin-bottom:2px" }, "🔊 " + f.name));
          const audio = el("audio", { controls: "", preload: "none", src: url, style: "width:100%;max-width:420px" });
          wrap.appendChild(audio);
          row.appendChild(wrap);
        } else {
          const a = el("a", {
            href: url, target: "_blank", rel: "noopener",
            style: "display:block;padding:8px 12px;margin:4px 0;background:var(--bg2);border:1px solid var(--line);border-radius:8px;color:var(--accent2);text-decoration:none;font-size:13px",
          }, `${f.label.startsWith("📄") || f.label.startsWith("✅") || f.label.startsWith("📝") ? "" : "📄 "}${f.name}  ↗`);
          row.appendChild(a);
        }
      });
      main.appendChild(row);
    });
  }

  async function renderStats(main) {
    // Load every level's vocab+kanji in parallel to compute totals.
    // Once cached, subsequent visits to Stats are instant.
    const levels = ["N5", "N4", "N3", "N2", "N1"];
    const totals = await Promise.all(levels.flatMap((lv) => [
      loadDataset("vocab", lv),
      loadDataset("kanji", lv),
    ]));
    main.innerHTML = "";
    main.appendChild(el("h2", {}, "📊 สถิติของคุณ"));
    const grid = el("div", { class: "stats-grid" });
    let total = 0, studied = 0;
    levels.forEach((lv, i) => {
      const vKey = `vocab-${lv}`;
      const kKey = `kanji-${lv}`;
      const vTotal = totals[i * 2].length;
      const kTotal = totals[i * 2 + 1].length;
      const vStudied = Object.keys(state.progress[vKey] || {}).length;
      const kStudied = Object.keys(state.progress[kKey] || {}).length;
      total += vTotal + kTotal;
      studied += vStudied + kStudied;
      const stat = el("div", { class: "stat" });
      stat.appendChild(el("h4", {}, `${lv} · ความคืบหน้า`));
      stat.appendChild(el("div", { class: "num" }, `${vStudied + kStudied}/${vTotal + kTotal}`));
      stat.appendChild(el("div", { class: "desc" }, `คำศัพท์ ${vStudied}/${vTotal} · คันจิ ${kStudied}/${kTotal}`));
      grid.appendChild(stat);
    });
    const totalCard = el("div", { class: "stat" });
    totalCard.appendChild(el("h4", {}, "ทั้งหมด"));
    totalCard.appendChild(el("div", { class: "num" }, `${studied}/${total}`));
    totalCard.appendChild(el("div", { class: "desc" }, `${total ? Math.round(studied / total * 100) : 0}%`));
    grid.insertBefore(totalCard, grid.firstChild);
    main.appendChild(grid);

    const reset = el("button", { class: "ghost", style: "margin-top:18px;background:var(--card);color:var(--text);border:1px solid var(--line);padding:8px 14px;border-radius:8px;cursor:pointer" }, "♻️ รีเซ็ตสถิติ");
    reset.addEventListener("click", () => {
      if (confirm("ลบความคืบหน้าทั้งหมด?")) {
        state.progress = {};
        saveProgress();
        render();
      }
    });
    main.appendChild(reset);
  }

  // -------- TOOLBAR --------
  function makeToolbar({ placeholder, count, total, onQuiz, hideQuiz }) {
    const bar = el("div", { class: "toolbar" });
    const search = el("input", { type: "text", placeholder, value: state.search });
    search.addEventListener("input", (e) => {
      state.search = e.target.value;
      render();
    });
    bar.appendChild(search);
    bar.appendChild(el("span", { class: "pill" }, `${count} / ${total} รายการ`));
    if (!hideQuiz && onQuiz) {
      const quizBtn = el("button", {}, "🎯 เริ่ม Quiz");
      quizBtn.addEventListener("click", onQuiz);
      bar.appendChild(quizBtn);
    }
    return bar;
  }

  function filterItems(arr, q, fields) {
    if (!q) return arr;
    const lo = q.toLowerCase();
    return arr.filter((it) => fields.some((f) => (it[f] || "").toString().toLowerCase().includes(lo)));
  }

  function shuffle(arr) {
    for (let i = arr.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [arr[i], arr[j]] = [arr[j], arr[i]];
    }
    return arr;
  }

  // -------- INIT --------
  function init() {
    // Level buttons
    $$(".lvl").forEach((b) => {
      if (b.dataset.level === state.level) b.classList.add("active");
      else b.classList.remove("active");
      b.addEventListener("click", () => {
        state.level = b.dataset.level;
        localStorage.setItem("jlpt-level", state.level);
        $$(".lvl").forEach((x) => x.classList.toggle("active", x === b));
        state.search = "";
        render();
      });
    });
    // Tab buttons
    $$(".tab").forEach((b) => {
      if (b.dataset.tab === state.tab) b.classList.add("active");
      else b.classList.remove("active");
      b.addEventListener("click", () => {
        state.tab = b.dataset.tab;
        localStorage.setItem("jlpt-tab", state.tab);
        $$(".tab").forEach((x) => x.classList.toggle("active", x === b));
        state.search = "";
        render();
      });
    });
    render();
  }

  document.addEventListener("DOMContentLoaded", init);
})();
