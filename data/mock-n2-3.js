// N2 full mock #3 — appends to MOCK_EXAMS.N2
window.MOCK_EXAMS = window.MOCK_EXAMS || {};
window.MOCK_EXAMS.N2 = window.MOCK_EXAMS.N2 || [];
window.MOCK_EXAMS.N2.push({
  title: "N2 ชุดเต็ม #3 — 言語知識・読解",
  sections: [
    {
      name: "問題1　漢字読み",
      instruction: "＿＿の ことばの 読み方を 選んで ください。",
      questions: [
        { q: "彼の態度には【一貫】性がある。", choices: ["いっかん", "いちかん", "いっがん", "いかん"], answer: 0, romaji: "ikkan", explanation: "一貫(いっかん) = สอดคล้องตลอด" },
        { q: "問題の【本質】を理解する。", choices: ["ほんしつ", "ほんしち", "ほんじつ", "もとしつ"], answer: 0, romaji: "honshitsu", explanation: "本質(ほんしつ) = แก่นแท้" },
        { q: "資源を【節約】する。", choices: ["せつやく", "せちやく", "せつやっく", "せやく"], answer: 0, romaji: "setsuyaku", explanation: "節約(せつやく) = การประหยัด" },
        { q: "意見が【一致】した。", choices: ["いっち", "いちち", "いっぢ", "いつち"], answer: 0, romaji: "icchi", explanation: "一致(いっち) = ตรงกัน/สอดคล้อง" },
        { q: "計画を【実行】に移す。", choices: ["じっこう", "じつこう", "じっごう", "じこう"], answer: 0, romaji: "jikkou", explanation: "実行(じっこう) = การลงมือทำ" },
      ],
    },
    {
      name: "問題2　表記",
      instruction: "＿＿の ことばは 漢字で どう 書きますか。",
      questions: [
        { q: "問題の【ほんしつ】を 見ぬく。", choices: ["本質", "本貫", "本実", "元質"], answer: 0, romaji: "honshitsu", explanation: "ほんしつ = 本質" },
        { q: "意見が【いっち】する。", choices: ["一致", "一値", "一至", "一治"], answer: 0, romaji: "icchi", explanation: "いっち = 一致" },
        { q: "エネルギーを【せつやく】する。", choices: ["節約", "節薬", "切約", "節訳"], answer: 0, romaji: "setsuyaku", explanation: "せつやく = 節約" },
        { q: "けいかくを【じっこう】する。", choices: ["実行", "実効", "実工", "実考"], answer: 0, romaji: "jikkou", explanation: "じっこう = 実行" },
        { q: "じょうきょうを【はんだん】する。", choices: ["判断", "判段", "半断", "判断"], answer: 0, romaji: "handan", explanation: "はんだん = 判断 (การตัดสิน)" },
      ],
    },
    {
      name: "問題3　語形成",
      instruction: "（　）に 入れる ものを 選んで ください。",
      questions: [
        { q: "この計画は実行（　）が高い。", choices: ["性", "化", "感", "的"], answer: 0, romaji: "sei", explanation: "実行性(じっこうせい) = ความเป็นไปได้ในการทำจริง" },
        { q: "彼は協調（　）がある。", choices: ["性", "化", "感", "風"], answer: 0, romaji: "sei", explanation: "協調性(きょうちょうせい) = ความสามารถในการร่วมมือ" },
        { q: "情報を（　）公開する。", choices: ["全", "未", "無", "非"], answer: 0, romaji: "zen", explanation: "全公開 = เปิดเผยทั้งหมด" },
        { q: "問題（　）の意識が大切だ。", choices: ["意識", "感", "化", "性"], answer: 0, romaji: "ishiki", explanation: "問題意識(もんだいいしき) = ความตระหนักในปัญหา" },
      ],
    },
    {
      name: "問題4　文脈規定",
      instruction: "（　）に 入れる ものを 選んで ください。",
      questions: [
        { q: "状況を見て、冷静に（　）する。", choices: ["判断", "我慢", "遠慮", "緊張"], answer: 0, romaji: "handan", explanation: "ดูสถานการณ์แล้วตัดสินอย่างมีสติ = はんだん" },
        { q: "むだを なくして、時間を（　）する。", choices: ["節約", "我慢", "遠慮", "心配"], answer: 0, romaji: "setsuyaku", explanation: "ลดความสูญเปล่า ประหยัดเวลา = せつやく" },
        { q: "みんなの意見が（　）した。", choices: ["一致", "矛盾", "影響", "傾向"], answer: 0, romaji: "icchi", explanation: "ความเห็นทุกคนตรงกัน = いっち" },
        { q: "問題の（　）を 見ぬく ことが 大切だ。", choices: ["本質", "結果", "原因", "影響"], answer: 0, romaji: "honshitsu", explanation: "มองให้เห็นแก่นแท้ของปัญหา = ほんしつ" },
        { q: "計画を（　）に 移す。", choices: ["実行", "我慢", "遠慮", "心配"], answer: 0, romaji: "jikkou", explanation: "นำแผนไปลงมือทำ = じっこうに うつす" },
        { q: "彼は何事にも（　）的だ。", choices: ["積極", "消極", "曖昧", "複雑"], answer: 0, romaji: "sekkyoku", explanation: "เขากระตือรือร้นในทุกเรื่อง = せっきょくてき" },
      ],
    },
    {
      name: "問題5　言い換え類義",
      instruction: "＿＿の ことばと だいたい 同じ 意味の ものを 選んで ください。",
      questions: [
        { q: "問題の【本質】を 見ぬく。", choices: ["いちばん大事な点", "ちいさな点", "あたらしい点", "ふるい点"], answer: 0, romaji: "ichiban daiji na ten", explanation: "本質 ≒ จุดสำคัญที่สุด/แก่นแท้" },
        { q: "意見が【一致】する。", choices: ["同じになる", "ちがう", "へる", "ふえる"], answer: 0, romaji: "onaji ni naru", explanation: "一致 ≒ ตรงกัน" },
        { q: "計画を【実行】する。", choices: ["じっさいに する", "中止する", "考える", "発表する"], answer: 0, romaji: "jissai ni suru", explanation: "実行 ≒ ลงมือทำจริง" },
        { q: "彼は【積極的】だ。", choices: ["自分から進んでやる", "なまける", "まつ", "ためらう"], answer: 0, romaji: "jibun kara susunde yaru", explanation: "積極的 ≒ ทำด้วยตัวเองอย่างกระตือรือร้น" },
      ],
    },
    {
      name: "問題6　用法",
      instruction: "つぎの ことばの 使い方が いちばん いい ものを 選んで ください。",
      questions: [
        { q: "「判断」", choices: ["状況を見て判断する。", "ごはんを判断する。", "山を判断する。", "雨が判断する。"], answer: 0, romaji: "handan", explanation: "判断 = ตัดสิน → 'ดูสถานการณ์แล้วตัดสิน'" },
        { q: "「見ぬく」", choices: ["うそを見ぬく。", "ごはんを見ぬく。", "山を見ぬく。", "空を見ぬく。"], answer: 0, romaji: "minuku", explanation: "見ぬく = มองทะลุ/รู้ทัน → 'รู้ทันคำโกหก'" },
        { q: "「移す」", choices: ["計画を実行に移す。", "ごはんを移す気持ち。", "雨を移す。", "空を移す。"], answer: 0, romaji: "utsusu", explanation: "実行に移す = ลงมือปฏิบัติ → 'นำแผนไปปฏิบัติ'" },
        { q: "「せっきょくてき」", choices: ["彼は積極的に意見を言う。", "積極的なごはん。", "積極的な雨。", "積極的な空。"], answer: 0, romaji: "sekkyokuteki", explanation: "積極的 = กระตือรือร้น → 'เขาออกความเห็นอย่างกระตือรือร้น'" },
      ],
    },
    {
      name: "問題7　文法形式の判断",
      instruction: "（　）に 入れる ものを 選んで ください。",
      questions: [
        { q: "経験を積む（　）、自信がついてきた。", choices: ["にしたがって", "について", "に対して", "によって"], answer: 0, romaji: "ni shitagatte", explanation: "～にしたがって = ยิ่ง...ก็ยิ่ง (เปลี่ยนตาม)" },
        { q: "彼のことだ（　）、きっと成功するだろう。", choices: ["から", "ので", "のに", "ても"], answer: 0, romaji: "kara", explanation: "～ことだから = เพราะเป็นเขา (คาดเดาจากนิสัย)" },
        { q: "調べれば調べる（　）、わからなくなる。", choices: ["ほど", "より", "だけ", "まで"], answer: 0, romaji: "hodo", explanation: "～ば～ほど = ยิ่ง...ยิ่ง" },
        { q: "彼は忙しい（　）、約束を守る。", choices: ["にもかかわらず", "おかげで", "ために", "ように"], answer: 0, romaji: "ni mo kakawarazu", explanation: "～にもかかわらず = ทั้งๆ ที่" },
        { q: "この問題は専門家（　）難しい。", choices: ["にとっても", "について", "によって", "として"], answer: 0, romaji: "ni totte mo", explanation: "～にとっても = แม้สำหรับ...ก็" },
        { q: "やると 決めた（　）、最後までやる。", choices: ["以上", "ところ", "ばかり", "とたん"], answer: 0, romaji: "ijou", explanation: "～以上(は) = ในเมื่อ...ก็ต้อง" },
        { q: "失敗を（　）、成長できる。", choices: ["通じて", "こめて", "めぐって", "もって"], answer: 0, romaji: "tsuujite", explanation: "～を通じて = ผ่านทาง (เติบโตผ่านความล้มเหลว)" },
      ],
    },
    {
      name: "問題8　文の組み立て",
      instruction: "★ に 入る ものは どれですか。",
      questions: [
        { q: "経験を　＿　＿　★　＿　ついた。（1.したがって　2.積む　3.に　4.自信が）", choices: ["積む", "に", "したがって", "自信が"], answer: 2, romaji: "ตำแหน่ง★ = したがって", explanation: "เรียง: 積む に したがって 自信が → ★(ที่ 3) = したがって" },
        { q: "やると　＿　＿　★　＿　やる。（1.以上　2.決めた　3.まで　4.最後）", choices: ["決めた", "以上", "最後", "まで"], answer: 1, romaji: "ตำแหน่ง★ = 以上", explanation: "เรียง: 決めた 以上 最後 まで やる → ★(ที่ 3) = 以上" },
        { q: "失敗　＿　＿　★　＿　できる。（1.を　2.成長　3.通じて　4.こそ）→ 失敗を通じてこそ成長", choices: ["を", "通じて", "こそ", "成長"], answer: 1, romaji: "ตำแหน่ง★ = 通じて", explanation: "เรียง: 失敗 を 通じて こそ 成長 → ★(ที่ 3) = 通じて" },
      ],
    },
    {
      name: "問題9　読解（中文）",
      instruction: "つぎの 文章を 読んで、質問に 答えて ください。",
      passage: "「失敗は成功のもと」という言葉がある。失敗すると、多くの人はがっかりして、自信をなくしてしまう。しかし、失敗には大切な意味がある。なぜ失敗したのかを考えることで、次に何をすべきかが見えてくるからだ。実際、成功している人ほど、たくさんの失敗を経験している。大事なのは、失敗を恐れず、そこから学ぶ姿勢を持つことである。",
      questions: [
        { q: "「失敗は成功のもと」とは どういう 意味ですか。", choices: ["失敗は成功につながる", "失敗は意味がない", "成功は簡単だ", "失敗は恐ろしい"], answer: 0, romaji: "seikou ni tsunagaru", explanation: "失敗から学べば成功につながる" },
        { q: "失敗から 何が 見えて くると 言って いますか。", choices: ["次に何をすべきか", "だれが悪いか", "いつ終わるか", "どこへ行くか"], answer: 0, romaji: "tsugi ni nani o subeki ka", explanation: "'次に何をすべきかが見えてくる'" },
        { q: "成功している人の 特徴は 何ですか。", choices: ["失敗をしない", "たくさんの失敗を経験している", "努力をしない", "運がいい"], answer: 1, romaji: "takusan no shippai o keiken", explanation: "'成功している人ほど、たくさんの失敗を経験'" },
      ],
    },
  ],
});
