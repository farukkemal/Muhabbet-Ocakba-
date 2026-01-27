/**
 * Muhabbet Ocakbaşı - Multilingual Menu Data
 * Supports 5 languages: TR, EN, RU, AR, DE
 */

const DEFAULT_LANG = 'tr';

const menuData = {
    starters: {
        key: "starters",
        section: "food",
        name: { tr: "Başlangıçlar", en: "Appetizers", ru: "Закуски", ar: "المقبلات", de: "Vorspeisen" },
        icon: "🍽️",
        items: [
            { name: { tr: "İçli Köfte", en: "Kibbeh", ru: "Ичли Кюфте", ar: "كبة مقلية", de: "Kibbeh" }, description: { tr: "Zırh kıymalı, cevizli.", en: "Hand-minced meat with walnuts.", ru: "Мясной фарш с грецкими орехами.", ar: "كبة محشوة باللحم والجوز.", de: "Hackfleisch mit Walnüssen." }, price: 130 },
            { name: { tr: "Çiğ Köfte", en: "Chee Kofta", ru: "Чи Кюфте", ar: "كفتة نية", de: "Çiğ Köfte" }, price: 240 },
            { name: { tr: "Patlıcan Söğürme", en: "Roasted Eggplant", ru: "Печеные баклажаны", ar: "باذنجان مشوي", de: "Auberginensalat" }, price: 250 },
            { name: { tr: "Yaprak Ciğer", en: "Leaf Liver", ru: "Листовая печень", ar: "كبدة رقيقة", de: "Leber nach Art des Hauses" }, price: 460 },
            { name: { tr: "Beyaz Peynir", en: "Feta Cheese", ru: "Сыр Фета", ar: "جبنة بيضاء", de: "Schafskäse" }, price: 120 },
            { name: { tr: "Süzme Yoğurt", en: "Strained Yogurt", ru: "Йогурт", ar: "لبنة", de: "Süzme Joghurt" }, price: 220 },
            { name: { tr: "Kuru Patlıcan Dolma", en: "Dried Eggplant Stuffed", ru: "Фаршированные баклажаны", ar: "باذنجان مجفف محشي", de: "Gefüllte getrocknete Auberginen" }, price: 220 },
            { name: { tr: "Pilaki", en: "Pilaki", ru: "Пилаки", ar: "بيلاكي", de: "Pilaki" }, price: 220 },
            { name: { tr: "Soslu Patlıcan", en: "Eggplant with Sauce", ru: "Баклажаны в соусе", ar: "باذنجان بالصلصة", de: "Auberginen in Sauce" }, price: 220 },
            { name: { tr: "Panço", en: "Pancho", ru: "Панчо", ar: "بانشو", de: "Pancho" }, price: 220 },
            { name: { tr: "Patlıcan Salata", en: "Eggplant Salad", ru: "Салат из баклажанов", ar: "سلطة باذنجان", de: "Auberginensalat" }, price: 220 },
            { name: { tr: "Humus", en: "Hummus", ru: "Хумус", ar: "حمص", de: "Hummus" }, price: 240 },
            { name: { tr: "Güveçte Mantar", en: "Mushroom in Casserole", ru: "Грибы в горшочке", ar: "فطر في الفخار", de: "Champignons im Tontopf" }, price: 240 },
            { name: { tr: "Acılı Ezme", en: "Spicy Mash", ru: "Острая закуска", ar: "إزمي حار", de: "Scharfes Ezme" }, price: 220 }
        ]
    },
    wraps: {
        key: "wraps",
        section: "food",
        name: { tr: "Dürümler", en: "Wraps", ru: "Роллы (Дюрюм)", ar: "سندويشات", de: "Wraps" },
        icon: "🌯",
        items: [
            { name: { tr: "Adana Dürüm", en: "Adana Wrap", ru: "Адана ролл", ar: "ساندويتش أدانا", de: "Adana Wrap" }, price: 300 },
            { name: { tr: "Urfa Dürüm", en: "Urfa Wrap", ru: "Урфа ролл", ar: "ساندويتش أورفة", de: "Urfa Wrap" }, price: 300 },
            { name: { tr: "Kuzu Şiş Dürüm", en: "Lamb Shish Wrap", ru: "Ролл с ягненком", ar: "ساندويتش شيش غنم", de: "Lamm-Schaschlik-Wrap" }, price: 350 },
            { name: { tr: "Çöp Şiş Dürüm", en: "Small Shish Wrap", ru: "Ролл с чоп-шиш", ar: "ساندويتش تشوب شيش", de: "Çöp Şiş Wrap" }, price: 330 },
            { name: { tr: "Ciğer Şiş Dürüm", en: "Liver Shish Wrap", ru: "Ролл с печенью", ar: "ساندويتش شيش كبدة", de: "Leber-Schaschlik-Wrap" }, price: 350 },
            { name: { tr: "Tavuk Şiş Dürüm", en: "Chicken Shish Wrap", ru: "Ролл с курицей", ar: "ساندويتش شيش طاووق", de: "Hähnchen-Schaschlik-Wrap" }, price: 280 }
        ]
    },
    oven: {
        key: "oven",
        section: "food",
        name: { tr: "Taş Fırın", en: "Stone Oven", ru: "Каменная печь", ar: "فرن حجري", de: "Steinofen" },
        icon: "🔥",
        items: [
            { name: { tr: "Antep Lahmacun", en: "Antep Lahmacun", ru: "Лахмаджун Антеп", ar: "لحم بعجين عنتاب", de: "Antep Lahmacun" }, price: 150 },
            { name: { tr: "Kaşarlı Pide", en: "Cheese Pide", ru: "Пиде с сыром", ar: "فطيرة بالجبن", de: "Pide mit Käse" }, price: 310 },
            { name: { tr: "Kıymalı Pide", en: "Minced Meat Pide", ru: "Пиде с фаршем", ar: "فطيرة باللحم المفروم", de: "Pide mit Hackfleisch" }, price: 330 },
            { name: { tr: "Karışık Pide", en: "Mixed Pide", ru: "Сборное пиде", ar: "فطيرة مشكلة", de: "Gemischte Pide" }, price: 440 },
            { name: { tr: "Adana Usulü Lahmacun", en: "Adana Style Lahmacun", ru: "Лахмаджун Адана", ar: "لحم بعجين أضنة", de: "Adana Lahmacun" }, price: 450 },
            { name: { tr: "Lahmacun", en: "Lahmacun", ru: "Лахмаджун", ar: "لحم بعجين", de: "Lahmacun" }, price: 150 }
        ]
    },
    pan: {
        key: "pan",
        section: "food",
        name: { tr: "Fırında Tava Çeşitleri", en: "Oven Pan Dishes", ru: "Блюда на сковороде", ar: "أطباق المقلاة", de: "Pfannengerichte" },
        icon: "🍳",
        items: [
            { name: { tr: "Et Tava", en: "Meat Pan", ru: "Мясо на сковороде", ar: "مقلاة لحم", de: "Fleischpfanne" }, price: 750 },
            { name: { tr: "Piliç Tava", en: "Chicken Pan", ru: "Курица на сковороде", ar: "مقلاة دجاج", de: "Hähnchenpfanne" }, price: 600 },
            { name: { tr: "Kanat Tava", en: "Wing Pan", ru: "Крылышки на сковороде", ar: "مقلاة أجنحة", de: "Flügelpfanne" }, price: 600 },
            { name: { tr: "Et Kavurma", en: "Meat Sauté", ru: "Жареное мясо", ar: "قورمة لحم", de: "Fleisch-Sauté" }, price: 750 },
            { name: { tr: "Piliç Kavurma", en: "Chicken Sauté", ru: "Жареная курица", ar: "قورمة دجاج", de: "Hähnchen-Sauté" }, price: 600 }
        ]
    },
    meats: {
        key: "meats",
        section: "food",
        name: { tr: "Etlerimiz", en: "Our Meats", ru: "Мясо", ar: "لحومنا", de: "Fleischgerichte" },
        icon: "🥩",
        items: [
            { name: { tr: "Satır Kebap (Acılı/Acısız)", en: "Hand-Cut Kebab", ru: "Кебаб ручной рубки", ar: "كباب مقطع يدوياً", de: "Handgehacktes Kebab" }, price: 550 },
            { name: { tr: "Fıstıklı Kebap", en: "Pistachio Kebab", ru: "Кебаб с фисташками", ar: "كباب بالفستق", de: "Pistazien-Kebab" }, price: 780 },
            { name: { tr: "Çöp Şiş", en: "Small Shish", ru: "Чоп-шиш", ar: "تشوب شيش", de: "Çöp Şiş" }, price: 650 },
            { name: { tr: "Kuzu Şiş", en: "Lamb Shish", ru: "Шашлык из ягненка", ar: "شيش غنم", de: "Lamm-Schaschlik" }, price: 680 },
            { name: { tr: "Ciğer Şiş", en: "Liver Shish", ru: "Шашлык из печени", ar: "شيش كبدة", de: "Leber-Schaschlik" }, price: 700 },
            { name: { tr: "Yağlı Karışık", en: "Fatty Mixed", ru: "Жирное ассорти", ar: "مشكل دسم", de: "Gefettetes Gemischt" }, price: 850 },
            { name: { tr: "Kuzu Kaburga", en: "Lamb Ribs", ru: "Бараньи ребрышки", ar: "ريش غنم", de: "Lammrippchen" }, price: 750 },
            { name: { tr: "Kuzu Pirzola", en: "Lamb Chops", ru: "Бараньи отбивные", ar: "ريش", de: "Lammkoteletts" }, price: 850 },
            { name: { tr: "Kuzu Külbastı", en: "Lamb Cutlet", ru: "Баранина Кюльбасты", ar: "كولباسي غنم", de: "Lamm-Kotelett" }, price: 850 },
            { name: { tr: "Tavuk Şiş", en: "Chicken Shish", ru: "Куриный шашлык", ar: "شيش طاووق", de: "Hähnchen-Schaschlik" }, price: 450 },
            { name: { tr: "Tavuk Kanat", en: "Chicken Wings", ru: "Куриные крылышки", ar: "أجنحة دجاج", de: "Hähnchenflügel" }, price: 450 },
            { name: { tr: "Ali Nazik (Etli - Kıymalı)", en: "Ali Nazik (Meat/Minced)", ru: "Али Назик", ar: "علي نازك باللحم", de: "Ali Nazik (Fleisch/Hack)" }, price: 680 },
            { name: { tr: "Ali Nazik (Tavuklu)", en: "Ali Nazik (Chicken)", ru: "Али Назик с курицей", ar: "علي نازك بالدجاج", de: "Ali Nazik (Hähnchen)" }, price: 650 },
            { name: { tr: "Sarma Beyti", en: "Sarma Beyti", ru: "Сарма Бейти", ar: "سارما بيتي", de: "Sarma Beyti" }, price: 610 },
            { name: { tr: "Karışık Kebap", en: "Mixed Kebab", ru: "Ассорти кебабов", ar: "كباب مشكل", de: "Gemischter Kebab" }, price: 900 },
            { name: { tr: "Karışık Et Tabağı", en: "Mixed Meat Platter", ru: "Мясное ассорти", ar: "طبق لحم مشكل", de: "Gemischte Fleischplatte" }, price: 950 },
            { name: { tr: "Kuzu Lokum", en: "Lamb Delight", ru: "Нежная баранина", ar: "لقم الغنم", de: "Lamm-Delight" }, price: 900 },
            { name: { tr: "Patlıcan Kebap", en: "Eggplant Kebab", ru: "Баклажан кебаб", ar: "كباب باذنجان", de: "Auberginen-Kebab" }, price: 680 },
            { name: { tr: "Kuzu Küşleme", en: "Lamb Kushleme", ru: "Кюшлеме", ar: "كوشلمي", de: "Küşleme (Lamm)" }, price: 800 },
            { name: { tr: "Dana Lokum", en: "Beef Delight", ru: "Нежная говядина", ar: "لقم العجل", de: "Rinder-Delight" }, price: 950 },
            { name: { tr: "Antrikot", en: "Entrecote", ru: "Антрекот", ar: "أنتريكوت", de: "Entrecote" }, price: 900 },
            { name: { tr: "Izgara Köfte", en: "Grilled Meatballs", ru: "Котлеты на гриле", ar: "كفتة مشوية", de: "Gegrillte Köfte" }, price: 460 }
        ]
    },
    desserts: {
        key: "desserts",
        section: "food",
        name: { tr: "Tatlılar", en: "Desserts", ru: "Десерты", ar: "الحلويات", de: "Desserts" },
        icon: "🍰",
        items: [
            { name: { tr: "Ayva Tatlısı", en: "Quince Dessert", ru: "Айва татлысы", ar: "حلوى السفرجل", de: "Quitten-Dessert" }, price: 240 },
            { name: { tr: "Kabak Tatlısı", en: "Pumpkin Dessert", ru: "Тыквенный десерт", ar: "حلوى اليقطين", de: "Kürbis-Dessert" }, price: 240 },
            { name: { tr: "Fındık Sarma Baklava", en: "Hazelnut Baklava", ru: "Баклава с фундуком", ar: "بقلاوة بالبندق", de: "Haselnuss-Baklava" }, price: 150 },
            { name: { tr: "Künefe", en: "Kunafa", ru: "Кюнефе", ar: "كنافة", de: "Künefe" }, price: 240 },
            { name: { tr: "Katmer", en: "Katmer", ru: "Катмер", ar: "قطايف", de: "Katmer" }, price: 240 }
        ]
    },
    beverages: {
        key: "beverages",
        section: "drink",
        name: { tr: "Meşrubatlar", en: "Soft Drinks", ru: "Напитки", ar: "مشروبات باردة", de: "Erfrischungsgetränke" },
        icon: "🥤",
        items: [
            { name: { tr: "Kola", en: "Cola", ru: "Кола", ar: "كولا", de: "Cola" }, price: 95 },
            { name: { tr: "Fanta", en: "Fanta", ru: "Фанта", ar: "فانتا", de: "Fanta" }, price: 95 },
            { name: { tr: "Soda", en: "Mineral Water", ru: "Минералка", ar: "مياه معدنية", de: "Mineralwasser" }, price: 75 },
            { name: { tr: "Şalgam", en: "Turnip Juice", ru: "Шалгам", ar: "شالغلم", de: "Schalgam-Saft" }, price: 70 },
            { name: { tr: "Ayran", en: "Ayran", ru: "Айран", ar: "عيران", de: "Ayran" }, price: 85 }
        ]
    },
    wines: {
        key: "wines",
        section: "drink",
        name: { tr: "Şaraplar", en: "Wines", ru: "Вина", ar: "نبيذ", de: "Weine" },
        icon: "🍷",
        subcategories: [
            {
                name: "BEYAZ ŞARAPLAR",
                items: [
                    { name: { tr: "Kadeh", en: "Glass", ru: "Бокал", ar: "كأس", de: "Glas" }, price: 300 },
                    { name: { tr: "Çankaya 35 CL", en: "Cankaya 35 CL", ru: "Чанкая 35 CL", ar: "تشانكايا ٣٥ مل", de: "Cankaya 35 CL" }, price: 900 },
                    { name: { tr: "Doluca", en: "Doluca", ru: "Долуджа", ar: "دولجا", de: "Doluca" }, price: 1200 },
                    { name: { tr: "Villa Doluca", en: "Villa Doluca", ru: "Вилла Долуджа", ar: "فيلا دولجا", de: "Villa Doluca" }, price: 1250 },
                    { name: { tr: "Çankaya", en: "Cankaya", ru: "Чанкая", ar: "تشانكايا", de: "Cankaya" }, price: 1100 },
                    { name: { tr: "Antre", en: "Antre", ru: "Антре", ar: "أنتري", de: "Antre" }, price: 1200 },
                    { name: { tr: "Selection", en: "Selection", ru: "Селекшн", ar: "سيليكشن", de: "Selection" }, price: 1500 },
                    { name: { tr: "Consensus", en: "Consensus", ru: "Консенсус", ar: "كونسينسوس", de: "Consensus" }, price: 1200 }
                ]
            },
            {
                name: "KIRMIZI ŞARAPLAR",
                items: [
                    { name: { tr: "Kadeh", en: "Glass", ru: "Бокал", ar: "كأس", de: "Glas" }, price: 300 },
                    { name: { tr: "Yakut 35 CL", en: "Yakut 35 CL", ru: "Якут 35 CL", ar: "ياقوت ٣٥ مل", de: "Yakut 35 CL" }, price: 900 },
                    { name: { tr: "Doluca", en: "Doluca", ru: "Долуджа", ar: "دولجا", de: "Doluca" }, price: 1200 },
                    { name: { tr: "Villa Doluca", en: "Villa Doluca", ru: "Вилла Долуджа", ar: "فيلا دولجا", de: "Villa Doluca" }, price: 1200 },
                    { name: { tr: "Angora", en: "Angora", ru: "Ангора", ar: "أنغورا", de: "Angora" }, price: 1500 },
                    { name: { tr: "DLC", en: "DLC", ru: "DLC", ar: "DLC", de: "DLC" }, price: 1900 },
                    { name: { tr: "Yakut", en: "Yakut", ru: "Якут", ar: "ياقوت", de: "Yakut" }, price: 1800 },
                    { name: { tr: "Antre", en: "Antre", ru: "Антре", ar: "أنتري", de: "Antre" }, price: 1350 },
                    { name: { tr: "Consensus", en: "Consensus", ru: "Консенсус", ar: "كونسينسوس", de: "Consensus" }, price: 1200 },
                    { name: { tr: "Selection", en: "Selection", ru: "Селекшн", ar: "سيليكشن", de: "Selection" }, price: 1500 }
                ]
            }
        ]
    },
    beers: {
        key: "beers",
        section: "drink",
        name: { tr: "Biralar", en: "Beers", ru: "Пиво", ar: "بيرة", de: "Biere" },
        icon: "🍺",
        items: [
            { name: { tr: "Efes 33 cl", en: "Efes 33 cl", ru: "Эфес 33 cl", ar: "إيفس ٣٣ مل", de: "Efes 33 cl" }, price: 240 },
            { name: { tr: "Efes Malt 50CL", en: "Efes Malt 50CL", ru: "Эфес Мальт 50CL", ar: "إيفس مالت ٥٠ مل", de: "Efes Malt 50CL" }, price: 250 },
            { name: { tr: "Bomonti 33CL", en: "Bomonti 33CL", ru: "Бомонти 33CL", ar: "بومونتي ٣٣ مل", de: "Bomonti 33CL" }, price: 240 },
            { name: { tr: "Bomonti Filtresiz 50 CL", en: "Bomonti Unfiltered 50 CL", ru: "Бомонти нефильтрованное 50 CL", ar: "بومونتي غير مفلتر ٥٠ مل", de: "Bomonti Unfiltriert 50 CL" }, price: 280 },
            { name: { tr: "Miller", en: "Miller", ru: "Миллер", ar: "ميلر", de: "Miller" }, price: 220 }
        ]
    },
    raki: {
        key: "raki",
        section: "drink",
        name: { tr: "Rakılar", en: "Raki", ru: "Ракы", ar: "راكي", de: "Raki" },
        icon: "🥃",
        subcategories: [
            {
                name: "YENİ RAKI",
                items: [
                    { name: { tr: "Tek", en: "Single", ru: "Порция", ar: "مفرد", de: "Einfach" }, price: 250 },
                    { name: { tr: "Double", en: "Double", ru: "Двойная", ar: "مزدوج", de: "Doppelt" }, price: 300 },
                    { name: { tr: "20 CL", en: "20 CL", ru: "20 CL", ar: "٢٠ مل", de: "20 CL" }, price: 750 },
                    { name: { tr: "35 CL", en: "35 CL", ru: "35 CL", ar: "٣٥ مل", de: "35 CL" }, price: 1150 },
                    { name: { tr: "50 CL", en: "50 CL", ru: "50 CL", ar: "٥٠ مل", de: "50 CL" }, price: 1450 },
                    { name: { tr: "70 CL", en: "70 CL", ru: "70 CL", ar: "٧٠ مل", de: "70 CL" }, price: 2000 },
                    { name: { tr: "100 CL", en: "100 CL", ru: "100 CL", ar: "١٠٠ مل", de: "100 CL" }, price: 2700 }
                ]
            },
            {
                name: "YENİ RAKI YENİ SERİ",
                items: [
                    { name: { tr: "20 CL", en: "20 CL", ru: "20 CL", ar: "٢٠ مل", de: "20 CL" }, price: 740 },
                    { name: { tr: "35 CL", en: "35 CL", ru: "35 CL", ar: "٣٥ مل", de: "35 CL" }, price: 1250 },
                    { name: { tr: "70 CL", en: "70 CL", ru: "70 CL", ar: "٧٠ مل", de: "70 CL" }, price: 2200 }
                ]
            },
            {
                name: "TEKİRDAĞ ALTIN SERİ",
                items: [
                    { name: { tr: "20 CL", en: "20 CL", ru: "20 CL", ar: "٢٠ مل", de: "20 CL" }, price: 850 },
                    { name: { tr: "35 CL", en: "35 CL", ru: "35 CL", ar: "٣٥ مل", de: "35 CL" }, price: 1260 },
                    { name: { tr: "70 CL", en: "70 CL", ru: "70 CL", ar: "٧٠ مل", de: "70 CL" }, price: 2120 }
                ]
            },
            {
                name: "YEŞİL EFE",
                items: [
                    { name: { tr: "Tek", en: "Single", ru: "Порция", ar: "مفرد", de: "Einfach" }, price: 250 },
                    { name: { tr: "Double", en: "Double", ru: "Двойная", ar: "مزدوج", de: "Doppelt" }, price: 300 },
                    { name: { tr: "20 CL", en: "20 CL", ru: "20 CL", ar: "٢٠ مل", de: "20 CL" }, price: 900 },
                    { name: { tr: "35 CL", en: "35 CL", ru: "35 CL", ar: "٣٥ مل", de: "35 CL" }, price: 1350 },
                    { name: { tr: "70 CL", en: "70 CL", ru: "70 CL", ar: "٧٠ مل", de: "70 CL" }, price: 2200 }
                ]
            },
            {
                name: "BEYLERBEYİ RAKI",
                items: [
                    { name: { tr: "Double", en: "Double", ru: "Двойная", ar: "مزدوج", de: "Doppelt" }, price: 380 },
                    { name: { tr: "35 CL", en: "35 CL", ru: "35 CL", ar: "٣٥ مل", de: "35 CL" }, price: 1450 }
                ]
            },
            {
                name: "SARI ZEYBEK RAKI",
                items: [
                    { name: { tr: "Double", en: "Double", ru: "Двойная", ar: "مزدوج", de: "Doppelt" }, price: 380 },
                    { name: { tr: "35 CL", en: "35 CL", ru: "35 CL", ar: "٣٥ مل", de: "35 CL" }, price: 1400 },
                    { name: { tr: "70 CL", en: "70 CL", ru: "70 CL", ar: "٧٠ مل", de: "70 CL" }, price: 2200 },
                    { name: { tr: "100 CL", en: "100 CL", ru: "100 CL", ar: "١٠٠ مل", de: "100 CL" }, price: 3000 }
                ]
            }
        ]
    }
};

