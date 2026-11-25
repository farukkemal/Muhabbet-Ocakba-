/**
 * Muhabbet Ocakbaşı - Site Kapalı
 * Geri açmak için: MAINTENANCE_MODE = false yapıp push edin.
 */

const MAINTENANCE_MODE = true;

(function () {
    if (!MAINTENANCE_MODE) return;

    const style = document.createElement('style');
    style.textContent = `
        * { margin: 0; padding: 0; box-sizing: border-box; }
        #maintenance-overlay {
            position: fixed;
            inset: 0;
            z-index: 999999;
            background: #0f0600;
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: center;
            gap: 24px;
            font-family: 'Playfair Display', Georgia, serif;
        }
        #maintenance-overlay .mo-logo {
            width: 80px;
            height: 80px;
            border-radius: 50%;
            object-fit: cover;
            border: 2px solid #c8964a;
            opacity: 0.7;
            filter: grayscale(40%);
        }
        #maintenance-overlay .mo-title {
            font-size: 1.5rem;
            font-weight: 700;
            color: #c8964a;
            letter-spacing: 2px;
            text-align: center;
        }
        #maintenance-overlay .mo-line {
            width: 60px;
            height: 1px;
            background: #c8964a;
            opacity: 0.4;
        }
        #maintenance-overlay .mo-msg {
            font-family: 'Inter', Arial, sans-serif;
            font-size: 1.05rem;
            color: #d4b896;
            text-align: center;
            line-height: 1.8;
        }
        #maintenance-overlay .mo-sub {
            font-family: 'Inter', Arial, sans-serif;
            font-size: 0.82rem;
            color: #7a6248;
            text-align: center;
            margin-top: 4px;
        }
    `;
    document.head.appendChild(style);

    const overlay = document.createElement('div');
    overlay.id = 'maintenance-overlay';
    overlay.innerHTML = `
        <img class="mo-logo" src="images/logo.svg" alt="Muhabbet Ocakbaşı" onerror="this.style.display='none'">
        <p class="mo-title">Muhabbet Ocakbaşı</p>
        <div class="mo-line"></div>
        <p class="mo-msg">
            Bu siteye şu an ulaşılamıyor.
        </p>
        <p class="mo-sub">muhabbetocakbasi.com</p>
    `;

    function show() { document.body.appendChild(overlay); }
    document.body ? show() : document.addEventListener('DOMContentLoaded', show);
})();
