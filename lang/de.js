/* Deutsch */
(() => {
const G = {
  dry: "Trockene Zutaten", water: "Wasser", sulfur: "Schwefel", clay: "Rotes Tonmehl", phyl: "Phyllit-Pulver",
  salt: "Meersalz", naoh: "Ätznatron (NaOH)", naohS: "Ätznatron", w0: "Startwasser", w1: "Nachfüllwasser",
  exact: "Genau abmessen", afterDissolve: "Wird zugegeben, wenn sich der Schwefel gelöst hat",
  s1: "Schritt 1: lösen", s2: "Schritt 2: mischen", later: "Später",
  koh: "Kaliumhydroxid (KOH, 90 %)", kohS: "Kaliumhydroxid", kohNote: "Auch Ätzkali genannt",
  soft: "Weiches Wasser", softNote: "Genau abmessen. Regenwasser oder destilliertes Wasser.", canola: "Rapsöl",
  jwaWater: "Aus der 10-L-Version. Wann es zugegeben wird, steht in den offiziellen Schritten.",
  ingr: "Zutaten", mold: "Laubhumus (Waldboden)", moldNote: "Vom Boden eines nahen Waldes",
  potato: "Gekochte Kartoffel", chlorine: "Wasser ohne Chlor", tapNote: "Leitungswasser 24 Stunden stehen lassen",
  fill: "Behälter füllen", plant: "Zerkleinertes Pflanzenmaterial", plantNote: "Locker eingefüllt. Etwa ein Drittel des Behälters.", rest: "Den Rest auffüllen",
  drum: "In der Tonne", fdung: "Frischer Dung einer Desi-Kuh", urine: "Urin einer Desi-Kuh",
  urineRange: "Quellen nennen 5 bis 10 L. Hier wird der mittlere Wert verwendet.", jag: "Jaggery (Rohrohrzucker)", besan: "Kichererbsenmehl (Besan)",
  lime: "Kalk", limeOpt: "Manche Anleitungen lassen ihn weg", farmSoil: "Erde vom Hof",
  farmSoilNote: "Unter einem alten Baum oder vom Feldrand. Ohne Chemie.",
  dung: "Dung einer Desi-Kuh", tied: "In ein Tuch gebunden", limeNight: "Über Nacht in etwas Wasser gelöst",
  bund: "Erde vom Feldrand", ddung: "Gut getrockneter Dung einer Desi-Kuh", dissolved: "In Wasser gelöst",
  little: "Ein wenig", moisten: "Nur so viel, dass der Dung feucht wird", rootSoil: "Erde von den Wurzeln der Pflanzen", handful: "Eine Handvoll",
  st1: "Phase 1: 3 Tage", st2: "Phase 2: 15 Tage", st3: "Phase 3: etwa 30 Tage", ghee: "Ghee von der Desi-Kuh",
  milk: "Milch der Desi-Kuh", curd: "Joghurt der Desi-Kuh", coco: "Wasser junger Kokosnüsse", banana: "Reife Bananen",
  bananaUnit: "Bananen", bananaNote: "Sehr reif und zerdrückt", neem: "Neemblätter-Paste", pulp: "Oder Neemsamen-Fruchtfleisch",
  urG: "Kuhurin", pastes: "Blattpasten", neemL: "Neemblätter", karanj: "Karanjblätter", custard: "Zuckerapfelblätter",
  castor: "Rizinusblätter", datura: "Stechapfelblätter", toxGlove: "Giftig. Handschuhe tragen.", tobacco: "Tabakpulver",
  toxMask: "Giftig. Handschuhe und Maske tragen.", chili: "Grüne Chilipaste", garlic: "Knoblauchpaste", turmeric: "Kurkumapulver",
  d1: "Tag 1: die Basis", d1s: "Tag 1: Gewürze", d2: "Tag 2", d3: "Tag 3: Blätter", ginger: "Ingwerpaste", hing: "Asant (Hing)",
  leaf10: "Blattpaste, 10 Sorten", leaf10Note: "2 kg von jeder Sorte, z. B. Neem, Karanj, Zuckerapfel, Rizinus und Papaya"
};
const S = {
  caustic: n => [`${n} verursacht chemische Verätzungen. Mit Wasser vermischt wird es sehr heiß.`, "Schutzbrille, Gummihandschuhe, Stiefel, langärmelige Jacke und Maske tragen. Im Freien arbeiten.", "Hitzebeständige Kunststoffbehälter verwenden. Niemals Aluminium.", "Kinder und Tiere fernhalten. Jeden Behälter beschriften."],
  ferment: ["Handschuhe tragen und nach dem Umgang die Hände waschen.", "Gärende Mischungen können stark riechen. Vom Haus fernhalten.", "Jeden Behälter beschriften und außerhalb der Reichweite von Kindern aufbewahren."],
  cow: ["Handschuhe tragen und nach dem Umgang mit Dung und Urin gründlich die Hände waschen.", "Gemüse und Obst vor dem Essen gut waschen. Nicht kurz vor der Ernte ausbringen.", "Tonnen mit einem Netz abdecken, damit keine Fliegen Eier ablegen. Jeden Behälter beschriften und von Kindern fernhalten."],
  toxic: ["Zutaten wie Stechapfel, Tabak und Chili sind giftig oder reizend. Handschuhe, Maske und Augenschutz tragen.", "Im Freien kochen und mischen. Diese Töpfe danach nicht mehr in der Küche benutzen.", "Kinder und Tiere fernhalten. Jeden Behälter deutlich beschriften.", "Erntegut gut waschen. Nicht kurz vor der Ernte ausbringen."]
};
const it = (g, n, note, x) => Object.assign({ g, n }, note ? { note } : {}, x || {});

UI.de = {
  title: "Rechner für Bio-Landbau", tagline: "Genaue Mengen für jede Ansatzgröße", offline: "Funktioniert offline",
  groups: { jadam: "JADAM-Rezepte", india: "Traditionell (Indien)" },
  indiaNote: "Naturnahe Anbaumethoden, dokumentiert vom NITI Aayog und indischen Agraruniversitäten. Sie verwenden Dung und Urin einheimischer (Desi-)Kühe.",
  hot: "Das Wasser ist wärmer als 27 °C (80 °F)", hotNote: "Für warmes Wasser angepasst",
  copy: "Kopieren", share: "Teilen", copied: "Rezept kopiert", copyFail: "Kopieren nicht möglich", enterFirst: "Bitte zuerst eine Menge eingeben",
  copyAria: "Rezept kopieren", shareAria: "Rezept teilen",
  yourRecipe: "Ihr Rezept", enterAmount: "Geben Sie ein, wie viel Sie ansetzen möchten.",
  need: (sz, name) => `Sie brauchen für ${sz} ${name}`,
  covers: (n, a) => `Das reicht für etwa ${n} Acre.`,
  sprayTitle: "Mischung zum Spritzen", tankHelp: "Größe Ihrer Spritze oder Ihres Tanks.", tankAria: u => `Größe der Spritze in ${u}`,
  dilution: "Verdünnung", dilAria: "Verdünnungsverhältnis", stronger: "stärker", weaker: "schwächer", enterTank: "Geben Sie die Größe Ihrer Spritze ein.",
  conc: name => `${name}-Konzentrat`, fillTo: tank => `Dann mit Wasser auf ${tank} auffüllen`,
  batchLine: (a, b, n) => `Ihr Ansatz von ${a} ergibt bei ${n}× etwa ${b} spritzfertige Mischung.`,
  method: "Zubereitung", safety: "Sicherheit", source: "Quelle prüfen",
  feedbackQ: "Falschen Wert gefunden oder eine Idee?", feedbackBtn: "Feedback per E-Mail senden",
  disclaimer: "Die Mengen werden aus veröffentlichten Rezepten (JADAM, NITI Aayog, TNAU und Leitfäden der Bundesstaaten) hochgerechnet. Rezepte unterscheiden sich je nach Quelle: Messen Sie sorgfältig, testen Sie an wenigen Pflanzen, bevor Sie die ganze Kultur behandeln, und prüfen Sie vor dem Mischen die offiziellen Schritte. Dies ist ein inoffizielles Werkzeug, das weder mit JADAM noch mit einer Behörde verbunden ist. Es ist ein Rechner und keine professionelle Sicherheitsberatung.",
  recipeFoot: "Mengen aus veröffentlichten Rezepten hochgerechnet. Vor dem Mischen die offiziellen Schritte prüfen. Handschuhe und Augenschutz tragen.",
  units: { kg: "kg", g: "g", lb: "lb", oz: "oz", L: "L", mL: "ml", gal: "gal", floz: "fl oz" }
};

HI_TEXT.de = {
  js: {
    tag: "Schwefel", role: "Fungizid und Insektizid", sizeLabel: "Wie viel JS möchten Sie ansetzen?",
    items: [it(G.dry, G.sulfur), it(G.dry, G.clay), it(G.dry, G.phyl), it(G.dry, G.salt), it(G.dry, G.naoh), it(G.water, G.w0, G.exact), it(G.water, G.w1, G.afterDissolve)],
    dil: { note: "JADAM empfiehlt etwa 100× bis 1000×." },
    tipsTitle: "Wichtig",
    tips: ["Die Zutaten in genau der Reihenfolge der offiziellen JADAM-Schritte zugeben (Link unten).", "Weintrauben, Kaki, Walnuss, Kürbis und Gewächshauskulturen sind empfindlich. Zuerst an ein paar Blättern testen.", "Einen hitzebeständigen Kunststoffbehälter (PE) verwenden. Niemals Aluminium.", "Der Schwefel schmilzt, wenn die Mischung über etwa 80 °C kommt. Rühren, bis am Boden keine Klumpen mehr sind.", "Nach dem Nachfüllwasser ein bis zwei Tage absetzen lassen, dann den Bodensatz abfiltern.", "Über −5 °C (23 °F) lagern."],
    safety: S.caustic(G.naohS)
  },
  jwa: {
    tag: "Netzmittel", role: "Natürliche Seife, damit Spritzbrühen besser haften", sizeLabel: "Wie viel JWA möchten Sie ansetzen?",
    items: [it(G.s1, G.koh, G.kohNote), it(G.s1, G.soft, G.softNote), it(G.s2, G.canola), it(G.later, G.water, G.jwaWater)],
    dil: { note: "Der veröffentlichte Bereich liegt bei etwa 30× bis 100×." },
    steps: ["KOH im weichen Wasser in einem geschlossenen, hitzebeständigen Behälter lösen. Es wird sehr heiß.", "Das Rapsöl zugeben. Etwa 10 Minuten mit einer Bohrmaschine mit Rührer mischen, bis es wie dünne Mayonnaise aussieht. Von Hand klappt es nicht.", "Deckel schließen und 3 Tage ruhen lassen. Es soll wie Butter fest werden."],
    tipsTitle: "Gut zu wissen",
    tips: ["Nur weiches Wasser verwenden. Hartes Leitungswasser ruiniert es.", "Nicht bei starker Sonne spritzen. Nicht für Wicken, Kapuzinerkresse und zarte Farne verwenden."],
    safety: S.caustic(G.kohS)
  },
  jms: {
    tag: "Mikroben", role: "Lebende Bodenmikroorganismen aus Laubhumus", sizeLabel: "Wie viel Wasser möchten Sie kultivieren?",
    items: [it(G.ingr, G.mold, G.moldNote), it(G.ingr, G.potato), it(G.ingr, G.salt), it(G.ingr, G.chlorine, G.tapNote)],
    dil: { note: "Meist wird es vor der Anwendung etwa 10× verdünnt." },
    steps: ["Die Kartoffel kochen und zerdrücken. Zusammen mit dem Laubhumus in einen Netzbeutel geben.", "Das Salz im Wasser lösen. Den Beutel hineinhängen und kneten, bis das Wasser trüb und braun wird.", "Locker abdecken und bei etwa 18 bis 25 °C halten.", "Nach 1 bis 3 Tagen bildet sich oben eine Schaumschicht. Innerhalb von ein bis zwei Tagen verwenden."],
    tipsTitle: "Gut zu wissen", tips: ["JMS ist nicht lagerfähig. Jedes Mal frisch ansetzen."], safety: S.ferment
  },
  jlf: {
    tag: "Flüssigdünger", role: "Vergorener Pflanzendünger", sizeLabel: "Wie groß ist Ihr Behälter?",
    items: [it(G.fill, G.plant, G.plantNote), it(G.fill, G.chlorine, G.rest)],
    dil: { note: "JADAM verwendet etwa 100×. Schwächer (200× bis 500×) für Sämlinge." },
    steps: ["Das Pflanzenmaterial klein schneiden.", "Etwa ein Drittel des Behälters locker damit füllen.", "Den Rest mit Wasser ohne Chlor auffüllen. Locker abdecken.", "Wochen bis Monate stehen lassen. Fertig, wenn es erdig statt faulig riecht.", "Vor der Anwendung verdünnen."],
    tipsTitle: "Gut zu wissen", tips: ["Bestes Material: Reste derselben Kultur, dann Wildgras und Unkraut."], safety: S.ferment
  },
  jeevamrit: {
    tag: "Bodenbooster", role: "Vergorene Mischung aus Dung und Urin, die Bodenmikroben füttert", sizeLabel: "Wie viel Jeevamrit möchten Sie ansetzen?",
    items: [it(G.drum, G.fdung), it(G.drum, G.urine, G.urineRange), it(G.drum, G.jag), it(G.drum, G.besan), it(G.drum, G.lime, G.limeOpt), it(G.drum, G.farmSoil, G.farmSoilNote), it(G.drum, G.water)],
    coverage: { text: "Die übliche Gabe beträgt etwa 200 L pro Acre, alle 15 Tage mit der Bewässerung." },
    dil: { note: "Zum Spritzen auf die Blätter verwenden die Anbauempfehlungen aus Gujarat etwa 7,5 L in 120 L Wasser. Im Boden wird es unverdünnt ausgebracht." },
    steps: ["Alles mit dem Wasser in einer Tonne mischen.", "48 Stunden im Schatten stehen lassen. Jeden Morgen und Abend mit einem Holzstab umrühren.", "Alle zwei Wochen ausbringen, auf die Pflanzen gespritzt oder ins Bewässerungswasser gemischt.", "Innerhalb von etwa 15 Tagen verbrauchen."],
    tipsTitle: "Gut zu wissen", tips: ["Dung und Urin einheimischer (Desi-)Kühe verwenden."], safety: S.cow
  },
  beejamrit: {
    tag: "Saatgutbehandlung", role: "Überzug, der Saatgut und junge Wurzeln schützt", sizeLabel: "Wie viel Saatgut möchten Sie behandeln?",
    titleFn: sz => `Sie brauchen zur Behandlung von ${sz} Saatgut`,
    items: [it(G.ingr, G.dung, G.tied), it(G.ingr, G.urine), it(G.ingr, G.lime, G.limeNight), it(G.ingr, G.bund), it(G.ingr, G.water)],
    use: { title: "So wird es angewendet", list: ["Das Saatgut von Hand mit Beejamrit überziehen, gut im Schatten trocknen und dann aussäen.", "Bei Hülsenfrüchten mit dünner Schale nur kurz eintauchen und trocknen lassen.", "Bei Reissetzlingen die Wurzeln vor dem Verpflanzen 30 Minuten eintauchen."] },
    steps: ["Den Dung in ein Tuch binden und bis zu 12 Stunden ins Wasser hängen.", "Den Kalk in etwas Wasser einrühren und über Nacht stehen lassen.", "Am nächsten Morgen das Dungbündel 3-mal im Wasser ausdrücken.", "Die Erde zugeben und rühren. Dann Urin und Kalkwasser zugeben und nochmals rühren."],
    tipsTitle: "Gut zu wissen", tips: ["Frisch ansetzen und am selben Tag verwenden."], safety: S.cow
  },
  ghana: {
    tag: "Trockenbooster", role: "Trockene, feste Form des Jeevamrit, die in den Boden eingearbeitet wird", sizeLabel: "Wie viel trockenen Dung haben Sie?",
    titleFn: sz => `Sie brauchen für ${sz} trockenen Dung`,
    items: [it(G.ingr, G.ddung), it(G.ingr, G.besan), it(G.ingr, G.jag, G.dissolved), it(G.ingr, G.urine, G.moisten, { text: G.little }), it(G.ingr, G.rootSoil, null, { text: G.handful })],
    coverage: { text: "Die übliche Gabe beträgt etwa 100 kg pro Acre bei der Aussaat. Manche Leitfäden verwenden 200 kg vor dem letzten Pflügen." },
    use: { title: "So wird es angewendet", list: ["Bei der Aussaat auf dem Feld verteilen oder als Kopfdüngung rund um die Pflanzen geben.", "Bis zur Verwendung trocken halten."] },
    steps: ["Den trockenen Dung dünn auf dem Boden ausbreiten.", "Etwas Kuhurin und das Kichererbsenmehl darüberstreuen.", "Den Jaggery in Wasser lösen und darübersprengen. Eine Handvoll Erde zugeben.", "Gut mischen und kleine Bällchen (Laddus) formen. Im Schatten trocknen."],
    tipsTitle: "Gut zu wissen", tips: ["Trockenes Ghanajeevamrit hält sich einige Monate und lässt sich leicht lagern und transportieren."], safety: S.cow
  },
  panchagavya: {
    tag: "Wachstumstonikum", role: "Vergorene Mischung aus fünf Kuhprodukten, auf die Blätter gespritzt", sizeLabel: "Wie viel Panchagavya möchten Sie ansetzen? (ca.)",
    items: [it(G.st1, G.fdung), it(G.st1, G.ghee), it(G.st2, G.urine), it(G.st2, G.water), it(G.st3, G.milk), it(G.st3, G.curd), it(G.st3, G.coco), it(G.st3, G.jag), it(G.st3, G.banana, G.bananaNote, { unit: G.bananaUnit })],
    dil: { note: "Üblich sind 3 L auf 100 L Wasser (3 %). Bei Blattgemüse schwächer, etwa 2 %." },
    steps: ["Dung und Ghee gut mischen. 3 Tage lang morgens und abends rühren.", "Urin und Wasser zugeben. 15 Tage lang morgens und abends rühren.", "Milch, Joghurt, Kokoswasser, Jaggery und zerdrückte Bananen zugeben.", "Etwa 30 Tage lang zweimal täglich rühren, dann durch ein Tuch filtern."],
    tipsTitle: "Gut zu wissen", tips: ["Mit einem Netz abgedeckt halten, damit keine Fliegen Eier ablegen.", "Vor dem Spritzen gut filtern, damit die Spritze nicht verstopft."], safety: S.cow
  },
  neemastra: {
    tag: "Saugende Schädlinge", role: "Neem-Spritzmittel gegen Blattläuse, Weiße Fliege und kleine Raupen", sizeLabel: "Wie viel Neemastra möchten Sie ansetzen?",
    items: [it(G.drum, G.water), it(G.drum, G.urine), it(G.drum, G.dung), it(G.drum, G.neem, G.pulp)],
    dil: { note: "Üblich sind 3,5 % bis 5 %. 5 L auf 100 L Wasser entsprechen 20×." },
    steps: ["Urin, Dung und Neempaste ins Wasser geben.", "Mit einem langen Stab im Uhrzeigersinn rühren. Mit einem Jutesack abdecken und im Schatten aufstellen, geschützt vor Sonne und Regen.", "Jeden Morgen und Abend rühren. Nach 48 Stunden ist es fertig.", "Vor der Anwendung durch ein feines Tuch filtern."],
    tipsTitle: "Gut zu wissen", tips: ["Am späten Nachmittag spritzen, wenn Nützlinge nicht aktiv sind.", "Frisch ist am besten. Das Papier aus Gujarat nennt eine Haltbarkeit von bis zu 6 Monaten."], safety: S.cow
  },
  brahmastra: {
    tag: "Raupen", role: "Spritzmittel aus gekochten Blättern und Urin gegen Raupen und Bohrer", sizeLabel: "Wie viel Brahmastra möchten Sie ansetzen?",
    items: [it(G.urG, G.urine), it(G.pastes, G.neemL), it(G.pastes, G.karanj), it(G.pastes, G.custard), it(G.pastes, G.castor), it(G.pastes, G.datura, G.toxGlove)],
    dil: { note: "Zum Spritzen: 2 bis 3 L auf 100 L Wasser. Als Bodengabe gegen Nematoden: 8 L auf 100 L (12×)." },
    steps: ["Jede Blattsorte zu einer feinen Paste zerkleinern.", "Den Urin in ein Gefäß geben und alle Pasten einrühren.", "Bei kleiner Flamme kochen, bis ein- oder zweimal Schaum aufsteigt. Im Uhrzeigersinn rühren und abgedeckt halten.", "Nach dem zweiten Aufschäumen die Hitze abstellen und 48 Stunden abkühlen lassen.", "Durch ein feines Tuch filtern. Im Schatten in einem Behälter aufbewahren."],
    tipsTitle: "Gut zu wissen", tips: ["Manche Anleitungen verwenden andere Blätter, etwa Papaya, Granatapfel und Guave.", "Vor Sonne geschützt lagern. Anleitungen nennen eine Haltbarkeit von bis zu 6 Monaten."], safety: S.toxic
  },
  agniastra: {
    tag: "Bohrer und Raupen", role: "Scharfes Spritzmittel aus Neem, Chili und Knoblauch gegen Bohrer und Raupen", sizeLabel: "Wie viel Agniastra möchten Sie ansetzen?",
    items: [it(G.ingr, G.urine), it(G.ingr, G.neem), it(G.ingr, G.tobacco, G.toxMask), it(G.ingr, G.chili), it(G.ingr, G.garlic), it(G.ingr, G.turmeric)],
    dil: { note: "6 bis 8 L in 200 L Wasser (25× bis 33×). Bei starkem Befall die stärkere Mischung nehmen." },
    steps: ["Alles im Urin vermischen und im Uhrzeigersinn rühren.", "Abdecken und aufkochen, bis es schäumt.", "Vom Feuer nehmen und 48 Stunden im Schatten stehen lassen. Zweimal täglich rühren.", "Durch ein feines Tuch filtern. Es hält etwa 3 Monate."],
    tipsTitle: "Gut zu wissen", tips: ["Gegen Bohrer und Raupen in Stängeln und Früchten einsetzen."], safety: S.toxic
  },
  dashaparni: {
    tag: "Alle Schädlinge", role: "Vergorener Auszug aus zehn Blattarten gegen viele Schädlinge und Krankheiten", sizeLabel: "Wie viel Dashaparni möchten Sie ansetzen?",
    items: [it(G.d1, G.water), it(G.d1, G.urine), it(G.d1, G.dung), it(G.d1s, G.turmeric), it(G.d1s, G.ginger), it(G.d1s, G.hing), it(G.d2, G.tobacco, G.toxMask), it(G.d2, G.chili), it(G.d2, G.garlic), it(G.d3, G.leaf10, G.leaf10Note)],
    dil: { note: "6 bis 8 L in 200 L Wasser (3 % bis 4 %)." },
    steps: ["Urin und Dung ins Wasser geben. Abdecken und 2 Stunden stehen lassen.", "Kurkuma, Ingwer und Asant zugeben. Im Uhrzeigersinn rühren, abdecken und über Nacht stehen lassen.", "Am nächsten Morgen Tabak, Chili und Knoblauch zugeben. Rühren, abdecken und 24 Stunden im Schatten stehen lassen.", "Die zehn Blattpasten zugeben. Rühren und mit einem Jutesack abdecken.", "30 bis 40 Tage gären lassen und dabei zweimal täglich rühren. Dann durch ein feines Tuch filtern."],
    tipsTitle: "Gut zu wissen", tips: ["Es kann Neemastra, Brahmastra und Agniastra ersetzen, wenn Sie die Blätter haben.", "Beliebige zehn Sorten abweisender Blätter sind möglich. Blätter meiden, die Ihre Tiere fressen."], safety: S.toxic
  }
};
})();
