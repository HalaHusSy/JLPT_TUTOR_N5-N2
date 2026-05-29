// N2 full mock #4 — appends to MOCK_EXAMS.N2
window.MOCK_EXAMS = window.MOCK_EXAMS || {};
window.MOCK_EXAMS.N2 = window.MOCK_EXAMS.N2 || [];
window.MOCK_EXAMS.N2.push({
  title: "N2 ชุดเต็ม #4 — 言語知識・読解",
  sections: [
    {
      name: "問題1　漢字読み",
      instruction: "＿＿の ことばの 読み方を 選んで ください。",
      questions: [
        { q: "両国の【協力】が必要だ。", choices: ["きょうりょく", "きょうりき", "ごうりょく", "きょりょく"], answer: 0, romaji: "kyouryoku", explanation: "協力(きょうりょく) = ความร่วมมือ" },
        { q: "この問題は【複雑】だ。", choices: ["ふくざつ", "ふくさつ", "ぶくざつ", "ふくぞう"], answer: 0, romaji: "fukuzatsu", explanation: "複雑(ふくざつ) = ซับซ้อน" },
        { q: "計画を【変更】する。", choices: ["へんこう", "へんごう", "へんきょう", "べんこう"], answer: 0, romaji: "henkou", explanation: "変更(へんこう) = การเปลี่ยนแปลง" },
        { q: "彼の意見に【賛成】する。", choices: ["さんせい", "ざんせい", "さんぜい", "さんせ"], answer: 0, romaji: "sansei", explanation: "賛成(さんせい) = เห็นด้วย" },
        { q: "事故を【防ぐ】。", choices: ["ふせぐ", "ぼうぐ", "ふさぐ", "そそぐ"], answer: 0, romaji: "fusegu", explanation: "防ぐ(ふせぐ) = ป้องกัน" },
      ],
    },
    {
      name: "問題2　表記",
      instruction: "＿＿の ことばは 漢字で どう 書きますか。",
      questions: [
        { q: "けいかくを【へんこう】する。", choices: ["変更", "変効", "変項", "返更"], answer: 0, romaji: "henkou", explanation: "へんこう = 変更" },
        { q: "りょうこくが【きょうりょく】する。", choices: ["協力", "強力", "共力", "協努"], answer: 0, romaji: "kyouryoku", explanation: "きょうりょく = 協力 (ระวังคล้าย 強力=มีพลัง)" },
        { q: "じこを【ふせぐ】。", choices: ["防ぐ", "妨ぐ", "坊ぐ", "肪ぐ"], answer: 0, romaji: "fusegu", explanation: "ふせぐ = 防ぐ" },
        { q: "もんだいを【かいけつ】する。", choices: ["解決", "解結", "回決", "改決"], answer: 0, romaji: "kaiketsu", explanation: "かいけつ = 解決" },
        { q: "じょうきょうを【はんだん】する。", choices: ["判断", "判段", "半断", "判断"], answer: 0, romaji: "handan", explanation: "はんだん = 判断" },
      ],
    },
    {
      name: "問題3　語形成",
      instruction: "（　）に 入れる ものを 選んで ください。",
      questions: [
        { q: "この計画は変更（　）だ。", choices: ["可能", "中", "前", "風"], answer: 0, romaji: "kanou", explanation: "変更可能(へんこうかのう) = สามารถเปลี่ยนได้" },
        { q: "彼は社交（　）が高い。", choices: ["性", "化", "感", "的"], answer: 0, romaji: "sei", explanation: "社交性(しゃこうせい) = ทักษะการเข้าสังคม" },
        { q: "（　）公式の発表があった。", choices: ["非", "未", "無", "不"], answer: 0, romaji: "hi", explanation: "非公式(ひこうしき) = ไม่เป็นทางการ" },
        { q: "環境（　）な商品を選ぶ。", choices: ["的", "性", "化", "感"], answer: 0, romaji: "teki", explanation: "環境的(かんきょうてき) = เชิงสิ่งแวดล้อม" },
      ],
    },
    {
      name: "問題4　文脈規定",
      instruction: "（　）に 入れる ものを 選んで ください。",
      questions: [
        { q: "事故を（　）ために、ルールを守る。", choices: ["防ぐ", "高める", "増やす", "減らす"], answer: 0, romaji: "fusegu", explanation: "ปฏิบัติตามกฎเพื่อป้องกันอุบัติเหตุ = ふせぐ" },
        { q: "両国は（　）して 問題を 解決した。", choices: ["協力", "我慢", "遠慮", "緊張"], answer: 0, romaji: "kyouryoku", explanation: "สองประเทศร่วมมือกันแก้ปัญหา = きょうりょく" },
        { q: "計画に問題があったので、（　）した。", choices: ["変更", "我慢", "遠慮", "心配"], answer: 0, romaji: "henkou", explanation: "แผนมีปัญหาจึงเปลี่ยน = へんこう" },
        { q: "状況を（　）して、判断する。", choices: ["分析", "我慢", "遠慮", "緊張"], answer: 0, romaji: "bunseki", explanation: "วิเคราะห์สถานการณ์แล้วตัดสิน = ぶんせき" },
        { q: "彼の意見に（　）の人が多い。", choices: ["賛成", "反対", "矛盾", "影響"], answer: 0, romaji: "sansei", explanation: "คนเห็นด้วยกับความเห็นเขาเยอะ = さんせい" },
        { q: "この問題は（　）で、簡単には解けない。", choices: ["複雑", "単純", "明確", "正確"], answer: 0, romaji: "fukuzatsu", explanation: "ปัญหาซับซ้อน แก้ไม่ง่าย = ふくざつ" },
      ],
    },
    {
      name: "問題5　言い換え類義",
      instruction: "＿＿の ことばと だいたい 同じ 意味の ものを 選んで ください。",
      questions: [
        { q: "計画を【変更】した。", choices: ["かえた", "やめた", "つづけた", "はじめた"], answer: 0, romaji: "kaeta", explanation: "変更 ≒ かえる (เปลี่ยน)" },
        { q: "事故を【防ぐ】。", choices: ["おこさないように する", "おこす", "わすれる", "むしする"], answer: 0, romaji: "okosanai you ni suru", explanation: "防ぐ ≒ ป้องกันไม่ให้เกิด" },
        { q: "この問題は【複雑】だ。", choices: ["こみいって いる", "かんたんだ", "あたらしい", "ふるい"], answer: 0, romaji: "komiitte iru", explanation: "複雑 ≒ こみいる (ซับซ้อน)" },
        { q: "彼の案に【賛成】する。", choices: ["いいと おもう", "わるいと おもう", "しらない", "きにしない"], answer: 0, romaji: "ii to omou", explanation: "賛成 ≒ คิดว่าดี/เห็นด้วย" },
      ],
    },
    {
      name: "問題6　用法",
      instruction: "つぎの ことばの 使い方が いちばん いい ものを 選んで ください。",
      questions: [
        { q: "「防ぐ」", choices: ["病気を防ぐために、手を洗う。", "ごはんを防ぐ。", "山を防ぐ。", "空を防ぐ。"], answer: 0, romaji: "fusegu", explanation: "防ぐ = ป้องกัน → 'ล้างมือเพื่อป้องกันโรค'" },
        { q: "「協力」", choices: ["みんなで協力して作業する。", "ごはんを協力する。", "山を協力する。", "雨が協力する。"], answer: 0, romaji: "kyouryoku", explanation: "協力 = ร่วมมือ → 'ทุกคนร่วมมือกันทำงาน'" },
        { q: "「変更」", choices: ["予定を変更しました。", "ごはんを変更する気持ち。", "雨を変更する。", "空を変更する。"], answer: 0, romaji: "henkou", explanation: "変更 = เปลี่ยน → 'เปลี่ยนกำหนดการ'" },
        { q: "「たしか」", choices: ["たしか、彼は来ると言っていた。", "たしかを食べる。", "たしかが降る。", "たしかに行く。"], answer: 0, romaji: "tashika", explanation: "たしか = ถ้าจำไม่ผิด → 'ถ้าจำไม่ผิด เขาบอกว่าจะมา'" },
      ],
    },
    {
      name: "問題7　文法形式の判断",
      instruction: "（　）に 入れる ものを 選んで ください。",
      questions: [
        { q: "調査の結果（　）、計画を見直す。", choices: ["しだいで", "ばかりに", "どころか", "とたんに"], answer: 0, romaji: "shidai de", explanation: "～しだいで = ขึ้นอยู่กับ" },
        { q: "彼は来ると言った（　）、来なかった。", choices: ["くせに", "おかげで", "ために", "ように"], answer: 0, romaji: "kuse ni", explanation: "～くせに = ทั้งๆ ที่ (ตำหนิ)" },
        { q: "経験が増える（　）、自信がついた。", choices: ["につれて", "について", "に対して", "にとって"], answer: 0, romaji: "ni tsurete", explanation: "～につれて = ยิ่ง...ก็ยิ่ง (เปลี่ยนตาม)" },
        { q: "難しい（　）、やりがいがある。", choices: ["からこそ", "からには", "ばかりに", "どころか"], answer: 0, romaji: "kara koso", explanation: "～からこそ = เพราะ...นี่แหละ (เน้นเหตุ)" },
        { q: "やると 決めた（　）、最後までやる。", choices: ["からには", "ところに", "ばかりに", "とたんに"], answer: 0, romaji: "kara ni wa", explanation: "～からには = ในเมื่อ...ก็ต้อง" },
        { q: "天気が悪い（　）、試合は中止だ。", choices: ["ため", "くせに", "どころか", "ばかりに"], answer: 0, romaji: "tame", explanation: "～ため = เพราะ (ทางการ)" },
        { q: "彼の協力（　）、成功しなかっただろう。", choices: ["なしには", "までには", "どころか", "ばかりに"], answer: 0, romaji: "nashi ni wa", explanation: "～なしには = ถ้าไม่มี...ก็คง(ไม่)" },
      ],
    },
    {
      name: "問題8　文の組み立て",
      instruction: "★ に 入る ものは どれですか。",
      questions: [
        { q: "調査の　＿　＿　★　＿　見直す。（1.で　2.しだい　3.結果　4.計画を）", choices: ["結果", "しだい", "で", "計画を"], answer: 1, romaji: "ตำแหน่ง★ = しだい", explanation: "เรียง: 結果 しだい で 計画を → ★(ที่ 3) = しだい" },
        { q: "難しい　＿　＿　★　＿　ある。（1.こそ　2.から　3.やりがいが　4.が）", choices: ["から", "こそ", "やりがいが", "が"], answer: 1, romaji: "ตำแหน่ง★ = こそ", explanation: "เรียง: から こそ やりがいが ある → ★(ที่ 3) = こそ" },
        { q: "彼の　＿　＿　★　＿　だろう。（1.なしには　2.協力　3.しなかった　4.成功）", choices: ["協力", "なしには", "成功", "しなかった"], answer: 2, romaji: "ตำแหน่ง★ = 成功", explanation: "เรียง: 協力 なしには 成功 しなかった → ★(ที่ 3) = 成功" },
      ],
    },
    {
      name: "問題9　読解（中文）",
      instruction: "つぎの 文章を 読んで、質問に 答えて ください。",
      passage: "近年、環境問題への関心が高まっている。その中でも、プラスチックごみの問題は深刻だ。海に流れ出たプラスチックは、長い年月をかけても自然に分解されない。そのため、海の生き物が傷ついたり、命を落としたりしている。私たち一人ひとりができることは小さいかもしれない。しかし、買い物のときにエコバッグを使うなど、小さな行動の積み重ねが、大きな変化につながるのだ。",
      questions: [
        { q: "深刻だと 言って いる 問題は 何ですか。", choices: ["地球温暖化", "プラスチックごみ", "大気汚染", "森林破壊"], answer: 1, romaji: "purasuchikku gomi", explanation: "'プラスチックごみの問題は深刻だ'" },
        { q: "海に流れ出た プラスチックは どうなりますか。", choices: ["すぐ分解される", "自然に分解されない", "魚が食べる", "きれいになる"], answer: 1, romaji: "shizen ni bunkai sarenai", explanation: "'長い年月をかけても自然に分解されない'" },
        { q: "筆者は 何が 大きな変化に つながると 言って いますか。", choices: ["政府の力", "小さな行動の積み重ね", "科学の進歩", "お金"], answer: 1, romaji: "chiisana koudou no tsumikasane", explanation: "'小さな行動の積み重ねが、大きな変化につながる'" },
      ],
    },
  ],
});