/**
 * Get current language helper
 */
function getCurrentLang() {
    return localStorage.getItem('muhabbetLang') || DEFAULT_LANG;
}

/**
 * Get localized string from object
 */
function t_obj(obj) {
    if (!obj) return '';
    if (typeof obj === 'string') return obj;
    const lang = getCurrentLang();
    return obj[lang] || obj[DEFAULT_LANG] || '';
}

/**
 * Get menu data (with auto-migration if needed)
 */
function getMenuData() {
    let stored = localStorage.getItem('muhabbetMenu');
    if (stored) {
        try {
            let data = JSON.parse(stored);
            // Check if data needs migration to multilingual structure
            if (data.starters && typeof data.starters.name === 'string') {
                return migrateData(data);
            }
            return data;
        } catch (e) {
            console.error('Error parsing menu data:', e);
        }
    }
    return menuData;
}

/**
 * Migrate old string-based data to new object-based multilingual data
 */
function migrateData(oldData) {
    const newData = {};
    Object.keys(oldData).forEach(key => {
        const cat = oldData[key];
        newData[key] = {
            ...cat,
            name: { tr: cat.name, en: cat.name, ru: cat.name, ar: cat.name, de: cat.name }
        };

        if (cat.items) {
            newData[key].items = cat.items.map(item => ({
                ...item,
                name: { tr: item.name, en: item.name, ru: item.name, ar: item.name, de: item.name },
                description: { tr: '', en: '', ru: '', ar: '', de: '' }
            }));
        }

        if (cat.subcategories) {
            newData[key].subcategories = cat.subcategories.map(sub => ({
                ...sub,
                items: sub.items.map(item => ({
                    ...item,
                    name: { tr: item.name, en: item.name, ru: item.name, ar: item.name, de: item.name },
                    description: { tr: '', en: '', ru: '', ar: '', de: '' }
                }))
            }));
        }
    });
    saveMenuData(newData);
    return newData;
}

function saveMenuData(data) {
    localStorage.setItem('muhabbetMenu', JSON.stringify(data));
}

function resetMenuData() {
    localStorage.removeItem('muhabbetMenu');
    return menuData;
}

/**
 * AI Description Engine (Simulated)
 */
const AIDescriptionProvider = {
    generate: function (itemName, lang = 'tr') {
        const descriptions = {
            tr: "Usta ellerden çıkan, taze malzemelerle hazırlanan eşsiz bir lezzet deneyimi.",
            en: "A unique flavor experience prepared by master hands with fresh ingredients.",
            ru: "Уникальный вкус, приготовленный из свежих ингредиентов.",
            ar: "تجربة نكهة فريدة من نوعها أعدها أساتذة بمكونات طازجة.",
            de: "Ein einzigartiges Geschmackserlebnis, frisch von Meisterhand zubereitet."
        };
        return descriptions[lang];
    }
};
