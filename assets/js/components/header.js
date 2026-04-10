export function createHeader(links, pathPrefix) {
  const navLinks = links.map(l => `<a href="${l.href}">${l.text}</a>`).join('');
  const mobileLinks = links.map(l => `<a href="${l.href}" class="mobile-menu-link">${l.text}</a>`).join('');

  const html = `
<header class="header">
  <div class="header-inner">
    <a href="${pathPrefix}" class="brand">
      <img src="${pathPrefix}assets/images/logo.png" alt="The Gospel logo" width="28" height="28">
      <span class="brand-name">The Gospel</span>
    </a>
    <nav class="nav" aria-label="Main navigation">${navLinks}</nav>
    <div class="header-controls">
      <button class="burger-btn" aria-label="Open menu" aria-expanded="false">
        <span></span><span></span><span></span>
      </button>
    </div>
  </div>
</header>
<div class="mobile-menu" aria-hidden="true">
  <button class="mobile-close-btn" aria-label="Close menu">
    <svg viewBox="0 0 24 24" fill="none"><line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/></svg>
  </button>
  <div class="mobile-menu-inner">
    ${mobileLinks}
  </div>
  <div class="mobile-menu-divider"></div>
  <p class="mobile-menu-verse">"I am the way, the truth, and the life. No one comes to the Father except through Me." — John 14:6 NKJV</p>
</div>`;

  const placeholder = document.getElementById('header-placeholder');
  if (placeholder) {
    placeholder.insertAdjacentHTML('afterend', html);
    placeholder.remove();
  }
}
