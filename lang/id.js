/* Bahasa Indonesia */
(() => {
const G = {
  dry: "Bahan kering", water: "Air", sulfur: "Belerang", clay: "Bubuk tanah liat merah", phyl: "Bubuk filit",
  salt: "Garam laut", naoh: "Soda api (NaOH)", naohS: "Soda api", w0: "Air awal", w1: "Air tambahan",
  exact: "Ukur dengan tepat", afterDissolve: "Ditambahkan setelah belerang larut",
  s1: "Langkah 1: melarutkan", s2: "Langkah 2: mencampur", later: "Setelah itu",
  koh: "Kalium hidroksida (KOH, 90%)", kohS: "Kalium hidroksida", kohNote: "Juga disebut kaustik potas",
  soft: "Air lunak", softNote: "Ukur dengan tepat. Air hujan atau air suling.", canola: "Minyak kanola",
  jwaWater: "Dari versi 10 L. Lihat langkah resmi untuk waktu menambahkannya.",
  ingr: "Bahan", mold: "Humus daun (tanah hutan)", moldNote: "Dari tanah hutan terdekat",
  potato: "Kentang rebus", chlorine: "Air bebas klorin", tapNote: "Diamkan air keran selama 24 jam",
  fill: "Isi wadah", plant: "Bahan tanaman yang dicacah", plantNote: "Diisi longgar, sekitar sepertiga wadah.", rest: "Isi sisanya dengan air",
  drum: "Di dalam drum", fdung: "Kotoran sapi desi segar", urine: "Air kencing sapi desi",
  urineRange: "Sumber menyebut 5 hingga 10 L. Di sini dipakai nilai tengah.", jag: "Jaggery (gula tebu mentah)", besan: "Tepung kacang arab (besan)",
  lime: "Kapur", limeOpt: "Beberapa panduan tidak memakainya", farmSoil: "Tanah dari lahan",
  farmSoilNote: "Dari bawah pohon tua atau pematang sawah. Tanpa bahan kimia.",
  dung: "Kotoran sapi desi", tied: "Diikat dalam kain", limeNight: "Dilarutkan dalam sedikit air semalaman",
  bund: "Tanah pematang sawah", ddung: "Kotoran sapi desi yang sudah kering", dissolved: "Dilarutkan dalam air",
  little: "Sedikit", moisten: "Secukupnya untuk melembapkan kotoran", rootSoil: "Tanah di sekitar akar tanaman", handful: "Segenggam",
  st1: "Tahap 1: 3 hari", st2: "Tahap 2: 15 hari", st3: "Tahap 3: sekitar 30 hari", ghee: "Ghee sapi desi",
  milk: "Susu sapi desi", curd: "Yogurt sapi desi", coco: "Air kelapa muda", banana: "Pisang matang",
  bananaUnit: "buah", bananaNote: "Yang benar-benar matang dan dilumatkan", neem: "Pasta daun nimba (mimba)", pulp: "Atau bubur biji nimba",
  urG: "Air kencing sapi", pastes: "Pasta daun", neemL: "Daun nimba", karanj: "Daun karanj", custard: "Daun srikaya",
  castor: "Daun jarak", datura: "Daun kecubung", toxGlove: "Beracun. Pakai sarung tangan.", tobacco: "Bubuk tembakau",
  toxMask: "Beracun. Pakai sarung tangan dan masker.", chili: "Pasta cabai hijau", garlic: "Pasta bawang putih", turmeric: "Bubuk kunyit",
  d1: "Hari 1: bahan dasar", d1s: "Hari 1: bumbu", d2: "Hari 2", d3: "Hari 3: daun", ginger: "Pasta jahe", hing: "Hing (asafoetida)",
  leaf10: "Pasta daun, 10 jenis", leaf10Note: "Masing-masing 2 kg, misalnya nimba, karanj, srikaya, jarak, dan pepaya"
};
const S = {
  caustic: n => [`${n} menyebabkan luka bakar kimia. Jika dicampur air, akan menjadi sangat panas.`, "Pakai kacamata pelindung, sarung tangan karet, sepatu bot, jaket lengan panjang, dan masker. Bekerjalah di luar ruangan.", "Gunakan wadah plastik tahan panas. Jangan pernah pakai aluminium.", "Jauhkan dari anak-anak dan hewan. Beri label pada setiap wadah."],
  ferment: ["Pakai sarung tangan dan cuci tangan setelah memegangnya.", "Campuran yang sedang difermentasi bisa berbau menyengat. Jauhkan dari rumah.", "Beri label pada setiap wadah dan simpan di luar jangkauan anak-anak."],
  cow: ["Pakai sarung tangan dan cuci tangan dengan bersih setelah memegang kotoran dan air kencing.", "Cuci sayur dan buah dengan bersih sebelum dimakan. Jangan semprotkan menjelang panen.", "Tutup drum dengan kain kasa agar lalat tidak bertelur. Beri label pada setiap wadah dan jauhkan dari anak-anak."],
  toxic: ["Bahan seperti kecubung, tembakau, dan cabai bersifat racun atau iritan. Pakai sarung tangan, masker, dan pelindung mata.", "Rebus dan campur di luar ruangan. Jangan pakai lagi panci ini untuk memasak makanan.", "Jauhkan dari anak-anak dan hewan. Beri label yang jelas pada setiap wadah.", "Cuci hasil panen dengan bersih. Jangan semprotkan menjelang panen."]
};
const it = (g, n, note, x) => Object.assign({ g, n }, note ? { note } : {}, x || {});

UI.id = {
  title: "Kalkulator Pertanian Organik", tagline: "Takaran tepat untuk ukuran batch berapa pun", offline: "Bisa dipakai tanpa internet",
  groups: { jadam: "Resep JADAM", india: "Tradisional India" },
  indiaNote: "Metode pertanian alami yang didokumentasikan oleh NITI Aayog dan universitas pertanian negara bagian India. Menggunakan kotoran dan air kencing sapi lokal (desi).",
  hot: "Air lebih panas dari 27 °C (80 °F)", hotNote: "Disesuaikan untuk air hangat",
  copy: "Salin", share: "Bagikan", copied: "Resep disalin", copyFail: "Gagal menyalin", enterFirst: "Masukkan takaran terlebih dahulu",
  copyAria: "Salin resep", shareAria: "Bagikan resep",
  yourRecipe: "Resep Anda", enterAmount: "Masukkan berapa banyak yang ingin Anda buat.",
  need: (sz, name) => `Anda memerlukan untuk ${sz} ${name}`,
  covers: n => `Ini cukup untuk sekitar ${n} acre.`,
  sprayTitle: "Campuran untuk disemprot", tankHelp: "Ukuran sprayer atau tangki Anda.", tankAria: u => `Ukuran sprayer dalam ${u}`,
  dilution: "Pengenceran", dilAria: "Rasio pengenceran", stronger: "lebih pekat", weaker: "lebih encer", enterTank: "Masukkan ukuran sprayer Anda.",
  conc: name => `${name} pekat`, fillTo: tank => `Lalu tambahkan air hingga ${tank}`,
  batchLine: (a, b, n) => `Batch ${a} Anda menghasilkan sekitar ${b} larutan siap semprot pada pengenceran ${n}×.`,
  method: "Cara membuat", safety: "Keselamatan", source: "Periksa sumbernya",
  feedbackQ: "Menemukan angka yang salah atau punya saran?", feedbackBtn: "Kirim masukan lewat email",
  disclaimer: "Takaran dihitung berdasarkan resep yang dipublikasikan (JADAM, NITI Aayog, TNAU, dan panduan negara bagian). Resep dapat berbeda antar sumber, jadi ukurlah dengan cermat, uji coba pada beberapa tanaman sebelum diterapkan ke seluruh lahan, dan periksa langkah resmi sebelum mencampur. Ini adalah alat tidak resmi dan tidak berafiliasi dengan JADAM atau lembaga pemerintah mana pun. Ini adalah kalkulator, bukan saran keselamatan profesional.",
  recipeFoot: "Takaran dihitung berdasarkan resep yang dipublikasikan. Periksa langkah resmi sebelum mencampur. Pakai sarung tangan dan pelindung mata.",
  units: { kg: "kg", g: "g", lb: "lb", oz: "oz", L: "L", mL: "mL", gal: "gal", floz: "fl oz" }
};

HI_TEXT.id = {
  js: {
    tag: "Belerang", role: "Fungisida dan insektisida", sizeLabel: "Berapa banyak JS yang ingin Anda buat?",
    items: [it(G.dry, G.sulfur), it(G.dry, G.clay), it(G.dry, G.phyl), it(G.dry, G.salt), it(G.dry, G.naoh), it(G.water, G.w0, G.exact), it(G.water, G.w1, G.afterDissolve)],
    dil: { note: "JADAM menyarankan sekitar 100× hingga 1000×." },
    tipsTitle: "Poin penting",
    tips: ["Tambahkan bahan sesuai urutan langkah resmi JADAM (tautan di bawah).", "Anggur, kesemek, kenari, labu, dan tanaman rumah kaca sensitif. Uji dulu pada beberapa daun.", "Gunakan wadah plastik (PE) tahan panas. Jangan pernah pakai aluminium.", "Belerang meleleh saat campuran melewati sekitar 80 °C. Aduk hingga tidak ada gumpalan tersisa di dasar.", "Setelah air tambahan dimasukkan, diamkan satu atau dua hari, lalu saring endapannya.", "Simpan di atas −5 °C (23 °F)."],
    safety: S.caustic(G.naohS)
  },
  jwa: {
    tag: "Perata", role: "Sabun alami yang membantu semprotan menempel", sizeLabel: "Berapa banyak JWA yang ingin Anda buat?",
    items: [it(G.s1, G.koh, G.kohNote), it(G.s1, G.soft, G.softNote), it(G.s2, G.canola), it(G.later, G.water, G.jwaWater)],
    dil: { note: "Rentang yang dipublikasikan sekitar 30× hingga 100×." },
    steps: ["Larutkan KOH dalam air lunak di dalam wadah tertutup dan tahan panas. Akan menjadi sangat panas.", "Tambahkan minyak kanola. Aduk dengan bor listrik selama sekitar 10 menit, hingga terlihat seperti mayones encer. Tidak bisa diaduk dengan tangan.", "Tutup rapat dan diamkan selama 3 hari. Harus mengeras seperti mentega."],
    tipsTitle: "Perlu diketahui",
    tips: ["Gunakan hanya air lunak. Air keran yang keras akan merusaknya.", "Hindari menyemprot di bawah sinar matahari terik. Jangan gunakan pada kacang polong hias, nasturtium, dan pakis yang lembut."],
    safety: S.caustic(G.kohS)
  },
  jms: {
    tag: "Mikroba", role: "Mikroorganisme tanah hidup dari humus daun", sizeLabel: "Berapa banyak air yang ingin Anda kultivasi?",
    items: [it(G.ingr, G.mold, G.moldNote), it(G.ingr, G.potato), it(G.ingr, G.salt), it(G.ingr, G.chlorine, G.tapNote)],
    dil: { note: "Biasanya diencerkan sekitar 10× sebelum digunakan." },
    steps: ["Rebus kentang dan lumatkan. Masukkan bersama humus daun ke dalam kantong jaring.", "Larutkan garam dalam air. Gantung kantong di dalamnya dan remas hingga air menjadi keruh dan cokelat.", "Tutup longgar dan jaga suhu sekitar 18 hingga 25 °C.", "Dalam 1 hingga 3 hari, lapisan busa akan terbentuk di atasnya. Gunakan dalam satu atau dua hari."],
    tipsTitle: "Perlu diketahui", tips: ["JMS tidak bisa disimpan. Buat baru setiap kali."], safety: S.ferment
  },
  jlf: {
    tag: "Pupuk cair", role: "Pupuk tanaman yang difermentasi", sizeLabel: "Berapa besar wadah Anda?",
    items: [it(G.fill, G.plant, G.plantNote), it(G.fill, G.chlorine, G.rest)],
    dil: { note: "JADAM menggunakan sekitar 100×. Lebih encer (200× hingga 500×) untuk bibit." },
    steps: ["Cacah bahan tanaman hingga kecil.", "Isi longgar sekitar sepertiga wadah.", "Isi sisanya dengan air bebas klorin. Tutup longgar.", "Diamkan selama beberapa minggu hingga bulan. Sudah siap saat baunya seperti tanah, bukan busuk.", "Encerkan sebelum digunakan."],
    tipsTitle: "Perlu diketahui", tips: ["Bahan terbaik: sisa dari tanaman yang sama, lalu rumput liar dan gulma."], safety: S.ferment
  },
  jeevamrit: {
    tag: "Penguat tanah", role: "Larutan kotoran dan air kencing yang difermentasi untuk memberi makan mikroba tanah", sizeLabel: "Berapa banyak Jeevamrit yang ingin Anda buat?",
    items: [it(G.drum, G.fdung), it(G.drum, G.urine, G.urineRange), it(G.drum, G.jag), it(G.drum, G.besan), it(G.drum, G.lime, G.limeOpt), it(G.drum, G.farmSoil, G.farmSoilNote), it(G.drum, G.water)],
    coverage: { text: "Dosis umum sekitar 200 L per acre, diberikan setiap 15 hari bersama irigasi." },
    dil: { note: "Untuk disemprot pada daun, praktik di Gujarat menggunakan sekitar 7,5 L dalam 120 L air. Di tanah, digunakan tanpa diencerkan." },
    steps: ["Campurkan semua bahan dengan air dalam drum.", "Diamkan di tempat teduh selama 48 jam. Aduk dengan tongkat kayu setiap pagi dan sore.", "Terapkan setiap dua minggu, disemprotkan pada tanaman atau dicampur ke air irigasi.", "Gunakan dalam sekitar 15 hari."],
    tipsTitle: "Perlu diketahui", tips: ["Gunakan kotoran dan air kencing dari sapi lokal (desi)."], safety: S.cow
  },
  beejamrit: {
    tag: "Perlakuan benih", role: "Lapisan pelindung untuk benih dan akar muda", sizeLabel: "Berapa banyak benih yang ingin Anda olah?",
    titleFn: sz => `Anda memerlukan bahan untuk mengolah ${sz} benih`,
    items: [it(G.ingr, G.dung, G.tied), it(G.ingr, G.urine), it(G.ingr, G.lime, G.limeNight), it(G.ingr, G.bund), it(G.ingr, G.water)],
    use: { title: "Cara menggunakannya", list: ["Lapisi benih dengan tangan menggunakan Beejamrit, keringkan dengan baik di tempat teduh, lalu tanam.", "Untuk kacang-kacangan berkulit tipis, celupkan sebentar lalu keringkan.", "Untuk bibit padi, rendam akar selama 30 menit sebelum dipindah tanam."] },
    steps: ["Ikat kotoran dalam kain dan gantung di air hingga 12 jam.", "Campurkan kapur dengan sedikit air dan diamkan semalaman.", "Keesokan paginya, peras bungkusan kotoran 3 kali dalam air.", "Tambahkan tanah dan aduk. Lalu tambahkan air kencing dan air kapur, aduk lagi."],
    tipsTitle: "Perlu diketahui", tips: ["Buat baru dan gunakan pada hari yang sama."], safety: S.cow
  },
  ghana: {
    tag: "Penguat kering", role: "Bentuk kering dan padat dari Jeevamrit, dicampurkan ke tanah", sizeLabel: "Berapa banyak kotoran kering yang Anda miliki?",
    titleFn: sz => `Anda memerlukan bahan untuk ${sz} kotoran kering`,
    items: [it(G.ingr, G.ddung), it(G.ingr, G.besan), it(G.ingr, G.jag, G.dissolved), it(G.ingr, G.urine, G.moisten, { text: G.little }), it(G.ingr, G.rootSoil, null, { text: G.handful })],
    coverage: { text: "Dosis umum sekitar 100 kg per acre saat tanam. Beberapa panduan negara bagian menggunakan 200 kg sebelum pembajakan terakhir." },
    use: { title: "Cara menggunakannya", list: ["Sebarkan di ladang saat tanam, atau sebagai pupuk susulan di sekitar tanaman.", "Simpan dalam keadaan kering hingga digunakan."] },
    steps: ["Sebarkan kotoran kering dalam lapisan tipis di atas tanah.", "Taburkan sedikit air kencing sapi dan tepung kacang arab.", "Larutkan jaggery dalam air dan taburkan. Tambahkan segenggam tanah.", "Aduk rata dan bentuk menjadi bola-bola kecil (laddu). Keringkan di tempat teduh."],
    tipsTitle: "Perlu diketahui", tips: ["Ghanajeevamrit kering dapat bertahan beberapa bulan, jadi mudah disimpan dan dibawa."], safety: S.cow
  },
  panchagavya: {
    tag: "Tonik pertumbuhan", role: "Campuran lima produk sapi yang difermentasi, disemprotkan pada daun", sizeLabel: "Berapa banyak Panchagavya yang ingin Anda buat? (kira-kira)",
    items: [it(G.st1, G.fdung), it(G.st1, G.ghee), it(G.st2, G.urine), it(G.st2, G.water), it(G.st3, G.milk), it(G.st3, G.curd), it(G.st3, G.coco), it(G.st3, G.jag), it(G.st3, G.banana, G.bananaNote, { unit: G.bananaUnit })],
    dil: { note: "Penyemprotan umum adalah 3 L untuk setiap 100 L air (3%). Gunakan lebih encer, sekitar 2%, pada sayuran daun." },
    steps: ["Campurkan kotoran dan ghee hingga rata. Aduk pagi dan sore selama 3 hari.", "Tambahkan air kencing dan air. Aduk pagi dan sore selama 15 hari.", "Tambahkan susu, yogurt, air kelapa, jaggery, dan pisang yang dilumatkan.", "Aduk dua kali sehari selama sekitar 30 hari, lalu saring dengan kain."],
    tipsTitle: "Perlu diketahui", tips: ["Jaga agar tertutup kain kasa supaya lalat tidak bertelur.", "Saring dengan baik sebelum disemprotkan agar sprayer tidak tersumbat."], safety: S.cow
  },
  neemastra: {
    tag: "Hama pengisap", role: "Semprotan berbahan nimba untuk kutu daun, kutu kebul, dan ulat kecil", sizeLabel: "Berapa banyak Neemastra yang ingin Anda buat?",
    items: [it(G.drum, G.water), it(G.drum, G.urine), it(G.drum, G.dung), it(G.drum, G.neem, G.pulp)],
    dil: { note: "Umumnya sekitar 3,5% hingga 5%. 5 L dalam 100 L air sama dengan 20×." },
    steps: ["Tambahkan air kencing, kotoran, dan pasta nimba ke dalam air.", "Aduk searah jarum jam dengan tongkat panjang. Tutup dengan karung goni dan simpan di tempat teduh, jauh dari matahari dan hujan.", "Aduk setiap pagi dan sore. Siap dalam 48 jam.", "Saring dengan kain muslin sebelum digunakan."],
    tipsTitle: "Perlu diketahui", tips: ["Semprotkan pada sore hari, saat serangga bermanfaat tidak aktif.", "Yang segar paling baik. Dokumen Gujarat menyebutkan bisa bertahan hingga 6 bulan."], safety: S.cow
  },
  brahmastra: {
    tag: "Ulat", role: "Semprotan daun rebus dan air kencing untuk ulat dan penggerek", sizeLabel: "Berapa banyak Brahmastra yang ingin Anda buat?",
    items: [it(G.urG, G.urine), it(G.pastes, G.neemL), it(G.pastes, G.karanj), it(G.pastes, G.custard), it(G.pastes, G.castor), it(G.pastes, G.datura, G.toxGlove)],
    dil: { note: "Untuk semprotan: 2 hingga 3 L dalam 100 L air. Untuk siraman tanah melawan nematoda: 8 L dalam 100 L (12×)." },
    steps: ["Haluskan setiap jenis daun menjadi pasta halus.", "Masukkan air kencing ke dalam wadah dan campurkan semua pasta.", "Rebus dengan api kecil hingga muncul busa satu atau dua kali. Aduk searah jarum jam dan jaga tertutup.", "Setelah busa kedua, matikan api dan biarkan dingin selama 48 jam.", "Saring dengan kain muslin. Simpan dalam wadah di tempat teduh."],
    tipsTitle: "Perlu diketahui", tips: ["Beberapa panduan menggunakan daun lain, seperti pepaya, delima, dan jambu biji.", "Simpan jauh dari matahari. Panduan menyebutkan bisa bertahan hingga 6 bulan."], safety: S.toxic
  },
  agniastra: {
    tag: "Penggerek dan ulat", role: "Semprotan pedas dari nimba, cabai, dan bawang putih untuk penggerek dan ulat", sizeLabel: "Berapa banyak Agniastra yang ingin Anda buat?",
    items: [it(G.ingr, G.urine), it(G.ingr, G.neem), it(G.ingr, G.tobacco, G.toxMask), it(G.ingr, G.chili), it(G.ingr, G.garlic), it(G.ingr, G.turmeric)],
    dil: { note: "6 hingga 8 L dalam 200 L air (25× hingga 33×). Gunakan campuran yang lebih pekat untuk serangan berat." },
    steps: ["Campurkan semua bahan ke dalam air kencing dan aduk searah jarum jam.", "Tutup dan rebus hingga berbusa.", "Angkat dari api dan diamkan di tempat teduh selama 48 jam. Aduk dua kali sehari.", "Saring dengan kain muslin. Tahan sekitar 3 bulan."],
    tipsTitle: "Perlu diketahui", tips: ["Gunakan untuk melawan penggerek dan ulat pada batang dan buah."], safety: S.toxic
  },
  dashaparni: {
    tag: "Segala hama", role: "Ekstrak fermentasi sepuluh jenis daun untuk banyak hama dan penyakit", sizeLabel: "Berapa banyak Dashaparni yang ingin Anda buat?",
    items: [it(G.d1, G.water), it(G.d1, G.urine), it(G.d1, G.dung), it(G.d1s, G.turmeric), it(G.d1s, G.ginger), it(G.d1s, G.hing), it(G.d2, G.tobacco, G.toxMask), it(G.d2, G.chili), it(G.d2, G.garlic), it(G.d3, G.leaf10, G.leaf10Note)],
    dil: { note: "6 hingga 8 L dalam 200 L air (3% hingga 4%)." },
    steps: ["Tambahkan air kencing dan kotoran ke dalam air. Tutup dan diamkan 2 jam.", "Tambahkan kunyit, jahe, dan hing. Aduk searah jarum jam, tutup, dan diamkan semalaman.", "Keesokan paginya tambahkan tembakau, cabai, dan bawang putih. Aduk, tutup, dan diamkan 24 jam di tempat teduh.", "Tambahkan sepuluh pasta daun. Aduk dan tutup dengan karung goni.", "Fermentasi selama 30 hingga 40 hari sambil diaduk dua kali sehari. Lalu saring dengan kain muslin."],
    tipsTitle: "Perlu diketahui", tips: ["Bisa menggantikan Neemastra, Brahmastra, dan Agniastra jika Anda memiliki daunnya.", "Bisa menggunakan sepuluh jenis daun pengusir hama apa pun. Hindari daun yang dimakan hewan ternak Anda."], safety: S.toxic
  }
};
})();
