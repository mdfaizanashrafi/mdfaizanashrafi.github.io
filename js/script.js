// Mobile Navigation Toggle
const hamburger = document.querySelector('.hamburger');
const navMenu = document.querySelector('.nav-menu');

hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('active');
    navMenu.classList.toggle('active');
});

document.querySelectorAll('.nav-menu a').forEach(link => {
    link.addEventListener('click', () => {
        hamburger.classList.remove('active');
        navMenu.classList.remove('active');
    });
});

// Skill Bars Animation
document.addEventListener('DOMContentLoaded', function() {
    const skillBars = document.querySelectorAll('.skill-progress');
    
    const animateSkillBars = () => {
        skillBars.forEach(bar => {
            const width = bar.getAttribute('data-width');
            bar.style.width = width + '%';
        });
    };
    
    // Animate when skills section is in view
    const skillsSection = document.querySelector('.skills-section');
    if (skillsSection) {
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    animateSkillBars();
                    observer.unobserve(entry.target);
                }
            });
        }, { threshold: 0.5 });
        
        observer.observe(skillsSection);
    }
    
    // Form Submission
    const contactForm = document.getElementById('contactForm');
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            const name = document.getElementById('name').value;
            const email = document.getElementById('email').value;
            const message = document.getElementById('message').value;
            const formMessage = document.getElementById('formMessage');
            
            // Basic validation
            if (name && email && message) {
                // In a real implementation, you would send this to a server
                formMessage.textContent = 'Thank you for your message! I will get back to you soon.';
                formMessage.style.color = '#000';
                contactForm.reset();
            } else {
                formMessage.textContent = 'Please fill in all fields.';
                formMessage.style.color = '#d00';
            }
        });
    }
    
    // Add subtle pencil sketch effect to all text
    const allTextElements = document.querySelectorAll('h1, h2, h3, h4, p, li, .btn');
    allTextElements.forEach(el => {
        // Add subtle animation to simulate pencil drawing
        el.style.animation = 'sketchText 0.5s forwards';
        el.style.animationDelay = Math.random() * 0.5 + 's';
    });
});

// Dark Mode Toggle - almusavvir - 3-Nov-2025

const darkModeToggle = document.getElementById('darkmode-toggle');
   if(localStorage.getItem('darkMode') === 'enabled'){ 
         document.body.classList.add('dark-mode');
    }
darkModeToggle.addEventListener('click', () => {
    document.body.classList.toggle('dark-mode');
    if(document.body.classList.contains('dark-mode')){
        localStorage.setItem('darkMode', 'enabled');
    } else {
        localStorage.setItem('darkMode', 'disabled');
    }
});
