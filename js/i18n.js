/**
 * Muhabbet Ocakbaşı - Multi-Language Support System
 * Languages: Turkish (TR), English (EN), Russian (RU), Arabic (AR), German (DE), Chinese (ZH)
 */

const defaultTranslations = {
  tr: {
    nav_home: "Ana Sayfa",
    nav_menu: "Menümüz",
    nav_about: "Hakkımızda",
    nav_reservation: "Rezervasyon",
    hero_badge: "Beylikdüzü • Yakuplu",
    hero_title_1: "Ateşin üstünde",
    hero_title_2: "lezzet",
    hero_title_3: "masada",
    hero_title_4: "muhabbet",
    hero_subtitle: "Ustadan kebaplar, meze çeşitleri ve seçkin şarap–rakı menüsü. Rezervasyon ve paket servis için bize ulaşın.",
    hero_btn_menu: "Menümüz",
    hero_btn_reservation: "Rezervasyon",
    cat_starters: "Başlangıçlar & Meze",
    cat_wraps: "Dürümler",
    cat_oven: "Taş Fırın",
    cat_pan: "Fırında Tava Çeşitleri",
    cat_desserts: "Tatlılar",
    cat_meats: "Etlerimiz",
    cat_beverages: "Meşrubatlar",
    cat_beers: "Biralar",
    cat_whiteWines: "Beyaz Şaraplar",
    cat_redWines: "Kırmızı Şaraplar",
    cat_raki: "Rakılar",
    about_title: "Hakkımızda",
    about_text: "Muhabbet Ocakbaşı, lezzetin ateşle buluştuğu, sohbetin sofraya eşlik ettiği özel bir buluşma noktasıdır. Geleneksel ocakbaşı kültürünü modern dokunuşlarla harmanlayarak misafirlerimize sadece yemek değil, keyifli bir deneyim sunuyoruz.",
    reservation_title: "Rezervasyon",
    reservation_subtitle: "Hızlı rezervasyon için WhatsApp'tan yazabilir veya bizi arayabilirsiniz.",
    form_name: "Ad Soyad",
    form_people: "Kişi Sayısı",
    form_date: "Tarih",
    form_time: "Saat",
    form_note: "Not (İsteğe bağlı)",
    form_note_placeholder: "Örn. çocuk sandalyesi, doğum günü",
    form_submit: "WhatsApp'a Gönder",
    footer_rights: "Tüm hakları saklıdır.",
    price_note: "Güncel fiyatlar kasada teyit edilir.",
    currency: "₺",
    tab_food: "🍴 Yiyecekler",
    tab_drink: "🍹 İçecekler",
    tab_salads: "🥗 Salatalarımız",
    tab_sweets: "🍰 Tatlılarımız",
    tab_alcohol: "🍸 Alkollerimiz",
    tab_mezeler: "🍽️ Mezelerimiz",
    tab_ara_sicaklar: "🥘 Ara Sıcaklarımız",
    tab_et_balik: "🥩 Et ve Balıklarımız",
    tab_tas_firin: "🔥 Taş Fırınımız",
    tab_durumler: "🌯 Dürümlerimiz",
    share_menu: "Menüyü Paylaş",
    address: "Skyport Residence, Yakuplu Mah. Hürriyet Blv. No:1, Beylikdüzü / İstanbul",
    form_occasion: "Özel Gün (Opsiyonel)",
    occ_none: "Seçiniz",
    occ_birthday: "Doğum Günü",
    occ_anniversary: "Evlilik Yıldönümü",
    occ_business: "İş Yemeği",
    occ_other: "Özel Gün",
    map_label: "Muhabbet Ocakbaşı (Skyport Residence Girişi)",
    reviews_title: "Misafir Yorumları",
    reviews_subtitle: "Google üzerindeki en beğenilen 5 yıldızlı yorumlarımız."
  },
  en: {
    nav_home: "Home",
    nav_menu: "Menu",
    nav_about: "About Us",
    nav_reservation: "Reservation",
    hero_badge: "Beylikdüzü • Yakuplu",
    hero_title_1: "Flavor on",
    hero_title_2: "fire",
    hero_title_3: "conversation at",
    hero_title_4: "the table",
    hero_subtitle: "Master kebabs, meze varieties and premium wine-raki menu. Contact us for reservations and takeaway.",
    hero_btn_menu: "Our Menu",
    hero_btn_reservation: "Reservation",
    cat_starters: "Appetizers & Meze",
    cat_wraps: "Wraps",
    cat_oven: "Stone Oven",
    cat_pan: "Oven Pan Varieties",
    cat_desserts: "Desserts",
    cat_meats: "Our Meats",
    cat_beverages: "Soft Drinks",
    cat_beers: "Beers",
    cat_whiteWines: "White Wines",
    cat_redWines: "Red Wines",
    cat_raki: "Raki",
    about_title: "About Us",
    about_text: "Muhabbet Ocakbaşı is a special meeting point where flavor meets fire and conversation accompanies the table. We offer a pleasant experience beyond just food by blending traditional grill culture with modern touches.",
    reservation_title: "Reservation",
    reservation_subtitle: "Contact us via WhatsApp or call us for a quick reservation.",
    form_name: "Full Name",
    form_people: "Number of People",
    form_date: "Date",
    form_time: "Time",
    form_note: "Note (Optional)",
    form_note_placeholder: "e.g. high chair, birthday",
    form_submit: "Send to WhatsApp",
    footer_rights: "All rights reserved.",
    price_note: "Current prices are confirmed at the register.",
    currency: "₺",
    tab_food: "🍴 Food",
    tab_drink: "🍹 Drinks",
    tab_salads: "🥗 Our Salads",
    tab_sweets: "🍰 Our Desserts",
    tab_alcohol: "🍸 Our Spirits",
    tab_mezeler: "🍽️ Our Mezes",
    tab_ara_sicaklar: "🥘 Hot Starters",
    tab_et_balik: "🥩 Meats & Fish",
    tab_tas_firin: "🔥 Stone Oven",
    tab_durumler: "🌯 Our Wraps",
    share_menu: "Share Menu",
    address: "Skyport Residence, Yakuplu Mah. Hurriyet Blv. No:1, Beylikduzu / Istanbul",
    form_occasion: "Special Occasion (Optional)",
    occ_none: "Select",
    occ_birthday: "Birthday",
    occ_anniversary: "Anniversary",
    occ_business: "Business Meeting",
    occ_other: "Other",
    map_label: "Muhabbet Ocakbaşı (Skyport Residence Entrance)",
    reviews_title: "Guest Reviews",
    reviews_subtitle: "Our top-rated 5-star reviews on Google."
  },
  ru: {
    nav_home: "Главная",
    nav_menu: "Меню",
    nav_about: "О нас",
    nav_reservation: "Бронирование",
    hero_badge: "Бейликдюзю • Якуплу",
    hero_title_1: "Вкус на",
    hero_title_2: "огне",
    hero_title_3: "беседа за",
    hero_title_4: "столом",
    hero_subtitle: "Кебабы от мастера, ассортимент мезе и элитное меню вин и раки. Свяжитесь с нами для бронирования.",
    hero_btn_menu: "Наше меню",
    hero_btn_reservation: "Бронирование",
    cat_starters: "Закуски и Мезе",
    cat_wraps: "Дюрюм",
    cat_oven: "Каменная печь",
    cat_pan: "Блюда на сковороде",
    cat_desserts: "Десерты",
    cat_meats: "Мясные блюда",
    cat_beverages: "Напитки",
    cat_beers: "Пиво",
    cat_whiteWines: "Белые вина",
    cat_redWines: "Красные вина",
    cat_raki: "Ракы",
    about_title: "О нас",
    about_text: "Muhabbet Ocakbaşı — это место, где вкус встречается с огнем, а беседа дополняет трапезу. Мы объединяем традиции с современностью для вашего отдыха.",
    reservation_title: "Бронирование",
    reservation_subtitle: "Пишите в WhatsApp или звоните для быстрого бронирования.",
    form_name: "Имя Фамилия",
    form_people: "Количество человек",
    form_date: "Дата",
    form_time: "Время",
    form_note: "Примечание",
    form_note_placeholder: "напр. детский стул, день рождения",
    form_submit: "Отправить в WhatsApp",
    footer_rights: "Все права защищены.",
    price_note: "Актуальные цены уточняются на кассе.",
    currency: "₺",
    tab_food: "🍴 Еда",
    tab_drink: "🍹 Напитки",
    tab_salads: "🥗 Наши салаты",
    tab_sweets: "🍰 Наши десерты",
    tab_alcohol: "🍸 Наш алкоголь",
    tab_mezeler: "🍽️ Наша Мезе",
    tab_ara_sicaklar: "🥘 Горячие закуски",
    tab_et_balik: "🥩 Мясо и рыба",
    tab_tas_firin: "🔥 Каменная печь",
    tab_durumler: "🌯 Дюрюм",
    share_menu: "Поделиться меню",
    form_occasion: "Особый случай",
    occ_none: "Выберите",
    occ_birthday: "День рождения",
    occ_anniversary: "Годовщина",
    occ_business: "Деловая встреча",
    occ_other: "Другое",
    map_label: "Muhabbet Ocakbaşı (Вход в Skyport Residence)",
    reviews_title: "Отзывы гостей",
    reviews_subtitle: "Наши лучшие 5-звездочные отзывы в Google."
  },
  ar: {
    nav_home: "الرئيسية",
    nav_menu: "القائمة",
    nav_about: "من نحن",
    nav_reservation: "الحجز",
    hero_badge: "بيليكدوزو • ياكوبلو",
    hero_title_1: "النكهة فوق",
    hero_title_2: "النار",
    hero_title_3: "والحديث حول",
    hero_title_4: "المائدة",
    hero_subtitle: "كباب من يد الأستاذ، تشكيلة مقبلات وقائمة فاخرة من النبيذ والعرق. تواصل معنا للحجز.",
    hero_btn_menu: "قائمتنا",
    hero_btn_reservation: "الحجز",
    cat_starters: "المقبلات والمزة",
    cat_wraps: "سندويشات",
    cat_oven: "فرن حجري",
    cat_pan: "أطباق المقلاة",
    cat_desserts: "الحلويات",
    cat_meats: "لحومنا",
    cat_beverages: "مشروبات باردة",
    cat_beers: "بيرة",
    cat_whiteWines: "نبيذ أبيض",
    cat_redWines: "نبيذ أحمر",
    cat_raki: "راكي",
    about_title: "من نحن",
    about_text: "محبة أوجاكباشي هي نقطة التقاء خاصة حيث تلتقي النكهة بالنار وتصاحب المحادثة المائدة. نحن نمزج الثقافة التقليدية بلمسات حديثة.",
    reservation_title: "الحجز",
    reservation_subtitle: "للحجز السريع، تواصل معنا عبر واتساب أو اتصل بنا.",
    form_name: "الاسم الكامل",
    form_people: "عدد الأشخاص",
    form_date: "التاريخ",
    form_time: "الوقت",
    form_note: "ملاحظة (اختياري)",
    form_note_placeholder: "مثال: كرسي أطفال، عيد ميلاد",
    form_submit: "إرسال عبر واتساب",
    footer_rights: "جميع الحقوق محفوظة.",
    price_note: "يتم تأكيد الأسعار عند الكاونتر.",
    currency: "₺",
    tab_food: "🍴 الطعام",
    tab_drink: "🍹 المشروبات",
    tab_salads: "🥗 سلطاتنا",
    tab_sweets: "🍰 حلوياتنا",
    tab_alcohol: "🍸 مشروباتنا الكحولية",
    tab_mezeler: "🍽️ مزتنا",
    tab_ara_sicaklar: "🥘 مقبلاتنا الساخنة",
    tab_et_balik: "🥩 لحومنا وسمكنا",
    tab_tas_firin: "🔥 فرننا الحجري",
    tab_durumler: "🌯 لفائفنا",
    share_menu: "مشاركة القائمة",
    form_occasion: "مناسبة خاصة (اختياري)",
    occ_none: "اختر",
    occ_birthday: "عيد ميلاد",
    occ_anniversary: "ذكرى زواج",
    occ_business: "اجتماع عمل",
    occ_other: "أخرى",
    map_label: "Muhabbet Ocakbaşı (مدخل سكاي بورت ريزيدنس)",
    reviews_title: "آراء الضيوف",
    reviews_subtitle: "أفضل تقييماتنا ذات الـ 5 نجوم على جوجل."
  },
  de: {
    nav_home: "Startseite",
    nav_menu: "Speisekarte",
    nav_about: "Über uns",
    nav_reservation: "Reservierung",
    hero_badge: "Beylikdüzü • Yakuplu",
    hero_title_1: "Geschmack auf",
    hero_title_2: "Feuer",
    hero_title_3: "Gespräch am",
    hero_title_4: "Tisch",
    hero_subtitle: "Meisterhafte Kebabs, Meze-Variationen und erstklassiges Wein-Raki-Menü. Kontaktieren Sie uns für Reservierungen.",
    hero_btn_menu: "Speisekarte",
    hero_btn_reservation: "Reservierung",
    cat_starters: "Vorspeisen & Meze",
    cat_wraps: "Wraps",
    cat_oven: "Steinofen",
    cat_pan: "Pfannengerichte",
    cat_desserts: "Desserts",
    cat_meats: "Unser Fleisch",
    cat_beverages: "Erfrischungsgetränke",
    cat_beers: "Biere",
    cat_whiteWines: "Weißweine",
    cat_redWines: "Rotweine",
    cat_raki: "Raki",
    about_title: "Über uns",
    about_text: "Muhabbet Ocakbaşı ist ein besonderer Treffpunkt, an dem Geschmack auf Feuer trifft und Gespräche den Tisch begleiten. Wir verbinden Tradition mit modernen Akzenten.",
    reservation_title: "Reservierung",
    reservation_subtitle: "Schreiben Sie uns per WhatsApp oder rufen Sie uns an für eine schnelle Reservierung.",
    form_name: "Vor- und Nachname",
    form_people: "Anzahl Personen",
    form_date: "Datum",
    form_time: "Uhrzeit",
    form_note: "Notiz (Optional)",
    form_note_placeholder: "z.B. Kinderstuhl, Geburtstag",
    form_submit: "Per WhatsApp senden",
    footer_rights: "Alle Rechte vorbehalten.",
    price_note: "Aktuelle Preise werden an der Kasse bestätigt.",
    currency: "₺",
    tab_food: "🍴 Speisen",
    tab_drink: "🍹 Getränke",
    tab_salads: "🥗 Unsere Salate",
    tab_sweets: "🍰 Unsere Desserts",
    tab_alcohol: "🍸 Unser Alkohol",
    tab_mezeler: "🍽️ Unsere Meze",
    tab_ara_sicaklar: "🥘 Warme Vorspeisen",
    tab_et_balik: "🥩 Fleisch & Fisch",
    tab_tas_firin: "🔥 Steinofen",
    tab_durumler: "🌯 Unsere Wraps",
    share_menu: "Menü teilen",
    form_occasion: "Besonderer Anlass",
    occ_none: "Wählen",
    occ_birthday: "Geburtstag",
    occ_anniversary: "Jahrestag",
    occ_business: "Geschäfttreffen",
    occ_other: "Anderes",
    map_label: "Muhabbet Ocakbaşı (Eingang Skyport Residence)",
    reviews_title: "Gästebewertungen",
    reviews_subtitle: "Unsere am besten bewerteten 5-Sterne-Bewertungen bei Google."
  }
};

