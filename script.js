window.addEventListener('load', function () {
    const sections = document.querySelectorAll('.section');
    const main = document.querySelector('main');
    const scrollThreshold = sections.length * 100 * window.innerHeight;

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

    // Effet 3D pour tous les titres en fonction de la souris
    window.addEventListener('mousemove', function (e) {
        const xPos = (e.clientX / window.innerWidth - 0.5) * 60; // Augmenter l'effet de rotation sur l'axe X
        const yPos = (e.clientY / window.innerHeight - 0.5) * 60; // Augmenter l'effet de rotation sur l'axe Y

        document.querySelectorAll('.section h2, .section h3, .section p').forEach(title => {
            title.style.transform = `rotateY(${xPos}deg) rotateX(${yPos}deg)`; // Rotation plus prononcée
        });
    });

    // Fonction pour rediriger vers une section spécifique lors du clic sur un lien
    document.querySelectorAll('nav a').forEach(link => {
        link.addEventListener('click', function (e) {
            e.preventDefault();

            const targetId = this.getAttribute('href').substring(1); // Récupère l'ID de la section
            const targetSection = document.getElementById(targetId);
            const sectionIndex = Array.from(sections).indexOf(targetSection);

            // Calculer la position de la section cible en fonction du défilement
            const scrollY = sectionIndex * window.innerHeight;

            // Défilement fluide vers la section sélectionnée
            window.scrollTo({
                top: scrollY,
                behavior: 'smooth' // Animation douce
            });
        });
    });

    window.addEventListener('scroll', function () {
        let scrollTop = window.pageYOffset;
        let windowHeight = window.innerHeight;

        // Appliquer la transformation diagonale lors du défilement
        main.style.transform = `translate(${-scrollTop / windowHeight * 100 + 25}vw, ${scrollTop / windowHeight * 100 - 25}vh)`;
    });
});
