// N4 full mock #4 — appends to MOCK_EXAMS.N4
window.MOCK_EXAMS = window.MOCK_EXAMS || {};
window.MOCK_EXAMS.N4 = window.MOCK_EXAMS.N4 || [];
window.MOCK_EXAMS.N4.push({
  title: "N4 ชุดเต็ม #4 — 言語知識・読解",
  sections: [
    {
      name: "問題1　漢字読み",
      instruction: "＿＿の ことばの よみかたを えらんで ください。",
      questions: [
        { q: "ぎんこうで お金を 【両替】する。", choices: ["りょうがえ", "りょうかえ", "りょがえ", "りょうがい"], answer: 0, romaji: "ryougae", explanation: "両替(りょうがえ) = แลกเงิน" },
        { q: "この みせは 【品物】が おおい。", choices: ["しなもの", "ひんぶつ", "しなぶつ", "ひんもの"], answer: 0, romaji: "shinamono", explanation: "品物(しなもの) = สินค้า/สิ่งของ" },
        { q: "【特】に もんだいは ありません。", choices: ["とく", "どく", "とくべつ", "ところ"], answer: 0, romaji: "toku", explanation: "特に(とくに) = โดยเฉพาะ" },
        { q: "あした 【予定】が あります。", choices: ["よてい", "よじょう", "ようてい", "よって"], answer: 0, romaji: "yotei", explanation: "予定(よてい) = แผนการ" },
        { q: "かれは 【正直】な ひとだ。", choices: ["しょうじき", "せいちょく", "しょうちょく", "せいじき"], answer: 0, romaji: "shoujiki", explanation: "正直(しょうじき) = ซื่อสัตย์" },
        { q: "へやを 【整理】する。", choices: ["せいり", "しょうり", "せり", "せいりょう"], answer: 0, romaji: "seiri", explanation: "整理(せいり) = จัดระเบียบ" },
      ],
    },
    {
      name: "問題2　表記",
      instruction: "＿＿の ことばは かんじで どう かきますか。",
      questions: [
        { q: "ともだちと 【やくそく】した。", choices: ["約束", "約則", "予束", "約速"], answer: 0, romaji: "yakusoku", explanation: "やくそく = 約束" },
        { q: "この もんだいは 【かんたん】だ。", choices: ["簡単", "完単", "簡短", "間単"], answer: 0, romaji: "kantan", explanation: "かんたん = 簡単 (ง่าย)" },
        { q: "でんしゃが 【しゅっぱつ】する。", choices: ["出発", "出初", "出登", "出発"], answer: 0, romaji: "shuppatsu", explanation: "しゅっぱつ = 出発" },
        { q: "にもつを 【はこぶ】。", choices: ["運ぶ", "連ぶ", "軍ぶ", "運ぷ"], answer: 0, romaji: "hakobu", explanation: "はこぶ = 運ぶ (ขน)" },
        { q: "けいけんが 【ひつよう】だ。", choices: ["必要", "心要", "必用", "比要"], answer: 0, romaji: "hitsuyou", explanation: "ひつよう = 必要 (จำเป็น)" },
      ],
    },
    {
      name: "問題3　文脈規定",
      instruction: "（　）に いれる ものを えらんで ください。",
      questions: [
        { q: "この きかいの つかいかたを（　）して ください。", choices: ["せつめい", "そうだん", "けんか", "やくそく"], answer: 0, romaji: "setsumei", explanation: "อธิบายวิธีใช้เครื่อง = せつめい" },
        { q: "あぶないので、（　）して ください。", choices: ["ちゅうい", "あんしん", "しんぱい", "じゃま"], answer: 0, romaji: "chuui", explanation: "อันตราย จึงให้ระวัง = ちゅうい" },
        { q: "じかんを（　）して つかいたい。", choices: ["たいせつに", "ていねいに", "じょうずに", "しずかに"], answer: 0, romaji: "taisetsu ni", explanation: "ใช้เวลาอย่างเห็นคุณค่า = たいせつに" },
        { q: "コンサートの チケットを（　）した。", choices: ["よやく", "そうじ", "せんたく", "けんか"], answer: 0, romaji: "yoyaku", explanation: "จองตั๋ว = よやく" },
        { q: "へやが きたないので、（　）した。", choices: ["せいり", "けいかく", "れんらく", "しつもん"], answer: 0, romaji: "seiri", explanation: "ห้องสกปรกจึงจัดระเบียบ = せいり" },
        { q: "やくそくの じかんに（　）。", choices: ["まにあった", "おくれた", "つかれた", "こまった"], answer: 0, romaji: "ma ni atta", explanation: "ทันเวลานัด = まにあう" },
      ],
    },
    {
      name: "問題4　言い換え類義",
      instruction: "＿＿の ぶんと だいたい おなじ いみの ものを えらんで ください。",
      questions: [
        { q: "この みせは いつも 【こんで】 いる。", choices: ["ひとが おおい", "ひとが すくない", "やすい", "とおい"], answer: 0, romaji: "hito ga ooi", explanation: "こんで いる ≒ คนเยอะ" },
        { q: "かれは 【しょうじき】だ。", choices: ["うそを つかない", "うそを つく", "しんせつだ", "げんきだ"], answer: 0, romaji: "uso o tsukanai", explanation: "しょうじき ≒ ไม่โกหก" },
        { q: "へやを 【せいり】した。", choices: ["かたづけた", "よごした", "ひろげた", "あけた"], answer: 0, romaji: "katazuketa", explanation: "せいり ≒ かたづける (จัดระเบียบ)" },
        { q: "この もんだいは 【ふくざつ】だ。", choices: ["むずかしい", "かんたんだ", "やさしい", "あたらしい"], answer: 0, romaji: "muzukashii", explanation: "ふくざつ ≒ ซับซ้อน/ยาก" },
      ],
    },
    {
      name: "問題5　用法",
      instruction: "つぎの ことばの つかいかたが いちばん いい ものを えらんで ください。",
      questions: [
        { q: "「よやく」", choices: ["レストランを よやくする。", "ごはんを よやくする。", "やまを よやくする。", "あめを よやくする。"], answer: 0, romaji: "yoyaku", explanation: "よやく = จอง → 'จองร้านอาหาร'" },
        { q: "「せいり」", choices: ["つくえの 上を せいりする。", "ごはんを せいりする。", "あめを せいりする。", "そらを せいりする。"], answer: 0, romaji: "seiri", explanation: "せいり = จัดระเบียบ → 'จัดบนโต๊ะ'" },
        { q: "「まにあう」", choices: ["はしって、でんしゃに まにあった。", "ごはんに まにあう。", "やまに まにあう。", "そらに まにあう。"], answer: 0, romaji: "ma ni au", explanation: "まにあう = ทันเวลา → 'วิ่งจนทันรถไฟ'" },
        { q: "「とくに」", choices: ["くだものが すき、とくに りんごが すき。", "とくにを たべる。", "とくにに いく。", "とくにが ふる。"], answer: 0, romaji: "toku ni", explanation: "とくに = โดยเฉพาะ → 'ชอบผลไม้ โดยเฉพาะแอปเปิ้ล'" },
      ],
    },
    {
      name: "問題6　文法形式の判断",
      instruction: "（　）に いれる ものを えらんで ください。",
      questions: [
        { q: "ともだちに にほんごを おしえて（　）。", choices: ["もらいました", "あげました", "やりました", "いきました"], answer: 0, romaji: "moraimashita", explanation: "～て もらう = ได้รับการสอน (เพื่อนสอนให้)" },
        { q: "あした は あめが ふる（　）です。", choices: ["そう", "ば", "たり", "ながら"], answer: 0, romaji: "sou", explanation: "～そうだ (ฟังมา) = ได้ยินว่า" },
        { q: "へやを きれいに（　）から、ねます。", choices: ["して", "する", "した", "しない"], answer: 0, romaji: "shite", explanation: "～てから = หลังจาก...แล้วจึง" },
        { q: "この くすりを のむ（　）、よく なります。", choices: ["と", "ば", "たら", "なら"], answer: 0, romaji: "to", explanation: "～と = พอ...ก็ (ผลที่เกิดแน่นอน)" },
        { q: "にほんへ いく まえに、にほんごを べんきょうし（　）。", choices: ["ます", "ました", "ています", "ません"], answer: 0, romaji: "masu", explanation: "～まえに + ปัจจุบัน (เรียนก่อนไป)" },
        { q: "あの レストランは たかい（　）、おいしくない。", choices: ["のに", "ので", "から", "ように"], answer: 0, romaji: "noni", explanation: "～のに = ทั้งๆ ที่ (แพงแต่ไม่อร่อย)" },
        { q: "もう おそいので、かえった（　）が いい。", choices: ["ほう", "こと", "もの", "より"], answer: 0, romaji: "hou", explanation: "～たほうが いい = ควรจะ (ดึกแล้ว ควรกลับ)" },
      ],
    },
    {
      name: "問題7　文の組み立て",
      instruction: "★ に はいる ものは どれですか。",
      questions: [
        { q: "ともだち　＿　＿　★　＿　もらった。（1.に　2.て　3.おしえ　4.かんじを）", choices: ["に", "かんじを", "おしえ", "て"], answer: 2, romaji: "ตำแหน่ง★ = おしえ", explanation: "เรียง: に かんじを おしえて もらった → ★(ที่ 3) = おしえ" },
        { q: "この みせは　＿　＿　★　＿　おいしくない。（1.のに　2.たかい　3.あまり　4.は）", choices: ["は", "たかい", "のに", "あまり"], answer: 2, romaji: "ตำแหน่ง★ = のに", explanation: "เรียง: は たかい のに あまり おいしくない → ★(ที่ 3) = のに" },
        { q: "ねる　＿　＿　★　＿　みがきます。（1.に　2.は　3.まえ　4.を）→ ねる まえに はを みがきます", choices: ["まえ", "に", "は", "を"], answer: 0, romaji: "ตำแหน่ง★ = まえ", explanation: "เรียง: ねる まえ に は(を) みがきます → ★(ที่ 3) = まえ" },
      ],
    },
    {
      name: "問題8　読解（中文）",
      instruction: "つぎの ぶんしょうを よんで、しつもんに こたえて ください。",
      passage: "わたしは りょうりが すきです。とくに、にほんりょうりを つくるのが すきです。はじめは ぜんぜん できませんでしたが、ほんを みたり、どうがを みたり して、れんしゅうしました。いまは すしや てんぷらも つくれる ように なりました。こんど、ともだちを うちに よんで、わたしの りょうりを たべて もらう つもりです。",
      questions: [
        { q: "この ひとは なにを つくるのが すきですか。", choices: ["にほんりょうり", "ケーキ", "パン", "おかし"], answer: 0, romaji: "nihon ryouri", explanation: "'にほんりょうりを つくるのが すき'" },
        { q: "どうやって れんしゅうしましたか。", choices: ["がっこうで ならった", "ほんや どうがを みて", "ともだちに ならった", "れんしゅうしなかった"], answer: 1, romaji: "hon ya douga o mite", explanation: "'ほんを みたり、どうがを みたり して、れんしゅう'" },
        { q: "こんど なにを する つもりですか。", choices: ["みせを ひらく", "ともだちに りょうりを たべて もらう", "りょうりきょうしつに いく", "ほんを かく"], answer: 1, romaji: "tomodachi ni tabete morau", explanation: "'ともだちを...よんで、わたしの りょうりを たべて もらう つもり'" },
      ],
    },
  ],
});
