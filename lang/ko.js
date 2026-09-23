/* 한국어 */
(() => {
const G = {
  dry: "건조 재료", water: "물", sulfur: "유황", clay: "적점토 가루", phyl: "필라이트 가루",
  salt: "천일염", naoh: "가성소다 (NaOH)", naohS: "가성소다", w0: "시작용 물", w1: "보충용 물",
  exact: "정확히 계량하세요", afterDissolve: "유황이 녹은 뒤에 넣습니다",
  s1: "1단계: 녹이기", s2: "2단계: 섞기", later: "나중에",
  koh: "수산화칼륨(KOH, 90%)", kohS: "수산화칼륨", kohNote: "가성가리라고도 합니다",
  soft: "연수(軟水)", softNote: "정확히 계량하세요. 빗물이나 증류수를 사용합니다.", canola: "카놀라유",
  jwaWater: "10리터 버전 기준입니다. 언제 넣는지는 공식 단계를 확인하세요.",
  ingr: "재료", mold: "부엽토(숲 흙)", moldNote: "가까운 숲의 표토에서 채취",
  potato: "삶은 감자", chlorine: "염소가 없는 물", tapNote: "수돗물을 24시간 받아 두세요",
  fill: "용기 채우기", plant: "잘게 썬 식물 재료", plantNote: "느슨하게 채웁니다. 용기의 약 3분의 1.", rest: "나머지는 물로 채우기",
  drum: "통 안에", fdung: "데시 소의 신선한 소똥", urine: "데시 소의 소변",
  urineRange: "자료마다 5~10리터로 다릅니다. 여기서는 중간값을 사용했습니다.", jag: "재거리(비정제 사탕수수 설탕)", besan: "병아리콩 가루(베산)",
  lime: "석회", limeOpt: "일부 자료에서는 생략합니다", farmSoil: "농장 흙",
  farmSoilNote: "오래된 나무 아래나 밭두렁에서 채취. 화학물질 없이.",
  dung: "데시 소의 소똥", tied: "천에 싸서 묶음", limeNight: "물 약간에 하룻밤 녹인 것",
  bund: "밭두렁 흙", ddung: "잘 말린 데시 소의 소똥", dissolved: "물에 녹임",
  little: "약간", moisten: "소똥이 촉촉해질 정도로만", rootSoil: "식물 뿌리 주변 흙", handful: "한 줌",
  st1: "1단계: 3일", st2: "2단계: 15일", st3: "3단계: 약 30일", ghee: "데시 소의 기(정제버터)",
  milk: "데시 소의 우유", curd: "데시 소의 요구르트", coco: "어린 코코넛 물", banana: "잘 익은 바나나",
  bananaUnit: "개", bananaNote: "완전히 익혀 으깬 것", neem: "님 잎 반죽", pulp: "또는 님 씨앗 과육",
  urG: "소 소변", pastes: "잎 반죽", neemL: "님 잎", karanj: "카란지 잎", custard: "커스터드애플 잎",
  castor: "피마자 잎", datura: "독말풀 잎", toxGlove: "독성이 있습니다. 장갑을 착용하세요.", tobacco: "담배 가루",
  toxMask: "독성이 있습니다. 장갑과 마스크를 착용하세요.", chili: "풋고추 반죽", garlic: "마늘 반죽", turmeric: "강황 가루",
  d1: "1일차: 기본재료", d1s: "1일차: 향신료", d2: "2일차", d3: "3일차: 잎", ginger: "생강 반죽", hing: "아위(히잉)",
  leaf10: "10가지 잎 반죽", leaf10Note: "님, 카란지, 커스터드애플, 피마자, 파파야 등 각 2kg씩"
};
const S = {
  caustic: n => [`${n}는 화학 화상을 일으킵니다. 물과 섞으면 매우 뜨거워집니다.`, "보안경, 고무장갑, 장화, 긴소매 옷, 마스크를 착용하고 야외에서 작업하세요.", "내열 플라스틱 용기를 사용하세요. 알루미늄은 절대 사용하지 마세요.", "어린이와 동물이 가까이 오지 못하게 하고, 모든 용기에 라벨을 붙이세요."],
  ferment: ["다룬 뒤에는 장갑을 착용하고 손을 씻으세요.", "발효 중인 혼합물은 냄새가 강할 수 있으니 집에서 멀리 두세요.", "모든 용기에 라벨을 붙이고 어린이 손이 닿지 않는 곳에 보관하세요."],
  cow: ["소똥과 소변을 만진 뒤에는 장갑을 착용하고 손을 잘 씻으세요.", "채소와 과일은 먹기 전에 잘 씻으세요. 수확 직전에는 살포하지 마세요.", "파리가 알을 낳지 못하도록 통을 망으로 덮으세요. 모든 용기에 라벨을 붙이고 어린이에게서 멀리 두세요."],
  toxic: ["독말풀, 담배, 고추 같은 재료는 독성이 있거나 자극적입니다. 장갑, 마스크, 눈 보호구를 착용하세요.", "끓이고 섞는 작업은 야외에서 하세요. 이후 이 냄비는 주방에서 다시 쓰지 마세요.", "어린이와 동물이 가까이 오지 못하게 하고, 모든 용기에 명확히 라벨을 붙이세요.", "수확물은 잘 씻으세요. 수확 직전에는 살포하지 마세요."]
};
const it = (g, n, note, x) => Object.assign({ g, n }, note ? { note } : {}, x || {});

UI.ko = {
  title: "유기농법 계산기", tagline: "어떤 양이든 정확한 배합을", offline: "오프라인에서도 작동",
  groups: { jadam: "JADAM 레시피", india: "인도 전통 방식" },
  indiaNote: "NITI Aayog와 인도 농업대학들이 정리한 자연농법입니다. 토종(데시) 소의 소똥과 소변을 사용합니다.",
  hot: "물 온도가 27°C(80°F)보다 높음", hotNote: "따뜻한 물에 맞게 조정됨",
  copy: "복사", share: "공유", copied: "레시피가 복사되었습니다", copyFail: "복사하지 못했습니다", enterFirst: "먼저 양을 입력하세요",
  copyAria: "레시피 복사", shareAria: "레시피 공유",
  yourRecipe: "나의 레시피", enterAmount: "만들고 싶은 양을 입력하세요.",
  need: (sz, name) => `${sz} ${name}을(를) 만들려면`,
  covers: n => `약 ${n}에이커에 사용할 수 있습니다.`,
  sprayTitle: "살포용 희석", tankHelp: "분무기나 물탱크의 용량.", tankAria: u => `분무기 용량 (${u})`,
  dilution: "희석 배율", dilAria: "희석 비율", stronger: "진하게", weaker: "묽게", enterTank: "분무기 용량을 입력하세요.",
  conc: name => `${name} 원액`, fillTo: tank => `그런 다음 물을 ${tank}까지 채우세요`,
  batchLine: (a, b, n) => `${a}의 원액을 ${n}×로 희석하면 살포 가능한 액체가 약 ${b} 만들어집니다.`,
  method: "만드는 방법", safety: "안전 수칙", source: "출처 확인",
  feedbackQ: "잘못된 수치를 발견했거나 의견이 있으신가요?", feedbackBtn: "이메일로 의견 보내기",
  disclaimer: "이 수치는 공개된 레시피(JADAM, NITI Aayog, TNAU 및 각 주 지침)를 기준으로 환산한 것입니다. 출처에 따라 레시피가 다를 수 있으니 정확히 계량하고, 전체 작물에 사용하기 전에 일부 식물에 먼저 테스트하며, 혼합 전에 공식 단계를 확인하세요. 이 도구는 비공식 도구이며 JADAM이나 정부기관과는 관련이 없습니다. 이는 계산기일 뿐 전문적인 안전 조언이 아닙니다.",
  recipeFoot: "수치는 공개된 레시피를 기준으로 환산되었습니다. 혼합 전에 공식 단계를 확인하세요. 장갑과 눈 보호구를 착용하세요.",
  units: { kg: "kg", g: "g", lb: "lb", oz: "oz", L: "L", mL: "mL", gal: "갤런", floz: "액량 온스" }
};

HI_TEXT.ko = {
  js: {
    tag: "유황", role: "살균제 겸 살충제", sizeLabel: "JS를 얼마나 만드시겠어요?",
    items: [it(G.dry, G.sulfur), it(G.dry, G.clay), it(G.dry, G.phyl), it(G.dry, G.salt), it(G.dry, G.naoh), it(G.water, G.w0, G.exact), it(G.water, G.w1, G.afterDissolve)],
    dil: { note: "JADAM은 대략 100×~1000× 희석을 권장합니다." },
    tipsTitle: "핵심 포인트",
    tips: ["아래 링크의 JADAM 공식 단계와 정확히 같은 순서로 재료를 넣으세요.", "포도, 감, 호두, 호박, 온실 작물은 민감합니다. 먼저 잎 몇 장에 시험해 보세요.", "내열 플라스틱(PE) 용기를 사용하세요. 알루미늄은 절대 사용하지 마세요.", "혼합물이 약 80°C를 넘으면 유황이 녹습니다. 바닥에 덩어리가 남지 않을 때까지 저으세요.", "보충용 물을 넣은 뒤 하루 이틀 가라앉힌 다음 침전물을 걸러내세요.", "−5°C(23°F) 이상에서 보관하세요."],
    safety: S.caustic(G.naohS)
  },
  jwa: {
    tag: "전착제", role: "살포액이 잘 붙도록 돕는 천연 비누", sizeLabel: "JWA를 얼마나 만드시겠어요?",
    items: [it(G.s1, G.koh, G.kohNote), it(G.s1, G.soft, G.softNote), it(G.s2, G.canola), it(G.later, G.water, G.jwaWater)],
    dil: { note: "공개된 희석 범위는 대략 30×~100×입니다." },
    steps: ["KOH를 밀폐된 내열 용기 안에서 연수에 녹이세요. 매우 뜨거워집니다.", "카놀라유를 넣고 전동 드릴로 약 10분간 섞어 묽은 마요네즈 같은 상태가 되게 하세요. 손으로는 되지 않습니다.", "뚜껑을 닫고 3일간 두세요. 버터처럼 굳어야 합니다."],
    tipsTitle: "알아두면 좋아요",
    tips: ["연수만 사용하세요. 경수인 수돗물을 쓰면 망가집니다.", "강한 햇빛 아래에서 살포하지 마세요. 스위트피, 한련화, 여린 양치식물에는 사용하지 마세요."],
    safety: S.caustic(G.kohS)
  },
  jms: {
    tag: "미생물", role: "부엽토에서 배양한 살아있는 토양 미생물", sizeLabel: "얼마나 배양하시겠어요?",
    items: [it(G.ingr, G.mold, G.moldNote), it(G.ingr, G.potato), it(G.ingr, G.salt), it(G.ingr, G.chlorine, G.tapNote)],
    dil: { note: "사용 전 보통 약 10× 희석합니다." },
    steps: ["감자를 삶아 으깬 뒤 부엽토와 함께 망 주머니에 넣으세요.", "소금을 물에 녹이세요. 주머니를 매달아 물이 탁하고 갈색이 될 때까지 주무르세요.", "느슨하게 덮고 18~25°C를 유지하세요.", "1~3일 후 표면에 거품층이 생깁니다. 하루 이틀 안에 사용하세요."],
    tipsTitle: "알아두면 좋아요", tips: ["JMS는 보관할 수 없습니다. 매번 새로 만드세요."], safety: S.ferment
  },
  jlf: {
    tag: "액비", role: "발효시킨 식물성 액체비료", sizeLabel: "용기 크기가 얼마나 되나요?",
    items: [it(G.fill, G.plant, G.plantNote), it(G.fill, G.chlorine, G.rest)],
    dil: { note: "JADAM은 약 100×를 사용합니다. 모종에는 더 묽게 200×~500×." },
    steps: ["식물 재료를 잘게 써세요.", "느슨하게 용기의 약 3분의 1을 채우세요.", "나머지는 염소가 없는 물로 채우세요. 느슨하게 덮으세요.", "몇 주에서 몇 달간 두세요. 부패 냄새 대신 흙냄새가 나면 완성입니다.", "사용 전에 희석하세요."],
    tipsTitle: "알아두면 좋아요", tips: ["가장 좋은 재료는 같은 작물의 부산물, 그다음은 야생 풀과 잡초입니다."], safety: S.ferment
  },
  jeevamrit: {
    tag: "토양 활력제", role: "토양 미생물에 영양을 주는 발효 소똥·소변액", sizeLabel: "Jeevamrit을 얼마나 만드시겠어요?",
    items: [it(G.drum, G.fdung), it(G.drum, G.urine, G.urineRange), it(G.drum, G.jag), it(G.drum, G.besan), it(G.drum, G.lime, G.limeOpt), it(G.drum, G.farmSoil, G.farmSoilNote), it(G.drum, G.water)],
    coverage: { text: "일반적인 사용량은 에이커당 약 200리터이며, 15일마다 관개수와 함께 줍니다." },
    dil: { note: "잎에 뿌릴 때 구자라트주의 방식은 120리터 물에 약 7.5리터를 사용합니다. 토양에는 희석하지 않고 사용합니다." },
    steps: ["모든 재료를 통 안의 물과 섞으세요.", "그늘에서 48시간 두세요. 매일 아침저녁으로 나무 막대로 저으세요.", "보름마다 작물에 뿌리거나 관개수에 섞어 주세요.", "약 15일 이내에 사용하세요."],
    tipsTitle: "알아두면 좋아요", tips: ["토종(데시) 소의 소똥과 소변을 사용하세요."], safety: S.cow
  },
  beejamrit: {
    tag: "종자 처리", role: "씨앗과 어린 뿌리를 보호하는 코팅제", sizeLabel: "종자를 얼마나 처리하시겠어요?",
    titleFn: sz => `${sz}의 종자를 처리하려면`,
    items: [it(G.ingr, G.dung, G.tied), it(G.ingr, G.urine), it(G.ingr, G.lime, G.limeNight), it(G.ingr, G.bund), it(G.ingr, G.water)],
    use: { title: "사용 방법", list: ["Beejamrit을 손으로 씨앗에 골고루 묻힌 뒤 그늘에서 잘 말려 파종하세요.", "껍질이 얇은 콩류는 잠깐 담갔다가 말리세요.", "벼 모는 이식 전 뿌리를 30분간 담그세요."] },
    steps: ["소똥을 천에 싸서 물에 최대 12시간 매달아 두세요.", "석회를 물 약간에 섞어 하룻밤 두세요.", "다음 날 아침 소똥 주머니를 물속에서 3번 짜세요.", "흙을 넣고 저으세요. 그다음 소변과 석회수를 넣고 다시 저으세요."],
    tipsTitle: "알아두면 좋아요", tips: ["당일 새로 만들어 사용하세요."], safety: S.cow
  },
  ghana: {
    tag: "건조 활력제", role: "토양에 섞어 쓰는 Jeevamrit의 건조 고형 형태", sizeLabel: "마른 소똥이 얼마나 있나요?",
    titleFn: sz => `${sz}의 마른 소똥에 필요한 재료`,
    items: [it(G.ingr, G.ddung), it(G.ingr, G.besan), it(G.ingr, G.jag, G.dissolved), it(G.ingr, G.urine, G.moisten, { text: G.little }), it(G.ingr, G.rootSoil, null, { text: G.handful })],
    coverage: { text: "일반적인 사용량은 파종 시 에이커당 약 100kg입니다. 일부 주 지침은 마지막 갈이 전 200kg을 사용합니다." },
    use: { title: "사용 방법", list: ["파종 시 밭에 뿌리거나 식물 주변에 덧거름으로 줍니다.", "사용 전까지 건조 상태로 보관하세요."] },
    steps: ["마른 소똥을 땅 위에 얇게 펼치세요.", "소변과 병아리콩 가루를 조금 뿌리세요.", "재거리를 물에 녹여 뿌리세요. 흙 한 줌을 넣으세요.", "잘 섞어 작은 경단(laddu) 모양으로 빚으세요. 그늘에서 말리세요."],
    tipsTitle: "알아두면 좋아요", tips: ["말린 Ghanajeevamrit은 몇 달간 보관할 수 있어 저장과 운반이 쉽습니다."], safety: S.cow
  },
  panchagavya: {
    tag: "생장 강화제", role: "다섯 가지 소 산물을 발효시켜 잎에 뿌리는 액체", sizeLabel: "Panchagavya를 얼마나 만드시겠어요? (대략)",
    items: [it(G.st1, G.fdung), it(G.st1, G.ghee), it(G.st2, G.urine), it(G.st2, G.water), it(G.st3, G.milk), it(G.st3, G.curd), it(G.st3, G.coco), it(G.st3, G.jag), it(G.st3, G.banana, G.bananaNote, { unit: G.bananaUnit })],
    dil: { note: "보통 물 100리터에 3리터(3%)를 뿌립니다. 잎채소에는 더 묽게 약 2%를 사용하세요." },
    steps: ["소똥과 기를 잘 섞으세요. 3일간 아침저녁으로 저으세요.", "소변과 물을 넣으세요. 15일간 아침저녁으로 저으세요.", "우유, 요구르트, 코코넛 물, 재거리, 으깬 바나나를 넣으세요.", "약 30일간 하루 두 번 저은 뒤 천으로 거르세요."],
    tipsTitle: "알아두면 좋아요", tips: ["파리가 알을 낳지 못하도록 망으로 덮어두세요.", "분무기가 막히지 않도록 살포 전에 잘 걸러주세요."], safety: S.cow
  },
  neemastra: {
    tag: "흡즙 해충", role: "진딧물, 흰가루이, 작은 애벌레에 쓰는 님 기반 살포액", sizeLabel: "Neemastra를 얼마나 만드시겠어요?",
    items: [it(G.drum, G.water), it(G.drum, G.urine), it(G.drum, G.dung), it(G.drum, G.neem, G.pulp)],
    dil: { note: "일반적으로 3.5%~5%를 사용합니다. 물 100리터에 5리터를 넣으면 20×입니다." },
    steps: ["소변, 소똥, 님 반죽을 물에 넣으세요.", "긴 막대로 시계 방향으로 저으세요. 마대로 덮어 햇빛과 비를 피해 그늘에 두세요.", "매일 아침저녁으로 저으세요. 48시간 후 완성됩니다.", "사용 전 모슬린 천으로 거르세요."],
    tipsTitle: "알아두면 좋아요", tips: ["익충이 활동하지 않는 늦은 오후에 살포하세요.", "신선하게 사용하는 것이 가장 좋습니다. 구자라트주 자료에 따르면 최대 6개월 보관 가능합니다."], safety: S.cow
  },
  brahmastra: {
    tag: "애벌레류", role: "끓인 잎과 소변으로 만든 애벌레·천공충 방제액", sizeLabel: "Brahmastra를 얼마나 만드시겠어요?",
    items: [it(G.urG, G.urine), it(G.pastes, G.neemL), it(G.pastes, G.karanj), it(G.pastes, G.custard), it(G.pastes, G.castor), it(G.pastes, G.datura, G.toxGlove)],
    dil: { note: "잎에 살포 시: 물 100리터에 2~3리터. 선충 방제용 토양 관주 시: 물 100리터에 8리터(12×)." },
    steps: ["각 종류의 잎을 곱게 갈아 반죽으로 만드세요.", "소변을 그릇에 담고 모든 반죽을 섞으세요.", "약한 불로 끓여 거품이 한두 번 올라오게 하세요. 시계 방향으로 저으며 덮어두세요.", "두 번째 거품이 오른 뒤 불을 끄고 48시간 식히세요.", "모슬린 천으로 거르세요. 그늘진 용기에 보관하세요."],
    tipsTitle: "알아두면 좋아요", tips: ["일부 자료는 파파야, 석류, 구아바 등 다른 잎을 사용합니다.", "햇빛을 피해 보관하세요. 자료에 따르면 최대 6개월 보관 가능합니다."], safety: S.toxic
  },
  agniastra: {
    tag: "천공충·벌레", role: "님, 고추, 마늘로 만든 매운 살포액으로 천공충과 벌레 방제", sizeLabel: "Agniastra를 얼마나 만드시겠어요?",
    items: [it(G.ingr, G.urine), it(G.ingr, G.neem), it(G.ingr, G.tobacco, G.toxMask), it(G.ingr, G.chili), it(G.ingr, G.garlic), it(G.ingr, G.turmeric)],
    dil: { note: "물 200리터에 6~8리터(25×~33×). 피해가 심하면 더 진한 비율을 사용하세요." },
    steps: ["모든 재료를 소변에 넣고 시계 방향으로 저으세요.", "덮고 거품이 날 때까지 끓이세요.", "불에서 내려 그늘에서 48시간 두세요. 하루 두 번 저으세요.", "모슬린 천으로 거르세요. 약 3개월간 보관 가능합니다."],
    tipsTitle: "알아두면 좋아요", tips: ["줄기와 열매의 천공충 및 벌레류에 사용하세요."], safety: S.toxic
  },
  dashaparni: {
    tag: "다목적 방제", role: "다양한 병해충에 쓰는 10가지 잎 발효 추출액", sizeLabel: "Dashaparni를 얼마나 만드시겠어요?",
    items: [it(G.d1, G.water), it(G.d1, G.urine), it(G.d1, G.dung), it(G.d1s, G.turmeric), it(G.d1s, G.ginger), it(G.d1s, G.hing), it(G.d2, G.tobacco, G.toxMask), it(G.d2, G.chili), it(G.d2, G.garlic), it(G.d3, G.leaf10, G.leaf10Note)],
    dil: { note: "물 200리터에 6~8리터(3%~4%)." },
    steps: ["소변과 소똥을 물에 넣으세요. 덮고 2시간 두세요.", "강황, 생강, 아위를 넣으세요. 시계 방향으로 저은 뒤 덮고 하룻밤 두세요.", "다음 날 아침 담배, 고추, 마늘을 넣으세요. 저은 뒤 덮고 그늘에서 24시간 두세요.", "10가지 잎 반죽을 넣으세요. 저은 뒤 마대로 덮으세요.", "30~40일간 발효시키며 하루 두 번 저으세요. 그런 다음 모슬린 천으로 거르세요."],
    tipsTitle: "알아두면 좋아요", tips: ["잎을 구할 수 있다면 Neemastra, Brahmastra, Agniastra를 대신할 수 있습니다.", "구충 효과가 있는 잎이라면 어떤 10가지든 사용할 수 있습니다. 가축이 먹는 잎은 피하세요."], safety: S.toxic
  }
};
})();
