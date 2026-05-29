// N5 full mock exam #1 — authentic JLPT section structure (original questions, not real past papers)
// This is the FIRST N5 mock file: it resets MOCK_EXAMS.N5 to drop the legacy flat mock,
// then later mock-n5-*.js files append. Loads after mock.js (base) per converter ordering.
window.MOCK_EXAMS = window.MOCK_EXAMS || {};
window.MOCK_EXAMS.N5 = [];
window.MOCK_EXAMS.N5.push({
  title: "N5 ชุดเต็ม #1 — 言語知識・読解",
  sections: [
    {
      name: "問題1　漢字読み",
      instruction: "＿＿の ことばは どう よみますか。いちばん いい ものを えらんで ください。",
      questions: [
        { q: "わたしは まいにち 【学校】へ いきます。", choices: ["がっこう", "がこう", "がっこ", "がくこう"], answer: 0, romaji: "gakkou", explanation: "学校 = โรงเรียน อ่านว่า がっこう (มีเสียงสะกด っ)" },
        { q: "へやの 【中】に ねこが います。", choices: ["なか", "うち", "そと", "ちゅう"], answer: 0, romaji: "naka", explanation: "中(なか) = ข้างใน (ใช้กับสถานที่/พื้นที่)" },
        { q: "きょうは 【天気】が いいです。", choices: ["てんき", "でんき", "てんぎ", "てんけ"], answer: 0, romaji: "tenki", explanation: "天気(てんき) = อากาศ ระวังสับสนกับ 電気(でんき)=ไฟฟ้า" },
        { q: "【午後】から あめが ふります。", choices: ["ごご", "ごぜん", "こご", "ごこ"], answer: 0, romaji: "gogo", explanation: "午後(ごご) = ช่วงบ่าย / 午前(ごぜん) = ช่วงเช้า" },
        { q: "この 【魚】は おいしいです。", choices: ["さかな", "とり", "にく", "やさい"], answer: 0, romaji: "sakana", explanation: "魚(さかな) = ปลา" },
      ],
    },
    {
      name: "問題2　表記",
      instruction: "＿＿の ことばは どう かきますか。いちばん いい ものを えらんで ください。",
      questions: [
        { q: "あついので 【みず】を のみます。", choices: ["水", "木", "氷", "永"], answer: 0, romaji: "mizu", explanation: "みず = 水 (น้ำ) ระวังคล้าย 木(き)=ต้นไม้, 氷(こおり)=น้ำแข็ง" },
        { q: "【やま】に のぼります。", choices: ["山", "川", "出", "止"], answer: 0, romaji: "yama", explanation: "やま = 山 (ภูเขา)" },
        { q: "ともだちと 【はなし】を します。", choices: ["話", "詰", "語", "説"], answer: 0, romaji: "hanashi", explanation: "はなし = 話 (เรื่องเล่า, การพูดคุย)" },
        { q: "【あたらしい】 くつを かいました。", choices: ["新しい", "親しい", "近しい", "辛しい"], answer: 0, romaji: "atarashii", explanation: "あたらしい = 新しい (ใหม่)" },
      ],
    },
    {
      name: "問題3　文脈規定",
      instruction: "（　）に なにを いれますか。いちばん いい ものを えらんで ください。",
      questions: [
        { q: "あついですから、まどを（　）ください。", choices: ["あけて", "しめて", "けして", "つけて"], answer: 0, romaji: "akete", explanation: "ร้อน → เปิดหน้าต่าง = まどを あけて. しめて=ปิด, けして=ดับ, つけて=เปิด(ไฟ)" },
        { q: "えきまで バス（　）いきます。", choices: ["で", "を", "が", "に"], answer: 0, romaji: "de", explanation: "บ่งวิธี/พาหนะใช้ で = ไปด้วยรถบัส" },
        { q: "テストの まえに よく（　）します。", choices: ["べんきょう", "りょこう", "さんぽ", "せんたく"], answer: 0, romaji: "benkyou", explanation: "ก่อนสอบควร 'เรียน/อ่านหนังสือ' = べんきょう" },
        { q: "この もんだいは（　）です。かんたんでは ありません。", choices: ["むずかしい", "やさしい", "おいしい", "あたらしい"], answer: 0, romaji: "muzukashii", explanation: "ตรงข้ามกับ かんたん(ง่าย) คือ むずかしい(ยาก)" },
        { q: "あさ 6じに（　）。", choices: ["おきます", "ねます", "いきます", "きます"], answer: 0, romaji: "okimasu", explanation: "ตอนเช้า 6 โมง → ตื่นนอน = おきます" },
      ],
    },
    {
      name: "問題4　言い換え類義",
      instruction: "＿＿の ぶんと だいたい おなじ いみの ものを えらんで ください。",
      questions: [
        { q: "この みせは 【ゆうめい】です。", choices: ["みんな しって います", "とても たかいです", "とても ちかいです", "あたらしいです"], answer: 0, romaji: "minna shitte imasu", explanation: "ゆうめい(มีชื่อเสียง) ≒ ทุกคนรู้จัก = みんな しって います" },
        { q: "へやを 【そうじ】しました。", choices: ["きれいに しました", "あかるく しました", "ひろく しました", "あたらしく しました"], answer: 0, romaji: "kirei ni shimashita", explanation: "そうじ(ทำความสะอาด) ≒ ทำให้สะอาด = きれいに しました" },
        { q: "ちちは いま 【しごと】を して います。", choices: ["はたらいて います", "やすんで います", "あそんで います", "ねて います"], answer: 0, romaji: "hataraite imasu", explanation: "しごとを する ≒ はたらく (ทำงาน)" },
      ],
    },
    {
      name: "問題5　文法形式の判断",
      instruction: "（　）に なにを いれますか。いちばん いい ものを えらんで ください。",
      questions: [
        { q: "わたしは ともだち（　）えいがを みました。", choices: ["と", "を", "が", "の"], answer: 0, romaji: "to", explanation: "～と = 'กับ' (ทำกิจกรรมร่วมกับใคร)" },
        { q: "つくえの うえ（　）ほんが あります。", choices: ["に", "で", "を", "へ"], answer: 0, romaji: "ni", explanation: "บอกตำแหน่งที่มีอยู่ ใช้ に (มีของอยู่ที่...)" },
        { q: "あした あめ（　）ふるでしょう。", choices: ["が", "を", "に", "は"], answer: 0, romaji: "ga", explanation: "ฝน(ประธาน)ตก → あめが ふる" },
        { q: "この ケーキは おいしい（　）たかいです。", choices: ["です", "くて", "で", "に"], answer: 1, romaji: "oishikute", explanation: "เชื่อม i-adj สองตัว: おいしい→おいしくて (อร่อยและแพง)" },
        { q: "にほんごを はなす こと（　）できます。", choices: ["が", "を", "に", "で"], answer: 0, romaji: "ga", explanation: "～ことが できる = สามารถ...ได้" },
        { q: "へやに だれ（　）いません。", choices: ["も", "が", "を", "は"], answer: 0, romaji: "mo", explanation: "だれも + ปฏิเสธ = ไม่มีใครเลย" },
        { q: "まだ ばんごはんを たべて（　）。", choices: ["いません", "ありません", "ないです", "くないです"], answer: 0, romaji: "imasen", explanation: "ยังไม่ได้ทำ = まだ～て いません" },
      ],
    },
    {
      name: "問題6　文の組み立て",
      instruction: "★ に はいる ものは どれですか。ただしい じゅんばんに ならべて ください。",
      questions: [
        { q: "わたしは　＿　＿　★　＿　いきました。（1.と　2.こうえん　3.ともだち　4.へ）", choices: ["こうえん", "へ", "と", "ともだち"], answer: 0, romaji: "ตำแหน่ง★ = こうえん", explanation: "เรียง: ともだち と こうえん へ いきました → ★(ที่ 3) = こうえん (ไปสวนกับเพื่อน)" },
        { q: "これは　＿　＿　★　＿　ほんです。（1.の　2.にほんご　3.べんきょう　4.の）", choices: ["べんきょう", "の", "にほんご", "の"], answer: 0, romaji: "ตำแหน่ง★ = べんきょう", explanation: "เรียง: にほんご の べんきょう の ほん → ★(ที่ 3) = べんきょう (หนังสือเรียนภาษาญี่ปุ่น)" },
        { q: "まいあさ　＿　＿　★　＿　のみます。（1.を　2.コーヒー　3.いっぱい　4.の）", choices: ["コーヒー", "を", "いっぱい", "の"], answer: 2, romaji: "ตำแหน่ง★ = いっぱい", explanation: "เรียง: コーヒー を いっぱい のみます (の ไม่ใช้) → ★(ที่ 3) = いっぱい" },
      ],
    },
    {
      name: "問題7　読解（短文）",
      instruction: "つぎの ぶんしょうを よんで、しつもんに こたえて ください。",
      passage: "わたしの いえには ねこが 2ひき います。1ぴきは しろくて、もう 1ぴきは くろいです。しろい ねこは よく ねます。くろい ねこは げんきで、いえの 中を はしります。わたしは まいにち ねこと あそびます。とても かわいいです。",
      questions: [
        { q: "ねこは ぜんぶで なんびき いますか。", choices: ["1ぴき", "2ひき", "3びき", "4ひき"], answer: 1, romaji: "ni-hiki", explanation: "ในเรื่องบอก 'ねこが 2ひき います' = มีแมว 2 ตัว" },
        { q: "くろい ねこは どんな ねこですか。", choices: ["よく ねる ねこ", "げんきな ねこ", "おおきい ねこ", "ちいさい ねこ"], answer: 1, romaji: "genki na neko", explanation: "'くろい ねこは げんきで...はしります' = แมวดำซุกซน/แข็งแรง" },
      ],
    },
    {
      name: "問題8　読解（中文）",
      instruction: "つぎの ぶんしょうを よんで、しつもんに こたえて ください。",
      passage: "わたしは せんしゅうの にちようびに、ともだちと としょかんへ いきました。あさ 10じに えきで あって、いっしょに あるいて いきました。としょかんで にほんごの ほんを 3さつ かりました。ひるごはんは ちかくの レストランで たべました。レストランの りょうりは やすくて おいしかったです。ごご、わたしたちは こうえんを さんぽして、4じに いえに かえりました。",
      questions: [
        { q: "ふたりは どこで あいましたか。", choices: ["としょかん", "えき", "レストラン", "こうえん"], answer: 1, romaji: "eki", explanation: "'あさ 10じに えきで あって' = เจอกันที่สถานีตอน 10 โมง" },
        { q: "としょかんで なにを しましたか。", choices: ["ほんを よみました", "ほんを 3さつ かりました", "ほんを かいました", "ほんを うりました"], answer: 1, romaji: "hon o san-satsu karimashita", explanation: "'にほんごの ほんを 3さつ かりました' = ยืมหนังสือ 3 เล่ม (かりる=ยืม)" },
        { q: "ふたりは なんじに いえへ かえりましたか。", choices: ["10じ", "12じ", "4じ", "6じ"], answer: 2, romaji: "yo-ji", explanation: "'4じに いえに かえりました' = กลับบ้านตอนบ่าย 4 โมง" },
      ],
    },
  ],
});
