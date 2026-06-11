// script.js - Updated for manual HTML projects
document.addEventListener('DOMContentLoaded', () => {
    console.log("Portfolio Loaded Successfully");

    // Optional: Smooth scrolling for navbar links
    document.querySelectorAll('.nav-link').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            document.querySelector(targetId).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });

    // Form submission handling
    const contactForm = document.querySelector('form');
    if (contactForm) {
        contactForm.addEventListener('submit', (e) => {
            e.preventDefault();
            alert("Thank you, Gladys! Your message has been sent (simulated).");
            contactForm.reset();
        });
    }
});