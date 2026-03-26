/**
 * Muhabbet Ocakbaşı - Multilingual Menu Data
 * Supports 5 languages: TR, EN, RU, AR, DE
 */

const DEFAULT_LANG = 'tr';

const menuData = {
    starters: {
        key: "starters",
        section: "mezeler",
        name: { tr: "Mezeler", en: "Meze", ru: "Мезе", ar: "مقبلات", de: "Meze", zh: "小菜" },
        icon: "🍽️",
        items: [
            { name: { tr: "Acılı Ezme", en: "Spicy Paste", ru: "Острая паста", ar: "معجون حار", de: "Scharfe Paste", zh: "辣酱" }, description: { tr: "Taze domatesle harmanlanan, usta ellerden çıkan yakıcı ezme", en: "Fiery paste blended with fresh tomatoes by master hands", ru: "Острая паста из свежих томатов ручного приготовления", ar: "معجون حار ممزوج بالطماطم الطازجة", de: "Scharfe Paste mit frischen Tomaten", zh: "新鲜西红柿混合的香辣酱" }, price: 260 },
            { name: { tr: "Amerikan Salatası", en: "American Salad", ru: "Американский салат", ar: "سلطة أمريكية", de: "Amerikanischer Salat" }, description: { tr: "Mısır, bezelye ve renkli sebzelerle hazırlanan ferahlatıcı salata" }, price: 260 },
            { name: { tr: "Arnavut Ciğeri", en: "Albanian Liver", ru: "Албанская печень", ar: "كبدة ألبانية", de: "Albanische Leber", zh: "阿尔巴尼亚肝" }, description: { tr: "Kızarmış kuzu ciğeri, maydanoz ve soğanla servis edilir", en: "Fried lamb liver served with parsley and onion", ru: "Жареная печень ягнёнка с петрушкой и луком", ar: "كبدة غنم مقلية مع البقدونس والبصل", de: "Gebratene Lammsleber mit Petersilie und Zwiebeln", zh: "炸羊肝配欧芹和洋葱" }, price: 450 },
            { name: { tr: "Atom", en: "Atom (Spicy Meze)", ru: "Атом", ar: "أتوم", de: "Atom" }, description: { tr: "Ezilmiş sarımsak ve biber harmanıyla patlama noktasına gelen ateşli meze" }, price: 260 },
            { name: { tr: "Beyaz Peynir", en: "White Cheese", ru: "Белый сыр", ar: "جبنة بيضاء", de: "Weißkäse" }, description: { tr: "Geleneksel olarak üretilmiş, yumuşak ve kremsi salamura beyaz peynir" }, price: 150 },
            { name: { tr: "Biber Borani", en: "Pepper Borani", ru: "Перец Борани", ar: "بوراني فلفل", de: "Paprika Borani" }, description: { tr: "Közlenmiş biber ve yoğurtla hazırlanan, dumanlı aromalı Ege mezesi" }, price: 260 },
            { name: { tr: "Cacık", en: "Cacık (Yogurt Dip)", ru: "Джаджик", ar: "جاجيك", de: "Cacık", zh: "酸奶黄瓜" }, description: { tr: "Sarımsaklı yoğurt, salatalık ve taze nane", en: "Garlicky yogurt with cucumber and fresh mint", ru: "Йогурт с чесноком, огурцом и мятой", ar: "لبن بالثوم والخيار والنعناع الطازج", de: "Knoblauchjoghurt mit Gurke und frischer Minze", zh: "大蒜酸奶配黄瓜和薄荷" }, price: 260 },
            { name: { tr: "Çiğ Köfte", en: "Raw Meatball", ru: "Чиг Кёфте", ar: "كفتة نية", de: "Çiğ Köfte" }, description: { tr: "İnce bulgur, domates ve baharatlarla yoğrulmuş bitkisel çiğ köfte, limon sıkılı" }, price: 320 },
            { name: { tr: "Deniz Börülcesi", en: "Sea Beans", ru: "Морские бобы", ar: "فاصوليا البحر", de: "Meeresbohnen" }, description: { tr: "Zeytinyağlı, limonlu taze deniz börülcesi; Ege'den doğrudan sofraya" }, price: 260 },
            { name: { tr: "Dolgu Biber", en: "Stuffed Pepper", ru: "Фарш. перец", ar: "فلفل محشي", de: "Gefüllte Paprika" }, description: { tr: "Pirinç, maydanoz ve baharatlarla doldurulmuş, zeytinyağlı dolma biber" }, price: 260 },
            { name: { tr: "Domates Kurusu", en: "Sun-Dried Tomato", ru: "Вяленые томаты", ar: "طماطم مجففة", de: "Getrocknete Tomate" }, description: { tr: "Güneşte kurutulmuş yoğun aromalı domatesler, zeytinyağı ve otlarla servis" }, price: 260 },
            { name: { tr: "Enginar", en: "Artichoke", ru: "Артишок", ar: "خرشوف", de: "Artischocke", zh: "洋蓟" }, description: { tr: "Zeytinyağlı, limonlu taze enginar; Ege'nin eşsiz lezzeti", en: "Fresh artichoke in olive oil and lemon, a taste of the Aegean", ru: "Свежий артишок с оливковым маслом и лимоном", ar: "خرشوف طازج بزيت الزيتون والليمون", de: "Frische Artischocke mit Olivenöl und Zitrone", zh: "橄榄油和柠檬腌制的新鲜洋蓟" }, price: 300 },
            { name: { tr: "Fava", en: "Fava Beans", ru: "Фава", ar: "فول", de: "Saubohnen" }, description: { tr: "Bakla püresi, zeytinyağı ve dereotu ile hazırlanan kremsi Ege mezesi" }, price: 260 },
            { name: { tr: "Girit Ezmesi", en: "Cretan Paste", ru: "Критская паста", ar: "معجون كريتي", de: "Kretische Paste" }, description: { tr: "Krem peynir, sarımsak ve taze otlarla hazırlanan narin Girit lezzeti" }, price: 260 },
            { name: { tr: "Havuç Tarator", en: "Carrot Tarator", ru: "Морковный таратор", ar: "تاراتور جزر", de: "Karotten Tarator" }, description: { tr: "Rendelenmiş havuç, sarımsaklı yoğurt ve cevizle yapılan hafif meze" }, price: 260 },
            { name: { tr: "Haydari", en: "Haydari", ru: "Хайдари", ar: "حيدري", de: "Haydari", zh: "香草酸奶" }, description: { tr: "Süzme yoğurt, sarımsak ve nane ile hazırlanan geleneksel meze", en: "Traditional meze of strained yogurt with garlic and mint", ru: "Традиционная закуска из процеженного йогурта с чесноком", ar: "مقبلة تقليدية من اللبن المصفى والثوم والنعناع", de: "Traditionelle Meze aus Streichjoghurt, Knoblauch und Minze", zh: "传统滤制酸奶配大蒜和薄荷" }, price: 260 },
            { name: { tr: "Humus Sade", en: "Plain Hummus", ru: "Хумус", ar: "حمص", de: "Hummus", zh: "原味鹰嘴豆泥" }, description: { tr: "Tahin, limon ve zeytinyağıyla hazırlanan kremsi nohut ezmesi", en: "Creamy chickpea puree with tahini, lemon and olive oil", ru: "Кремовое пюре из нута с тахини и оливковым маслом", ar: "بيوريه الحمص الكريمي بالطحينة والليمون", de: "Cremiges Kichererbsenpüree mit Tahini und Olivenöl", zh: "芝麻酱和橄榄油腌制的奶油鹰嘴豆泥" }, price: 260 },
            { name: { tr: "Kabak Şahane", en: "Zucchini Delight", ru: "Кабачки Шахане", ar: "كوسا رائعة", de: "Zucchini Delight" }, description: { tr: "Kızartılmış kabak dilimleri, sarımsaklı yoğurt ve dereotu sosuyla" }, price: 260 },
            { name: { tr: "Kaya Koruğu", en: "Rock Samphire", ru: "Морской укроп", ar: "سمفير صخري", de: "Meerfenchel" }, description: { tr: "Zeytinyağlı kaya koruğu; Ege kıyılarından gelen nadide bir deniz bitkisi" }, price: 260 },
            { name: { tr: "Kereviz", en: "Celery Root", ru: "Сельдерей", ar: "كرفس", de: "Sellerie" }, description: { tr: "Zeytinyağı ve limonla pişirilmiş kereviz; hafif ve besleyici bir meze" }, price: 260 },
            { name: { tr: "Köpeoğlu", en: "Köpeoğlu", ru: "Кёпеоглу", ar: "كوبيوغلو", de: "Köpeoğlu" }, description: { tr: "Fırında pişirilmiş közlenmiş patlıcan, sarımsak ve yoğurtla yapılan Antep mezesi" }, price: 260 },
            { name: { tr: "Köz Biber", en: "Roasted Pepper", ru: "Печёный перец", ar: "فلفل مشوي", de: "Geröstete Paprika" }, description: { tr: "Közde kabuğu soyulmuş, zeytinyağı ve sarımsakla marine edilmiş kırmızı biber" }, price: 260 },
            { name: { tr: "Kuru Patlıcan Dolma", en: "Stuffed Dried Eggplant", ru: "Фарш. баклажан", ar: "باذنجان محشي", de: "Gefüllte Aubergine" }, description: { tr: "Kurutulmuş patlıcana pirinç ve baharatla doldurulan, zeytinyağlı nefis dolma" }, price: 260 },
            { name: { tr: "Makopaşa", en: "Makopaşa", ru: "Макопаша", ar: "ماكوباشا", de: "Makopaşa" }, description: { tr: "Antep usulü tahin, pekmez ve fıstıkla hazırlanan tatlımsı meze" }, price: 260 },
            { name: { tr: "Muhammara", en: "Muhammara", ru: "Мухаммара", ar: "محمرة", de: "Muhammara" }, description: { tr: "Közlenmiş kırmızı biber, ceviz ve baharatla harmanlanan Antep ezme lezzeti" }, price: 260 },
            { name: { tr: "Ordövr Tabağı", en: "Appetizer Platter", ru: "Ассорти закусок", ar: "طبق مقبلات", de: "Vorspeisenplatte" }, description: { tr: "Seçkin mezelerden oluşan zengin tabak; sofraya şölen havasını getiren sunum" }, price: 400 },
            { name: { tr: "Pancar Turşusu", en: "Pickled Beets", ru: "Маринованная свёкла", ar: "مخلل شمندر", de: "Eingelegte Rote Beete" }, description: { tr: "Sirke ve baharatla turşuya yatırılmış taze pancar; sofranın rengi" }, price: 260 },
            { name: { tr: "Patlıcan Salata", en: "Eggplant Salad", ru: "Салат из баклажанов", ar: "سلطة باذنجان", de: "Auberginensalat" }, description: { tr: "Közlenmiş patlıcan, sarımsak ve zeytinyağıyla hazırlanan klasik meze" }, price: 260 },
            { name: { tr: "Pazı Salata", en: "Chard Salad", ru: "Салат из мангольда", ar: "سلطة سلق", de: "Mangoldsalat" }, description: { tr: "Haşlanmış pazı, zeytinyağı, limon ve sarımsakla servis edilen sağlıklı meze" }, price: 260 },
            { name: { tr: "Peynirli Nar Topu", en: "Cheese Pomegranate Ball", ru: "Сырный шар с гранатом", ar: "كرة رمان بالجبن", de: "Käse-Granatapfel-Kugel" }, description: { tr: "Krem peynir ve nar taneleriyle hazırlanan yuvarlak, görsel şölen sunan meze" }, price: 260 },
            { name: { tr: "Pilaki", en: "Pilaki", ru: "Пилаки", ar: "بيلاكي", de: "Pilaki" }, description: { tr: "Domates, havuç ve baharatlarla pişirilmiş zeytinyağlı fasulye pilaki" }, price: 260 },
            { name: { tr: "Semizotu", en: "Purslane", ru: "Портулак", ar: "رجلة", de: "Portulak" }, description: { tr: "Zeytinyağlı, sarımsaklı yoğurtla servis edilen taze ve besleyici semizotu" }, price: 260 },
            { name: { tr: "Soslu Patlıcan", en: "Eggplant in Sauce", ru: "Баклажаны в соусе", ar: "باذنجان بالصلصة", de: "Aubergine in Sauce" }, description: { tr: "Közlenmiş patlıcan, domates sosu ve baharatlarla nefis bir sunum" }, price: 260 },
            { name: { tr: "Süzme Yoğurt", en: "Strained Yogurt", ru: "Процеженный йогурт", ar: "لبنة", de: "Streichjoghurt" }, description: { tr: "Günlük taze süzme yoğurt; saf, doğal ve kremsi bir lezzet" }, price: 220 },
            { name: { tr: "Şakşuka", en: "Şakşuka", ru: "Шакшука", ar: "شكشوكة", de: "Şakşuka" }, description: { tr: "Kızartılmış patlıcan, biber ve domates sosuyla hazırlanan sıcak meze" }, price: 260 },
            { name: { tr: "Turşu", en: "Pickles", ru: "Соленья", ar: "مخللات", de: "Eingelegtes Gemüse" }, description: { tr: "Ev yapımı karışık turşu; lahana, biber ve havuçla hazırlanan geleneksel lezzet" }, price: 260 },
            { name: { tr: "Yaprak Sarma", en: "Stuffed Grape Leaves", ru: "Долма", ar: "ورق عنب", de: "Gefüllte Weinblätter" }, description: { tr: "Pirinç, fıstık ve baharatlarla doldurulmuş zeytinyağlı yaprak sarma" }, price: 260 }
        ]
    },
    hot_starters: {
        key: "hot_starters",
        section: "ara_sicaklar",
        name: { tr: "Ara Sıcaklar", en: "Hot Starters", ru: "Горячие закуски", ar: "مقبلات ساخنة", de: "Warme Vorspeisen", zh: "热前菜" },
        icon: "🥘",
        items: [
            { name: { tr: "Ayvalık Lokma", en: "Ayvalık Fritters", ru: "Айвалык Локма", ar: "لقمة أيفاليك", de: "Ayvalık Krapfen" }, description: { tr: "Ayvalık usulü çıtır hamur tatlısı; dışı altın, içi yumuşacık" }, price: 250 },
            { name: { tr: "Bira Sepeti", en: "Beer Basket", ru: "Пивная корзина", ar: "سلة بيرة", de: "Bierkorb" }, description: { tr: "Cipsi, mıhlama ve atıştırmalıklarla dolu rakı-bira sofrası sepeti" }, price: 400 },
            { name: { tr: "Güveçte Mantar", en: "Mushroom Casserole", ru: "Грибы в горшочке", ar: "فطر بالفخار", de: "Pilze im Tontopf", zh: "陶锅蘑菇" }, description: { tr: "Taze mantarlar, tereyağı, sarımsak ve baharatlarla güveçte erir", en: "Fresh mushrooms melted with butter, garlic and spices in a clay pot", ru: "Свежие грибы с маслом, чесноком и специями в горшочке", ar: "فطر طازج مع الزبدة والثوم والتوابل في إناء فخار", de: "Frische Pilze mit Butter, Knoblauch und Gewürzen im Tontopf", zh: "陶锅内黄油大蒜蘑菇" }, price: 350 },
            { name: { tr: "Humus Pastırmalı", en: "Hummus with Pastrami", ru: "Хумус с пастырмой", ar: "حمص بالبسطرمة", de: "Hummus mit Pastırma" }, description: { tr: "Kremsi humus üzerine yerleştirilen pastırma dilimleri ve zeytinyağı" }, price: 370 },
            { name: { tr: "İçli Köfte (Haşlama)", en: "Boiled Kibbeh", ru: "Варёные Ичли Кёфте", ar: "كبة مسلوقة", de: "Gekochte Kibbeh" }, description: { tr: "İnce bulgur kabuğunun içinde kıyma ve cevizli lezzetli iç harcı; haşlama usulü" }, price: 160 },
            { name: { tr: "İçli Köfte (Kızartma)", en: "Fried Kibbeh", ru: "Жареные Ичли Кёфте", ar: "كبة مقلية", de: "Frittierte Kibbeh" }, description: { tr: "Altın sarısı kızarttılmış bulgur kabuğunun içinde kıyma ve cevizli harç" }, price: 160 },
            { name: { tr: "İstiridye Izgara", en: "Grilled Oyster Mushroom", ru: "Жареные вешенки", ar: "فطر محاري مشوي", de: "Gegrillte Austernpilze" }, description: { tr: "Taze istiridye mantar ızgarada pişirilip zeytinyağı ve otlarla servis edilir" }, price: 420 },
            { name: { tr: "İstiridye Mantar Kremalı", en: "Creamy Oyster Mushroom", ru: "Вешенки в сливках", ar: "فطر محاري بالكريمة", de: "Austernpilze in Sahne" }, description: { tr: "Taze istiridye mantar kremali sos içinde, fırında altın rengi alana kadar pişirilir" }, price: 420 },
            { name: { tr: "Kalamar Tava", en: "Fried Calamari", ru: "Жареные кальмары", ar: "كالاماري مقلي", de: "Gebratene Calamari", zh: "炸鱿鱼" }, description: { tr: "Gevrek unla kaplanmış, altın sarısı kızarmtış lezzetli kalamar", en: "Crispy golden-fried calamari in light batter", ru: "Хрустящие золотистые кальмары в кляре", ar: "كالاماري مقرمش ذهبي مقلي في عجينة خفيفة", de: "Knusprig goldbraun frittierte Calamariringe", zh: "醉脢香脲的黄金炸鱿鱼圈" }, price: 700 },
            { name: { tr: "Karides Güveç", en: "Shrimp Casserole", ru: "Креветки в горшочке", ar: "جمبري بالفخار", de: "Garnelen im Tontopf", zh: "陶锅虾" }, description: { tr: "Karides, domates, biber ve kaşar peyniriyle güveçte pişirilir", en: "Shrimp baked with tomato, pepper and cheese in a clay pot", ru: "Креветки с томатом, перцем и сыром в горшочке", ar: "جمبري مطبوخ مع الطماطم والفلفل والجبنة في إناء فخار", de: "Garnelen mit Tomate, Paprika und Käse im Tontopf gebacken", zh: "陶锅内番茄辣椒奶酪虾" }, price: 720 },
            { name: { tr: "Karides Tereyağlı", en: "Butter Shrimp", ru: "Креветки в масле", ar: "جمبري بالزبدة", de: "Butter-Garnelen", zh: "黄油虾" }, description: { tr: "Taze karides, bolca tereyağı ve sarımsakla tavada piştiriliyor", en: "Fresh shrimp sautéed with generous butter and garlic", ru: "Свежие креветки с маслом и чесноком", ar: "جمبري طازج مع الزبدة والثوم", de: "Frische Garnelen mit Butter und Knoblauch angebraten", zh: "黄油大蒜翻炒的新鲜虾" }, price: 700 },
            { name: { tr: "Paçanga Böreği", en: "Paçanga Pastry", ru: "Пачанга бёрек", ar: "بورك باجانغا", de: "Paçanga Börek", zh: "夸切肉酥饵饥" }, description: { tr: "Pastırma, kaşar ve biberle doldurulmuş, çıtır çıtır börek", en: "Crispy pastry filled with pastrami, cheese and peppers", ru: "Хрустящее тесто с пастырмой и сыром", ar: "معجنة مقرمشة محشوة بالبسطرمة والجبنة", de: "Knuspriges Gebäck mit Pastirma, Käse und Paprika gefüllt", zh: "煮肉奶酪和辣椒酵馅香脲夸饼" }, price: 280 },
            { name: { tr: "Patates Tava", en: "Fried Potatoes", ru: "Жареный картофель", ar: "بطاطس مقلية", de: "Bratkartoffeln" }, description: { tr: "Altın kıvamında kızarttılmış, dışı çıtır içi yumuşak taze patates" }, price: 300 },
            { name: { tr: "Patlıcan Söğürme", en: "Charred Eggplant", ru: "Обжаренные баклажаны", ar: "باذنجان مشوي", de: "Gegrillte Aubergine" }, description: { tr: "Közlenmiş patlıcanin içi çıkarılıp zeytinyağı, sarımsak ve maydanozla servis edilir" }, price: 350 },
            { name: { tr: "Pazı Kavurma", en: "Sautéed Chard", ru: "Жареный мангольд", ar: "سلق مقلي", de: "Gebratener Mangold" }, description: { tr: "Taze pazı, soğan ve sarımsakla sotelenip zeytinyağı ile servis edilir" }, price: 350 },
            { name: { tr: "Sıcak Peynir", en: "Hot Cheese", ru: "Горячий сыр", ar: "جبنة ساخنة", de: "Heißer Käse" }, description: { tr: "Hafif yağda kızarttılmış, içi erimiş kaşar veya beyaz peynir; çıtır ve kremsi" }, price: 300 },
            { name: { tr: "Yaprak Ciğer", en: "Thin Liver Slices", ru: "Тонкая печень", ar: "كبدة رقيقة", de: "Dünne Leberscheiben" }, description: { tr: "İnce kesilmiş kuzu ciğeri unlanıp kızarttılır, maydanoz ve limonla servis edilir" }, price: 600 }
        ]
    },
    meats: {
        key: "meats",
        section: "et_balik",
        name: { tr: "Etler", en: "Meats", ru: "Мясо", ar: "لحوم", de: "Fleisch", zh: "肉类" },
        icon: "🥩",
        items: [
            { name: { tr: "Adana Kebap (Porsiyon)", en: "Adana Kebab (Portion)", ru: "Адана кебаб (порция)", ar: "كباب أضنة (حصة)", de: "Adana Kebab (Portion)", zh: "阿达纳烤肉串(份)" }, description: { tr: "El çekilmiş kuzu etiyle hazırlanan acılı, üstatça pişmiş kebap", en: "Expertly grilled spicy kebab made with hand-minced lamb", ru: "Острый кебаб из ручного фарша ягнёнка", ar: "كباب حار مصنوع من خروف مفروم يدوياً", de: "Würzig gegrillter Kebab aus handgehacktem Lammfleisch", zh: "手切羊肉香辣烤肉串" }, price: 650 },
            { name: { tr: "Urfa Kebap (Porsiyon)", en: "Urfa Kebab (Portion)", ru: "Урфа кебаб (порция)", ar: "كباب أورفة (حصة)", de: "Urfa Kebab (Portion)" }, description: { tr: "Acısız, el çekilmiş kıymayla hazırlanan Urfa usulü ızgara kebap" }, price: 650 },
            { name: { tr: "Ali Nazik (Kıymalı)", en: "Ali Nazik (Minced)", ru: "Али Назик (с фаршем)", ar: "علي نازك (مفروم)", de: "Ali Nazik (Hackfleisch)" }, description: { tr: "Közlenmiş patlıcan püresi üzerine baharatlı kıyma ve yoğurtla servis edilir" }, price: 850 },
            { name: { tr: "Antrikot", en: "Ribeye Steak", ru: "Антрекот", ar: "ستيك ريب آي", de: "Ribeye-Steak", zh: "肉眼牛排" }, description: { tr: "Ocakta olgunlaştırılan dana antrikot; dana etinin zirvesi", en: "Grilled beef ribeye matured to perfection on the grill", ru: "Говяжий антрекот, мастерски приготовленный на гриле", ar: "ستيك ريب آي مشوي بإتقان على الجمر", de: "Perfekt gegrilltes Rinderribauge auf dem offenen Feuer", zh: "完美炧制的牛肉眼牛排" }, price: 1000 },
            { name: { tr: "Billur", en: "Billur", ru: "Биллур", ar: "بيلور", de: "Billur" }, description: { tr: "Özel harçla hazırlanan ince kıyma köftesi; ızgarada pişmiş, hafif ve lezzetli" }, price: 400 },
            { name: { tr: "Ciğer Şiş (Porsiyon)", en: "Liver Skewer (Portion)", ru: "Шашлык из печени (порция)", ar: "شيش كبدة (حصة)", de: "Leber-Spieß (Portion)" }, description: { tr: "Taze kuzu ciğeri şişe geçirilip ızgarada pişirilir, maydanoz ve limonla" }, price: 700 },
            { name: { tr: "Çöp Şiş (Porsiyon)", en: "Small Meat Skewer (Portion)", ru: "Чёп шиш (порция)", ar: "شيش صغير (حصة)", de: "Kleine Fleischspieße (Portion)" }, description: { tr: "Küçük şişlere geçirilmiş marine kuzu eti; ferah aromalı ızgara lezzeti" }, price: 750 },
            { name: { tr: "Kaburga", en: "Lamb Ribs", ru: "Рёбрышки", ar: "ريش غنم", de: "Lammrippen" }, description: { tr: "Yavaş pişirilmiş kuzu kaburga; etin kemiğinden düşeceği noktada servis edilir" }, price: 850 },
            { name: { tr: "Kuzu Külbastı", en: "Lamb Cutlet", ru: "Кюльбасты", ar: "كولباستي غنم", de: "Lamm-Kotelett" }, description: { tr: "Kuzu bonfile, ızgarada hızlıca pişirilip sıcak servis edilir" }, price: 850 },
            { name: { tr: "Kuzu Pirzola", en: "Lamb Chops", ru: "Бараньи отбивные", ar: "ريش غنم", de: "Lammkoteletts", zh: "羊排" }, description: { tr: "Ocakta pişmiş, tereyağlı taze kuzu pirzola; eşsiz bir lezzet", en: "Fresh lamb chops grilled over charcoal to perfection", ru: "Свежие бараньи отбивные, приготовленные на угляхичном гриле", ar: "ريش غنم طازج مشوي على الفحم باحتراف", de: "Frische Lammkoteletts perfekt auf dem Holzkohlegrill gegart", zh: "木炭火炧的完美新鲜羊排" }, price: 1000 },
            { name: { tr: "Kuzu Şiş (Porsiyon)", en: "Lamb Skewer (Portion)", ru: "Шашлык из ягнёнка (порция)", ar: "شيش غنم (حصة)", de: "Lamm-Spieß (Portion)" }, description: { tr: "Marine kuzu eti parçaları şişe geçirilip közde ustalıkla pişirilir" }, price: 850 },
            { name: { tr: "Patlıcan Kebap", en: "Eggplant Kebab", ru: "Кебаб с баклажаном", ar: "كباب باذنجان", de: "Auberginen-Kebab" }, description: { tr: "Közlenmiş patlıcan aralarına dizilen et şişleri; dumanlı ve nefis" }, price: 850 },
            { name: { tr: "Sarma Beyti", en: "Wrapped Beyti", ru: "Сарма Бейти", ar: "بيتي ملفوف", de: "Gerolltes Beyti" }, description: { tr: "Baharatlı kıyma yufkaya sarılıp ızgarada pişirilen, domates soslu beyti" }, price: 850 },
            { name: { tr: "Tavuk Kanat", en: "Chicken Wings", ru: "Куриные крылышки", ar: "أجنحة دجاج", de: "Hähnchenflügel", zh: "鸡翅" }, description: { tr: "Marine edilmiş tavuk kanatları ocakta mükemmel şekilde pişirilir", en: "Marinated chicken wings grilled to perfection", ru: "Маринованные куриные крылышки на гриле", ar: "أجنحة دجاج متبلة مشوية باحتراف", de: "Marinierte Hähnchenflügel perfekt vom Grill", zh: "腔制鸡翅炧至完美" }, price: 600 },
            { name: { tr: "Tavuk Şiş", en: "Chicken Skewer", ru: "Куриный шашлык", ar: "شيش طاووق", de: "Hähnchen-Spieß", zh: "鸡肉串" }, description: { tr: "Ustalıkla hazırlanmış yumuşak tavuk parçaları, şişte pişirilir", en: "Tender chicken pieces skillfully prepared and grilled on skewer", ru: "Нежные кусочки курицы на шпажке", ar: "قطع دجاج طرية مشوية على الشيش", de: "Zartes Hähnchenfleisch gekonnt auf dem Spieß gegrillt", zh: "安女子炧制的嫩滑鸡肉串" }, price: 600 },
            { name: { tr: "Yağlı Karalı (Porsiyon)", en: "Fatty Mixed Grill (Portion)", ru: "Жирное ассорти (порция)", ar: "مشكل دسم (حصة)", de: "Fettes Grillmix (Portion)" }, description: { tr: "Kaburga, pirzola ve şiş çeşitlerinden oluşan, yağlı ve doyurucu karışık tabak" }, price: 1000 },
            { name: { tr: "Ali Nazik (Etli)", en: "Ali Nazik (With Meat)", ru: "Али Назик (с мясом)", ar: "علي نازك (باللحم)", de: "Ali Nazik (mit Fleisch)" }, description: { tr: "Közlenmiş patlıcan püresi ve yoğurt üzerine kuşbaşı etle hazırlanan özel tabak" }, price: 900 },
            { name: { tr: "Yağlı Karalı (Adet)", en: "Fatty Mixed (Piece)", ru: "Жирное ассорти (шт)", ar: "مشكل دسم (قطعة)", de: "Fettes Grillmix (Stück)" }, description: { tr: "Yağlı ete sahip fileto parçaları tek sipariş için hazırlanır" }, price: 350 },
            { name: { tr: "Izgara Köfte", en: "Grilled Meatballs", ru: "Жареные кёфте", ar: "كفتة مشوية", de: "Gegrillte Köfte" }, description: { tr: "El yapımı baharatlı köfte ızgarada pişirilip domates ve biberi eşliğinde servis edilir" }, price: 650 },
            { name: { tr: "Izgara Kaşarlı Köfte", en: "Grilled Cheese Meatballs", ru: "Кёфте с сыром", ar: "كفتة بالجبن", de: "Köfte mit Käse" }, description: { tr: "İçi kaşar peynirli, ızgarada pişmiş köfte; peynir erir, lezzet katlanır" }, price: 680 },
            { name: { tr: "Kuzu Küşleme", en: "Lamb Küşleme", ru: "Кюшлеме", ar: "كوشلمة غنم", de: "Lamm Küşleme" }, description: { tr: "Kuzu but kemiksiz kelebek usulü açılıp ızgarada pişirilir; yumuşak ve bol" }, price: 1000 },
            { name: { tr: "Kuzu Lokum (Porsiyon)", en: "Lamb Delight (Portion)", ru: "Кузу Локум (порция)", ar: "لقم غنم (حصة)", de: "Lamm Delight (Portion)" }, description: { tr: "Kuzu butun en yumuşak bölümünden kesilen, ağızda eriyen lokum parçalar" }, price: 1000 },
            { name: { tr: "Kuzu Lokum (Adet)", en: "Lamb Delight (Piece)", ru: "Кузу Локум (шт)", ar: "لقم غنم (قطعة)", de: "Lamm Delight (Stück)" }, description: { tr: "Kuzu lokumundan tek adet; ağzınızı açtıracak yumuşaklıkta" }, price: 325 },
            { name: { tr: "Kalem Pirzola", en: "Pencil Chops", ru: "Калем пирзола", ar: "بيرزولا قلم", de: "Kalem Pirzola" }, description: { tr: "Uzun kemikli ince kuzu pirzola; şık şefaf ve sofistike bir et sunumu" }, price: 400 },
            { name: { tr: "Dana Lokum (Porsiyon)", en: "Beef Delight (Portion)", ru: "Дана Локум (порция)", ar: "لقم عجل (حصة)", de: "Rinder Delight (Portion)" }, description: { tr: "Dana butun en özel kısmından kesilen yumuşak lokum parçaları" }, price: 1000 },
            { name: { tr: "Dana Lokum (Adet)", en: "Beef Delight (Piece)", ru: "Дана Локум (шт)", ar: "لقم عجل (قطعة)", de: "Rinder Delight (Stück)" }, description: { tr: "Dana lokumundan tek adet; et kalitesinin en üst noktası" }, price: 550 },
            { name: { tr: "Böbrek", en: "Kidney", ru: "Почки", ar: "كلى", de: "Nieren" }, description: { tr: "Taze kuzu böbreği şişe geçirilip közde pişirilir; gerçek ocakbaşı lezzeti" }, price: 600 }
        ]
    },
    oven: {
        key: "oven",
        section: "tas_firin",
        name: { tr: "Taş Fırın", en: "Stone Oven", ru: "Каменная печь", ar: "فرن حجري", de: "Steinofen", zh: "石炉" },
        icon: "🔥",
        items: [
            { name: { tr: "Lahmacun", en: "Turkish Pizza", ru: "Лахмаджун", ar: "لحم بعجين", de: "Lahmacun", zh: "土耳其薄饼" }, description: { tr: "Kıymalı, bol baharatlı ince hamur; taş fırında mükemmel pişmiş", en: "Thin dough with spiced minced meat, baked to perfection in stone oven", ru: "Тонкое тесто с пряным фаршем, идеально выпеченное в каменной печи", ar: "عجينة رفيعة بلحم مفروم متبل مخبوزة بالفرن الحجري", de: "Dünner Teig mit gewürztem Hackfleisch, im Steinofen gebacken", zh: "香辣肉末薄饼，石炉烤制至完美" }, price: 200 },
            { name: { tr: "Antep Lahmacun", en: "Antep Lahmacun", ru: "Антеп Лахмаджун", ar: "لحم بعجين عنتاب", de: "Antep Lahmacun" }, description: { tr: "Antep'in özel acılı kıymasıyla hazırlanan, taş fırında pişirilmiş lahmacun" }, price: 200 },
            { name: { tr: "Kaşarlı Pide", en: "Cheese Pide", ru: "Пиде с сыром", ar: "بيدا بالجبن", de: "Käse-Pide" }, description: { tr: "Bol erimiş kaşar peynirli, taş fırında hazırlanan kabarık ve altın pide" }, price: 400 },
            { name: { tr: "Kıymalı Pide", en: "Minced Meat Pide", ru: "Пиде с фаршем", ar: "بيدا باللحم المفروم", de: "Hackfleisch-Pide" }, description: { tr: "Baharatlı kıymayla doldurulmuş, taş fırında çıtır çıtır pişirilmiş pide" }, price: 450 },
            { name: { tr: "Kuşbaşılı Pide", en: "Diced Meat Pide", ru: "Пиде с кусочками мяса", ar: "بيدا بقطع اللحم", de: "Würfelfleisch-Pide" }, description: { tr: "Etli kuşbaşı parçalarıyla dolu, fırında mükemmel pişmiş özel pide" }, price: 520 },
            { name: { tr: "Kıymalı Yumurtalı Pide", en: "Minced Meat & Egg Pide", ru: "Пиде с фаршем и яйцом", ar: "بيدا باللحم والبيض", de: "Hackfleisch-Ei-Pide" }, description: { tr: "Kıyma harcının üstüne yumurta kırılan, fırında lezzet buluşması sunan pide" }, price: 480 },
            { name: { tr: "Kaşarlı Kuşbaşılı Pide", en: "Cheese & Diced Meat Pide", ru: "Пиде с сыром и мясом", ar: "بيدا بالجبن واللحم", de: "Käse-Würfelfleisch-Pide" }, description: { tr: "Kuşbaşı etin üstüne bol kaşar eriyen, taş fırın lezzeti" }, price: 550 },
            { name: { tr: "Karışık Pide", en: "Mixed Pide", ru: "Смешанное пиде", ar: "بيدا مشكل", de: "Gemischte Pide" }, description: { tr: "Kıyma, kuşbaşı ve kaşar bir arada; fırından çıkan karışık lezzet tabağı" }, price: 500 },
            { name: { tr: "Fındık Lahmacun", en: "Mini Lahmacun", ru: "Мини Лахмаджун", ar: "لحم بعجين صغير", de: "Mini Lahmacun" }, description: { tr: "Küçük boyda, baharatlı kıymalı mini lahmacun; atıştırmalık lezzet" }, price: 100 },
            { name: { tr: "Ceviz Lahmacun", en: "Walnut Lahmacun", ru: "Лахмаджун с орехами", ar: "لحم بعجين بالجوز", de: "Walnuss Lahmacun" }, description: { tr: "Ceviz ve baharatlarla hazırlanan vejetaryen alternatif lahmacun" }, price: 160 }
        ]
    },
    fish: {
        key: "fish",
        section: "et_balik",
        name: { tr: "Balık", en: "Fish", ru: "Рыба", ar: "سمك", de: "Fisch", zh: "鱼类" },
        icon: "🐟",
        items: [
            { name: { tr: "Çupra", en: "Sea Bream", ru: "Дорада", ar: "سمك الدنيس", de: "Dorade", zh: "鲷鱼" }, description: { tr: "Taze Ege çuprası ızgarada mükemmel pişirilip sofraya getirilir", en: "Fresh Aegean sea bream, grilled to perfection and served", ru: "Свежая дорада из Эгейского моря, зажаренная на гриле", ar: "سمكة طازجة من بحر إيجه مشوية بإتقان", de: "Frische ägäische Dorade, perfekt gegrillt serviert", zh: "爱琴海的新鲜鲷鱼，烤至完美" }, price: 650 },
            { name: { tr: "Levrek", en: "Sea Bass", ru: "Сибас", ar: "سمك القاروص", de: "Wolfsbarsch", zh: "鲈鱼" }, description: { tr: "Izgara levrek; denizin en özel lezzetini sofranıza taşır", en: "Grilled sea bass brings the finest taste of the sea to your table", ru: "Гриль-сибас; лучший вкус моря на вашем столе", ar: "قاروص مشوي يجلب أرقى طعم من البحر", de: "Gegrillter Wolfsbarsch bringt den feinsten Meeresgeschmack auf Ihren Tisch", zh: "炙烤鲈鱼将海洋最优美的食材呈现" }, price: 650 }
        ]
    },
    wraps: {
        key: "wraps",
        section: "durumler",
        name: { tr: "Dürümler", en: "Wraps", ru: "Роллы", ar: "لفائف", de: "Wraps", zh: "卷饩" },
        icon: "🌯",
        items: [
            { name: { tr: "Adana Dürüm Acılı", en: "Spicy Adana Wrap", ru: "Острый Адана ролл", ar: "لفة أضنة حارة", de: "Scharfer Adana Wrap", zh: "香辣阿达纳卷饼" }, description: { tr: "Acılı el çekimi kıyma, yufka ekmeğe sarılı ve ızgara lezzeti", en: "Spicy hand-minced meat wrapped in thin flatbread, grilled perfectly", ru: "Острый ручной фарш в лаваше, приготовленный на гриле", ar: "لحم مفروم حار ملفوف في خبز رفيع مشوي", de: "Würziges Hackfleisch in dünnem Fladenbrot gerollt, gegrillt", zh: "香辣手切肉卷入薄饼烤制" }, price: 450 },
            { name: { tr: "Ciğer Şiş Dürüm", en: "Liver Wrap", ru: "Ролл с печенью", ar: "لفة كبدة", de: "Leber Wrap" }, description: { tr: "Izgara kuzu ciğeri, soğan ve maydanozla yufkaya sarılmış dürüm" }, price: 470 },
            { name: { tr: "Kuzu Şiş Dürüm", en: "Lamb Wrap", ru: "Ролл с ягнёнком", ar: "لفة غنم", de: "Lamm Wrap" }, description: { tr: "Közde pişmiş kuzu şiş, taze sebzeler ve sosla yufkaya sarılmış" }, price: 480 },
            { name: { tr: "Tavuk Şiş Dürüm", en: "Chicken Wrap", ru: "Куриный ролл", ar: "لفة دجاج", de: "Hähnchen Wrap", zh: "鸡肉卷" }, description: { tr: "Yumuşak tavuk şiş, taze sebzeler ve sos ile yufkaya sarıldı", en: "Tender chicken skewer wrapped with fresh vegetables and sauce", ru: "Нежный куриный шашлык с овощами и соусом в лаваше", ar: "شيش دجاج طري ملفوف بخضروات طازجة وصوص", de: "Zartes Hähnchenspieß mit frischem Gemüse und Sauce gerollt", zh: "嫩滑鸡肉串配新鲜蔬菜和笔商卷入" }, price: 400 },
            { name: { tr: "Urfa Dürüm Acısız", en: "Mild Urfa Wrap", ru: "Урфа ролл", ar: "لفة أورفة", de: "Milder Urfa Wrap" }, description: { tr: "Acısız, yumuşak Urfa kıyması yufkaya sarılmış; sakin ve bereketli bir lezzet" }, price: 450 }
        ]
    },
    pan: {
        key: "pan",
        section: "tas_firin",
        name: { tr: "Fırında Tava Çeşitleri", en: "Oven Pan Dishes", ru: "Блюда в сковороде", ar: "أطباق الفرن", de: "Ofenpfannengerichte", zh: "烤盘菜" },
        icon: "🍳",
        items: [
            { name: { tr: "Çoban Kavurma", en: "Shepherd's Sauté", ru: "Чобан кавурма", ar: "قورمة الراعي", de: "Hirtenpfanne", zh: "牧羊人肉炒" }, description: { tr: "Kuzu eti, biber ve soğanla bir araya gelen doyurucu kavurma", en: "Satisfying sauté of lamb with peppers and onions", ru: "Сытное жаркое из ягнятины с перцем и луком", ar: "قورمة شبعة من لحم الغنم مع الفلفل والبصل", de: "Sättigendes Lammfleisch-Sauté mit Paprika und Zwiebeln", zh: "羊肉辣椒洋葱丰美炒制" }, price: 1050 },
            { name: { tr: "Et Sote", en: "Meat Sauté", ru: "Мясное соте", ar: "صوتيه لحم", de: "Fleisch-Sauté" }, description: { tr: "Dana eti, sebzeler ve baharatlarla sotelenip fırında servis edilen sıcak tabak" }, price: 1050 },
            { name: { tr: "Et Tava", en: "Meat Pan", ru: "Мясо на сковороде", ar: "طاوة لحم", de: "Fleischpfanne" }, description: { tr: "Tavada kızartılmış et parçaları, soğan ve biber eşliğinde servis edilir" }, price: 1050 },
            { name: { tr: "Piliç Kavurma", en: "Chicken Sauté", ru: "Куриное соте", ar: "قورمة دجاج", de: "Hähnchen-Sauté" }, description: { tr: "Piliç göğsü ve butundan hazırlanan, sebzeli, sotelenmiş tavuk kavurma" }, price: 650 }
        ]
    },
    salads: {
        key: "salads",
        section: "salads",
        name: { tr: "Salatalarımız", en: "Our Salads", ru: "Наши Салаты", ar: "سلطاتنا", de: "Unsere Salate", zh: "我们的沙拉" },
        icon: "🥗",
        items: [
            { name: { tr: "Çoban Salata", en: "Shepherd's Salad", ru: "Чобан салат", ar: "سلطة الراعي", de: "Hirtensalat", zh: "牧人沙拉" }, description: { tr: "Domates, salatalık, soğan ve nar ekşisiyle taze mevsim salata", en: "Fresh tomato, cucumber, onion with pomegranate molasses dressing", ru: "Свежие помидоры, огурцы, лук с гранатовым соусом", ar: "طماطم وخيار وبصل طازج بصلصة الرمان", de: "Frische Tomate, Gurke, Zwiebel mit Granatapfelsoße", zh: "新鲜番茄、黄瓜、洋葱配石榴汁调味" }, price: 300 },
            { name: { tr: "Gavurdağı Salata", en: "Gavurdağı Salad", ru: "Гавурдагы салат", ar: "سلطة غافورداغي", de: "Gavurdağı Salat" }, description: { tr: "Domates, ceviz, biber ve nar ekşisiyle hazırlanan Antep'in ünlü salatası" }, price: 320 },
            { name: { tr: "Roka Salata", en: "Arugula Salad", ru: "Салат с рукколой", ar: "سلطة جرجير", de: "Rucolasalat" }, description: { tr: "Taze roka, parmesan, ceviz ve balzamik vinegrettle hazırlanan hafif salata" }, price: 320 },
            { name: { tr: "Söğüş Salata", en: "Sliced Salad", ru: "Сёгюш салат", ar: "سلطة سوغوش", de: "Gemischter Salat" }, description: { tr: "Dilimlenmiş domates, biber ve soğanla hazırlanan sade ve taze salata" }, price: 300 },
            { name: { tr: "Mevsim Salata", en: "Seasonal Salad", ru: "Сезонный салат", ar: "سلطة موسمية", de: "Saisonsalat" }, description: { tr: "Günün taze mevsim sebzeleriyle hazırlanan, hafif ve ferahlatıcı salata" }, price: 300 }
        ]
    },
    desserts: {
        key: "desserts",
        section: "sweets",
        name: { tr: "Tatlılar", en: "Desserts", ru: "Десерты", ar: "حلويات", de: "Desserts", zh: "甜点" },
        icon: "🍰",
        items: [
            { name: { tr: "Ayva Tatlısı", en: "Quince Dessert", ru: "Десерт из айвы", ar: "حلوى السفرجل", de: "Quittendessert" }, description: { tr: "Şekerli şurupta pişirilmiş ayva, üstüne kaymak ve cevizle servis edilir" }, price: 240 },
            { name: { tr: "Kabak Tatlısı", en: "Pumpkin Dessert", ru: "Тыквенный десерт", ar: "حلوى اليقطين", de: "Kürbisdessert" }, description: { tr: "Haşlanmış balkabağı şekerle tatlandırılıp üstüne tahin ve cevizle servis edilir" }, price: 240 },
            { name: { tr: "Katmer (2 Kişilik)", en: "Katmer (For 2)", ru: "Катмер (на 2)", ar: "كاتمر (لشخصين)", de: "Katmer (für 2)" }, description: { tr: "Gaziantep'in meşhur tatlısı; Antep fıstığı ve kaymakla dolu çıtır yufka" }, price: 260 },
            { name: { tr: "Künefe", en: "Künefe", ru: "Кюнефе", ar: "كنافة", de: "Künefe", zh: "卡纳费甜饼" }, description: { tr: "Antep fıstıklı telkadayıfa sarılı şaheser peynir tatlısı, şerbetle tatlandırılmış", en: "String cheese wrapped in shredded pastry with pistachios, sweetened with syrup", ru: "Сыр в тонком тесте с фисташками, политое сиропом", ar: "جبنة ملفوفة بعجينة مبشورة بالفستق والشيرة", de: "Käse in knusprigem Teig mit Pistazien und Sirup", zh: "开心果细面包裹的奶酪，糖浆淡化" }, price: 240 },
            { name: { tr: "Top Dondurma", en: "Ice Cream Scoop", ru: "Шарик мороженого", ar: "كرة آيس كريم", de: "Eiskugel" }, description: { tr: "Seçtiğiniz çeşitten bir top dondurma; tatlı sonun mükemmel kapanışı" }, price: 70 }
        ]
    },
    snacks: {
        key: "snacks",
        section: "sweets",
        name: { tr: "Çerezler", en: "Snacks", ru: "Снеки", ar: "مكسرات", de: "Snacks", zh: "零食" },
        icon: "🥜",
        items: [
            { name: { tr: "Antep Fıstık", en: "Pistachios", ru: "Фисташки", ar: "فستق حلبي", de: "Pistazien" }, description: { tr: "Taze ve çıtır Gaziantep fıstığı; rakı masasının vazgeçilmezi" }, price: 380 },
            { name: { tr: "Çikolata", en: "Chocolate", ru: "Шоколад", ar: "شوكولاتة", de: "Schokolade" }, description: { tr: "Sofraya ferahlık katan seçkin çikolata çeşidi" }, price: 150 },
            { name: { tr: "Jelibon", en: "Gummy Bears", ru: "Желейные конфеты", ar: "جيلي بون", de: "Gummibärchen" }, description: { tr: "Renkli ve meyveli jelibonlar; sofrada neşeli bir atıştırmalık" }, price: 150 },
            { name: { tr: "Tuzlu Fıstık", en: "Salted Peanuts", ru: "Солёный арахис", ar: "فول سوداني مملح", de: "Gesalzene Erdnüsse" }, description: { tr: "Kavrulmuş tuzlu fıstık; içki sofrasının klasik tamamlayıcısı" }, price: 300 },
            { name: { tr: "Karışık Kuruyemiş", en: "Mixed Nuts", ru: "Смесь орехов", ar: "مكسرات مشكلة", de: "Nussmischung" }, description: { tr: "Fıstık, badem, ceviz ve fındık karışımı; sohbeti uzatan zengin kuruyemiş tabağı" }, price: 360 }
        ]
    },
    fruits: {
        key: "fruits",
        section: "sweets",
        name: { tr: "Meyveler", en: "Fruits", ru: "Фрукты", ar: "فواكه", de: "Früchte", zh: "水果" },
        icon: "🍉",
        items: [
            { name: { tr: "Ayva", en: "Quince", ru: "Айва", ar: "سفرجل", de: "Quitte" }, description: { tr: "Taze ve doğal ayva; yemek sonrasında ferahlatıcı meyve seçeneği" }, price: 100 },
            { name: { tr: "Karpuz", en: "Watermelon", ru: "Арбуз", ar: "بطيخ", de: "Wassermelone" }, description: { tr: "Taze soğuk karpuz; yazın vazgeçilmezi, rakı sofrasının tamamlayıcısı" }, price: 230 },
            { name: { tr: "Kavun", en: "Melon", ru: "Дыня", ar: "شمام", de: "Melone" }, description: { tr: "Tatlı ve sulu taze kavun; sofraya doğanın sunduğu nefis meyve lezzeti" }, price: 230 },
            { name: { tr: "Meyve Tabağı", en: "Fruit Platter", ru: "Фруктовая тарелка", ar: "طبق فواكه", de: "Obstteller" }, description: { tr: "Mevsimin en taze meyvelerinden seçilen, renkli ve besleyici meyve tabağı" }, price: 300 },
            { name: { tr: "Serpme Meyve", en: "Assorted Fruits", ru: "Ассорти фруктов", ar: "فواكه متنوعة", de: "Obstauswahl" }, description: { tr: "Masaya yayılan mevsimlik çeşit çeşit küçük meyve porsiyonları" }, price: 400 }
        ]
    },
    raki: {
        key: "raki",
        section: "alcohol",
        name: { tr: "Rakılar", en: "Raki", ru: "Раки", ar: "راكي", de: "Raki", zh: "茴香酒" },
        icon: "🥃",
        subcategories: [
            {
                name: "Beylerbeyi Rakı", items: [
                    { name: { tr: "Beylerbeyi Göbek 20cl", en: "20cl", ru: "20cl", ar: "20cl", de: "20cl" }, price: 1050 },
                    { name: { tr: "Beylerbeyi Göbek 35cl", en: "35cl", ru: "35cl", ar: "35cl", de: "35cl" }, price: 1700 },
                    { name: { tr: "Beylerbeyi Göbek 50cl", en: "50cl", ru: "50cl", ar: "50cl", de: "50cl" }, price: 2300 },
                    { name: { tr: "Beylerbeyi Göbek 70cl", en: "70cl", ru: "70cl", ar: "70cl", de: "70cl" }, price: 2950 },
                    { name: { tr: "Beylerbeyi Göbek 100cl", en: "100cl", ru: "100cl", ar: "100cl", de: "100cl" }, price: 3800 }
                ]
            },
            {
                name: "Efe Göbek", items: [
                    { name: { tr: "Efe Göbek 20cl", en: "20cl", ru: "20cl", ar: "20cl", de: "20cl" }, price: 1000 },
                    { name: { tr: "Efe Göbek 35cl", en: "35cl", ru: "35cl", ar: "35cl", de: "35cl" }, price: 1600 },
                    { name: { tr: "Efe Göbek 50cl", en: "50cl", ru: "50cl", ar: "50cl", de: "50cl" }, price: 2200 },
                    { name: { tr: "Efe Göbek 70cl", en: "70cl", ru: "70cl", ar: "70cl", de: "70cl" }, price: 2800 },
                    { name: { tr: "Efe Göbek 100cl", en: "100cl", ru: "100cl", ar: "100cl", de: "100cl" }, price: 3500 }
                ]
            },
            {
                name: "Efe Gold", items: [
                    { name: { tr: "Efe Gold 20cl", en: "20cl", ru: "20cl", ar: "20cl", de: "20cl" }, price: 950 },
                    { name: { tr: "Efe Gold 35cl", en: "35cl", ru: "35cl", ar: "35cl", de: "35cl" }, price: 1350 },
                    { name: { tr: "Efe Gold 50cl", en: "50cl", ru: "50cl", ar: "50cl", de: "50cl" }, price: 1850 },
                    { name: { tr: "Efe Gold 70cl", en: "70cl", ru: "70cl", ar: "70cl", de: "70cl" }, price: 2350 },
                    { name: { tr: "Efe Gold 100cl", en: "100cl", ru: "100cl", ar: "100cl", de: "100cl" }, price: 2900 }
                ]
            },
            {
                name: "Sarı Zeybek", items: [
                    { name: { tr: "Sarı Zeybek 20cl", en: "20cl", ru: "20cl", ar: "20cl", de: "20cl" }, price: 1200 },
                    { name: { tr: "Sarı Zeybek 35cl", en: "35cl", ru: "35cl", ar: "35cl", de: "35cl" }, price: 1700 },
                    { name: { tr: "Sarı Zeybek 50cl", en: "50cl", ru: "50cl", ar: "50cl", de: "50cl" }, price: 2400 },
                    { name: { tr: "Sarı Zeybek 70cl", en: "70cl", ru: "70cl", ar: "70cl", de: "70cl" }, price: 3200 },
                    { name: { tr: "Sarı Zeybek 100cl", en: "100cl", ru: "100cl", ar: "100cl", de: "100cl" }, price: 3700 }
                ]
            },
            {
                name: "Tekirdağ Altın Seri", items: [
                    { name: { tr: "Tekirdağ Altın Seri 20cl", en: "20cl", ru: "20cl", ar: "20cl", de: "20cl" }, price: 950 },
                    { name: { tr: "Tekirdağ Altın Seri 35cl", en: "35cl", ru: "35cl", ar: "35cl", de: "35cl" }, price: 1350 },
                    { name: { tr: "Tekirdağ Altın Seri 50cl", en: "50cl", ru: "50cl", ar: "50cl", de: "50cl" }, price: 1900 },
                    { name: { tr: "Tekirdağ Altın Seri 70cl", en: "70cl", ru: "70cl", ar: "70cl", de: "70cl" }, price: 2400 },
                    { name: { tr: "Tekirdağ Altın Seri 100cl", en: "100cl", ru: "100cl", ar: "100cl", de: "100cl" }, price: 3100 }
                ]
            },
            {
                name: "Yeni Rakı", items: [
                    { name: { tr: "Yeni Rakı 20cl", en: "20cl", ru: "20cl", ar: "20cl", de: "20cl" }, price: 700 },
                    { name: { tr: "Yeni Rakı 35cl", en: "35cl", ru: "35cl", ar: "35cl", de: "35cl" }, price: 1100 },
                    { name: { tr: "Yeni Rakı 50cl", en: "50cl", ru: "50cl", ar: "50cl", de: "50cl" }, price: 1450 },
                    { name: { tr: "Yeni Rakı 70cl", en: "70cl", ru: "70cl", ar: "70cl", de: "70cl" }, price: 1900 },
                    { name: { tr: "Yeni Rakı 100cl", en: "100cl", ru: "100cl", ar: "100cl", de: "100cl" }, price: 2450 }
                ]
            },
            {
                name: "Yeni Seri Rakı", items: [
                    { name: { tr: "Yeni Seri Rakı 20cl", en: "20cl", ru: "20cl", ar: "20cl", de: "20cl" }, price: 950 },
                    { name: { tr: "Yeni Seri Rakı 35cl", en: "35cl", ru: "35cl", ar: "35cl", de: "35cl" }, price: 1200 },
                    { name: { tr: "Yeni Seri Rakı 50cl", en: "50cl", ru: "50cl", ar: "50cl", de: "50cl" }, price: 1450 },
                    { name: { tr: "Yeni Seri Rakı 70cl", en: "70cl", ru: "70cl", ar: "70cl", de: "70cl" }, price: 1900 },
                    { name: { tr: "Yeni Seri Rakı 100cl", en: "100cl", ru: "100cl", ar: "100cl", de: "100cl" }, price: 2750 }
                ]
            }
        ]
    },
    foreign_spirits: {
        key: "foreign_spirits",
        section: "alcohol",
        name: { tr: "Yabancı Alkoller", en: "Imported Spirits", ru: "Импортный алкоголь", ar: "مشروبات مستوردة", de: "Importierte Spirituosen", zh: "进口烈酒" },
        icon: "🥃",
        subcategories: [
            {
                name: "Chivas Whisky", items: [
                    { name: { tr: "Chivas Viski Tek", en: "Single", ru: "Одинарный", ar: "مفرد", de: "Einfach" }, price: 600 },
                    { name: { tr: "Chivas Viski Duble", en: "Double", ru: "Двойной", ar: "مزدوج", de: "Doppelt" }, price: 780 },
                    { name: { tr: "Chivas Viski 35cl", en: "35cl", ru: "35cl", ar: "35cl", de: "35cl" }, price: 2500 },
                    { name: { tr: "Chivas Viski 50cl", en: "50cl", ru: "50cl", ar: "50cl", de: "50cl" }, price: 3200 },
                    { name: { tr: "Chivas Viski 70cl", en: "70cl", ru: "70cl", ar: "70cl", de: "70cl" }, price: 3900 },
                    { name: { tr: "Chivas Viski 100cl", en: "100cl", ru: "100cl", ar: "100cl", de: "100cl" }, price: 5200 }
                ]
            },
            {
                name: "Absolut Vodka", items: [
                    { name: { tr: "Absolut Vodka Enerji", en: "Vodka Energy", ru: "Водка Энерджи", ar: "فودكا طاقة", de: "Vodka Energy" }, price: 750 },
                    { name: { tr: "Absolut Vodka 35cl", en: "35cl", ru: "35cl", ar: "35cl", de: "35cl" }, price: 1950 },
                    { name: { tr: "Absolut Vodka 50cl", en: "50cl", ru: "50cl", ar: "50cl", de: "50cl" }, price: 2800 },
                    { name: { tr: "Absolut Vodka 70cl", en: "70cl", ru: "70cl", ar: "70cl", de: "70cl" }, price: 3500 }
                ]
            },
            {
                name: "Jack Daniels Whisky", items: [
                    { name: { tr: "Jack Daniels Viski Tek", en: "Single", ru: "Одинарный", ar: "مفرد", de: "Einfach" }, price: 600 },
                    { name: { tr: "Jack Daniels Viski Duble", en: "Double", ru: "Двойной", ar: "مزدوج", de: "Doppelt" }, price: 780 },
                    { name: { tr: "Jack Daniels Viski 70cl", en: "70cl", ru: "70cl", ar: "70cl", de: "70cl" }, price: 3900 }
                ]
            },
            {
                name: "Tequila", items: [
                    { name: { tr: "Tekila Shot", en: "Tequila Shot", ru: "Текила шот", ar: "شوت تكيلا", de: "Tequila Shot" }, price: 250 }
                ]
            }
        ]
    },
    beers: {
        key: "beers",
        section: "alcohol",
        name: { tr: "Biralar", en: "Beers", ru: "Пиво", ar: "بيرة", de: "Biere", zh: "啤酒" },
        icon: "🍺",
        items: [
            { name: { tr: "Efes 33cl", en: "Efes 33cl", ru: "Эфес 33cl", ar: "إيفس 33cl", de: "Efes 33cl" }, price: 250 },
            { name: { tr: "Efes Malt 50cl", en: "Efes Malt 50cl", ru: "Эфес Молт 50cl", ar: "إيفس مالت 50cl", de: "Efes Malt 50cl" }, price: 250 },
            { name: { tr: "Bomonti 33cl", en: "Bomonti 33cl", ru: "Бомонти 33cl", ar: "بومونتي 33cl", de: "Bomonti 33cl" }, price: 250 },
            { name: { tr: "Bomonti Filtresiz 50cl", en: "Bomonti Unfiltered 50cl", ru: "Бомонти Нефильтр. 50cl", ar: "بومونتي غير مفلتر 50cl", de: "Bomonti Unfiltr. 50cl" }, price: 280 },
            { name: { tr: "Miller", en: "Miller", ru: "Миллер", ar: "ميلر", de: "Miller" }, price: 250 }
        ]
    },
    wines: {
        key: "wines",
        section: "alcohol",
        name: { tr: "Şaraplar", en: "Wines", ru: "Вина", ar: "نبيذ", de: "Weine", zh: "葡萄酒" },
        icon: "🍷",
        subcategories: [
            {
                name: "Beyaz Şaraplar", items: [
                    { name: { tr: "Kadeh", en: "Glass", ru: "Бокал", ar: "كأس", de: "Glas", zh: "杯装" }, price: 450 },
                    { name: { tr: "Çankaya 35cl", en: "Çankaya 35cl", ru: "Чанкая 35cl", ar: "تشانكايا 35cl", de: "Çankaya 35cl", zh: "Çankaya 35cl" }, price: 1050 },
                    { name: { tr: "Doluca", en: "Doluca", ru: "Долуджа", ar: "دولجا", de: "Doluca", zh: "Doluca" }, price: 1350 },
                    { name: { tr: "Villa Doluca", en: "Villa Doluca", ru: "Вилла Долуджа", ar: "فيلا دولجا", de: "Villa Doluca", zh: "Villa Doluca" }, price: 1400 },
                    { name: { tr: "Çankaya", en: "Çankaya", ru: "Чанкая", ar: "تشانكايا", de: "Çankaya", zh: "Çankaya" }, price: 1250 },
                    { name: { tr: "Antre", en: "Antre", ru: "Антре", ar: "أنتري", de: "Antre", zh: "Antre" }, price: 1350 },
                    { name: { tr: "Selection", en: "Selection", ru: "Селексьон", ar: "سيليكشن", de: "Selection", zh: "Selection" }, price: 1650 },
                    { name: { tr: "Consensus", en: "Consensus", ru: "Консенсус", ar: "كونسينسوس", de: "Consensus", zh: "Consensus" }, price: 1350 }
                ]
            },
            {
                name: "Kırmızı Şaraplar", items: [
                    { name: { tr: "Kadeh", en: "Glass", ru: "Бокал", ar: "كأس", de: "Glas", zh: "杯装" }, price: 450 },
                    { name: { tr: "Yakut 35cl", en: "Yakut 35cl", ru: "Якут 35cl", ar: "ياقوت 35cl", de: "Yakut 35cl", zh: "Yakut 35cl" }, price: 1050 },
                    { name: { tr: "Doluca", en: "Doluca", ru: "Долуджа", ar: "دولجا", de: "Doluca", zh: "Doluca" }, price: 1350 },
                    { name: { tr: "Villa Doluca", en: "Villa Doluca", ru: "Вилла Долуджа", ar: "فيلا دولجا", de: "Villa Doluca", zh: "Villa Doluca" }, price: 1350 },
                    { name: { tr: "Angora", en: "Angora", ru: "Ангора", ar: "أنغورا", de: "Angora", zh: "Angora" }, price: 1650 },
                    { name: { tr: "DLC", en: "DLC", ru: "DLC", ar: "DLC", de: "DLC", zh: "DLC" }, price: 2050 },
                    { name: { tr: "Yakut", en: "Yakut", ru: "Якут", ar: "ياقوت", de: "Yakut", zh: "Yakut" }, price: 1950 },
                    { name: { tr: "Antre", en: "Antre", ru: "Антре", ar: "أنتري", de: "Antre", zh: "Antre" }, price: 1500 },
                    { name: { tr: "Consensus", en: "Consensus", ru: "Консенсус", ar: "كونسينسوس", de: "Consensus", zh: "Consensus" }, price: 1350 },
                    { name: { tr: "Selection", en: "Selection", ru: "Селексьон", ar: "سيليكشن", de: "Selection", zh: "Selection" }, price: 1650 }
                ]
            }
        ]
    },
    beverages: {
        key: "beverages",
        section: "drink",
        name: { tr: "Meşrubatlar", en: "Soft Drinks", ru: "Напитки", ar: "مشروبات غازية", de: "Softdrinks", zh: "软饮料" },
        icon: "🥤",
        items: [
            { name: { tr: "Su", en: "Water", ru: "Вода", ar: "ماء", de: "Wasser" }, price: 25 },
            { name: { tr: "Çay", en: "Tea", ru: "Чай", ar: "شاي", de: "Tee" }, price: 25 },
            { name: { tr: "Ayran", en: "Ayran", ru: "Айран", ar: "عيران", de: "Ayran" }, price: 100 },
            { name: { tr: "Türk Kahvesi", en: "Turkish Coffee", ru: "Турецкий кофе", ar: "قهوة تركية", de: "Türkischer Kaffee" }, price: 130 },
            { name: { tr: "Sade Soda", en: "Plain Soda", ru: "Содовая", ar: "صودا", de: "Sodawasser" }, price: 70 },
            { name: { tr: "Coca Cola", en: "Coca Cola", ru: "Кока-Кола", ar: "كوكا كولا", de: "Coca Cola" }, price: 120 },
            { name: { tr: "Fanta", en: "Fanta", ru: "Фанта", ar: "فانتا", de: "Fanta" }, price: 120 },
            { name: { tr: "Sprite", en: "Sprite", ru: "Спрайт", ar: "سبرايت", de: "Sprite" }, price: 120 },
            { name: { tr: "Enerji İçeceği", en: "Energy Drink", ru: "Энерг. напиток", ar: "مشروب طاقة", de: "Energydrink" }, price: 200 },
            { name: { tr: "Ice Tea", en: "Ice Tea", ru: "Айс Ти", ar: "آيس تي", de: "Eistee" }, price: 120 },
            { name: { tr: "Portakal Suyu", en: "Orange Juice", ru: "Апельсиновый сок", ar: "عصير برتقال", de: "Orangensaft" }, price: 150 },
            { name: { tr: "Şalgam", en: "Turnip Juice", ru: "Шалгам", ar: "شلغم", de: "Rübensaft" }, price: 120 },
            { name: { tr: "Şalgam (1 Lt)", en: "Turnip Juice (1L)", ru: "Шалгам (1л)", ar: "شلغم (1ل)", de: "Rübensaft (1L)" }, price: 200 },
            { name: { tr: "Churchill", en: "Churchill", ru: "Черчилль", ar: "تشرشل", de: "Churchill" }, price: 100 },
            { name: { tr: "Limon Suyu", en: "Lemon Juice", ru: "Лимонный сок", ar: "عصير ليمون", de: "Zitronensaft" }, price: 50 }
        ]
    }
};

