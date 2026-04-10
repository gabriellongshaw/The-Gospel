import { pages } from '../data/pages.js';

export function createHeader(logoUrl) {
  const placeholder = document.getElementById('header-placeholder');
  if (!placeholder) return;

  const currentPath = window.location.pathname;

  const navLinks = pages.map(page => {
    const isHome = page.href === '/';
    const isActive = isHome
      ? (currentPath === '/' || currentPath === '/index.html')
      : currentPath.startsWith(page.href);
    return `<a href="${page.href}"${isActive ? ' class="active"' : ''}>${page.name}</a>`;
  }).join('');

  const mobileLinks = pages.map(page => {
    const isHome = page.href === '/';
    const isActive = isHome
      ? (currentPath === '/' || currentPath === '/index.html')
      : currentPath.startsWith(page.href);
    return `<a href="${page.href}" class="mobile-menu-link${isActive ? ' active' : ''}">${page.name}</a>`;
  }).join('');

  const header = document.createElement('header');
  header.className = 'header';
  header.innerHTML = `
    <div class="header-inner">
      <a href="/" class="brand">
        <img src="${logoUrl}" alt="The Gospel logo" width="28" height="28">
        <span class="brand-name">The Gospel</span>
      </a>
      <nav class="nav" aria-label="Main navigation">${navLinks}</nav>
      <div class="header-controls">
        <button class="burger-btn" aria-label="Open menu" aria-expanded="false">
          <span></span><span></span><span></span>
        </button>
      </div>
    </div>
  `;

  const menu = document.createElement('div');
  menu.className = 'mobile-menu';
  menu.setAttribute('aria-hidden', 'true');
  menu.innerHTML = `
    <div class="mobile-close-btn-wrap">
      <button class="mobile-close-btn" aria-label="Close menu">
        <span></span><span></span><span></span>
      </button>
    </div>
    <div class="mobile-menu-inner">${mobileLinks}</div>
    <div class="mobile-menu-divider"></div>
    <p class="mobile-menu-verse">"I am the way, the truth, and the life. No one comes to the Father except through Me." — John 14:6 NKJV</p>
  `;

  placeholder.replaceWith(header);
  header.insertAdjacentElement('afterend', menu);
}
