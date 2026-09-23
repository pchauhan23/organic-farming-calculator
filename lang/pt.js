/* Português (Brasil) */
(() => {
const G = {
  dry: "Ingredientes secos", water: "Água", sulfur: "Enxofre", clay: "Argila vermelha em pó", phyl: "Filito em pó",
  salt: "Sal marinho", naoh: "Soda cáustica (NaOH)", naohS: "A soda cáustica", w0: "Água inicial", w1: "Água para completar",
  exact: "Meça com exatidão", afterDissolve: "Adicionada depois que o enxofre se dissolver",
  s1: "Passo 1: dissolver", s2: "Passo 2: misturar", later: "Depois",
  koh: "Hidróxido de potássio (KOH, 90%)", kohS: "O hidróxido de potássio", kohNote: "Também chamado de potassa cáustica",
  soft: "Água mole", softNote: "Meça com exatidão. Água da chuva ou destilada.", canola: "Óleo de canola",
  jwaWater: "Da versão de 10 L. Veja nos passos oficiais quando adicionar.",
  ingr: "Ingredientes", mold: "Terra de folhas (serapilheira decomposta)", moldNote: "Do chão de uma mata próxima",
  potato: "Batata cozida", chlorine: "Água sem cloro", tapNote: "Deixe a água da torneira descansar 24 horas",
  fill: "Encha o recipiente", plant: "Material vegetal picado", plantNote: "Solto. Cerca de um terço do recipiente.", rest: "Complete com o resto",
  drum: "No tambor", fdung: "Esterco fresco de vaca desi", urine: "Urina de vaca desi",
  urineRange: "As fontes dizem de 5 a 10 L. Aqui usa-se o valor do meio.", jag: "Jaggery (açúcar mascavo bruto)", besan: "Farinha de grão-de-bico (besan)",
  lime: "Cal", limeOpt: "Alguns guias não usam", farmSoil: "Terra da propriedade",
  farmSoilNote: "De baixo de uma árvore velha ou da borda do campo. Sem químicos.",
  dung: "Esterco de vaca desi", tied: "Amarrado em um pano", limeNight: "Dissolvida em um pouco de água durante a noite",
  bund: "Terra da borda do campo", ddung: "Esterco de vaca desi bem seco", dissolved: "Dissolvido em água",
  little: "Um pouco", moisten: "Só o suficiente para umedecer o esterco", rootSoil: "Terra de perto das raízes", handful: "Um punhado",
  st1: "Etapa 1: 3 dias", st2: "Etapa 2: 15 dias", st3: "Etapa 3: cerca de 30 dias", ghee: "Ghee de vaca desi",
  milk: "Leite de vaca desi", curd: "Iogurte de vaca desi", coco: "Água de coco verde", banana: "Bananas maduras",
  bananaUnit: "bananas", bananaNote: "Bem maduras e amassadas", neem: "Pasta de folhas de nim", pulp: "Ou polpa de sementes de nim",
  urG: "Urina de vaca", pastes: "Pastas de folhas", neemL: "Folhas de nim", karanj: "Folhas de karanj", custard: "Folhas de fruta-do-conde",
  castor: "Folhas de mamona", datura: "Folhas de datura (trombeta)", toxGlove: "Venenoso. Use luvas.", tobacco: "Tabaco em pó",
  toxMask: "Venenoso. Use luvas e máscara.", chili: "Pasta de pimenta verde", garlic: "Pasta de alho", turmeric: "Cúrcuma em pó",
  d1: "Dia 1: a base", d1s: "Dia 1: temperos", d2: "Dia 2", d3: "Dia 3: folhas", ginger: "Pasta de gengibre", hing: "Asafétida (hing)",
  leaf10: "Pasta de folhas, 10 tipos", leaf10Note: "2 kg de cada tipo, como nim, karanj, fruta-do-conde, mamona e mamão"
};
const S = {
  caustic: n => [`${n} causa queimaduras químicas. Ao misturar com água, esquenta muito.`, "Use óculos de proteção, luvas de borracha, botas, camisa de manga comprida e máscara. Trabalhe ao ar livre.", "Use recipientes de plástico resistentes ao calor. Nunca de alumínio.", "Mantenha crianças e animais longe. Identifique cada recipiente."],
  ferment: ["Use luvas e lave as mãos depois de manusear.", "Misturas em fermentação podem cheirar forte. Mantenha longe de casa.", "Identifique cada recipiente e guarde fora do alcance das crianças."],
  cow: ["Use luvas e lave bem as mãos depois de tocar em esterco e urina.", "Lave bem verduras e frutas antes de comer. Não aplique perto da colheita.", "Cubra os tambores com tela para as moscas não porem ovos. Identifique cada recipiente e mantenha longe das crianças."],
  toxic: ["Ingredientes como datura, tabaco e pimenta são venenosos ou irritantes. Use luvas, máscara e proteção para os olhos.", "Ferva e misture ao ar livre. Não use essas panelas na cozinha depois.", "Mantenha longe de crianças e animais. Identifique cada recipiente com clareza.", "Lave bem os produtos. Não aplique perto da colheita."]
};
const it = (g, n, note, x) => Object.assign({ g, n }, note ? { note } : {}, x || {});

UI.pt = {
  title: "Calculadora de agricultura orgânica", tagline: "Quantidades exatas para qualquer tamanho de lote", offline: "Funciona sem internet",
  groups: { jadam: "Receitas JADAM", india: "Tradicional da Índia" },
  indiaNote: "Métodos de agricultura natural documentados pelo NITI Aayog e por universidades agrícolas da Índia. Usam esterco e urina de vacas nativas (desi).",
  hot: "A água está acima de 27 °C (80 °F)", hotNote: "Ajustado para água quente",
  copy: "Copiar", share: "Compartilhar", copied: "Receita copiada", copyFail: "Não foi possível copiar", enterFirst: "Digite uma quantidade primeiro",
  copyAria: "Copiar receita", shareAria: "Compartilhar receita",
  yourRecipe: "Sua receita", enterAmount: "Digite quanto você quer preparar.",
  need: (sz, name) => `Você precisa para ${sz} de ${name}`,
  covers: (n, a) => `Dá para cerca de ${n} acre${a === 1 ? "" : "s"}.`,
  sprayTitle: "Mistura para pulverizar", tankHelp: "Tamanho do seu pulverizador ou tanque.", tankAria: u => `Tamanho do pulverizador em ${u}`,
  dilution: "Diluição", dilAria: "Proporção de diluição", stronger: "mais forte", weaker: "mais fraca", enterTank: "Digite o tamanho do seu pulverizador.",
  conc: name => `${name} concentrado`, fillTo: tank => `Depois complete com água até ${tank}`,
  batchLine: (a, b, n) => `Seu lote de ${a} rende cerca de ${b} de calda pronta para aplicar a ${n}×.`,
  method: "Modo de preparo", safety: "Segurança", source: "Confira a fonte",
  feedbackQ: "Encontrou um número errado ou tem uma ideia?", feedbackBtn: "Enviar sugestão por e-mail",
  disclaimer: "As quantidades são calculadas a partir de receitas publicadas (JADAM, NITI Aayog, TNAU e guias estaduais). As receitas variam conforme a fonte: meça com cuidado, teste em algumas plantas antes de tratar toda a lavoura e confira os passos oficiais antes de misturar. Esta é uma ferramenta não oficial e não é afiliada à JADAM nem a qualquer órgão do governo. É uma calculadora, não um conselho profissional de segurança.",
  recipeFoot: "Quantidades calculadas a partir de receitas publicadas. Confira os passos oficiais antes de misturar. Use luvas e proteção para os olhos.",
  units: { kg: "kg", g: "g", lb: "lb", oz: "oz", L: "L", mL: "mL", gal: "gal", floz: "fl oz" }
};

HI_TEXT.pt = {
  js: {
    tag: "Enxofre", role: "Fungicida e inseticida", sizeLabel: "Quanto de JS você quer preparar?",
    items: [it(G.dry, G.sulfur), it(G.dry, G.clay), it(G.dry, G.phyl), it(G.dry, G.salt), it(G.dry, G.naoh), it(G.water, G.w0, G.exact), it(G.water, G.w1, G.afterDissolve)],
    dil: { note: "A JADAM sugere cerca de 100× a 1000×." },
    tipsTitle: "Pontos principais",
    tips: ["Adicione os ingredientes na ordem exata dos passos oficiais da JADAM (link abaixo).", "Uva, caqui, nozes, abóbora e culturas de estufa são sensíveis. Teste primeiro em algumas folhas.", "Use um recipiente de plástico (PE) resistente ao calor. Nunca de alumínio.", "O enxofre derrete quando a mistura passa de cerca de 80 °C. Mexa até não sobrarem grumos no fundo.", "Depois da água final, deixe assentar por um ou dois dias e então filtre o sedimento.", "Guarde acima de −5 °C (23 °F)."],
    safety: S.caustic(G.naohS)
  },
  jwa: {
    tag: "Espalhante", role: "Sabão natural que ajuda a calda a aderir", sizeLabel: "Quanto de JWA você quer preparar?",
    items: [it(G.s1, G.koh, G.kohNote), it(G.s1, G.soft, G.softNote), it(G.s2, G.canola), it(G.later, G.water, G.jwaWater)],
    dil: { note: "A faixa publicada é de cerca de 30× a 100×." },
    steps: ["Dissolva o KOH na água mole dentro de um recipiente fechado e resistente ao calor. Ele esquenta muito.", "Adicione o óleo de canola. Misture com uma furadeira elétrica por cerca de 10 minutos, até ficar com aspecto de maionese rala. À mão não funciona.", "Feche a tampa e deixe descansar 3 dias. Deve firmar como manteiga."],
    tipsTitle: "Bom saber",
    tips: ["Use apenas água mole. Água dura da torneira estraga o produto.", "Evite aplicar sob sol forte. Não use em ervilha-de-cheiro, capuchinha e samambaias delicadas."],
    safety: S.caustic(G.kohS)
  },
  jms: {
    tag: "Microbiano", role: "Microrganismos vivos do solo a partir de terra de folhas", sizeLabel: "Quanta água você quer cultivar?",
    items: [it(G.ingr, G.mold, G.moldNote), it(G.ingr, G.potato), it(G.ingr, G.salt), it(G.ingr, G.chlorine, G.tapNote)],
    dil: { note: "Costuma ser diluído cerca de 10× antes do uso." },
    steps: ["Cozinhe a batata e amasse. Coloque-a com a terra de folhas em um saco de tela.", "Dissolva o sal na água. Pendure o saco e amasse até a água ficar turva e marrom.", "Cubra sem apertar e mantenha entre 18 e 25 °C.", "Em 1 a 3 dias forma-se uma camada de espuma. Use em um ou dois dias."],
    tipsTitle: "Bom saber", tips: ["O JMS não se guarda. Faça fresco a cada vez."], safety: S.ferment
  },
  jlf: {
    tag: "Adubo líquido", role: "Adubo vegetal fermentado", sizeLabel: "Qual o tamanho do seu recipiente?",
    items: [it(G.fill, G.plant, G.plantNote), it(G.fill, G.chlorine, G.rest)],
    dil: { note: "A JADAM usa cerca de 100×. Mais fraco (200× a 500×) para mudas." },
    steps: ["Pique bem o material vegetal.", "Encha cerca de um terço do recipiente, sem apertar.", "Complete com água sem cloro. Cubra sem apertar.", "Deixe de semanas a meses. Está pronto quando cheira a terra, e não a podre.", "Dilua antes de usar."],
    tipsTitle: "Bom saber", tips: ["Melhor material: restos da mesma cultura, depois capim e mato."], safety: S.ferment
  },
  jeevamrit: {
    tag: "Estimulante do solo", role: "Fermentado de esterco e urina que alimenta os microrganismos do solo", sizeLabel: "Quanto de Jeevamrit você quer preparar?",
    items: [it(G.drum, G.fdung), it(G.drum, G.urine, G.urineRange), it(G.drum, G.jag), it(G.drum, G.besan), it(G.drum, G.lime, G.limeOpt), it(G.drum, G.farmSoil, G.farmSoilNote), it(G.drum, G.water)],
    coverage: { text: "A dose usual é de cerca de 200 L por acre, a cada 15 dias, junto com a irrigação." },
    dil: { note: "Para aplicar nas folhas, as práticas de Gujarat usam cerca de 7,5 L em 120 L de água. No solo, usa-se sem diluir." },
    steps: ["Misture tudo com a água em um tambor.", "Deixe à sombra por 48 horas. Mexa com uma vara de madeira toda manhã e toda tarde.", "Aplique a cada quinzena, pulverizado na cultura ou misturado à água de irrigação.", "Use em até cerca de 15 dias."],
    tipsTitle: "Bom saber", tips: ["Use esterco e urina de vacas nativas (desi)."], safety: S.cow
  },
  beejamrit: {
    tag: "Tratamento de sementes", role: "Revestimento que protege sementes e raízes jovens", sizeLabel: "Quantas sementes você quer tratar?",
    titleFn: sz => `Você precisa para tratar ${sz} de sementes`,
    items: [it(G.ingr, G.dung, G.tied), it(G.ingr, G.urine), it(G.ingr, G.lime, G.limeNight), it(G.ingr, G.bund), it(G.ingr, G.water)],
    use: { title: "Como usar", list: ["Cubra as sementes à mão com Beejamrit, seque bem à sombra e plante.", "Em leguminosas de casca fina, mergulhe rapidamente e deixe secar.", "Em mudas de arroz, mergulhe as raízes por 30 minutos antes do transplante."] },
    steps: ["Amarre o esterco em um pano e pendure na água por até 12 horas.", "Misture a cal em um pouco de água e deixe durante a noite.", "Na manhã seguinte, esprema a trouxa de esterco 3 vezes na água.", "Adicione a terra e mexa. Depois adicione a urina e a água de cal e mexa de novo."],
    tipsTitle: "Bom saber", tips: ["Prepare fresco e use no mesmo dia."], safety: S.cow
  },
  ghana: {
    tag: "Estimulante seco", role: "Forma seca e sólida do Jeevamrit, misturada ao solo", sizeLabel: "Quanto esterco seco você tem?",
    titleFn: sz => `Você precisa para ${sz} de esterco seco`,
    items: [it(G.ingr, G.ddung), it(G.ingr, G.besan), it(G.ingr, G.jag, G.dissolved), it(G.ingr, G.urine, G.moisten, { text: G.little }), it(G.ingr, G.rootSoil, null, { text: G.handful })],
    coverage: { text: "A dose usual é de cerca de 100 kg por acre no plantio. Alguns guias estaduais usam 200 kg antes da última aração." },
    use: { title: "Como usar", list: ["Espalhe no campo no plantio, ou em cobertura ao redor das plantas.", "Mantenha seco até usar."] },
    steps: ["Espalhe o esterco seco em uma camada fina no chão.", "Salpique um pouco de urina de vaca e a farinha de grão-de-bico.", "Dissolva o jaggery em água e borrife por cima. Adicione um punhado de terra.", "Misture bem e faça bolinhas (laddus). Seque à sombra."],
    tipsTitle: "Bom saber", tips: ["O Ghanajeevamrit seco dura alguns meses, então é fácil de guardar e transportar."], safety: S.cow
  },
  panchagavya: {
    tag: "Tônico de crescimento", role: "Mistura fermentada de cinco produtos da vaca, aplicada nas folhas", sizeLabel: "Quanto de Panchagavya você quer preparar? (aprox.)",
    items: [it(G.st1, G.fdung), it(G.st1, G.ghee), it(G.st2, G.urine), it(G.st2, G.water), it(G.st3, G.milk), it(G.st3, G.curd), it(G.st3, G.coco), it(G.st3, G.jag), it(G.st3, G.banana, G.bananaNote, { unit: G.bananaUnit })],
    dil: { note: "A aplicação usual é de 3 L para cada 100 L de água (3%). Use mais fraco, cerca de 2%, em folhosas." },
    steps: ["Misture bem o esterco e o ghee. Mexa de manhã e à tarde por 3 dias.", "Adicione a urina e a água. Mexa de manhã e à tarde por 15 dias.", "Adicione o leite, o iogurte, a água de coco, o jaggery e as bananas amassadas.", "Mexa duas vezes ao dia por cerca de 30 dias e depois coe em um pano."],
    tipsTitle: "Bom saber", tips: ["Mantenha coberto com tela para as moscas não porem ovos.", "Coe bem antes de aplicar para não entupir o pulverizador."], safety: S.cow
  },
  neemastra: {
    tag: "Pragas sugadoras", role: "Calda de nim para pulgões, mosca-branca e lagartas pequenas", sizeLabel: "Quanto de Neemastra você quer preparar?",
    items: [it(G.drum, G.water), it(G.drum, G.urine), it(G.drum, G.dung), it(G.drum, G.neem, G.pulp)],
    dil: { note: "O comum é de 3,5% a 5%. 5 L por 100 L de água equivalem a 20×." },
    steps: ["Adicione a urina, o esterco e a pasta de nim à água.", "Mexa no sentido horário com uma vara comprida. Cubra com um saco e deixe à sombra, longe do sol e da chuva.", "Mexa toda manhã e toda tarde. Fica pronto em 48 horas.", "Coe em um pano fino antes de usar."],
    tipsTitle: "Bom saber", tips: ["Aplique no fim da tarde, quando os insetos benéficos não estão ativos.", "O melhor é usar fresco. O documento de Gujarat diz que dura até 6 meses."], safety: S.cow
  },
  brahmastra: {
    tag: "Lagartas", role: "Calda de folhas fervidas e urina para lagartas e brocas", sizeLabel: "Quanto de Brahmastra você quer preparar?",
    items: [it(G.urG, G.urine), it(G.pastes, G.neemL), it(G.pastes, G.karanj), it(G.pastes, G.custard), it(G.pastes, G.castor), it(G.pastes, G.datura, G.toxGlove)],
    dil: { note: "Nas folhas: 2 a 3 L por 100 L de água. Para o solo contra nematoides: 8 L por 100 L (12×)." },
    steps: ["Triture cada tipo de folha até virar uma pasta fina.", "Coloque a urina em um recipiente e misture todas as pastas.", "Ferva em fogo baixo até subirem uma ou duas espumas. Mexa no sentido horário e mantenha tampado.", "Depois da segunda espuma, desligue e deixe esfriar por 48 horas.", "Coe em um pano fino. Guarde em um recipiente à sombra."],
    tipsTitle: "Bom saber", tips: ["Alguns guias usam outras folhas, como mamão, romã e goiaba.", "Guarde longe do sol. Os guias dizem que dura até 6 meses."], safety: S.toxic
  },
  agniastra: {
    tag: "Brocas e lagartas", role: "Calda picante de nim, pimenta e alho para brocas e lagartas", sizeLabel: "Quanto de Agniastra você quer preparar?",
    items: [it(G.ingr, G.urine), it(G.ingr, G.neem), it(G.ingr, G.tobacco, G.toxMask), it(G.ingr, G.chili), it(G.ingr, G.garlic), it(G.ingr, G.turmeric)],
    dil: { note: "6 a 8 L em 200 L de água (25× a 33×). Use a mistura mais forte em ataques mais graves." },
    steps: ["Misture tudo na urina e mexa no sentido horário.", "Tampe e ferva até formar espuma.", "Tire do fogo e deixe à sombra por 48 horas. Mexa duas vezes ao dia.", "Coe em um pano fino. Dura cerca de 3 meses."],
    tipsTitle: "Bom saber", tips: ["Use contra brocas e lagartas em caules e frutos."], safety: S.toxic
  },
  dashaparni: {
    tag: "Todas as pragas", role: "Extrato fermentado de dez folhas para muitas pragas e doenças", sizeLabel: "Quanto de Dashaparni você quer preparar?",
    items: [it(G.d1, G.water), it(G.d1, G.urine), it(G.d1, G.dung), it(G.d1s, G.turmeric), it(G.d1s, G.ginger), it(G.d1s, G.hing), it(G.d2, G.tobacco, G.toxMask), it(G.d2, G.chili), it(G.d2, G.garlic), it(G.d3, G.leaf10, G.leaf10Note)],
    dil: { note: "6 a 8 L em 200 L de água (3% a 4%)." },
    steps: ["Adicione a urina e o esterco à água. Tampe e deixe 2 horas.", "Adicione a cúrcuma, o gengibre e a asafétida. Mexa no sentido horário, tampe e deixe durante a noite.", "Na manhã seguinte adicione o tabaco, a pimenta e o alho. Mexa, tampe e deixe 24 horas à sombra.", "Adicione as dez pastas de folhas. Mexa e cubra com um saco.", "Fermente de 30 a 40 dias, mexendo duas vezes ao dia. Depois coe em um pano fino."],
    tipsTitle: "Bom saber", tips: ["Pode substituir o Neemastra, o Brahmastra e o Agniastra quando você tiver as folhas.", "Servem dez tipos quaisquer de folhas repelentes. Evite as que seus animais comem."], safety: S.toxic
  }
};
})();
