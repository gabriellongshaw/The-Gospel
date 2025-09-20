const body = document.body;
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
if (yearSpan) yearSpan.textContent = new Date().getFullYear();

document.querySelectorAll('.story-dropdown').forEach(dropdown => {
  const summary = dropdown.querySelector('.story-summary');
  const content = dropdown.querySelector('.story-content');
  
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
      });
    }
  });
});
