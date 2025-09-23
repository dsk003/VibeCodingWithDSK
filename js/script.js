// Vibe Coding Landing Page JavaScript

document.addEventListener('DOMContentLoaded', function() {
    
    // Smooth scrolling for navigation links
    function initSmoothScrolling() {
        const navLinks = document.querySelectorAll('a[href^="#"]');
        
        navLinks.forEach(link => {
            link.addEventListener('click', function(e) {
                e.preventDefault();
                
                const targetId = this.getAttribute('href');
                const targetSection = document.querySelector(targetId);
                
                if (targetSection) {
                    const offsetTop = targetSection.offsetTop - 70; // Account for fixed nav
                    
                    window.scrollTo({
                        top: offsetTop,
                        behavior: 'smooth'
                    });
                }
            });
        });
    }

    // Typing animation for the code window
    function initTypingAnimation() {
        const codeLines = [
            'const vibe = "pure flow";',
            'function createMagic() {',
            '  return intuition + logic;',
            '}',
            '// Your journey begins here'
        ];
        
        const typingLine = document.querySelector('.typing .code-text');
        const cursor = document.querySelector('.cursor');
        
        if (!typingLine || !cursor) return;
        
        let currentLineIndex = 0;
        let currentCharIndex = 0;
        let isDeleting = false;
        
        function typeWriter() {
            const currentLine = codeLines[currentLineIndex];
            
            if (isDeleting) {
                typingLine.innerHTML = currentLine.substring(0, currentCharIndex - 1) + '<span class="cursor">|</span>';
                currentCharIndex--;
                
                if (currentCharIndex === 0) {
                    isDeleting = false;
                    currentLineIndex = (currentLineIndex + 1) % codeLines.length;
                }
            } else {
                typingLine.innerHTML = currentLine.substring(0, currentCharIndex + 1) + '<span class="cursor">|</span>';
                currentCharIndex++;
                
                if (currentCharIndex === currentLine.length) {
                    setTimeout(() => {
                        isDeleting = true;
                    }, 2000); // Pause before deleting
                }
            }
            
            const typingSpeed = isDeleting ? 50 : 100;
            setTimeout(typeWriter, typingSpeed);
        }
        
        // Start typing animation after a delay
        setTimeout(typeWriter, 1000);
    }

    // Parallax effect for floating elements
    function initParallaxEffect() {
        const floatingElements = document.querySelectorAll('.floating-element');
        
        window.addEventListener('scroll', function() {
            const scrolled = window.pageYOffset;
            const parallax = scrolled * 0.5;
            
            floatingElements.forEach((element, index) => {
                const speed = (index + 1) * 0.1;
                element.style.transform = `translateY(${parallax * speed}px) rotate(${scrolled * 0.02}deg)`;
            });
        });
    }

    // Intersection Observer for animations
    function initScrollAnimations() {
        const observerOptions = {
            threshold: 0.1,
            rootMargin: '0px 0px -50px 0px'
        };

        const observer = new IntersectionObserver(function(entries) {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.style.opacity = '1';
                    entry.target.style.transform = 'translateY(0)';
                }
            });
        }, observerOptions);

        // Observe elements for scroll animations
        const animatedElements = document.querySelectorAll('.pricing-card, .audience-card, .review-card');
        
        animatedElements.forEach(element => {
            element.style.opacity = '0';
            element.style.transform = 'translateY(30px)';
            element.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
            observer.observe(element);
        });
    }

    // Navbar background on scroll
    function initNavbarScroll() {
        const nav = document.querySelector('.nav');
        
        window.addEventListener('scroll', function() {
            if (window.scrollY > 50) {
                nav.style.background = 'rgba(10, 10, 10, 0.95)';
            } else {
                nav.style.background = 'rgba(10, 10, 10, 0.9)';
            }
        });
    }

    // Button hover effects
    function initButtonEffects() {
        const buttons = document.querySelectorAll('.primary-button, .secondary-button, .pricing-button, .cta-button');
        
        buttons.forEach(button => {
            button.addEventListener('mouseenter', function() {
                this.style.transform = 'translateY(-2px)';
            });
            
            button.addEventListener('mouseleave', function() {
                this.style.transform = 'translateY(0)';
            });
        });
    }

    // Pricing card interactions
    function initPricingCards() {
        const pricingCards = document.querySelectorAll('.pricing-card');
        
        pricingCards.forEach(card => {
            card.addEventListener('mouseenter', function() {
                if (!this.classList.contains('featured')) {
                    this.style.transform = 'translateY(-10px) scale(1.02)';
                }
            });
            
            card.addEventListener('mouseleave', function() {
                if (!this.classList.contains('featured')) {
                    this.style.transform = 'translateY(0) scale(1)';
                }
            });
        });
    }

    // Code window syntax highlighting animation
    function initSyntaxHighlighting() {
        const codeElements = document.querySelectorAll('.code-text');
        
        codeElements.forEach((element, index) => {
            setTimeout(() => {
                element.style.opacity = '1';
                element.style.transform = 'translateX(0)';
            }, index * 200);
            
            element.style.opacity = '0';
            element.style.transform = 'translateX(-10px)';
            element.style.transition = 'opacity 0.5s ease, transform 0.5s ease';
        });
    }

    // Matrix-like background effect
    function initMatrixEffect() {
        const canvas = document.createElement('canvas');
        const ctx = canvas.getContext('2d');
        
        canvas.style.position = 'fixed';
        canvas.style.top = '0';
        canvas.style.left = '0';
        canvas.style.width = '100%';
        canvas.style.height = '100%';
        canvas.style.pointerEvents = 'none';
        canvas.style.zIndex = '-1';
        canvas.style.opacity = '0.1';
        
        document.body.appendChild(canvas);
        
        function resizeCanvas() {
            canvas.width = window.innerWidth;
            canvas.height = window.innerHeight;
        }
        
        window.addEventListener('resize', resizeCanvas);
        resizeCanvas();
        
        const chars = '01';
        const charSize = 14;
        const columns = canvas.width / charSize;
        const drops = Array(Math.floor(columns)).fill(1);
        
        function draw() {
            ctx.fillStyle = 'rgba(10, 10, 10, 0.05)';
            ctx.fillRect(0, 0, canvas.width, canvas.height);
            
            ctx.fillStyle = '#00ff88';
            ctx.font = `${charSize}px monospace`;
            
            drops.forEach((y, index) => {
                const char = chars[Math.floor(Math.random() * chars.length)];
                const x = index * charSize;
                
                ctx.fillText(char, x, y * charSize);
                
                if (y * charSize > canvas.height && Math.random() > 0.975) {
                    drops[index] = 0;
                }
                
                drops[index]++;
            });
        }
        
        setInterval(draw, 100);
    }

    // Glitch effect on hover for brand
    function initGlitchEffect() {
        const brandText = document.querySelector('.brand-text');
        
        if (brandText) {
            brandText.addEventListener('mouseenter', function() {
                this.style.animation = 'glitch 0.5s ease-in-out';
            });
            
            brandText.addEventListener('animationend', function() {
                this.style.animation = '';
            });
        }
    }

    // Add CSS for glitch animation
    function addGlitchCSS() {
        const style = document.createElement('style');
        style.textContent = `
            @keyframes glitch {
                0% { transform: translate(0); }
                20% { transform: translate(-2px, 2px); }
                40% { transform: translate(-2px, -2px); }
                60% { transform: translate(2px, 2px); }
                80% { transform: translate(2px, -2px); }
                100% { transform: translate(0); }
            }
        `;
        document.head.appendChild(style);
    }

    // Accordion functionality
    function initAccordion() {
        // Make toggleAccordion function globally available
        window.toggleAccordion = function(header) {
            const accordionItem = header.parentElement;
            const content = accordionItem.querySelector('.accordion-content');
            const icon = header.querySelector('.accordion-icon');
            
            // Close other accordion items in the same week
            const weekSection = accordionItem.closest('.week-section');
            const otherItems = weekSection.querySelectorAll('.accordion-item');
            
            otherItems.forEach(item => {
                if (item !== accordionItem && item.classList.contains('active')) {
                    item.classList.remove('active');
                    const otherIcon = item.querySelector('.accordion-icon');
                    if (otherIcon) {
                        otherIcon.textContent = '+';
                    }
                }
            });
            
            // Toggle current item
            accordionItem.classList.toggle('active');
            
            if (accordionItem.classList.contains('active')) {
                icon.textContent = '×';
            } else {
                icon.textContent = '+';
            }
        };
    }

    // Initialize all features
    function init() {
        initSmoothScrolling();
        initTypingAnimation();
        initParallaxEffect();
        initScrollAnimations();
        initNavbarScroll();
        initButtonEffects();
        initPricingCards();
        initSyntaxHighlighting();
        initMatrixEffect();
        initGlitchEffect();
        initAccordion();
        addGlitchCSS();
        
        // Add loading animation
        document.body.style.opacity = '0';
        document.body.style.transition = 'opacity 0.5s ease';
        
        setTimeout(() => {
            document.body.style.opacity = '1';
        }, 100);
    }

    // Start the magic
    init();
});

// Performance optimization: Throttle scroll events
function throttle(func, limit) {
    let inThrottle;
    return function() {
        const args = arguments;
        const context = this;
        if (!inThrottle) {
            func.apply(context, args);
            inThrottle = true;
            setTimeout(() => inThrottle = false, limit);
        }
    }
}

// Add some console art for developers who inspect the page
console.log(`
╔══════════════════════════════════════╗
║            VIBE CODING               ║
║         Code with Flow               ║
║                                      ║
║  You found the console! 🎯           ║
║  Ready to join the vibe?             ║
╚══════════════════════════════════════╝
`);

console.log('🌊 Welcome to Vibe Coding - Where code meets consciousness');
console.log('💡 Interested in the source? Check out our GitHub!');
console.log('🚀 Ready to start your flow state journey?');
