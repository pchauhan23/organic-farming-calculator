/* Nederlands */
(() => {
const G = {
  dry: "Droge ingrediënten", water: "Water", sulfur: "Zwavel", clay: "Rode kleipoeder", phyl: "Fylliet-poeder",
  salt: "Zeezout", naoh: "Bijtende soda (NaOH)", naohS: "Bijtende soda", w0: "Startwater", w1: "Aanvulwater",
  exact: "Nauwkeurig afmeten", afterDissolve: "Toevoegen als de zwavel is opgelost",
  s1: "Stap 1: oplossen", s2: "Stap 2: mengen", later: "Later",
  koh: "Kaliumhydroxide (KOH, 90%)", kohS: "Kaliumhydroxide", kohNote: "Ook bijtende kali genoemd",
  soft: "Zacht water", softNote: "Nauwkeurig afmeten. Regenwater of gedestilleerd water.", canola: "Koolzaadolie (canola)",
  jwaWater: "Uit de versie van 10 L. Zie de officiële stappen voor het moment van toevoegen.",
  ingr: "Ingrediënten", mold: "Bladaarde (bosbodem)", moldNote: "Van de bosgrond in de buurt",
  potato: "Gekookte aardappel", chlorine: "Water zonder chloor", tapNote: "Laat kraanwater 24 uur staan",
  fill: "Vul de container", plant: "Fijngehakt plantenmateriaal", plantNote: "Los gevuld. Ongeveer een derde van de container.", rest: "Vul de rest aan",
  drum: "In het vat", fdung: "Verse mest van een desi-koe", urine: "Urine van een desi-koe",
  urineRange: "Bronnen noemen 5 tot 10 L. Hier is het midden gebruikt.", jag: "Jaggery (ruwe rietsuiker)", besan: "Kikkererwtenmeel (besan)",
  lime: "Kalk", limeOpt: "Sommige gidsen laten het weg", farmSoil: "Grond van het erf",
  farmSoilNote: "Van onder een oude boom of de rand van het veld. Zonder chemie.",
  dung: "Mest van een desi-koe", tied: "In een doek gebonden", limeNight: "Een nacht opgelost in wat water",
  bund: "Grond van de veldrand", ddung: "Goed gedroogde mest van een desi-koe", dissolved: "Opgelost in water",
  little: "Een beetje", moisten: "Alleen genoeg om de mest vochtig te maken", rootSoil: "Grond rond de wortels van planten", handful: "Een handvol",
  st1: "Fase 1: 3 dagen", st2: "Fase 2: 15 dagen", st3: "Fase 3: ongeveer 30 dagen", ghee: "Ghee van een desi-koe",
  milk: "Melk van een desi-koe", curd: "Yoghurt van een desi-koe", coco: "Water van jonge kokosnoot", banana: "Rijpe bananen",
  bananaUnit: "bananen", bananaNote: "Goed rijp en fijngeprakt", neem: "Neembladpasta", pulp: "Of neemzaadpulp",
  urG: "Koeienurine", pastes: "Bladpasta's", neemL: "Neembladeren", karanj: "Karanjbladeren", custard: "Suikerappelbladeren",
  castor: "Wonderboombladeren", datura: "Doornappelbladeren", toxGlove: "Giftig. Draag handschoenen.", tobacco: "Tabakspoeder",
  toxMask: "Giftig. Draag handschoenen en een masker.", chili: "Groene chilipasta", garlic: "Knoflookpasta", turmeric: "Kurkumapoeder",
  d1: "Dag 1: de basis", d1s: "Dag 1: specerijen", d2: "Dag 2", d3: "Dag 3: bladeren", ginger: "Gemberpasta", hing: "Asafoetida (hing)",
  leaf10: "Bladpasta, 10 soorten", leaf10Note: "2 kg van elke soort, zoals neem, karanj, suikerappel, wonderboom en papaja"
};
const S = {
  caustic: n => [`${n} veroorzaakt chemische brandwonden. Gemengd met water wordt het erg heet.`, "Draag een veiligheidsbril, rubberen handschoenen, laarzen, een jas met lange mouwen en een masker. Werk buiten.", "Gebruik hittebestendige plastic bakken. Nooit aluminium.", "Houd kinderen en dieren uit de buurt. Label elke bak."],
  ferment: ["Draag handschoenen en was je handen na het werken ermee.", "Gistende mengsels kunnen sterk ruiken. Houd ze uit de buurt van het huis.", "Label elke bak en bewaar hem buiten bereik van kinderen."],
  cow: ["Draag handschoenen en was je handen goed na het aanraken van mest en urine.", "Was groenten en fruit goed voordat je ze eet. Spuit niet vlak voor de oogst.", "Dek de vaten af met gaas zodat vliegen geen eitjes leggen. Label elke bak en houd hem uit de buurt van kinderen."],
  toxic: ["Ingrediënten zoals doornappel, tabak en chili zijn giftig of irriterend. Draag handschoenen, een masker en oogbescherming.", "Kook en meng buiten. Gebruik deze pannen daarna niet meer in de keuken.", "Houd kinderen en dieren uit de buurt. Label elke bak duidelijk.", "Was de oogst goed. Spuit niet vlak voor de oogst."]
};
const it = (g, n, note, x) => Object.assign({ g, n }, note ? { note } : {}, x || {});

UI.nl = {
  title: "Rekenmachine voor biologische landbouw", tagline: "Exacte hoeveelheden voor elke batchgrootte", offline: "Werkt offline",
  groups: { jadam: "JADAM-recepten", india: "Traditioneel Indiaas" },
  indiaNote: "Natuurlijke landbouwmethoden, beschreven door NITI Aayog en Indiase landbouwuniversiteiten. Ze gebruiken mest en urine van lokale (desi) koeien.",
  hot: "Het water is warmer dan 27 °C (80 °F)", hotNote: "Aangepast voor warm water",
  copy: "Kopiëren", share: "Delen", copied: "Recept gekopieerd", copyFail: "Kopiëren mislukt", enterFirst: "Vul eerst een hoeveelheid in",
  copyAria: "Recept kopiëren", shareAria: "Recept delen",
  yourRecipe: "Jouw recept", enterAmount: "Vul in hoeveel je wilt maken.",
  need: (sz, name) => `Je hebt nodig voor ${sz} ${name}`,
  covers: (n, a) => `Dit is genoeg voor ongeveer ${n} acre.`,
  sprayTitle: "Mengen om te spuiten", tankHelp: "Inhoud van je spuit of tank.", tankAria: u => `Inhoud van de spuit in ${u}`,
  dilution: "Verdunning", dilAria: "Verdunningsverhouding", stronger: "sterker", weaker: "zwakker", enterTank: "Vul de inhoud van je spuit in.",
  conc: name => `${name}-concentraat`, fillTo: tank => `Vul daarna met water aan tot ${tank}`,
  batchLine: (a, b, n) => `Je batch van ${a} levert bij ${n}× ongeveer ${b} spuitklaar mengsel op.`,
  method: "Bereiding", safety: "Veiligheid", source: "Controleer de bron",
  feedbackQ: "Een fout getal gevonden of een idee?", feedbackBtn: "Feedback mailen",
  disclaimer: "De hoeveelheden zijn berekend uit gepubliceerde recepten (JADAM, NITI Aayog, TNAU en gidsen van Indiase staten). Recepten verschillen per bron: meet zorgvuldig, test op een paar planten voordat je het hele gewas behandelt en controleer de officiële stappen voordat je mengt. Dit is een onofficieel hulpmiddel en niet verbonden aan JADAM of een overheidsinstantie. Het is een rekenhulp, geen professioneel veiligheidsadvies.",
  recipeFoot: "Hoeveelheden berekend uit gepubliceerde recepten. Controleer de officiële stappen voordat je mengt. Draag handschoenen en oogbescherming.",
  units: { kg: "kg", g: "g", lb: "lb", oz: "oz", L: "L", mL: "ml", gal: "gal", floz: "fl oz" }
};

HI_TEXT.nl = {
  js: {
    tag: "Zwavel", role: "Schimmelbestrijder en insecticide", sizeLabel: "Hoeveel JS wil je maken?",
    items: [it(G.dry, G.sulfur), it(G.dry, G.clay), it(G.dry, G.phyl), it(G.dry, G.salt), it(G.dry, G.naoh), it(G.water, G.w0, G.exact), it(G.water, G.w1, G.afterDissolve)],
    dil: { note: "JADAM raadt ongeveer 100× tot 1000× aan." },
    tipsTitle: "Belangrijk",
    tips: ["Voeg de ingrediënten toe in exact de volgorde van de officiële JADAM-stappen (link hieronder).", "Druiven, kaki, walnoot, pompoen en kasgewassen zijn gevoelig. Test eerst op een paar bladeren.", "Gebruik een hittebestendige plastic (PE) bak. Nooit aluminium.", "De zwavel smelt zodra het mengsel boven ongeveer 80 °C komt. Roer tot er geen klonten meer op de bodem zitten.", "Laat het na het aanvulwater een dag of twee bezinken en filter dan het bezinksel eruit.", "Bewaar boven −5 °C (23 °F)."],
    safety: S.caustic(G.naohS)
  },
  jwa: {
    tag: "Kleefmiddel", role: "Natuurlijke zeep waardoor spuitmiddelen beter hechten", sizeLabel: "Hoeveel JWA wil je maken?",
    items: [it(G.s1, G.koh, G.kohNote), it(G.s1, G.soft, G.softNote), it(G.s2, G.canola), it(G.later, G.water, G.jwaWater)],
    dil: { note: "Het gepubliceerde bereik is ongeveer 30× tot 100×." },
    steps: ["Los de KOH op in het zachte water in een gesloten, hittebestendige bak. Het wordt erg heet.", "Voeg de koolzaadolie toe. Meng ongeveer 10 minuten met een boormachine met menger, tot het eruitziet als dunne mayonaise. Met de hand lukt het niet.", "Doe het deksel erop en laat het 3 dagen rusten. Het moet stevig worden als boter."],
    tipsTitle: "Goed om te weten",
    tips: ["Gebruik alleen zacht water. Hard kraanwater verpest het.", "Spuit niet in felle zon. Niet gebruiken op siererwten, oost-indische kers en tere varens."],
    safety: S.caustic(G.kohS)
  },
  jms: {
    tag: "Microben", role: "Levende bodemmicro-organismen uit bladaarde", sizeLabel: "Hoeveel water wil je kweken?",
    items: [it(G.ingr, G.mold, G.moldNote), it(G.ingr, G.potato), it(G.ingr, G.salt), it(G.ingr, G.chlorine, G.tapNote)],
    dil: { note: "Meestal wordt het voor gebruik ongeveer 10× verdund." },
    steps: ["Kook de aardappel en prak hem fijn. Doe hem samen met de bladaarde in een netzak.", "Los het zout op in het water. Hang de zak erin en kneed tot het water troebel en bruin wordt.", "Dek losjes af en houd het op ongeveer 18 tot 25 °C.", "Na 1 tot 3 dagen vormt zich een laag schuim. Gebruik het binnen een dag of twee."],
    tipsTitle: "Goed om te weten", tips: ["JMS is niet houdbaar. Maak het telkens vers."], safety: S.ferment
  },
  jlf: {
    tag: "Vloeibare meststof", role: "Gefermenteerde plantenmeststof", sizeLabel: "Hoe groot is je container?",
    items: [it(G.fill, G.plant, G.plantNote), it(G.fill, G.chlorine, G.rest)],
    dil: { note: "JADAM gebruikt ongeveer 100×. Zwakker (200× tot 500×) voor zaailingen." },
    steps: ["Hak het plantenmateriaal fijn.", "Vul ongeveer een derde van de container los met het materiaal.", "Vul de rest aan met water zonder chloor. Dek losjes af.", "Laat het weken tot maanden staan. Het is klaar als het naar aarde ruikt in plaats van naar rotting.", "Verdun voor gebruik."],
    tipsTitle: "Goed om te weten", tips: ["Beste materiaal: resten van hetzelfde gewas, daarna wild gras en onkruid."], safety: S.ferment
  },
  jeevamrit: {
    tag: "Bodemversterker", role: "Gefermenteerd mengsel van mest en urine dat bodemmicroben voedt", sizeLabel: "Hoeveel Jeevamrit wil je maken?",
    items: [it(G.drum, G.fdung), it(G.drum, G.urine, G.urineRange), it(G.drum, G.jag), it(G.drum, G.besan), it(G.drum, G.lime, G.limeOpt), it(G.drum, G.farmSoil, G.farmSoilNote), it(G.drum, G.water)],
    coverage: { text: "De gebruikelijke gift is ongeveer 200 L per acre, elke 15 dagen met het beregeningswater." },
    dil: { note: "Om op het blad te spuiten gebruiken de richtlijnen uit Gujarat ongeveer 7,5 L in 120 L water. In de grond wordt het onverdund gebruikt." },
    steps: ["Meng alles met het water in een vat.", "Laat het 48 uur in de schaduw staan. Roer elke ochtend en avond met een houten stok.", "Breng het elke twee weken aan, gespoten op het gewas of gemengd in het beregeningswater.", "Gebruik het binnen ongeveer 15 dagen."],
    tipsTitle: "Goed om te weten", tips: ["Gebruik mest en urine van lokale (desi) koeien."], safety: S.cow
  },
  beejamrit: {
    tag: "Zaadbehandeling", role: "Coating die zaden en jonge wortels beschermt", sizeLabel: "Hoeveel zaad wil je behandelen?",
    titleFn: sz => `Je hebt nodig om ${sz} zaad te behandelen`,
    items: [it(G.ingr, G.dung, G.tied), it(G.ingr, G.urine), it(G.ingr, G.lime, G.limeNight), it(G.ingr, G.bund), it(G.ingr, G.water)],
    use: { title: "Zo gebruik je het", list: ["Bedek de zaden met de hand met Beejamrit, laat ze goed drogen in de schaduw en zaai ze.", "Dompel peulvruchten met een dunne zaadhuid kort onder en laat ze drogen.", "Dompel bij rijstzaailingen de wortels 30 minuten onder voor het verplanten."] },
    steps: ["Bind de mest in een doek en hang die tot 12 uur in het water.", "Meng de kalk met wat water en laat het een nacht staan.", "Knijp de volgende ochtend het mestbundeltje 3 keer uit in het water.", "Voeg de grond toe en roer. Voeg dan de urine en het kalkwater toe en roer opnieuw."],
    tipsTitle: "Goed om te weten", tips: ["Maak het vers en gebruik het dezelfde dag."], safety: S.cow
  },
  ghana: {
    tag: "Droge bodemversterker", role: "Droge, vaste vorm van Jeevamrit, door de grond gewerkt", sizeLabel: "Hoeveel droge mest heb je?",
    titleFn: sz => `Je hebt nodig voor ${sz} droge mest`,
    items: [it(G.ingr, G.ddung), it(G.ingr, G.besan), it(G.ingr, G.jag, G.dissolved), it(G.ingr, G.urine, G.moisten, { text: G.little }), it(G.ingr, G.rootSoil, null, { text: G.handful })],
    coverage: { text: "De gebruikelijke gift is ongeveer 100 kg per acre bij het zaaien. Sommige gidsen gebruiken 200 kg vóór de laatste bewerking." },
    use: { title: "Zo gebruik je het", list: ["Strooi het bij het zaaien over het veld, of als bijmesting rond de planten.", "Houd het droog tot gebruik."] },
    steps: ["Spreid de droge mest in een dunne laag op de grond.", "Sprenkel er wat koeienurine en het kikkererwtenmeel over.", "Los de jaggery op in water en besprenkel. Voeg een handvol grond toe.", "Meng goed en vorm er kleine balletjes (laddus) van. Laat ze in de schaduw drogen."],
    tipsTitle: "Goed om te weten", tips: ["Droog Ghanajeevamrit blijft een paar maanden goed, dus het is makkelijk te bewaren en te vervoeren."], safety: S.cow
  },
  panchagavya: {
    tag: "Groeitonic", role: "Gefermenteerd mengsel van vijf koeienproducten, op het blad gespoten", sizeLabel: "Hoeveel Panchagavya wil je maken? (ongeveer)",
    items: [it(G.st1, G.fdung), it(G.st1, G.ghee), it(G.st2, G.urine), it(G.st2, G.water), it(G.st3, G.milk), it(G.st3, G.curd), it(G.st3, G.coco), it(G.st3, G.jag), it(G.st3, G.banana, G.bananaNote, { unit: G.bananaUnit })],
    dil: { note: "Gebruikelijk is 3 L op 100 L water (3%). Zwakker, ongeveer 2%, bij bladgroenten." },
    steps: ["Meng de mest en de ghee goed. Roer 3 dagen lang ochtend en avond.", "Voeg de urine en het water toe. Roer 15 dagen lang ochtend en avond.", "Voeg de melk, yoghurt, kokoswater, jaggery en geprakte bananen toe.", "Roer ongeveer 30 dagen lang twee keer per dag en filter dan door een doek."],
    tipsTitle: "Goed om te weten", tips: ["Houd het afgedekt met gaas zodat vliegen er geen eitjes in leggen.", "Filter goed vóór het spuiten, zodat de spuit niet verstopt raakt."], safety: S.cow
  },
  neemastra: {
    tag: "Zuigende plagen", role: "Neemspray tegen bladluis, witte vlieg en kleine rupsen", sizeLabel: "Hoeveel Neemastra wil je maken?",
    items: [it(G.drum, G.water), it(G.drum, G.urine), it(G.drum, G.dung), it(G.drum, G.neem, G.pulp)],
    dil: { note: "Gebruikelijk is 3,5% tot 5%. 5 L op 100 L water is 20×." },
    steps: ["Voeg de urine, de mest en de neempasta toe aan het water.", "Roer met een lange stok rechtsom. Dek af met een jutezak en zet het in de schaduw, uit de zon en de regen.", "Roer elke ochtend en avond. Na 48 uur is het klaar.", "Filter door een fijne doek voor gebruik."],
    tipsTitle: "Goed om te weten", tips: ["Spuit aan het einde van de middag, als nuttige insecten niet actief zijn.", "Vers is het best. Het stuk uit Gujarat noemt een houdbaarheid tot 6 maanden."], safety: S.cow
  },
  brahmastra: {
    tag: "Rupsen", role: "Spray van gekookte bladeren en urine tegen rupsen en boorders", sizeLabel: "Hoeveel Brahmastra wil je maken?",
    items: [it(G.urG, G.urine), it(G.pastes, G.neemL), it(G.pastes, G.karanj), it(G.pastes, G.custard), it(G.pastes, G.castor), it(G.pastes, G.datura, G.toxGlove)],
    dil: { note: "Voor spuiten: 2 tot 3 L op 100 L water. Als grondbehandeling tegen aaltjes: 8 L op 100 L (12×)." },
    steps: ["Maal elke bladsoort tot een fijne pasta.", "Doe de urine in een pan en meng alle pasta's erdoor.", "Kook op laag vuur tot er een of twee keer schuim opkomt. Roer rechtsom en houd afgedekt.", "Zet na het tweede schuim het vuur uit en laat het 48 uur afkoelen.", "Filter door een fijne doek. Bewaar in een bak in de schaduw."],
    tipsTitle: "Goed om te weten", tips: ["Sommige gidsen gebruiken andere bladeren, zoals papaja, granaatappel en guave.", "Bewaar het uit de zon. Gidsen noemen een houdbaarheid tot 6 maanden."], safety: S.toxic
  },
  agniastra: {
    tag: "Boorders en wormen", role: "Scherpe spray van neem, chili en knoflook tegen boorders en wormen", sizeLabel: "Hoeveel Agniastra wil je maken?",
    items: [it(G.ingr, G.urine), it(G.ingr, G.neem), it(G.ingr, G.tobacco, G.toxMask), it(G.ingr, G.chili), it(G.ingr, G.garlic), it(G.ingr, G.turmeric)],
    dil: { note: "6 tot 8 L in 200 L water (25× tot 33×). Neem het sterkere mengsel bij zware aantasting." },
    steps: ["Meng alles in de urine en roer rechtsom.", "Dek af en kook tot het schuimt.", "Haal van het vuur en laat het 48 uur in de schaduw staan. Roer twee keer per dag.", "Filter door een fijne doek. Het is ongeveer 3 maanden houdbaar."],
    tipsTitle: "Goed om te weten", tips: ["Gebruik het tegen boorders en wormen in stengels en vruchten."], safety: S.toxic
  },
  dashaparni: {
    tag: "Alle plagen", role: "Gefermenteerd extract van tien bladsoorten tegen veel plagen en ziekten", sizeLabel: "Hoeveel Dashaparni wil je maken?",
    items: [it(G.d1, G.water), it(G.d1, G.urine), it(G.d1, G.dung), it(G.d1s, G.turmeric), it(G.d1s, G.ginger), it(G.d1s, G.hing), it(G.d2, G.tobacco, G.toxMask), it(G.d2, G.chili), it(G.d2, G.garlic), it(G.d3, G.leaf10, G.leaf10Note)],
    dil: { note: "6 tot 8 L in 200 L water (3% tot 4%)." },
    steps: ["Voeg de urine en de mest toe aan het water. Dek af en laat 2 uur staan.", "Voeg de kurkuma, gember en asafoetida toe. Roer rechtsom, dek af en laat een nacht staan.", "Voeg de volgende ochtend de tabak, chili en knoflook toe. Roer, dek af en laat 24 uur in de schaduw staan.", "Voeg de tien bladpasta's toe. Roer en dek af met een jutezak.", "Laat 30 tot 40 dagen fermenteren en roer twee keer per dag. Filter dan door een fijne doek."],
    tipsTitle: "Goed om te weten", tips: ["Het kan Neemastra, Brahmastra en Agniastra vervangen als je de bladeren hebt.", "Tien willekeurige soorten afstotende bladeren zijn goed. Vermijd bladeren die je dieren eten."], safety: S.toxic
  }
};
})();
