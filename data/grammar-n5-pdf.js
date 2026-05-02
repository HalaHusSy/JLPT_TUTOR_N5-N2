// N5 grammar - extended (comprehensive list for N5)
window.grammarN5 = window.grammarN5 || [];
window.grammarN5.push(
  { title: "～が (ตัวบ่งประธาน)", pattern: "N が V", meaning: "ใช้บ่งประธานของกริยา (ใหม่/เน้น)", examples: [
    { jp: "雨が降っています。", romaji: "Ame ga futte imasu.", th: "ฝนกำลังตก" },
    { jp: "誰が来ましたか。", romaji: "Dare ga kimashita ka.", th: "ใครมา" },
    { jp: "猫がいます。", romaji: "Neko ga imasu.", th: "มีแมว" },
  ]},
  { title: "～や～など", pattern: "N₁ や N₂ など", meaning: "...และ...เป็นต้น (ตัวอย่างไม่ครบ)", examples: [
    { jp: "りんごやバナナなどが好き。", romaji: "Ringo ya banana nado ga suki.", th: "ชอบแอปเปิล กล้วย ฯลฯ" },
    { jp: "東京や大阪などへ行く。", romaji: "Toukyou ya Oosaka nado e iku.", th: "ไปโตเกียว โอซาก้า ฯลฯ" },
    { jp: "本やノートなど。", romaji: "Hon ya nooto nado.", th: "หนังสือ สมุด ฯลฯ" },
  ]},
  { title: "～ね", pattern: "～ですね / ～ますね", meaning: "...นะ (ขอความเห็นพ้อง)", examples: [
    { jp: "今日は暑いですね。", romaji: "Kyou wa atsui desu ne.", th: "วันนี้ร้อนนะ" },
    { jp: "きれいですね。", romaji: "Kirei desu ne.", th: "สวยนะ" },
    { jp: "そうですね。", romaji: "Sou desu ne.", th: "ก็นะ / ใช่นะ" },
  ]},
  { title: "～よ", pattern: "～ですよ / ～ますよ", meaning: "...นะ (เน้น/ให้ข้อมูลใหม่)", examples: [
    { jp: "おいしいですよ。", romaji: "Oishii desu yo.", th: "อร่อยนะ" },
    { jp: "電車が来ますよ。", romaji: "Densha ga kimasu yo.", th: "รถไฟกำลังมานะ" },
    { jp: "知っていますよ。", romaji: "Shitte imasu yo.", th: "รู้อยู่แล้วนะ" },
  ]},
  { title: "～ましょう", pattern: "V-ましょう", meaning: "...กันเถอะ (ชวน)", examples: [
    { jp: "行きましょう。", romaji: "Ikimashou.", th: "ไปกันเถอะ" },
    { jp: "食べましょう。", romaji: "Tabemashou.", th: "กินกันเถอะ" },
    { jp: "始めましょう。", romaji: "Hajimemashou.", th: "เริ่มกัน" },
  ]},
  { title: "～ませんか", pattern: "V-ませんか", meaning: "ไป...ไหม (ชวนสุภาพ)", examples: [
    { jp: "コーヒーを飲みませんか。", romaji: "Koohii o nomimasen ka.", th: "ดื่มกาแฟกันไหม" },
    { jp: "映画を見ませんか。", romaji: "Eiga o mimasen ka.", th: "ดูหนังกันมั้ย" },
    { jp: "一緒に行きませんか。", romaji: "Issho ni ikimasen ka.", th: "ไปด้วยกันมั้ย" },
  ]},
  { title: "～たい", pattern: "V-stem + たい", meaning: "อยาก...", examples: [
    { jp: "行きたい。", romaji: "Ikitai.", th: "อยากไป" },
    { jp: "寿司を食べたい。", romaji: "Sushi o tabetai.", th: "อยากกินซูชิ" },
    { jp: "休みたいです。", romaji: "Yasumitai desu.", th: "อยากพัก" },
  ]},
  { title: "～たくない", pattern: "V-stem + たくない", meaning: "ไม่อยาก...", examples: [
    { jp: "行きたくない。", romaji: "Ikitakunai.", th: "ไม่อยากไป" },
    { jp: "勉強したくない。", romaji: "Benkyou shitakunai.", th: "ไม่อยากเรียน" },
    { jp: "食べたくないです。", romaji: "Tabetakunai desu.", th: "ไม่อยากกิน" },
  ]},
  { title: "～て (รูป Te-form)", pattern: "V-て", meaning: "เชื่อมประโยค / ขอร้อง", examples: [
    { jp: "起きて、食べて、出かけた。", romaji: "Okite, tabete, dekaketa.", th: "ตื่น กิน แล้วออก" },
    { jp: "見て!", romaji: "Mite!", th: "ดูนี่!" },
    { jp: "聞いてください。", romaji: "Kiite kudasai.", th: "ฟังด้วย" },
  ]},
  { title: "～ないでください", pattern: "V-ないでください", meaning: "กรุณาอย่า...", examples: [
    { jp: "走らないでください。", romaji: "Hashiranaide kudasai.", th: "อย่าวิ่ง" },
    { jp: "泣かないでください。", romaji: "Nakanaide kudasai.", th: "อย่าร้องไห้" },
    { jp: "ここで写真を撮らないで。", romaji: "Koko de shashin o toranaide.", th: "อย่าถ่ายรูปตรงนี้" },
  ]},
  { title: "～でしょう", pattern: "～でしょう", meaning: "คงจะ..., ใช่มั้ย", examples: [
    { jp: "明日は雨でしょう。", romaji: "Ashita wa ame deshou.", th: "พรุ่งนี้น่าจะฝน" },
    { jp: "彼は来るでしょう。", romaji: "Kare wa kuru deshou.", th: "เขาคงมา" },
    { jp: "高いでしょう。", romaji: "Takai deshou.", th: "แพงใช่มั้ย" },
  ]},
  { title: "～たり～たり", pattern: "V-たり V-たり する", meaning: "ทำ...ทำ...บ้าง (ตัวอย่างกิจกรรม)", examples: [
    { jp: "本を読んだり、テレビを見たりする。", romaji: "Hon o yondari, terebi o mitari suru.", th: "อ่านหนังสือบ้าง ดูทีวีบ้าง" },
    { jp: "歌ったり踊ったりした。", romaji: "Utattari odottari shita.", th: "ทั้งร้องทั้งเต้น" },
    { jp: "食べたり飲んだりする。", romaji: "Tabetari nondari suru.", th: "ทั้งกินทั้งดื่ม" },
  ]},
  { title: "～から (เพราะว่า)", pattern: "S + から", meaning: "เพราะว่า... (เหตุผล)", examples: [
    { jp: "暑いから水を飲む。", romaji: "Atsui kara mizu o nomu.", th: "ดื่มน้ำเพราะร้อน" },
    { jp: "忙しいから行けない。", romaji: "Isogashii kara ikenai.", th: "ไปไม่ได้เพราะยุ่ง" },
    { jp: "明日テストだから勉強する。", romaji: "Ashita tesuto da kara benkyou suru.", th: "เรียนเพราะพรุ่งนี้สอบ" },
  ]},
  { title: "～ので", pattern: "S + ので", meaning: "เพราะ... (ทางการกว่า から)", examples: [
    { jp: "雨が降っているので休む。", romaji: "Ame ga futte iru node yasumu.", th: "หยุดเพราะฝนตก" },
    { jp: "病気なので来ません。", romaji: "Byouki na node kimasen.", th: "ไม่มาเพราะป่วย" },
    { jp: "忙しいので失礼します。", romaji: "Isogashii node shitsurei shimasu.", th: "ขอตัวเพราะยุ่ง" },
  ]},
  { title: "～が (แต่)", pattern: "S₁ が、S₂", meaning: "...แต่... (ขัดแย้ง)", examples: [
    { jp: "高いですが、おいしいです。", romaji: "Takai desu ga, oishii desu.", th: "แพงแต่อร่อย" },
    { jp: "雨ですが、行きます。", romaji: "Ame desu ga, ikimasu.", th: "ฝนตกแต่ไป" },
    { jp: "難しいですが、面白い。", romaji: "Muzukashii desu ga, omoshiroi.", th: "ยากแต่สนุก" },
  ]},
  { title: "～でも (แต่ก็)", pattern: "S₁。でも、S₂", meaning: "แต่ (ขึ้นประโยคใหม่)", examples: [
    { jp: "疲れた。でも、行く。", romaji: "Tsukareta. Demo, iku.", th: "เหนื่อย แต่ก็จะไป" },
    { jp: "高い。でも、買う。", romaji: "Takai. Demo, kau.", th: "แพง แต่จะซื้อ" },
    { jp: "雨でも行く。", romaji: "Ame demo iku.", th: "ฝนตกก็ไป" },
  ]},
  { title: "～と (ร่วมกับ)", pattern: "N と V", meaning: "กับ (ร่วมทำกิจกรรม)", examples: [
    { jp: "友だちと食べる。", romaji: "Tomodachi to taberu.", th: "กินกับเพื่อน" },
    { jp: "母と買い物。", romaji: "Haha to kaimono.", th: "ซื้อของกับแม่" },
    { jp: "彼と話す。", romaji: "Kare to hanasu.", th: "คุยกับเขา" },
  ]},
  { title: "～で (วิธี/อุปกรณ์)", pattern: "N で V", meaning: "ด้วย... (เครื่องมือ)", examples: [
    { jp: "ペンで書く。", romaji: "Pen de kaku.", th: "เขียนด้วยปากกา" },
    { jp: "電車で行く。", romaji: "Densha de iku.", th: "ไปด้วยรถไฟ" },
    { jp: "日本語で話す。", romaji: "Nihongo de hanasu.", th: "พูดเป็นภาษาญี่ปุ่น" },
  ]},
  { title: "～時 (とき)", pattern: "V/Adj/N + 時", meaning: "ตอนที่...", examples: [
    { jp: "子どもの時。", romaji: "Kodomo no toki.", th: "ตอนเด็ก" },
    { jp: "暇な時に来てください。", romaji: "Hima na toki ni kite kudasai.", th: "ว่างแล้วมาด้วย" },
    { jp: "食べる時に手を洗う。", romaji: "Taberu toki ni te o arau.", th: "ล้างมือตอนกิน" },
  ]},
  { title: "～前に", pattern: "V-辞書 + 前に / N の前に", meaning: "ก่อน...", examples: [
    { jp: "食べる前に手を洗う。", romaji: "Taberu mae ni te o arau.", th: "ล้างมือก่อนกิน" },
    { jp: "寝る前に歯をみがく。", romaji: "Neru mae ni ha o migaku.", th: "แปรงฟันก่อนนอน" },
    { jp: "三日前に会った。", romaji: "Mikka mae ni atta.", th: "เจอเมื่อสามวันก่อน" },
  ]},
  { title: "～後で (あとで)", pattern: "V-た + 後で / N の後で", meaning: "หลังจาก...", examples: [
    { jp: "食べた後で寝る。", romaji: "Tabeta ato de neru.", th: "กินแล้วก็นอน" },
    { jp: "授業の後で会おう。", romaji: "Jugyou no ato de aou.", th: "หลังเรียนเจอกัน" },
    { jp: "終わった後で帰る。", romaji: "Owatta ato de kaeru.", th: "พอเสร็จก็กลับ" },
  ]},
  { title: "～か～か", pattern: "A か B か", meaning: "...หรือ... (เลือก)", examples: [
    { jp: "コーヒーかお茶か。", romaji: "Koohii ka ocha ka.", th: "กาแฟหรือชา" },
    { jp: "行くか行かないか。", romaji: "Iku ka ikanai ka.", th: "ไปหรือไม่ไป" },
    { jp: "本かノートか買う。", romaji: "Hon ka nooto ka kau.", th: "ซื้อหนังสือหรือสมุด" },
  ]},
  { title: "数字 + 助数詞 (ลักษณนาม)", pattern: "Number + counter (一つ, 二人, 三冊...)", meaning: "นับด้วยลักษณนาม", examples: [
    { jp: "りんごを三つください。", romaji: "Ringo o mittsu kudasai.", th: "ขอแอปเปิ้ล 3 ลูก" },
    { jp: "本が二冊あります。", romaji: "Hon ga ni-satsu arimasu.", th: "มีหนังสือ 2 เล่ม" },
    { jp: "学生が四人います。", romaji: "Gakusei ga yon-nin imasu.", th: "มีนักเรียน 4 คน" },
  ]},
  { title: "～ことです", pattern: "V-辞書 + ことです", meaning: "การ... (เปลี่ยนกริยาเป็นนาม)", examples: [
    { jp: "趣味は本を読むことです。", romaji: "Shumi wa hon o yomu koto desu.", th: "งานอดิเรกคืออ่านหนังสือ" },
    { jp: "夢は先生になることです。", romaji: "Yume wa sensei ni naru koto desu.", th: "ความฝันคือเป็นครู" },
    { jp: "好きなことは料理。", romaji: "Suki na koto wa ryouri.", th: "สิ่งที่ชอบคือทำอาหาร" },
  ]},
  { title: "～が～できます", pattern: "N が できます", meaning: "ทำ...ได้", examples: [
    { jp: "日本語ができます。", romaji: "Nihongo ga dekimasu.", th: "พูดภาษาญี่ปุ่นได้" },
    { jp: "運転ができますか。", romaji: "Unten ga dekimasu ka.", th: "ขับรถได้ไหม" },
    { jp: "料理ができる。", romaji: "Ryouri ga dekiru.", th: "ทำอาหารได้" },
  ]},
  { title: "～へ (ทิศทาง)", pattern: "場所 へ V", meaning: "ไปยัง... (ทิศทาง)", examples: [
    { jp: "学校へ行く。", romaji: "Gakkou e iku.", th: "ไปโรงเรียน" },
    { jp: "東京へ来た。", romaji: "Toukyou e kita.", th: "มาที่โตเกียว" },
    { jp: "家へ帰る。", romaji: "Ie e kaeru.", th: "กลับบ้าน" },
  ]},
  { title: "～について", pattern: "N + について", meaning: "เกี่ยวกับ... (พื้นฐาน)", examples: [
    { jp: "日本について話す。", romaji: "Nihon ni tsuite hanasu.", th: "คุยเรื่องเกี่ยวกับญี่ปุ่น" },
    { jp: "歴史について勉強。", romaji: "Rekishi ni tsuite benkyou.", th: "เรียนเรื่องประวัติศาสตร์" },
    { jp: "それについてどう思う?", romaji: "Sore ni tsuite dou omou?", th: "คิดยังไงเกี่ยวกับเรื่องนั้น" },
  ]},
  { title: "～と思う", pattern: "[plain] + と思う", meaning: "คิดว่า...", examples: [
    { jp: "おいしいと思う。", romaji: "Oishii to omou.", th: "คิดว่าอร่อย" },
    { jp: "彼は来ると思う。", romaji: "Kare wa kuru to omou.", th: "คิดว่าเขามา" },
    { jp: "難しいと思います。", romaji: "Muzukashii to omoimasu.", th: "คิดว่ายาก" },
  ]},
  { title: "～と言う", pattern: "「～」と言う", meaning: "พูดว่า...", examples: [
    { jp: "「ありがとう」と言った。", romaji: "“Arigatou” to itta.", th: "พูดว่า ‘ขอบคุณ’" },
    { jp: "彼は来ると言った。", romaji: "Kare wa kuru to itta.", th: "เขาบอกว่าจะมา" },
    { jp: "何と言いましたか。", romaji: "Nan to iimashita ka.", th: "พูดว่าอะไร" },
  ]},
  { title: "～ながら (ทำพร้อมกัน)", pattern: "V-stem + ながら", meaning: "ขณะที่ทำ... (สองอย่างพร้อม)", examples: [
    { jp: "歌いながら歩く。", romaji: "Utainagara aruku.", th: "เดินไปร้องเพลงไป" },
    { jp: "テレビを見ながら食べる。", romaji: "Terebi o mi nagara taberu.", th: "ดูทีวีไปกินไป" },
    { jp: "話しながら勉強する。", romaji: "Hanashinagara benkyou suru.", th: "เรียนไปคุยไป" },
  ]},
  { title: "～ことができる", pattern: "V-辞書 + ことができる", meaning: "สามารถ...ได้", examples: [
    { jp: "話すことができる。", romaji: "Hanasu koto ga dekiru.", th: "พูดได้" },
    { jp: "泳ぐことができない。", romaji: "Oyogu koto ga dekinai.", th: "ว่ายน้ำไม่ได้" },
    { jp: "食べることができますか。", romaji: "Taberu koto ga dekimasu ka.", th: "กินได้มั้ย" },
  ]},
  { title: "～は～が (เปรียบเทียบสองสิ่ง)", pattern: "A は～が、B は～", meaning: "A...แต่ B... (เปรียบ)", examples: [
    { jp: "夏は暑いが、冬は寒い。", romaji: "Natsu wa atsui ga, fuyu wa samui.", th: "ฤดูร้อนร้อน แต่หนาวแปลก" },
    { jp: "私は犬が好きだが、猫は嫌い。", romaji: "Watashi wa inu ga suki da ga, neko wa kirai.", th: "ฉันชอบหมาแต่ไม่ชอบแมว" },
    { jp: "東京は人が多いが、京都は少ない。", romaji: "Toukyou wa hito ga ooi ga, Kyouto wa sukunai.", th: "โตเกียวคนเยอะ แต่เกียวโตน้อย" },
  ]},
);