// Add ZH (Chinese) language
defaultTranslations.zh = {
    nav_home: "首页",
    nav_menu: "菜单",
    nav_about: "关于我们",
    nav_reservation: "预订",
    hero_badge: "贝利克杜兹 • 亚库普鲁",
    hero_title_1: "火上的",
    hero_title_2: "美味",
    hero_title_3: "桌旁的",
    hero_title_4: "温情",
    hero_subtitle: "大师烤肉、开胃菜和高级葡萄酒菜单。预订请联系我们。",
    hero_btn_menu: "我们的菜单",
    hero_btn_reservation: "预订",
    about_title: "关于我们",
    about_text: "Muhabbet Ocakbaşı是一个特别的聚会点，美味与火遇在一起，对话降临餐桌。我们将传统烤肉文化与现代元素融合，为您提供美味体验。",
    reservation_title: "预订",
    reservation_subtitle: "请通过WhatsApp或电话联系我们进行预订。",
    form_name: "姓名",
    form_people: "人数",
    form_date: "日期",
    form_time: "时间",
    form_note: "备注（可选）",
    form_note_placeholder: "例：兒童植，生日",
    form_submit: "发送到WhatsApp",
    footer_rights: "保留所有权利。",
    price_note: "价格在收银台确认。",
    currency: "₺",
    tab_food: "🍴 食品",
    tab_drink: "🍹 饮品",
    tab_salads: "🥗 我们的沙拉",
    tab_sweets: "🍰 我们的甜品",
    tab_alcohol: "🍸 我们的酒类",
    tab_mezeler: "🍽️ 我们的小菜",
    tab_ara_sicaklar: "🥘 热前菜",
    tab_et_balik: "🥩 肉类与海鲜",
    tab_tas_firin: "🔥 石炉烤制",
    tab_durumler: "🌯 卷饼类",
    address: "Skyport Residence, Yakuplu Mah. Hürriyet Blv. No:1, 贝利克杜兹 / 伊斯坦布尔",
    share_menu: "分享菜单",
    form_occasion: "特殊场合（可选）",
    occ_none: "选择",
    occ_birthday: "生日",
    occ_anniversary: "结婚纪念日",
    occ_business: "商务展",
    occ_other: "其他",
    map_label: "Muhabbet Ocakbaşı（Skyport Residence入口）",
    reviews_title: "客人评论",
    reviews_subtitle: "Google上最高评分的五星好评。",
    nav_home: "首页"
};

