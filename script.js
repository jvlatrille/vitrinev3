window.addEventListener('load', function () {
    const sections = document.querySelectorAll('.section');
    const main = document.querySelector('main');
    const scrollThreshold = sections.length * 100 * window.innerHeight; // Total scroll distance en pixels (vh * hauteur de la fenêtre)

    // Positionner les sections
    sections.forEach((section, index) => {
        let topPosition, leftPosition;

        if (index === 0) {
            topPosition = 0;
            leftPosition = 25;
        } else {
            topPosition = -index * 100 + 25;
            leftPosition = index * 100;
        }

        section.style.top = `${topPosition}vh`;
        section.style.left = `${leftPosition}vw`;
    });

    window.addEventListener('scroll', function () {
        let scrollTop = window.pageYOffset;
        let windowHeight = window.innerHeight;

        // Appliquer la transformation diagonale
        main.style.transform = `translate(${-scrollTop / windowHeight * 100}vw, ${scrollTop / windowHeight * 100}vh)`;
    });
});

// Fonction pour rediriger vers une section spécifique lors du clic sur un lien (défilement diagonal)
document.querySelectorAll('nav a').forEach(link => {
    link.addEventListener('click', function (e) {
        e.preventDefault();

        const targetId = this.getAttribute('href').substring(1); // Récupère l'ID de la section
        const targetSection = document.getElementById(targetId);

        const sections = Array.from(document.querySelectorAll('main .section'));
        const index = sections.indexOf(targetSection); // Trouve l'index de la section cible

        let container = document.querySelector('main');

        // Calculer le défilement en diagonale
        const targetTop = index * 100 - 25; // Décalage vertical de 100vh par section
        const targetLeft = index * 100 - 25; // Décalage horizontal de 100vw par section

        // Appliquer le défilement en diagonale vers la section cible
        container.style.transform = `translate(${-targetLeft}vw, ${targetTop}vh)`;
    });
});
