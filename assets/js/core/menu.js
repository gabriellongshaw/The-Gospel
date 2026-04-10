export function initMenu() {
  const burger = document.querySelector('.burger-btn');
  const mobileMenu = document.querySelector('.mobile-menu');
  const closeBtn = mobileMenu?.querySelector('.mobile-close-btn');

  if (!burger || !mobileMenu) return;

  function openMenu() {
    mobileMenu.classList.add('active');
    mobileMenu.setAttribute('aria-hidden', 'false');
    burger.setAttribute('aria-expanded', 'true');
    burger.classList.add('open');
    document.documentElement.style.overflow = 'hidden';
  }

  function closeMenu() {
    mobileMenu.classList.remove('active');
    mobileMenu.setAttribute('aria-hidden', 'true');
    burger.setAttribute('aria-expanded', 'false');
    burger.classList.remove('open');
    document.documentElement.style.overflow = '';
  }

  burger.addEventListener('click', openMenu);
  closeBtn?.addEventListener('click', closeMenu);

  document.addEventListener('keydown', e => {
    if (e.key === 'Escape' && mobileMenu.classList.contains('active')) closeMenu();
  });

  mobileMenu.querySelectorAll('.mobile-menu-link').forEach(link => {
    link.addEventListener('click', closeMenu);
  });
}
