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

        // Appliquer l'effet 3D à tous les titres des sections
        document.querySelectorAll('.section h2, .section h3, .section p').forEach(title => {
            title.style.transform = `rotateY(${xPos}deg) rotateX(${yPos}deg)`; // Rotation plus prononcée
        });
    });

    window.addEventListener('scroll', function () {
        let scrollTop = window.pageYOffset;
        let windowHeight = window.innerHeight;

        // Appliquer la transformation diagonale
        main.style.transform = `translate(${-scrollTop / windowHeight * 100}vw, ${scrollTop / windowHeight * 100}vh)`;
    });
});
