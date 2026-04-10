export function createFooter(links, pathPrefix) {
  const exploreLinks = links.map(l => `<li><a href="${l.href}">${l.text}</a></li>`).join('');

  const html = `
<footer class="footer">
  <div class="footer-inner">
    <div class="footer-cols">
      <div class="footer-col-brand">
        <div class="footer-brand-name">The Gospel</div>
        <p class="footer-tagline">Sharing the good news of Jesus Christ and the new covenant of grace.</p>
      </div>
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
    <div class="footer-bottom">
      <p>© <span id="footer-year"></span> The Gospel. All rights reserved.</p>
      <p>"I am the way, the truth, and the life. No one comes to the Father except through Me." — John 14:6 NKJV</p>
      <p>Designed and developed by <a href="https://www.gabriellongshaw.co.uk" target="_blank" rel="noopener">Gabriel Longshaw</a>.</p>
    </div>
  </div>
</footer>`;

  const placeholder = document.getElementById('footer-placeholder');
  if (placeholder) {
    placeholder.insertAdjacentHTML('afterend', html);
    placeholder.remove();
  }

  const yearEl = document.getElementById('footer-year');
  if (yearEl) yearEl.textContent = new Date().getFullYear();
}
