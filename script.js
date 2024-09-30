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

    // Fonction pour rediriger vers une section spécifique lors du clic sur un lien
    document.querySelectorAll('nav a').forEach(link => {
        link.addEventListener('click', function (e) {
            e.preventDefault();

            const targetId = this.getAttribute('href').substring(1);
            const targetSection = document.getElementById(targetId);
            const sectionIndex = Array.from(sections).indexOf(targetSection);

            const scrollY = sectionIndex * window.innerHeight;

            window.scrollTo({
                top: scrollY,
                behavior: 'smooth'
            });
        });
    });

    // Écouteur de défilement pour appliquer les transformations diagonales et l'effet de parallaxe
    window.addEventListener('scroll', function () {
        let scrollTop = window.pageYOffset;
        let windowHeight = window.innerHeight;

        // Appliquer la transformation diagonale lors du défilement
        main.style.transform = `translate(${-scrollTop / windowHeight * 100 + 25}vw, ${scrollTop / windowHeight * 100 - 25}vh)`;

        sections.forEach((section, index) => {
            const title = section.querySelector('h2');
            if (title) {
                const sectionOffset = index * windowHeight;
                const distanceFromCenter = (scrollTop - sectionOffset) / windowHeight;

                // Appliquer un mouvement plus prononcé au texte
                title.style.transform = `translateY(${distanceFromCenter * 100}px)`;
            }
        });
    });
});
