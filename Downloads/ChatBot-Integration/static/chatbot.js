document.addEventListener('DOMContentLoaded', () => {
    // Navbar Scroll Effect
    const nav = document.querySelector('nav');
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            nav.classList.add('scrolled');
        } else {
            nav.classList.remove('scrolled');
        }
    });

    // Mobile Menu Toggle
    const menuToggle = document.querySelector('.menu-toggle');
    const navLinks = document.querySelector('.nav-links');

    menuToggle.addEventListener('click', () => {
        navLinks.classList.toggle('open');
        navLinks.classList.toggle('mobile');

        // Animate Hamburger
        const spans = menuToggle.querySelectorAll('span');
        spans[0].style.transform = navLinks.classList.contains('open') ? 'rotate(45deg) translate(5px, 6px)' : 'none';
        spans[1].style.opacity = navLinks.classList.contains('open') ? '0' : '1';
        spans[2].style.transform = navLinks.classList.contains('open') ? 'rotate(-45deg) translate(5px, -6px)' : 'none';
    });

    // Smooth Scrolling for Nav Links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                window.scrollTo({
                    top: target.offsetTop - 80,
                    behavior: 'smooth'
                });
                // Close mobile menu if open
                navLinks.classList.remove('open');
            }
        });
    });

    // Reveal Animations on Scroll
    const revealElements = document.querySelectorAll('.reveal');
    const revealObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('active');
            }
        });
    }, { threshold: 0.1 });

    revealElements.forEach(el => revealObserver.observe(el));

    // Active Nav Link on Scroll
    const sections = document.querySelectorAll('section');
    window.addEventListener('scroll', () => {
        let current = '';
        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.clientHeight;
            if (window.scrollY >= (sectionTop - 150)) {
                current = section.getAttribute('id');
            }
        });

        document.querySelectorAll('.nav-links a').forEach(a => {
            a.classList.remove('active');
            if (a.getAttribute('href').includes(current)) {
                a.classList.add('active');
            }
        });
    });

    // Hero Animations on Load
    setTimeout(() => {
        const heroTitle = document.querySelector('.hero-content h1');
        const heroPara = document.querySelector('.hero-content p');
        const heroBtn = document.querySelector('.cta-button');

        if (heroTitle) {
            heroTitle.style.opacity = '1';
            heroTitle.style.transform = 'translateY(0)';
            heroTitle.style.transition = 'all 1s ease-out';
        }
        if (heroPara) {
            setTimeout(() => {
                heroPara.style.opacity = '1';
                heroPara.style.transform = 'translateY(0)';
                heroPara.
if (contactForm) {
    contactFostyle.transition = 'all 1s ease-out';
            }, 300);
        }
        if (heroBtn) {
            setTimeout(() => {
                heroBtn.style.opacity = '1';
                heroBtn.style.transform = 'translateY(0)';
                heroBtn.style.transition = 'all 1s ease-out';
            }, 600);
        }
    }, 100);

    // Form Submission with Database Storage
const contactForm = document.getElementById('contactForm');
rm.addEventListener('submit', async (e) => {
        e.preventDefault();

        const btn = contactForm.querySelector('.submit-btn');
        const originalText = btn.innerText;

        const name = document.getElementById('name').value.trim();
        const email = document.getElementById('email').value.trim();
        const message = document.getElementById('message').value.trim();

        if (!name || !message) {
            alert("Name and message are required.");
            return;
        }

        btn.innerText = 'Sending...';
        btn.disabled = true;

        try {
            const response = await fetch("/save-lead", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({
                    name: name,
                    email: email,
                    message: message
                })
            });

            const result = await response.json();

            if (response.ok && result.status === "success") {
                btn.innerText = "Success!";
                btn.style.background = "#00ff88";
                btn.style.color = "#000";
                contactForm.reset();
            } else {
                throw new Error(result.message || "Failed to save lead.");
            }

        } catch (error) {
            console.error("Error:", error);
            alert("Something went wrong. Please try again.");
        } finally {
            setTimeout(() => {
                btn.innerText = originalText;
                btn.disabled = false;
                btn.style.background = "";
                btn.style.color = "";
            }, 3000);
        }
    });
}

    // FAQ Accordion Logic
    const faqItems = document.querySelectorAll('.faq-item');
    faqItems.forEach(item => {
        const question = item.querySelector('.faq-question');
        question.addEventListener('click', () => {
            const isActive = item.classList.contains('active');

            // Close all other items
            faqItems.forEach(otherItem => otherItem.classList.remove('active'));

            // Toggle current item
            if (!isActive) {
                item.classList.add('active');
            }
        });
    });

    // Stats Counter Animation
    const stats = document.querySelectorAll('.stat-card h3');
    const animateCounter = (el) => {
        const targetStr = el.innerText;
        const targetNum = parseInt(targetStr);
        const suffix = targetStr.replace(/[0-9]/g, '');
        let count = 0;
        const duration = 2000; // 2 seconds
        const frameRate = 1000 / 60;
        const totalFrames = Math.round(duration / frameRate);
        const increment = targetNum / totalFrames;

        const update = () => {
            count += increment;
            if (count < targetNum) {
                el.innerText = Math.floor(count) + suffix;
                requestAnimationFrame(update);
            } else {
                el.innerText = targetNum + suffix;
            }
        };
        update();
    };

    const statsObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting && !entry.target.classList.contains('counted')) {
                const counter = entry.target.querySelector('h3');
                if (counter) animateCounter(counter);
                entry.target.classList.add('counted');
            }
        });
    }, { threshold: 0.5 });

    document.querySelectorAll('.stat-card').forEach(card => statsObserver.observe(card));
});


//
//const toggle = document.getElementById("chatToggle");
//const container = document.getElementById("chatContainer");
//const input = document.getElementById("chatInput");
//const messages = document.getElementById("chatMessages");
//
//toggle.addEventListener("click", () => {
//    container.classList.toggle("active");
//});
//
//function sendMessage() {
//    const text = input.value.trim();
//    if (!text) return;
//
//    const userMsg = document.createElement("div");
//    userMsg.className = "message user-message";
//    userMsg.textContent = text;
//    messages.appendChild(userMsg);
//
//    input.value = "";
//    messages.scrollTop = messages.scrollHeight;
//
//    setTimeout(() => {
//        const botMsg = document.createElement("div");
//        botMsg.className = "message bot-message";
//        botMsg.textContent = "Thanks for your message. Our team will respond shortly.";
//        messages.appendChild(botMsg);
//        messages.scrollTop = messages.scrollHeight;
//    }, 800);
//}
//
//input.addEventListener("keypress", function(e) {
//    if (e.key === "Enter") {
//        sendMessage();
//    }
//});