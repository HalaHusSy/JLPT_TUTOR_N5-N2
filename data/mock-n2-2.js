// N2 full mock #2 — appends to MOCK_EXAMS.N2
window.MOCK_EXAMS = window.MOCK_EXAMS || {};
window.MOCK_EXAMS.N2 = window.MOCK_EXAMS.N2 || [];
window.MOCK_EXAMS.N2.push({
  title: "N2 ชุดเต็ม #2 — 言語知識・読解",
  sections: [
    {
      name: "問題1　漢字読み",
      instruction: "＿＿の ことばの 読み方を 選んで ください。",
      questions: [
        { q: "新しい技術を【導入】する。", choices: ["どうにゅう", "どうにゅ", "どにゅう", "とうにゅう"], answer: 0, romaji: "dounyuu", explanation: "導入(どうにゅう) = การนำเข้า/นำมาใช้" },
        { q: "会議で意見を【交換】する。", choices: ["こうかん", "こうがん", "ごうかん", "こかん"], answer: 0, romaji: "koukan", explanation: "交換(こうかん) = การแลกเปลี่ยน" },
        { q: "彼の能力を高く【評価】する。", choices: ["ひょうか", "ひょうが", "ぴょうか", "へいか"], answer: 0, romaji: "hyouka", explanation: "評価(ひょうか) = การประเมิน" },
        { q: "この製品は品質が【優れて】いる。", choices: ["すぐれて", "ゆうれて", "おくれて", "まされて"], answer: 0, romaji: "sugurete", explanation: "優れる(すぐれる) = ดีเด่น/เหนือกว่า" },
        { q: "問題を【検討】する。", choices: ["けんとう", "けんと", "げんとう", "けんどう"], answer: 0, romaji: "kentou", explanation: "検討(けんとう) = การพิจารณา" },
      ],
    },
    {
      name: "問題2　表記",
      instruction: "＿＿の ことばは 漢字で どう 書きますか。",
      questions: [
        { q: "けいけんを【ゆうこう】に いかす。", choices: ["有効", "友好", "有功", "優好"], answer: 0, romaji: "yuukou", explanation: "ゆうこう = 有効 (มีประสิทธิภาพ)" },
        { q: "この方法は【こうりつ】が いい。", choices: ["効率", "効律", "高率", "効卒"], answer: 0, romaji: "kouritsu", explanation: "こうりつ = 効率 (ประสิทธิภาพ)" },
        { q: "じょうほうを【ぶんせき】する。", choices: ["分析", "分折", "分柝", "文析"], answer: 0, romaji: "bunseki", explanation: "ぶんせき = 分析 (วิเคราะห์)" },
        { q: "計画を【しゅうせい】する。", choices: ["修正", "収正", "修整", "終正"], answer: 0, romaji: "shuusei", explanation: "しゅうせい = 修正 (แก้ไข)" },
        { q: "りえきが【ぞうか】した。", choices: ["増加", "増価", "造加", "贈加"], answer: 0, romaji: "zouka", explanation: "ぞうか = 増加 (การเพิ่มขึ้น)" },
      ],
    },
    {
      name: "問題3　語形成",
      instruction: "（　）に 入れる ものを 選んで ください。",
      questions: [
        { q: "この資料は確認（　）です。", choices: ["済み", "中", "前", "風"], answer: 0, romaji: "zumi", explanation: "確認済み = ตรวจสอบแล้ว" },
        { q: "彼は責任（　）が強い。", choices: ["感", "性", "化", "的"], answer: 0, romaji: "kan", explanation: "責任感(せきにんかん) = ความรับผิดชอบ" },
        { q: "国際（　）な視点が必要だ。", choices: ["的", "性", "化", "感"], answer: 0, romaji: "teki", explanation: "国際的(こくさいてき) = ระดับนานาชาติ" },
        { q: "情報を（　）公開する。", choices: ["再", "未", "不", "無"], answer: 0, romaji: "sai", explanation: "再公開(さいこうかい) = เปิดเผยอีกครั้ง" },
      ],
    },
    {
      name: "問題4　文脈規定",
      instruction: "（　）に 入れる ものを 選んで ください。",
      questions: [
        { q: "データを（　）して、結論を出す。", choices: ["分析", "我慢", "遠慮", "心配"], answer: 0, romaji: "bunseki", explanation: "วิเคราะห์ข้อมูลแล้วสรุป = ぶんせき" },
        { q: "この方法は（　）がいいので、時間が節約できる。", choices: ["効率", "矛盾", "傾向", "影響"], answer: 0, romaji: "kouritsu", explanation: "วิธีนี้มีประสิทธิภาพ ประหยัดเวลา = こうりつ" },
        { q: "計画に問題があれば、すぐに（　）する。", choices: ["修正", "我慢", "遠慮", "緊張"], answer: 0, romaji: "shuusei", explanation: "ถ้าแผนมีปัญหาก็แก้ไขทันที = しゅうせい" },
        { q: "彼の意見を高く（　）している。", choices: ["評価", "把握", "達成", "実施"], answer: 0, romaji: "hyouka", explanation: "ประเมินความเห็นเขาสูง = ひょうか" },
        { q: "新しい制度を（　）した。", choices: ["導入", "我慢", "遠慮", "心配"], answer: 0, romaji: "dounyuu", explanation: "นำระบบใหม่มาใช้ = どうにゅう" },
        { q: "売り上げが（　）に増えている。", choices: ["順調", "曖昧", "複雑", "単純"], answer: 0, romaji: "junchou", explanation: "ยอดขายเพิ่มอย่างราบรื่น = じゅんちょう" },
      ],
    },
    {
      name: "問題5　言い換え類義",
      instruction: "＿＿の ことばと だいたい 同じ 意味の ものを 選んで ください。",
      questions: [
        { q: "この製品は【優れて】いる。", choices: ["すばらしい", "つまらない", "ふるい", "やすい"], answer: 0, romaji: "subarashii", explanation: "優れる ≒ すばらしい (ยอดเยี่ยม)" },
        { q: "計画を【検討】する。", choices: ["よく考える", "中止する", "実行する", "発表する"], answer: 0, romaji: "yoku kangaeru", explanation: "検討 ≒ พิจารณา/คิดให้รอบคอบ" },
        { q: "彼は【責任感】が強い。", choices: ["きちんと やる", "なまける", "わすれる", "おくれる"], answer: 0, romaji: "kichinto yaru", explanation: "責任感が強い ≒ ทำงานอย่างมีความรับผิดชอบ" },
        { q: "利益が【増加】した。", choices: ["ふえた", "へった", "かわらない", "なくなった"], answer: 0, romaji: "fueta", explanation: "増加 ≒ ふえる (เพิ่มขึ้น)" },
      ],
    },
    {
      name: "問題6　用法",
      instruction: "つぎの ことばの 使い方が いちばん いい ものを 選んで ください。",
      questions: [
        { q: "「検討」", choices: ["この案を検討してから決めます。", "ごはんを検討する。", "山を検討する。", "空を検討する。"], answer: 0, romaji: "kentou", explanation: "検討 = พิจารณา → 'พิจารณาข้อเสนอนี้ก่อนตัดสินใจ'" },
        { q: "「いかす」", choices: ["経験を仕事にいかす。", "ごはんをいかす。", "雨をいかす。", "空をいかす。"], answer: 0, romaji: "ikasu", explanation: "いかす = ใช้ให้เกิดประโยชน์ → 'ใช้ประสบการณ์กับงาน'" },
        { q: "「えがく」", choices: ["将来の夢をえがく。", "ごはんをえがく。", "雨をえがく。", "山をえがく。"], answer: 0, romaji: "egaku", explanation: "えがく = วาด/วาดภาพในใจ → 'วาดภาพความฝันอนาคต'" },
        { q: "「あらゆる」", choices: ["あらゆる方法を試した。", "あらゆるを食べる。", "あらゆるに行く。", "あらゆるが降る。"], answer: 0, romaji: "arayuru", explanation: "あらゆる = ทุกๆ → 'ลองทุกวิธีแล้ว'" },
      ],
    },
    {
      name: "問題7　文法形式の判断",
      instruction: "（　）に 入れる ものを 選んで ください。",
      questions: [
        { q: "現状を（　）、計画を立てた。", choices: ["踏まえて", "こめて", "むけて", "つうじて"], answer: 0, romaji: "fumaete", explanation: "～を踏まえて = อิงจาก/โดยพิจารณา" },
        { q: "努力した（　）、結果が出なかった。", choices: ["ものの", "ものを", "ものなら", "ものだから"], answer: 0, romaji: "mono no", explanation: "～ものの = ทั้งๆ ที่...แต่" },
        { q: "彼の話を聞く（　）、感動した。", choices: ["につれて", "にとって", "について", "に対して"], answer: 0, romaji: "ni tsurete", explanation: "～につれて = ยิ่ง...ก็ยิ่ง (เปลี่ยนตาม)" },
        { q: "問題が解決し（　）。安心した。", choices: ["つつある", "がちだ", "かねない", "ぎみだ"], answer: 0, romaji: "tsutsu aru", explanation: "～つつある = กำลัง...ไปเรื่อยๆ (กำลังคลี่คลาย)" },
        { q: "成功する（　）、努力を続ける。", choices: ["ために", "ように", "とおりに", "ところに"], answer: 1, romaji: "you ni", explanation: "～ように = เพื่อให้ (ใช้กับกริยาไม่ตั้งใจ/potential)" },
        { q: "彼は来る（　）。連絡があった。", choices: ["にちがいない", "わけがない", "はずがない", "どころではない"], answer: 0, romaji: "ni chigai nai", explanation: "～にちがいない = ต้อง...แน่ๆ" },
        { q: "雨が降り（　）、出かけた。", choices: ["そうなのに", "そうだから", "そうなので", "そうだし"], answer: 0, romaji: "sou na noni", explanation: "～そうなのに = ทั้งๆ ที่ดูเหมือนจะ..." },
      ],
    },
    {
      name: "問題8　文の組み立て",
      instruction: "★ に 入る ものは どれですか。",
      questions: [
        { q: "現状を　＿　＿　★　＿　立てた。（1.て　2.踏まえ　3.計画を　4.改めて）", choices: ["踏まえ", "て", "改めて", "計画を"], answer: 0, romaji: "ตำแหน่ง★ = 踏まえ", explanation: "เรียง: 踏まえ て 改めて 計画を 立てた → ★(ที่ 3) = 踏まえ" },
        { q: "努力した　＿　＿　★　＿　なかった。（1.の　2.出　3.もの　4.結果が）", choices: ["もの", "の", "結果が", "出"], answer: 0, romaji: "ตำแหน่ง★ = もの", explanation: "เรียง: もの の 結果が 出なかった → ★(ที่ 3) = もの (ทั้งที่พยายามแต่ไม่ได้ผล)" },
        { q: "彼の話を　＿　＿　★　＿　感動した。（1.つれて　2.聞く　3.に　4.だんだん）", choices: ["聞く", "に", "つれて", "だんだん"], answer: 2, romaji: "ตำแหน่ง★ = つれて", explanation: "เรียง: 聞く に つれて だんだん → ★(ที่ 3) = つれて" },
      ],
    },
    {
      name: "問題9　読解（中文）",
      instruction: "つぎの 文章を 読んで、質問に 答えて ください。",
      passage: "現代社会では、情報があふれている。インターネットを開けば、世界中のニュースが一瞬で手に入る。しかし、その情報がすべて正しいとは限らない。中には、間違った情報や、わざと人をだまそうとする情報も含まれている。だからこそ、私たちは受け取った情報をそのまま信じるのではなく、本当に正しいのかを自分で確かめる力を身につける必要がある。",
      questions: [
        { q: "現代社会の特徴は 何だと 言って いますか。", choices: ["情報が少ない", "情報があふれている", "ニュースがない", "インターネットがない"], answer: 1, romaji: "jouhou ga afurete iru", explanation: "'情報があふれている'" },
        { q: "情報について、筆者は 何に 注意すべきだと 言って いますか。", choices: ["すべて信じる", "正しいか自分で確かめる", "全部無視する", "速く読む"], answer: 1, romaji: "jibun de tashikameru", explanation: "'本当に正しいのかを自分で確かめる力'" },
        { q: "筆者が 必要だと 言って いる 力は 何ですか。", choices: ["速く読む力", "情報を確かめる力", "たくさん覚える力", "速く書く力"], answer: 1, romaji: "tashikameru chikara", explanation: "'確かめる力を身につける必要がある'" },
      ],
    },
  ],
});
