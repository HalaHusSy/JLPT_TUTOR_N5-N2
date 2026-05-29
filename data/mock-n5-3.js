// N5 full mock exam #3 — appends to MOCK_EXAMS.N5
window.MOCK_EXAMS = window.MOCK_EXAMS || {};
window.MOCK_EXAMS.N5 = window.MOCK_EXAMS.N5 || [];
window.MOCK_EXAMS.N5.push({
  title: "N5 ชุดเต็ม #3 — 言語知識・読解",
  sections: [
    {
      name: "問題1　漢字読み",
      instruction: "＿＿の ことばは どう よみますか。いちばん いい ものを えらんで ください。",
      questions: [
        { q: "【母】は だいどころに います。", choices: ["はは", "ちち", "あね", "あに"], answer: 0, romaji: "haha", explanation: "母(はは) = แม่ (ของตัวเอง)" },
        { q: "【車】で かいしゃへ いきます。", choices: ["くるま", "でんしゃ", "じてんしゃ", "きしゃ"], answer: 0, romaji: "kuruma", explanation: "車(くるま) = รถยนต์" },
        { q: "【百】えんの パンを かいました。", choices: ["ひゃく", "せん", "じゅう", "まん"], answer: 0, romaji: "hyaku", explanation: "百(ひゃく) = ร้อย" },
        { q: "【白い】 はなが きれいです。", choices: ["しろい", "くろい", "あおい", "あかい"], answer: 0, romaji: "shiroi", explanation: "白い(しろい) = สีขาว" },
        { q: "【南】の くにへ りょこうします。", choices: ["みなみ", "きた", "ひがし", "にし"], answer: 0, romaji: "minami", explanation: "南(みなみ) = ทิศใต้" },
      ],
    },
    {
      name: "問題2　表記",
      instruction: "＿＿の ことばは どう かきますか。いちばん いい ものを えらんで ください。",
      questions: [
        { q: "【て】を あらいます。", choices: ["手", "毛", "牛", "午"], answer: 0, romaji: "te", explanation: "て = 手 (มือ)" },
        { q: "【たかい】 やまに のぼります。", choices: ["高い", "安い", "古い", "悪い"], answer: 0, romaji: "takai", explanation: "たかい = 高い (สูง/แพง)" },
        { q: "まいにち 【かいて】 れんしゅうします。", choices: ["書いて", "聞いて", "読いて", "話いて"], answer: 0, romaji: "kaite", explanation: "かく = 書く (เขียน)" },
        { q: "【あめ】が ふって います。", choices: ["雨", "雪", "電", "雲"], answer: 0, romaji: "ame", explanation: "あめ = 雨 (ฝน)" },
      ],
    },
    {
      name: "問題3　文脈規定",
      instruction: "（　）に なにを いれますか。いちばん いい ものを えらんで ください。",
      questions: [
        { q: "でんきを（　）から、ねます。", choices: ["けして", "つけて", "あけて", "しめて"], answer: 0, romaji: "keshite", explanation: "ก่อนนอน → ปิดไฟ = でんきを けして" },
        { q: "この みずは つめたくて（　）です。", choices: ["おいしい", "むずかしい", "たかい", "ながい"], answer: 0, romaji: "oishii", explanation: "น้ำเย็นและอร่อย = おいしい" },
        { q: "にちようびは いつも（　）して、ゆっくりします。", choices: ["せんたく", "しゅくだい", "しごと", "じゅぎょう"], answer: 0, romaji: "sentaku", explanation: "วันอาทิตย์มักซักผ้าและพักผ่อน = せんたく" },
        { q: "あの ひとは うたが（　）です。プロの かしゅです。", choices: ["じょうず", "へた", "きらい", "ゆうめい"], answer: 0, romaji: "jouzu", explanation: "นักร้องมืออาชีพ → ร้องเพลงเก่ง = じょうず" },
        { q: "ともだちに てがみを（　）。", choices: ["かきました", "ききました", "みました", "はなしました"], answer: 0, romaji: "kakimashita", explanation: "เขียนจดหมาย = てがみを かく" },
      ],
    },
    {
      name: "問題4　言い換え類義",
      instruction: "＿＿の ぶんと だいたい おなじ いみの ものを えらんで ください。",
      questions: [
        { q: "へやが 【きれい】です。", choices: ["そうじが して あります", "ひろいです", "あかるいです", "あたらしいです"], answer: 0, romaji: "souji ga shite arimasu", explanation: "きれい(สะอาด) ≒ ทำความสะอาดไว้แล้ว" },
        { q: "せんせいは 【しんせつ】です。", choices: ["やさしいです", "きびしいです", "わかいです", "たかいです"], answer: 0, romaji: "yasashii desu", explanation: "しんせつ(ใจดี) ≒ やさしい" },
        { q: "これは 【かんたんな】 もんだいです。", choices: ["やさしい もんだいです", "むずかしい もんだいです", "ながい もんだいです", "おおきい もんだいです"], answer: 0, romaji: "yasashii mondai desu", explanation: "かんたん ≒ やさしい (ง่าย)" },
      ],
    },
    {
      name: "問題5　文法形式の判断",
      instruction: "（　）に なにを いれますか。いちばん いい ものを えらんで ください。",
      questions: [
        { q: "9じ（　）5じまで はたらきます。", choices: ["から", "まで", "に", "で"], answer: 0, romaji: "kara", explanation: "～から～まで = ตั้งแต่...ถึง... (9 โมงถึง 5 โมง)" },
        { q: "この みせ（　）パンは おいしいです。", choices: ["の", "が", "を", "に"], answer: 0, romaji: "no", explanation: "の = ของ (ขนมปังของร้านนี้)" },
        { q: "あした ともだちが うち（　）きます。", choices: ["に", "を", "が", "の"], answer: 0, romaji: "ni", explanation: "に = บอกจุดหมายของการมา (มาที่บ้าน)" },
        { q: "やさい（　）すきじゃ ありません。", choices: ["は", "を", "が", "に"], answer: 0, romaji: "wa", explanation: "は ใช้เน้น/contrast กับรูปปฏิเสธ (ผักนั้นไม่ชอบ)" },
        { q: "へやは あかるくて（　）です。", choices: ["ひろい", "ひろく", "ひろくて", "ひろさ"], answer: 0, romaji: "hiroi", explanation: "あかるくて + i-adj รูปธรรมดาปิดท้าย: ひろい (สว่างและกว้าง)" },
        { q: "テレビを みる まえに、しゅくだいを（　）。", choices: ["します", "しました", "しています", "しません"], answer: 0, romaji: "shimasu", explanation: "～まえに + ประโยคปัจจุบัน (ทำการบ้านก่อนดูทีวี)" },
        { q: "きょうは あまり さむく（　）。", choices: ["ないです", "です", "あります", "いません"], answer: 0, romaji: "nai desu", explanation: "i-adj ปฏิเสธ: さむい→さむくない です (ไม่ค่อยหนาว)" },
      ],
    },
    {
      name: "問題6　文の組み立て",
      instruction: "★ に はいる ものは どれですか。",
      questions: [
        { q: "わたしは　＿　＿　★　＿　ほしいです。（1.が　2.あたらしい　3.くるま　4.の）", choices: ["くるま", "が", "あたらしい", "の"], answer: 0, romaji: "ตำแหน่ง★ = くるま", explanation: "เรียง: あたらしい くるま が ほしい → ★(ที่ 3) = くるま (อยากได้รถใหม่)" },
        { q: "まいばん　＿　＿　★　＿　ねます。（1.を　2.て　3.みがい　4.は）", choices: ["を", "みがい", "て", "は"], answer: 2, romaji: "ตำแหน่ง★ = て", explanation: "เรียง: はを みがいて ねます → ★(ที่ 3) = て (แปรงฟันแล้วนอน)" },
        { q: "この　＿　＿　★　＿　です。（1.は　2.ほん　3.にほんご　4.の）", choices: ["ほん", "は", "にほんご", "の"], answer: 2, romaji: "ตำแหน่ง★ = にほんご", explanation: "เรียง: この ほん は にほんご の → ★(ที่ 3) = にほんご (หนังสือเล่มนี้เป็นภาษาญี่ปุ่น)" },
      ],
    },
    {
      name: "問題7　読解（短文）",
      instruction: "つぎの ぶんしょうを よんで、しつもんに こたえて ください。",
      passage: "やまださんへ\nあした の パーティーは 7じからです。ばしょは えきの ちかくの レストラン「はな」です。たべものは ありますが、のみものは ありません。すきな のみものを もって きて ください。\nたなか",
      questions: [
        { q: "パーティーは なんじからですか。", choices: ["6じ", "7じ", "8じ", "9じ"], answer: 1, romaji: "shichi-ji", explanation: "'7じからです' = เริ่ม 1 ทุ่ม" },
        { q: "やまださんは なにを もって いきますか。", choices: ["たべもの", "のみもの", "プレゼント", "なにも もって いかない"], answer: 1, romaji: "nomimono", explanation: "'のみものは ありません。すきな のみものを もって きて' = เอาเครื่องดื่มมา" },
      ],
    },
    {
      name: "問題8　読解（中文）",
      instruction: "つぎの ぶんしょうを よんで、しつもんに こたえて ください。",
      passage: "わたしの まちには おおきな こうえんが あります。こうえんの 中には きが たくさん あって、はるは さくらが きれいです。どようびや にちようびには、こどもたちが ボールで あそんで います。おとなは さんぽを したり、ベンチで ほんを よんだり して います。わたしも よく あさ こうえんを はしります。とても きもちが いいです。",
      questions: [
        { q: "はる、こうえんで なにが きれいですか。", choices: ["き", "さくら", "はな", "そら"], answer: 1, romaji: "sakura", explanation: "'はるは さくらが きれい' = ฤดูใบไม้ผลิซากุระสวย" },
        { q: "こどもたちは こうえんで なにを しますか。", choices: ["ほんを よむ", "さんぽを する", "ボールで あそぶ", "はしる"], answer: 2, romaji: "booru de asobu", explanation: "'こどもたちが ボールで あそんで' = เด็กๆ เล่นลูกบอล" },
        { q: "「わたし」は あさ こうえんで なにを しますか。", choices: ["あそぶ", "はしる", "ほんを よむ", "ボールで あそぶ"], answer: 1, romaji: "hashiru", explanation: "'わたしも よく あさ こうえんを はしります' = วิ่งตอนเช้า" },
      ],
    },
  ],
});
