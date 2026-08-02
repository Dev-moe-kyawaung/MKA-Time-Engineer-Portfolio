'use strict';

// Main application logic
class TimeEngineerPortfolio {
    constructor() {
        this.sections = [];
        this.currentSection = null;
        this.init();
    }

    init() {
        this.hidePreloader();
        this.initNavigation();
        this.initTypewriter();
        this.initScrollAnimations();
        this.initVideoHover();
        this.initBackToTop();
        this.initPWA();
    }

    hidePreloader() {
        window.addEventListener('load', () => {
            setTimeout(() => {
                document.getElementById('preloader').classList.add('hidden');
            }, 1000);
        });
    }

    initNavigation() {
        const nav = document.getElementById('mainNav');
        const hamburger = document.querySelector('.nav-hamburger');
        const navLinks = document.querySelector('.nav-links');

        window.addEventListener('scroll', () => {
            nav.classList.toggle('scrolled', window.scrollY > 50);
            this.updateActiveSection();
        });

        hamburger.addEventListener('click', () => {
            hamburger.classList.toggle('active');
            navLinks.classList.toggle('active');
            document.body.style.overflow = navLinks.classList.contains('active') ? 'hidden' : '';
        });

        // Close mobile menu on link click
        document.querySelectorAll('.nav-links a').forEach(link => {
            link.addEventListener('click', () => {
                hamburger.classList.remove('active');
                navLinks.classList.remove('active');
                document.body.style.overflow = '';
            });
        });
    }

    updateActiveSection() {
        const sections = document.querySelectorAll('.section');
        const navLinks = document.querySelectorAll('.nav-links a');

        sectionLoop: for (let i = sections.length - 1; i >= 0; i--) {
            const rect = sections[i].getBoundingClientRect();
            if (rect.top <= window.innerHeight / 2) {
                const currentId = sections[i].id;
                navLinks.forEach(link => {
                    link.classList.toggle('active', link.getAttribute('href') === `#\${currentId}`);
                });
                break sectionLoop;
            }
        }
    }

    initTypewriter() {
        const phrases = [
            'Full-Stack Developer',
            'PWA Specialist',
            'POS System Architect',
            'Creative Problem Solver',
            'Time Engineer'
        ];
        const typedElement = document.getElementById('typed-text');
        let phraseIndex = 0;
        let charIndex = 0;
        let isDeleting = false;

        const type = () => {
            const currentPhrase = phrases[phraseIndex];
            
            if (!isDeleting) {
                typedElement.textContent = currentPhrase.substring(0, charIndex + 1);
                charIndex++;
                
                if (charIndex === currentPhrase.length) {
                    isDeleting = true;
                    setTimeout(type, 2000);
                    return;
                }
            } else {
                typedElement.textContent = currentPhrase.substring(0, charIndex - 1);
                charIndex--;
                
                if (charIndex === 0) {
                    isDeleting = false;
                    phraseIndex = (phraseIndex + 1) % phrases.length;
                }
            }
            
            setTimeout(type, isDeleting ? 50 : 100);
        };

        setTimeout(type, 1500);
    }

    initScrollAnimations() {
        const sections = document.querySelectorAll('.section');
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('visible');
                    
                    // Animate counters when visible
                    if (entry.target.classList.contains('hero')) {
                        this.animateCounters();
                    }
                }
            });
        }, { threshold: 0.1 });

        sections.forEach(section => observer.observe(section));
    }

    animateCounters() {
        const digits = document.querySelectorAll('.watch-digit');
        digits.forEach(digit => {
            const target = parseInt(digit.getAttribute('data-target'));
            if (target) {
                let current = 0;
                const increment = target / 60; // Animate over 60 frames
                
                const counterInterval = setInterval(() => {
                    current += increment;
                    digit.textContent = Math.round(current);
                    
                    if (current >= target) {
                        digit.textContent = target;
                        clearInterval(counterInterval);
                    }
                }, 20);
            }
        });
    }

    initVideoHover() {
        document.querySelectorAll('.video-card video').forEach(video => {
            video.addEventListener('mouseenter', () => video.play());
            video.addEventListener('mouseleave', () => {
                video.pause();
                video.currentTime = 0;
            });
        });
    }

    initBackToTop() {
        const backToTop = document.querySelector('.back-to-top');
        
        window.addEventListener('scroll', () => {
            window.scrollY > 300 ? backToTop.classList.add('show') : backToTop.classList.remove('show');
        });
    }

    initPWA() {
        if ('serviceWorker' in navigator) {
            window.addEventListener('load', () => {
                navigator.serviceWorker.register('/sw.js').catch(err => {
                    console.log('SW registration failed:', err);
                });
            });
        }
    }
}

// Initialize portfolio when DOM is ready
document.addEventListener('DOMContentLoaded', () => {
    new TimeEngineerPortfolio();
});

// Utility functions
function scrollToSection(sectionId) {
    document.querySelector(sectionId).scrollIntoView({ behavior: 'smooth' });
}

function toggleMenu() {
    document.querySelector('.nav-hamburger').classList.toggle('active');
    document.querySelector('.nav-links').classList.toggle('active');
}

function openCapsule(element) {
    const rect = element.getBoundingClientRect();
    const ripple = document.createElement('div');
    ripple.className = 'ripple-effect';
    ripple.style.left = `\${rect.width / 2}px`;
    ripple.style.top = `\${rect.height / 2}px`;
    element.appendChild(ripple);
    setTimeout(() => ripple.remove(), 600);
}

function handleContactSubmit(event) {
    event.preventDefault();
    const form = event.target;
    const formData = new FormData(form);
    
    // Here you would typically send the form data to a backend
    console.log('Form submitted:', Object.fromEntries(formData));
    alert('Message sent successfully! I\'ll get back to you soon. 🚀');
    form.reset();
}
