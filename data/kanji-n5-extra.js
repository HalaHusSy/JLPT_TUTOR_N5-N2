// Extra common N5 kanji coverage.
window.kanjiN5 = window.kanjiN5 || [];
window.kanjiN5.push(
  { char: "車", on: "シャ", kun: "くるま", romaji: "sha / kuruma", meaning: "รถ", examples: [
    { jp: "車で行きます。", romaji: "Kuruma de ikimasu.", th: "ไปด้วยรถยนต์" },
    { jp: "電車に乗ります。", romaji: "Densha ni norimasu.", th: "ขึ้นรถไฟ" },
  ]},
  { char: "電", on: "デン", kun: "—", romaji: "den", meaning: "ไฟฟ้า", examples: [
    { jp: "電車で学校へ行く。", romaji: "Densha de gakkou e iku.", th: "ไปโรงเรียนด้วยรถไฟ" },
    { jp: "電話をします。", romaji: "Denwa o shimasu.", th: "โทรศัพท์" },
  ]},
  { char: "駅", on: "エキ", kun: "—", romaji: "eki", meaning: "สถานีรถไฟ", examples: [
    { jp: "駅前で会いましょう。", romaji: "Ekimae de aimashou.", th: "เจอกันหน้าสถานี" },
  ]},
  { char: "店", on: "テン", kun: "みせ", romaji: "ten / mise", meaning: "ร้าน", examples: [
    { jp: "店でパンを買います。", romaji: "Mise de pan o kaimasu.", th: "ซื้อขนมปังที่ร้าน" },
  ]},
  { char: "会", on: "カイ", kun: "あ(う)", romaji: "kai / a(u)", meaning: "พบ, ประชุม", examples: [
    { jp: "友だちに会います。", romaji: "Tomodachi ni aimasu.", th: "พบเพื่อน" },
  ]},
  { char: "社", on: "シャ", kun: "やしろ", romaji: "sha / yashiro", meaning: "บริษัท, ศาลเจ้า", examples: [
    { jp: "会社で働きます。", romaji: "Kaisha de hatarakimasu.", th: "ทำงานที่บริษัท" },
  ]},
  { char: "休", on: "キュウ", kun: "やす(む)", romaji: "kyuu / yasu(mu)", meaning: "พัก, หยุด", examples: [
    { jp: "日曜日に休みます。", romaji: "Nichiyoubi ni yasumimasu.", th: "พักวันอาทิตย์" },
  ]},
  { char: "入", on: "ニュウ", kun: "はい(る)・い(れる)", romaji: "nyuu / hai(ru)", meaning: "เข้า, ใส่", examples: [
    { jp: "部屋に入ります。", romaji: "Heya ni hairimasu.", th: "เข้าห้อง" },
  ]},
  { char: "買", on: "バイ", kun: "か(う)", romaji: "bai / ka(u)", meaning: "ซื้อ", examples: [
    { jp: "本を買います。", romaji: "Hon o kaimasu.", th: "ซื้อหนังสือ" },
  ]},
  { char: "読", on: "ドク", kun: "よ(む)", romaji: "doku / yo(mu)", meaning: "อ่าน", examples: [
    { jp: "新聞を読みます。", romaji: "Shinbun o yomimasu.", th: "อ่านหนังสือพิมพ์" },
  ]},
  { char: "書", on: "ショ", kun: "か(く)", romaji: "sho / ka(ku)", meaning: "เขียน", examples: [
    { jp: "名前を書いてください。", romaji: "Namae o kaite kudasai.", th: "กรุณาเขียนชื่อ" },
  ]},
  { char: "話", on: "ワ", kun: "はな(す)・はなし", romaji: "wa / hana(su)", meaning: "พูด, เรื่องเล่า", examples: [
    { jp: "日本語で話します。", romaji: "Nihongo de hanashimasu.", th: "พูดภาษาญี่ปุ่น" },
  ]},
  { char: "帰", on: "キ", kun: "かえ(る)", romaji: "ki / kae(ru)", meaning: "กลับ", examples: [
    { jp: "家へ帰ります。", romaji: "Ie e kaerimasu.", th: "กลับบ้าน" },
  ]},
  { char: "町", on: "チョウ", kun: "まち", romaji: "chou / machi", meaning: "เมือง, ย่าน", examples: [
    { jp: "静かな町です。", romaji: "Shizuka na machi desu.", th: "เป็นเมืองที่เงียบ" },
  ]},
  { char: "村", on: "ソン", kun: "むら", romaji: "son / mura", meaning: "หมู่บ้าน", examples: [
    { jp: "小さい村に住んでいます。", romaji: "Chiisai mura ni sunde imasu.", th: "อาศัยอยู่ในหมู่บ้านเล็ก" },
  ]},
  { char: "花", on: "カ", kun: "はな", romaji: "ka / hana", meaning: "ดอกไม้", examples: [
    { jp: "花がきれいです。", romaji: "Hana ga kirei desu.", th: "ดอกไม้สวย" },
  ]},
  { char: "空", on: "クウ", kun: "そら・あ(く)", romaji: "kuu / sora", meaning: "ท้องฟ้า, ว่าง", examples: [
    { jp: "空が青いです。", romaji: "Sora ga aoi desu.", th: "ท้องฟ้าสีฟ้า" },
  ]},
  { char: "新", on: "シン", kun: "あたら(しい)", romaji: "shin / atara(shii)", meaning: "ใหม่", examples: [
    { jp: "新しい本を買いました。", romaji: "Atarashii hon o kaimashita.", th: "ซื้อหนังสือใหม่" },
  ]},
  { char: "古", on: "コ", kun: "ふる(い)", romaji: "ko / furu(i)", meaning: "เก่า", examples: [
    { jp: "古い町を歩きます。", romaji: "Furui machi o arukimasu.", th: "เดินในเมืองเก่า" },
  ]},
  { char: "多", on: "タ", kun: "おお(い)", romaji: "ta / oo(i)", meaning: "มาก", examples: [
    { jp: "人が多いです。", romaji: "Hito ga ooi desu.", th: "คนเยอะ" },
  ]},
  { char: "少", on: "ショウ", kun: "すく(ない)・すこ(し)", romaji: "shou / suku(nai)", meaning: "น้อย", examples: [
    { jp: "水が少ないです。", romaji: "Mizu ga sukunai desu.", th: "น้ำน้อย" },
  ]},
  { char: "長", on: "チョウ", kun: "なが(い)", romaji: "chou / naga(i)", meaning: "ยาว", examples: [
    { jp: "長い手紙を書きます。", romaji: "Nagai tegami o kakimasu.", th: "เขียนจดหมายยาว" },
  ]},
  { char: "高", on: "コウ", kun: "たか(い)", romaji: "kou / taka(i)", meaning: "สูง, แพง", examples: [
    { jp: "この時計は高いです。", romaji: "Kono tokei wa takai desu.", th: "นาฬิกาเรือนนี้แพง" },
  ]},
  { char: "安", on: "アン", kun: "やす(い)", romaji: "an / yasu(i)", meaning: "ถูก, สงบ", examples: [
    { jp: "この店は安いです。", romaji: "Kono mise wa yasui desu.", th: "ร้านนี้ราคาถูก" },
  ]},
  { char: "毎", on: "マイ", kun: "—", romaji: "mai", meaning: "ทุก ๆ", examples: [
    { jp: "毎日勉強します。", romaji: "Mainichi benkyou shimasu.", th: "เรียนทุกวัน" },
  ]},
  { char: "週", on: "シュウ", kun: "—", romaji: "shuu", meaning: "สัปดาห์", examples: [
    { jp: "来週会いましょう。", romaji: "Raishuu aimashou.", th: "เจอกันสัปดาห์หน้า" },
  ]},
  { char: "年", on: "ネン", kun: "とし", romaji: "nen / toshi", meaning: "ปี", examples: [
    { jp: "来年日本へ行きます。", romaji: "Rainen Nihon e ikimasu.", th: "ปีหน้าไปญี่ปุ่น" },
  ]},
  { char: "時", on: "ジ", kun: "とき", romaji: "ji / toki", meaning: "เวลา, โมง", examples: [
    { jp: "今何時ですか。", romaji: "Ima nanji desu ka.", th: "ตอนนี้กี่โมง" },
  ]},
  { char: "分", on: "フン・ブン", kun: "わ(かる)", romaji: "fun / bun", meaning: "นาที, ส่วน, เข้าใจ", examples: [
    { jp: "十分待ちます。", romaji: "Juppun machimasu.", th: "รอสิบนาที" },
  ]},
  { char: "半", on: "ハン", kun: "なか(ば)", romaji: "han", meaning: "ครึ่ง", examples: [
    { jp: "七時半に起きます。", romaji: "Shichiji han ni okimasu.", th: "ตื่นเจ็ดโมงครึ่ง" },
  ]},
  { char: "間", on: "カン", kun: "あいだ", romaji: "kan / aida", meaning: "ระหว่าง, ช่วงเวลา", examples: [
    { jp: "一時間勉強します。", romaji: "Ichi-jikan benkyou shimasu.", th: "เรียนหนึ่งชั่วโมง" },
  ]},
  { char: "午", on: "ゴ", kun: "—", romaji: "go", meaning: "เที่ยง", examples: [
    { jp: "午後三時です。", romaji: "Gogo sanji desu.", th: "บ่ายสามโมง" },
  ]},
  { char: "朝", on: "チョウ", kun: "あさ", romaji: "chou / asa", meaning: "เช้า", examples: [
    { jp: "朝ご飯を食べます。", romaji: "Asagohan o tabemasu.", th: "กินอาหารเช้า" },
  ]},
  { char: "昼", on: "チュウ", kun: "ひる", romaji: "chuu / hiru", meaning: "กลางวัน", examples: [
    { jp: "昼ご飯を食べます。", romaji: "Hirugohan o tabemasu.", th: "กินอาหารกลางวัน" },
  ]},
  { char: "夜", on: "ヤ", kun: "よる", romaji: "ya / yoru", meaning: "กลางคืน", examples: [
    { jp: "夜十時に寝ます。", romaji: "Yoru juuji ni nemasu.", th: "นอนตอนสี่ทุ่ม" },
  ]},
  { char: "東", on: "トウ", kun: "ひがし", romaji: "tou / higashi", meaning: "ทิศตะวันออก", examples: [
    { jp: "東京へ行きます。", romaji: "Toukyou e ikimasu.", th: "ไปโตเกียว" },
  ]},
  { char: "西", on: "セイ・サイ", kun: "にし", romaji: "sei / nishi", meaning: "ทิศตะวันตก", examples: [
    { jp: "西の空を見ます。", romaji: "Nishi no sora o mimasu.", th: "มองท้องฟ้าทางตะวันตก" },
  ]},
  { char: "南", on: "ナン", kun: "みなみ", romaji: "nan / minami", meaning: "ทิศใต้", examples: [
    { jp: "南へ行きます。", romaji: "Minami e ikimasu.", th: "ไปทางใต้" },
  ]},
  { char: "北", on: "ホク", kun: "きた", romaji: "hoku / kita", meaning: "ทิศเหนือ", examples: [
    { jp: "北の国は寒いです。", romaji: "Kita no kuni wa samui desu.", th: "ประเทศทางเหนือหนาว" },
  ]},
  { char: "春", on: "シュン", kun: "はる", romaji: "shun / haru", meaning: "ฤดูใบไม้ผลิ", examples: [
    { jp: "春は暖かいです。", romaji: "Haru wa atatakai desu.", th: "ฤดูใบไม้ผลิอบอุ่น" },
  ]},
  { char: "夏", on: "カ", kun: "なつ", romaji: "ka / natsu", meaning: "ฤดูร้อน", examples: [
    { jp: "夏休みがあります。", romaji: "Natsuyasumi ga arimasu.", th: "มีปิดเทอมฤดูร้อน" },
  ]},
  { char: "秋", on: "シュウ", kun: "あき", romaji: "shuu / aki", meaning: "ฤดูใบไม้ร่วง", examples: [
    { jp: "秋は涼しいです。", romaji: "Aki wa suzushii desu.", th: "ฤดูใบไม้ร่วงเย็นสบาย" },
  ]},
  { char: "冬", on: "トウ", kun: "ふゆ", romaji: "tou / fuyu", meaning: "ฤดูหนาว", examples: [
    { jp: "冬は寒いです。", romaji: "Fuyu wa samui desu.", th: "ฤดูหนาวหนาว" },
  ]},
);
