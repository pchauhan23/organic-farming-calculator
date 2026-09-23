/* Français */
(() => {
const G = {
  dry: "Ingrédients secs", water: "Eau", sulfur: "Soufre", clay: "Argile rouge en poudre", phyl: "Phyllite en poudre",
  salt: "Sel marin", naoh: "Soude caustique (NaOH)", naohS: "La soude caustique", w0: "Eau de départ", w1: "Eau d’appoint",
  exact: "Mesurer avec précision", afterDissolve: "Ajoutée une fois le soufre dissous",
  s1: "Étape 1 : dissoudre", s2: "Étape 2 : mélanger", later: "Plus tard",
  koh: "Potasse caustique (KOH, 90 %)", kohS: "La potasse caustique", kohNote: "Aussi appelée hydroxyde de potassium",
  soft: "Eau douce", softNote: "Mesurer avec précision. Eau de pluie ou distillée.", canola: "Huile de colza (canola)",
  jwaWater: "D’après la version de 10 L. Voir dans les étapes officielles quand l’ajouter.",
  ingr: "Ingrédients", mold: "Terreau de feuilles (humus forestier)", moldNote: "Pris au sol d’une forêt proche",
  potato: "Pomme de terre cuite", chlorine: "Eau sans chlore", tapNote: "Laisser reposer l’eau du robinet 24 heures",
  fill: "Remplir le récipient", plant: "Matière végétale hachée", plantNote: "Tassée légèrement. Environ un tiers du récipient.", rest: "Compléter avec le reste",
  drum: "Dans le fût", fdung: "Bouse fraîche de vache desi", urine: "Urine de vache desi",
  urineRange: "Les sources indiquent 5 à 10 L. On prend ici la valeur médiane.", jag: "Jaggery (sucre de canne brut)", besan: "Farine de pois chiche (besan)",
  lime: "Chaux", limeOpt: "Certains guides l’omettent", farmSoil: "Terre de la ferme",
  farmSoilNote: "Sous un vieil arbre ou en bordure de champ. Sans produits chimiques.",
  dung: "Bouse de vache desi", tied: "Attachée dans un tissu", limeNight: "Dissoute dans un peu d’eau pendant la nuit",
  bund: "Terre du bord du champ", ddung: "Bouse de vache desi bien sèche", dissolved: "Dissous dans l’eau",
  little: "Un peu", moisten: "Juste de quoi humidifier la bouse", rootSoil: "Terre prise près des racines", handful: "Une poignée",
  st1: "Phase 1 : 3 jours", st2: "Phase 2 : 15 jours", st3: "Phase 3 : environ 30 jours", ghee: "Ghee de vache desi",
  milk: "Lait de vache desi", curd: "Yaourt de vache desi", coco: "Eau de noix de coco verte", banana: "Bananes mûres",
  bananaUnit: "bananes", bananaNote: "Bien mûres et écrasées", neem: "Pâte de feuilles de neem", pulp: "Ou pulpe de graines de neem",
  urG: "Urine de vache", pastes: "Pâtes de feuilles", neemL: "Feuilles de neem", karanj: "Feuilles de karanj", custard: "Feuilles d’anone",
  castor: "Feuilles de ricin", datura: "Feuilles de datura", toxGlove: "Toxique. Porter des gants.", tobacco: "Tabac en poudre",
  toxMask: "Toxique. Porter des gants et un masque.", chili: "Pâte de piment vert", garlic: "Pâte d’ail", turmeric: "Curcuma en poudre",
  d1: "Jour 1 : la base", d1s: "Jour 1 : épices", d2: "Jour 2", d3: "Jour 3 : feuilles", ginger: "Pâte de gingembre", hing: "Asa-fœtida (hing)",
  leaf10: "Pâte de feuilles, 10 sortes", leaf10Note: "2 kg de chaque sorte, par exemple neem, karanj, anone, ricin et papayer"
};
const S = {
  caustic: n => [`${n} provoque des brûlures chimiques. Mélangée à l’eau, elle devient très chaude.`, "Portez lunettes de protection, gants en caoutchouc, bottes, veste à manches longues et masque. Travaillez en plein air.", "Utilisez des récipients en plastique résistant à la chaleur. Jamais d’aluminium.", "Tenez enfants et animaux à l’écart. Étiquetez chaque récipient."],
  ferment: ["Portez des gants et lavez-vous les mains après manipulation.", "Les mélanges en fermentation peuvent sentir fort. Gardez-les loin de la maison.", "Étiquetez chaque récipient et gardez-le hors de portée des enfants."],
  cow: ["Portez des gants et lavez-vous bien les mains après avoir touché bouse et urine.", "Lavez bien légumes et fruits avant de les manger. Ne traitez pas juste avant la récolte.", "Couvrez les fûts d’un filet pour que les mouches ne pondent pas. Étiquetez chaque récipient et gardez-le loin des enfants."],
  toxic: ["Des ingrédients comme le datura, le tabac et le piment sont toxiques ou irritants. Portez gants, masque et protection des yeux.", "Faites bouillir et mélangez en plein air. Ne réutilisez pas ces casseroles en cuisine.", "Tenez enfants et animaux à l’écart. Étiquetez clairement chaque récipient.", "Lavez bien les produits. Ne traitez pas juste avant la récolte."]
};
const it = (g, n, note, x) => Object.assign({ g, n }, note ? { note } : {}, x || {});

UI.fr = {
  title: "Calculateur d’agriculture biologique", tagline: "Quantités exactes pour toute taille de lot", offline: "Fonctionne hors ligne",
  groups: { jadam: "Recettes JADAM", india: "Traditionnel indien" },
  indiaNote: "Méthodes d’agriculture naturelle documentées par le NITI Aayog et des universités agricoles indiennes. Elles utilisent la bouse et l’urine de vaches locales (desi).",
  hot: "L’eau est à plus de 27 °C (80 °F)", hotNote: "Ajusté pour de l’eau chaude",
  copy: "Copier", share: "Partager", copied: "Recette copiée", copyFail: "Copie impossible", enterFirst: "Saisissez d’abord une quantité",
  copyAria: "Copier la recette", shareAria: "Partager la recette",
  yourRecipe: "Votre recette", enterAmount: "Saisissez la quantité à préparer.",
  need: (sz, name) => `Il vous faut, pour ${sz} de ${name}`,
  covers: (n, a) => `Cela couvre environ ${n} acre${a === 1 ? "" : "s"}.`,
  sprayTitle: "Mélange pour pulvériser", tankHelp: "Taille de votre pulvérisateur ou cuve.", tankAria: u => `Taille du pulvérisateur en ${u}`,
  dilution: "Dilution", dilAria: "Rapport de dilution", stronger: "plus concentré", weaker: "plus dilué", enterTank: "Saisissez la taille de votre pulvérisateur.",
  conc: name => `${name} concentré`, fillTo: tank => `Puis complétez avec de l’eau jusqu’à ${tank}`,
  batchLine: (a, b, n) => `Votre lot de ${a} donne environ ${b} de bouillie prête à pulvériser à ${n}×.`,
  method: "Préparation", safety: "Sécurité", source: "Vérifier la source",
  feedbackQ: "Une valeur vous semble fausse ou vous avez une idée ?", feedbackBtn: "Envoyer un avis par e-mail",
  disclaimer: "Les quantités sont calculées à partir de recettes publiées (JADAM, NITI Aayog, TNAU et guides des États). Les recettes varient selon les sources : mesurez avec soin, testez sur quelques plants avant de traiter toute la culture et vérifiez les étapes officielles avant de mélanger. Cet outil est non officiel et n’est affilié ni à JADAM ni à un organisme public. C’est un calculateur, pas un conseil professionnel de sécurité.",
  recipeFoot: "Quantités calculées à partir de recettes publiées. Vérifiez les étapes officielles avant de mélanger. Portez gants et protection des yeux.",
  units: { kg: "kg", g: "g", lb: "lb", oz: "oz", L: "L", mL: "mL", gal: "gal", floz: "fl oz" }
};

HI_TEXT.fr = {
  js: {
    tag: "Soufre", role: "Fongicide et insecticide", sizeLabel: "Quelle quantité de JS voulez-vous préparer ?",
    items: [it(G.dry, G.sulfur), it(G.dry, G.clay), it(G.dry, G.phyl), it(G.dry, G.salt), it(G.dry, G.naoh), it(G.water, G.w0, G.exact), it(G.water, G.w1, G.afterDissolve)],
    dil: { note: "JADAM suggère environ 100× à 1000×." },
    tipsTitle: "Points clés",
    tips: ["Ajoutez les ingrédients dans l’ordre exact des étapes officielles de JADAM (lien ci-dessous).", "La vigne, le kaki, le noyer, les courges et les cultures sous serre sont sensibles. Testez d’abord sur quelques feuilles.", "Utilisez un récipient en plastique (PE) résistant à la chaleur. Jamais d’aluminium.", "Le soufre fond quand le mélange dépasse environ 80 °C. Remuez jusqu’à ce qu’il ne reste plus de grumeaux au fond.", "Après l’eau d’appoint, laissez décanter un ou deux jours, puis filtrez le dépôt.", "Conservez au-dessus de −5 °C (23 °F)."],
    safety: S.caustic(G.naohS)
  },
  jwa: {
    tag: "Mouillant", role: "Savon naturel qui aide les bouillies à adhérer", sizeLabel: "Quelle quantité de JWA voulez-vous préparer ?",
    items: [it(G.s1, G.koh, G.kohNote), it(G.s1, G.soft, G.softNote), it(G.s2, G.canola), it(G.later, G.water, G.jwaWater)],
    dil: { note: "La plage publiée va d’environ 30× à 100×." },
    steps: ["Dissolvez le KOH dans l’eau douce, dans un récipient fermé résistant à la chaleur. Il devient très chaud.", "Ajoutez l’huile de colza. Mélangez à la perceuse électrique environ 10 minutes, jusqu’à obtenir l’aspect d’une mayonnaise fluide. À la main, cela ne marche pas.", "Fermez le couvercle et laissez reposer 3 jours. Le mélange doit prendre comme du beurre."],
    tipsTitle: "Bon à savoir",
    tips: ["N’utilisez que de l’eau douce. L’eau dure du robinet le gâche.", "Évitez de pulvériser en plein soleil. À éviter sur pois de senteur, capucines et fougères délicates."],
    safety: S.caustic(G.kohS)
  },
  jms: {
    tag: "Microbes", role: "Micro-organismes vivants du sol issus de terreau de feuilles", sizeLabel: "Quelle quantité d’eau voulez-vous mettre en culture ?",
    items: [it(G.ingr, G.mold, G.moldNote), it(G.ingr, G.potato), it(G.ingr, G.salt), it(G.ingr, G.chlorine, G.tapNote)],
    dil: { note: "On le dilue en général environ 10× avant emploi." },
    steps: ["Faites cuire la pomme de terre et écrasez-la. Mettez-la avec le terreau dans un sac en filet.", "Dissolvez le sel dans l’eau. Suspendez le sac et malaxez jusqu’à ce que l’eau devienne trouble et brune.", "Couvrez sans serrer et gardez entre 18 et 25 °C.", "En 1 à 3 jours, une couche de mousse se forme. Utilisez-le sous un jour ou deux."],
    tipsTitle: "Bon à savoir", tips: ["Le JMS ne se conserve pas. Préparez-le frais à chaque fois."], safety: S.ferment
  },
  jlf: {
    tag: "Engrais liquide", role: "Engrais végétal fermenté", sizeLabel: "Quelle est la taille de votre récipient ?",
    items: [it(G.fill, G.plant, G.plantNote), it(G.fill, G.chlorine, G.rest)],
    dil: { note: "JADAM utilise environ 100×. Plus dilué (200× à 500×) pour les semis." },
    steps: ["Hachez finement la matière végétale.", "Remplissez environ un tiers du récipient, sans tasser.", "Complétez avec de l’eau sans chlore. Couvrez sans serrer.", "Laissez de quelques semaines à quelques mois. C’est prêt quand l’odeur est de terre, pas de pourri.", "Diluez avant l’emploi."],
    tipsTitle: "Bon à savoir", tips: ["Meilleure matière : les résidus de la même culture, puis herbes sauvages et adventices."], safety: S.ferment
  },
  jeevamrit: {
    tag: "Stimulant du sol", role: "Ferment de bouse et d’urine qui nourrit les microbes du sol", sizeLabel: "Quelle quantité de Jeevamrit voulez-vous préparer ?",
    items: [it(G.drum, G.fdung), it(G.drum, G.urine, G.urineRange), it(G.drum, G.jag), it(G.drum, G.besan), it(G.drum, G.lime, G.limeOpt), it(G.drum, G.farmSoil, G.farmSoilNote), it(G.drum, G.water)],
    coverage: { text: "La dose habituelle est d’environ 200 L par acre, tous les 15 jours avec l’irrigation." },
    dil: { note: "Pour pulvériser sur les feuilles, les pratiques du Gujarat utilisent environ 7,5 L dans 120 L d’eau. Dans le sol, on l’utilise non dilué." },
    steps: ["Mélangez tout avec l’eau dans un fût.", "Laissez 48 heures à l’ombre. Remuez avec un bâton en bois chaque matin et chaque soir.", "Appliquez tous les quinze jours, en pulvérisation sur la culture ou mélangé à l’eau d’irrigation.", "Utilisez-le sous environ 15 jours."],
    tipsTitle: "Bon à savoir", tips: ["Utilisez la bouse et l’urine de vaches locales (desi)."], safety: S.cow
  },
  beejamrit: {
    tag: "Traitement des semences", role: "Enrobage qui protège les semences et les jeunes racines", sizeLabel: "Quelle quantité de semences voulez-vous traiter ?",
    titleFn: sz => `Il vous faut pour traiter ${sz} de semences`,
    items: [it(G.ingr, G.dung, G.tied), it(G.ingr, G.urine), it(G.ingr, G.lime, G.limeNight), it(G.ingr, G.bund), it(G.ingr, G.water)],
    use: { title: "Comment l’utiliser", list: ["Enrobez les semences à la main avec le Beejamrit, faites-les bien sécher à l’ombre, puis semez.", "Pour les légumineuses à enveloppe fine, trempez-les rapidement et laissez sécher.", "Pour les plants de riz, trempez les racines 30 minutes avant le repiquage."] },
    steps: ["Attachez la bouse dans un tissu et suspendez-la dans l’eau jusqu’à 12 heures.", "Mélangez la chaux dans un peu d’eau et laissez reposer toute la nuit.", "Le lendemain matin, pressez le baluchon de bouse 3 fois dans l’eau.", "Ajoutez la terre et remuez. Ajoutez ensuite l’urine et l’eau de chaux, puis remuez de nouveau."],
    tipsTitle: "Bon à savoir", tips: ["Préparez-le frais et utilisez-le le jour même."], safety: S.cow
  },
  ghana: {
    tag: "Stimulant sec", role: "Forme sèche et solide du Jeevamrit, incorporée au sol", sizeLabel: "De combien de bouse sèche disposez-vous ?",
    titleFn: sz => `Il vous faut pour ${sz} de bouse sèche`,
    items: [it(G.ingr, G.ddung), it(G.ingr, G.besan), it(G.ingr, G.jag, G.dissolved), it(G.ingr, G.urine, G.moisten, { text: G.little }), it(G.ingr, G.rootSoil, null, { text: G.handful })],
    coverage: { text: "La dose habituelle est d’environ 100 kg par acre au semis. Certains guides d’États utilisent 200 kg avant le dernier labour." },
    use: { title: "Comment l’utiliser", list: ["Épandez-le sur le champ au semis, ou en couverture autour des plants.", "Gardez-le au sec jusqu’à l’emploi."] },
    steps: ["Étalez la bouse sèche en couche mince sur le sol.", "Saupoudrez un peu d’urine de vache et la farine de pois chiche.", "Dissolvez le jaggery dans l’eau et arrosez. Ajoutez une poignée de terre.", "Mélangez bien et formez de petites boules (laddus). Faites sécher à l’ombre."],
    tipsTitle: "Bon à savoir", tips: ["Le Ghanajeevamrit sec se garde quelques mois : il est facile à stocker et à transporter."], safety: S.cow
  },
  panchagavya: {
    tag: "Tonique de croissance", role: "Mélange fermenté de cinq produits de la vache, pulvérisé sur les feuilles", sizeLabel: "Quelle quantité de Panchagavya voulez-vous préparer ? (env.)",
    items: [it(G.st1, G.fdung), it(G.st1, G.ghee), it(G.st2, G.urine), it(G.st2, G.water), it(G.st3, G.milk), it(G.st3, G.curd), it(G.st3, G.coco), it(G.st3, G.jag), it(G.st3, G.banana, G.bananaNote, { unit: G.bananaUnit })],
    dil: { note: "La pulvérisation habituelle est de 3 L pour 100 L d’eau (3 %). Plus dilué, environ 2 %, sur les légumes-feuilles." },
    steps: ["Mélangez bien la bouse et le ghee. Remuez matin et soir pendant 3 jours.", "Ajoutez l’urine et l’eau. Remuez matin et soir pendant 15 jours.", "Ajoutez le lait, le yaourt, l’eau de coco, le jaggery et les bananes écrasées.", "Remuez deux fois par jour pendant environ 30 jours, puis filtrez dans un tissu."],
    tipsTitle: "Bon à savoir", tips: ["Gardez-le couvert d’un filet pour que les mouches ne pondent pas dedans.", "Filtrez bien avant de pulvériser pour ne pas boucher le pulvérisateur."], safety: S.cow
  },
  neemastra: {
    tag: "Ravageurs piqueurs", role: "Traitement au neem contre pucerons, aleurodes et petites chenilles", sizeLabel: "Quelle quantité de Neemastra voulez-vous préparer ?",
    items: [it(G.drum, G.water), it(G.drum, G.urine), it(G.drum, G.dung), it(G.drum, G.neem, G.pulp)],
    dil: { note: "On utilise couramment 3,5 % à 5 %. 5 L pour 100 L d’eau, c’est 20×." },
    steps: ["Ajoutez l’urine, la bouse et la pâte de neem à l’eau.", "Remuez dans le sens des aiguilles d’une montre avec un long bâton. Couvrez d’un sac de jute et gardez à l’ombre, à l’abri du soleil et de la pluie.", "Remuez chaque matin et chaque soir. C’est prêt en 48 heures.", "Filtrez dans un tissu fin avant l’emploi."],
    tipsTitle: "Bon à savoir", tips: ["Pulvérisez en fin d’après-midi, quand les insectes utiles ne sont pas actifs.", "Le frais est le meilleur. Le document du Gujarat indique qu’il se garde jusqu’à 6 mois."], safety: S.cow
  },
  brahmastra: {
    tag: "Chenilles", role: "Traitement de feuilles bouillies et d’urine contre chenilles et foreurs", sizeLabel: "Quelle quantité de Brahmastra voulez-vous préparer ?",
    items: [it(G.urG, G.urine), it(G.pastes, G.neemL), it(G.pastes, G.karanj), it(G.pastes, G.custard), it(G.pastes, G.castor), it(G.pastes, G.datura, G.toxGlove)],
    dil: { note: "En pulvérisation : 2 à 3 L pour 100 L d’eau. En arrosage du sol contre les nématodes : 8 L pour 100 L (12×)." },
    steps: ["Broyez chaque sorte de feuilles en une pâte fine.", "Mettez l’urine dans un récipient et mélangez toutes les pâtes.", "Portez à ébullition à feu doux jusqu’à ce qu’un ou deux bouillonnements de mousse montent. Remuez dans le sens des aiguilles d’une montre et gardez couvert.", "Après la deuxième mousse, coupez le feu et laissez refroidir 48 heures.", "Filtrez dans un tissu fin. Conservez dans un récipient à l’ombre."],
    tipsTitle: "Bon à savoir", tips: ["Certains guides utilisent d’autres feuilles, comme papayer, grenadier et goyavier.", "Gardez-le à l’abri du soleil. Les guides indiquent une conservation jusqu’à 6 mois."], safety: S.toxic
  },
  agniastra: {
    tag: "Foreurs et vers", role: "Traitement piquant au neem, piment et ail contre foreurs et vers", sizeLabel: "Quelle quantité d’Agniastra voulez-vous préparer ?",
    items: [it(G.ingr, G.urine), it(G.ingr, G.neem), it(G.ingr, G.tobacco, G.toxMask), it(G.ingr, G.chili), it(G.ingr, G.garlic), it(G.ingr, G.turmeric)],
    dil: { note: "6 à 8 L dans 200 L d’eau (25× à 33×). Prenez le mélange le plus concentré en cas de forte attaque." },
    steps: ["Mélangez tout dans l’urine et remuez dans le sens des aiguilles d’une montre.", "Couvrez et faites bouillir jusqu’à formation de mousse.", "Retirez du feu et laissez 48 heures à l’ombre. Remuez deux fois par jour.", "Filtrez dans un tissu fin. Il se garde environ 3 mois."],
    tipsTitle: "Bon à savoir", tips: ["À utiliser contre les foreurs et les vers dans les tiges et les fruits."], safety: S.toxic
  },
  dashaparni: {
    tag: "Tous ravageurs", role: "Extrait fermenté de dix feuilles contre de nombreux ravageurs et maladies", sizeLabel: "Quelle quantité de Dashaparni voulez-vous préparer ?",
    items: [it(G.d1, G.water), it(G.d1, G.urine), it(G.d1, G.dung), it(G.d1s, G.turmeric), it(G.d1s, G.ginger), it(G.d1s, G.hing), it(G.d2, G.tobacco, G.toxMask), it(G.d2, G.chili), it(G.d2, G.garlic), it(G.d3, G.leaf10, G.leaf10Note)],
    dil: { note: "6 à 8 L dans 200 L d’eau (3 % à 4 %)." },
    steps: ["Ajoutez l’urine et la bouse à l’eau. Couvrez et laissez 2 heures.", "Ajoutez le curcuma, le gingembre et l’asa-fœtida. Remuez dans le sens des aiguilles d’une montre, couvrez et laissez toute la nuit.", "Le lendemain matin, ajoutez le tabac, le piment et l’ail. Remuez, couvrez et laissez 24 heures à l’ombre.", "Ajoutez les dix pâtes de feuilles. Remuez et couvrez d’un sac de jute.", "Laissez fermenter de 30 à 40 jours en remuant deux fois par jour. Puis filtrez dans un tissu fin."],
    tipsTitle: "Bon à savoir", tips: ["Il peut remplacer le Neemastra, le Brahmastra et l’Agniastra quand vous avez les feuilles.", "Dix sortes quelconques de feuilles répulsives conviennent. Évitez celles que mangent vos animaux."], safety: S.toxic
  }
};
})();
