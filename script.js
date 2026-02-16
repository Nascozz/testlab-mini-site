const yearEl = document.getElementById('year');
if (yearEl) yearEl.textContent = new Date().getFullYear();

const toggle = document.getElementById('themeToggle');
const root = document.documentElement;

const stored = localStorage.getItem('theme');
if (stored === 'light') root.classList.add('light');

if (toggle) {
  toggle.addEventListener('click', () => {
    root.classList.toggle('light');
    localStorage.setItem('theme', root.classList.contains('light') ? 'light' : 'dark');
    toggle.textContent = root.classList.contains('light') ? '☀' : '☾';
  });
}

// initialize icon
if (toggle) toggle.textContent = root.classList.contains('light') ? '☀' : '☾';

// reveal on scroll
const revealEls = document.querySelectorAll('.reveal');
const revealObserver = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        revealObserver.unobserve(entry.target);
      }
    });
  },
  { threshold: 0.2 }
);

revealEls.forEach((el) => revealObserver.observe(el));
