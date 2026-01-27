/**
 * Muhabbet Ocakbaşı - Reviews Data Management
 * Handles Google Reviews (Simulated/Stored)
 */

const DEFAULT_REVIEWS = [
    {
        name: "Ahmet Yılmaz",
        rating: 5,
        text: "Beylikdüzü'nde yiyebileceğiniz en iyi kebaplar burada. Mezeler taze, ilgi alaka muazzam. Kesinlikle tavsiye ederim.",
        date: "2 hafta önce"
    },
    {
        name: "Elena Petrova",
        rating: 5,
        text: "Great food and atmosphere. The staff is very friendly. Best grilled meat in the area!",
        date: "1 ay önce"
    },
    {
        name: "Zeynep Kaya",
        rating: 5,
        text: "İçli köftesi ve Adana kebabı favorim. Ailece geliyoruz ve her seferinde aynı kaliteyi buluyoruz. Teşekkürler Muhabbet Ocakbaşı.",
        date: "1 hafta önce"
    },
    {
        name: "Hans Schmidt",
        rating: 5,
        text: "Sehr authentisches türkisches Essen. Das Fleisch war perfekt gegart und der Service war erstklassig. Kommen gerne wieder!",
        date: "3 hafta önce"
    },
    {
        name: "Mustafa Demir",
        rating: 5,
        text: "Muhabbet Ocakbaşı ismi gibi çok samimi bir yer. Etler lokum gibi. Skyport Residence altında olması da ulaşım için harika.",
        date: "3 gün önce"
    },
    {
        name: "Fatima Al-Sayed",
        rating: 5,
        text: "طعام رائع وخدمة ممتازة. الكباب كان لذيذ جداً والمقبلات متنوعة وطازجة. تجربة تستحق التكرار.",
        date: "2 ay önce"
    },
    {
        name: "Sarah Johnson",
        rating: 5,
        text: "Excellent service and delicious appetizers. The wine selection is also impressive.",
        date: "5 gün önce"
    },
    {
        name: "Caner Özkan",
        rating: 5,
        text: "Beylikdüzü'nde gerçek ocakbaşı lezzeti arayanlar buraya. Fiyat/performans dengesi harika.",
        date: "4 gün önce"
    },
    {
        name: "Liza Voronina",
        rating: 5,
        text: "Потрясающая еда и очень приветливый персонал. Лучший кебаб, который я пробовала в Стамбуле!",
        date: "1 hafta önce"
    },
    {
        name: "Emre Aydın",
        rating: 5,
        text: "Skyport Residence'ın en iyi mekanı. Lahmacunları çıtır çıtır ve tam istediğim gibi. Servis kalitesi hiç değişmiyor.",
        date: "2 gün önce"
    },
    {
        name: "David Miller",
        rating: 5,
        text: "Top-notch dining experience. The mixed grill was fantastic and the ambiance is perfect for a business dinner.",
        date: "4 gün önce"
    }
];

function getReviews() {
    const stored = localStorage.getItem('muhabbetReviews');
    if (stored) {
        try {
            return JSON.parse(stored);
        } catch (e) {
            console.error('Error parsing reviews:', e);
        }
    }
    return DEFAULT_REVIEWS;
}

function saveReviews(reviews) {
    // Only keep 5-star reviews as requested
    const filtered = reviews.filter(r => r.rating === 5);
    localStorage.setItem('muhabbetReviews', JSON.stringify(filtered));
}
