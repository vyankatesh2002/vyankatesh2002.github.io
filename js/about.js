/**
 * About Page JavaScript — Vyankatesh Jaware Portfolio
 * Handles: GSAP animations
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
})();

