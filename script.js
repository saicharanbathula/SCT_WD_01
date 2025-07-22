window.addEventListener("scroll", function () {
    let navbar = document.querySelector(".navbar");
    if (window.scrollY > 50) {
        navbar.classList.add("scrolled");
    } else {
        navbar.classList.remove("scrolled");
    }
});
document.addEventListener("DOMContentLoaded", function () {
    const navbar = document.querySelector('.navbar');
    const navLinks = document.querySelectorAll('.navbar ul li a');

    navLinks.forEach(link => {
        link.addEventListener('mouseenter', () => {
            navbar.classList.add('hovered');
        });

        link.addEventListener('mouseleave', () => {
            navbar.classList.remove('hovered');
        });
    });
});

