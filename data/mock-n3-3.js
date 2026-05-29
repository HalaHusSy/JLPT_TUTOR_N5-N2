// N3 full mock #3 — appends to MOCK_EXAMS.N3
window.MOCK_EXAMS = window.MOCK_EXAMS || {};
window.MOCK_EXAMS.N3 = window.MOCK_EXAMS.N3 || [];
window.MOCK_EXAMS.N3.push({
  title: "N3 ชุดเต็ม #3 — 言語知識・読解",
  sections: [
    {
      name: "問題1　漢字読み",
      instruction: "＿＿の ことばの よみかたを えらんで ください。",
      questions: [
        { q: "この くにの 【文化】は おもしろい。", choices: ["ぶんか", "ぶんが", "もんか", "ぶか"], answer: 0, romaji: "bunka", explanation: "文化(ぶんか) = วัฒนธรรม" },
        { q: "テストの 【結果】を まつ。", choices: ["けっか", "けっが", "けつか", "げっか"], answer: 0, romaji: "kekka", explanation: "結果(けっか) = ผลลัพธ์" },
        { q: "やくそくの じかんに 【遅れた】。", choices: ["おくれた", "おそれた", "ちれた", "ぐれた"], answer: 0, romaji: "okureta", explanation: "遅れる(おくれる) = ล่าช้า/สาย" },
        { q: "けいけんを 【積む】。", choices: ["つむ", "せきむ", "づむ", "しむ"], answer: 0, romaji: "tsumu", explanation: "積む(つむ) = สั่งสม" },
        { q: "あたらしい せいかつに 【慣れた】。", choices: ["なれた", "かんれた", "ねれた", "じゅんれた"], answer: 0, romaji: "nareta", explanation: "慣れる(なれる) = คุ้นเคย/ชิน" },
        { q: "じょうほうを 【伝える】。", choices: ["つたえる", "でんえる", "つだえる", "ちえる"], answer: 0, romaji: "tsutaeru", explanation: "伝える(つたえる) = ถ่ายทอด/บอก" },
      ],
    },
    {
      name: "問題2　表記",
      instruction: "＿＿の ことばは かんじで どう かきますか。",
      questions: [
        { q: "けいけんを 【つたえる】。", choices: ["伝える", "云える", "転える", "仁える"], answer: 0, romaji: "tsutaeru", explanation: "つたえる = 伝える" },
        { q: "あたらしい かんきょうに 【なれる】。", choices: ["慣れる", "貫れる", "憤れる", "横れる"], answer: 0, romaji: "nareru", explanation: "なれる = 慣れる (ชิน)" },
        { q: "むずかしい もんだいを 【かんがえる】。", choices: ["考える", "老える", "孝える", "者える"], answer: 0, romaji: "kangaeru", explanation: "かんがえる = 考える (คิด)" },
        { q: "やくそくを 【まもれ】ない。", choices: ["守れ", "護れ", "完れ", "宇れ"], answer: 0, romaji: "mamore", explanation: "まもる = 守る" },
        { q: "ひとが おおくて 【こんで】 いる。", choices: ["混んで", "込んで", "雑んで", "混んで"], answer: 1, romaji: "konde", explanation: "こむ(แน่น) มักเขียน 込む / 混む — ที่นี่ 込んで" },
      ],
    },
    {
      name: "問題3　文脈規定",
      instruction: "（　）に いれる ものを えらんで ください。",
      questions: [
        { q: "あたらしい かんきょうに（　）のは たいへんだ。", choices: ["なれる", "つたえる", "あつめる", "くらべる"], answer: 0, romaji: "nareru", explanation: "ปรับตัวให้ชินกับสภาพแวดล้อมใหม่ = なれる" },
        { q: "ほかの しょうひんと（　）と、これは やすい。", choices: ["くらべる", "あつめる", "わける", "きめる"], answer: 0, romaji: "kuraberu", explanation: "เปรียบเทียบกับสินค้าอื่น = くらべる" },
        { q: "じかんを（　）して つかおう。", choices: ["せつやく", "そうじ", "けいかく", "しんぱい"], answer: 0, romaji: "setsuyaku", explanation: "ประหยัดเวลา = せつやく" },
        { q: "かれの いけんに（　）です。わたしも おなじ かんがえだ。", choices: ["さんせい", "はんたい", "しんぱい", "ちゅうい"], answer: 0, romaji: "sansei", explanation: "เห็นด้วย คิดเหมือนกัน = さんせい" },
        { q: "むずかしい けど、（　）すれば できる。", choices: ["どりょく", "そうじ", "けいかく", "れんらく"], answer: 0, romaji: "doryoku", explanation: "ถ้าพยายามก็ทำได้ = どりょく" },
        { q: "この きかいは（　）が かんたんだ。", choices: ["そうさ", "けいけん", "れきし", "ぶんか"], answer: 0, romaji: "sousa", explanation: "การใช้งานเครื่องง่าย = そうさ(การควบคุม/ใช้งาน)" },
      ],
    },
    {
      name: "問題4　言い換え類義",
      instruction: "＿＿の ことばと だいたい おなじ いみの ものを えらんで ください。",
      questions: [
        { q: "かれは 【ねっしん】に はたらく。", choices: ["いっしょうけんめい", "たまに", "ゆっくり", "すこし"], answer: 0, romaji: "isshoukenmei", explanation: "ねっしん ≒ いっしょうけんめい (ตั้งใจ)" },
        { q: "この もんだいは 【たんじゅん】だ。", choices: ["かんたんだ", "ふくざつだ", "むずかしい", "あいまいだ"], answer: 0, romaji: "kantan da", explanation: "たんじゅん(เรียบง่าย) ≒ かんたん" },
        { q: "やくそくを 【まもる】。", choices: ["やくそく どおり する", "やくそくを わすれる", "やくそくを かえる", "やくそくを やめる"], answer: 0, romaji: "yakusoku doori suru", explanation: "まもる ≒ ทำตามสัญญา" },
        { q: "この みせは 【いつも】 こんで いる。", choices: ["つねに", "たまに", "ぜんぜん", "あまり"], answer: 0, romaji: "tsune ni", explanation: "いつも ≒ つねに (ตลอด)" },
      ],
    },
    {
      name: "問題5　用法",
      instruction: "つぎの ことばの つかいかたが いちばん いい ものを えらんで ください。",
      questions: [
        { q: "「くらべる」", choices: ["ねだんを くらべて から かう。", "やまを くらべる。", "あめを くらべる。", "そらを くらべる。"], answer: 0, romaji: "kuraberu", explanation: "くらべる = เปรียบเทียบ → 'เทียบราคาก่อนซื้อ'" },
        { q: "「なれる」", choices: ["あたらしい しごとに なれた。", "ごはんを なれる。", "やまを なれる。", "そらが なれる。"], answer: 0, romaji: "nareru", explanation: "なれる = ชิน → 'ชินกับงานใหม่'" },
        { q: "「つたえる」", choices: ["この ことを かれに つたえて ください。", "やまを つたえる。", "あめを つたえる。", "ごはんを つたえる。"], answer: 0, romaji: "tsutaeru", explanation: "つたえる = บอก/ถ่ายทอด → 'บอกเรื่องนี้ให้เขา'" },
        { q: "「せつやく」", choices: ["でんきを せつやく しましょう。", "ともだちを せつやく する。", "やまを せつやく する。", "そらを せつやく する。"], answer: 0, romaji: "setsuyaku", explanation: "せつやく = ประหยัด → 'มาประหยัดไฟกัน'" },
      ],
    },
    {
      name: "問題6　文法形式の判断",
      instruction: "（　）に いれる ものを えらんで ください。",
      questions: [
        { q: "けいけん（　）はんだんする。", choices: ["をもとに", "について", "にとって", "として"], answer: 0, romaji: "o moto ni", explanation: "～をもとに = อิงจาก (ตัดสินจากประสบการณ์)" },
        { q: "この まちは ねん（　）かわって いる。", choices: ["とともに", "について", "にたいして", "によって"], answer: 0, romaji: "to tomo ni", explanation: "～とともに = ไปพร้อมกับ (เปลี่ยนไปตามปี)" },
        { q: "べんきょうすれば する（　）、たのしく なる。", choices: ["ほど", "より", "だけ", "まで"], answer: 0, romaji: "hodo", explanation: "～ば～ほど = ยิ่ง...ยิ่ง" },
        { q: "かれは いそがしい（　）、まいにち うんどうする。", choices: ["にもかかわらず", "おかげで", "ために", "ように"], answer: 0, romaji: "ni mo kakawarazu", explanation: "～にもかかわらず = ทั้งๆ ที่" },
        { q: "じかんが ない（　）、いそごう。", choices: ["から", "のに", "ても", "たり"], answer: 0, romaji: "kara", explanation: "～から = เพราะ (ไม่มีเวลา รีบกัน)" },
        { q: "もう おそいので、そろそろ しつれいさせて（　）。", choices: ["いただきます", "あげます", "くれます", "もらえます"], answer: 0, romaji: "itadakimasu", explanation: "させて いただきます = ขออนุญาต...(สุภาพ ขอตัวกลับ)" },
        { q: "この データに（　）と、うりあげが ふえて いる。", choices: ["よる", "ついて", "たいして", "とって"], answer: 0, romaji: "yoru", explanation: "～によると = ตามข้อมูล/ตามที่ว่า" },
      ],
    },
    {
      name: "問題7　文の組み立て",
      instruction: "★ に はいる ものは どれですか。",
      questions: [
        { q: "けいけんを　＿　＿　★　＿　する。（1.に　2.はんだん　3.もと　4.を）", choices: ["を", "もと", "に", "はんだん"], answer: 2, romaji: "ตำแหน่ง★ = に", explanation: "เรียง: けいけん を もと に はんだん する → ★(ที่ 3) = に (ตัดสินจากประสบการณ์)" },
        { q: "べんきょう　＿　＿　★　＿　たのしく なる。（1.ほど　2.すれば　3.する　4.を）→ すれば する ほど", choices: ["すれば", "する", "ほど", "を"], answer: 2, romaji: "ตำแหน่ง★ = ほど", explanation: "เรียง: すれば する ほど たのしく → ★(ที่ 3) = ほど" },
        { q: "いそがしい　＿　＿　★　＿　うんどうする。（1.にも　2.まいにち　3.かかわらず　4.のに）→ いそがしいにもかかわらず", choices: ["にも", "かかわらず", "まいにち", "のに"], answer: 1, romaji: "ตำแหน่ง★ = かかわらず", explanation: "เรียง: いそがしい にも かかわらず まいにち → ★(ที่ 3) = かかわらず" },
      ],
    },
    {
      name: "問題8　読解（中文）",
      instruction: "つぎの ぶんしょうを よんで、しつもんに こたえて ください。",
      passage: "わたしは ほんを よむ ことが すきです。とくに、よる ねる まえに 30ぷん ぐらい よみます。ほんを よむと、しらない ことばや あたらしい かんがえかたを しる ことが できます。それに、ストレスも へると いわれて います。さいきんは でんしの ほんも ふえて、スマホでも かんたんに よめる ように なりました。みなさんも ぜひ、まいにち すこしずつ ほんを よんで みて ください。",
      questions: [
        { q: "この ひとは いつ ほんを よみますか。", choices: ["あさ おきて すぐ", "よる ねる まえ", "ひるごはんの あと", "がっこうで"], answer: 1, romaji: "yoru neru mae", explanation: "'よる ねる まえに 30ぷん ぐらい よみます'" },
        { q: "ほんを よむと、どんな いい ことが ありますか。", choices: ["おかねが ふえる", "あたらしい かんがえかたを しる", "せが たかく なる", "ともだちが ふえる"], answer: 1, romaji: "atarashii kangaekata o shiru", explanation: "'あたらしい かんがえかたを しる ことが できます'" },
        { q: "さいきん、なにが ふえましたか。", choices: ["かみの ほん", "でんしの ほん", "しんぶん", "ざっし"], answer: 1, romaji: "denshi no hon", explanation: "'でんしの ほんも ふえて...スマホでも...よめる'" },
      ],
    },
  ],
});
