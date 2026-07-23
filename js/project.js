/**
 * Project Page JavaScript — Vyankatesh Jaware Portfolio
 * Handles: Projects grid rendering
 */
(function () {
  'use strict';

  /* ----- Projects Data ----- */
  const projects = [
    {
      title: '💎 Prabhune Diamonds',
      desc: 'Live business website for a jewelry brand. Fully responsive, SEO optimized, and WhatsApp integrated.',
      img: 'https://placehold.co/600x300/f8fafc/2563EB?text=Prabhune+Diamonds',
      tags: ['HTML5', 'CSS3', 'JavaScript', 'SEO', 'WhatsApp'],
      live: 'https://prabhunediamond.com/',
      github: 'https://github.com/vyankatesh2002/prabhune-diamonds',
    },
    {
      title: '🤖 Vandvik AI',
      desc: 'AI-focused digital platform concept exploring intelligent assistance and futuristic web design.',
      img: 'https://placehold.co/600x300/f8fafc/7C3AED?text=Vandvik+AI',
      tags: ['HTML5', 'CSS3', 'JS', 'AI Concept'],
      live: 'https://vyankatesh2002.github.io/Vandvik.com/',
      github: 'https://github.com/vyankatesh2002/Vandvik',
    },
    {
      title: '🏍️ Vynora',
      desc: 'Premium mobility platform for trusted bike rides in Nashik. Pay after ride, women-friendly.',
      img: 'https://placehold.co/600x300/f8fafc/06B6D4?text=Vynora',
      tags: ['HTML5', 'CSS3', 'JS', 'Booking'],
      live: 'https://vyankatesh2002.github.io/vynora/',
      github: 'https://github.com/vyankatesh2002/vynora',
    },
    {
      title: '🧮 Smart Calculator',
      desc: 'Real-time calculation app with clean responsive UI and keyboard support.',
      img: 'https://placehold.co/600x300/f8fafc/2563EB?text=Smart+Calculator',
      tags: ['HTML5', 'CSS3', 'JavaScript'],
      live: 'https://vyankatesh2002.github.io/Calculator/',
      github: 'https://github.com/vyankatesh2002/Calculator',
    },
    {
      title: '✅ To-Do Pro',
      desc: 'Task manager with local storage – add, delete, and persist tasks across sessions.',
      img: 'https://placehold.co/600x300/f8fafc/7C3AED?text=To-Do+App',
      tags: ['HTML5', 'CSS3', 'JS', 'LocalStorage'],
      live: 'https://vyankatesh2002.github.io/To-Do-List/',
      github: 'https://github.com/vyankatesh2002/To-Do-List',
    },
    {
      title: '🎯 CLD Club',
      desc: 'Community platform for learning, development, leadership, and growth initiatives.',
      img: 'https://placehold.co/600x300/f8fafc/8b5cf6?text=CLD+Club',
      tags: ['HTML5', 'CSS3', 'Community'],
      live: 'https://vyankatesh2002.github.io/CLD-club/',
      github: null,
    },
    {
      title: '🧠 MediMind',
      desc: 'Healthcare digital assistant concept – medicine management and smart healthcare reminders.',
      img: 'https://placehold.co/600x300/f8fafc/2563EB?text=MediMind',
      tags: ['AI', 'Healthcare', 'Concept'],
      live: null,
      github: 'https://github.com/vyankatesh2002/MediMind',
    },
  ];

  /** Render project cards into the grid */
  function renderProjects() {
    const container = document.getElementById('projects-grid');
    if (!container) return;

    container.innerHTML = projects
      .map(
        (project, index) => `
        <div class="glass-card overflow-hidden flex flex-col" data-aos="fade-up" ${
          index > 0 ? `data-aos-delay="${index * 100}"` : ''
        }>
          <img
            src="${project.img}"
            alt="${project.title}"
            class="w-full h-44 object-cover project-image"
            loading="lazy"
          />
          <div class="p-6 flex flex-col flex-1">
            <h4 class="text-xl font-semibold mb-2">${project.title}</h4>
            <p class="text-sm flex-1">${project.desc}</p>
            <div class="flex flex-wrap gap-2 mt-4">
              ${project.tags
                .map(
                  (tag) =>
                    `<span class="tech-badge bg-blue-50 text-primary-600 px-3 py-1 rounded-full text-xs">${tag}</span>`
                )
                .join('')}
            </div>
            <div class="flex gap-4 mt-5">
              ${
                project.live
                  ? `<a href="${project.live}" target="_blank" rel="noopener noreferrer" class="text-primary-500 hover:text-primary-700 text-sm font-medium inline-flex items-center gap-1"><i class="fas fa-external-link-alt"></i> Live Demo</a>`
                  : ''
              }
              ${
                project.github
                  ? `<a href="${project.github}" target="_blank" rel="noopener noreferrer" class="text-gray-500 hover:text-gray-700 text-sm font-medium inline-flex items-center gap-1"><i class="fab fa-github"></i> GitHub</a>`
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
})();

