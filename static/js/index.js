// Theme toggle functionality
const themeToggle = document.getElementById('themeToggle');
const themeIcon = document.querySelector('.theme-icon');
const body = document.body;

// Initialize with dark mode
let currentTheme = 'dark';

themeToggle.addEventListener('click', function() {
    if (body.classList.contains('dark-mode')) {
        // Switch to light mode
        body.classList.remove('dark-mode');
        body.classList.add('light-mode');
        themeIcon.textContent = '🌙';
        currentTheme = 'light';
    } else {
        // Switch to dark mode
        body.classList.remove('light-mode');
        body.classList.add('dark-mode');
        themeIcon.textContent = '☀️';
        currentTheme = 'dark';
    }
});

// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
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

// Navbar scroll effect
window.addEventListener('scroll', function() {
    const navbar = document.getElementById('navbar');
    if (window.scrollY > 50) {
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }
});

// Fade in animation on scroll
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver(function(entries) {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible');
        }
    });
}, observerOptions);

// Observe all fade-in elements
document.querySelectorAll('.fade-in').forEach(el => {
    observer.observe(el);
});

// Typing effect for hero subtitle (optional enhancement)
const subtitleElement = document.querySelector('.hero .subtitle');
const subtitleText = subtitleElement.textContent;
subtitleElement.textContent = '';

let i = 0;
function typeWriter() {
    if (i < subtitleText.length) {
        subtitleElement.textContent += subtitleText.charAt(i);
        i++;
        setTimeout(typeWriter, 100);
    }
}

// Start typing effect after page load
window.addEventListener('load', function() {
    setTimeout(typeWriter, 1000);
});

// Add some interactive hover effects for project cards
document.querySelectorAll('.project-card').forEach(card => {
    card.addEventListener('mouseenter', function() {
        this.style.transform = 'translateY(-10px) scale(1.02)';
    });
    
    card.addEventListener('mouseleave', function() {
        this.style.transform = 'translateY(0) scale(1)';
    });
});

// Parallax effect for floating elements
window.addEventListener('scroll', function() {
    const scrolled = window.pageYOffset;
    const parallaxElements = document.querySelectorAll('.floating-element');
    
    parallaxElements.forEach((element, index) => {
        const speed = 0.5 + (index * 0.2);
        element.style.transform = `translateY(${scrolled * speed}px)`;
    });
});
