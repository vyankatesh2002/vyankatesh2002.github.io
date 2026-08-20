/**
 * Resume Page JavaScript — Vyankatesh Jaware Portfolio
 * Handles: Theme toggle (data-theme attribute), smooth print
 */
(function () {
  'use strict';

  /* ----- Theme Toggle (data-theme based, consistent with shared style.css) ----- */
  const themeToggle = document.getElementById('theme-toggle');
  const htmlEl = document.documentElement;

  if (themeToggle) {
    // Restore saved theme
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme) {
      htmlEl.setAttribute('data-theme', savedTheme);
      themeToggle.innerHTML = savedTheme === 'dark'
        ? '<i class="fas fa-sun"></i>'
        : '<i class="fas fa-moon"></i>';
    }

    themeToggle.addEventListener('click', () => {
      const isDark = htmlEl.getAttribute('data-theme') === 'dark';
      const newTheme = isDark ? 'light' : 'dark';
      htmlEl.setAttribute('data-theme', newTheme);
      themeToggle.innerHTML = isDark
        ? '<i class="fas fa-moon"></i>'
        : '<i class="fas fa-sun"></i>';
      localStorage.setItem('theme', newTheme);
    });
  }

  /* ----- Print Handler ----- */
  const printButtons = document.querySelectorAll('[data-action="print"]');
  printButtons.forEach((btn) => {
    btn.addEventListener('click', (e) => {
      e.preventDefault();
      window.print();
    });
  });
})();

