window.grammarN4 = [
  { title: "～と思います", pattern: "[plain form] + と思います", meaning: "คิดว่า... (ความเห็นผู้พูด)", examples: [
    { jp: "明日は雨が降ると思います。", romaji: "Ashita wa ame ga furu to omoimasu.", th: "คิดว่าพรุ่งนี้ฝนจะตก" },
    { jp: "それは難しいと思います。", romaji: "Sore wa muzukashii to omoimasu.", th: "คิดว่ามันยาก" },
    { jp: "彼は来ないと思う。", romaji: "Kare wa konai to omou.", th: "คิดว่าเขาคงไม่มา" },
  ]},
  { title: "～と言いました", pattern: "「～」/[plain form] + と言いました", meaning: "บอกว่า... / พูดว่า...", examples: [
    { jp: "彼は「行きます」と言いました。", romaji: "Kare wa “Ikimasu” to iimashita.", th: "เขาพูดว่า 'จะไป'" },
    { jp: "母は元気だと言いました。", romaji: "Haha wa genki da to iimashita.", th: "แม่บอกว่าสบายดี" },
    { jp: "先生は明日テストがあると言いました。", romaji: "Sensei wa ashita tesuto ga aru to iimashita.", th: "ครูบอกว่าพรุ่งนี้มีสอบ" },
  ]},
  { title: "～たことがあります", pattern: "V-た + ことがあります", meaning: "เคย...", examples: [
    { jp: "日本へ行ったことがあります。", romaji: "Nihon e itta koto ga arimasu.", th: "เคยไปญี่ปุ่น" },
    { jp: "寿司を食べたことがありません。", romaji: "Sushi o tabeta koto ga arimasen.", th: "ไม่เคยกินซูชิ" },
    { jp: "彼に会ったことがあります。", romaji: "Kare ni atta koto ga arimasu.", th: "เคยเจอเขา" },
  ]},
  { title: "～ながら", pattern: "V-stem + ながら", meaning: "ขณะที่..., ทำพร้อมๆ กัน", examples: [
    { jp: "音楽を聞きながら勉強します。", romaji: "Ongaku o kiki nagara benkyou shimasu.", th: "เรียนไปฟังเพลงไป" },
    { jp: "歩きながら話します。", romaji: "Aruki nagara hanashimasu.", th: "เดินไปคุยไป" },
    { jp: "テレビを見ながら食べる。", romaji: "Terebi o mi nagara taberu.", th: "กินไปดูทีวีไป" },
  ]},
  { title: "～ことができます", pattern: "V-辞書 + ことができます", meaning: "สามารถ...ได้", examples: [
    { jp: "日本語を話すことができます。", romaji: "Nihongo o hanasu koto ga dekimasu.", th: "พูดภาษาญี่ปุ่นได้" },
    { jp: "ピアノを弾くことができます。", romaji: "Piano o hiku koto ga dekimasu.", th: "เล่นเปียโนได้" },
    { jp: "泳ぐことができません。", romaji: "Oyogu koto ga dekimasen.", th: "ว่ายน้ำไม่เป็น" },
  ]},
  { title: "Potential form (V-える/られる)", pattern: "食べる→食べられる, 行く→行ける", meaning: "รูปสามารถ ทำ...ได้", examples: [
    { jp: "刺身が食べられます。", romaji: "Sashimi ga taberaremasu.", th: "กินซาชิมิได้" },
    { jp: "明日来られますか。", romaji: "Ashita koraremasu ka.", th: "พรุ่งนี้มาได้มั้ย" },
    { jp: "漢字が読めます。", romaji: "Kanji ga yomemasu.", th: "อ่านคันจิได้" },
  ]},
  { title: "～たら", pattern: "V-た + ら", meaning: "ถ้า..., เมื่อ... (เงื่อนไข)", examples: [
    { jp: "雨が降ったら行きません。", romaji: "Ame ga futtara ikimasen.", th: "ถ้าฝนตกจะไม่ไป" },
    { jp: "終わったら教えてください。", romaji: "Owattara oshiete kudasai.", th: "เสร็จแล้วบอกหน่อย" },
    { jp: "時間があったら遊びに来てください。", romaji: "Jikan ga attara asobi ni kite kudasai.", th: "ถ้ามีเวลามาเล่นด้วยกันสิ" },
  ]},
  { title: "～ば", pattern: "V-ば / Adj-ければ", meaning: "ถ้า... (เงื่อนไข)", examples: [
    { jp: "安ければ買います。", romaji: "Yasukereba kaimasu.", th: "ถ้าถูกจะซื้อ" },
    { jp: "雨が降れば中止です。", romaji: "Ame ga fureba chuushi desu.", th: "ถ้าฝนตกจะยกเลิก" },
    { jp: "頑張れば成功します。", romaji: "Ganbareba seikou shimasu.", th: "ถ้าพยายามจะสำเร็จ" },
  ]},
  { title: "～ても", pattern: "V-て + も", meaning: "ถึงจะ..., แม้ว่า...ก็", examples: [
    { jp: "雨が降っても行きます。", romaji: "Ame ga futte mo ikimasu.", th: "ถึงฝนตกก็จะไป" },
    { jp: "高くても買います。", romaji: "Takakute mo kaimasu.", th: "ถึงแพงก็จะซื้อ" },
    { jp: "疲れても頑張ります。", romaji: "Tsukarete mo ganbarimasu.", th: "ถึงเหนื่อยก็จะพยายาม" },
  ]},
  { title: "～なければなりません", pattern: "V-ない + なければなりません", meaning: "ต้อง..., จำเป็นต้อง...", examples: [
    { jp: "宿題をしなければなりません。", romaji: "Shukudai o shinakereba narimasen.", th: "ต้องทำการบ้าน" },
    { jp: "早く起きなければなりません。", romaji: "Hayaku okinakereba narimasen.", th: "ต้องตื่นเช้า" },
    { jp: "薬を飲まなくちゃいけない。", romaji: "Kusuri o nomanakucha ikenai.", th: "ต้องกินยา (พูดเล่น)" },
  ]},
  { title: "～てもいいです / ～てはいけません", pattern: "V-て + もいい / はいけない", meaning: "...ก็ได้ / ห้าม...", examples: [
    { jp: "ここで写真を撮ってもいいですか。", romaji: "Koko de shashin o totte mo ii desu ka.", th: "ถ่ายรูปตรงนี้ได้มั้ย" },
    { jp: "中に入ってはいけません。", romaji: "Naka ni haitte wa ikemasen.", th: "ห้ามเข้าด้านใน" },
    { jp: "話してもいいです。", romaji: "Hanashite mo ii desu.", th: "พูดก็ได้" },
  ]},
  { title: "～あげる / もらう / くれる", pattern: "[ใครให้ใคร] あげる / もらう / くれる", meaning: "ให้ / ได้รับ / มาให้ (กริยาให้-รับ)", examples: [
    { jp: "友達にプレゼントをあげました。", romaji: "Tomodachi ni purezento o agemashita.", th: "ให้ของขวัญเพื่อน" },
    { jp: "母から手紙をもらいました。", romaji: "Haha kara tegami o moraimashita.", th: "ได้จดหมายจากแม่" },
    { jp: "先生がノートをくれました。", romaji: "Sensei ga nooto o kuremashita.", th: "ครูให้สมุดมา" },
  ]},
  { title: "～つもりです", pattern: "V-辞書 + つもりです", meaning: "ตั้งใจจะ..., มีแผนที่จะ...", examples: [
    { jp: "来年日本へ行くつもりです。", romaji: "Rainen Nihon e iku tsumori desu.", th: "ปีหน้าตั้งใจจะไปญี่ปุ่น" },
    { jp: "今日は早く帰るつもりです。", romaji: "Kyou wa hayaku kaeru tsumori desu.", th: "วันนี้ตั้งใจจะกลับเร็ว" },
    { jp: "結婚するつもりはありません。", romaji: "Kekkon suru tsumori wa arimasen.", th: "ไม่มีแผนจะแต่งงาน" },
  ]},
  { title: "～ようです / ～みたいです", pattern: "[plain] + よう/みたいです", meaning: "ดูเหมือนว่า...", examples: [
    { jp: "雨が降っているようです。", romaji: "Ame ga futte iru you desu.", th: "ดูเหมือนฝนกำลังตก" },
    { jp: "彼は忙しいみたいです。", romaji: "Kare wa isogashii mitai desu.", th: "เขาดูยุ่งๆ" },
    { jp: "事故があったようです。", romaji: "Jiko ga atta you desu.", th: "ดูเหมือนมีอุบัติเหตุ" },
  ]},
  { title: "～そうです (ฟังมา)", pattern: "[plain] + そうです", meaning: "ได้ยินว่า..., ทราบว่า...", examples: [
    { jp: "明日は雨だそうです。", romaji: "Ashita wa ame da sou desu.", th: "ได้ยินว่าพรุ่งนี้ฝนตก" },
    { jp: "彼は結婚するそうです。", romaji: "Kare wa kekkon suru sou desu.", th: "ได้ยินว่าเขาจะแต่งงาน" },
    { jp: "そのレストランは美味しいそうです。", romaji: "Sono resutoran wa oishii sou desu.", th: "ได้ยินว่าร้านนั้นอร่อย" },
  ]},
  { title: "～そうです (ดูเหมือน)", pattern: "Adj/V-stem + そうです", meaning: "ดูเหมือนจะ..., ท่าทาง...", examples: [
    { jp: "美味しそうです。", romaji: "Oishi-sou desu.", th: "ดูน่ากิน" },
    { jp: "雨が降りそうです。", romaji: "Ame ga furi-sou desu.", th: "ฝนท่าจะตก" },
    { jp: "彼は元気そうです。", romaji: "Kare wa genki-sou desu.", th: "เขาดูสบายดี" },
  ]},
];
