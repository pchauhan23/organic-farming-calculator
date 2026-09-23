/* Español */
(() => {
const G = {
  dry: "Ingredientes secos", water: "Agua", sulfur: "Azufre", clay: "Arcilla roja en polvo", phyl: "Filita en polvo",
  salt: "Sal marina", naoh: "Sosa cáustica (NaOH)", naohS: "La sosa cáustica", w0: "Agua inicial", w1: "Agua para completar",
  exact: "Mídela con exactitud", afterDissolve: "Se añade cuando el azufre ya se disolvió",
  s1: "Paso 1: disolver", s2: "Paso 2: mezclar", later: "Después",
  koh: "Hidróxido de potasio (KOH, 90 %)", kohS: "El hidróxido de potasio", kohNote: "También llamado potasa cáustica",
  soft: "Agua blanda", softNote: "Mídela con exactitud. Agua de lluvia o destilada.", canola: "Aceite de canola",
  jwaWater: "De la versión de 10 L. Mira en los pasos oficiales cuándo añadirla.",
  ingr: "Ingredientes", mold: "Mantillo de hojas (tierra de bosque)", moldNote: "Del suelo de un bosque cercano",
  potato: "Papa hervida", chlorine: "Agua sin cloro", tapNote: "Deja reposar el agua del grifo 24 horas",
  fill: "Llena el recipiente", plant: "Material vegetal picado", plantNote: "Sin apretar. Aproximadamente un tercio del recipiente.", rest: "Llena el resto",
  drum: "En el bidón", fdung: "Estiércol fresco de vaca desi", urine: "Orina de vaca desi",
  urineRange: "Las fuentes dicen de 5 a 10 L. Aquí se usa el punto medio.", jag: "Jaggery (panela)", besan: "Harina de garbanzo (besan)",
  lime: "Cal", limeOpt: "Algunas guías la omiten", farmSoil: "Tierra de la finca",
  farmSoilNote: "De debajo de un árbol viejo o del borde del campo. Sin químicos.",
  dung: "Estiércol de vaca desi", tied: "Atado en un paño", limeNight: "Disuelta en un poco de agua toda la noche",
  bund: "Tierra del borde del campo", ddung: "Estiércol de vaca desi bien seco", dissolved: "Disuelto en agua",
  little: "Un poco", moisten: "Solo lo justo para humedecer el estiércol", rootSoil: "Tierra de alrededor de las raíces", handful: "Un puñado",
  st1: "Etapa 1: 3 días", st2: "Etapa 2: 15 días", st3: "Etapa 3: unos 30 días", ghee: "Ghee de vaca desi",
  milk: "Leche de vaca desi", curd: "Yogur de vaca desi", coco: "Agua de coco tierno", banana: "Plátanos maduros",
  bananaUnit: "plátanos", bananaNote: "Bien maduros y aplastados", neem: "Pasta de hojas de neem", pulp: "O pulpa de semillas de neem",
  urG: "Orina de vaca", pastes: "Pastas de hojas", neemL: "Hojas de neem", karanj: "Hojas de karanj", custard: "Hojas de chirimoya",
  castor: "Hojas de ricino", datura: "Hojas de estramonio", toxGlove: "Venenoso. Usa guantes.", tobacco: "Tabaco en polvo",
  toxMask: "Venenoso. Usa guantes y mascarilla.", chili: "Pasta de chile verde", garlic: "Pasta de ajo", turmeric: "Cúrcuma en polvo",
  d1: "Día 1: la base", d1s: "Día 1: especias", d2: "Día 2", d3: "Día 3: hojas", ginger: "Pasta de jengibre", hing: "Asafétida (hing)",
  leaf10: "Pasta de hojas, 10 tipos", leaf10Note: "2 kg de cada tipo, como neem, karanj, chirimoya, ricino y papaya"
};
const S = {
  caustic: n => [`${n} causa quemaduras químicas. Al mezclarlo con agua se calienta muchísimo.`, "Usa gafas de protección, guantes de goma, botas, chaqueta de manga larga y mascarilla. Trabaja al aire libre.", "Usa recipientes de plástico resistentes al calor. Nunca de aluminio.", "Mantén alejados a niños y animales. Etiqueta cada recipiente."],
  ferment: ["Usa guantes y lávate las manos después de manipularlo.", "Las mezclas en fermentación pueden oler fuerte. Mantenlas lejos de tu casa.", "Etiqueta cada recipiente y guárdalo fuera del alcance de los niños."],
  cow: ["Usa guantes y lávate bien las manos después de tocar estiércol y orina.", "Lava bien las verduras y frutas antes de comerlas. No apliques cerca de la cosecha.", "Cubre los bidones con una malla para que las moscas no pongan huevos. Etiqueta cada recipiente y mantenlo lejos de los niños."],
  toxic: ["Ingredientes como el estramonio, el tabaco y el chile son venenosos o irritantes. Usa guantes, mascarilla y protección para los ojos.", "Hierve y mezcla al aire libre. No vuelvas a usar esas ollas en la cocina.", "Mantén alejados a niños y animales. Etiqueta claramente cada recipiente.", "Lava bien los productos. No apliques cerca de la cosecha."]
};
const it = (g, n, note, x) => Object.assign({ g, n }, note ? { note } : {}, x || {});

UI.es = {
  title: "Calculadora de agricultura orgánica", tagline: "Cantidades exactas para cualquier tamaño de lote", offline: "Funciona sin internet",
  groups: { jadam: "Recetas JADAM", india: "Tradicional de la India" },
  indiaNote: "Métodos de agricultura natural documentados por NITI Aayog y universidades agrícolas de la India. Usan estiércol y orina de vacas nativas (desi).",
  hot: "El agua está a más de 27 °C (80 °F)", hotNote: "Ajustado para agua caliente",
  copy: "Copiar", share: "Compartir", copied: "Receta copiada", copyFail: "No se pudo copiar", enterFirst: "Primero escribe una cantidad",
  copyAria: "Copiar receta", shareAria: "Compartir receta",
  yourRecipe: "Tu receta", enterAmount: "Escribe cuánto quieres preparar.",
  need: (sz, name) => `Necesitas para ${sz} de ${name}`,
  covers: (n, a) => `Alcanza para unos ${n} acre${a === 1 ? "" : "s"}.`,
  sprayTitle: "Mezcla para aplicar", tankHelp: "Tamaño de tu pulverizador o tanque.", tankAria: u => `Tamaño del pulverizador en ${u}`,
  dilution: "Dilución", dilAria: "Proporción de dilución", stronger: "más fuerte", weaker: "más suave", enterTank: "Escribe el tamaño de tu pulverizador.",
  conc: name => `${name} concentrado`, fillTo: tank => `Luego completa con agua hasta ${tank}`,
  batchLine: (a, b, n) => `Tu lote de ${a} rinde unos ${b} de mezcla lista para aplicar a ${n}×.`,
  method: "Preparación", safety: "Seguridad", source: "Consulta la fuente",
  feedbackQ: "¿Encontraste un dato incorrecto o tienes una idea?", feedbackBtn: "Enviar comentarios por correo",
  disclaimer: "Las cantidades se calculan a partir de recetas publicadas (JADAM, NITI Aayog, TNAU y guías estatales). Las recetas varían según la fuente: mide con cuidado, prueba en unas pocas plantas antes de tratar todo el cultivo y revisa los pasos oficiales antes de mezclar. Esta es una herramienta no oficial y no está afiliada a JADAM ni a ningún organismo público. Es una calculadora, no un consejo profesional de seguridad.",
  recipeFoot: "Cantidades calculadas a partir de recetas publicadas. Revisa los pasos oficiales antes de mezclar. Usa guantes y protección para los ojos.",
  units: { kg: "kg", g: "g", lb: "lb", oz: "oz", L: "L", mL: "mL", gal: "gal", floz: "fl oz" }
};

HI_TEXT.es = {
  js: {
    tag: "Azufre", role: "Fungicida e insecticida", sizeLabel: "¿Cuánto JS quieres preparar?",
    items: [it(G.dry, G.sulfur), it(G.dry, G.clay), it(G.dry, G.phyl), it(G.dry, G.salt), it(G.dry, G.naoh), it(G.water, G.w0, G.exact), it(G.water, G.w1, G.afterDissolve)],
    dil: { note: "JADAM sugiere aproximadamente de 100× a 1000×." },
    tipsTitle: "Puntos clave",
    tips: ["Añade los ingredientes en el orden exacto de los pasos oficiales de JADAM (enlace abajo).", "La uva, el caqui, la nuez, la calabaza y los cultivos de invernadero son sensibles. Prueba primero en unas pocas hojas.", "Usa un recipiente de plástico (PE) resistente al calor. Nunca de aluminio.", "El azufre se derrite cuando la mezcla pasa de unos 80 °C. Revuelve hasta que no queden grumos en el fondo.", "Tras añadir el agua final, déjala reposar uno o dos días y luego filtra el sedimento.", "Guárdalo por encima de −5 °C (23 °F)."],
    safety: S.caustic(G.naohS)
  },
  jwa: {
    tag: "Adherente", role: "Jabón natural que ayuda a que las aplicaciones se adhieran", sizeLabel: "¿Cuánto JWA quieres preparar?",
    items: [it(G.s1, G.koh, G.kohNote), it(G.s1, G.soft, G.softNote), it(G.s2, G.canola), it(G.later, G.water, G.jwaWater)],
    dil: { note: "El rango publicado es de aproximadamente 30× a 100×." },
    steps: ["Disuelve el KOH en el agua blanda dentro de un recipiente cerrado y resistente al calor. Se calienta mucho.", "Añade el aceite de canola. Mezcla con un taladro eléctrico unos 10 minutos, hasta que parezca mayonesa fluida. A mano no funciona.", "Cierra la tapa y déjalo reposar 3 días. Debe quedar firme como mantequilla."],
    tipsTitle: "Conviene saber",
    tips: ["Usa solo agua blanda. El agua dura del grifo lo arruina.", "Evita aplicarlo con sol fuerte. No lo uses en guisantes de olor, capuchinas ni helechos delicados."],
    safety: S.caustic(G.kohS)
  },
  jms: {
    tag: "Microbios", role: "Microorganismos vivos del suelo a partir de mantillo de hojas", sizeLabel: "¿Cuánta agua quieres cultivar?",
    items: [it(G.ingr, G.mold, G.moldNote), it(G.ingr, G.potato), it(G.ingr, G.salt), it(G.ingr, G.chlorine, G.tapNote)],
    dil: { note: "Se suele diluir unas 10× antes de usar." },
    steps: ["Hierve la papa y aplástala. Ponla junto con el mantillo en una bolsa de malla.", "Disuelve la sal en el agua. Cuelga la bolsa y amásala hasta que el agua se ponga turbia y marrón.", "Tapa sin apretar y mantén entre 18 y 25 °C.", "En 1 a 3 días se forma una capa de espuma arriba. Úsalo en uno o dos días."],
    tipsTitle: "Conviene saber", tips: ["El JMS no se guarda. Prepáralo fresco cada vez."], safety: S.ferment
  },
  jlf: {
    tag: "Abono líquido", role: "Abono vegetal fermentado", sizeLabel: "¿De qué tamaño es tu recipiente?",
    items: [it(G.fill, G.plant, G.plantNote), it(G.fill, G.chlorine, G.rest)],
    dil: { note: "JADAM usa aproximadamente 100×. Más suave (200× a 500×) para plántulas." },
    steps: ["Pica bien el material vegetal.", "Llena aproximadamente un tercio del recipiente, sin apretar.", "Llena el resto con agua sin cloro. Tapa sin apretar.", "Déjalo de semanas a meses. Está listo cuando huele a tierra y no a podrido.", "Diluye antes de usar."],
    tipsTitle: "Conviene saber", tips: ["Mejor material: restos del mismo cultivo, luego hierba silvestre y malezas."], safety: S.ferment
  },
  jeevamrit: {
    tag: "Impulsor del suelo", role: "Fermento de estiércol y orina que alimenta a los microbios del suelo", sizeLabel: "¿Cuánto Jeevamrit quieres preparar?",
    items: [it(G.drum, G.fdung), it(G.drum, G.urine, G.urineRange), it(G.drum, G.jag), it(G.drum, G.besan), it(G.drum, G.lime, G.limeOpt), it(G.drum, G.farmSoil, G.farmSoilNote), it(G.drum, G.water)],
    coverage: { text: "La dosis habitual es de unos 200 L por acre, cada 15 días con el riego." },
    dil: { note: "Para aplicar a las hojas, las prácticas de Gujarat usan unos 7,5 L en 120 L de agua. En el suelo se usa sin diluir." },
    steps: ["Mezcla todo con el agua en un bidón.", "Déjalo a la sombra 48 horas. Revuelve con un palo de madera cada mañana y cada tarde.", "Aplícalo cada quincena, en aspersión sobre el cultivo o mezclado con el agua de riego.", "Úsalo en unos 15 días."],
    tipsTitle: "Conviene saber", tips: ["Usa estiércol y orina de vacas nativas (desi)."], safety: S.cow
  },
  beejamrit: {
    tag: "Tratamiento de semillas", role: "Recubrimiento que protege semillas y raíces jóvenes", sizeLabel: "¿Cuántas semillas quieres tratar?",
    titleFn: sz => `Necesitas para tratar ${sz} de semillas`,
    items: [it(G.ingr, G.dung, G.tied), it(G.ingr, G.urine), it(G.ingr, G.lime, G.limeNight), it(G.ingr, G.bund), it(G.ingr, G.water)],
    use: { title: "Cómo usarlo", list: ["Cubre las semillas a mano con Beejamrit, sécalas bien a la sombra y siémbralas.", "En leguminosas de cáscara fina, sumérgelas un momento y déjalas secar.", "En plántulas de arroz, sumerge las raíces 30 minutos antes del trasplante."] },
    steps: ["Ata el estiércol en un paño y cuélgalo en el agua hasta 12 horas.", "Mezcla la cal en un poco de agua y déjala toda la noche.", "A la mañana siguiente, exprime la bolsa de estiércol 3 veces en el agua.", "Añade la tierra y revuelve. Luego añade la orina y el agua de cal y revuelve otra vez."],
    tipsTitle: "Conviene saber", tips: ["Prepáralo fresco y úsalo el mismo día."], safety: S.cow
  },
  ghana: {
    tag: "Impulsor seco", role: "Forma seca y sólida del Jeevamrit, que se mezcla con el suelo", sizeLabel: "¿Cuánto estiércol seco tienes?",
    titleFn: sz => `Necesitas para ${sz} de estiércol seco`,
    items: [it(G.ingr, G.ddung), it(G.ingr, G.besan), it(G.ingr, G.jag, G.dissolved), it(G.ingr, G.urine, G.moisten, { text: G.little }), it(G.ingr, G.rootSoil, null, { text: G.handful })],
    coverage: { text: "La dosis habitual es de unos 100 kg por acre al sembrar. Algunas guías estatales usan 200 kg antes del último arado." },
    use: { title: "Cómo usarlo", list: ["Espárcelo en el campo al sembrar, o como abono de cobertera alrededor de las plantas.", "Manténlo seco hasta usarlo."] },
    steps: ["Extiende el estiércol seco en una capa fina sobre el suelo.", "Espolvorea un poco de orina de vaca y la harina de garbanzo.", "Disuelve el jaggery en agua y rocíalo. Añade un puñado de tierra.", "Mezcla bien y forma bolitas (laddus). Sécalas a la sombra."],
    tipsTitle: "Conviene saber", tips: ["El Ghanajeevamrit seco se conserva unos meses, así que es fácil de guardar y transportar."], safety: S.cow
  },
  panchagavya: {
    tag: "Tónico de crecimiento", role: "Mezcla fermentada de cinco productos de la vaca, para aplicar en las hojas", sizeLabel: "¿Cuánto Panchagavya quieres preparar? (aprox.)",
    items: [it(G.st1, G.fdung), it(G.st1, G.ghee), it(G.st2, G.urine), it(G.st2, G.water), it(G.st3, G.milk), it(G.st3, G.curd), it(G.st3, G.coco), it(G.st3, G.jag), it(G.st3, G.banana, G.bananaNote, { unit: G.bananaUnit })],
    dil: { note: "La aplicación habitual es de 3 L por cada 100 L de agua (3 %). Usa más suave, cerca del 2 %, en hortalizas de hoja." },
    steps: ["Mezcla bien el estiércol y el ghee. Revuelve mañana y tarde durante 3 días.", "Añade la orina y el agua. Revuelve mañana y tarde durante 15 días.", "Añade la leche, el yogur, el agua de coco, el jaggery y los plátanos aplastados.", "Revuelve dos veces al día durante unos 30 días y luego filtra con un paño."],
    tipsTitle: "Conviene saber", tips: ["Mantenlo cubierto con una malla para que las moscas no pongan huevos.", "Filtra bien antes de aplicar para que no se tape el pulverizador."], safety: S.cow
  },
  neemastra: {
    tag: "Plagas chupadoras", role: "Aplicación a base de neem para pulgones, mosca blanca y orugas pequeñas", sizeLabel: "¿Cuánto Neemastra quieres preparar?",
    items: [it(G.drum, G.water), it(G.drum, G.urine), it(G.drum, G.dung), it(G.drum, G.neem, G.pulp)],
    dil: { note: "Lo común es entre 3,5 % y 5 %. 5 L por 100 L de agua equivale a 20×." },
    steps: ["Añade la orina, el estiércol y la pasta de neem al agua.", "Revuelve en el sentido de las agujas del reloj con un palo largo. Cubre con un saco y déjalo a la sombra, lejos del sol y la lluvia.", "Revuelve cada mañana y cada tarde. Está listo en 48 horas.", "Filtra con un paño de muselina antes de usar."],
    tipsTitle: "Conviene saber", tips: ["Aplica al atardecer, cuando los insectos beneficiosos no están activos.", "Lo mejor es usarlo fresco. El documento de Gujarat dice que dura hasta 6 meses."], safety: S.cow
  },
  brahmastra: {
    tag: "Orugas", role: "Aplicación de hojas hervidas y orina para orugas y barrenadores", sizeLabel: "¿Cuánto Brahmastra quieres preparar?",
    items: [it(G.urG, G.urine), it(G.pastes, G.neemL), it(G.pastes, G.karanj), it(G.pastes, G.custard), it(G.pastes, G.castor), it(G.pastes, G.datura, G.toxGlove)],
    dil: { note: "En aplicación foliar: de 2 a 3 L por 100 L de agua. Para el suelo contra nematodos: 8 L por 100 L (12×)." },
    steps: ["Tritura cada tipo de hoja hasta obtener una pasta fina.", "Pon la orina en un recipiente y mezcla todas las pastas.", "Hierve a fuego bajo hasta que suban una o dos espumas. Revuelve en el sentido de las agujas del reloj y mantén tapado.", "Tras la segunda espuma, apaga el fuego y déjalo enfriar 48 horas.", "Filtra con un paño de muselina. Guárdalo en un recipiente a la sombra."],
    tipsTitle: "Conviene saber", tips: ["Algunas guías usan otras hojas, como papaya, granada y guayaba.", "Guárdalo fuera del sol. Las guías dicen que dura hasta 6 meses."], safety: S.toxic
  },
  agniastra: {
    tag: "Barrenadores y gusanos", role: "Aplicación picante de neem, chile y ajo para barrenadores y gusanos", sizeLabel: "¿Cuánto Agniastra quieres preparar?",
    items: [it(G.ingr, G.urine), it(G.ingr, G.neem), it(G.ingr, G.tobacco, G.toxMask), it(G.ingr, G.chili), it(G.ingr, G.garlic), it(G.ingr, G.turmeric)],
    dil: { note: "6 a 8 L en 200 L de agua (25× a 33×). Usa la mezcla más fuerte si el ataque es grave." },
    steps: ["Mezcla todo en la orina y revuelve en el sentido de las agujas del reloj.", "Tapa y hierve hasta que forme espuma.", "Retira del fuego y déjalo a la sombra 48 horas. Revuelve dos veces al día.", "Filtra con un paño de muselina. Dura unos 3 meses."],
    tipsTitle: "Conviene saber", tips: ["Úsalo contra barrenadores y gusanos en tallos y frutos."], safety: S.toxic
  },
  dashaparni: {
    tag: "Todas las plagas", role: "Extracto fermentado de diez hojas para muchas plagas y enfermedades", sizeLabel: "¿Cuánto Dashaparni quieres preparar?",
    items: [it(G.d1, G.water), it(G.d1, G.urine), it(G.d1, G.dung), it(G.d1s, G.turmeric), it(G.d1s, G.ginger), it(G.d1s, G.hing), it(G.d2, G.tobacco, G.toxMask), it(G.d2, G.chili), it(G.d2, G.garlic), it(G.d3, G.leaf10, G.leaf10Note)],
    dil: { note: "6 a 8 L en 200 L de agua (3 % a 4 %)." },
    steps: ["Añade la orina y el estiércol al agua. Tapa y deja 2 horas.", "Añade la cúrcuma, el jengibre y el asafétida. Revuelve en el sentido de las agujas del reloj, tapa y deja toda la noche.", "A la mañana siguiente añade el tabaco, el chile y el ajo. Revuelve, tapa y deja 24 horas a la sombra.", "Añade las diez pastas de hoja. Revuelve y cubre con un saco.", "Fermenta de 30 a 40 días, revolviendo dos veces al día. Luego filtra con un paño de muselina."],
    tipsTitle: "Conviene saber", tips: ["Puede sustituir al Neemastra, Brahmastra y Agniastra cuando tengas las hojas.", "Sirven diez tipos cualesquiera de hojas repelentes. Evita las que comen tus animales."], safety: S.toxic
  }
};
})();
