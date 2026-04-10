import { pages } from '../data/pages.js';

export function createFooter() {
  const placeholder = document.getElementById('footer-placeholder');
  if (!placeholder) return;

  const currentPath = window.location.pathname;

  const exploreLinks = pages.map(page => {
    const isHome = page.href === '/';
    const isActive = isHome
      ? (currentPath === '/' || currentPath === '/index.html')
      : currentPath.startsWith(page.href);
    return `<li><a href="${page.href}"${isActive ? ' class="active"' : ''}>${page.name}</a></li>`;
  }).join('');

  const footer = document.createElement('footer');
  footer.className = 'footer';
  footer.innerHTML = `
    <div class="footer-inner">
      <div class="footer-cols">
        <div class="footer-col-brand">
          <div class="footer-brand-name">The Gospel</div>
          <p class="footer-tagline">Sharing the good news of Jesus Christ and the new covenant of grace.</p>
        </div>
        <div class="footer-links-group">
          <div class="footer-col">
            <h3>Pages</h3>
            <ul>${exploreLinks}</ul>
          </div>
          <div class="footer-col">
            <h3>Connect</h3>
            <ul>
              <li><a href="https://github.com/gabriellongshaw" target="_blank" rel="noopener">GitHub</a></li>
              <li><a href="https://www.instagram.com/gabriellongshaw" target="_blank" rel="noopener">Instagram</a></li>
              <li><a href="https://youtube.com/@gabriellongshaw" target="_blank" rel="noopener">YouTube</a></li>
              <li><a href="https://t.me/gabriellongshaw" target="_blank" rel="noopener">Telegram</a></li>
            </ul>
          </div>
        </div>
      </div>
      <div class="footer-bottom">
        <p>© <span class="footer-year"></span> The Gospel. All rights reserved.</p>
        <p>"I am the way, the truth, and the life. No one comes to the Father except through Me." — John 14:6 NKJV</p>
        <p class="footer-devby">Designed and developed by <a href="https://www.gabriellongshaw.co.uk" target="_blank" rel="noopener">Gabriel Longshaw</a>.</p>
      </div>
    </div>
  `;

  placeholder.replaceWith(footer);
  footer.querySelector('.footer-year').textContent = new Date().getFullYear();
}
