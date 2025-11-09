const body = document.body;

const pathPrefix = window.location.pathname.split('/').length > 2 ? '../' : './';

const links = [
  { href: `${pathPrefix}`, text: 'Home' },
  { href: `${pathPrefix}resources/`, text: 'Resources' },
  { href: `${pathPrefix}charlie-kirk/`, text: 'Charlie Kirk' },
  { href: `${pathPrefix}billy-graham/`, text: 'Billy Graham' },
  { href: `${pathPrefix}cliffe-and-stuart-knechtle/`, text: 'Cliffe & Stuart Knechtle' },
  { href: `${pathPrefix}more/`, text: 'More' }
];

const headerHTML = `
<header class="header">
  <div class="container header-inner">
    <a href="#" class="brand">
      <img src="${pathPrefix}assets/images/logo.png" alt="Logo">
      <h1>The Gospel</h1>
    </a>
    <nav class="nav" aria-label="Main navigation">
      ${links.map(link => `<a href="${link.href}">${link.text}</a>`).join('')}
    </nav>
    <div class="controls">
      <button class="theme-toggle desktop-theme-toggle" aria-label="Toggle theme">
        <svg class="icon sun" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
          <circle cx="12" cy="12" r="5" fill="var(--icon)" stroke="var(--icon)" stroke-width="2"/>
          <g stroke-linecap="round" stroke-linejoin="round" stroke="var(--icon)">
            <line x1="12" y1="1" x2="12" y2="3"/>
            <line x1="12" y1="21" x2="12" y2="23"/>
            <line x1="1" y1="12" x2="3" y2="12"/>
            <line x1="21" y1="12" x2="23" y2="12"/>
            <line x1="4.22" y1="4.22" x2="5.64" y2="5.64"/>
            <line x1="18.36" y1="18.36" x2="19.78" y2="19.78"/>
            <line x1="4.22" y1="19.78" x2="5.64" y2="18.36"/>
            <line x1="18.36" y1="5.64" x2="19.78" y2="4.22"/>
          </g>
        </svg>
        <svg class="icon moon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
          <path fill="var(--icon)" d="M21 12.8A9 9 0 1111.2 3a7 7 0 109.8 9.8z"/>
        </svg>
      </button>
      <button class="burger" aria-label="Open menu" aria-expanded="false">
        <span></span>
        <span></span>
        <span></span>
      </button>
    </div>
  </div>
  <div class="mobile-menu" aria-hidden="true">
    <button class="close-btn" aria-label="Close menu">&times;</button>
    <ul>
      ${links.map(link => `<li><a href="${link.href}">${link.text}</a></li>`).join('')}
    </ul>
    <button class="theme-toggle mobile-theme-toggle" aria-label="Toggle theme">
      <svg class="icon sun" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
        <circle cx="12" cy="12" r="5" fill="var(--icon)" stroke="var(--icon)" stroke-width="2"/>
        <g stroke-linecap="round" stroke-linejoin="round" stroke="var(--icon)">
          <line x1="12" y1="1" x2="12" y2="3"/>
          <line x1="12" y1="21" x2="12" y2="23"/>
          <line x1="1" y1="12" x2="3" y2="12"/>
          <line x1="21" y1="12" x2="23" y2="12"/>
          <line x1="4.22" y1="4.22" x2="5.64" y2="5.64"/>
          <line x1="18.36" y1="18.36" x2="19.78" y2="19.78"/>
          <line x1="4.22" y1="19.78" x2="5.64" y2="18.36"/>
          <line x1="18.36" y1="5.64" x2="19.78" y2="4.22"/>
        </g>
      </svg>
      <svg class="icon moon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
        <path fill="var(--icon)" d="M21 12.8A9 9 0 1111.2 3a7 7 0 109.8 9.8z"/>
      </svg>
    </button>
  </div>
</header>
`;

