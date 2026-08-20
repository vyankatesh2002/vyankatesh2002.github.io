/**
 * Index Page JavaScript — Vyankatesh Jaware Portfolio
 * Handles: Projects grid, Typed.js, Contact form, Smooth scroll
 */
(function () {
  'use strict';

  /* ----- Projects Data ----- */
  const projects = [
    {
      title: '💎 Prabhune Diamonds',
      desc: 'Live business website – responsive, SEO optimized, WhatsApp integration.',
      img: 'https://placehold.co/600x300/f8fafc/2563EB?text=Prabhune+Diamonds',
      tags: ['HTML5', 'CSS3', 'JavaScript', 'SEO'],
      live: 'https://prabhunediamond.com/',
      github: 'https://github.com/vyankatesh2002/prabhune-diamonds',
    },
    {
      title: '🤖 Vandvik AI',
      desc: 'AI-focused digital platform exploring intelligent assistance.',
      img: 'https://placehold.co/600x300/f8fafc/7C3AED?text=Vandvik+AI',
      tags: ['HTML5', 'CSS3', 'JS', 'AI Concept'],
      live: 'https://vyankatesh2002.github.io/Vandvik.com/',
      github: 'https://github.com/vyankatesh2002/Vandvik',
    },
    {
      title: '🏍️ Vynora',
      desc: 'Premium mobility platform – trusted bike rides in Nashik.',
      img: 'https://placehold.co/600x300/f8fafc/06B6D4?text=Vynora',
      tags: ['HTML5', 'CSS3', 'JS'],
      live: 'https://vyankatesh2002.github.io/vynora/',
      github: 'https://github.com/vyankatesh2002/vynora',
    },
    {
      title: '🧮 Smart Calculator',
      desc: 'Real-time calculation app with clean responsive UI.',
      img: 'https://placehold.co/600x300/f8fafc/2563EB?text=Smart+Calculator',
      tags: ['HTML5', 'CSS3', 'JavaScript'],
      live: 'https://vyankatesh2002.github.io/Calculator/',
      github: 'https://github.com/vyankatesh2002/Calculator',
    },
    {
      title: '✅ To-Do Pro',
      desc: 'Task manager with local storage – add, delete, persist tasks.',
      img: 'https://placehold.co/600x300/f8fafc/7C3AED?text=To-Do+App',
      tags: ['HTML5', 'CSS3', 'JS', 'LocalStorage'],
      live: 'https://vyankatesh2002.github.io/To-Do-List/',
      github: 'https://github.com/vyankatesh2002/To-Do-List',
    },
    {
      title: '🎯 CLD Club',
      desc: 'Community platform for learning & leadership.',
      img: 'https://placehold.co/600x300/f8fafc/8b5cf6?text=CLD+Club',
      tags: ['HTML5', 'CSS3', 'Community'],
      live: 'https://vyankatesh2002.github.io/CLD-club/',
      github: null,
    },
    {
      title: '🧠 MediMind',
      desc: 'Healthcare digital assistant concept.',
      img: 'https://placehold.co/600x300/f8fafc/2563EB?text=MediMind',
      tags: ['AI', 'Healthcare', 'Concept'],
      live: null,
      github: 'https://github.com/vyankatesh2002/MediMind',
    },
  ];

  /** Render projects into the grid */
  function renderProjects() {
    const grid = document.getElementById('projects-grid');
    if (!grid) return;

    grid.innerHTML = projects
      .map(
        (project, index) => `
        <div class="glass-card overflow-hidden flex flex-col" data-aos="fade-up" ${
          index > 0 ? `data-aos-delay="${index * 100}"` : ''
        }>
          <img
            src="${project.img}"
            alt="${project.title}"
            class="w-full h-44 object-cover"
            loading="lazy"
          />
          <div class="p-6 flex flex-col flex-1">
            <h4 class="text-xl font-semibold mb-2 text-gray-900">${project.title}</h4>
            <p class="text-sm flex-1 text-gray-600">${project.desc}</p>
            <div class="flex flex-wrap gap-2 mt-4">
              ${project.tags
                .map(
                  (tag) =>
                    `<span class="bg-blue-50 text-primary-500 px-2 py-1 rounded-full text-xs">${tag}</span>`
                )
                .join('')}
            </div>
            <div class="flex gap-4 mt-5">
              ${
                project.live
                  ? `<a href="${project.live}" target="_blank" rel="noopener noreferrer" class="text-primary-500 hover:text-primary-700 text-sm font-medium"><i class="fas fa-external-link-alt"></i> Live</a>`
                  : ''
              }
              ${
                project.github
                  ? `<a href="${project.github}" target="_blank" rel="noopener noreferrer" class="text-gray-500 hover:text-gray-700 text-sm font-medium"><i class="fab fa-github"></i> GitHub</a>`
                  : ''
              }
            </div>
          </div>
        </div>
      `
      )
      .join('');
  }

  renderProjects();

  /* ----- Typed.js Animation ----- */
  const typedElement = document.getElementById('typed');
  if (typedElement && typeof Typed !== 'undefined') {
    new Typed('#typed', {
      strings: [
        'AI Engineer',
        'Machine Learning Engineer',
        'Python Developer',
        'Full Stack Developer',
        'Future Entrepreneur',
      ],
      typeSpeed: 50,
      backSpeed: 30,
      backDelay: 1500,
      loop: true,
    });
  }

  /* ----- Contact Form ----- */
  const contactForm = document.getElementById('contactForm');
  if (contactForm) {
    contactForm.addEventListener('submit', function (e) {
      e.preventDefault();
      const inputs = this.querySelectorAll('input, textarea');
      const name = inputs[0].value.trim();
      const email = inputs[1].value.trim();
      const message = inputs[2].value.trim();

      if (name && email && message) {
        const mailtoLink = `mailto:vyankateshvjaware2002@gmail.com?subject=Portfolio Contact from ${encodeURIComponent(name)}&body=${encodeURIComponent('Name: ' + name + '\nEmail: ' + email + '\n\n' + message)}`;
        window.open(mailtoLink);
        alert('Thank you! Your email client should open.');
        this.reset();
      }
    });
  }

  /* ----- Smooth Scroll for Anchor Links ----- */
  document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
    anchor.addEventListener('click', function (e) {
      const targetId = this.getAttribute('href');
      if (targetId === '#') return;
      const target = document.querySelector(targetId);
      if (target) {
        e.preventDefault();
        target.scrollIntoView({ behavior: 'smooth' });
        // Close mobile menu if open
        const menu = document.getElementById('mobile-menu');
        if (menu) menu.classList.add('hidden');
      }
    });
  });
})();

