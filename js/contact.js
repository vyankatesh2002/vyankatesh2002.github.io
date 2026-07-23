/**
 * Contact Page JavaScript — Vyankatesh Jaware Portfolio
 * Handles: Contact form submission, GSAP animations
 */
(function () {
  'use strict';

  /* ----- GSAP Gradient Text Animation ----- */
  if (typeof gsap !== 'undefined') {
    gsap.from('.gradient-text', {
      opacity: 0,
      y: 30,
      duration: 1,
      ease: 'power3.out',
    });
  }

  /* ----- Contact Form Submission ----- */
  const contactForm = document.getElementById('contactForm');
  const formFeedback = document.getElementById('formFeedback');

  if (contactForm) {
    contactForm.addEventListener('submit', function (e) {
      e.preventDefault();

      const inputs = this.querySelectorAll('input, textarea');
      const name = inputs[0].value.trim();
      const email = inputs[1].value.trim();
      const subject = inputs[2].value.trim();
      const message = inputs[3].value.trim();

      if (!name || !email || !message) {
        if (formFeedback) {
          formFeedback.innerHTML =
            '<span style="color:#f87171;">Please fill all required fields.</span>';
        }
        return;
      }

      const mailtoLink = `mailto:vyankateshvjaware2002@gmail.com?subject=${encodeURIComponent(
        subject || 'Portfolio Contact'
      )}&body=${encodeURIComponent(
        `Name: ${name}\nEmail: ${email}\n\n${message}`
      )}`;

      window.open(mailtoLink, '_blank');

      if (formFeedback) {
        formFeedback.innerHTML =
          '<span style="color:#22c55e;">Email client opened! Check pop-up if needed.</span>';
      }

      this.reset();

      if (formFeedback) {
        setTimeout(() => {
          formFeedback.innerHTML = '';
        }, 5000);
      }
    });
  }
})();

