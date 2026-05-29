// N5 full mock exam #2 — appends to MOCK_EXAMS.N5 (loads after mock-n5-1.js which reset the array)
window.MOCK_EXAMS = window.MOCK_EXAMS || {};
window.MOCK_EXAMS.N5 = window.MOCK_EXAMS.N5 || [];
window.MOCK_EXAMS.N5.push({
  title: "N5 ชุดเต็ม #2 — 言語知識・読解",
  sections: [
    {
      name: "問題1　漢字読み",
      instruction: "＿＿の ことばは どう よみますか。いちばん いい ものを えらんで ください。",
      questions: [
        { q: "【先生】は きょうしつに います。", choices: ["せんせい", "せんせ", "せいせい", "せんぜい"], answer: 0, romaji: "sensei", explanation: "先生(せんせい) = ครู/อาจารย์" },
        { q: "まいにち 【新聞】を よみます。", choices: ["しんぶん", "しんもん", "しんぷん", "しmぶん"], answer: 0, romaji: "shinbun", explanation: "新聞(しんぶん) = หนังสือพิมพ์" },
        { q: "【右】の みちを いって ください。", choices: ["みぎ", "ひだり", "うえ", "した"], answer: 0, romaji: "migi", explanation: "右(みぎ) = ขวา / 左(ひだり) = ซ้าย" },
        { q: "あには 【大学】の がくせいです。", choices: ["だいがく", "たいがく", "だいがこ", "おおがく"], answer: 0, romaji: "daigaku", explanation: "大学(だいがく) = มหาวิทยาลัย" },
        { q: "【金】ようびに あいましょう。", choices: ["きん", "ぎん", "こん", "きむ"], answer: 0, romaji: "kin", explanation: "金曜日(きんようび) = วันศุกร์" },
      ],
    },
    {
      name: "問題2　表記",
      instruction: "＿＿の ことばは どう かきますか。いちばん いい ものを えらんで ください。",
      questions: [
        { q: "【ひがし】の そらが あかるい。", choices: ["東", "西", "南", "北"], answer: 0, romaji: "higashi", explanation: "ひがし = 東 (ตะวันออก)" },
        { q: "【ちいさい】 いぬが すきです。", choices: ["小さい", "少さい", "大さい", "中さい"], answer: 0, romaji: "chiisai", explanation: "ちいさい = 小さい (เล็ก)" },
        { q: "ほんを 【よんで】 います。", choices: ["読んで", "話んで", "語んで", "詠んで"], answer: 0, romaji: "yonde", explanation: "よむ = 読む (อ่าน)" },
        { q: "【ともだち】と あそびます。", choices: ["友だち", "友たち", "反だち", "支だち"], answer: 0, romaji: "tomodachi", explanation: "ともだち = 友だち (เพื่อน)" },
      ],
    },
    {
      name: "問題3　文脈規定",
      instruction: "（　）に なにを いれますか。いちばん いい ものを えらんで ください。",
      questions: [
        { q: "さむいので コートを（　）。", choices: ["きます", "ぬぎます", "あらいます", "かいます"], answer: 0, romaji: "kimasu", explanation: "หนาว → ใส่เสื้อโค้ท = きます (ぬぎます=ถอด)" },
        { q: "この くすりは （　）です。みずで のんで ください。", choices: ["にがい", "あまい", "からい", "つめたい"], answer: 0, romaji: "nigai", explanation: "ยามักมีรสขม = にがい" },
        { q: "えきの まえで タクシーに（　）。", choices: ["のりました", "おりました", "あるきました", "とまりました"], answer: 0, romaji: "norimashita", explanation: "ขึ้นแท็กซี่ = のります (おります=ลง)" },
        { q: "あした しけんが あるので、（　）べんきょうします。", choices: ["いっしょうけんめい", "ゆっくり", "だんだん", "ときどき"], answer: 0, romaji: "isshoukenmei", explanation: "พรุ่งนี้สอบ → ตั้งใจเรียนเต็มที่ = いっしょうけんめい" },
        { q: "へやが（　）ですから、そうじを します。", choices: ["きたない", "きれい", "あかるい", "しずか"], answer: 0, romaji: "kitanai", explanation: "ห้องสกปรก จึงทำความสะอาด = きたない" },
      ],
    },
    {
      name: "問題4　言い換え類義",
      instruction: "＿＿の ぶんと だいたい おなじ いみの ものを えらんで ください。",
      questions: [
        { q: "この みせは 【べんり】です。", choices: ["つかいやすいです", "たかいです", "ふるいです", "とおいです"], answer: 0, romaji: "tsukaiyasui desu", explanation: "べんり(สะดวก) ≒ ใช้ง่าย = つかいやすい" },
        { q: "テストは 【かんたん】でした。", choices: ["やさしかったです", "むずかしかったです", "ながかったです", "たかかったです"], answer: 0, romaji: "yasashikatta desu", explanation: "かんたん(ง่าย) ≒ やさしい" },
        { q: "きのうは 【たいへん】でした。", choices: ["とても つかれました", "とても たのしかったです", "とても しずかでした", "とても はやかったです"], answer: 0, romaji: "totemo tsukaremashita", explanation: "たいへん(ลำบาก/หนัก) ≒ เหนื่อยมาก" },
      ],
    },
    {
      name: "問題5　文法形式の判断",
      instruction: "（　）に なにを いれますか。いちばん いい ものを えらんで ください。",
      questions: [
        { q: "まいあさ パン（　）たべます。", choices: ["を", "が", "に", "で"], answer: 0, romaji: "o", explanation: "を = บ่งกรรมของกริยา (กินขนมปัง)" },
        { q: "がっこう（　）あるいて いきます。", choices: ["まで", "から", "より", "ほど"], answer: 0, romaji: "made", explanation: "～まで = จนถึง (เดินไปจนถึงโรงเรียน)" },
        { q: "へやは しずか（　）きれいです。", choices: ["で", "くて", "に", "と"], answer: 0, romaji: "de", explanation: "เชื่อม na-adj: しずか→しずかで (เงียบและสะอาด)" },
        { q: "あめが ふって いる（　）、でかけません。", choices: ["から", "が", "ので", "のに"], answer: 0, romaji: "kara", explanation: "～から = เพราะ (ฝนตกเลยไม่ออกไป)" },
        { q: "にほんへ いった こと（　）あります。", choices: ["が", "を", "に", "は"], answer: 0, romaji: "ga", explanation: "～たことが ある = เคย..." },
        { q: "もう しゅくだいを しました（　）。", choices: ["か", "ね", "よ", "な"], answer: 0, romaji: "ka", explanation: "ลงท้ายประโยคคำถามด้วย か" },
        { q: "テレビを（　）ながら ごはんを たべます。", choices: ["み", "みて", "みる", "みた"], answer: 0, romaji: "mi", explanation: "～ながら ใช้กับ V-stem: みる→み (ดูทีวีไปกินไป)" },
      ],
    },
    {
      name: "問題6　文の組み立て",
      instruction: "★ に はいる ものは どれですか。",
      questions: [
        { q: "わたしは　＿　＿　★　＿　すきです。（1.が　2.りょうり　3.の　4.にほん）", choices: ["の", "りょうり", "が", "にほん"], answer: 1, romaji: "ตำแหน่ง★ = りょうり", explanation: "เรียง: にほん の りょうり が すき → ★(ที่ 3) = りょうり (ชอบอาหารญี่ปุ่น)" },
        { q: "へやの　＿　＿　★　＿　います。（1.に　2.ねこ　3.が　4.なか）", choices: ["なか", "に", "ねこ", "が"], answer: 2, romaji: "ตำแหน่ง★ = ねこ", explanation: "เรียง: なか に ねこ が います → ★(ที่ 3) = ねこ (ในห้องมีแมว)" },
        { q: "あした　＿　＿　★　＿　つもりです。（1.に　2.いく　3.うみ　4.へ）", choices: ["うみ", "へ", "いく", "に"], answer: 2, romaji: "ตำแหน่ง★ = いく", explanation: "เรียง: うみ へ いく つもり → ★(ที่ 3) = いく (ตั้งใจจะไปทะเล)" },
      ],
    },
    {
      name: "問題7　読解（短文）",
      instruction: "つぎの ぶんしょうを よんで、しつもんに こたえて ください。",
      passage: "あした は ともだちの たんじょうびです。きょう、わたしは デパートで プレゼントを かいました。ともだちは おんがくが すきですから、CDを えらびました。あした、みんなで レストランで パーティーを します。たのしみです。",
      questions: [
        { q: "あした は なんの ひですか。", choices: ["わたしの たんじょうび", "ともだちの たんじょうび", "やすみの ひ", "テストの ひ"], answer: 1, romaji: "tomodachi no tanjoubi", explanation: "'あした は ともだちの たんじょうび' = พรุ่งนี้วันเกิดเพื่อน" },
        { q: "なにを かいましたか。", choices: ["ほん", "はな", "CD", "ケーキ"], answer: 2, romaji: "CD", explanation: "เพื่อนชอบเพลง จึงเลือกซื้อ CD" },
      ],
    },
    {
      name: "問題8　読解（中文）",
      instruction: "つぎの ぶんしょうを よんで、しつもんに こたえて ください。",
      passage: "わたしは まいあさ 6じはんに おきます。かおを あらって、あさごはんを たべます。あさごはんは いつも パンと たまごです。7じに いえを でて、でんしゃで かいしゃへ いきます。かいしゃまで 40ぷん ぐらい かかります。しごとは 9じから 5じまでです。よる は うちで ほんを よんだり、テレビを みたり します。",
      questions: [
        { q: "あさごはんは なにを たべますか。", choices: ["ごはんと さかな", "パンと たまご", "パンと ぎゅうにゅう", "なにも たべない"], answer: 1, romaji: "pan to tamago", explanation: "'あさごはんは いつも パンと たまご' = ขนมปังกับไข่" },
        { q: "かいしゃまで どのくらい かかりますか。", choices: ["20ぷん", "30ぷん", "40ぷん", "1じかん"], answer: 2, romaji: "yonjuppun", explanation: "'かいしゃまで 40ぷん ぐらい' = ประมาณ 40 นาที" },
        { q: "よる、うちで なにを しますか。", choices: ["しごとを する", "ほんを よんだり テレビを みたり する", "あさごはんを たべる", "かいしゃへ いく"], answer: 1, romaji: "hon o yondari terebi o mitari suru", explanation: "'よるは...ほんを よんだり、テレビを みたり' = อ่านหนังสือบ้างดูทีวีบ้าง" },
      ],
    },
  ],
});
