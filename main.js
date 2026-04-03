const TELEGRAM_URL = 'https://t.me/+gwV5DNGCevM0YWJi';

document.querySelectorAll('[data-telegram-link]').forEach(link => {
  link.setAttribute('href', TELEGRAM_URL);
});

const header = document.querySelector('.site-header');
window.addEventListener('scroll', () => {
  if (!header) return;
  header.classList.toggle('is-scrolled', window.scrollY > 10);
});

const navToggle = document.querySelector('.nav-toggle');
const navMenu = document.querySelector('.nav__menu');
if (navToggle && navMenu) {
  navToggle.addEventListener('click', () => navMenu.classList.toggle('is-open'));
}

const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) entry.target.classList.add('is-visible');
  });
}, { threshold: 0.12, rootMargin: '0px 0px -30px 0px' });

document.querySelectorAll('.reveal').forEach(el => observer.observe(el));

document.querySelectorAll('.faq-item').forEach(item => {
  const btn = item.querySelector('.faq-question');
  if (!btn) return;
  btn.addEventListener('click', () => item.classList.toggle('is-open'));
});