const footerHTML = `
<footer class="footer">
  <div class="footer-top">
    <h2 class="footer-title">The Gospel</h2>
    <p class="footer-description">
      The Gospel is a website dedicated to spreading the message of Jesus Christ through teaching, resources, 
      and inspiration from trusted Christian voices. Our goal is to help others discover truth, hope, 
      and salvation through the Word of God.
    </p>
  </div>

  <div class="footer-container">
    <div class="footer-section">
      <h3>Explore</h3>
      <ul>
        <li><a href="${pathPrefix}">Home</a></li>
        <li><a href="${pathPrefix}resources/">Resources</a></li>
        <li><a href="${pathPrefix}charlie-kirk/">Charlie Kirk</a></li>
        <li><a href="${pathPrefix}billy-graham/">Billy Graham</a></li>
        <li><a href="${pathPrefix}cliffe-and-stuart-knechtle/">Cliffe & Stuart Knechtle</a></li>
        <li><a href="${pathPrefix}more/">More</a></li>
      </ul>
    </div>

    <div class="footer-section">
      <h3>About</h3>
      <ul>
        <li><a href="${pathPrefix}coming-soon/">Our Mission</a></li>
        <li><a href="${pathPrefix}coming-soon/">What We Believe</a></li>
        <li><a href="${pathPrefix}coming-soon/">Team</a></li>
      </ul>
    </div>

    <div class="footer-section">
      <h3>Connect</h3>
      <p class="no-contact">No contact currently available.</p>
      <ul>
        <li><a href="https://www.instagram.com/gabriellongshaw">Instagram</a></li>
        <li><a href="https://youtube.com/@gabriellongshaw?si=DWkxGW_qTVH1oa1H">YouTube</a></li>
      </ul>
    </div>
  </div>

  <div class="footer-bottom">
    <p>
      © <span id="year"></span> The Gospel. All rights reserved.
      Website created and maintained by 
      <a class="name" href="https://www.gabriellongshaw.co.uk/" target="_blank" rel="noopener">Gabriel Longshaw</a>.
    </p>
    <p class="meta">
Jesus said to him, “I am the way, the truth, and the life. No one comes to the Father except through Me.” ‭‭John‬‭ 14‬:‭6 NKJV‬‬
</p>
  </div>
</footer>
`;

const headerPlaceholder = document.getElementById('header-placeholder');
const footerPlaceholder = document.getElementById('footer-placeholder');

const currentPath = window.location.pathname;
const isAdminPage = currentPath.includes('/admin/'); 

if (!isAdminPage) {
  
    if (headerPlaceholder) {
        headerPlaceholder.innerHTML = headerHTML;
    }
    
    if (footerPlaceholder) {
        footerPlaceholder.innerHTML = footerHTML;
    } else {
        const errorElement = document.createElement('div');
        errorElement.style.background = 'var(--footer-bg)';
        errorElement.style.color = 'var(--text)';
        errorElement.style.padding = '20px';
        errorElement.style.textAlign = 'center';
        errorElement.innerHTML = `
            <p><strong>Error 404: Footer could not be loaded.</strong></p>
            <p>The placeholder element with ID "footer-placeholder" was not found in the HTML.</p>
            <p><strong>Code:</strong> ELEMENT_NOT_FOUND</p>
        `;
        document.body.appendChild(errorElement); 
    }
}

const toggles = document.querySelectorAll('.theme-toggle');

function applySystemTheme(e) {
  if (e.matches) {
    body.classList.add('dark');
  } else {
    body.classList.remove('dark');
  }
}

const prefersDark = window.matchMedia('(prefers-color-scheme: dark)');

applySystemTheme(prefersDark);

prefersDark.addEventListener('change', applySystemTheme);

function toggleTheme() {
  body.classList.toggle('dark');
}

toggles.forEach(toggle => {
  toggle.addEventListener('click', toggleTheme);
});

const burger = document.querySelector('.burger');
const mobileMenu = document.querySelector('.mobile-menu');
const closeBtn = mobileMenu?.querySelector('.close-btn');

if (burger && mobileMenu && closeBtn) {
  burger.addEventListener('click', () => {
    mobileMenu.classList.add('active');
    burger.setAttribute('aria-expanded', 'true');
  });
  
  closeBtn.addEventListener('click', () => {
    mobileMenu.classList.remove('active');
    burger.setAttribute('aria-expanded', 'false');
  });
}

const yearSpan = document.getElementById('year');

if (yearSpan) {
  yearSpan.textContent = new Date().getFullYear();
}

document.querySelectorAll('.story-dropdown').forEach(dropdown => {
  const summary = dropdown.querySelector('.story-summary');
  const content = dropdown.querySelector('.story-content');
  
  if (summary && content) {
    summary.addEventListener('click', e => {
      e.preventDefault();
      
      const isOpen = dropdown.hasAttribute('open');
      
      if (!isOpen) {
        
        dropdown.setAttribute('open', '');
        content.style.height = '0px';
        content.style.paddingBottom = '0px';
        
        requestAnimationFrame(() => {
          content.style.height = content.scrollHeight + 'px';
          content.style.paddingBottom = '20px';
        });
        
        content.addEventListener('transitionend', function handler() {
          content.style.height = 'auto';
          content.removeEventListener('transitionend', handler);
        });
        
      } else {
        
        content.style.height = content.scrollHeight + 'px';
        content.style.paddingBottom = '20px';
        
        requestAnimationFrame(() => {
          content.style.height = '0px';
          content.style.paddingBottom = '0px';
        });
        
        content.addEventListener('transitionend', function handler() {
          dropdown.removeAttribute('open');
          content.removeEventListener('transitionend', handler);
        }, { once: true });
      }
    });
  }
});