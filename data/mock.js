window.MOCK_EXAMS = {
  N5: [
    {
      title: "Mock JLPT N5 — ชุดที่ 1 (ภาษาและไวยากรณ์)",
      questions: [
        { q: "わたし___学生です。", choices: ["は", "を", "で", "に"], answer: 0, romaji: "Watashi WA gakusei desu.", explanation: "'は (wa)' = ตัวบ่งชี้ประธานของประโยค" },
        { q: "毎朝六時___起きます。", choices: ["で", "に", "を", "が"], answer: 1, romaji: "Maiasa rokuji NI okimasu.", explanation: "'に' ใช้กับเวลาเฉพาะเจาะจง = 'ที่ / ตอน'" },
        { q: "図書館___本を読みます。", choices: ["で", "に", "へ", "を"], answer: 0, romaji: "Toshokan DE hon o yomimasu.", explanation: "'で' ใช้กับสถานที่ทำกิจกรรม = 'ที่' (ที่ทำ)" },
        { q: "これは___ですか。", choices: ["どこ", "なん", "だれ", "いつ"], answer: 1, romaji: "Kore wa NAN desu ka.", explanation: "ถามถึงสิ่งของใช้ 'なん (อะไร)'" },
        { q: "りんごを___食べました。", choices: ["ふたつ", "にひき", "にだい", "にさつ"], answer: 0, romaji: "Ringo o FUTATSU tabemashita.", explanation: "'ふたつ' = นับสิ่งของทั่วไป (สอง)" },
        { q: "明日学校___行きます。", choices: ["を", "に", "が", "の"], answer: 1, romaji: "Ashita gakkou NI ikimasu.", explanation: "'に / へ' = ไปยังจุดหมาย" },
        { q: "コーヒー___お茶___どちらが好きですか。", choices: ["と・と", "や・や", "に・に", "は・は"], answer: 0, romaji: "Koohii TO ocha TO dochira ga suki desu ka.", explanation: "'と' ใช้เชื่อมการเลือกระหว่างสิ่ง" },
        { q: "この本は___です。", choices: ["おもしろい", "おもしろく", "おもしろくて", "おもしろの"], answer: 0, romaji: "Kono hon wa OMOSHIROI desu.", explanation: "Adj-i รูปธรรมดา + です" },
        { q: "今日は寒い___ありません。", choices: ["じゃ", "は", "く", "の"], answer: 2, romaji: "Kyou wa samuKU arimasen.", explanation: "Adj-i ปฏิเสธ: い → くありません" },
        { q: "______ご飯を食べましたか。", choices: ["どこ", "だれ", "いつ", "なに"], answer: 0, romaji: "DOKO de gohan o tabemashita ka.", explanation: "ถามสถานที่ใช้ 'どこ'" },
      ],
    },
  ],

  N4: [
    {
      title: "Mock JLPT N4 — ชุดที่ 1 (ภาษาและไวยากรณ์)",
      questions: [
        { q: "彼は明日来る___思います。", choices: ["を", "に", "と", "が"], answer: 2, romaji: "Kare wa ashita kuru TO omoimasu.", explanation: "'と思います' = คิดว่า..." },
        { q: "雨が___たら、出かけません。", choices: ["降って", "降った", "降る", "降り"], answer: 1, romaji: "Ame ga FUTTARA, dekakemasen.", explanation: "เงื่อนไข ～たら ใช้กับ V-た form" },
        { q: "日本語が___ようになりました。", choices: ["話す", "話せる", "話して", "話した"], answer: 1, romaji: "Nihongo ga HANASERU you ni narimashita.", explanation: "Potential form + ようになる = เริ่ม...ได้" },
        { q: "宿題を___なければなりません。", choices: ["する", "して", "し", "した"], answer: 2, romaji: "Shukudai o SHInakereba narimasen.", explanation: "ない form: する → し+ない" },
        { q: "音楽を___ながら勉強します。", choices: ["聞く", "聞き", "聞いて", "聞いた"], answer: 1, romaji: "Ongaku o KIKI nagara benkyou shimasu.", explanation: "ながら + V-stem (ます-form drop ます)" },
        { q: "この映画は見た___あります。", choices: ["こと", "もの", "ところ", "ばかり"], answer: 0, romaji: "Kono eiga wa mita KOTO ga arimasu.", explanation: "～たことがある = เคยทำ" },
        { q: "高くても___ます。", choices: ["買う", "買い", "買っ", "買い"], answer: 1, romaji: "Takakute mo KAImasu.", explanation: "ます form ของ 買う = 買います" },
        { q: "彼は来週日本に行く___です。", choices: ["はず", "つもり", "ほど", "ばかり"], answer: 1, romaji: "Kare wa raishuu Nihon ni iku TSUMORI desu.", explanation: "～つもり = ตั้งใจ (ของผู้พูดหรือผู้อื่น)" },
        { q: "母___プレゼントをもらいました。", choices: ["を", "に", "で", "へ"], answer: 1, romaji: "Haha NI purezento o moraimashita.", explanation: "もらう ใช้ 'に' บอกแหล่งที่รับ" },
        { q: "明日は雨___そうです。", choices: ["だ", "の", "を", "に"], answer: 0, romaji: "Ashita wa ame DA sou desu.", explanation: "～そうです (ฟังมา) ใช้รูป plain + そうだ" },
      ],
    },
  ],

  N3: [
    {
      title: "Mock JLPT N3 — ชุดที่ 1 (ภาษาและไวยากรณ์)",
      questions: [
        { q: "天気___計画を変えます。", choices: ["によって", "について", "に対して", "に関して"], answer: 0, romaji: "Tenki NI YOTTE keikaku o kaemasu.", explanation: "'によって' = ขึ้นกับ" },
        { q: "考えれば考える___分からなくなる。", choices: ["より", "ほど", "まで", "から"], answer: 1, romaji: "Kangaereba kangaeru HODO wakaranaku naru.", explanation: "～ば～ほど = ยิ่ง...ยิ่ง..." },
        { q: "先生に褒め___て嬉しかった。", choices: ["させ", "られ", "らせ", "させら"], answer: 1, romaji: "Sensei ni homeRARETE ureshikatta.", explanation: "Passive form: 褒める → 褒められる" },
        { q: "毎日運動する___しています。", choices: ["ようと", "ように", "ことに", "ところに"], answer: 1, romaji: "Mainichi undou suru YOU NI shite imasu.", explanation: "～ようにする = พยายามทำ" },
        { q: "嫌いな___ではない。", choices: ["わけ", "もの", "こと", "ところ"], answer: 0, romaji: "Kirai na WAKE de wa nai.", explanation: "～わけではない = ไม่ได้หมายความว่า" },
        { q: "今食事をしている___です。", choices: ["こと", "ところ", "もの", "わけ"], answer: 1, romaji: "Ima shokuji o shite iru TOKORO desu.", explanation: "V-ている + ところ = กำลังอยู่..." },
        { q: "健康___運動しています。", choices: ["のために", "のように", "のはず", "のため"], answer: 0, romaji: "Kenkou NO TAME NI undou shite imasu.", explanation: "N + のために = เพื่อ" },
        { q: "勉強した___合格できなかった。", choices: ["から", "ので", "のに", "ために"], answer: 2, romaji: "Benkyou shita NONI goukaku dekinakatta.", explanation: "～のに = ทั้งๆ ที่... (ผลผิดคาด)" },
        { q: "千円___ありません。", choices: ["ばかり", "だけ", "しか", "ほど"], answer: 2, romaji: "Sen-en SHIKA arimasen.", explanation: "～しか + V-ない = มีแค่... เท่านั้น" },
        { q: "母は私に薬を飲___せました。", choices: ["ま", "み", "め", "む"], answer: 0, romaji: "Haha wa watashi ni kusuri o nomaSEMASHITA.", explanation: "Causative form: 飲む → 飲ませる" },
      ],
    },
  ],

  N2: [
    {
      title: "Mock JLPT N2 — ชุดที่ 1 (ภาษาและไวยากรณ์)",
      questions: [
        { q: "雨___、試合は行われた。", choices: ["によって", "にもかかわらず", "にとって", "について"], answer: 1, romaji: "Ame NI MO KAKAWARAZU, shiai wa okonawareta.", explanation: "～にもかかわらず = ทั้งๆ ที่ (ทางการ)" },
        { q: "家を出た___雨が降ってきた。", choices: ["とたんに", "ながら", "までに", "うちに"], answer: 0, romaji: "Ie o deta TOTAN NI ame ga futte kita.", explanation: "～たとたんに = ทันทีที่" },
        { q: "若い___いろいろな経験をしたい。", choices: ["うちに", "あいだに", "ところに", "までに"], answer: 0, romaji: "Wakai UCHI NI iroiro na keiken o shitai.", explanation: "～うちに = ในระหว่างที่ยัง..." },
        { q: "私___家族が一番大切です。", choices: ["によって", "について", "にとって", "に関して"], answer: 2, romaji: "Watashi NI TOTTE kazoku ga ichiban taisetsu desu.", explanation: "～にとって = สำหรับ" },
        { q: "彼___親切な人はいない。", choices: ["より", "ほど", "ぐらい", "までに"], answer: 1, romaji: "Kare HODO shinsetsu na hito wa inai.", explanation: "～ほど + ない = ไม่มีใครเท่า..." },
        { q: "急いでいた___、忘れてしまった。", choices: ["わけに", "せいで", "ものだから", "ために"], answer: 2, romaji: "Isoide ita MONO DAKARA, wasurete shimatta.", explanation: "～ものだから = เพราะว่า..." },
        { q: "値段___美味しい。", choices: ["のわりに", "のおかげで", "のために", "のせいで"], answer: 0, romaji: "Nedan NO WARI NI oishii.", explanation: "～わりに = เมื่อเทียบกับ" },
        { q: "あなた___成功しました。", choices: ["のせいで", "のおかげで", "のあいだに", "のうちに"], answer: 1, romaji: "Anata NO OKAGE DE seikou shimashita.", explanation: "～おかげで = ด้วยความที่...(แง่บวก)" },
        { q: "会議の___電話が鳴った。", choices: ["最中に", "うちに", "あいだ", "ところ"], answer: 0, romaji: "Kaigi no SAICHUU NI denwa ga natta.", explanation: "～最中に = ขณะที่กำลัง...อยู่" },
        { q: "雨のせい___遅れました。", choices: ["で", "に", "を", "が"], answer: 0, romaji: "Ame no sei DE okuremashita.", explanation: "～せいで = เพราะ (แง่ลบ)" },
      ],
    },
  ],

  N1: [
    {
      title: "Mock JLPT N1 — ชุดที่ 1 (ภาษาและไวยากรณ์)",
      questions: [
        { q: "現状___判断した。", choices: ["を踏まえて", "を含めて", "を抜きにして", "に基づき"], answer: 0, romaji: "Genjou O FUMAETE handan shita.", explanation: "～を踏まえて = อิงจาก / โดยพิจารณา" },
        { q: "卒業___感謝の気持ちを述べたい。", choices: ["にあたり", "に至り", "について", "における"], answer: 0, romaji: "Sotsugyou NI ATARI kansha no kimochi o nobetai.", explanation: "～にあたり = ในโอกาส (ทางการ)" },
        { q: "結果が出___連絡します。", choices: ["次第", "とたん", "やいなや", "が早いか"], answer: 0, romaji: "Kekka ga de SHIDAI renraku shimasu.", explanation: "～次第 = ทันทีที่... (ทางการ)" },
        { q: "仕事___勉強しています。", choices: ["のかたわら", "のほかに", "のついでに", "のとなりに"], answer: 0, romaji: "Shigoto NO KATAWARA benkyou shite imasu.", explanation: "～かたわら = ขณะเดียวกันก็..." },
        { q: "中止___された。", choices: ["を余儀なく", "を仕方なく", "をやむなく", "を仕切り"], answer: 0, romaji: "Chuushi O YOGINAKU sareta.", explanation: "～を余儀なくされる = ถูกบังคับให้" },
        { q: "彼___全く返事もしない。", choices: ["に至っては", "にしては", "にとっては", "にあっては"], answer: 0, romaji: "Kare NI ITATTE WA mattaku henji mo shinai.", explanation: "～に至っては = ส่วน...นั้นยิ่ง..." },
        { q: "社会人___責任が重い。", choices: ["ともなると", "となれば", "とあれば", "とすれば"], answer: 0, romaji: "Shakaijin TO MO NARU TO sekinin ga omoi.", explanation: "～ともなると = พอกลายเป็น...ก็..." },
        { q: "笑わ___にはいられない。", choices: ["ず", "ない", "ぬ", "ざる"], answer: 0, romaji: "WaraWAZU ni wa irarenai.", explanation: "～ずにはいられない = อด...ไม่ได้" },
        { q: "言ってくれればいい___を。", choices: ["こと", "もの", "ところ", "ほう"], answer: 1, romaji: "Itte kurereba ii MONO o.", explanation: "～ものを = เสียดายที่..., น่าจะ... (ตำหนิ)" },
        { q: "言う___もない。", choices: ["こと", "もの", "まで", "ところ"], answer: 2, romaji: "Iu MADE mo nai.", explanation: "～までもない = ไม่จำเป็นต้อง..." },
      ],
    },
  ],
};
