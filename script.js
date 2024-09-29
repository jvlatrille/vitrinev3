window.addEventListener('scroll', function() {
    let scrollTop = window.pageYOffset; // Capture la position de défilement vertical
    let windowHeight = window.innerHeight; // Récupère la hauteur de la fenêtre
    let container = document.querySelector('main'); // Sélectionne le container principal

    // Applique une translation horizontale proportionnelle au défilement vertical
    container.style.transform = `translateX(-${scrollTop / windowHeight * 100}vw)`;
});
