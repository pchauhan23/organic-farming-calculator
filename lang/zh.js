/* 中文（简体） */
(() => {
const G = {
  dry: "干料", water: "水", sulfur: "硫磺", clay: "红黏土粉", phyl: "千枚岩粉",
  salt: "海盐", naoh: "烧碱（NaOH）", naohS: "烧碱", w0: "起始用水", w1: "补加水",
  exact: "请精确称量", afterDissolve: "待硫磺溶解后加入",
  s1: "第一步：溶解", s2: "第二步：混合", later: "之后",
  koh: "氢氧化钾（KOH，90%）", kohS: "氢氧化钾", kohNote: "又称苛性钾",
  soft: "软水", softNote: "请精确称量。使用雨水或蒸馏水。", canola: "菜籽油",
  jwaWater: "来自10升版配方。何时加入请查看官方步骤。",
  ingr: "原料", mold: "腐叶土（林地腐殖土）", moldNote: "取自附近林地表土",
  potato: "煮熟的土豆", chlorine: "无氯水", tapNote: "自来水静置24小时",
  fill: "装满容器", plant: "切碎的植物材料", plantNote: "松散装填，约占容器三分之一", rest: "其余部分加满水",
  drum: "桶中原料", fdung: "新鲜本地牛（desi牛）粪", urine: "本地牛（desi牛）尿",
  urineRange: "不同资料给出5至10升，此处取中间值。", jag: "赤砂糖（jaggery）", besan: "鹰嘴豆粉（besan）",
  lime: "石灰", limeOpt: "部分做法中省略", farmSoil: "农场土壤",
  farmSoilNote: "取自老树下或田埂，不含化学品。",
  dung: "本地牛（desi牛）粪", tied: "用布包好", limeNight: "提前一晚溶于少量水中",
  bund: "田埂土壤", ddung: "充分晒干的本地牛（desi牛）粪", dissolved: "溶于水中",
  little: "少许", moisten: "只需刚好湿润粪肥", rootSoil: "植株根部周围的土壤", handful: "一把",
  st1: "第一阶段：3天", st2: "第二阶段：15天", st3: "第三阶段：约30天", ghee: "本地牛（desi牛）酥油",
  milk: "本地牛（desi牛）奶", curd: "本地牛（desi牛）酸奶", coco: "嫩椰子水", banana: "熟香蕉",
  bananaUnit: "根", bananaNote: "充分成熟并捣烂", neem: "印楝叶浆", pulp: "或印楝籽果肉",
  urG: "牛尿", pastes: "叶浆", neemL: "印楝叶", karanj: "水黄皮叶", custard: "番荔枝叶",
  castor: "蓖麻叶", datura: "曼陀罗叶", toxGlove: "有毒，请戴手套操作。", tobacco: "烟草粉",
  toxMask: "有毒，请戴手套和口罩操作。", chili: "青辣椒酱", garlic: "大蒜泥", turmeric: "姜黄粉",
  d1: "第1天：基础料", d1s: "第1天：香料", d2: "第2天", d3: "第3天：叶料", ginger: "生姜泥", hing: "阿魏胶（hing）",
  leaf10: "十种叶浆", leaf10Note: "每种2千克，例如印楝、水黄皮、番荔枝、蓖麻和木瓜叶"
};
const S = {
  caustic: n => [`${n}会造成化学灼伤，与水混合时会剧烈发热。`, "请佩戴护目镜、橡胶手套、雨靴、长袖外套和口罩，并在户外操作。", "使用耐热塑料容器，切勿使用铝制容器。", "远离儿童和动物，每个容器都要贴上标签。"],
  ferment: ["操作后请戴手套并洗手。", "发酵中的混合物气味可能较重，请远离住所存放。", "每个容器都要贴上标签，并放在儿童接触不到的地方。"],
  cow: ["接触牛粪和牛尿后请戴手套并彻底洗手。", "食用蔬果前请充分清洗，收获前不要施用。", "用纱网盖住容器以防苍蝇产卵，每个容器都要贴上标签并远离儿童。"],
  toxic: ["曼陀罗、烟草和辣椒等原料有毒或有刺激性，请佩戴手套、口罩和护目镜。", "请在户外煮制和混合，之后不要再将这些锅具用于厨房。", "远离儿童和动物，每个容器都要清楚标注。", "请充分清洗作物，收获前不要施用。"]
};
const it = (g, n, note, x) => Object.assign({ g, n }, note ? { note } : {}, x || {});

UI.zh = {
  title: "有机农业计算器", tagline: "任何用量都能精确配比", offline: "支持离线使用",
  groups: { jadam: "JADAM 配方", india: "印度传统方法" },
  indiaNote: "这些自然农法由印度国家转型研究院（NITI Aayog）和各邦农业大学记录，使用本地（desi）牛的粪和尿。",
  hot: "水温高于27°C（80°F）", hotNote: "已按温水调整",
  copy: "复制", share: "分享", copied: "配方已复制", copyFail: "复制失败", enterFirst: "请先输入用量",
  copyAria: "复制配方", shareAria: "分享配方",
  yourRecipe: "您的配方", enterAmount: "请输入您想制作的用量。",
  need: (sz, name) => `制作${sz}${name}所需材料`,
  covers: n => `大约可施用于 ${n} 英亩。`,
  sprayTitle: "喷施稀释", tankHelp: "您的喷雾器或药箱容量。", tankAria: u => `喷雾器容量（${u}）`,
  dilution: "稀释倍数", dilAria: "稀释比例", stronger: "更浓", weaker: "更稀", enterTank: "请输入喷雾器容量。",
  conc: name => `${name}原液`, fillTo: tank => `然后加水至${tank}`,
  batchLine: (a, b, n) => `按${n}×稀释，${a}原液可配出约${b}的可喷施药液。`,
  method: "制作方法", safety: "安全提示", source: "查看来源",
  feedbackQ: "发现数据有误或有建议？", feedbackBtn: "发送邮件反馈",
  disclaimer: "所有用量均根据已发表配方（JADAM、NITI Aayog、TNAU及各邦指南）折算得出。不同来源的配方略有差异，请仔细称量，在大面积使用前先在少数植株上试用，并在混合前查看官方步骤。本工具为非官方工具，与JADAM或任何政府机构无关，仅作计算之用，不构成专业安全建议。",
  recipeFoot: "用量根据已发表配方折算。混合前请查看官方步骤，操作时请佩戴手套和护目镜。",
  units: { kg: "千克", g: "克", lb: "磅", oz: "盎司", L: "升", mL: "毫升", gal: "加仑", floz: "液盎司" }
};

HI_TEXT.zh = {
  js: {
    tag: "硫磺", role: "杀菌剂兼杀虫剂", sizeLabel: "您想制作多少JS？",
    items: [it(G.dry, G.sulfur), it(G.dry, G.clay), it(G.dry, G.phyl), it(G.dry, G.salt), it(G.dry, G.naoh), it(G.water, G.w0, G.exact), it(G.water, G.w1, G.afterDissolve)],
    dil: { note: "JADAM建议稀释约100×至1000×。" },
    tipsTitle: "要点提示",
    tips: ["请严格按照JADAM官方步骤的顺序加入原料（下方链接）。", "葡萄、柿子、核桃、南瓜及温室作物较敏感，请先在少量叶片上试验。", "使用耐热塑料（PE）容器，切勿使用铝制容器。", "混合物温度超过约80°C时硫磺会熔化，请搅拌至底部无结块。", "补水后静置一到两天，再过滤沉淀物。", "存放温度需高于−5°C（23°F）。"],
    safety: S.caustic(G.naohS)
  },
  jwa: {
    tag: "展着剂", role: "帮助药液附着叶面的天然皂剂", sizeLabel: "您想制作多少JWA？",
    items: [it(G.s1, G.koh, G.kohNote), it(G.s1, G.soft, G.softNote), it(G.s2, G.canola), it(G.later, G.water, G.jwaWater)],
    dil: { note: "常用稀释范围约为30×至100×。" },
    steps: ["将KOH溶于软水中，置于密闭耐热容器内，反应会剧烈发热。", "加入菜籽油，用电钻搅拌约10分钟，直至呈稀蛋黄酱状，手工搅拌无法成功。", "盖紧容器静置3天，应凝固如黄油状。"],
    tipsTitle: "小贴士",
    tips: ["仅使用软水，硬质自来水会破坏配方效果。", "避免在强光下喷施。不要用于香豌豆、旱金莲及娇嫩的蕨类植物。"],
    safety: S.caustic(G.kohS)
  },
  jms: {
    tag: "微生物", role: "由腐叶土培养的活性土壤微生物", sizeLabel: "您想培养多少水？",
    items: [it(G.ingr, G.mold, G.moldNote), it(G.ingr, G.potato), it(G.ingr, G.salt), it(G.ingr, G.chlorine, G.tapNote)],
    dil: { note: "使用前通常稀释约10×。" },
    steps: ["将土豆煮熟捣碎，与腐叶土一同放入网袋。", "将盐溶于水中，把网袋放入水中揉捏，直至水变浑浊发褐。", "松散加盖，保持在18至25°C之间。", "1至3天后表面会形成泡沫层，请在一两天内使用完毕。"],
    tipsTitle: "小贴士", tips: ["JMS无法保存，请每次现配现用。"], safety: S.ferment
  },
  jlf: {
    tag: "液肥", role: "发酵植物液肥", sizeLabel: "您的容器有多大？",
    items: [it(G.fill, G.plant, G.plantNote), it(G.fill, G.chlorine, G.rest)],
    dil: { note: "JADAM常用约100×，育苗期可更稀释至200×至500×。" },
    steps: ["将植物材料切碎。", "松散装填约占容器三分之一。", "其余部分加满无氯水，松散加盖。", "静置数周至数月，闻起来有泥土味而非腐臭味即为完成。", "使用前请稀释。"],
    tipsTitle: "小贴士", tips: ["最佳材料：同种作物的残余部分，其次是野草。"], safety: S.ferment
  },
  jeevamrit: {
    tag: "土壤活化液", role: "发酵的粪尿混合液，可滋养土壤微生物", sizeLabel: "您想制作多少Jeevamrit？",
    items: [it(G.drum, G.fdung), it(G.drum, G.urine, G.urineRange), it(G.drum, G.jag), it(G.drum, G.besan), it(G.drum, G.lime, G.limeOpt), it(G.drum, G.farmSoil, G.farmSoilNote), it(G.drum, G.water)],
    coverage: { text: "常规用量约为每英亩200升，每15天随灌溉施用一次。" },
    dil: { note: "叶面喷施方面，古吉拉特邦的做法是约7.5升兑120升水；土壤施用则不稀释。" },
    steps: ["将所有材料与水一同倒入桶中混合。", "置于阴凉处静置48小时，每天早晚用木棍搅拌。", "每半月施用一次，可喷施于作物或混入灌溉水中。", "请在约15天内使用完毕。"],
    tipsTitle: "小贴士", tips: ["请使用本地（desi）牛的粪和尿。"], safety: S.cow
  },
  beejamrit: {
    tag: "种子处理", role: "保护种子和幼根的包衣剂", sizeLabel: "您要处理多少种子？",
    titleFn: sz => `处理${sz}种子所需材料`,
    items: [it(G.ingr, G.dung, G.tied), it(G.ingr, G.urine), it(G.ingr, G.lime, G.limeNight), it(G.ingr, G.bund), it(G.ingr, G.water)],
    use: { title: "使用方法", list: ["用手将Beejamrit均匀涂在种子上，在阴凉处充分晾干后播种。", "豆类等种皮较薄的种子只需快速浸泡后晾干。", "水稻秧苗移栽前，将根部浸泡30分钟。"] },
    steps: ["将牛粪用布包好，浸入水中最长12小时。", "将石灰溶于少量水中，静置一夜。", "次日早晨将粪包在水中挤压三次。", "加入田埂土并搅拌，再加入牛尿和石灰水后再次搅拌。"],
    tipsTitle: "小贴士", tips: ["请现配现用，当天使用完毕。"], safety: S.cow
  },
  ghana: {
    tag: "干态活化剂", role: "Jeevamrit的干燥固态形式，可翻入土壤中使用", sizeLabel: "您有多少干牛粪？",
    titleFn: sz => `${sz}干牛粪所需材料`,
    items: [it(G.ingr, G.ddung), it(G.ingr, G.besan), it(G.ingr, G.jag, G.dissolved), it(G.ingr, G.urine, G.moisten, { text: G.little }), it(G.ingr, G.rootSoil, null, { text: G.handful })],
    coverage: { text: "常规用量约为每英亩100千克，在播种时施用；部分邦级指南建议在最后一次耕地前施用200千克。" },
    use: { title: "使用方法", list: ["播种时撒于田间，或作为追肥施于植株周围。", "使用前请保持干燥。"] },
    steps: ["将干牛粪薄薄地铺在地面上。", "撒上少许牛尿和鹰嘴豆粉。", "将赤砂糖溶于水中并洒上，再加入一把泥土。", "充分混合后搓成小球（laddu），在阴凉处晾干。"],
    tipsTitle: "小贴士", tips: ["晒干的Ghanajeevamrit可保存数月，便于储存和携带。"], safety: S.cow
  },
  panchagavya: {
    tag: "生长滋补液", role: "由五种牛产品发酵而成的叶面喷施液", sizeLabel: "您想制作多少Panchagavya？（约）",
    items: [it(G.st1, G.fdung), it(G.st1, G.ghee), it(G.st2, G.urine), it(G.st2, G.water), it(G.st3, G.milk), it(G.st3, G.curd), it(G.st3, G.coco), it(G.st3, G.jag), it(G.st3, G.banana, G.bananaNote, { unit: G.bananaUnit })],
    dil: { note: "常规喷施比例为每100升水加3升（3%），叶菜类作物建议更稀，约2%。" },
    steps: ["将牛粪与酥油充分混合，早晚搅拌，持续3天。", "加入牛尿和水，早晚搅拌，持续15天。", "加入牛奶、酸奶、椰子水、赤砂糖和捣碎的香蕉。", "每天搅拌两次，持续约30天，然后用布过滤。"],
    tipsTitle: "小贴士", tips: ["用纱网盖住以防苍蝇产卵。", "喷施前请充分过滤，以免堵塞喷雾器。"], safety: S.cow
  },
  neemastra: {
    tag: "吸食性害虫", role: "以印楝为主的喷施液，对付蚜虫、白粉虱和小型毛虫", sizeLabel: "您想制作多少Neemastra？",
    items: [it(G.drum, G.water), it(G.drum, G.urine), it(G.drum, G.dung), it(G.drum, G.neem, G.pulp)],
    dil: { note: "常用浓度为3.5%至5%，即每100升水加5升，相当于20×。" },
    steps: ["将牛尿、牛粪和印楝叶浆加入水中。", "用长棍顺时针搅拌，用麻袋盖好，放置于阴凉处，避免阳光直射和雨淋。", "每天早晚搅拌，48小时后即可使用。", "使用前用细纱布过滤。"],
    tipsTitle: "小贴士", tips: ["请在傍晚喷施，避开益虫活跃时段。", "现配最佳。古吉拉特邦文件称可保存长达6个月。"], safety: S.cow
  },
  brahmastra: {
    tag: "毛虫类害虫", role: "由煮制叶料和牛尿制成的喷施液，对付毛虫和钻蛀性害虫", sizeLabel: "您想制作多少Brahmastra？",
    items: [it(G.urG, G.urine), it(G.pastes, G.neemL), it(G.pastes, G.karanj), it(G.pastes, G.custard), it(G.pastes, G.castor), it(G.pastes, G.datura, G.toxGlove)],
    dil: { note: "叶面喷施：每100升水加2至3升。土壤灌根防线虫：每100升水加8升（12×）。" },
    steps: ["将各类叶片分别研磨成细浆。", "将牛尿倒入容器，加入所有叶浆混合。", "小火煮至起泡一两次，顺时针搅拌并保持加盖。", "第二次起泡后关火，静置冷却48小时。", "用细纱布过滤，存放于阴凉处的容器中。"],
    tipsTitle: "小贴士", tips: ["有些做法会加入木瓜、石榴、番石榴等其他叶片。", "存放时避光。相关指南称可保存长达6个月。"], safety: S.toxic
  },
  agniastra: {
    tag: "钻蛀害虫", role: "由印楝、辣椒和大蒜制成的辛辣喷施液，对付钻蛀性害虫和虫害", sizeLabel: "您想制作多少Agniastra？",
    items: [it(G.ingr, G.urine), it(G.ingr, G.neem), it(G.ingr, G.tobacco, G.toxMask), it(G.ingr, G.chili), it(G.ingr, G.garlic), it(G.ingr, G.turmeric)],
    dil: { note: "每200升水加6至8升（25×至33×）。虫害严重时可使用更浓的比例。" },
    steps: ["将所有材料混入牛尿中，顺时针搅拌。", "加盖煮沸至起泡。", "离火后置于阴凉处静置48小时，每天搅拌两次。", "用细纱布过滤，可保存约3个月。"],
    tipsTitle: "小贴士", tips: ["用于对付茎秆和果实中的钻蛀性害虫。"], safety: S.toxic
  },
  dashaparni: {
    tag: "广谱防治", role: "十种叶片发酵而成的提取液，可防治多种病虫害", sizeLabel: "您想制作多少Dashaparni？",
    items: [it(G.d1, G.water), it(G.d1, G.urine), it(G.d1, G.dung), it(G.d1s, G.turmeric), it(G.d1s, G.ginger), it(G.d1s, G.hing), it(G.d2, G.tobacco, G.toxMask), it(G.d2, G.chili), it(G.d2, G.garlic), it(G.d3, G.leaf10, G.leaf10Note)],
    dil: { note: "每200升水加6至8升（3%至4%）。" },
    steps: ["将牛尿和牛粪加入水中，加盖静置2小时。", "加入姜黄、生姜和阿魏胶，顺时针搅拌，加盖静置一夜。", "次日清晨加入烟草、辣椒和大蒜，搅拌后加盖，在阴凉处静置24小时。", "加入十种叶浆，搅拌后用麻袋盖好。", "发酵30至40天，每天搅拌两次，然后用细纱布过滤。"],
    tipsTitle: "小贴士", tips: ["若备齐叶料，可替代Neemastra、Brahmastra和Agniastra。", "可使用任意十种驱虫叶片，避免使用家畜会食用的种类。"], safety: S.toxic
  }
};
})();
