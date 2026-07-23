# Portfolio Code Separation - ✅ COMPLETED

## Overview
All CSS and JS code has been separated into page-specific files. Each page now loads only its own code plus shared utilities.

## File Structure

### Shared (loaded by all pages)
- `css/style.css` — Global reset, CSS variables, glass effects, particles, scrollbar, `data-theme` dark mode
- `js/script.js` — Theme toggle, mobile menu, AOS init, Three.js particles, scroll progress

### Page-Specific CSS
| File | Page | Content |
|------|------|---------|
| `css/index.css` | Home | Hero background, text visibility overrides |
| `css/about.css` | About | Timeline, circular progress |
| `css/project.css` | Projects | Tech badges |
| `css/contact.css` | Contact | Form inputs, submit button, map |
| `css/experience.css` | Experience | Highlight card |
| `css/skills.css` | Skills | Skill tag hover effects |
| `css/resume.css` | Resume | Resume card, profile img, social icons, section titles, print styles, dark mode |

### Page-Specific JS
| File | Page | Content |
|------|------|---------|
| `js/index.js` | Home | Projects data, Typed.js, contact form, smooth scroll |
| `js/about.js` | About | GSAP animations |
| `js/project.js` | Projects | Projects rendering |
| `js/contact.js` | Contact | Contact form submission, GSAP |
| `js/experience.js` | Experience | Placeholder |
| `js/skills.js` | Skills | Placeholder |
| `js/resume.js` | Resume | Theme toggle (data-theme), print handler |

### Pages
- `index.html` — Home page
- `About.html` — About page
- `Project.html` — Projects page
- `Contact.html` — Contact page
- `Experince.html` — Experience page
- `Skills.html` — Skills page
- `Resume.html` — Resume page