let translations = defaultTranslations;

function loadTranslations() {
  const stored = localStorage.getItem('muhabbetTranslations');
  if (stored) {
    translations = JSON.parse(stored);
  }
}
loadTranslations();

function saveTranslations() {
  localStorage.setItem('muhabbetTranslations', JSON.stringify(translations));
}

function resetTranslations() {
  localStorage.removeItem('muhabbetTranslations');
  translations = JSON.parse(JSON.stringify(defaultTranslations));
  return translations;
}

let currentLang = localStorage.getItem('muhabbetLang') || 'tr';

function t(key) {
  return translations[currentLang]?.[key] || translations['tr'][key] || key;
}

function setLanguage(lang) {
  if (!translations[lang]) return;

  currentLang = lang;
  localStorage.setItem('muhabbetLang', lang);

  document.documentElement.dir = (lang === 'ar') ? 'rtl' : 'ltr';
  document.documentElement.lang = lang;

  document.querySelectorAll('[data-i18n]').forEach(el => {
    const key = el.getAttribute('data-i18n');
    el.textContent = t(key);
  });

  document.querySelectorAll('[data-i18n-placeholder]').forEach(el => {
    const key = el.getAttribute('data-i18n-placeholder');
    el.placeholder = t(key);
  });

  document.querySelectorAll('.lang-btn').forEach(btn => {
    btn.classList.toggle('active', btn.dataset.lang === lang);
  });

  window.dispatchEvent(new CustomEvent('languageChanged', { detail: { lang } }));
}

function initI18n() {
  setLanguage(currentLang);
  document.querySelectorAll('.lang-btn').forEach(btn => {
    btn.addEventListener('click', () => setLanguage(btn.dataset.lang));
  });
}

document.addEventListener('DOMContentLoaded', initI18n);
