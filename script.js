document.addEventListener('DOMContentLoaded', function() {
    const heroContent = document.querySelector('.hero-content');
    window.addEventListener('scroll', function() {
        const scrollPosition = window.scrollY;
        heroContent.style.opacity = 1 - scrollPosition / 500;
    });
});
