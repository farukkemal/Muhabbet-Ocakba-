/**
 * Muhabbet Ocakbaşı - Bakım/Güncelleniyor Overlay
 * 
 * AÇMAK İÇİN:  MAINTENANCE_MODE = true  yapın ve push edin
 * KAPATMAK İÇİN: MAINTENANCE_MODE = false yapın ve push edin
 */

const MAINTENANCE_MODE = false;

(function () {
    if (!MAINTENANCE_MODE) return;

    // Stil
    const style = document.createElement('style');
    style.textContent = `
        #maintenance-overlay {
            position: fixed;
            inset: 0;
            z-index: 999999;
            background: #1a0a00;
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: center;
            gap: 28px;
            font-family: 'Playfair Display', Georgia, serif;
        }
        #maintenance-overlay .mo-logo {
            width: 90px;
            height: 90px;
            border-radius: 50%;
            object-fit: cover;
            border: 2px solid #c8964a;
            opacity: 0.9;
        }
        #maintenance-overlay .mo-title {
            font-size: 1.6rem;
            font-weight: 700;
            color: #c8964a;
            letter-spacing: 2px;
            text-align: center;
            margin: 0;
        }
        #maintenance-overlay .mo-subtitle {
            font-family: 'Inter', sans-serif;
            font-size: 1rem;
            color: #e8d5b0;
            text-align: center;
            margin: 0;
            line-height: 1.6;
        }
        #maintenance-overlay .mo-spinner {
            width: 44px;
            height: 44px;
            border: 3px solid rgba(200,150,74,0.2);
            border-top-color: #c8964a;
            border-radius: 50%;
            animation: mo-spin 0.9s linear infinite;
        }
        #maintenance-overlay .mo-dots span {
            display: inline-block;
            width: 8px;
            height: 8px;
            margin: 0 4px;
            background: #c8964a;
            border-radius: 50%;
            animation: mo-bounce 1.4s ease-in-out infinite;
        }
        #maintenance-overlay .mo-dots span:nth-child(2) { animation-delay: 0.2s; }
        #maintenance-overlay .mo-dots span:nth-child(3) { animation-delay: 0.4s; }
        @keyframes mo-spin {
            to { transform: rotate(360deg); }
        }
        @keyframes mo-bounce {
            0%, 80%, 100% { transform: translateY(0); opacity: 0.5; }
            40%            { transform: translateY(-10px); opacity: 1; }
        }
    `;
    document.head.appendChild(style);

    // Overlay HTML
    const overlay = document.createElement('div');
    overlay.id = 'maintenance-overlay';
    overlay.innerHTML = `
        <img class="mo-logo" src="images/logo.svg" alt="Muhabbet Ocakbaşı" onerror="this.style.display='none'">
        <p class="mo-title">Muhabbet Ocakbaşı</p>
        <div class="mo-spinner"></div>
        <p class="mo-subtitle">
            Sitemiz şu anda güncelleniyor.<br>
            Kısa süre içinde tekrar hizmetinizdeyiz. 🔥
        </p>
        <div class="mo-dots">
            <span></span><span></span><span></span>
        </div>
    `;

    // DOM hazır olunca ekle
    if (document.body) {
        document.body.appendChild(overlay);
    } else {
        document.addEventListener('DOMContentLoaded', function () {
            document.body.appendChild(overlay);
        });
    }
})();
