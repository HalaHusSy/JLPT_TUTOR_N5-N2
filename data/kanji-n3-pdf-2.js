// N3 kanji - batch 2 (from TRY! N3 + internet)
window.kanjiN3 = window.kanjiN3 || [];
window.kanjiN3.push(
  { char: "確", on: "カク", kun: "たし(か)", romaji: "kaku / tashi(ka)", meaning: "แน่ชัด", examples: [
    { jp: "確認する。", romaji: "Kakunin suru.", th: "ยืนยัน" },
    { jp: "確かだ。", romaji: "Tashika da.", th: "แน่นอน" },
    { jp: "正確な時間。", romaji: "Seikaku na jikan.", th: "เวลาที่แม่นยำ" },
  ]},
  { char: "達", on: "タツ", kun: "—", romaji: "tatsu", meaning: "ถึง, บรรลุ", examples: [
    { jp: "目標に達した。", romaji: "Mokuhyou ni tasshita.", th: "ถึงเป้าหมาย" },
    { jp: "友達がいる。", romaji: "Tomodachi ga iru.", th: "มีเพื่อน" },
    { jp: "上達した。", romaji: "Joutatsu shita.", th: "พัฒนาขึ้น" },
  ]},
  { char: "対", on: "タイ", kun: "—", romaji: "tai", meaning: "ต่อ, คู่, ตรงข้าม", examples: [
    { jp: "対象になる。", romaji: "Taishou ni naru.", th: "เป็นเป้าหมาย" },
    { jp: "対策を立てる。", romaji: "Taisaku o tateru.", th: "ตั้งมาตรการ" },
    { jp: "反対する。", romaji: "Hantai suru.", th: "คัดค้าน" },
  ]},
  { char: "策", on: "サク", kun: "—", romaji: "saku", meaning: "แผน, มาตรการ", examples: [
    { jp: "対策を考える。", romaji: "Taisaku o kangaeru.", th: "คิดมาตรการ" },
    { jp: "政策を実施する。", romaji: "Seisaku o jisshi suru.", th: "ดำเนินนโยบาย" },
    { jp: "解決策。", romaji: "Kaiketsusaku.", th: "วิธีแก้" },
  ]},
  { char: "域", on: "イキ", kun: "—", romaji: "iki", meaning: "เขต, พื้นที่", examples: [
    { jp: "地域の人々。", romaji: "Chiiki no hitobito.", th: "คนในพื้นที่" },
    { jp: "領域を広げる。", romaji: "Ryouiki o hirogeru.", th: "ขยายเขต" },
    { jp: "区域を分ける。", romaji: "Kuiki o wakeru.", th: "แบ่งพื้นที่" },
  ]},
  { char: "判", on: "ハン", kun: "—", romaji: "han", meaning: "ตัดสิน, ตรา", examples: [
    { jp: "判断する。", romaji: "Handan suru.", th: "ตัดสิน" },
    { jp: "批判する。", romaji: "Hihan suru.", th: "วิจารณ์" },
    { jp: "裁判所。", romaji: "Saibansho.", th: "ศาล" },
  ]},
  { char: "導", on: "ドウ", kun: "みちび(く)", romaji: "dou / michibi(ku)", meaning: "นำ, แนะนำ", examples: [
    { jp: "指導する。", romaji: "Shidou suru.", th: "แนะนำ" },
    { jp: "道を導く。", romaji: "Michi o michibiku.", th: "นำทาง" },
    { jp: "導入する。", romaji: "Dounyuu suru.", th: "นำเข้าใช้" },
  ]},
  { char: "共", on: "キョウ", kun: "とも", romaji: "kyou / tomo", meaning: "ร่วม, ด้วยกัน", examples: [
    { jp: "共通の話題。", romaji: "Kyoutsuu no wadai.", th: "หัวข้อร่วม" },
    { jp: "共有する。", romaji: "Kyouyuu suru.", th: "แชร์ร่วมกัน" },
    { jp: "共に歩む。", romaji: "Tomo ni ayumu.", th: "เดินไปด้วยกัน" },
  ]},
  { char: "完", on: "カン", kun: "—", romaji: "kan", meaning: "สมบูรณ์, เสร็จ", examples: [
    { jp: "完成した。", romaji: "Kansei shita.", th: "เสร็จสมบูรณ์" },
    { jp: "完全に直る。", romaji: "Kanzen ni naoru.", th: "หายสนิท" },
    { jp: "完了する。", romaji: "Kanryou suru.", th: "เสร็จสิ้น" },
  ]},
  { char: "賛", on: "サン", kun: "—", romaji: "san", meaning: "เห็นด้วย, สนับสนุน", examples: [
    { jp: "賛成します。", romaji: "Sansei shimasu.", th: "เห็นด้วย" },
    { jp: "賛同を得る。", romaji: "Sandou o eru.", th: "ได้รับความเห็นพ้อง" },
    { jp: "反対か賛成か。", romaji: "Hantai ka sansei ka.", th: "คัดค้านหรือเห็นด้วย" },
  ]},
  { char: "否", on: "ヒ", kun: "いな", romaji: "hi / ina", meaning: "ไม่, ปฏิเสธ", examples: [
    { jp: "否定する。", romaji: "Hitei suru.", th: "ปฏิเสธ" },
    { jp: "賛否両論。", romaji: "Sanpi ryouron.", th: "ทั้งเห็นด้วยและไม่" },
    { jp: "否認する。", romaji: "Hinin suru.", th: "ปฏิเสธ" },
  ]},
  { char: "含", on: "ガン", kun: "ふく(む)", romaji: "gan / fuku(mu)", meaning: "รวม, อม", examples: [
    { jp: "税を含む。", romaji: "Zei o fukumu.", th: "รวมภาษี" },
    { jp: "含まれている。", romaji: "Fukumarete iru.", th: "ถูกรวมอยู่" },
    { jp: "含み笑い。", romaji: "Fukumi warai.", th: "ยิ้มมุม" },
  ]},
  { char: "険", on: "ケン", kun: "けわ(しい)", romaji: "ken / kewa(shii)", meaning: "อันตราย, สูงชัน", examples: [
    { jp: "危険です。", romaji: "Kiken desu.", th: "อันตราย" },
    { jp: "保険に入る。", romaji: "Hoken ni hairu.", th: "ทำประกัน" },
    { jp: "険しい道。", romaji: "Kewashii michi.", th: "ทางสูงชัน" },
  ]},
  { char: "責", on: "セキ", kun: "せ(める)", romaji: "seki / se(meru)", meaning: "ตำหนิ, รับผิดชอบ", examples: [
    { jp: "責任を取る。", romaji: "Sekinin o toru.", th: "รับผิดชอบ" },
    { jp: "自分を責める。", romaji: "Jibun o semeru.", th: "ตำหนิตัวเอง" },
    { jp: "責任者。", romaji: "Sekininsha.", th: "ผู้รับผิดชอบ" },
  ]},
  { char: "値", on: "チ", kun: "ね・あたい", romaji: "chi / ne", meaning: "ค่า, ราคา", examples: [
    { jp: "値段が高い。", romaji: "Nedan ga takai.", th: "ราคาแพง" },
    { jp: "価値がある。", romaji: "Kachi ga aru.", th: "มีคุณค่า" },
    { jp: "数値を見る。", romaji: "Suuchi o miru.", th: "ดูตัวเลข" },
  ]},
  { char: "効", on: "コウ", kun: "き(く)", romaji: "kou / ki(ku)", meaning: "ได้ผล, ประสิทธิภาพ", examples: [
    { jp: "効果がある。", romaji: "Kouka ga aru.", th: "ได้ผล" },
    { jp: "有効な方法。", romaji: "Yuukou na houhou.", th: "วิธีที่มีประสิทธิภาพ" },
    { jp: "薬が効く。", romaji: "Kusuri ga kiku.", th: "ยาได้ผล" },
  ]},
  { char: "原", on: "ゲン", kun: "はら", romaji: "gen / hara", meaning: "ต้นเดิม, ทุ่ง", examples: [
    { jp: "原因を調べる。", romaji: "Gen'in o shiraberu.", th: "ตรวจสอบสาเหตุ" },
    { jp: "原則。", romaji: "Gensoku.", th: "หลักการ" },
    { jp: "草原を走る。", romaji: "Sougen o hashiru.", th: "วิ่งในทุ่ง" },
  ]},
  { char: "許", on: "キョ", kun: "ゆる(す)", romaji: "kyo / yuru(su)", meaning: "อนุญาต, ให้อภัย", examples: [
    { jp: "許してください。", romaji: "Yurushite kudasai.", th: "ให้อภัยด้วย" },
    { jp: "許可を取る。", romaji: "Kyoka o toru.", th: "ขออนุญาต" },
    { jp: "免許を持つ。", romaji: "Menkyo o motsu.", th: "มีใบอนุญาต" },
  ]},
  { char: "供", on: "キョウ", kun: "そな(える)・とも", romaji: "kyou / sona(eru)", meaning: "ถวาย, เด็ก, จัดเตรียม", examples: [
    { jp: "子供と遊ぶ。", romaji: "Kodomo to asobu.", th: "เล่นกับเด็ก" },
    { jp: "提供する。", romaji: "Teikyou suru.", th: "จัดให้" },
    { jp: "供給する。", romaji: "Kyoukyuu suru.", th: "จัดหาให้" },
  ]},
  { char: "底", on: "テイ", kun: "そこ", romaji: "tei / soko", meaning: "ก้น, พื้น", examples: [
    { jp: "海の底。", romaji: "Umi no soko.", th: "ก้นทะเล" },
    { jp: "徹底的に。", romaji: "Tettei-teki ni.", th: "อย่างทั่วถึง" },
    { jp: "底なし。", romaji: "Soko nashi.", th: "ไม่มีก้น" },
  ]},
);
