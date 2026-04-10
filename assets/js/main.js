import { createHeader } from './components/header.js';
import { createFooter } from './components/footer.js';
import { initMenu } from './core/menu.js';
import { initStories } from './core/stories.js';
import { initScrollReveal } from './core/scrollReveal.js';

const pathPrefix = window.location.pathname.split('/').length > 2 ? '../' : './';

const navLinks = [
  { href: `${pathPrefix}`, text: 'Home' },
  { href: `${pathPrefix}resources/`, text: 'Resources' },
  { href: `${pathPrefix}more/`, text: 'More' },
];

document.addEventListener('DOMContentLoaded', () => {
  if (document.getElementById('header-placeholder')) createHeader(navLinks, pathPrefix);
  if (document.getElementById('footer-placeholder')) createFooter(navLinks, pathPrefix);
  initMenu();
  initStories();
  initScrollReveal();
});
