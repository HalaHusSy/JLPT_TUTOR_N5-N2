window.READINGS = {
  N5: [
    {
      title: "私の一日 (วันหนึ่งของฉัน)",
      jp: "私は毎朝六時に起きます。それから、朝ご飯を食べます。八時に学校へ行きます。学校で日本語を勉強します。三時に家に帰ります。夜は宿題をします。十時に寝ます。",
      romaji: "Watashi wa maiasa rokuji ni okimasu. Sorekara, asagohan o tabemasu. Hachiji ni gakkou e ikimasu. Gakkou de Nihongo o benkyou shimasu. Sanji ni ie ni kaerimasu. Yoru wa shukudai o shimasu. Juuji ni nemasu.",
      th: "ฉันตื่นนอนหกโมงทุกเช้า หลังจากนั้นกินอาหารเช้า แปดโมงไปโรงเรียน เรียนภาษาญี่ปุ่นที่โรงเรียน บ่ายสามกลับบ้าน ตอนเย็นทำการบ้าน สี่ทุ่มเข้านอน",
      questions: [
        { q: "私は何時に起きますか。", choices: ["五時", "六時", "七時", "八時"], answer: 1, explanation: "ในข้อความบอกว่า 'rokuji ni okimasu' = ตื่นหกโมง" },
        { q: "学校で何を勉強しますか。", choices: ["英語", "数学", "日本語", "歴史"], answer: 2, explanation: "ในข้อความบอกว่า 'Nihongo o benkyou shimasu' = เรียนภาษาญี่ปุ่น" },
        { q: "何時に寝ますか。", choices: ["八時", "九時", "十時", "十一時"], answer: 2, explanation: "ในข้อความบอกว่า 'Juuji ni nemasu' = นอนสี่ทุ่ม (สิบโมง)" },
      ],
    },
    {
      title: "週末の予定 (แผนสุดสัปดาห์)",
      jp: "土曜日に友達と映画を見ます。それから、レストランで晩ご飯を食べます。日曜日は家でゆっくりします。本を読んだり、テレビを見たりします。",
      romaji: "Doyoubi ni tomodachi to eiga o mimasu. Sorekara, resutoran de bangohan o tabemasu. Nichiyoubi wa ie de yukkuri shimasu. Hon o yondari, terebi o mitari shimasu.",
      th: "วันเสาร์จะไปดูหนังกับเพื่อน หลังจากนั้นกินอาหารเย็นที่ร้าน วันอาทิตย์อยู่บ้านพักผ่อน อ่านหนังสือบ้าง ดูทีวีบ้าง",
      questions: [
        { q: "土曜日に誰と映画を見ますか。", choices: ["家族", "先生", "友達", "一人で"], answer: 2, explanation: "'tomodachi to' = กับเพื่อน" },
        { q: "日曜日にどこにいますか。", choices: ["学校", "家", "レストラン", "公園"], answer: 1, explanation: "'ie de yukkuri shimasu' = พักที่บ้าน" },
      ],
    },
  ],

  N4: [
    {
      title: "日本旅行の経験 (ประสบการณ์ท่องเที่ยวญี่ปุ่น)",
      jp: "去年の夏、私は初めて日本へ行きました。東京と京都を旅行しました。東京は人がたくさんいて、にぎやかでした。京都は静かで、古いお寺がたくさんありました。日本料理はとてもおいしかったです。特に寿司が好きになりました。来年もまた行きたいと思っています。",
      romaji: "Kyonen no natsu, watashi wa hajimete Nihon e ikimashita. Toukyou to Kyouto o ryokou shimashita. Toukyou wa hito ga takusan ite, nigiyaka deshita. Kyouto wa shizuka de, furui otera ga takusan arimashita. Nihon ryouri wa totemo oishikatta desu. Toku ni sushi ga suki ni narimashita. Rainen mo mata ikitai to omotte imasu.",
      th: "ฤดูร้อนปีที่แล้ว ฉันได้ไปญี่ปุ่นเป็นครั้งแรก ฉันท่องเที่ยวที่โตเกียวและเกียวโต โตเกียวมีคนเยอะ คึกคักมาก ส่วนเกียวโตเงียบ มีวัดเก่าๆ เยอะ อาหารญี่ปุ่นอร่อยมาก ฉันชอบซูชิเป็นพิเศษ ปีหน้าก็อยากจะไปอีก",
      questions: [
        { q: "私はいつ日本へ行きましたか。", choices: ["今年の夏", "去年の夏", "去年の冬", "来年の夏"], answer: 1, explanation: "'kyonen no natsu' = ฤดูร้อนปีที่แล้ว" },
        { q: "京都はどんな町でしたか。", choices: ["にぎやか", "うるさい", "静か", "汚い"], answer: 2, explanation: "'Kyouto wa shizuka de' = เกียวโตเงียบ" },
        { q: "私は何が好きになりましたか。", choices: ["ラーメン", "天ぷら", "寿司", "うどん"], answer: 2, explanation: "'sushi ga suki ni narimashita' = ชอบซูชิ" },
      ],
    },
    {
      title: "新しいアパート (อพาร์ตเมนต์ใหม่)",
      jp: "先月、新しいアパートに引っ越しました。駅から歩いて十分ぐらいで、とても便利です。部屋は前のアパートより少し小さいですが、新しくてきれいです。近くにスーパーやコンビニがあるので、買い物に困りません。",
      romaji: "Sengetsu, atarashii apaato ni hikkoshimashita. Eki kara aruite juppun gurai de, totemo benri desu. Heya wa mae no apaato yori sukoshi chiisai desu ga, atarashikute kirei desu. Chikaku ni suupaa ya konbini ga aru node, kaimono ni komarimasen.",
      th: "เดือนที่แล้วฉันย้ายอพาร์ตเมนต์ใหม่ เดินจากสถานีประมาณ 10 นาที สะดวกมาก ห้องเล็กกว่าที่เก่านิดหน่อย แต่ใหม่และสะอาด ใกล้ๆ มีซูเปอร์มาร์เก็ตและร้านสะดวกซื้อ เลยซื้อของไม่มีปัญหา",
      questions: [
        { q: "駅からどのくらいかかりますか。", choices: ["五分", "十分", "十五分", "二十分"], answer: 1, explanation: "'aruite juppun' = เดินสิบนาที" },
        { q: "前のアパートと比べてどうですか。", choices: ["大きい", "同じ", "少し小さい", "とても大きい"], answer: 2, explanation: "'mae no apaato yori sukoshi chiisai' = เล็กกว่านิดหน่อย" },
      ],
    },
  ],

  N3: [
    {
      title: "現代の働き方 (รูปแบบการทำงานยุคปัจจุบัน)",
      jp: "最近、リモートワークをする人が増えています。家で仕事をすると、通勤時間がなくなり、自分の時間が増えるという利点があります。しかし、家族と同じ空間で仕事をするので、集中しにくいという問題もあります。会社にとっても、社員の管理が難しくなる場合があります。これからは、会社で働く日と家で働く日を組み合わせる方法が一般的になるでしょう。",
      romaji: "Saikin, rimooto waaku o suru hito ga fuete imasu. Ie de shigoto o suru to, tsuukin jikan ga nakunari, jibun no jikan ga fueru to iu riten ga arimasu. Shikashi, kazoku to onaji kuukan de shigoto o suru node, shuuchuu shinikui to iu mondai mo arimasu. Kaisha ni totte mo, shain no kanri ga muzukashiku naru baai ga arimasu. Kore kara wa, kaisha de hataraku hi to ie de hataraku hi o kumiawaseru houhou ga ippan-teki ni naru deshou.",
      th: "ช่วงนี้คนทำงานทางไกล (รีโมต) มีจำนวนมากขึ้น การทำงานที่บ้านมีข้อดีคือไม่ต้องเสียเวลาเดินทาง ทำให้มีเวลาส่วนตัวเพิ่ม แต่ก็มีปัญหาเพราะอยู่ในพื้นที่เดียวกับครอบครัว ทำให้สมาธิไม่ดี สำหรับบริษัทเอง การจัดการพนักงานก็ยากขึ้นในบางกรณี ต่อไปการผสมผสานวันทำงานที่บริษัทและที่บ้านน่าจะกลายเป็นเรื่องปกติ",
      questions: [
        { q: "リモートワークの利点は何ですか。", choices: ["給料が増える", "通勤時間がなくなる", "家族が喜ぶ", "会社が助かる"], answer: 1, explanation: "ในข้อความระบุว่า 'tsuukin jikan ga nakunari' = ไม่ต้องเสียเวลาเดินทาง" },
        { q: "リモートワークの問題点は何ですか。", choices: ["時間が足りない", "お金がかかる", "集中しにくい", "通勤が大変"], answer: 2, explanation: "'shuuchuu shinikui' = สมาธิไม่ดี" },
        { q: "これからどうなると言っていますか。", choices: ["全員家で働く", "全員会社で働く", "両方を組み合わせる", "リモートワークがなくなる"], answer: 2, explanation: "'kumiawaseru' = ผสมผสานทั้งสอง" },
      ],
    },
  ],

  N2: [
    {
      title: "高齢化社会の課題 (โจทย์ของสังคมสูงวัย)",
      jp: "日本は世界でも有数の高齢化社会である。65歳以上の人口は全体の約三割を占めており、今後もさらに増加すると予想されている。これに伴い、医療費や介護費などの社会保障費が増大する一方で、働く世代の減少により税収は減少傾向にある。政府は様々な対策を講じているが、根本的な解決には至っていない。働き方改革や移民政策など、複合的なアプローチが求められている。",
      romaji: "Nihon wa sekai de mo yuusuu no koureika shakai de aru. Roku-juu-go-sai ijou no jinkou wa zentai no yaku san-wari o shimete ori, kongo mo sara ni zouka suru to yosou sarete iru. Kore ni tomonai, iryouhi ya kaigohi nado no shakai-hoshouhi ga zoudai suru ippou de, hataraku sedai no genshou ni yori zeishuu wa genshou keikou ni aru. Seifu wa samazama na taisaku o kouji-te iru ga, konpon-teki na kaiketsu ni wa itatte inai. Hatarakikata kaikaku ya imin seisaku nado, fukugou-teki na apuroochi ga motomerarete iru.",
      th: "ญี่ปุ่นเป็นหนึ่งในสังคมสูงวัยชั้นนำของโลก ประชากรอายุ 65 ปีขึ้นไปคิดเป็นประมาณ 30% ของทั้งหมด และคาดว่าจะเพิ่มขึ้นอีกในอนาคต ผลที่ตามมาคือค่าใช้จ่ายสวัสดิการสังคม เช่น ค่ารักษาพยาบาลและค่าดูแลผู้สูงอายุเพิ่มสูงขึ้น ในขณะที่รายได้จากภาษีลดลงเพราะคนวัยทำงานน้อยลง รัฐบาลใช้มาตรการต่างๆ แต่ยังไม่ถึงขั้นแก้ปัญหาในระดับรากฐาน ต้องการแนวทางที่รวมหลายด้าน เช่น การปฏิรูปวิธีทำงานและนโยบายผู้อพยพ",
      questions: [
        { q: "65歳以上の人口は全体の何割ですか。", choices: ["一割", "二割", "三割", "四割"], answer: 2, explanation: "'yaku san-wari' = ประมาณ 30% (สามส่วนสิบ)" },
        { q: "税収はどうなっていますか。", choices: ["増加している", "変わらない", "減少傾向", "急増している"], answer: 2, explanation: "'genshou keikou' = แนวโน้มลดลง" },
        { q: "解決のためには何が必要ですか。", choices: ["単一の対策", "外国の支援", "複合的なアプローチ", "増税のみ"], answer: 2, explanation: "'fukugou-teki na apuroochi' = แนวทางที่รวมหลายด้าน" },
      ],
    },
  ],

  N1: [
    {
      title: "AIと労働市場 (AI กับตลาดแรงงาน)",
      jp: "人工知能の急速な発展は、労働市場に多大な影響を及ぼしつつある。単純作業のみならず、これまで人間にしかできないとされてきた高度な知的作業までも、AIが担うようになりつつある。この潮流に対し、楽観論と悲観論が交錯している。楽観論者は、新たな職業が生まれ、人間はより創造的な仕事に専念できると主張する。一方、悲観論者は、大量失業や経済格差の拡大を危惧している。いずれにせよ、私たち一人ひとりが、変化に適応するための継続的な学習と柔軟性を備える必要があることは論を俟たない。",
      romaji: "Jinkou chinou no kyuusoku na hatten wa, roudou shijou ni tadai na eikyou o oyoboshi-tsutsu aru. Tanjun sagyou nominarazu, kore made ningen ni shika dekinai to sarete kita koudo na chiteki sagyou made mo, AI ga ninau you ni nari-tsutsu aru. Kono chouryuu ni taishi, rakkanron to hikanron ga kousaku shite iru. Rakkanronsha wa, arata na shokugyou ga umare, ningen wa yori souzou-teki na shigoto ni sennen dekiru to shuchou suru. Ippou, hikanronsha wa, tairyou shitsugyou ya keizai kakusa no kakudai o kigu shite iru. Izure ni seyo, watashitachi hitori-hitori ga, henka ni tekiou suru tame no keizoku-teki na gakushuu to juunan-sei o sonaeru hitsuyou ga aru koto wa ron o matanai.",
      th: "การพัฒนาอย่างรวดเร็วของปัญญาประดิษฐ์กำลังส่งผลอย่างมหาศาลต่อตลาดแรงงาน ไม่เพียงแต่งานง่ายๆ เท่านั้น แม้แต่งานที่ใช้ความคิดระดับสูงซึ่งเคยมองว่ามีแต่มนุษย์เท่านั้นที่ทำได้ ก็เริ่มจะถูก AI รับช่วง ในกระแสนี้มีทั้งมุมมองในแง่ดีและแง่ร้ายผสมปนกัน ฝ่ายมองโลกในแง่ดีอ้างว่าจะเกิดอาชีพใหม่ๆ และมนุษย์จะสามารถทุ่มเทไปกับงานสร้างสรรค์ได้มากขึ้น ในทางกลับกัน ฝ่ายมองในแง่ร้ายกังวลว่าจะเกิดการว่างงานครั้งใหญ่และความเหลื่อมล้ำทางเศรษฐกิจที่ขยายตัว ไม่ว่าจะอย่างไร เราแต่ละคนจำเป็นต้องเรียนรู้อย่างต่อเนื่องและมีความยืดหยุ่นในการปรับตัวเข้ากับการเปลี่ยนแปลง นี่เป็นเรื่องที่ไม่ต้องโต้แย้ง",
      questions: [
        { q: "AIは何を担うようになりつつありますか。", choices: ["単純作業のみ", "肉体労働のみ", "高度な知的作業も", "管理職のみ"], answer: 2, explanation: "'koudo na chiteki sagyou made mo' = แม้แต่งานทางสติปัญญาระดับสูงด้วย" },
        { q: "悲観論者は何を心配していますか。", choices: ["新しい職業の誕生", "創造的な仕事の増加", "大量失業と経済格差", "AIの遅い発展"], answer: 2, explanation: "'tairyou shitsugyou ya keizai kakusa no kakudai o kigu' = กังวลเรื่องว่างงานและเหลื่อมล้ำ" },
        { q: "私たちに何が必要ですか。", choices: ["AIの停止", "継続的な学習と柔軟性", "政府への抗議", "古い仕事を守ること"], answer: 1, explanation: "'keizoku-teki na gakushuu to juunan-sei' = การเรียนรู้ต่อเนื่องและความยืดหยุ่น" },
      ],
    },
  ],
};
