window.grammarN5 = [
  { title: "～は～です", pattern: "N₁ は N₂ です", meaning: "N₁ คือ N₂ (ประโยคพื้นฐานบอกเล่า)", examples: [
    { jp: "私は学生です。", romaji: "Watashi wa gakusei desu.", th: "ฉันเป็นนักเรียน" },
    { jp: "これは本です。", romaji: "Kore wa hon desu.", th: "นี่คือหนังสือ" },
    { jp: "田中さんは先生です。", romaji: "Tanaka-san wa sensei desu.", th: "คุณทานากะเป็นอาจารย์" },
  ]},
  { title: "～じゃありません / ～ではありません", pattern: "N₁ は N₂ じゃありません", meaning: "N₁ ไม่ใช่ N₂ (ปฏิเสธ)", examples: [
    { jp: "私は学生じゃありません。", romaji: "Watashi wa gakusei ja arimasen.", th: "ฉันไม่ใช่นักเรียน" },
    { jp: "これは本ではありません。", romaji: "Kore wa hon de wa arimasen.", th: "นี่ไม่ใช่หนังสือ" },
    { jp: "彼は日本人じゃないです。", romaji: "Kare wa Nihonjin ja nai desu.", th: "เขาไม่ใช่คนญี่ปุ่น" },
  ]},
  { title: "～ですか", pattern: "～ですか", meaning: "ใช่ไหม / ใช่หรือเปล่า (ประโยคคำถาม)", examples: [
    { jp: "学生ですか。", romaji: "Gakusei desu ka.", th: "เป็นนักเรียนใช่ไหม" },
    { jp: "これは何ですか。", romaji: "Kore wa nan desu ka.", th: "นี่คืออะไร" },
    { jp: "日本人ですか。", romaji: "Nihonjin desu ka.", th: "เป็นคนญี่ปุ่นใช่มั้ย" },
  ]},
  { title: "～も", pattern: "N も", meaning: "ก็...เหมือนกัน, ก็...ด้วย", examples: [
    { jp: "私も学生です。", romaji: "Watashi mo gakusei desu.", th: "ฉันก็เป็นนักเรียน" },
    { jp: "彼もタイ人です。", romaji: "Kare mo Tai-jin desu.", th: "เขาก็เป็นคนไทย" },
    { jp: "コーヒーもお茶も好きです。", romaji: "Koohii mo ocha mo suki desu.", th: "ชอบทั้งกาแฟและชา" },
  ]},
  { title: "～の～", pattern: "N₁ の N₂", meaning: "ของ / แสดงความเป็นเจ้าของ", examples: [
    { jp: "私の本です。", romaji: "Watashi no hon desu.", th: "เป็นหนังสือของฉัน" },
    { jp: "日本語の先生です。", romaji: "Nihongo no sensei desu.", th: "อาจารย์ภาษาญี่ปุ่น" },
    { jp: "学校の図書館。", romaji: "Gakkou no toshokan.", th: "ห้องสมุดของโรงเรียน" },
  ]},
  { title: "～を", pattern: "N を V", meaning: "กรรมของกริยา (ทำอะไร...กับสิ่งนั้น)", examples: [
    { jp: "ご飯を食べます。", romaji: "Gohan o tabemasu.", th: "กินข้าว" },
    { jp: "本を読みます。", romaji: "Hon o yomimasu.", th: "อ่านหนังสือ" },
    { jp: "音楽を聞きます。", romaji: "Ongaku o kikimasu.", th: "ฟังเพลง" },
  ]},
  { title: "～へ / ～に (สถานที่)", pattern: "場所 へ / に 行きます", meaning: "ไปยัง...", examples: [
    { jp: "学校へ行きます。", romaji: "Gakkou e ikimasu.", th: "ไปโรงเรียน" },
    { jp: "東京に行きました。", romaji: "Toukyou ni ikimashita.", th: "ไปโตเกียว" },
    { jp: "家へ帰ります。", romaji: "Ie e kaerimasu.", th: "กลับบ้าน" },
  ]},
  { title: "～で (สถานที่ทำ action)", pattern: "場所 で V", meaning: "ทำ...ที่ (สถานที่ที่กิจกรรมเกิด)", examples: [
    { jp: "図書館で勉強します。", romaji: "Toshokan de benkyou shimasu.", th: "เรียนที่ห้องสมุด" },
    { jp: "家でご飯を食べます。", romaji: "Ie de gohan o tabemasu.", th: "กินข้าวที่บ้าน" },
    { jp: "公園で遊びます。", romaji: "Kouen de asobimasu.", th: "เล่นที่สวนสาธารณะ" },
  ]},
  { title: "～ます / ～ません / ～ました", pattern: "V-ます / ません / ました", meaning: "รูปสุภาพ ปัจจุบัน/ปฏิเสธ/อดีต", examples: [
    { jp: "毎日勉強します。", romaji: "Mainichi benkyou shimasu.", th: "เรียนทุกวัน" },
    { jp: "今日は行きません。", romaji: "Kyou wa ikimasen.", th: "วันนี้ไม่ไป" },
    { jp: "昨日映画を見ました。", romaji: "Kinou eiga o mimashita.", th: "เมื่อวานดูหนัง" },
  ]},
  { title: "～たいです", pattern: "V-stem たいです", meaning: "อยาก... (ความต้องการของผู้พูด)", examples: [
    { jp: "日本へ行きたいです。", romaji: "Nihon e ikitai desu.", th: "อยากไปญี่ปุ่น" },
    { jp: "寿司を食べたいです。", romaji: "Sushi o tabetai desu.", th: "อยากกินซูชิ" },
    { jp: "今日は休みたい。", romaji: "Kyou wa yasumitai.", th: "วันนี้อยากพัก" },
  ]},
  { title: "～が好きです", pattern: "N が好き/嫌いです", meaning: "ชอบ / ไม่ชอบ N", examples: [
    { jp: "猫が好きです。", romaji: "Neko ga suki desu.", th: "ชอบแมว" },
    { jp: "辛い食べ物が好きです。", romaji: "Karai tabemono ga suki desu.", th: "ชอบอาหารเผ็ด" },
    { jp: "雨が嫌いです。", romaji: "Ame ga kirai desu.", th: "ไม่ชอบฝน" },
  ]},
  { title: "～から～まで", pattern: "～から ～まで", meaning: "ตั้งแต่...ถึง... (เวลา/สถานที่)", examples: [
    { jp: "9時から5時まで働きます。", romaji: "Ku-ji kara go-ji made hatarakimasu.", th: "ทำงานตั้งแต่ 9 ถึง 5 โมง" },
    { jp: "東京から大阪まで。", romaji: "Toukyou kara Oosaka made.", th: "จากโตเกียวถึงโอซาก้า" },
    { jp: "月曜日から金曜日まで授業があります。", romaji: "Getsuyoubi kara kinyoubi made jugyou ga arimasu.", th: "มีเรียนตั้งแต่จันทร์ถึงศุกร์" },
  ]},
  { title: "～と (ร่วมกับ)", pattern: "N と", meaning: "กับ (ร่วมกับใคร)", examples: [
    { jp: "友達と映画を見ます。", romaji: "Tomodachi to eiga o mimasu.", th: "ดูหนังกับเพื่อน" },
    { jp: "家族と旅行します。", romaji: "Kazoku to ryokou shimasu.", th: "เที่ยวกับครอบครัว" },
    { jp: "彼と話しました。", romaji: "Kare to hanashimashita.", th: "คุยกับเขา" },
  ]},
  { title: "～が～あります/います", pattern: "N が あります (สิ่งของ) / います (สิ่งมีชีวิต)", meaning: "มี...", examples: [
    { jp: "本があります。", romaji: "Hon ga arimasu.", th: "มีหนังสือ" },
    { jp: "猫がいます。", romaji: "Neko ga imasu.", th: "มีแมว" },
    { jp: "明日試験があります。", romaji: "Ashita shiken ga arimasu.", th: "พรุ่งนี้มีสอบ" },
  ]},
  { title: "～てください", pattern: "V-て + ください", meaning: "กรุณา...", examples: [
    { jp: "ゆっくり話してください。", romaji: "Yukkuri hanashite kudasai.", th: "กรุณาพูดช้าๆ" },
    { jp: "ここに名前を書いてください。", romaji: "Koko ni namae o kaite kudasai.", th: "กรุณาเขียนชื่อตรงนี้" },
    { jp: "見てください。", romaji: "Mite kudasai.", th: "ลองดูสิ" },
  ]},
  { title: "～ています", pattern: "V-て + います", meaning: "กำลัง... / สถานะที่ดำเนินอยู่", examples: [
    { jp: "今勉強しています。", romaji: "Ima benkyou shite imasu.", th: "ตอนนี้กำลังเรียน" },
    { jp: "結婚しています。", romaji: "Kekkon shite imasu.", th: "แต่งงานแล้ว (สถานะ)" },
    { jp: "東京に住んでいます。", romaji: "Toukyou ni sunde imasu.", th: "อาศัยอยู่ที่โตเกียว" },
  ]},
  { title: "～ない (ปฏิเสธรูปธรรมดา)", pattern: "V-ない", meaning: "ไม่... (รูปไม่สุภาพ)", examples: [
    { jp: "行かない。", romaji: "Ikanai.", th: "ไม่ไป" },
    { jp: "食べないでください。", romaji: "Tabenaide kudasai.", th: "อย่ากิน" },
    { jp: "知らないです。", romaji: "Shiranai desu.", th: "ไม่รู้" },
  ]},
  { title: "～でしょう", pattern: "～でしょう", meaning: "คงจะ..., ใช่มั้ย (คาดเดา/ขอความเห็น)", examples: [
    { jp: "明日は雨でしょう。", romaji: "Ashita wa ame deshou.", th: "พรุ่งนี้น่าจะฝนตก" },
    { jp: "彼は来るでしょう。", romaji: "Kare wa kuru deshou.", th: "เขาคงจะมา" },
    { jp: "高いでしょう。", romaji: "Takai deshou.", th: "แพงใช่มั้ย" },
  ]},
  { title: "i-adjective + です / な-adjective + です", pattern: "Adj-i です / Adj-na です", meaning: "คำคุณศัพท์ + กริยาช่วย", examples: [
    { jp: "本は面白いです。", romaji: "Hon wa omoshiroi desu.", th: "หนังสือสนุก" },
    { jp: "町は静かです。", romaji: "Machi wa shizuka desu.", th: "เมืองเงียบ" },
    { jp: "仕事は大変です。", romaji: "Shigoto wa taihen desu.", th: "งานหนัก" },
  ]},
  { title: "～より～のほうが", pattern: "A より B のほうが ～", meaning: "B กว่า A (เปรียบเทียบ)", examples: [
    { jp: "犬より猫のほうが好きです。", romaji: "Inu yori neko no hou ga suki desu.", th: "ชอบแมวมากกว่าหมา" },
    { jp: "東京は大阪より大きいです。", romaji: "Toukyou wa Oosaka yori ookii desu.", th: "โตเกียวใหญ่กว่าโอซาก้า" },
    { jp: "今日は昨日より暑いです。", romaji: "Kyou wa kinou yori atsui desu.", th: "วันนี้ร้อนกว่าเมื่อวาน" },
  ]},
];
