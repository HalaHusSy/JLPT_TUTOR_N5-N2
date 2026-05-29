// N5 full mock #4 — appends to MOCK_EXAMS.N5
window.MOCK_EXAMS = window.MOCK_EXAMS || {};
window.MOCK_EXAMS.N5 = window.MOCK_EXAMS.N5 || [];
window.MOCK_EXAMS.N5.push({
  title: "N5 ชุดเต็ม #4 — 言語知識・読解",
  sections: [
    {
      name: "問題1　漢字読み",
      instruction: "＿＿の ことばは どう よみますか。",
      questions: [
        { q: "【北】の そらが くらいです。", choices: ["きた", "みなみ", "ひがし", "にし"], answer: 0, romaji: "kita", explanation: "北(きた) = ทิศเหนือ" },
        { q: "まいにち 【牛乳】を のみます。", choices: ["ぎゅうにゅう", "ぎゅにゅう", "ぎゅうにゅ", "ぎゅにゅ"], answer: 0, romaji: "gyuunyuu", explanation: "牛乳(ぎゅうにゅう) = นม" },
        { q: "【駅】まで あるきます。", choices: ["えき", "みち", "まち", "いえ"], answer: 0, romaji: "eki", explanation: "駅(えき) = สถานีรถไฟ" },
        { q: "【花】が きれいです。", choices: ["はな", "き", "くさ", "は"], answer: 0, romaji: "hana", explanation: "花(はな) = ดอกไม้" },
        { q: "【土曜日】は やすみです。", choices: ["どようび", "にちようび", "もくようび", "かようび"], answer: 0, romaji: "doyoubi", explanation: "土曜日(どようび) = วันเสาร์" },
      ],
    },
    {
      name: "問題2　表記",
      instruction: "＿＿の ことばは どう かきますか。",
      questions: [
        { q: "【あし】が いたいです。", choices: ["足", "手", "目", "耳"], answer: 0, romaji: "ashi", explanation: "あし = 足 (เท้า/ขา)" },
        { q: "【ちいさな】 こえで はなす。", choices: ["小さな", "少さな", "大さな", "中さな"], answer: 0, romaji: "chiisana", explanation: "ちいさな = 小さな" },
        { q: "【かわ】で およぎます。", choices: ["川", "山", "州", "河"], answer: 0, romaji: "kawa", explanation: "かわ = 川 (แม่น้ำ)" },
        { q: "【みみ】が いたい。", choices: ["耳", "目", "口", "手"], answer: 0, romaji: "mimi", explanation: "みみ = 耳 (หู)" },
      ],
    },
    {
      name: "問題3　文脈規定",
      instruction: "（　）に なにを いれますか。",
      questions: [
        { q: "つかれたので、すこし（　）。", choices: ["やすみます", "はたらきます", "はしります", "あるきます"], answer: 0, romaji: "yasumimasu", explanation: "เหนื่อยจึงพัก = やすむ" },
        { q: "この ほんは（　）です。よく わかります。", choices: ["やさしい", "むずかしい", "たかい", "ながい"], answer: 0, romaji: "yasashii", explanation: "หนังสือง่าย เข้าใจดี = やさしい" },
        { q: "あさ おきて、かおを（　）。", choices: ["あらいます", "みがきます", "けします", "つけます"], answer: 0, romaji: "araimasu", explanation: "ตื่นมาล้างหน้า = かおを あらう" },
        { q: "テストの まえに（　）します。", choices: ["べんきょう", "りょこう", "せんたく", "そうじ"], answer: 0, romaji: "benkyou", explanation: "ก่อนสอบเรียน = べんきょう" },
        { q: "この みせは やさいが（　）です。", choices: ["やすい", "たかい", "おおきい", "ながい"], answer: 0, romaji: "yasui", explanation: "ผักร้านนี้ถูก = やすい" },
      ],
    },
    {
      name: "問題4　言い換え類義",
      instruction: "＿＿の ぶんと だいたい おなじ いみの ものを えらんで ください。",
      questions: [
        { q: "この へやは 【しずか】です。", choices: ["おとが しません", "ひろいです", "あかるいです", "あついです"], answer: 0, romaji: "oto ga shimasen", explanation: "しずか(เงียบ) ≒ ไม่มีเสียง" },
        { q: "おとうとは いま 【ねて】 います。", choices: ["おきて いません", "たべて います", "あそんで います", "べんきょうして います"], answer: 0, romaji: "okite imasen", explanation: "ねて いる ≒ ยังไม่ตื่น" },
        { q: "この りょうりは 【おいしい】です。", choices: ["あじが いいです", "あじが わるいです", "たかいです", "おおきいです"], answer: 0, romaji: "aji ga ii desu", explanation: "おいしい ≒ รสชาติดี" },
      ],
    },
    {
      name: "問題5　文法形式の判断",
      instruction: "（　）に なにを いれますか。",
      questions: [
        { q: "あさ 7じ（　）おきます。", choices: ["に", "で", "を", "が"], answer: 0, romaji: "ni", explanation: "に ใช้กับเวลาเฉพาะเจาะจง" },
        { q: "テーブルの うえ（　）りんごが あります。", choices: ["に", "で", "を", "へ"], answer: 0, romaji: "ni", explanation: "に บอกตำแหน่งที่มีอยู่" },
        { q: "わたしは ねこ（　）すきです。", choices: ["が", "を", "に", "へ"], answer: 0, romaji: "ga", explanation: "～が すき = ชอบ" },
        { q: "きのう えいが（　）みました。", choices: ["を", "が", "に", "で"], answer: 0, romaji: "o", explanation: "を บ่งกรรม (ดูหนัง)" },
        { q: "この みず（　）つめたいです。", choices: ["は", "を", "が", "に"], answer: 0, romaji: "wa", explanation: "は บ่งหัวข้อ" },
        { q: "ともだち（　）こうえんへ いきました。", choices: ["と", "を", "が", "の"], answer: 0, romaji: "to", explanation: "と = กับ (ร่วมกิจกรรม)" },
        { q: "あした えいがを みに（　）。", choices: ["いきます", "きます", "あります", "します"], answer: 0, romaji: "ikimasu", explanation: "V-stem に いく = ไปทำ (ไปดูหนัง)" },
      ],
    },
    {
      name: "問題6　文の組み立て",
      instruction: "★ に はいる ものは どれですか。",
      questions: [
        { q: "わたしは　＿　＿　★　＿　すきです。（1.が　2.りんご　3.くだもの　4.の）", choices: ["くだもの", "の", "りんご", "が"], answer: 2, romaji: "ตำแหน่ง★ = りんご", explanation: "เรียง: くだもの の りんご が すき → ★(ที่ 3) = りんご (ชอบแอปเปิ้ลซึ่งเป็นผลไม้)" },
        { q: "へやで　＿　＿　★　＿　います。（1.を　2.おんがく　3.きいて　4.は）", choices: ["は", "おんがく", "を", "きいて"], answer: 1, romaji: "ตำแหน่ง★ = おんがく", explanation: "เรียง: は おんがく を きいて います → ★(ที่ 3) = おんがく" },
        { q: "あさ　＿　＿　★　＿　たべます。（1.を　2.パン　3.いつも　4.は）", choices: ["は", "いつも", "パン", "を"], answer: 2, romaji: "ตำแหน่ง★ = パン", explanation: "เรียง: は いつも パン を たべます → ★(ที่ 3) = パン" },
      ],
    },
    {
      name: "問題7　読解（短文）",
      instruction: "つぎの ぶんしょうを よんで、しつもんに こたえて ください。",
      passage: "わたしは いぬが すきです。うちには しろい いぬが います。なまえは「ハナ」です。まいあさ、ハナと こうえんを さんぽします。ハナは とても げんきで、はしるのが すきです。",
      questions: [
        { q: "いぬの なまえは なんですか。", choices: ["ハナ", "シロ", "ポチ", "タロ"], answer: 0, romaji: "Hana", explanation: "'なまえは「ハナ」です'" },
        { q: "まいあさ なにを しますか。", choices: ["こうえんを さんぽする", "うみで およぐ", "テレビを みる", "ほんを よむ"], answer: 0, romaji: "kouen o sanpo suru", explanation: "'まいあさ、ハナと こうえんを さんぽします'" },
      ],
    },
    {
      name: "問題8　読解（中文）",
      instruction: "つぎの ぶんしょうを よんで、しつもんに こたえて ください。",
      passage: "きょうは あめが ふって いたので、どこにも いきませんでした。うちで ほんを よんだり、りょうりを つくったり しました。ひるごはんに カレーを つくりました。とても おいしく できました。ごご、ともだちが あそびに きて、いっしょに カレーを たべました。ともだちも「おいしい」と いって くれました。",
      questions: [
        { q: "きょうは どうして どこにも いきませんでしたか。", choices: ["あめが ふって いたから", "びょうきだったから", "いそがしかったから", "おかねが なかったから"], answer: 0, romaji: "ame ga futte ita kara", explanation: "'あめが ふって いたので、どこにも いきませんでした'" },
        { q: "ひるごはんに なにを つくりましたか。", choices: ["ラーメン", "カレー", "すし", "パン"], answer: 1, romaji: "karee", explanation: "'ひるごはんに カレーを つくりました'" },
        { q: "ごご、だれが きましたか。", choices: ["かぞく", "せんせい", "ともだち", "だれも こなかった"], answer: 2, romaji: "tomodachi", explanation: "'ともだちが あそびに きて'" },
      ],
    },
  ],
});
