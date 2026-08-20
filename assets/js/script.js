/**
 * Shared JavaScript — Vyankatesh Jaware Portfolio
 * Handles: Theme toggle, Mobile menu, AOS, Particles, Scroll progress
 */
(function () {
  'use strict';

  /* ----- Theme Toggle ----- */
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

  /* ----- Mobile Menu Toggle ----- */
  const mobileToggle = document.getElementById('mobile-toggle');
  const mobileMenu = document.getElementById('mobile-menu');

  if (mobileToggle && mobileMenu) {
    mobileToggle.addEventListener('click', () => {
      mobileMenu.classList.toggle('hidden');
    });

    // Close mobile menu on link click
    mobileMenu.querySelectorAll('a').forEach((link) => {
      link.addEventListener('click', () => {
        mobileMenu.classList.add('hidden');
      });
    });
  }

  /* ----- AOS (Animate on Scroll) ----- */
  if (typeof AOS !== 'undefined') {
    AOS.init({ once: true, offset: 80 });
  }

  /* ----- Three.js Particles ----- */
  const canvas = document.getElementById('particles-canvas');
  if (canvas && typeof THREE !== 'undefined') {
    const renderer = new THREE.WebGLRenderer({ canvas, alpha: true, antialias: true });
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    renderer.setSize(window.innerWidth, window.innerHeight);

    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(
      75,
      window.innerWidth / window.innerHeight,
      0.1,
      1000
    );
    camera.position.z = 30;

    const geometry = new THREE.BufferGeometry();
    const particleCount = 400;
    const positions = new Float32Array(particleCount * 3);

    for (let i = 0; i < particleCount * 3; i += 3) {
      positions[i] = (Math.random() - 0.5) * 50;
      positions[i + 1] = (Math.random() - 0.5) * 30;
      positions[i + 2] = (Math.random() - 0.5) * 40;
    }

    geometry.setAttribute('position', new THREE.BufferAttribute(positions, 3));

    const material = new THREE.PointsMaterial({
      size: 0.12,
      color: 0x2563eb,
      blending: THREE.AdditiveBlending,
      transparent: true,
      opacity: 0.6,
    });

    const particleSystem = new THREE.Points(geometry, material);
    scene.add(particleSystem);

    function animateParticles() {
      requestAnimationFrame(animateParticles);
      particleSystem.rotation.y += 0.0003;
      particleSystem.rotation.x += 0.0001;
      renderer.render(scene, camera);
    }

    animateParticles();

    window.addEventListener('resize', () => {
      renderer.setSize(window.innerWidth, window.innerHeight);
      camera.aspect = window.innerWidth / window.innerHeight;
      camera.updateProjectionMatrix();
    });
  }

  /* ----- Scroll Progress Bar ----- */
  const scrollProgress = document.getElementById('scroll-progress');
  if (scrollProgress) {
    window.addEventListener('scroll', () => {
      const scrollTop = window.scrollY;
      const docHeight = document.documentElement.scrollHeight - window.innerHeight;
      const progress = docHeight > 0 ? (scrollTop / docHeight) * 100 : 0;
      scrollProgress.style.width = `${progress}%`;
    });
  }
})();

