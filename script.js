window.addEventListener('scroll', function() {
    let scrollTop = window.pageYOffset;
    let windowHeight = window.innerHeight;
    let container = document.querySelector('main');

    container.style.transform = `translateX(-${scrollTop / windowHeight * 100}vw)`;
});

// Fonction pour rediriger vers la section lors du clic sur un lien
document.querySelectorAll('nav a').forEach(link => {
    link.addEventListener('click', function(e) {
        e.preventDefault();

        const targetId = this.getAttribute('href').substring(1);
        const targetSection = document.getElementById(targetId);

        const sections = Array.from(document.querySelectorAll('main section'));
        const index = sections.indexOf(targetSection);

        let container = document.querySelector('main');
        container.style.transform = `translateX(-${index * 100}vw)`;
    });
});
