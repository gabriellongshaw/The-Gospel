import { createHeader } from './components/header.js';
import { createFooter } from './components/footer.js';
import { initMenu } from './core/menu.js';
import { initStories } from './core/stories.js';
import { initScrollReveal } from './core/scrollReveal.js';

const logoUrl = new URL('../images/logo/logo.png', import.meta.url).href;

document.addEventListener('DOMContentLoaded', () => {
  if (document.getElementById('header-placeholder')) createHeader(logoUrl);
  if (document.getElementById('footer-placeholder')) createFooter();
  initMenu();
  initStories();
  initScrollReveal();
});
