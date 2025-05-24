// Smooth scroll for navbar links
document.querySelectorAll('.nav-links a').forEach(link => {
  link.addEventListener('click', e => {
    e.preventDefault();
    const targetId = link.getAttribute('href').slice(1);
    const targetSection = document.getElementById(targetId);
    if (targetSection) {
      window.scrollTo({
        top: targetSection.offsetTop - 60, // Adjust for fixed navbar height
        behavior: 'smooth',
      });
    }
    // Close menu on mobile after click
    const menuToggle = document.getElementById('menu-toggle');
    if (menuToggle.checked) {
      menuToggle.checked = false;
    }
  });
});

// Contact form submission handler
const contactForm = document.querySelector('.contact-form');

if (contactForm) {
  contactForm.addEventListener('submit', e => {
    e.preventDefault();

    const name = contactForm.querySelector('input[type="text"]').value.trim();
    const email = contactForm.querySelector('input[type="email"]').value.trim();
    const message = contactForm.querySelector('textarea').value.trim();

    if (!name || !email || !message) {
      alert('Please fill in all fields.');
      return;
    }

    // Here you could add backend integration (EmailJS, Formspree etc.)
    alert(`Thanks for reaching out, ${name}! I'll get back to you soon.`);

    contactForm.reset();
  });
}
