// N4 full mock #3 — appends to MOCK_EXAMS.N4
window.MOCK_EXAMS = window.MOCK_EXAMS || {};
window.MOCK_EXAMS.N4 = window.MOCK_EXAMS.N4 || [];
window.MOCK_EXAMS.N4.push({
  title: "N4 ชุดเต็ม #3 — 言語知識・読解",
  sections: [
    {
      name: "問題1　漢字読み",
      instruction: "＿＿の ことばの よみかたを えらんで ください。",
      questions: [
        { q: "この まちは 【生活】が べんりです。", choices: ["せいかつ", "せいかち", "しょうかつ", "せいがつ"], answer: 0, romaji: "seikatsu", explanation: "生活(せいかつ) = ชีวิตประจำวัน" },
        { q: "【経済】の ニュースを みます。", choices: ["けいざい", "けいさい", "きょうざい", "けざい"], answer: 0, romaji: "keizai", explanation: "経済(けいざい) = เศรษฐกิจ" },
        { q: "かいぎは 【午前】 10じからです。", choices: ["ごぜん", "ごご", "こぜん", "ごせん"], answer: 0, romaji: "gozen", explanation: "午前(ごぜん) = ช่วงเช้า" },
        { q: "あぶないので 【注意】して ください。", choices: ["ちゅうい", "ちゅい", "じゅうい", "ちゅうき"], answer: 0, romaji: "chuui", explanation: "注意(ちゅうい) = ระวัง" },
        { q: "【自分】で やります。", choices: ["じぶん", "じふん", "じぶ", "しぶん"], answer: 0, romaji: "jibun", explanation: "自分(じぶん) = ตัวเอง" },
        { q: "ともだちと 【別】れました。", choices: ["わか", "べつ", "わけ", "ぶん"], answer: 0, romaji: "waka(remashita)", explanation: "別れる(わかれる) = แยกจาก/เลิก" },
      ],
    },
    {
      name: "問題2　表記",
      instruction: "＿＿の ことばは かんじで どう かきますか。",
      questions: [
        { q: "【しゅみ】は おんがくを きく ことです。", choices: ["趣味", "趣未", "種味", "趣末"], answer: 0, romaji: "shumi", explanation: "しゅみ = 趣味 (งานอดิเรก)" },
        { q: "【けいけん】が たいせつです。", choices: ["経験", "経験", "経倹", "径験"], answer: 0, romaji: "keiken", explanation: "けいけん = 経験 (ประสบการณ์)" },
        { q: "でんしゃの 【じこ】が ありました。", choices: ["事故", "事古", "自故", "事個"], answer: 0, romaji: "jiko", explanation: "じこ = 事故 (อุบัติเหตุ)" },
        { q: "にもつを 【おくります】。", choices: ["送ります", "返ります", "迷ります", "込ります"], answer: 0, romaji: "okurimasu", explanation: "おくる = 送る (ส่ง)" },
        { q: "あの ひとは 【いしゃ】です。", choices: ["医者", "医社", "区者", "医都"], answer: 0, romaji: "isha", explanation: "いしゃ = 医者 (หมอ)" },
      ],
    },
    {
      name: "問題3　文脈規定",
      instruction: "（　）に いれる ものを えらんで ください。",
      questions: [
        { q: "あめが やんで、そらが（　）。", choices: ["はれました", "ふりました", "くもりました", "おちました"], answer: 0, romaji: "haremashita", explanation: "ฝนหยุด ฟ้าโปร่ง = はれる" },
        { q: "おもい にもつを（　）くれて ありがとう。", choices: ["はこんで", "つくって", "あらって", "かえして"], answer: 0, romaji: "hakonde", explanation: "ช่วยขนของหนัก = にもつを はこぶ" },
        { q: "コンサートの チケットを（　）しました。", choices: ["よやく", "そうじ", "せんたく", "けんか"], answer: 0, romaji: "yoyaku", explanation: "จองตั๋วคอนเสิร์ต = よやく" },
        { q: "この えいがは（　）です。みんな ないて いました。", choices: ["かなしい", "うれしい", "おかしい", "あかるい"], answer: 0, romaji: "kanashii", explanation: "หนังเศร้า ทุกคนร้องไห้ = かなしい" },
        { q: "じかんが ないので、（　）して ください。", choices: ["いそいで", "ゆっくり", "やすんで", "とまって"], answer: 0, romaji: "isoide", explanation: "ไม่มีเวลา → รีบหน่อย = いそいで" },
        { q: "この ふくろは じょうぶで（　）。", choices: ["やぶれません", "わかりません", "つきません", "おくれません"], answer: 0, romaji: "yaburemasen", explanation: "ถุงทนทาน ไม่ขาด = やぶれない" },
      ],
    },
    {
      name: "問題4　言い換え類義",
      instruction: "＿＿の ぶんと だいたい おなじ いみの ものを えらんで ください。",
      questions: [
        { q: "この みちは 【あんぜん】です。", choices: ["あぶなく ありません", "ひろく ありません", "とおく ありません", "くらく ありません"], answer: 0, romaji: "abunaku arimasen", explanation: "あんぜん(ปลอดภัย) ≒ ไม่อันตราย" },
        { q: "テストの けっかに 【がっかり】しました。", choices: ["ざんねんに おもいました", "うれしく おもいました", "あんしんしました", "びっくりしました"], answer: 0, romaji: "zannen ni omoimashita", explanation: "がっかり(ผิดหวัง) ≒ เสียดาย/เสียใจ" },
        { q: "かれは 【まじめ】に はたらきます。", choices: ["いっしょうけんめい", "ときどき", "たまに", "だんだん"], answer: 0, romaji: "isshoukenmei", explanation: "まじめに ≒ ตั้งใจ/เต็มที่" },
        { q: "やくそくの じかんに 【まにあいました】。", choices: ["おくれませんでした", "おくれました", "つきませんでした", "でませんでした"], answer: 0, romaji: "okuremasen deshita", explanation: "まにあう(ทันเวลา) ≒ ไม่สาย" },
      ],
    },
    {
      name: "問題5　用法",
      instruction: "つぎの ことばの つかいかたが いちばん いい ものを えらんで ください。",
      questions: [
        { q: "「しらべる」", choices: ["わからない ことばを じしょで しらべます。", "ごはんを しらべます。", "やまを しらべます。", "あさ はやく しらべます。"], answer: 0, romaji: "shiraberu", explanation: "しらべる = ตรวจสอบ/ค้นหา → 'ค้นคำที่ไม่รู้ในพจนานุกรม'" },
        { q: "「ひさしぶり」", choices: ["ひさしぶりに ともだちに あいました。", "ひさしぶりの みずを のみます。", "ひさしぶりに あめが つよいです。", "ひさしぶりを たべます。"], answer: 0, romaji: "hisashiburi", explanation: "ひさしぶり = ไม่ได้เจอนาน → 'เจอเพื่อนหลังจากไม่ได้เจอนาน'" },
        { q: "「うまい」", choices: ["かれは サッカーが うまいです。", "へやが うまいです。", "てんきが うまいです。", "みちが うまいです。"], answer: 0, romaji: "umai", explanation: "うまい = เก่ง/อร่อย → 'เขาเล่นฟุตบอลเก่ง'" },
        { q: "「だいじ」", choices: ["これは だいじな しょるいです。", "だいじに はしります。", "だいじを たべます。", "そらが だいじです。"], answer: 0, romaji: "daiji", explanation: "だいじ = สำคัญ → 'นี่เป็นเอกสารสำคัญ'" },
      ],
    },
    {
      name: "問題6　文法形式の判断",
      instruction: "（　）に いれる ものを えらんで ください。",
      questions: [
        { q: "せんせいが しゅくだいを（　）。", choices: ["ださせました", "だしました", "だされました", "だして"], answer: 1, romaji: "dashimashita", explanation: "ครูออกการบ้าน (รูปธรรมดา) = だしました" },
        { q: "あめに（　）、ぜんぶ ぬれて しまった。", choices: ["ふられて", "ふって", "ふらせて", "ふり"], answer: 0, romaji: "furarete", explanation: "passive: ฝนตกใส่(เดือดร้อน) = あめに ふられる" },
        { q: "へやを かたづけて（　）ください。", choices: ["おいて", "あって", "いって", "みて"], answer: 0, romaji: "oite", explanation: "～て おく = ทำเตรียมไว้ (เก็บห้องเตรียมไว้)" },
        { q: "この みせは やすい（　）、おいしいです。", choices: ["し", "ので", "から", "のに"], answer: 0, romaji: "shi", explanation: "～し = ทั้ง...ทั้ง (ทั้งถูกทั้งอร่อย)" },
        { q: "にほんごが じょうずに なる（　）、まいにち れんしゅうします。", choices: ["ために", "ように", "ので", "から"], answer: 1, romaji: "you ni", explanation: "～ように = เพื่อให้ (ใช้กับ potential/อกรรม: เก่งขึ้น)" },
        { q: "でんわばんごうを おしえて（　）ませんか。", choices: ["くれ", "あげ", "もらい", "やり"], answer: 0, romaji: "kure", explanation: "～て くれませんか = ช่วย...ให้หน่อยได้ไหม" },
        { q: "もう おそいから、そろそろ かえった（　）が いいです。", choices: ["ほう", "こと", "もの", "より"], answer: 0, romaji: "hou", explanation: "～たほうが いい = ควรจะ (ดึกแล้ว ควรกลับ)" },
      ],
    },
    {
      name: "問題7　文の組み立て",
      instruction: "★ に はいる ものは どれですか。",
      questions: [
        { q: "わたしは　＿　＿　★　＿　しまいました。（1.を　2.て　3.わすれ　4.かさ）", choices: ["を", "わすれ", "て", "かさ"], answer: 1, romaji: "ตำแหน่ง★ = わすれ", explanation: "เรียง: かさ を わすれて しまいました → ★(ที่ 3) = わすれ (ลืมร่มซะแล้ว)" },
        { q: "せんせい　＿　＿　★　＿　ました。（1.に　2.ほめられ　3.が　4.さくぶん）", choices: ["に", "さくぶん", "が", "ほめられ"], answer: 3, romaji: "ตำแหน่ง★ = ほめられ", explanation: "เรียง: せんせい に さくぶん が ほめられ... (เรียงจริง: さくぶんが せんせいに ほめられました) → ★ = ほめられ" },
        { q: "この くすりを　＿　＿　★　＿　なりました。（1.て　2.のん　3.よく　4.だら）", choices: ["のん", "だら", "よく", "て"], answer: 2, romaji: "ตำแหน่ง★ = よく", explanation: "เรียง: のんだら よく なりました → ★(ที่ 3) = よく (กินยาแล้วดีขึ้น)" },
      ],
    },
    {
      name: "問題8　読解（中文）",
      instruction: "つぎの ぶんしょうを よんで、しつもんに こたえて ください。",
      passage: "わたしの まちでは、まいとし なつに おおきな まつりが あります。まつりの ひは、みちに たくさんの やたいが ならびます。やきそばや たこやきなど、おいしい たべものが たくさん あります。よるには はなびが あがって、とても きれいです。きょねんは ともだちと いっしょに いきました。ことしは かぞくと いく つもりです。",
      questions: [
        { q: "まつりは いつ ありますか。", choices: ["まいとし はる", "まいとし なつ", "まいとし あき", "まいとし ふゆ"], answer: 1, romaji: "maitoshi natsu", explanation: "'まいとし なつに...まつりが あります' = ทุกฤดูร้อน" },
        { q: "よるに なにが ありますか。", choices: ["やたい", "はなび", "やきそば", "たこやき"], answer: 1, romaji: "hanabi", explanation: "'よるには はなびが あがって' = กลางคืนมีดอกไม้ไฟ" },
        { q: "ことしは だれと いきますか。", choices: ["ともだち", "ひとりで", "かぞく", "せんせい"], answer: 2, romaji: "kazoku", explanation: "'ことしは かぞくと いく つもり' = ปีนี้จะไปกับครอบครัว" },
      ],
    },
  ],
});
