document.addEventListener('DOMContentLoaded', () => {
    // Pop-up functionaliteit
    const popup = document.getElementById('popup');
    const closeBtn = document.querySelector('.close-btn');

    if (popup) {
        popup.style.display = 'block';

        if (closeBtn) {
            closeBtn.addEventListener('click', () => {
                popup.style.display = 'none';
            });
        }

        popup.addEventListener('click', (event) => {
            if (event.target === popup) {
                popup.style.display = 'none';
            }
        });
    }

    // De lijst met acht verschillende foto's
    const images = [
        'assets/images/bakker.jpg',
        'assets/images/dessertje.jpg',
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

    // Roep de functie onmiddellijk aan om de achtergrond in te stellen
    changeBackground();

    // Stel de achtergrond elke 5 seconden in
    setInterval(changeBackground, 5000);
});