// Additional N5 readings
window.READINGS = window.READINGS || {};
window.READINGS.N5 = window.READINGS.N5 || [];
window.READINGS.N5.push(
  {
    title: "私の家族 (ครอบครัวของฉัน)",
    jp: "私の家族は四人です。父と母と兄と私です。父は会社員で、毎日忙しいです。母は料理がとても上手です。兄は大学生で、東京に住んでいます。私は高校生で、毎日学校で日本語を勉強しています。週末は家族と一緒にレストランへ行きます。",
    romaji: "Watashi no kazoku wa yonin desu. Chichi to haha to ani to watashi desu. Chichi wa kaishain de, mainichi isogashii desu. Haha wa ryouri ga totemo jouzu desu. Ani wa daigakusei de, Toukyou ni sunde imasu. Watashi wa koukousei de, mainichi gakkou de Nihongo o benkyou shite imasu. Shuumatsu wa kazoku to issho ni resutoran e ikimasu.",
    th: "ครอบครัวของฉันมีสี่คน คือ พ่อ แม่ พี่ชาย และฉัน พ่อเป็นพนักงานบริษัท ยุ่งทุกวัน แม่ทำอาหารเก่งมาก พี่ชายเป็นนักศึกษาอยู่ที่โตเกียว ฉันเป็นนักเรียนมัธยมปลาย เรียนภาษาญี่ปุ่นที่โรงเรียนทุกวัน วันหยุดสุดสัปดาห์ไปร้านอาหารกับครอบครัว",
    questions: [
      { q: "私の家族は何人ですか。", choices: ["三人", "四人", "五人", "六人"], answer: 1, explanation: "ในข้อความบอกว่า 'kazoku wa yonin' = 4 คน" },
      { q: "母は何が上手ですか。", choices: ["仕事", "勉強", "料理", "歌"], answer: 2, explanation: "'haha wa ryouri ga jouzu' = แม่ทำอาหารเก่ง" },
      { q: "兄はどこに住んでいますか。", choices: ["大阪", "京都", "東京", "北海道"], answer: 2, explanation: "'Toukyou ni sunde imasu' = อยู่โตเกียว" },
    ],
  },
  {
    title: "買い物 (ไปซื้อของ)",
    jp: "今日は土曜日です。私は朝十時にスーパーへ行きました。スーパーで野菜とくだものとパンを買いました。それから、本屋へ行って、新しい本を一冊買いました。家へ帰って、母の料理を食べました。とてもおいしかったです。",
    romaji: "Kyou wa doyoubi desu. Watashi wa asa juuji ni suupaa e ikimashita. Suupaa de yasai to kudamono to pan o kaimashita. Sorekara, hon-ya e itte, atarashii hon o issatsu kaimashita. Ie e kaette, haha no ryouri o tabemashita. Totemo oishikatta desu.",
    th: "วันนี้วันเสาร์ ฉันไปซูเปอร์สิบโมงเช้า ที่ซูเปอร์ฉันซื้อผัก ผลไม้ และขนมปัง จากนั้นไปร้านหนังสือ ซื้อหนังสือใหม่หนึ่งเล่ม กลับบ้านมากินข้าวที่แม่ทำ อร่อยมาก",
    questions: [
      { q: "私はいつスーパーへ行きましたか。", choices: ["金曜日の朝", "土曜日の朝", "日曜日の朝", "月曜日の朝"], answer: 1, explanation: "'kyou wa doyoubi' + 'asa juuji' = เสาร์เช้า 10 โมง" },
      { q: "本屋で何を買いましたか。", choices: ["雑誌", "新聞", "新しい本", "古い本"], answer: 2, explanation: "'atarashii hon o issatsu' = หนังสือใหม่ 1 เล่ม" },
    ],
  },
  {
    title: "私の趣味 (งานอดิเรกของฉัน)",
    jp: "私の趣味は写真を撮ることです。週末はよくカメラを持って公園へ行きます。公園で花や木の写真をたくさん撮ります。友だちにも写真を見せます。みんな「きれいですね」と言ってくれます。来月、新しいカメラを買いたいです。",
    romaji: "Watashi no shumi wa shashin o toru koto desu. Shuumatsu wa yoku kamera o motte kouen e ikimasu. Kouen de hana ya ki no shashin o takusan torimasu. Tomodachi ni mo shashin o misemasu. Minna “Kirei desu ne” to itte kuremasu. Raigetsu, atarashii kamera o kaitai desu.",
    th: "งานอดิเรกของฉันคือถ่ายรูป สุดสัปดาห์มักถือกล้องไปสวนสาธารณะ ถ่ายรูปดอกไม้และต้นไม้เยอะๆ ที่สวน ให้เพื่อนดูรูปด้วย ทุกคนบอก 'สวยจังเลย' เดือนหน้าฉันอยากซื้อกล้องใหม่",
    questions: [
      { q: "私の趣味は何ですか。", choices: ["絵を描くこと", "写真を撮ること", "歌うこと", "走ること"], answer: 1, explanation: "'shumi wa shashin o toru koto' = ถ่ายรูป" },
      { q: "公園で何の写真を撮りますか。", choices: ["人", "犬", "花や木", "車"], answer: 2, explanation: "'hana ya ki no shashin' = ดอกไม้และต้นไม้" },
      { q: "来月何を買いたいですか。", choices: ["新しい本", "新しいカメラ", "新しいかばん", "新しい服"], answer: 1, explanation: "'atarashii kamera o kaitai' = อยากซื้อกล้องใหม่" },
    ],
  },
  {
    title: "レストランで (ที่ร้านอาหาร)",
    jp: "昨日の晩、友だちと駅前のレストランへ行きました。私はカレーを食べて、友だちはパスタを食べました。飲み物はジュースを飲みました。料理はとてもおいしかったです。お店の人もとても親切でした。また行きたいです。",
    romaji: "Kinou no ban, tomodachi to ekimae no resutoran e ikimashita. Watashi wa karee o tabete, tomodachi wa pasuta o tabemashita. Nomimono wa juusu o nomimashita. Ryouri wa totemo oishikatta desu. Omise no hito mo totemo shinsetsu deshita. Mata ikitai desu.",
    th: "เมื่อคืน ฉันไปร้านอาหารหน้าสถานีกับเพื่อน ฉันกินแกงกะหรี่ เพื่อนกินพาสต้า เครื่องดื่มดื่มน้ำผลไม้ อาหารอร่อยมาก พนักงานก็ใจดีมาก อยากไปอีก",
    questions: [
      { q: "私は何を食べましたか。", choices: ["パスタ", "ラーメン", "カレー", "寿司"], answer: 2, explanation: "'watashi wa karee o tabete' = ฉันกินแกงกะหรี่" },
      { q: "レストランはどこにありますか。", choices: ["家の近く", "駅の前", "学校の中", "公園のそば"], answer: 1, explanation: "'ekimae no resutoran' = ร้านหน้าสถานี" },
    ],
  },
  {
    title: "夏休みの予定 (แผนปิดเทอมฤดูร้อน)",
    jp: "もうすぐ夏休みです。今年の夏休みは家族と海へ行きます。海で泳いだり、魚を食べたりします。夜は花火を見ます。三日間泊まる予定です。とても楽しみにしています。",
    romaji: "Mou sugu natsuyasumi desu. Kotoshi no natsuyasumi wa kazoku to umi e ikimasu. Umi de oyoidari, sakana o tabetari shimasu. Yoru wa hanabi o mimasu. Mikkakan tomaru yotei desu. Totemo tanoshimi ni shite imasu.",
    th: "อีกไม่นานก็จะถึงปิดเทอมฤดูร้อน ปิดเทอมปีนี้จะไปทะเลกับครอบครัว ที่ทะเลจะว่ายน้ำบ้าง กินปลาบ้าง กลางคืนจะดูดอกไม้ไฟ มีแผนพักสามวัน ฉันรอคอยมาก",
    questions: [
      { q: "夏休みにどこへ行きますか。", choices: ["山", "海", "町", "外国"], answer: 1, explanation: "'umi e ikimasu' = ไปทะเล" },
      { q: "何日間泊まりますか。", choices: ["二日間", "三日間", "四日間", "五日間"], answer: 1, explanation: "'mikkakan tomaru' = พัก 3 วัน" },
    ],
  },
);
