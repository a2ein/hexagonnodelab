document.addEventListener('DOMContentLoaded', (event) => {
    const sections = document.querySelectorAll('section');
    sections.forEach(section => {
        section.style.animationDelay = `${Array.from(sections).indexOf(section) * 0.3}s`;
    });

    document.getElementById('contact-form').addEventListener('submit', function(event) {
        event.preventDefault();
        alert('Your message has been sent!');
    });
});
