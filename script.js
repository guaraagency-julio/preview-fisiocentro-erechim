const toggle = document.querySelector('.menu-toggle');
const mobile = document.querySelector('.mobile-nav');
function closeMenu() { toggle?.setAttribute('aria-expanded', 'false'); toggle?.setAttribute('aria-label', 'Abrir menu'); if(mobile) mobile.hidden = true; }
toggle?.addEventListener('click', () => { const open = toggle.getAttribute('aria-expanded') === 'true'; toggle.setAttribute('aria-expanded', String(!open)); toggle.setAttribute('aria-label', open ? 'Abrir menu' : 'Fechar menu'); mobile.hidden = open; });
mobile?.querySelectorAll('a').forEach(link => link.addEventListener('click', closeMenu));
document.addEventListener('keydown', (e) => { if(e.key === 'Escape') closeMenu(); });
const els = document.querySelectorAll('[data-reveal]');
if('IntersectionObserver' in window && !window.matchMedia('(prefers-reduced-motion: reduce)').matches){
 const observer = new IntersectionObserver(entries => { entries.forEach(entry => {if(entry.isIntersecting){entry.target.classList.add('visible');observer.unobserve(entry.target);}});},{threshold:.1,rootMargin:'0px 0px -30px 0px'});
 els.forEach(el => observer.observe(el));
} else els.forEach(el => el.classList.add('visible'));
const year = document.getElementById('year'); if(year) year.textContent=String(new Date().getFullYear());
