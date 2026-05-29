// N3 full mock #4 — appends to MOCK_EXAMS.N3
window.MOCK_EXAMS = window.MOCK_EXAMS || {};
window.MOCK_EXAMS.N3 = window.MOCK_EXAMS.N3 || [];
window.MOCK_EXAMS.N3.push({
  title: "N3 ชุดเต็ม #4 — 言語知識・読解",
  sections: [
    {
      name: "問題1　漢字読み",
      instruction: "＿＿の ことばの よみかたを えらんで ください。",
      questions: [
        { q: "あたらしい せいど を 【導入】する。", choices: ["どうにゅう", "どうにゅ", "とうにゅう", "どにゅう"], answer: 0, romaji: "dounyuu", explanation: "導入(どうにゅう) = นำมาใช้" },
        { q: "もんだいを 【発見】した。", choices: ["はっけん", "はつけん", "ほっけん", "はっげん"], answer: 0, romaji: "hakken", explanation: "発見(はっけん) = ค้นพบ" },
        { q: "この しごとは 【責任】が おもい。", choices: ["せきにん", "せきじん", "せいにん", "せきにon"], answer: 0, romaji: "sekinin", explanation: "責任(せきにん) = ความรับผิดชอบ" },
        { q: "ゆめを 【実現】する。", choices: ["じつげん", "じっけん", "じつけん", "しつげん"], answer: 0, romaji: "jitsugen", explanation: "実現(じつげん) = ทำให้เป็นจริง" },
        { q: "かれの たいどに 【感心】した。", choices: ["かんしん", "かんじん", "がんしん", "かんしん"], answer: 0, romaji: "kanshin", explanation: "感心(かんしん) = ประทับใจ/ชื่นชม" },
        { q: "ひつような じょうほうを 【選ぶ】。", choices: ["えらぶ", "せんぶ", "よぶ", "ならぶ"], answer: 0, romaji: "erabu", explanation: "選ぶ(えらぶ) = เลือก" },
      ],
    },
    {
      name: "問題2　表記",
      instruction: "＿＿の ことばは かんじで どう かきますか。",
      questions: [
        { q: "ゆめを 【じつげん】する。", choices: ["実現", "実験", "実減", "実限"], answer: 0, romaji: "jitsugen", explanation: "じつげん = 実現" },
        { q: "もんだいを 【はっけん】した。", choices: ["発見", "発険", "発験", "登見"], answer: 0, romaji: "hakken", explanation: "はっけん = 発見" },
        { q: "じょうほうを 【えらぶ】。", choices: ["選ぶ", "撰ぶ", "迷ぶ", "返ぶ"], answer: 0, romaji: "erabu", explanation: "えらぶ = 選ぶ" },
        { q: "せきにんを 【はたす】。", choices: ["果たす", "課たす", "貨たす", "菓たす"], answer: 0, romaji: "hatasu", explanation: "はたす = 果たす (ทำให้สำเร็จ/รับผิดชอบ)" },
        { q: "けいけんを 【いかす】。", choices: ["生かす", "活かす", "生かす", "命かす"], answer: 0, romaji: "ikasu", explanation: "いかす = 生かす (ใช้ให้เกิดประโยชน์)" },
      ],
    },
    {
      name: "問題3　文脈規定",
      instruction: "（　）に いれる ものを えらんで ください。",
      questions: [
        { q: "けいけんを しごとに（　）たい。", choices: ["いかし", "あつめ", "くらべ", "わけ"], answer: 0, romaji: "ikashi", explanation: "ใช้ประสบการณ์กับงาน = いかす" },
        { q: "この データを（　）して、けっかを だす。", choices: ["ぶんせき", "そうじ", "せんたく", "けんか"], answer: 0, romaji: "bunseki", explanation: "วิเคราะห์ข้อมูล = ぶんせき" },
        { q: "かれの どりょくに（　）した。", choices: ["かんしん", "しんぱい", "じゃま", "えんりょ"], answer: 0, romaji: "kanshin", explanation: "ประทับใจในความพยายาม = かんしん" },
        { q: "むだを へらして、じかんを（　）する。", choices: ["せつやく", "そうじ", "けいかく", "れんらく"], answer: 0, romaji: "setsuyaku", explanation: "ลดความสูญเปล่า ประหยัดเวลา = せつやく" },
        { q: "この しごとには けいけんが（　）だ。", choices: ["ひつよう", "じゆう", "ていねい", "あんぜん"], answer: 0, romaji: "hitsuyou", explanation: "งานนี้จำเป็นต้องมีประสบการณ์ = ひつよう" },
        { q: "ゆめを（　）するために がんばる。", choices: ["じつげん", "はっけん", "ぶんせき", "せつやく"], answer: 0, romaji: "jitsugen", explanation: "พยายามเพื่อทำความฝันให้เป็นจริง = じつげん" },
      ],
    },
    {
      name: "問題4　言い換え類義",
      instruction: "＿＿の ことばと だいたい おなじ いみの ものを えらんで ください。",
      questions: [
        { q: "けいけんを 【いかす】。", choices: ["やくに たてる", "わすれる", "むしする", "やめる"], answer: 0, romaji: "yaku ni tateru", explanation: "いかす ≒ ใช้ให้เป็นประโยชน์" },
        { q: "かれの どりょくに 【かんしんした】。", choices: ["すばらしいと おもった", "つまらないと おもった", "おこった", "かなしんだ"], answer: 0, romaji: "subarashii to omotta", explanation: "かんしん ≒ รู้สึกว่ายอดเยี่ยม/ชื่นชม" },
        { q: "この もんだいは 【たんじゅん】だ。", choices: ["かんたんだ", "ふくざつだ", "むずかしい", "あいまいだ"], answer: 0, romaji: "kantan da", explanation: "たんじゅん ≒ かんたん (เรียบง่าย)" },
        { q: "けいかくは 【じゅんちょう】だ。", choices: ["うまく いって いる", "とまって いる", "おくれて いる", "むずかしい"], answer: 0, romaji: "umaku itte iru", explanation: "じゅんちょう ≒ ราบรื่น" },
      ],
    },
    {
      name: "問題5　用法",
      instruction: "つぎの ことばの つかいかたが いちばん いい ものを えらんで ください。",
      questions: [
        { q: "「いかす」", choices: ["けいけんを しごとに いかす。", "ごはんを いかす。", "やまを いかす。", "あめを いかす。"], answer: 0, romaji: "ikasu", explanation: "いかす = ใช้ให้เป็นประโยชน์ → 'ใช้ประสบการณ์กับงาน'" },
        { q: "「はっけん」", choices: ["あたらしい ほしを はっけんした。", "ごはんを はっけんする。", "やまを はっけんに いく。", "そらが はっけんする。"], answer: 0, romaji: "hakken", explanation: "はっけん = ค้นพบ → 'ค้นพบดาวดวงใหม่'" },
        { q: "「ぶんせき」", choices: ["データを ぶんせきする。", "ごはんを ぶんせきする。", "やまを ぶんせきに いく。", "あめが ぶんせきする。"], answer: 0, romaji: "bunseki", explanation: "ぶんせき = วิเคราะห์ → 'วิเคราะห์ข้อมูล'" },
        { q: "「せきにん」", choices: ["この しごとは せきにんが おもい。", "せきにんを たべる。", "せきにんが ふる。", "せきにんに いく。"], answer: 0, romaji: "sekinin", explanation: "せきにん = ความรับผิดชอบ → 'งานนี้มีความรับผิดชอบสูง'" },
      ],
    },
    {
      name: "問題6　文法形式の判断",
      instruction: "（　）に いれる ものを えらんで ください。",
      questions: [
        { q: "けいけん（　）はんだんする。", choices: ["をもとに", "について", "にとって", "として"], answer: 0, romaji: "o moto ni", explanation: "～をもとに = อิงจาก" },
        { q: "がんばった（　）、ごうかくできた。", choices: ["かいが あって", "おかげで", "ために", "ように"], answer: 1, romaji: "okage de", explanation: "～おかげで = ด้วยผลของการพยายาม" },
        { q: "べんきょうすれば する（　）、たのしく なる。", choices: ["ほど", "より", "だけ", "まで"], answer: 0, romaji: "hodo", explanation: "～ば～ほど = ยิ่ง...ยิ่ง" },
        { q: "いそがしい（　）、てつだって くれた。", choices: ["のに", "ので", "から", "ように"], answer: 0, romaji: "noni", explanation: "～のに = ทั้งๆ ที่" },
        { q: "この ほんは こども（　）、おとなにも にんきが ある。", choices: ["だけでなく", "ばかりで", "として", "について"], answer: 0, romaji: "dake de naku", explanation: "～だけでなく = ไม่เพียงแต่...แต่ยัง" },
        { q: "あめが ふり（　）だ。そらが くらい。", choices: ["そう", "らしい", "よう", "みたい"], answer: 0, romaji: "sou", explanation: "V-stem + そう = ดูเหมือนจะ (ฟ้าครึ้ม ฝนท่าจะตก)" },
        { q: "やると きめた（　）、さいごまで やる。", choices: ["いじょう", "ところ", "ばかり", "とたん"], answer: 0, romaji: "ijou", explanation: "～以上(は) = ในเมื่อ...ก็ต้อง" },
      ],
    },
    {
      name: "問題7　文の組み立て",
      instruction: "★ に はいる ものは どれですか。",
      questions: [
        { q: "けいけんを　＿　＿　★　＿　する。（1.に　2.はんだん　3.もと　4.を）", choices: ["を", "もと", "に", "はんだん"], answer: 2, romaji: "ตำแหน่ง★ = に", explanation: "เรียง: けいけん を もと に はんだん → ★(ที่ 3) = に" },
        { q: "この ほんは　＿　＿　★　＿　にんきが ある。（1.だけでなく　2.こども　3.にも　4.おとな）", choices: ["こども", "だけでなく", "おとな", "にも"], answer: 2, romaji: "ตำแหน่ง★ = おとな", explanation: "เรียง: こども だけでなく おとな にも → ★(ที่ 3) = おとな" },
        { q: "やると　＿　＿　★　＿　やる。（1.いじょう　2.きめた　3.まで　4.さいご）", choices: ["きめた", "いじょう", "さいご", "まで"], answer: 1, romaji: "ตำแหน่ง★ = いじょう", explanation: "เรียง: きめた いじょう さいご まで → ★(ที่ 3) = いじょう" },
      ],
    },
    {
      name: "問題8　読解（中文）",
      instruction: "つぎの ぶんしょうを よんで、しつもんに こたえて ください。",
      passage: "うんどうは けんこうに いいと よく いわれる。しかし、きゅうに はげしい うんどうを すると、からだを いためる ことが ある。たいせつなのは、むりを せず、すこしずつ つづける ことだ。たとえば、まいにち 20ぷん あるく だけでも、じゅうぶん こうかが ある。たいせつなのは、つづける ことなのだ。",
      questions: [
        { q: "きゅうに はげしい うんどうを すると、どう なりますか。", choices: ["けんこうに なる", "からだを いためる ことが ある", "やせる", "つかれない"], answer: 1, romaji: "karada o itameru", explanation: "'きゅうに はげしい うんどうを すると、からだを いためる'" },
        { q: "たいせつなのは なんですか。", choices: ["はげしく する こと", "むりを せず つづける こと", "はやく はしる こと", "ながく する こと"], answer: 1, romaji: "muri o sezu tsuzukeru", explanation: "'むりを せず、すこしずつ つづける ことだ'" },
        { q: "まいにち 20ぷん あるくと どうですか。", choices: ["こうかが ない", "じゅうぶん こうかが ある", "つかれる", "あぶない"], answer: 1, romaji: "juubun kouka ga aru", explanation: "'20ぷん あるく だけでも、じゅうぶん こうかが ある'" },
      ],
    },
  ],
});
