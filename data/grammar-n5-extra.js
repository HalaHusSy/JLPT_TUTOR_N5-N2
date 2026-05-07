// Extra common N5 grammar coverage.
window.grammarN5 = window.grammarN5 || [];
window.grammarN5.push(
  { title: "これ・それ・あれ", pattern: "これ / それ / あれ は N です", meaning: "นี่ / นั่น / โน่น คือ...", examples: [
    { jp: "これは本です。", romaji: "Kore wa hon desu.", th: "นี่คือหนังสือ" },
    { jp: "それは何ですか。", romaji: "Sore wa nan desu ka.", th: "นั่นคืออะไร" },
  ]},
  { title: "この・その・あの", pattern: "この / その / あの + N", meaning: "N นี้ / นั้น / โน้น", examples: [
    { jp: "このかばんは高いです。", romaji: "Kono kaban wa takai desu.", th: "กระเป๋าใบนี้แพง" },
    { jp: "あの人は先生です。", romaji: "Ano hito wa sensei desu.", th: "คนนั้นเป็นครู" },
  ]},
  { title: "ここ・そこ・あそこ", pattern: "ここ / そこ / あそこ は 場所 です", meaning: "ที่นี่ / ที่นั่น / ที่โน่น เป็น...", examples: [
    { jp: "ここは図書館です。", romaji: "Koko wa toshokan desu.", th: "ที่นี่คือห้องสมุด" },
    { jp: "トイレはあそこです。", romaji: "Toire wa asoko desu.", th: "ห้องน้ำอยู่ตรงโน้น" },
  ]},
  { title: "だれ・何・どこ", pattern: "だれ / 何 / どこ + ですか", meaning: "ใคร / อะไร / ที่ไหน", examples: [
    { jp: "あの人はだれですか。", romaji: "Ano hito wa dare desu ka.", th: "คนนั้นคือใคร" },
    { jp: "駅はどこですか。", romaji: "Eki wa doko desu ka.", th: "สถานีอยู่ที่ไหน" },
  ]},
  { title: "い形容詞ปฏิเสธ", pattern: "Adj-i くないです", meaning: "ไม่... (คำคุณศัพท์ い)", examples: [
    { jp: "今日は寒くないです。", romaji: "Kyou wa samukunai desu.", th: "วันนี้ไม่หนาว" },
    { jp: "この本は高くないです。", romaji: "Kono hon wa takakunai desu.", th: "หนังสือเล่มนี้ไม่แพง" },
  ]},
  { title: "い形容詞อดีต", pattern: "Adj-i かったです / くなかったです", meaning: "...แล้ว / ไม่...แล้วในอดีต", examples: [
    { jp: "昨日は暑かったです。", romaji: "Kinou wa atsukatta desu.", th: "เมื่อวานร้อน" },
    { jp: "映画はおもしろくなかったです。", romaji: "Eiga wa omoshirokunakatta desu.", th: "หนังไม่สนุก" },
  ]},
  { title: "な形容詞อดีต/ปฏิเสธ", pattern: "Adj-na でした / ではありませんでした", meaning: "เคย... / ไม่ได้...", examples: [
    { jp: "町は静かでした。", romaji: "Machi wa shizuka deshita.", th: "เมืองเงียบ" },
    { jp: "部屋はきれいではありませんでした。", romaji: "Heya wa kirei dewa arimasen deshita.", th: "ห้องไม่สะอาด" },
  ]},
  { title: "คำนามอดีต", pattern: "N でした / ではありませんでした", meaning: "เคยเป็น... / ไม่ได้เป็น...", examples: [
    { jp: "昨日は休みでした。", romaji: "Kinou wa yasumi deshita.", th: "เมื่อวานเป็นวันหยุด" },
    { jp: "あの人は先生ではありませんでした。", romaji: "Ano hito wa sensei dewa arimasen deshita.", th: "คนนั้นไม่ได้เป็นครู" },
  ]},
  { title: "場所にNがあります/います", pattern: "場所 に N が あります / います", meaning: "มี N อยู่ที่สถานที่", examples: [
    { jp: "机の上に本があります。", romaji: "Tsukue no ue ni hon ga arimasu.", th: "มีหนังสืออยู่บนโต๊ะ" },
    { jp: "教室に学生がいます。", romaji: "Kyoushitsu ni gakusei ga imasu.", th: "มีนักเรียนอยู่ในห้องเรียน" },
  ]},
  { title: "Nは場所にあります/います", pattern: "N は 場所 に あります / います", meaning: "N อยู่ที่...", examples: [
    { jp: "トイレは一階にあります。", romaji: "Toire wa ikkai ni arimasu.", th: "ห้องน้ำอยู่ชั้นหนึ่ง" },
    { jp: "先生は事務室にいます。", romaji: "Sensei wa jimushitsu ni imasu.", th: "ครูอยู่ที่ห้องธุรการ" },
  ]},
  { title: "時間に", pattern: "時間 に V", meaning: "ทำกริยาตอนเวลา...", examples: [
    { jp: "六時に起きます。", romaji: "Rokuji ni okimasu.", th: "ตื่นหกโมง" },
    { jp: "月曜日に試験があります。", romaji: "Getsuyoubi ni shiken ga arimasu.", th: "มีสอบวันจันทร์" },
  ]},
  { title: "～てから", pattern: "V-て から", meaning: "หลังจากทำ...แล้ว", examples: [
    { jp: "宿題をしてから寝ます。", romaji: "Shukudai o shite kara nemasu.", th: "ทำการบ้านแล้วค่อยนอน" },
    { jp: "手を洗ってから食べます。", romaji: "Te o aratte kara tabemasu.", th: "ล้างมือแล้วค่อยกิน" },
  ]},
  { title: "～てもいいです", pattern: "V-て もいいです", meaning: "ทำ...ก็ได้ / อนุญาตให้ทำ", examples: [
    { jp: "ここで写真を撮ってもいいです。", romaji: "Koko de shashin o totte mo ii desu.", th: "ถ่ายรูปที่นี่ได้" },
    { jp: "入ってもいいですか。", romaji: "Haitte mo ii desu ka.", th: "เข้าไปได้ไหม" },
  ]},
  { title: "～てはいけません", pattern: "V-て はいけません", meaning: "ห้ามทำ...", examples: [
    { jp: "ここでタバコを吸ってはいけません。", romaji: "Koko de tabako o sutte wa ikemasen.", th: "ห้ามสูบบุหรี่ที่นี่" },
    { jp: "この水を飲んではいけません。", romaji: "Kono mizu o nonde wa ikemasen.", th: "ห้ามดื่มน้ำนี้" },
  ]},
  { title: "～なくてもいいです", pattern: "V-なくてもいいです", meaning: "ไม่ต้องทำ...ก็ได้", examples: [
    { jp: "明日来なくてもいいです。", romaji: "Ashita konakute mo ii desu.", th: "พรุ่งนี้ไม่ต้องมาก็ได้" },
    { jp: "名前を書かなくてもいいです。", romaji: "Namae o kakanakute mo ii desu.", th: "ไม่ต้องเขียนชื่อก็ได้" },
  ]},
  { title: "～なければなりません", pattern: "V-なければなりません", meaning: "ต้องทำ...", examples: [
    { jp: "毎日勉強しなければなりません。", romaji: "Mainichi benkyou shinakereba narimasen.", th: "ต้องเรียนทุกวัน" },
    { jp: "薬を飲まなければなりません。", romaji: "Kusuri o nomanakereba narimasen.", th: "ต้องกินยา" },
  ]},
  { title: "～ましょうか", pattern: "V-ましょうか", meaning: "ให้ช่วยทำ...ไหม", examples: [
    { jp: "窓を開けましょうか。", romaji: "Mado o akemashou ka.", th: "ให้เปิดหน้าต่างไหม" },
    { jp: "荷物を持ちましょうか。", romaji: "Nimotsu o mochimashou ka.", th: "ให้ช่วยถือของไหม" },
  ]},
  { title: "～方", pattern: "V-stem 方", meaning: "วิธีทำ...", examples: [
    { jp: "この漢字の読み方を教えてください。", romaji: "Kono kanji no yomikata o oshiete kudasai.", th: "กรุณาสอนวิธีอ่านคันจินี้" },
    { jp: "行き方がわかりません。", romaji: "Ikikata ga wakarimasen.", th: "ไม่รู้วิธีไป" },
  ]},
  { title: "～になります", pattern: "N / Adj-na に なります", meaning: "กลายเป็น..., เป็น...", examples: [
    { jp: "先生になりたいです。", romaji: "Sensei ni naritai desu.", th: "อยากเป็นครู" },
    { jp: "部屋がきれいになりました。", romaji: "Heya ga kirei ni narimashita.", th: "ห้องสะอาดขึ้นแล้ว" },
  ]},
  { title: "～くなります", pattern: "Adj-i く なります", meaning: "กลายเป็น...ขึ้น", examples: [
    { jp: "寒くなりました。", romaji: "Samuku narimashita.", th: "หนาวขึ้นแล้ว" },
    { jp: "日本語が少し上手になりました。", romaji: "Nihongo ga sukoshi jouzu ni narimashita.", th: "ภาษาญี่ปุ่นเก่งขึ้นนิดหน่อย" },
  ]},
  { title: "～がほしいです", pattern: "N が ほしいです", meaning: "อยากได้...", examples: [
    { jp: "新しいかばんがほしいです。", romaji: "Atarashii kaban ga hoshii desu.", th: "อยากได้กระเป๋าใหม่" },
    { jp: "水がほしいです。", romaji: "Mizu ga hoshii desu.", th: "อยากได้น้ำ" },
  ]},
  { title: "～だけ", pattern: "N / จำนวน だけ", meaning: "เพียง..., แค่...", examples: [
    { jp: "一つだけください。", romaji: "Hitotsu dake kudasai.", th: "ขอแค่อันเดียว" },
    { jp: "日曜日だけ休みです。", romaji: "Nichiyoubi dake yasumi desu.", th: "หยุดแค่วันอาทิตย์" },
  ]},
  { title: "～しか～ない", pattern: "N しか V-ない", meaning: "มี/ทำแค่...เท่านั้น", examples: [
    { jp: "百円しかありません。", romaji: "Hyaku-en shika arimasen.", th: "มีแค่ 100 เยน" },
    { jp: "日本語しか話せません。", romaji: "Nihongo shika hanasemasen.", th: "พูดได้แค่ภาษาญี่ปุ่น" },
  ]},
  { title: "～くらい / ぐらい", pattern: "จำนวน / เวลา + くらい", meaning: "ประมาณ...", examples: [
    { jp: "三十分くらい待ちました。", romaji: "Sanjuppun kurai machimashita.", th: "รอประมาณ 30 นาที" },
    { jp: "学生が十人ぐらいいます。", romaji: "Gakusei ga juunin gurai imasu.", th: "มีนักเรียนประมาณ 10 คน" },
  ]},
  { title: "～より", pattern: "A は B より Adj", meaning: "A ... กว่า B", examples: [
    { jp: "東京は大阪より大きいです。", romaji: "Toukyou wa Oosaka yori ookii desu.", th: "โตเกียวใหญ่กว่าโอซาก้า" },
    { jp: "今日は昨日より寒いです。", romaji: "Kyou wa kinou yori samui desu.", th: "วันนี้หนาวกว่าเมื่อวาน" },
  ]},
  { title: "～ほど～ない", pattern: "A は B ほど Adj-ない", meaning: "A ไม่...เท่า B", examples: [
    { jp: "この町は東京ほどにぎやかではありません。", romaji: "Kono machi wa Toukyou hodo nigiyaka dewa arimasen.", th: "เมืองนี้ไม่คึกคักเท่าโตเกียว" },
    { jp: "今日は昨日ほど寒くないです。", romaji: "Kyou wa kinou hodo samukunai desu.", th: "วันนี้ไม่หนาวเท่าเมื่อวาน" },
  ]},
  { title: "一番", pattern: "N の中で A が 一番 Adj", meaning: "ในบรรดา... A ...ที่สุด", examples: [
    { jp: "スポーツの中でサッカーが一番好きです。", romaji: "Supootsu no naka de sakkaa ga ichiban suki desu.", th: "ในบรรดากีฬา ชอบฟุตบอลที่สุด" },
    { jp: "一年で八月が一番暑いです。", romaji: "Ichinen de hachigatsu ga ichiban atsui desu.", th: "ในหนึ่งปี เดือนสิงหาคมร้อนที่สุด" },
  ]},
);
