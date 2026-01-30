/**
 * Muhabbet Ocakbaşı - Multilingual Menu Data
 * Supports 5 languages: TR, EN, RU, AR, DE
 */

const DEFAULT_LANG = 'tr';

const menuData = {
    starters: {
        key: "starters",
        section: "food",
        name: { tr: "Mezeler", en: "Meze", ru: "Мезе", ar: "مقبلات", de: "Meze" },
        icon: "🍽️",
        items: [
            { name: { tr: "Acılı Ezme", en: "Spicy Paste", ru: "Острая паста", ar: "معجون حار", de: "Scharfe Paste" }, price: 260 },
            { name: { tr: "Amerikan Salatası", en: "American Salad", ru: "Американский салат", ar: "سلطة أمريكية", de: "Amerikanischer Salat" }, price: 260 },
            { name: { tr: "Arnavut Ciğeri", en: "Albanian Liver", ru: "Албанская печень", ar: "كبدة ألبانية", de: "Albanische Leber" }, price: 450 },
            { name: { tr: "Atom", en: "Atom (Spicy Meze)", ru: "Атом", ar: "أتوم", de: "Atom" }, price: 260 },
            { name: { tr: "Beyaz Peynir", en: "White Cheese", ru: "Белый сыр", ar: "جبنة بيضاء", de: "Weißkäse" }, price: 150 },
            { name: { tr: "Biber Borani", en: "Pepper Borani", ru: "Перец Борани", ar: "بوراني فلفل", de: "Paprika Borani" }, price: 260 },
            { name: { tr: "Cacık", en: "Cacık (Yogurt Dip)", ru: "Джаджик", ar: "جاجيك", de: "Cacık" }, price: 260 },
            { name: { tr: "Çiğ Köfte", en: "Raw Meatball", ru: "Чиг Кёфте", ar: "كفتة نية", de: "Çiğ Köfte" }, price: 320 },
            { name: { tr: "Deniz Börülcesi", en: "Sea Beans", ru: "Морские бобы", ar: "فاصوليا البحر", de: "Meeresbohnen" }, price: 260 },
            { name: { tr: "Dolgu Biber", en: "Stuffed Pepper", ru: "Фарш. перец", ar: "فلفل محشي", de: "Gefüllte Paprika" }, price: 260 },
            { name: { tr: "Domates Kurusu", en: "Sun-Dried Tomato", ru: "Вяленые томаты", ar: "طماطم مجففة", de: "Getrocknete Tomate" }, price: 260 },
            { name: { tr: "Enginar", en: "Artichoke", ru: "Артишок", ar: "خرشوف", de: "Artischocke" }, price: 300 },
            { name: { tr: "Fava", en: "Fava Beans", ru: "Фава", ar: "فول", de: "Saubohnen" }, price: 260 },
            { name: { tr: "Girit Ezmesi", en: "Cretan Paste", ru: "Критская паста", ar: "معجون كريتي", de: "Kretische Paste" }, price: 260 },
            { name: { tr: "Havuç Tarator", en: "Carrot Tarator", ru: "Морковный таратор", ar: "تاراتور جزر", de: "Karotten Tarator" }, price: 260 },
            { name: { tr: "Haydari", en: "Haydari", ru: "Хайдари", ar: "حيدري", de: "Haydari" }, price: 260 },
            { name: { tr: "Humus Sade", en: "Plain Hummus", ru: "Хумус", ar: "حمص", de: "Hummus" }, price: 260 },
            { name: { tr: "Kabak Şahane", en: "Zucchini Delight", ru: "Кабачки Шахане", ar: "كوسا رائعة", de: "Zucchini Delight" }, price: 260 },
            { name: { tr: "Kaya Koruğu", en: "Rock Samphire", ru: "Морской укроп", ar: "سمفير صخري", de: "Meerfenchel" }, price: 260 },
            { name: { tr: "Kereviz", en: "Celery Root", ru: "Сельдерей", ar: "كرفس", de: "Sellerie" }, price: 260 },
            { name: { tr: "Köpeoğlu", en: "Köpeoğlu", ru: "Кёпеоглу", ar: "كوبيوغلو", de: "Köpeoğlu" }, price: 260 },
            { name: { tr: "Köz Biber", en: "Roasted Pepper", ru: "Печёный перец", ar: "فلفل مشوي", de: "Geröstete Paprika" }, price: 260 },
            { name: { tr: "Kuru Patlıcan Dolma", en: "Stuffed Dried Eggplant", ru: "Фарш. баклажан", ar: "باذنجان محشي", de: "Gefüllte Aubergine" }, price: 260 },
            { name: { tr: "Makopaşa", en: "Makopaşa", ru: "Макопаша", ar: "ماكوباشا", de: "Makopaşa" }, price: 260 },
            { name: { tr: "Muhammara", en: "Muhammara", ru: "Мухаммара", ar: "محمرة", de: "Muhammara" }, price: 260 },
            { name: { tr: "Ordövr Tabağı", en: "Appetizer Platter", ru: "Ассорти закусок", ar: "طبق مقبلات", de: "Vorspeisenplatte" }, price: 400 },
            { name: { tr: "Pancar Turşusu", en: "Pickled Beets", ru: "Маринованная свёкла", ar: "مخلل شمندر", de: "Eingelegte Rote Beete" }, price: 260 },
            { name: { tr: "Patlıcan Salata", en: "Eggplant Salad", ru: "Салат из баклажанов", ar: "سلطة باذنجان", de: "Auberginensalat" }, price: 260 },
            { name: { tr: "Pazı Salata", en: "Chard Salad", ru: "Салат из мангольда", ar: "سلطة سلق", de: "Mangoldsalat" }, price: 260 },
            { name: { tr: "Peynirli Nar Topu", en: "Cheese Pomegranate Ball", ru: "Сырный шар с гранатом", ar: "كرة رمان بالجبن", de: "Käse-Granatapfel-Kugel" }, price: 260 },
            { name: { tr: "Pilaki", en: "Pilaki", ru: "Пилаки", ar: "بيلاكي", de: "Pilaki" }, price: 260 },
            { name: { tr: "Semizotu", en: "Purslane", ru: "Портулак", ar: "رجلة", de: "Portulak" }, price: 260 },
            { name: { tr: "Soslu Patlıcan", en: "Eggplant in Sauce", ru: "Баклажаны в соусе", ar: "باذنجان بالصلصة", de: "Aubergine in Sauce" }, price: 260 },
            { name: { tr: "Süzme Yoğurt", en: "Strained Yogurt", ru: "Процеженный йогурт", ar: "لبنة", de: "Streichjoghurt" }, price: 220 },
            { name: { tr: "Şakşuka", en: "Şakşuka", ru: "Шакшука", ar: "شكشوكة", de: "Şakşuka" }, price: 260 },
            { name: { tr: "Turşu", en: "Pickles", ru: "Соленья", ar: "مخللات", de: "Eingelegtes Gemüse" }, price: 260 },
            { name: { tr: "Yaprak Sarma", en: "Stuffed Grape Leaves", ru: "Долма", ar: "ورق عنب", de: "Gefüllte Weinblätter" }, price: 260 }
        ]
    },
    hot_starters: {
        key: "hot_starters",
        section: "food",
        name: { tr: "Ara Sıcaklar", en: "Hot Starters", ru: "Горячие закуски", ar: "مقبلات ساخنة", de: "Warme Vorspeisen" },
        icon: "🥘",
        items: [
            { name: { tr: "Ayvalık Lokma", en: "Ayvalık Fritters", ru: "Айвалык Локма", ar: "لقمة أيفاليك", de: "Ayvalık Krapfen" }, price: 250 },
            { name: { tr: "Bira Sepeti", en: "Beer Basket", ru: "Пивная корзина", ar: "سلة بيرة", de: "Bierkorb" }, price: 400 },
            { name: { tr: "Güveçte Mantar", en: "Mushroom Casserole", ru: "Грибы в горшочке", ar: "فطر بالفخار", de: "Pilze im Tontopf" }, price: 350 },
            { name: { tr: "Humus Pastırmalı", en: "Hummus with Pastrami", ru: "Хумус с пастырмой", ar: "حمص بالبسطرمة", de: "Hummus mit Pastırma" }, price: 370 },
            { name: { tr: "İçli Köfte (Haşlama)", en: "Boiled Kibbeh", ru: "Варёные Ичли Кёфте", ar: "كبة مسلوقة", de: "Gekochte Kibbeh" }, price: 160 },
            { name: { tr: "İçli Köfte (Kızartma)", en: "Fried Kibbeh", ru: "Жареные Ичли Кёфте", ar: "كبة مقلية", de: "Frittierte Kibbeh" }, price: 160 },
            { name: { tr: "İstiridye Izgara", en: "Grilled Oyster Mushroom", ru: "Жареные вешенки", ar: "فطر محاري مشوي", de: "Gegrillte Austernpilze" }, price: 420 },
            { name: { tr: "İstiridye Mantar Kremalı", en: "Creamy Oyster Mushroom", ru: "Вешенки в сливках", ar: "فطر محاري بالكريمة", de: "Austernpilze in Sahne" }, price: 420 },
            { name: { tr: "Kalamar Tava", en: "Fried Calamari", ru: "Жареные кальмары", ar: "كالاماري مقلي", de: "Gebratene Calamari" }, price: 700 },
            { name: { tr: "Karides Güveç", en: "Shrimp Casserole", ru: "Креветки в горшочке", ar: "جمبري بالفخار", de: "Garnelen im Tontopf" }, price: 720 },
            { name: { tr: "Karides Tereyağlı", en: "Butter Shrimp", ru: "Креветки в масле", ar: "جمبري بالزبدة", de: "Butter-Garnelen" }, price: 700 },
            { name: { tr: "Paçanga Böreği", en: "Paçanga Pastry", ru: "Пачанга бёрек", ar: "بورك باجانغا", de: "Paçanga Börek" }, price: 280 },
            { name: { tr: "Patates Tava", en: "Fried Potatoes", ru: "Жареный картофель", ar: "بطاطس مقلية", de: "Bratkartoffeln" }, price: 300 },
            { name: { tr: "Patlıcan Söğürme", en: "Charred Eggplant", ru: "Обжаренные баклажаны", ar: "باذنجان مشوي", de: "Gegrillte Aubergine" }, price: 350 },
            { name: { tr: "Pazı Kavurma", en: "Sautéed Chard", ru: "Жареный мангольд", ar: "سلق مقلي", de: "Gebratener Mangold" }, price: 350 },
            { name: { tr: "Sıcak Peynir", en: "Hot Cheese", ru: "Горячий сыр", ar: "جبنة ساخنة", de: "Heißer Käse" }, price: 300 },
            { name: { tr: "Yaprak Ciğer", en: "Thin Liver Slices", ru: "Тонкая печень", ar: "كبدة رقيقة", de: "Dünne Leberscheiben" }, price: 600 }
        ]
    },
    meats: {
        key: "meats",
        section: "food",
        name: { tr: "Etler", en: "Meats", ru: "Мясо", ar: "لحوم", de: "Fleisch" },
        icon: "🥩",
        items: [
            { name: { tr: "Adana Kebap (Porsiyon)", en: "Adana Kebab (Portion)", ru: "Адана кебаб (порция)", ar: "كباب أضنة (حصة)", de: "Adana Kebab (Portion)" }, price: 650 },
            { name: { tr: "Urfa Kebap (Porsiyon)", en: "Urfa Kebab (Portion)", ru: "Урфа кебаб (порция)", ar: "كباب أورفة (حصة)", de: "Urfa Kebab (Portion)" }, price: 650 },
            { name: { tr: "Ali Nazik (Kıymalı)", en: "Ali Nazik (Minced)", ru: "Али Назик (с фаршем)", ar: "علي نازك (مفروم)", de: "Ali Nazik (Hackfleisch)" }, price: 850 },
            { name: { tr: "Antrikot", en: "Ribeye Steak", ru: "Антрекот", ar: "ستيك ريب آي", de: "Ribeye-Steak" }, price: 1000 },
            { name: { tr: "Billur", en: "Billur", ru: "Биллур", ar: "بيلور", de: "Billur" }, price: 400 },
            { name: { tr: "Ciğer Şiş (Porsiyon)", en: "Liver Skewer (Portion)", ru: "Шашлык из печени (порция)", ar: "شيش كبدة (حصة)", de: "Leber-Spieß (Portion)" }, price: 700 },
            { name: { tr: "Çöp Şiş (Porsiyon)", en: "Small Meat Skewer (Portion)", ru: "Чёп шиш (порция)", ar: "شيش صغير (حصة)", de: "Kleine Fleischspieße (Portion)" }, price: 750 },
            { name: { tr: "Kaburga", en: "Lamb Ribs", ru: "Рёбрышки", ar: "ريش غنم", de: "Lammrippen" }, price: 850 },
            { name: { tr: "Kuzu Külbastı", en: "Lamb Cutlet", ru: "Кюльбасты", ar: "كولباستي غنم", de: "Lamm-Kotelett" }, price: 850 },
            { name: { tr: "Kuzu Pirzola", en: "Lamb Chops", ru: "Бараньи отбивные", ar: "ريش غنم", de: "Lammkoteletts" }, price: 1000 },
            { name: { tr: "Kuzu Şiş (Porsiyon)", en: "Lamb Skewer (Portion)", ru: "Шашлык из ягнёнка (порция)", ar: "شيش غنم (حصة)", de: "Lamm-Spieß (Portion)" }, price: 850 },
            { name: { tr: "Patlıcan Kebap", en: "Eggplant Kebab", ru: "Кебаб с баклажаном", ar: "كباب باذنجان", de: "Auberginen-Kebab" }, price: 850 },
            { name: { tr: "Sarma Beyti", en: "Wrapped Beyti", ru: "Сарма Бейти", ar: "بيتي ملفوف", de: "Gerolltes Beyti" }, price: 850 },
            { name: { tr: "Tavuk Kanat", en: "Chicken Wings", ru: "Куриные крылышки", ar: "أجنحة دجاج", de: "Hähnchenflügel" }, price: 600 },
            { name: { tr: "Tavuk Şiş", en: "Chicken Skewer", ru: "Куриный шашлык", ar: "شيش طاووق", de: "Hähnchen-Spieß" }, price: 600 },
            { name: { tr: "Yağlı Karalı (Porsiyon)", en: "Fatty Mixed Grill (Portion)", ru: "Жирное ассорти (порция)", ar: "مشكل دسم (حصة)", de: "Fettes Grillmix (Portion)" }, price: 1000 },
            { name: { tr: "Ali Nazik (Etli)", en: "Ali Nazik (With Meat)", ru: "Али Назик (с мясом)", ar: "علي نازك (باللحم)", de: "Ali Nazik (mit Fleisch)" }, price: 900 },
            { name: { tr: "Yağlı Karalı (Adet)", en: "Fatty Mixed (Piece)", ru: "Жирное ассорти (шт)", ar: "مشكل دسم (قطعة)", de: "Fettes Grillmix (Stück)" }, price: 350 },
            { name: { tr: "Izgara Köfte", en: "Grilled Meatballs", ru: "Жареные кёфте", ar: "كفتة مشوية", de: "Gegrillte Köfte" }, price: 650 },
            { name: { tr: "Izgara Kaşarlı Köfte", en: "Grilled Cheese Meatballs", ru: "Кёфте с сыром", ar: "كفتة بالجبن", de: "Köfte mit Käse" }, price: 680 },
            { name: { tr: "Kuzu Küşleme", en: "Lamb Küşleme", ru: "Кюшлеме", ar: "كوشلمة غنم", de: "Lamm Küşleme" }, price: 1000 },
            { name: { tr: "Kuzu Lokum (Porsiyon)", en: "Lamb Delight (Portion)", ru: "Кузу Локум (порция)", ar: "لقم غنم (حصة)", de: "Lamm Delight (Portion)" }, price: 1000 },
            { name: { tr: "Kuzu Lokum (Adet)", en: "Lamb Delight (Piece)", ru: "Кузу Локум (шт)", ar: "لقم غنم (قطعة)", de: "Lamm Delight (Stück)" }, price: 325 },
            { name: { tr: "Kalem Pirzola", en: "Pencil Chops", ru: "Калем пирзола", ar: "بيرزولا قلم", de: "Kalem Pirzola" }, price: 400 },
            { name: { tr: "Dana Lokum (Porsiyon)", en: "Beef Delight (Portion)", ru: "Дана Локум (порция)", ar: "لقم عجل (حصة)", de: "Rinder Delight (Portion)" }, price: 1000 },
            { name: { tr: "Dana Lokum (Adet)", en: "Beef Delight (Piece)", ru: "Дана Локум (шт)", ar: "لقم عجل (قطعة)", de: "Rinder Delight (Stück)" }, price: 550 },
            { name: { tr: "Böbrek", en: "Kidney", ru: "Почки", ar: "كلى", de: "Nieren" }, price: 600 }
        ]
    },
    oven: {
        key: "oven",
        section: "food",
        name: { tr: "Taş Fırın", en: "Stone Oven", ru: "Каменная печь", ar: "فرن حجري", de: "Steinofen" },
        icon: "🔥",
        items: [
            { name: { tr: "Lahmacun", en: "Turkish Pizza", ru: "Лахмаджун", ar: "لحم بعجين", de: "Lahmacun" }, price: 200 },
            { name: { tr: "Antep Lahmacun", en: "Antep Lahmacun", ru: "Антеп Лахмаджун", ar: "لحم بعجين عنتاب", de: "Antep Lahmacun" }, price: 200 },
            { name: { tr: "Kaşarlı Pide", en: "Cheese Pide", ru: "Пиде с сыром", ar: "بيدا بالجبن", de: "Käse-Pide" }, price: 400 },
            { name: { tr: "Kıymalı Pide", en: "Minced Meat Pide", ru: "Пиде с фаршем", ar: "بيدا باللحم المفروم", de: "Hackfleisch-Pide" }, price: 450 },
            { name: { tr: "Kuşbaşılı Pide", en: "Diced Meat Pide", ru: "Пиде с кусочками мяса", ar: "بيدا بقطع اللحم", de: "Würfelfleisch-Pide" }, price: 520 },
            { name: { tr: "Kıymalı Yumurtalı Pide", en: "Minced Meat & Egg Pide", ru: "Пиде с фаршем и яйцом", ar: "بيدا باللحم والبيض", de: "Hackfleisch-Ei-Pide" }, price: 480 },
            { name: { tr: "Kaşarlı Kuşbaşılı Pide", en: "Cheese & Diced Meat Pide", ru: "Пиде с сыром и мясом", ar: "بيدا بالجبن واللحم", de: "Käse-Würfelfleisch-Pide" }, price: 550 },
            { name: { tr: "Karışık Pide", en: "Mixed Pide", ru: "Смешанное пиде", ar: "بيدا مشكل", de: "Gemischte Pide" }, price: 500 },
            { name: { tr: "Fındık Lahmacun", en: "Mini Lahmacun", ru: "Мини Лахмаджун", ar: "لحم بعجين صغير", de: "Mini Lahmacun" }, price: 100 },
            { name: { tr: "Ceviz Lahmacun", en: "Walnut Lahmacun", ru: "Лахмаджун с орехами", ar: "لحم بعجين بالجوز", de: "Walnuss Lahmacun" }, price: 160 }
        ]
    },
    fish: {
        key: "fish",
        section: "food",
        name: { tr: "Balık", en: "Fish", ru: "Рыба", ar: "سمك", de: "Fisch" },
        icon: "🐟",
        items: [
            { name: { tr: "Çupra", en: "Sea Bream", ru: "Дорада", ar: "سمك الدنيس", de: "Dorade" }, price: 650 },
            { name: { tr: "Levrek", en: "Sea Bass", ru: "Сибас", ar: "سمك القاروص", de: "Wolfsbarsch" }, price: 650 }
        ]
    },
    wraps: {
        key: "wraps",
        section: "food",
        name: { tr: "Dürümler", en: "Wraps", ru: "Роллы", ar: "لفائف", de: "Wraps" },
        icon: "🌯",
        items: [
            { name: { tr: "Adana Dürüm Acılı", en: "Spicy Adana Wrap", ru: "Острый Адана ролл", ar: "لفة أضنة حارة", de: "Scharfer Adana Wrap" }, price: 450 },
            { name: { tr: "Ciğer Şiş Dürüm", en: "Liver Wrap", ru: "Ролл с печенью", ar: "لفة كبدة", de: "Leber Wrap" }, price: 470 },
            { name: { tr: "Kuzu Şiş Dürüm", en: "Lamb Wrap", ru: "Ролл с ягнёнком", ar: "لفة غنم", de: "Lamm Wrap" }, price: 480 },
            { name: { tr: "Tavuk Şiş Dürüm", en: "Chicken Wrap", ru: "Куриный ролл", ar: "لفة دجاج", de: "Hähnchen Wrap" }, price: 400 },
            { name: { tr: "Urfa Dürüm Acısız", en: "Mild Urfa Wrap", ru: "Урфа ролл", ar: "لفة أورفة", de: "Milder Urfa Wrap" }, price: 450 }
        ]
    },
    pan: {
        key: "pan",
        section: "food",
        name: { tr: "Fırında Tava Çeşitleri", en: "Oven Pan Dishes", ru: "Блюда в сковороде", ar: "أطباق الفرن", de: "Ofenpfannengerichte" },
        icon: "🍳",
        items: [
            { name: { tr: "Çoban Kavurma", en: "Shepherd's Sauté", ru: "Чобан кавурма", ar: "قورمة الراعي", de: "Hirtenpfanne" }, price: 1050 },
            { name: { tr: "Et Sote", en: "Meat Sauté", ru: "Мясное соте", ar: "صوتيه لحم", de: "Fleisch-Sauté" }, price: 1050 },
            { name: { tr: "Et Tava", en: "Meat Pan", ru: "Мясо на сковороде", ar: "طاوة لحم", de: "Fleischpfanne" }, price: 1050 },
            { name: { tr: "Piliç Kavurma", en: "Chicken Sauté", ru: "Куриное соте", ar: "قورمة دجاج", de: "Hähnchen-Sauté" }, price: 650 }
        ]
    },
    salads: {
        key: "salads",
        section: "food",
        name: { tr: "Salatalar", en: "Salads", ru: "Салаты", ar: "سلطات", de: "Salate" },
        icon: "🥗",
        items: [
            { name: { tr: "Çoban Salata", en: "Shepherd's Salad", ru: "Чобан салат", ar: "سلطة الراعي", de: "Hirtensalat" }, price: 300 },
            { name: { tr: "Gavurdağı Salata", en: "Gavurdağı Salad", ru: "Гавурдагы салат", ar: "سلطة غافورداغي", de: "Gavurdağı Salat" }, price: 320 },
            { name: { tr: "Roka Salata", en: "Arugula Salad", ru: "Салат с рукколой", ar: "سلطة جرجير", de: "Rucolasalat" }, price: 320 },
            { name: { tr: "Söğüş Salata", en: "Sliced Salad", ru: "Сёгюш салат", ar: "سلطة سوغوش", de: "Gemischter Salat" }, price: 300 },
            { name: { tr: "Mevsim Salata", en: "Seasonal Salad", ru: "Сезонный салат", ar: "سلطة موسمية", de: "Saisonsalat" }, price: 300 }
        ]
    },
    desserts: {
        key: "desserts",
        section: "food",
        name: { tr: "Tatlılar", en: "Desserts", ru: "Десерты", ar: "حلويات", de: "Desserts" },
        icon: "🍰",
        items: [
            { name: { tr: "Ayva Tatlısı", en: "Quince Dessert", ru: "Десерт из айвы", ar: "حلوى السفرجل", de: "Quittendessert" }, price: 240 },
            { name: { tr: "Kabak Tatlısı", en: "Pumpkin Dessert", ru: "Тыквенный десерт", ar: "حلوى اليقطين", de: "Kürbisdessert" }, price: 240 },
            { name: { tr: "Katmer (2 Kişilik)", en: "Katmer (For 2)", ru: "Катмер (на 2)", ar: "كاتمر (لشخصين)", de: "Katmer (für 2)" }, price: 260 },
            { name: { tr: "Künefe", en: "Künefe", ru: "Кюнефе", ar: "كنافة", de: "Künefe" }, price: 240 },
            { name: { tr: "Top Dondurma", en: "Ice Cream Scoop", ru: "Шарик мороженого", ar: "كرة آيس كريم", de: "Eiskugel" }, price: 70 }
        ]
    },
    snacks: {
        key: "snacks",
        section: "food",
        name: { tr: "Çerezler", en: "Snacks", ru: "Снеки", ar: "مكسرات", de: "Snacks" },
        icon: "🥜",
        items: [
            { name: { tr: "Antep Fıstık", en: "Pistachios", ru: "Фисташки", ar: "فستق حلبي", de: "Pistazien" }, price: 380 },
            { name: { tr: "Çikolata", en: "Chocolate", ru: "Шоколад", ar: "شوكولاتة", de: "Schokolade" }, price: 150 },
            { name: { tr: "Jelibon", en: "Gummy Bears", ru: "Желейные конфеты", ar: "جيلي بون", de: "Gummibärchen" }, price: 150 },
            { name: { tr: "Tuzlu Fıstık", en: "Salted Peanuts", ru: "Солёный арахис", ar: "فول سوداني مملح", de: "Gesalzene Erdnüsse" }, price: 300 },
            { name: { tr: "Karışık Kuruyemiş", en: "Mixed Nuts", ru: "Смесь орехов", ar: "مكسرات مشكلة", de: "Nussmischung" }, price: 360 }
        ]
    },
    fruits: {
        key: "fruits",
        section: "food",
        name: { tr: "Meyveler", en: "Fruits", ru: "Фрукты", ar: "فواكه", de: "Früchte" },
        icon: "🍉",
        items: [
            { name: { tr: "Ayva", en: "Quince", ru: "Айва", ar: "سفرجل", de: "Quitte" }, price: 100 },
            { name: { tr: "Karpuz", en: "Watermelon", ru: "Арбуз", ar: "بطيخ", de: "Wassermelone" }, price: 230 },
            { name: { tr: "Kavun", en: "Melon", ru: "Дыня", ar: "شمام", de: "Melone" }, price: 230 },
            { name: { tr: "Meyve Tabağı", en: "Fruit Platter", ru: "Фруктовая тарелка", ar: "طبق فواكه", de: "Obstteller" }, price: 300 },
            { name: { tr: "Serpme Meyve", en: "Assorted Fruits", ru: "Ассорти фруктов", ar: "فواكه متنوعة", de: "Obstauswahl" }, price: 400 }
        ]
    },
    raki: {
        key: "raki",
        section: "drink",
        name: { tr: "Rakılar", en: "Raki", ru: "Раки", ar: "راكي", de: "Raki" },
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
        section: "drink",
        name: { tr: "Yabancı Alkoller", en: "Imported Spirits", ru: "Импортный алкоголь", ar: "مشروبات مستوردة", de: "Importierte Spirituosen" },
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
        section: "drink",
        name: { tr: "Biralar", en: "Beers", ru: "Пиво", ar: "بيرة", de: "Biere" },
        icon: "🍺",
        items: [
            { name: { tr: "Efes 33cl", en: "Efes 33cl", ru: "Эфес 33cl", ar: "إيفس 33cl", de: "Efes 33cl" }, price: 240 },
            { name: { tr: "Efes Malt 50cl", en: "Efes Malt 50cl", ru: "Эфес Молт 50cl", ar: "إيفس مالت 50cl", de: "Efes Malt 50cl" }, price: 250 },
            { name: { tr: "Bomonti 33cl", en: "Bomonti 33cl", ru: "Бомонти 33cl", ar: "بومونتي 33cl", de: "Bomonti 33cl" }, price: 240 },
            { name: { tr: "Bomonti Filtresiz 50cl", en: "Bomonti Unfiltered 50cl", ru: "Бомонти Нефильтр. 50cl", ar: "بومونتي غير مفلتر 50cl", de: "Bomonti Unfiltr. 50cl" }, price: 280 },
            { name: { tr: "Miller", en: "Miller", ru: "Миллер", ar: "ميلر", de: "Miller" }, price: 220 }
        ]
    },
    wines: {
        key: "wines",
        section: "drink",
        name: { tr: "Şaraplar", en: "Wines", ru: "Вина", ar: "نبيذ", de: "Weine" },
        icon: "🍷",
        subcategories: [
            {
                name: "Beyaz Şaraplar", items: [
                    { name: { tr: "Kadeh", en: "Glass", ru: "Бокал", ar: "كأس", de: "Glas" }, price: 300 },
                    { name: { tr: "Çankaya 35cl", en: "Çankaya 35cl", ru: "Чанкая 35cl", ar: "تشانكايا 35cl", de: "Çankaya 35cl" }, price: 900 },
                    { name: { tr: "Doluca", en: "Doluca", ru: "Долуджа", ar: "دولجا", de: "Doluca" }, price: 1200 },
                    { name: { tr: "Villa Doluca", en: "Villa Doluca", ru: "Вилла Долуджа", ar: "فيلا دولجا", de: "Villa Doluca" }, price: 1250 },
                    { name: { tr: "Çankaya", en: "Çankaya", ru: "Чанкая", ar: "تشانكايا", de: "Çankaya" }, price: 1100 },
                    { name: { tr: "Antre", en: "Antre", ru: "Антре", ar: "أنتري", de: "Antre" }, price: 1200 },
                    { name: { tr: "Selection", en: "Selection", ru: "Селексьон", ar: "سيليكشن", de: "Selection" }, price: 1500 },
                    { name: { tr: "Consensus", en: "Consensus", ru: "Консенсус", ar: "كونسينسوس", de: "Consensus" }, price: 1200 }
                ]
            },
            {
                name: "Kırmızı Şaraplar", items: [
                    { name: { tr: "Kadeh", en: "Glass", ru: "Бокал", ar: "كأس", de: "Glas" }, price: 300 },
                    { name: { tr: "Yakut 35cl", en: "Yakut 35cl", ru: "Якут 35cl", ar: "ياقوت 35cl", de: "Yakut 35cl" }, price: 900 },
                    { name: { tr: "Doluca", en: "Doluca", ru: "Долуджа", ar: "دولجا", de: "Doluca" }, price: 1200 },
                    { name: { tr: "Villa Doluca", en: "Villa Doluca", ru: "Вилла Долуджа", ar: "فيلا دولجا", de: "Villa Doluca" }, price: 1200 },
                    { name: { tr: "Angora", en: "Angora", ru: "Ангора", ar: "أنغورا", de: "Angora" }, price: 1500 },
                    { name: { tr: "DLC", en: "DLC", ru: "DLC", ar: "DLC", de: "DLC" }, price: 1900 },
                    { name: { tr: "Yakut", en: "Yakut", ru: "Якут", ar: "ياقوت", de: "Yakut" }, price: 1800 },
                    { name: { tr: "Antre", en: "Antre", ru: "Антре", ar: "أنتري", de: "Antre" }, price: 1350 },
                    { name: { tr: "Consensus", en: "Consensus", ru: "Консенсус", ar: "كونسينسوس", de: "Consensus" }, price: 1200 },
                    { name: { tr: "Selection", en: "Selection", ru: "Селексьон", ar: "سيليكشن", de: "Selection" }, price: 1500 }
                ]
            }
        ]
    },
    beverages: {
        key: "beverages",
        section: "drink",
        name: { tr: "Meşrubatlar", en: "Soft Drinks", ru: "Напитки", ar: "مشروبات غازية", de: "Softdrinks" },
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
function getMenuData() { return menuData; }
function saveMenuData(data) { localStorage.setItem('muhabbetMenu', JSON.stringify(data)); }
function resetMenuData() { localStorage.removeItem('muhabbetMenu'); return menuData; }
const AIDescriptionProvider = { generate: function (itemName, lang = 'tr') { const d = { tr: "Usta ellerden çıkan, taze malzemelerle hazırlanan eşsiz bir lezzet deneyimi.", en: "A unique flavor experience prepared by master hands with fresh ingredients.", ru: "Уникальный вкус, приготовленный из свежих ингредиентов.", ar: "تجربة نكهة فريدة من نوعها أعدها أساتذة بمكونات طازجة.", de: "Ein einzigartiges Geschmackserlebnis, frisch von Meisterhand zubereitet." }; return d[lang]; } };
