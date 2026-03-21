// Nav scroll effect
const nav = document.querySelector('.nav');
window.addEventListener('scroll', () => {
    nav.classList.toggle('scrolled', window.scrollY > 10);
});

// Mobile menu toggle
const menuBtn = document.querySelector('.mobile-menu-btn');
const navLinks = document.querySelector('.nav-links');

menuBtn.addEventListener('click', () => {
    menuBtn.classList.toggle('active');
    navLinks.classList.toggle('open');
});

// Close mobile menu on link click
navLinks.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', () => {
        menuBtn.classList.remove('active');
        navLinks.classList.remove('open');
    });
});

// Join form submission
const form = document.getElementById('joinForm');
const formSuccess = document.getElementById('formSuccess');

form.addEventListener('submit', async (e) => {
    e.preventDefault();

    const email = document.getElementById('email').value;
    const submitBtn = form.querySelector('button[type="submit"]');

    submitBtn.textContent = 'Joining...';
    submitBtn.disabled = true;

    // Simulate a brief delay for UX (replace with actual API call)
    await new Promise(resolve => setTimeout(resolve, 800));

    // Hide form, show success
    form.style.display = 'none';
    formSuccess.classList.add('show');

    // Log for now — replace with actual backend integration
    console.log('Waitlist signup:', email);
});

// Smooth scroll for anchor links (fallback for older browsers)
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', (e) => {
        const target = document.querySelector(anchor.getAttribute('href'));
        if (target) {
            e.preventDefault();
            target.scrollIntoView({ behavior: 'smooth' });
        }
    });
});
