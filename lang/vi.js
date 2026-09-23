/* Tiếng Việt */
(() => {
const G = {
  dry: "Nguyên liệu khô", water: "Nước", sulfur: "Lưu huỳnh", clay: "Bột đất sét đỏ", phyl: "Bột phyllite",
  salt: "Muối biển", naoh: "Xút ăn da (NaOH)", naohS: "Xút ăn da", w0: "Nước ban đầu", w1: "Nước thêm sau",
  exact: "Đo thật chính xác", afterDissolve: "Thêm vào sau khi lưu huỳnh đã tan",
  s1: "Bước 1: hòa tan", s2: "Bước 2: trộn", later: "Sau đó",
  koh: "Kali hydroxit (KOH, 90%)", kohS: "Kali hydroxit", kohNote: "Còn gọi là kali ăn da",
  soft: "Nước mềm", softNote: "Đo thật chính xác. Dùng nước mưa hoặc nước cất.", canola: "Dầu hạt cải (canola)",
  jwaWater: "Theo công thức bản 10 L. Xem các bước chính thức để biết thời điểm thêm vào.",
  ingr: "Nguyên liệu", mold: "Đất mùn lá (đất rừng mục)", moldNote: "Lấy từ đất rừng gần đó",
  potato: "Khoai tây luộc", chlorine: "Nước không có clo", tapNote: "Để nước máy lắng 24 giờ",
  fill: "Đổ đầy vật chứa", plant: "Nguyên liệu thực vật băm nhỏ", plantNote: "Đổ lỏng tay, khoảng một phần ba vật chứa.", rest: "Đổ phần còn lại bằng nước",
  drum: "Trong thùng", fdung: "Phân bò desi tươi", urine: "Nước tiểu bò desi",
  urineRange: "Các nguồn cho biết từ 5 đến 10 L. Ở đây dùng mức trung bình.", jag: "Đường thốt nốt thô (jaggery)", besan: "Bột đậu gà (besan)",
  lime: "Vôi", limeOpt: "Một số hướng dẫn bỏ qua thành phần này", farmSoil: "Đất trong trang trại",
  farmSoilNote: "Lấy dưới gốc cây già hoặc bờ ruộng. Không có hóa chất.",
  dung: "Phân bò desi", tied: "Buộc trong một miếng vải", limeNight: "Hòa trong một ít nước để qua đêm",
  bund: "Đất bờ ruộng", ddung: "Phân bò desi đã phơi khô kỹ", dissolved: "Hòa tan trong nước",
  little: "Một ít", moisten: "Chỉ vừa đủ làm ẩm phân", rootSoil: "Đất quanh gốc rễ cây", handful: "Một nắm",
  st1: "Giai đoạn 1: 3 ngày", st2: "Giai đoạn 2: 15 ngày", st3: "Giai đoạn 3: khoảng 30 ngày", ghee: "Bơ ghee bò desi",
  milk: "Sữa bò desi", curd: "Sữa chua bò desi", coco: "Nước dừa non", banana: "Chuối chín",
  bananaUnit: "quả", bananaNote: "Thật chín và nghiền nhuyễn", neem: "Hỗn hợp lá neem", pulp: "Hoặc thịt hạt neem",
  urG: "Nước tiểu bò", pastes: "Hỗn hợp lá", neemL: "Lá neem", karanj: "Lá karanj", custard: "Lá mãng cầu ta",
  castor: "Lá thầu dầu", datura: "Lá cà độc dược", toxGlove: "Có độc. Hãy đeo găng tay.", tobacco: "Bột thuốc lá",
  toxMask: "Có độc. Hãy đeo găng tay và khẩu trang.", chili: "Hỗn hợp ớt xanh", garlic: "Hỗn hợp tỏi", turmeric: "Bột nghệ",
  d1: "Ngày 1: phần nền", d1s: "Ngày 1: gia vị", d2: "Ngày 2", d3: "Ngày 3: lá", ginger: "Hỗn hợp gừng", hing: "Nhựa hing (asafoetida)",
  leaf10: "Hỗn hợp 10 loại lá", leaf10Note: "Mỗi loại 2 kg, ví dụ neem, karanj, mãng cầu ta, thầu dầu và đu đủ"
};
const S = {
  caustic: n => [`${n} gây bỏng hóa chất. Khi trộn với nước sẽ trở nên rất nóng.`, "Đeo kính bảo hộ, găng tay cao su, ủng, áo khoác dài tay và khẩu trang. Làm việc ngoài trời.", "Dùng vật chứa nhựa chịu nhiệt. Không bao giờ dùng nhôm.", "Để xa tầm tay trẻ em và vật nuôi. Dán nhãn cho mọi vật chứa."],
  ferment: ["Đeo găng tay và rửa tay sau khi sử dụng.", "Hỗn hợp đang lên men có thể có mùi nồng. Để xa nhà ở.", "Dán nhãn cho mọi vật chứa và cất ngoài tầm với của trẻ em."],
  cow: ["Đeo găng tay và rửa tay thật sạch sau khi chạm vào phân và nước tiểu.", "Rửa sạch rau củ và trái cây trước khi ăn. Không phun gần ngày thu hoạch.", "Đậy thùng bằng lưới để ruồi không đẻ trứng. Dán nhãn cho mọi vật chứa và để xa trẻ em."],
  toxic: ["Các nguyên liệu như cà độc dược, thuốc lá và ớt có độc hoặc gây kích ứng. Đeo găng tay, khẩu trang và bảo vệ mắt.", "Đun sôi và trộn ngoài trời. Không dùng lại những nồi này trong bếp.", "Để xa tầm tay trẻ em và vật nuôi. Dán nhãn rõ ràng cho mọi vật chứa.", "Rửa sạch nông sản. Không phun gần ngày thu hoạch."]
};
const it = (g, n, note, x) => Object.assign({ g, n }, note ? { note } : {}, x || {});

UI.vi = {
  title: "Máy tính nông nghiệp hữu cơ", tagline: "Định lượng chính xác cho mọi mẻ", offline: "Hoạt động không cần internet",
  groups: { jadam: "Công thức JADAM", india: "Phương pháp truyền thống Ấn Độ" },
  indiaNote: "Các phương pháp canh tác tự nhiên được NITI Aayog và các trường đại học nông nghiệp của Ấn Độ ghi lại. Sử dụng phân và nước tiểu của bò bản địa (desi).",
  hot: "Nước ấm hơn 27 °C (80 °F)", hotNote: "Đã điều chỉnh cho nước ấm",
  copy: "Sao chép", share: "Chia sẻ", copied: "Đã sao chép công thức", copyFail: "Không sao chép được", enterFirst: "Hãy nhập số lượng trước",
  copyAria: "Sao chép công thức", shareAria: "Chia sẻ công thức",
  yourRecipe: "Công thức của bạn", enterAmount: "Nhập số lượng bạn muốn pha chế.",
  need: (sz, name) => `Bạn cần cho ${sz} ${name}`,
  covers: n => `Lượng này đủ dùng cho khoảng ${n} mẫu Anh (acre).`,
  sprayTitle: "Pha để phun", tankHelp: "Dung tích bình phun hoặc bồn của bạn.", tankAria: u => `Dung tích bình phun (${u})`,
  dilution: "Tỷ lệ pha loãng", dilAria: "Tỷ lệ pha loãng", stronger: "đặc hơn", weaker: "loãng hơn", enterTank: "Nhập dung tích bình phun của bạn.",
  conc: name => `${name} đậm đặc`, fillTo: tank => `Sau đó thêm nước đến ${tank}`,
  batchLine: (a, b, n) => `Mẻ ${a} của bạn cho ra khoảng ${b} dung dịch sẵn sàng để phun ở tỷ lệ ${n}×.`,
  method: "Cách pha chế", safety: "An toàn", source: "Kiểm tra nguồn",
  feedbackQ: "Bạn thấy số liệu sai hoặc có ý tưởng gì?", feedbackBtn: "Gửi góp ý qua email",
  disclaimer: "Các định lượng được tính toán dựa trên công thức đã công bố (JADAM, NITI Aayog, TNAU và hướng dẫn của các bang). Công thức có thể khác nhau giữa các nguồn, vì vậy hãy đo lường cẩn thận, thử nghiệm trên vài cây trước khi xử lý toàn bộ vụ mùa, và kiểm tra các bước chính thức trước khi pha trộn. Đây là công cụ không chính thức, không liên kết với JADAM hay bất kỳ cơ quan nhà nước nào. Đây là công cụ tính toán, không phải lời khuyên an toàn chuyên nghiệp.",
  recipeFoot: "Định lượng được tính toán dựa trên công thức đã công bố. Kiểm tra các bước chính thức trước khi pha trộn. Đeo găng tay và bảo vệ mắt.",
  units: { kg: "kg", g: "g", lb: "lb", oz: "oz", L: "L", mL: "mL", gal: "gal", floz: "fl oz" }
};

HI_TEXT.vi = {
  js: {
    tag: "Lưu huỳnh", role: "Thuốc trừ nấm kiêm trừ sâu", sizeLabel: "Bạn muốn pha chế bao nhiêu JS?",
    items: [it(G.dry, G.sulfur), it(G.dry, G.clay), it(G.dry, G.phyl), it(G.dry, G.salt), it(G.dry, G.naoh), it(G.water, G.w0, G.exact), it(G.water, G.w1, G.afterDissolve)],
    dil: { note: "JADAM đề xuất khoảng 100× đến 1000×." },
    tipsTitle: "Điểm quan trọng",
    tips: ["Thêm nguyên liệu đúng theo thứ tự trong các bước chính thức của JADAM (liên kết bên dưới).", "Nho, hồng, óc chó, bí và cây trồng trong nhà kính khá nhạy cảm. Hãy thử trên vài lá trước.", "Dùng vật chứa nhựa (PE) chịu nhiệt. Không bao giờ dùng nhôm.", "Lưu huỳnh tan chảy khi hỗn hợp vượt quá khoảng 80 °C. Khuấy cho đến khi không còn vón cục dưới đáy.", "Sau khi thêm nước, để lắng một hoặc hai ngày, sau đó lọc bỏ cặn.", "Bảo quản ở nhiệt độ trên −5 °C (23 °F)."],
    safety: S.caustic(G.naohS)
  },
  jwa: {
    tag: "Chất bám dính", role: "Xà phòng tự nhiên giúp dung dịch phun bám dính tốt hơn", sizeLabel: "Bạn muốn pha chế bao nhiêu JWA?",
    items: [it(G.s1, G.koh, G.kohNote), it(G.s1, G.soft, G.softNote), it(G.s2, G.canola), it(G.later, G.water, G.jwaWater)],
    dil: { note: "Phạm vi được công bố khoảng 30× đến 100×." },
    steps: ["Hòa tan KOH trong nước mềm trong vật chứa kín, chịu nhiệt. Sẽ trở nên rất nóng.", "Thêm dầu hạt cải. Khuấy bằng máy khoan điện khoảng 10 phút cho đến khi trông giống sốt mayonnaise loãng. Khuấy tay sẽ không được.", "Đậy nắp và để yên 3 ngày. Hỗn hợp phải đông đặc như bơ."],
    tipsTitle: "Điều nên biết",
    tips: ["Chỉ dùng nước mềm. Nước máy cứng sẽ làm hỏng hỗn hợp.", "Tránh phun dưới nắng gắt. Không dùng cho đậu hương, sen cạn và dương xỉ mỏng manh."],
    safety: S.caustic(G.kohS)
  },
  jms: {
    tag: "Vi sinh", role: "Vi sinh vật đất sống được nuôi cấy từ mùn lá", sizeLabel: "Bạn muốn nuôi cấy bao nhiêu nước?",
    items: [it(G.ingr, G.mold, G.moldNote), it(G.ingr, G.potato), it(G.ingr, G.salt), it(G.ingr, G.chlorine, G.tapNote)],
    dil: { note: "Thường được pha loãng khoảng 10× trước khi dùng." },
    steps: ["Luộc khoai tây và nghiền nhuyễn. Cho vào túi lưới cùng với mùn lá.", "Hòa tan muối trong nước. Treo túi vào và nhào cho đến khi nước đục và ngả nâu.", "Đậy lỏng và giữ ở khoảng 18 đến 25 °C.", "Sau 1 đến 3 ngày sẽ hình thành một lớp bọt trên bề mặt. Dùng trong vòng một hoặc hai ngày."],
    tipsTitle: "Điều nên biết", tips: ["JMS không bảo quản được. Mỗi lần hãy pha mới."], safety: S.ferment
  },
  jlf: {
    tag: "Phân bón lỏng", role: "Phân bón thực vật lên men", sizeLabel: "Vật chứa của bạn to cỡ nào?",
    items: [it(G.fill, G.plant, G.plantNote), it(G.fill, G.chlorine, G.rest)],
    dil: { note: "JADAM dùng khoảng 100×. Pha loãng hơn (200× đến 500×) cho cây con." },
    steps: ["Băm nhỏ nguyên liệu thực vật.", "Đổ lỏng tay khoảng một phần ba vật chứa.", "Đổ đầy phần còn lại bằng nước không có clo. Đậy lỏng.", "Để từ vài tuần đến vài tháng. Sẵn sàng khi có mùi đất thay vì mùi thối.", "Pha loãng trước khi dùng."],
    tipsTitle: "Điều nên biết", tips: ["Nguyên liệu tốt nhất: phần thừa của chính loại cây trồng đó, sau đó là cỏ dại."], safety: S.ferment
  },
  jeevamrit: {
    tag: "Tăng cường đất", role: "Hỗn hợp phân và nước tiểu lên men nuôi dưỡng vi sinh vật đất", sizeLabel: "Bạn muốn pha chế bao nhiêu Jeevamrit?",
    items: [it(G.drum, G.fdung), it(G.drum, G.urine, G.urineRange), it(G.drum, G.jag), it(G.drum, G.besan), it(G.drum, G.lime, G.limeOpt), it(G.drum, G.farmSoil, G.farmSoilNote), it(G.drum, G.water)],
    coverage: { text: "Liều dùng thông thường là khoảng 200 L trên mỗi mẫu Anh, mỗi 15 ngày cùng với nước tưới." },
    dil: { note: "Để phun lên lá, cách làm ở bang Gujarat dùng khoảng 7,5 L trong 120 L nước. Bón vào đất thì dùng không pha loãng." },
    steps: ["Trộn tất cả với nước trong thùng.", "Để trong bóng râm 48 giờ. Khuấy bằng gậy gỗ mỗi sáng và tối.", "Bón mỗi hai tuần một lần, phun lên cây trồng hoặc pha vào nước tưới.", "Dùng trong khoảng 15 ngày."],
    tipsTitle: "Điều nên biết", tips: ["Dùng phân và nước tiểu của bò bản địa (desi)."], safety: S.cow
  },
  beejamrit: {
    tag: "Xử lý hạt giống", role: "Lớp phủ bảo vệ hạt giống và rễ non", sizeLabel: "Bạn muốn xử lý bao nhiêu hạt giống?",
    titleFn: sz => `Bạn cần để xử lý ${sz} hạt giống`,
    items: [it(G.ingr, G.dung, G.tied), it(G.ingr, G.urine), it(G.ingr, G.lime, G.limeNight), it(G.ingr, G.bund), it(G.ingr, G.water)],
    use: { title: "Cách sử dụng", list: ["Bọc hạt giống bằng tay với Beejamrit, phơi khô kỹ trong bóng râm rồi gieo.", "Với các loại đậu có vỏ mỏng, chỉ cần nhúng nhanh rồi để khô.", "Với mạ lúa, ngâm rễ 30 phút trước khi cấy."] },
    steps: ["Buộc phân trong vải và treo vào nước tối đa 12 giờ.", "Hòa vôi với một ít nước và để qua đêm.", "Sáng hôm sau, vắt túi phân 3 lần trong nước.", "Thêm đất và khuấy. Sau đó thêm nước tiểu và nước vôi rồi khuấy lại."],
    tipsTitle: "Điều nên biết", tips: ["Pha mới và dùng trong ngày."], safety: S.cow
  },
  ghana: {
    tag: "Tăng cường dạng khô", role: "Dạng khô, rắn của Jeevamrit, trộn vào đất", sizeLabel: "Bạn có bao nhiêu phân khô?",
    titleFn: sz => `Bạn cần cho ${sz} phân khô`,
    items: [it(G.ingr, G.ddung), it(G.ingr, G.besan), it(G.ingr, G.jag, G.dissolved), it(G.ingr, G.urine, G.moisten, { text: G.little }), it(G.ingr, G.rootSoil, null, { text: G.handful })],
    coverage: { text: "Liều dùng thông thường là khoảng 100 kg trên mỗi mẫu Anh khi gieo trồng. Một số hướng dẫn cấp bang dùng 200 kg trước lần cày cuối." },
    use: { title: "Cách sử dụng", list: ["Rải trên ruộng khi gieo trồng, hoặc bón thúc quanh gốc cây.", "Giữ khô cho đến khi sử dụng."] },
    steps: ["Trải phân khô thành lớp mỏng trên mặt đất.", "Rắc một ít nước tiểu bò và bột đậu gà.", "Hòa đường thốt nốt trong nước và rưới lên. Thêm một nắm đất.", "Trộn đều và vo thành viên nhỏ (laddu). Phơi khô trong bóng râm."],
    tipsTitle: "Điều nên biết", tips: ["Ghanajeevamrit khô có thể bảo quản vài tháng nên dễ lưu trữ và vận chuyển."], safety: S.cow
  },
  panchagavya: {
    tag: "Thuốc bổ tăng trưởng", role: "Hỗn hợp lên men từ năm sản phẩm của bò, phun lên lá", sizeLabel: "Bạn muốn pha chế bao nhiêu Panchagavya? (ước tính)",
    items: [it(G.st1, G.fdung), it(G.st1, G.ghee), it(G.st2, G.urine), it(G.st2, G.water), it(G.st3, G.milk), it(G.st3, G.curd), it(G.st3, G.coco), it(G.st3, G.jag), it(G.st3, G.banana, G.bananaNote, { unit: G.bananaUnit })],
    dil: { note: "Cách phun thông thường là 3 L cho mỗi 100 L nước (3%). Dùng loãng hơn, khoảng 2%, cho rau ăn lá." },
    steps: ["Trộn đều phân và bơ ghee. Khuấy sáng và tối trong 3 ngày.", "Thêm nước tiểu và nước. Khuấy sáng và tối trong 15 ngày.", "Thêm sữa, sữa chua, nước dừa, đường thốt nốt và chuối nghiền.", "Khuấy hai lần mỗi ngày trong khoảng 30 ngày, sau đó lọc qua vải."],
    tipsTitle: "Điều nên biết", tips: ["Đậy bằng lưới để ruồi không đẻ trứng vào.", "Lọc kỹ trước khi phun để không làm tắc bình phun."], safety: S.cow
  },
  neemastra: {
    tag: "Sâu hại chích hút", role: "Dung dịch từ neem để trị rệp, bọ phấn trắng và sâu non nhỏ", sizeLabel: "Bạn muốn pha chế bao nhiêu Neemastra?",
    items: [it(G.drum, G.water), it(G.drum, G.urine), it(G.drum, G.dung), it(G.drum, G.neem, G.pulp)],
    dil: { note: "Thông thường dùng khoảng 3,5% đến 5%. 5 L trong 100 L nước tương đương 20×." },
    steps: ["Thêm nước tiểu, phân và hỗn hợp lá neem vào nước.", "Khuấy theo chiều kim đồng hồ bằng gậy dài. Đậy bằng bao đay và để trong bóng râm, tránh nắng và mưa.", "Khuấy mỗi sáng và tối. Sau 48 giờ là sẵn sàng.", "Lọc qua vải mỏng trước khi dùng."],
    tipsTitle: "Điều nên biết", tips: ["Phun vào cuối buổi chiều, khi côn trùng có ích chưa hoạt động.", "Dùng tươi là tốt nhất. Tài liệu của Gujarat cho biết có thể bảo quản đến 6 tháng."], safety: S.cow
  },
  brahmastra: {
    tag: "Sâu bướm", role: "Dung dịch từ lá đun sôi và nước tiểu để trị sâu bướm và sâu đục thân", sizeLabel: "Bạn muốn pha chế bao nhiêu Brahmastra?",
    items: [it(G.urG, G.urine), it(G.pastes, G.neemL), it(G.pastes, G.karanj), it(G.pastes, G.custard), it(G.pastes, G.castor), it(G.pastes, G.datura, G.toxGlove)],
    dil: { note: "Khi phun: 2 đến 3 L trong 100 L nước. Tưới đất trị tuyến trùng: 8 L trong 100 L (12×)." },
    steps: ["Nghiền mỗi loại lá thành hỗn hợp mịn.", "Cho nước tiểu vào vật chứa rồi trộn tất cả các loại hỗn hợp lá vào.", "Đun nhỏ lửa cho đến khi bọt nổi lên một hoặc hai lần. Khuấy theo chiều kim đồng hồ và đậy nắp.", "Sau lần nổi bọt thứ hai, tắt bếp và để nguội 48 giờ.", "Lọc qua vải mỏng. Bảo quản trong vật chứa ở nơi bóng râm."],
    tipsTitle: "Điều nên biết", tips: ["Một số hướng dẫn dùng thêm lá khác, như đu đủ, lựu và ổi.", "Bảo quản tránh ánh nắng. Các hướng dẫn cho biết có thể để được đến 6 tháng."], safety: S.toxic
  },
  agniastra: {
    tag: "Sâu đục thân và sâu", role: "Dung dịch cay từ neem, ớt và tỏi để trị sâu đục thân và sâu hại", sizeLabel: "Bạn muốn pha chế bao nhiêu Agniastra?",
    items: [it(G.ingr, G.urine), it(G.ingr, G.neem), it(G.ingr, G.tobacco, G.toxMask), it(G.ingr, G.chili), it(G.ingr, G.garlic), it(G.ingr, G.turmeric)],
    dil: { note: "6 đến 8 L trong 200 L nước (25× đến 33×). Dùng hỗn hợp đặc hơn khi sâu hại nặng." },
    steps: ["Trộn tất cả vào nước tiểu và khuấy theo chiều kim đồng hồ.", "Đậy nắp và đun sôi cho đến khi có bọt.", "Bắc ra khỏi bếp và để trong bóng râm 48 giờ. Khuấy hai lần mỗi ngày.", "Lọc qua vải mỏng. Bảo quản được khoảng 3 tháng."],
    tipsTitle: "Điều nên biết", tips: ["Dùng để trị sâu đục thân và sâu hại ở thân và quả."], safety: S.toxic
  },
  dashaparni: {
    tag: "Mọi loại sâu hại", role: "Chiết xuất lên men từ mười loại lá để trị nhiều loại sâu bệnh", sizeLabel: "Bạn muốn pha chế bao nhiêu Dashaparni?",
    items: [it(G.d1, G.water), it(G.d1, G.urine), it(G.d1, G.dung), it(G.d1s, G.turmeric), it(G.d1s, G.ginger), it(G.d1s, G.hing), it(G.d2, G.tobacco, G.toxMask), it(G.d2, G.chili), it(G.d2, G.garlic), it(G.d3, G.leaf10, G.leaf10Note)],
    dil: { note: "6 đến 8 L trong 200 L nước (3% đến 4%)." },
    steps: ["Thêm nước tiểu và phân vào nước. Đậy nắp và để 2 giờ.", "Thêm nghệ, gừng và nhựa hing. Khuấy theo chiều kim đồng hồ, đậy nắp và để qua đêm.", "Sáng hôm sau thêm thuốc lá, ớt và tỏi. Khuấy, đậy nắp và để trong bóng râm 24 giờ.", "Thêm mười loại hỗn hợp lá. Khuấy và đậy bằng bao đay.", "Lên men trong 30 đến 40 ngày, khuấy hai lần mỗi ngày. Sau đó lọc qua vải mỏng."],
    tipsTitle: "Điều nên biết", tips: ["Có thể thay thế Neemastra, Brahmastra và Agniastra khi bạn có đủ lá.", "Có thể dùng bất kỳ mười loại lá xua đuổi sâu hại nào. Tránh những loại lá vật nuôi của bạn ăn."], safety: S.toxic
  }
};
})();
