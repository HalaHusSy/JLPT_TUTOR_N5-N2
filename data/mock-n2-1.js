// N2 full mock #1 — resets MOCK_EXAMS.N2 (drop legacy flat mock), then -2/-3 append.
window.MOCK_EXAMS = window.MOCK_EXAMS || {};
window.MOCK_EXAMS.N2 = [];
window.MOCK_EXAMS.N2.push({
  title: "N2 ชุดเต็ม #1 — 言語知識・読解",
  sections: [
    {
      name: "問題1　漢字読み",
      instruction: "＿＿の ことばの 読み方を 選んで ください。",
      questions: [
        { q: "彼の発言には【矛盾】がある。", choices: ["むじゅん", "ぼうじゅん", "むじゅ", "むとん"], answer: 0, romaji: "mujun", explanation: "矛盾(むじゅん) = ความขัดแย้งในตัวเอง" },
        { q: "最近、若者の【傾向】が変わってきた。", choices: ["けいこう", "けいこ", "きょうこう", "けいごう"], answer: 0, romaji: "keikou", explanation: "傾向(けいこう) = แนวโน้ม" },
        { q: "状況を正確に【把握】する。", choices: ["はあく", "はおく", "はく", "はあ"], answer: 0, romaji: "haaku", explanation: "把握(はあく) = เข้าใจ/จับใจความ" },
        { q: "社会に【貢献】したい。", choices: ["こうけん", "こうげん", "ごうけん", "こけん"], answer: 0, romaji: "kouken", explanation: "貢献(こうけん) = การมีส่วนช่วย" },
        { q: "目標を【達成】した。", choices: ["たっせい", "たつせい", "だっせい", "たっせ"], answer: 0, romaji: "tassei", explanation: "達成(たっせい) = บรรลุเป้าหมาย" },
      ],
    },
    {
      name: "問題2　表記",
      instruction: "＿＿の ことばは 漢字で どう 書きますか。",
      questions: [
        { q: "けいざいの【かいぜん】を めざす。", choices: ["改善", "改前", "回善", "改繕"], answer: 0, romaji: "kaizen", explanation: "かいぜん = 改善 (การปรับปรุง)" },
        { q: "あたらしい せいさくを【じっし】する。", choices: ["実施", "実斯", "実旋", "実拖"], answer: 0, romaji: "jisshi", explanation: "じっし = 実施 (ดำเนินการ)" },
        { q: "問題のかいけつに【こうけん】する。", choices: ["貢献", "功献", "貢憲", "貢験"], answer: 0, romaji: "kouken", explanation: "こうけん = 貢献" },
        { q: "計画が【じゅんちょう】に すすむ。", choices: ["順調", "順帳", "純調", "順張"], answer: 0, romaji: "junchou", explanation: "じゅんちょう = 順調 (ราบรื่น)" },
        { q: "りょうこくの【こうりゅう】が さかんだ。", choices: ["交流", "交留", "効流", "校流"], answer: 0, romaji: "kouryuu", explanation: "こうりゅう = 交流 (การแลกเปลี่ยน)" },
      ],
    },
    {
      name: "問題3　語形成",
      instruction: "（　）に 入れる ものを 選んで ください。",
      questions: [
        { q: "この問題は解決（　）だ。", choices: ["済み", "中", "前", "後"], answer: 0, romaji: "zumi", explanation: "～済み = ...เสร็จแล้ว (解決済み = แก้แล้ว)" },
        { q: "（　）経験の人でも大丈夫です。", choices: ["未", "不", "無", "非"], answer: 0, romaji: "mi", explanation: "未経験(みけいけん) = ยังไม่มีประสบการณ์" },
        { q: "この計画は実現（　）が高い。", choices: ["性", "化", "的", "感"], answer: 0, romaji: "sei", explanation: "実現性(じつげんせい) = ความเป็นไปได้ในการเกิดจริง" },
        { q: "彼は積極（　）に参加する。", choices: ["的", "性", "化", "感"], answer: 0, romaji: "teki", explanation: "積極的(せっきょくてき) = อย่างกระตือรือร้น" },
      ],
    },
    {
      name: "問題4　文脈規定",
      instruction: "（　）に 入れる ものを 選んで ください。",
      questions: [
        { q: "彼の説明は（　）で、よくわからない。", choices: ["あいまい", "めいかく", "せいかく", "じゅんちょう"], answer: 0, romaji: "aimai", explanation: "คำอธิบายคลุมเครือ = あいまい" },
        { q: "問題を（　）に把握する必要がある。", choices: ["正確", "曖昧", "簡単", "複雑"], answer: 0, romaji: "seikaku", explanation: "เข้าใจปัญหาอย่างแม่นยำ = せいかく(に)" },
        { q: "彼は仕事に（　）取り組んでいる。", choices: ["真剣に", "適当に", "曖昧に", "勝手に"], answer: 0, romaji: "shinken ni", explanation: "ทุ่มเทกับงานอย่างจริงจัง = しんけんに" },
        { q: "計画は（　）どおりに進んでいる。", choices: ["予定", "結果", "原因", "影響"], answer: 0, romaji: "yotei", explanation: "เป็นไปตามกำหนดการ = よていどおり" },
        { q: "経済の発展に大きく（　）した。", choices: ["貢献", "我慢", "遠慮", "心配"], answer: 0, romaji: "kouken", explanation: "มีส่วนช่วยพัฒนาเศรษฐกิจ = こうけん" },
        { q: "彼の意見には（　）がある。前と言っていることが違う。", choices: ["矛盾", "傾向", "影響", "結果"], answer: 0, romaji: "mujun", explanation: "ความเห็นขัดแย้งในตัว = むじゅん" },
      ],
    },
    {
      name: "問題5　言い換え類義",
      instruction: "＿＿の ことばと だいたい 同じ 意味の ものを 選んで ください。",
      questions: [
        { q: "彼の説明は【明確】だ。", choices: ["はっきりしている", "あいまいだ", "ながい", "むずかしい"], answer: 0, romaji: "hakkiri shite iru", explanation: "明確 ≒ はっきり (ชัดเจน)" },
        { q: "状況を【把握】した。", choices: ["理解した", "わすれた", "むしした", "へんこうした"], answer: 0, romaji: "rikai shita", explanation: "把握 ≒ 理解 (เข้าใจ)" },
        { q: "計画は【順調】だ。", choices: ["うまくいっている", "おくれている", "とまっている", "むずかしい"], answer: 0, romaji: "umaku itte iru", explanation: "順調 ≒ ราบรื่น/ไปได้ดี" },
        { q: "彼は【真剣】に考えている。", choices: ["まじめに", "てきとうに", "かんたんに", "あいまいに"], answer: 0, romaji: "majime ni", explanation: "真剣 ≒ まじめ/จริงจัง" },
      ],
    },
    {
      name: "問題6　用法",
      instruction: "つぎの ことばの 使い方が いちばん いい ものを 選んで ください。",
      questions: [
        { q: "「把握」", choices: ["現状を正確に把握する。", "ごはんを把握する。", "山を把握する。", "空を把握する。"], answer: 0, romaji: "haaku", explanation: "把握 = เข้าใจ/จับสถานการณ์ → 'เข้าใจสถานการณ์ปัจจุบันอย่างแม่นยำ'" },
        { q: "「めざす」", choices: ["合格をめざして勉強する。", "ごはんをめざす。", "雨をめざす。", "空をめざす。"], answer: 0, romaji: "mezasu", explanation: "めざす = มุ่งสู่ → 'เรียนเพื่อมุ่งสอบให้ผ่าน'" },
        { q: "「ささえる」", choices: ["家族を経済的にささえる。", "山をささえる気持ち。", "雨をささえる。", "空をささえる。"], answer: 0, romaji: "sasaeru", explanation: "ささえる = ค้ำจุน/สนับสนุน → 'ค้ำจุนครอบครัวด้านเศรษฐกิจ'" },
        { q: "「のうりょく」", choices: ["彼は高いのうりょくを持っている。", "のうりょくを食べる。", "のうりょくが降る。", "のうりょくに行く。"], answer: 0, romaji: "nouryoku", explanation: "のうりょく = ความสามารถ → 'เขามีความสามารถสูง'" },
      ],
    },
    {
      name: "問題7　文法形式の判断",
      instruction: "（　）に 入れる ものを 選んで ください。",
      questions: [
        { q: "雨（　）、試合は行われた。", choices: ["にもかかわらず", "によって", "について", "として"], answer: 0, romaji: "ni mo kakawarazu", explanation: "～にもかかわらず = ทั้งๆ ที่" },
        { q: "家を出た（　）、雨が降ってきた。", choices: ["とたんに", "うちに", "ところに", "ばかりに"], answer: 0, romaji: "totan ni", explanation: "～たとたんに = ทันทีที่" },
        { q: "若い（　）、いろいろな経験をしたい。", choices: ["うちに", "あいだに", "ところに", "ばかりに"], answer: 0, romaji: "uchi ni", explanation: "～うちに = ในระหว่างที่ยัง..." },
        { q: "私（　）、家族が一番大切だ。", choices: ["にとって", "について", "によって", "に対して"], answer: 0, romaji: "ni totte", explanation: "～にとって = สำหรับ" },
        { q: "時間が経つのは早い（　）。", choices: ["ものだ", "ことだ", "わけだ", "はずだ"], answer: 0, romaji: "mono da", explanation: "～ものだ = เป็นเรื่องธรรมดาที่..." },
        { q: "値段の（　）、味はいい。", choices: ["わりに", "ために", "とおりに", "うちに"], answer: 0, romaji: "wari ni", explanation: "～わりに = เมื่อเทียบกับ" },
        { q: "彼の協力（　）、成功できた。", choices: ["なしには", "までには", "ところに", "ばかりに"], answer: 0, romaji: "nashi ni wa", explanation: "～なしには = ถ้าไม่มี...ก็(ไม่ได้)" },
      ],
    },
    {
      name: "問題8　文の組み立て",
      instruction: "★ に 入る ものは どれですか。",
      questions: [
        { q: "雨　＿　＿　★　＿　行われた。（1.も　2.に　3.かかわらず　4.試合は）", choices: ["に", "も", "かかわらず", "試合は"], answer: 2, romaji: "ตำแหน่ง★ = かかわらず", explanation: "เรียง: 雨 に も かかわらず 試合は → ★(ที่ 3) = かかわらず" },
        { q: "若い　＿　＿　★　＿　したい。（1.うちに　2.経験　3.いろいろな　4.を）", choices: ["うちに", "いろいろな", "経験", "を"], answer: 2, romaji: "ตำแหน่ง★ = 経験", explanation: "เรียง: うちに いろいろな 経験 を したい → ★(ที่ 3) = 経験" },
        { q: "彼の　＿　＿　★　＿　できた。（1.成功　2.なしには　3.協力　4.は）→ 協力なしには成功はできなかった", choices: ["協力", "なしには", "成功", "は"], answer: 2, romaji: "ตำแหน่ง★ = 成功", explanation: "เรียง: 協力 なしには 成功 は → ★(ที่ 3) = 成功" },
      ],
    },
    {
      name: "問題9　読解（中文）",
      instruction: "つぎの 文章を 読んで、質問に 答えて ください。",
      passage: "「時間がない」という言葉を、私たちはよく口にする。しかし、本当に時間がないのだろうか。実は、時間の使い方が下手なだけかもしれない。たとえば、スマートフォンを見る時間を一日一時間減らせば、一週間で七時間も生まれる。大切なのは、何に時間を使うかを意識することだ。限られた時間を有効に使うために、まず自分が一日をどう過ごしているか、書き出してみるとよい。",
      questions: [
        { q: "筆者は「時間がない」のは なぜだと 言って いますか。", choices: ["仕事が多いから", "時間の使い方が下手だから", "睡眠が足りないから", "友達が多いから"], answer: 1, romaji: "tsukaikata ga heta", explanation: "'時間の使い方が下手なだけかもしれない'" },
        { q: "スマホの時間を 一日一時間 減らすと、一週間で どうなりますか。", choices: ["三時間生まれる", "五時間生まれる", "七時間生まれる", "十時間生まれる"], answer: 2, romaji: "nana-jikan", explanation: "'一週間で七時間も生まれる'" },
        { q: "筆者が すすめて いる ことは 何ですか。", choices: ["スマホを捨てる", "一日の過ごし方を書き出す", "早く寝る", "仕事を減らす"], answer: 1, romaji: "kakidasu", explanation: "'一日をどう過ごしているか、書き出してみるとよい'" },
      ],
    },
  ],
});
