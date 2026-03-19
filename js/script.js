
// Portfolio functionality handled inline in index.html&#10;// This file unused

            const floatingIconsContainer = document.querySelector('.floating-icons');
            const icons = ['fa-pills', 'fa-laptop-code', 'fa-heartbeat', 'fa-robot', 'fa-code', 'fa-database', 'fa-mobile-alt', 'fa-brain'];
            
            for (let i = 0; i < 15; i++) {
                const icon = document.createElement('div');
                icon.className = 'floating-icon';
                icon.style.top = `${Math.random() * 100}%`;
                icon.style.left = `${Math.random() * 100}%`;
                icon.style.fontSize = `${Math.random() * 1 + 1}rem`;
                icon.style.animationDuration = `${Math.random() * 10 + 15}s`;
                icon.style.animationDelay = `${Math.random() * 5}s`;
                icon.innerHTML = `<i class="fas ${icons[Math.floor(Math.random() * icons.length)]}"></i>`;
                floatingIconsContainer.appendChild(icon);
            }
            
            // Scroll-triggered animations for sections
            const sections = document.querySelectorAll('.section');
            
            sections.forEach(section => {
                gsap.from(section, {
                    scrollTrigger: {
                        trigger: section,
                        start: 'top 80%',
                        toggleActions: 'play none none reverse'
                    },
                    y: 50,
                    opacity: 0,
                    duration: 1,
                    ease: 'power3.out'
                });
            });
            
            // Animate skill cards on scroll
            const skillCards = document.querySelectorAll('.skill-card');
            
            skillCards.forEach((card, index) => {
                gsap.from(card, {
                    scrollTrigger: {
                        trigger: card,
                        start: 'top 85%',
                        toggleActions: 'play none none reverse'
                    },
                    y: 30,
                    opacity: 0,
                    duration: 0.8,
                    delay: index * 0.1,
                    ease: 'power3.out'
                });
            });
            
            // Animate portfolio items
            const portfolioItems = document.querySelectorAll('.portfolio-item');
            
            portfolioItems.forEach((item, index) => {
                gsap.from(item, {
                    scrollTrigger: {
                        trigger: item,
                        start: 'top 85%',
                        toggleActions: 'play none none reverse'
                    },
                    y: 40,
                    opacity: 0,
                    duration: 1,
                    delay: index * 0.15,
                    ease: 'power3.out'
                });
            });
        });
        
        // Back to top button functionality
        const backToTop = document.querySelector('.back-to-top');
        window.addEventListener('scroll', () => {
            if (window.scrollY > 500) {
                backToTop.classList.add('visible');
            } else {
                backToTop.classList.remove('visible');
            }
        });
        
        // Smooth scrolling for anchor links
        document.querySelectorAll('a[href^="#"]').forEach(anchor => {
            anchor.addEventListener('click', function(e) {
                e.preventDefault();
                
                const targetId = this.getAttribute('href');
                if (targetId === '#') return;
                
                const targetElement = document.querySelector(targetId);
                if (targetElement) {
                    window.scrollTo({
                        top: targetElement.offsetTop - 80,
                        behavior: 'smooth'
                    });
                }
            });
        });
        
        // Contact form submission
        document.getElementById('contactForm').addEventListener('submit', function(e) {
            e.preventDefault();
            
            // Get form values
            const name = document.getElementById('name').value;
            const email = document.getElementById('email').value;
            const message = document.getElementById('message').value;
            
            // Simple validation
            if (name && email && message) {
                // In a real application, you would send this data to a server
                // For now, we'll just show an alert and reset the form
                alert(`Thank you ${name}! Your message has been sent. I'll get back to you at ${email} as soon as possible.`);
                document.getElementById('contactForm').reset();
            } else {
                alert('Please fill in all fields before submitting.');
            }
        });
        
        // Project details modal function
        function showProjectDetails(projectId) {
            let title = '';
            let description = '';
            let technologies = [];
            let link = '#';
            
            switch(projectId) {
                case 'vandvik':
                    title = 'Vandvik Health Platform';
                    description = 'A comprehensive healthcare technology platform in development, focusing on combining pharmaceutical knowledge with digital wellness tools. The platform aims to provide personalized health guidance, medication information, and wellness tracking in an accessible format.';
                    technologies = ['Concept Development', 'Healthcare Integration', 'Wellness Tracking', 'Pharmaceutical Data'];
                    break;
                case 'dashboard':
                    title = 'Healthcare Analytics Dashboard';
                    description = 'An interactive dashboard concept for visualizing healthcare data, tracking wellness metrics, and providing insights into health trends. The dashboard features responsive design, interactive charts, and a user-friendly interface for healthcare providers and patients.';
                    technologies = ['JavaScript', 'Charts.js', 'Responsive Design', 'Data Visualization', 'Bootstrap 5'];
                    break;
                default:
                    title = 'Project Details';
                    description = 'More information about this project.';
                    technologies = ['Web Development', 'Healthcare Tech'];
            }
            
            // Create modal HTML
            const modalHTML = `
                <div class="modal fade" id="projectModal" tabindex="-1">
                    <div class="modal-dialog modal-lg">
                        <div class="modal-content">
                            <div class="modal-header">
                                <h5 class="modal-title">${title}</h5>
                                <button type="button" class="btn-close" data-bs-dismiss="modal"></button>
                            </div>
                            <div class="modal-body">
                                <p>${description}</p>
                                <h6>Technologies & Skills:</h6>
                                <div class="d-flex flex-wrap gap-2 mb-3">
                                    ${technologies.map(tech => `<span class="badge bg-primary">${tech}</span>`).join('')}
                                </div>
                                <p>This project demonstrates my approach to combining healthcare knowledge with technology to create practical, user-friendly solutions.</p>
                            </div>
                            <div class="modal-footer">
                                <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                                ${projectId === 'prabhunedimand' ? 
                                  `<a href="${link}" target="_blank" class="btn btn-primary">Visit Live Site</a>` : 
                                  `<button type="button" class="btn btn-primary" data-bs-dismiss="modal">Got It</button>`
                                }
                            </div>
                        </div>
                    </div>
                </div>
            `;
            
            // Remove existing modal if any
            const existingModal = document.getElementById('projectModal');
            if (existingModal) {
                existingModal.remove();
            }
            
            // Add modal to body
            document.body.insertAdjacentHTML('beforeend', modalHTML);
            
            // Show modal
            const projectModal = new bootstrap.Modal(document.getElementById('projectModal'));
            projectModal.show();
        }
        
        // Header scroll effect
        window.addEventListener('scroll', () => {
            const header = document.querySelector('.navbar');
            if (window.scrollY > 100) {
                header.classList.add('shadow');
            } else {
                header.classList.remove('shadow');
            }
        });
    