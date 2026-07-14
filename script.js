// Intersection Observer for scroll-triggered animations
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver(function(entries) {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            // Add a slight delay for staggered animations
            const delay = entry.target.getAttribute('data-delay') || 0;
            setTimeout(() => {
                entry.target.classList.remove('hidden');
                entry.target.classList.add('show');
            }, delay);
            observer.unobserve(entry.target);
        }
    });
}, observerOptions);

// Observe all elements with .hidden class
document.addEventListener('DOMContentLoaded', function() {
    const hiddenElements = document.querySelectorAll('.hidden');
    
    hiddenElements.forEach((element, index) => {
        // Add staggered delay for cards
        if (element.classList.contains('feature-card') || element.classList.contains('gallery-item')) {
            element.setAttribute('data-delay', index * 100);
        }
        observer.observe(element);
    });
});

// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// Form submission handler
const contactForm = document.querySelector('.contact-form');
if (contactForm) {
    contactForm.addEventListener('submit', function(e) {
        e.preventDefault();
        alert('Thank you for your message! We will get back to you soon.');
        this.reset();
    });
}

// Add animation to elements on page load
window.addEventListener('load', function() {
    console.log('✨ Reveal Animation Website Loaded Successfully!');
});