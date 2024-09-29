window.addEventListener('scroll', function() {
    let scrollTop = window.pageYOffset; // Capture la position de défilement vertical
    let windowHeight = window.innerHeight; // Récupère la hauteur de la fenêtre
    let container = document.querySelector('main'); // Sélectionne le container principal

    // Applique une translation horizontale proportionnelle au défilement vertical
    container.style.transform = `translateX(-${scrollTop / windowHeight * 100}vw)`;
});

// Fonction pour rediriger vers la section lors du clic sur un lien
document.querySelectorAll('nav a').forEach(link => {
    link.addEventListener('click', function(e) {
        e.preventDefault(); // Empêche le comportement par défaut

        const targetId = this.getAttribute('href').substring(1); // Récupère l'ID de la section
        const targetSection = document.getElementById(targetId);
        
        const sections = Array.from(document.querySelectorAll('main section'));
        const index = sections.indexOf(targetSection); // Trouve l'index de la section cible

        // Calcule la distance à traduire en fonction de l'index de la section
        let container = document.querySelector('main');
        container.style.transform = `translateX(-${index * 75}vw)`;
    });
});
