document.addEventListener('DOMContentLoaded', () => {
    // Pop-up functionaliteit
    const popup = document.getElementById('popup');
    const closeBtn = document.querySelector('.close-btn');
    const SHOW_POPUP_AFTER_HOURS = 1; // Tijd in uren
    const popupStorageKey = "popup_last_shown"; // Sleutel voor localStorage

    function shouldShowPopup() {
        const lastShown = localStorage.getItem(popupStorageKey);
        if (!lastShown) return true; // Eerste keer? Toon pop-up

        const lastShownTime = parseInt(lastShown, 10);
        const currentTime = new Date().getTime();
        const timeDifference = (currentTime - lastShownTime) / (1000 * 60 * 60); // Omrekenen naar uren

        return timeDifference >= SHOW_POPUP_AFTER_HOURS; // True als pop-up opnieuw moet verschijnen
    }

    function showPopup() {
        if (popup && shouldShowPopup()) {
            popup.style.display = 'flex'; // Pop-up tonen
            localStorage.setItem(popupStorageKey, new Date().getTime()); // Tijd opslaan
        } else {
            popup.style.display = 'none'; // Zorg ervoor dat de pop-up verborgen blijft
        }
    }

    function closePopup() {
        popup.style.display = 'none';
    }

    if (popup) {
        showPopup(); // Controleer en toon indien nodig de pop-up

        if (closeBtn) {
            closeBtn.addEventListener('click', closePopup);
        }

        popup.addEventListener('click', (event) => {
            if (event.target === popup) {
                closePopup();
            }
        });
    }

    // 🎨 Lijst met acht verschillende foto's voor de achtergrond
    const images = [
        'assets/images/bakker.jpg',
        'assets/images/dessert.jpg',
        'assets/images/pralines.jpg',
        'assets/images/kerstboom.jpg',
        'assets/images/lekker.jpg',
        'assets/images/speculaas.jpg',
        'assets/images/nieuwjaar.jpg',
        'assets/images/feest.jpg'
    ];

    let currentIndex = 0;

    function changeBackground() {
        const heroSection = document.querySelector('.hero');
        currentIndex = (currentIndex + 1) % images.length;
        const newBackgroundImage = images[currentIndex];

        if (heroSection) {
            heroSection.style.backgroundImage = `url(${newBackgroundImage})`;
        }
    }

    // 🎨 Stel de achtergrond direct in en herhaal elke 8 seconden
    changeBackground();
    setInterval(changeBackground, 8000);
});