function getCurrentLang() { return localStorage.getItem('muhabbetLang') || DEFAULT_LANG; }
function t_obj(obj) { if (!obj) return ''; if (typeof obj === 'string') return obj; const lang = getCurrentLang(); return obj[lang] || obj[DEFAULT_LANG] || ''; }
function getMenuData() {
    const stored = localStorage.getItem('muhabbetMenu');
    return stored ? JSON.parse(stored) : menuData;
}
function saveMenuData(data) { localStorage.setItem('muhabbetMenu', JSON.stringify(data)); }
function resetMenuData() { localStorage.removeItem('muhabbetMenu'); return menuData; }
const AIDescriptionProvider = { generate: function (itemName, lang = 'tr') { const d = { tr: "Usta ellerden çıkan, taze malzemelerle hazırlanan eşsiz bir lezzet deneyimi.", en: "A unique flavor experience prepared by master hands with fresh ingredients.", ru: "Уникальный вкус, приготовленный из свежих ингредиентов.", ar: "تجربة نكهة فريدة من نوعها أعدها أساتذة بمكونات طازجة.", de: "Ein einzigartiges Geschmackserlebnis, frisch von Meisterhand zubereitet.", zh: "大师之手精心烹制，新鲜食材带来独特风味体验。" }; return d[lang]; } };
