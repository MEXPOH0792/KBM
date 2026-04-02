const TELEGRAM_URL = 'https://t.me/+gwV5DNGCevM0YWJi';

document.querySelectorAll('[data-telegram-link]').forEach((el) => {
  el.setAttribute('href', TELEGRAM_URL);
});

const header = document.querySelector('.site-header');
window.addEventListener('scroll', () => {
  if (header) header.classList.toggle('scrolled', window.scrollY > 18);
});

const nav = document.querySelector('.nav');
const navToggle = document.querySelector('.nav-toggle');
if (nav && navToggle) {
  navToggle.addEventListener('click', () => {
    nav.classList.toggle('is-open');
  });
  nav.querySelectorAll('a').forEach((a) => {
    a.addEventListener('click', () => nav.classList.remove('is-open'));
  });
}

const revealEls = document.querySelectorAll('.reveal');
const io = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) entry.target.classList.add('is-visible');
  });
}, { threshold: 0.16 });
revealEls.forEach((el) => io.observe(el));


const faqItems = document.querySelectorAll('.faq-item');
faqItems.forEach((item) => {
  const button = item.querySelector('.faq__button');
  if (!button) return;
  button.addEventListener('click', () => {
    const isOpen = item.classList.contains('is-open');
    faqItems.forEach((other) => other.classList.remove('is-open'));
    if (!isOpen) item.classList.add('is-open');
  });
});
