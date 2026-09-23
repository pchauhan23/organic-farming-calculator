/* 日本語 */
(() => {
const G = {
  dry: "乾燥材料", water: "水", sulfur: "硫黄", clay: "赤土粉", phyl: "フィライト粉",
  salt: "海塩", naoh: "苛性ソーダ（NaOH）", naohS: "苛性ソーダ", w0: "最初の水", w1: "後から加える水",
  exact: "正確に計量してください", afterDissolve: "硫黄が溶けてから加えます",
  s1: "手順1：溶かす", s2: "手順2：混ぜる", later: "後で",
  koh: "水酸化カリウム（KOH、90%）", kohS: "水酸化カリウム", kohNote: "苛性カリとも呼ばれます",
  soft: "軟水", softNote: "正確に計量してください。雨水または蒸留水を使います。", canola: "菜種油（キャノーラ油）",
  jwaWater: "10Lバージョンの分量です。加えるタイミングは公式手順を確認してください。",
  ingr: "材料", mold: "腐葉土（森の土）", moldNote: "近くの森の地面から採取",
  potato: "ゆでたじゃがいも", chlorine: "塩素を抜いた水", tapNote: "水道水を24時間置いておきます",
  fill: "容器を満たす", plant: "刻んだ植物材料", plantNote: "ふんわりと詰めます。容器の約3分の1。", rest: "残りを水で満たす",
  drum: "ドラム缶に", fdung: "デシ牛の新鮮な糞", urine: "デシ牛の尿",
  urineRange: "資料により5〜10Lと幅があります。ここでは中間値を使用しています。", jag: "ジャガリー（未精製の粗糖）", besan: "ひよこ豆粉（ベサン）",
  lime: "石灰", limeOpt: "省略するレシピもあります", farmSoil: "農場の土",
  farmSoilNote: "古い木の下や畑の畔から。化学物質を含まないもの。",
  dung: "デシ牛の糞", tied: "布に包んで縛る", limeNight: "少量の水に一晩溶かしたもの",
  bund: "畑の畔の土", ddung: "よく乾かしたデシ牛の糞", dissolved: "水に溶かす",
  little: "少量", moisten: "糞を湿らせる程度で十分です", rootSoil: "植物の根元の土", handful: "ひとつかみ",
  st1: "第1段階：3日間", st2: "第2段階：15日間", st3: "第3段階：約30日間", ghee: "デシ牛のギー",
  milk: "デシ牛の牛乳", curd: "デシ牛のヨーグルト", coco: "若いココナッツの水", banana: "熟したバナナ",
  bananaUnit: "本", bananaNote: "よく熟して潰したもの", neem: "ニームの葉のペースト", pulp: "またはニームの種の果肉",
  urG: "牛の尿", pastes: "葉のペースト", neemL: "ニームの葉", karanj: "カランジの葉", custard: "カスタードアップルの葉",
  castor: "トウゴマの葉", datura: "チョウセンアサガオの葉", toxGlove: "有毒です。手袋を着用してください。", tobacco: "タバコ粉末",
  toxMask: "有毒です。手袋とマスクを着用してください。", chili: "青唐辛子ペースト", garlic: "にんにくペースト", turmeric: "ターメリック粉末",
  d1: "1日目：ベース", d1s: "1日目：香辛料", d2: "2日目", d3: "3日目：葉", ginger: "生姜ペースト", hing: "アサフェティダ（ヒング）",
  leaf10: "葉のペースト（10種類）", leaf10Note: "ニーム、カランジ、カスタードアップル、トウゴマ、パパイヤなど各2kgずつ"
};
const S = {
  caustic: n => [`${n}は化学熱傷の原因になります。水と混ぜると非常に高温になります。`, "保護メガネ、ゴム手袋、長靴、長袖の上着、マスクを着用し、屋外で作業してください。", "耐熱性のプラスチック容器を使用してください。アルミ容器は絶対に使わないでください。", "子供や動物を近づけないようにし、すべての容器にラベルを貼ってください。"],
  ferment: ["取り扱った後は手袋を着用し、手を洗ってください。", "発酵中の混合物は強いにおいがすることがあります。住居から離れた場所に置いてください。", "すべての容器にラベルを貼り、子供の手の届かない場所に保管してください。"],
  cow: ["糞や尿に触れた後は手袋を着用し、しっかり手を洗ってください。", "野菜や果物は食べる前によく洗ってください。収穫直前には散布しないでください。", "ハエが卵を産まないようドラム缶を網で覆ってください。すべての容器にラベルを貼り、子供から遠ざけてください。"],
  toxic: ["チョウセンアサガオ、タバコ、唐辛子などの材料は有毒または刺激性があります。手袋、マスク、保護メガネを着用してください。", "屋外で煮て混ぜてください。使用した鍋はその後台所で使わないでください。", "子供や動物を近づけないようにし、すべての容器に明確にラベルを貼ってください。", "収穫物はよく洗ってください。収穫直前には散布しないでください。"]
};
const it = (g, n, note, x) => Object.assign({ g, n }, note ? { note } : {}, x || {});

UI.ja = {
  title: "有機農業計算機", tagline: "どんな量でも正確な配合を", offline: "オフラインでも使えます",
  groups: { jadam: "JADAMレシピ", india: "インドの伝統農法" },
  indiaNote: "NITI Aayog（インド国家変革委員会）と各州の農業大学がまとめた自然農法です。在来種（デシ）の牛の糞と尿を使います。",
  hot: "水温が27°C（80°F）より高い", hotNote: "温水用に調整済み",
  copy: "コピー", share: "共有", copied: "レシピをコピーしました", copyFail: "コピーできませんでした", enterFirst: "先に分量を入力してください",
  copyAria: "レシピをコピー", shareAria: "レシピを共有",
  yourRecipe: "あなたのレシピ", enterAmount: "作りたい量を入力してください。",
  need: (sz, name) => `${sz}の${name}に必要な材料`,
  covers: n => `約${n}エーカー分に使えます。`,
  sprayTitle: "散布用の希釈", tankHelp: "散布機やタンクの容量。", tankAria: u => `散布機の容量（${u}）`,
  dilution: "希釈倍率", dilAria: "希釈比率", stronger: "濃く", weaker: "薄く", enterTank: "散布機の容量を入力してください。",
  conc: name => `${name}原液`, fillTo: tank => `そのあと水を加えて${tank}にします`,
  batchLine: (a, b, n) => `${a}の原液を${n}×で希釈すると、散布できる液が約${b}できます。`,
  method: "作り方", safety: "安全に関する注意", source: "出典を確認",
  feedbackQ: "数値の誤りを見つけましたか、それとも何かご意見がありますか？", feedbackBtn: "メールでフィードバックを送る",
  disclaimer: "分量は公開されているレシピ（JADAM、NITI Aayog、TNAU、各州のガイドライン）をもとに換算しています。出典によってレシピが異なるため、正確に計量し、作物全体に使う前にいくつかの株で試し、混ぜる前に公式の手順を確認してください。本ツールは非公式のものであり、JADAMや政府機関とは提携していません。これは計算機であり、専門的な安全に関する助言ではありません。",
  recipeFoot: "分量は公開されているレシピをもとに換算されています。混ぜる前に公式の手順を確認してください。手袋と保護メガネを着用してください。",
  units: { kg: "kg", g: "g", lb: "ポンド", oz: "オンス", L: "L", mL: "mL", gal: "ガロン", floz: "液量オンス" }
};

HI_TEXT.ja = {
  js: {
    tag: "硫黄", role: "殺菌剤兼殺虫剤", sizeLabel: "JSをどれくらい作りますか？",
    items: [it(G.dry, G.sulfur), it(G.dry, G.clay), it(G.dry, G.phyl), it(G.dry, G.salt), it(G.dry, G.naoh), it(G.water, G.w0, G.exact), it(G.water, G.w1, G.afterDissolve)],
    dil: { note: "JADAMではおよそ100×〜1000×が推奨されています。" },
    tipsTitle: "重要なポイント",
    tips: ["下記リンクにあるJADAM公式の手順どおりの順番で材料を加えてください。", "ブドウ、柿、クルミ、カボチャ、温室栽培の作物は影響を受けやすいので、まず数枚の葉で試してください。", "耐熱性のプラスチック（PE）容器を使ってください。アルミは絶対に使わないでください。", "混合物が約80°Cを超えると硫黄が溶けます。底に塊が残らなくなるまでかき混ぜてください。", "後から加える水を入れたら1〜2日置いてから、沈殿物をろ過してください。", "−5°C（23°F）以上で保管してください。"],
    safety: S.caustic(G.naohS)
  },
  jwa: {
    tag: "展着剤", role: "散布液を葉に付きやすくする天然石けん", sizeLabel: "JWAをどれくらい作りますか？",
    items: [it(G.s1, G.koh, G.kohNote), it(G.s1, G.soft, G.softNote), it(G.s2, G.canola), it(G.later, G.water, G.jwaWater)],
    dil: { note: "公開されている範囲はおよそ30×〜100×です。" },
    steps: ["密閉できる耐熱容器の中で、軟水にKOHを溶かします。非常に高温になります。", "菜種油を加え、電動ドリルで約10分間、薄いマヨネーズ状になるまで混ぜます。手で混ぜてもうまくいきません。", "ふたを閉めて3日間置きます。バターのように固まるはずです。"],
    tipsTitle: "知っておくとよいこと",
    tips: ["軟水のみを使ってください。硬い水道水は仕上がりを損ないます。", "強い日差しの下では散布しないでください。スイートピー、ナスタチウム、繊細なシダには使わないでください。"],
    safety: S.caustic(G.kohS)
  },
  jms: {
    tag: "微生物", role: "腐葉土から培養する生きた土壌微生物", sizeLabel: "どれくらいの水を培養しますか？",
    items: [it(G.ingr, G.mold, G.moldNote), it(G.ingr, G.potato), it(G.ingr, G.salt), it(G.ingr, G.chlorine, G.tapNote)],
    dil: { note: "使用前に通常約10×に希釈します。" },
    steps: ["じゃがいもをゆでて潰し、腐葉土と一緒に網の袋に入れます。", "塩を水に溶かします。袋を吊るし、水が濁って茶色くなるまでもみます。", "軽くふたをして18〜25°Cに保ちます。", "1〜3日で表面に泡の層ができます。1〜2日以内に使ってください。"],
    tipsTitle: "知っておくとよいこと", tips: ["JMSは保存できません。毎回新しく作ってください。"], safety: S.ferment
  },
  jlf: {
    tag: "液肥", role: "発酵させた植物性の液体肥料", sizeLabel: "容器の大きさはどれくらいですか？",
    items: [it(G.fill, G.plant, G.plantNote), it(G.fill, G.chlorine, G.rest)],
    dil: { note: "JADAMではおよそ100×を使います。苗にはもっと薄く200×〜500×。" },
    steps: ["植物材料を細かく刻みます。", "容器の約3分の1にふんわりと詰めます。", "残りを塩素を抜いた水で満たします。軽くふたをします。", "数週間から数か月置きます。腐敗臭ではなく土のような匂いがすれば完成です。", "使用前に希釈してください。"],
    tipsTitle: "知っておくとよいこと", tips: ["最良の材料は同じ作物の残さで、次に野草や雑草です。"], safety: S.ferment
  },
  jeevamrit: {
    tag: "土壌活性剤", role: "土壌微生物を養う糞尿の発酵液", sizeLabel: "Jeevamritをどれくらい作りますか？",
    items: [it(G.drum, G.fdung), it(G.drum, G.urine, G.urineRange), it(G.drum, G.jag), it(G.drum, G.besan), it(G.drum, G.lime, G.limeOpt), it(G.drum, G.farmSoil, G.farmSoilNote), it(G.drum, G.water)],
    coverage: { text: "通常の使用量は1エーカーあたり約200Lで、15日ごとに灌漑水とともに与えます。" },
    dil: { note: "葉面散布では、グジャラート州の方法で水120Lに約7.5Lを使います。土壌にはそのまま希釈せずに使います。" },
    steps: ["すべての材料をドラム缶の中で水と混ぜます。", "日陰で48時間置きます。毎朝と毎晩、木の棒でかき混ぜます。", "2週間ごとに、作物に散布するか灌漑水に混ぜて与えます。", "約15日以内に使い切ってください。"],
    tipsTitle: "知っておくとよいこと", tips: ["在来種（デシ）の牛の糞と尿を使ってください。"], safety: S.cow
  },
  beejamrit: {
    tag: "種子処理", role: "種子と若い根を守るコーティング剤", sizeLabel: "種子をどれくらい処理しますか？",
    titleFn: sz => `${sz}の種子を処理するのに必要な材料`,
    items: [it(G.ingr, G.dung, G.tied), it(G.ingr, G.urine), it(G.ingr, G.lime, G.limeNight), it(G.ingr, G.bund), it(G.ingr, G.water)],
    use: { title: "使い方", list: ["Beejamritを手で種子にまぶし、日陰でよく乾かしてから播種します。", "皮の薄い豆類はさっと浸してから乾かします。", "稲の苗は移植前に根を30分間浸します。"] },
    steps: ["糞を布に包み、水の中に最長12時間吊るします。", "石灰を少量の水に混ぜて一晩置きます。", "翌朝、糞の包みを水の中で3回しぼります。", "土を加えてかき混ぜます。次に尿と石灰水を加えて再びかき混ぜます。"],
    tipsTitle: "知っておくとよいこと", tips: ["その日のうちに新しく作って使ってください。"], safety: S.cow
  },
  ghana: {
    tag: "乾燥活性剤", role: "土壌にすき込むJeevamritの乾燥固形タイプ", sizeLabel: "乾燥した糞がどれくらいありますか？",
    titleFn: sz => `${sz}の乾燥した糞に必要な材料`,
    items: [it(G.ingr, G.ddung), it(G.ingr, G.besan), it(G.ingr, G.jag, G.dissolved), it(G.ingr, G.urine, G.moisten, { text: G.little }), it(G.ingr, G.rootSoil, null, { text: G.handful })],
    coverage: { text: "通常の使用量は播種時に1エーカーあたり約100kgです。最後の耕起前に200kgを使う州のガイドラインもあります。" },
    use: { title: "使い方", list: ["播種時に畑にまく、または追肥として株の周りに施します。", "使うまでは乾燥した状態で保管してください。"] },
    steps: ["乾燥した糞を地面に薄く広げます。", "牛の尿とひよこ豆粉を少量振りかけます。", "ジャガリーを水に溶かしてふりかけます。土をひとつかみ加えます。", "よく混ぜて小さな団子（ラドゥ）状に丸めます。日陰で乾かします。"],
    tipsTitle: "知っておくとよいこと", tips: ["乾燥したGhanajeevamritは数か月保存でき、保管や持ち運びが簡単です。"], safety: S.cow
  },
  panchagavya: {
    tag: "成長トニック", role: "牛の5つの産物を発酵させ、葉に散布する液", sizeLabel: "Panchagavyaをどれくらい作りますか？（目安）",
    items: [it(G.st1, G.fdung), it(G.st1, G.ghee), it(G.st2, G.urine), it(G.st2, G.water), it(G.st3, G.milk), it(G.st3, G.curd), it(G.st3, G.coco), it(G.st3, G.jag), it(G.st3, G.banana, G.bananaNote, { unit: G.bananaUnit })],
    dil: { note: "通常は水100Lに対して3L（3%）散布します。葉物野菜には約2%とより薄めにしてください。" },
    steps: ["糞とギーをよく混ぜます。3日間、朝晩かき混ぜます。", "尿と水を加えます。15日間、朝晩かき混ぜます。", "牛乳、ヨーグルト、ココナッツの水、ジャガリー、潰したバナナを加えます。", "約30日間、1日2回かき混ぜてから布でこします。"],
    tipsTitle: "知っておくとよいこと", tips: ["ハエが卵を産まないよう網で覆っておいてください。", "散布機が詰まらないよう、散布前によくこしてください。"], safety: S.cow
  },
  neemastra: {
    tag: "吸汁性害虫", role: "アブラムシ、コナジラミ、小さな幼虫に効くニームベースの散布液", sizeLabel: "Neemastraをどれくらい作りますか？",
    items: [it(G.drum, G.water), it(G.drum, G.urine), it(G.drum, G.dung), it(G.drum, G.neem, G.pulp)],
    dil: { note: "一般的には3.5%〜5%です。水100Lに5Lで20×になります。" },
    steps: ["尿、糞、ニームペーストを水に加えます。", "長い棒で時計回りにかき混ぜます。麻袋で覆い、日光と雨を避けて日陰に置きます。", "毎朝と毎晩かき混ぜます。48時間で完成です。", "使用前にモスリン布でこします。"],
    tipsTitle: "知っておくとよいこと", tips: ["益虫が活動していない夕方遅くに散布してください。", "新鮮なものが最適です。グジャラート州の資料では最長6か月保存できるとされています。"], safety: S.cow
  },
  brahmastra: {
    tag: "幼虫類", role: "煮出した葉と尿で作る、幼虫や穿孔虫に効く散布液", sizeLabel: "Brahmastraをどれくらい作りますか？",
    items: [it(G.urG, G.urine), it(G.pastes, G.neemL), it(G.pastes, G.karanj), it(G.pastes, G.custard), it(G.pastes, G.castor), it(G.pastes, G.datura, G.toxGlove)],
    dil: { note: "葉面散布：水100Lに2〜3L。線虫対策の土壌かん注：水100Lに8L（12×）。" },
    steps: ["それぞれの葉を細かいペースト状にすりつぶします。", "尿を容器に入れ、すべてのペーストを混ぜます。", "弱火で1〜2回泡が立つまで煮ます。時計回りにかき混ぜ、ふたをしておきます。", "2回目の泡立ちの後、火を止めて48時間冷まします。", "モスリン布でこします。日陰の容器で保管してください。"],
    tipsTitle: "知っておくとよいこと", tips: ["パパイヤ、ザクロ、グアバなど他の葉を使うレシピもあります。", "日光を避けて保管してください。資料では最長6か月保存できるとされています。"], safety: S.toxic
  },
  agniastra: {
    tag: "穿孔虫・幼虫", role: "ニーム、唐辛子、にんにくで作る刺激の強い散布液で穿孔虫や幼虫に対応", sizeLabel: "Agniastraをどれくらい作りますか？",
    items: [it(G.ingr, G.urine), it(G.ingr, G.neem), it(G.ingr, G.tobacco, G.toxMask), it(G.ingr, G.chili), it(G.ingr, G.garlic), it(G.ingr, G.turmeric)],
    dil: { note: "水200Lに6〜8L（25×〜33×）。被害がひどい場合はより濃い配合にしてください。" },
    steps: ["すべての材料を尿に混ぜ、時計回りにかき混ぜます。", "ふたをして泡が立つまで煮ます。", "火から下ろし、日陰で48時間置きます。1日2回かき混ぜます。", "モスリン布でこします。約3か月保存できます。"],
    tipsTitle: "知っておくとよいこと", tips: ["茎や果実の穿孔虫や幼虫に使ってください。"], safety: S.toxic
  },
  dashaparni: {
    tag: "多くの害虫", role: "多くの害虫や病気に効く、10種類の葉を発酵させた抽出液", sizeLabel: "Dashaparniをどれくらい作りますか？",
    items: [it(G.d1, G.water), it(G.d1, G.urine), it(G.d1, G.dung), it(G.d1s, G.turmeric), it(G.d1s, G.ginger), it(G.d1s, G.hing), it(G.d2, G.tobacco, G.toxMask), it(G.d2, G.chili), it(G.d2, G.garlic), it(G.d3, G.leaf10, G.leaf10Note)],
    dil: { note: "水200Lに6〜8L（3%〜4%）。" },
    steps: ["尿と糞を水に加えます。ふたをして2時間置きます。", "ターメリック、生姜、アサフェティダを加えます。時計回りにかき混ぜ、ふたをして一晩置きます。", "翌朝、タバコ、唐辛子、にんにくを加えます。かき混ぜてふたをし、日陰で24時間置きます。", "10種類の葉のペーストを加えます。かき混ぜて麻袋で覆います。", "30〜40日間、1日2回かき混ぜながら発酵させます。その後モスリン布でこします。"],
    tipsTitle: "知っておくとよいこと", tips: ["葉がそろえば、Neemastra、Brahmastra、Agniastraの代わりに使えます。", "虫よけになる葉であればどの10種類でも構いません。家畜が食べる葉は避けてください。"], safety: S.toxic
  }
};
})();
