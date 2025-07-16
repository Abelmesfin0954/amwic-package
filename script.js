// Mobile Menu Toggle
document.querySelector('.menu-toggle').addEventListener('click', function() {
    document.querySelector('.mobile-menu').classList.toggle('active');
});

// Smooth scrolling for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Animation for option cards on scroll
const optionCards = document.querySelectorAll('.option-card');

const animateOnScroll = () => {
    optionCards.forEach(card => {
        const cardPosition = card.getBoundingClientRect().top;
        const screenPosition = window.innerHeight / 1.3;
        
        if (cardPosition < screenPosition) {
            card.style.opacity = '1';
            card.style.transform = 'translateY(0)';
        }
    });
};

// Set initial state for animation
window.addEventListener('load', () => {
    optionCards.forEach((card, index) => {
        card.style.opacity = '0';
        card.style.transform = 'translateY(20px)';
        card.style.transition = `all 0.5s ease ${index * 0.1}s`;
    });
    
    animateOnScroll();
});

window.addEventListener('scroll', animateOnScroll);

// Form validation for newsletter
const newsletterForm = document.querySelector('.newsletter');
if (newsletterForm) {
    newsletterForm.addEventListener('submit', function(e) {
        e.preventDefault();
        const emailInput = this.querySelector('input[type="email"]');
        
        if (emailInput.value && emailInput.value.includes('@')) {
            alert('Thank you for subscribing!');
            emailInput.value = '';
        } else {
            alert('Please enter a valid email address');
        }
    });
}

// ========== Loading Screen ==========
window.addEventListener('load', function() {
    const loadingScreen = document.querySelector('.loading-screen');
    setTimeout(() => {
        loadingScreen.style.opacity = '0';
        setTimeout(() => {
            loadingScreen.style.display = 'none';
        }, 500);
    }, 1000);
});

// ========== Mobile Menu Toggle ==========
document.querySelector('.menu-toggle').addEventListener('click', function() {
    this.querySelector('i').classList.toggle('fa-times');
    document.querySelector('.mobile-menu').classList.toggle('active');
});

// ========== Smooth Scrolling ==========
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// ========== Back to Top Button ==========
const backToTopButton = document.getElementById('back-to-top');
window.addEventListener('scroll', function() {
    if (window.pageYOffset > 300) {
        backToTopButton.style.display = 'block';
    } else {
        backToTopButton.style.display = 'none';
    }
});

backToTopButton.addEventListener('click', function() {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
});

// ========== Testimonial Slider ==========
let currentSlide = 0;
const testimonials = [
    {
        quote: "AMWIC transformed our packaging workflow completely!",
        author: "John Smith, Packaging Co."
    },
    {
        quote: "The mobile app is incredibly intuitive and powerful.",
        author: "Sarah Johnson, Retail Solutions"
    },
    {
        quote: "Best digital packaging solution we've ever used.",
        author: "Michael Brown, Logistics Inc."
    }
];

function showTestimonials() {
    const slider = document.querySelector('.testimonial-slider');
    
    testimonials.forEach((testimonial, index) => {
        const slide = document.createElement('div');
        slide.className = 'testimonial-slide';
        slide.innerHTML = `
            <blockquote>"${testimonial.quote}"</blockquote>
            <cite>- ${testimonial.author}</cite>
        `;
        slider.appendChild(slide);
    });
    
    const slides = document.querySelectorAll('.testimonial-slide');
    slides[0].style.display = 'block';
    
    setInterval(() => {
        slides[currentSlide].style.display = 'none';
        currentSlide = (currentSlide + 1) % slides.length;
        slides[currentSlide].style.display = 'block';
    }, 5000);
}

// ========== Contact Form Validation ==========
const contactForm = document.getElementById('contact-form');
if (contactForm) {
    contactForm.addEventListener('submit', function(e) {
        e.preventDefault();
        
        const name = this.querySelector('input[name="name"]');
        const email = this.querySelector('input[name="email"]');
        const message = this.querySelector('textarea[name="message"]');
        
        if (!name.value || !email.value || !message.value) {
            alert('Please fill in all fields');
            return;
        }
        
        if (!email.value.includes('@')) {
            alert('Please enter a valid email address');
            return;
        }
        
        // Here you would typically send the form data to a server
        alert('Thank you for your message! We will contact you soon.');
        this.reset();
    });
}

// ========== Dark Mode Toggle ==========
const darkModeToggle = document.createElement('button');
darkModeToggle.className = 'dark-mode-toggle btn';
darkModeToggle.innerHTML = '<i class="fas fa-moon"></i>';
document.body.appendChild(darkModeToggle);

darkModeToggle.addEventListener('click', function() {
    document.body.classList.toggle('dark-mode');
    this.querySelector('i').classList.toggle('fa-sun');
});

// ========== Initialize Components ==========
document.addEventListener('DOMContentLoaded', function() {
    showTestimonials();
    
    // Animate elements on scroll
    const animateOnScroll = () => {
        const elements = document.querySelectorAll('.option-card, .feature-item');
        elements.forEach(el => {
            const position = el.getBoundingClientRect().top;
            const screenPosition = window.innerHeight / 1.3;
            
            if (position < screenPosition) {
                el.style.opacity = '1';
                el.style.transform = 'translateY(0)';
            }
        });
    };
    
    // Set initial state for animation
    const optionCards = document.querySelectorAll('.option-card');
    optionCards.forEach((card, index) => {
        card.style.opacity = '0';
        card.style.transform = 'translateY(20px)';
        card.style.transition = `all 0.5s ease ${index * 0.1}s`;
    });
    
    animateOnScroll();
    window.addEventListener('scroll', animateOnScroll);
});

