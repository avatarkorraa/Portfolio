document.addEventListener('DOMContentLoaded', () => {
    // Scrolling interattivo
    document.querySelectorAll('nav ul li a').forEach(anchor => {
        anchor.addEventListener('click', function(event) {
            event.preventDefault();
            const targetID = this.getAttribute('href').substring(1);
            const targetSection = document.getElementById(targetID);
            targetSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
        });
    });

    // Intercettare la visualizzazione delle sezioni e applicare animazioni
    const sections = document.querySelectorAll('section');
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.animation = 'fadeIn 1s ease-in-out forwards';
                observer.unobserve(entry.target); // Una volta animato, rimuovi l'osservazione
            }
        });
    }, { threshold: 0.2 });

    sections.forEach(section => {
        observer.observe(section);
    });

    // Messaggio di conferma invio form
    document.querySelector('form').addEventListener('submit', function(event) {
        event.preventDefault();
        alert('Messaggio inviato! Grazie per avermi contattato.');
    });
});
