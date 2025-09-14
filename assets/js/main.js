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

const verses = [
  { text: "The Lord is my shepherd; I shall not want. — Psalm 23:1", reflection: "God cares for us personally and leads us into life." },
  { text: "For God so loved the world, that He gave His only Son. — John 3:16", reflection: "The greatest gift is God’s love shown through Jesus." },
  { text: "I can do all things through Christ who strengthens me. — Philippians 4:13", reflection: "Our strength comes not from ourselves but from Christ." },
  { text: "Be strong and courageous. Do not be afraid; for the Lord your God goes with you. — Deuteronomy 31:6", reflection: "God’s presence gives us courage in every challenge." },
  { text: "Trust in the Lord with all your heart. — Proverbs 3:5", reflection: "Faith means surrendering control and relying on God." },
  { text: "So do not fear, for I am with you; do not be dismayed, for I am your God. — Isaiah 41:10", reflection: "God's presence removes all reason for fear." },
  { text: "But the fruit of the Spirit is love, joy, peace, forbearance, kindness, goodness, faithfulness, gentleness and self-control. — Galatians 5:22-23", reflection: "The Holy Spirit produces a character in us that reflects God." },
  { text: "In the beginning was the Word, and the Word was with God, and the Word was God. — John 1:1", reflection: "Jesus is eternal and is God himself." },
  { text: "Love is patient, love is kind. It does not envy, it does not boast, it is not proud. — 1 Corinthians 13:4", reflection: "True love is defined by actions and character, not feelings." },
  { text: "Give thanks to the Lord, for he is good; his love endures forever. — Psalm 107:1", reflection: "We can always find a reason to be thankful because God is eternally good." },
  { text: "The steadfast love of the Lord never ceases; his mercies never come to an end; they are new every morning. — Lamentations 3:22-23", reflection: "God's compassion is always available to us, fresh and new each day." },
  { text: "For where two or three are gathered in my name, there am I among them. — Matthew 18:20", reflection: "Christ is present with believers when they gather in His name." },
  { text: "Come to me, all you who are weary and burdened, and I will give you rest. — Matthew 11:28", reflection: "Jesus offers rest for our souls from the burdens of life." },
  { text: "Do everything in love. — 1 Corinthians 16:14", reflection: "Love should be the motivation for all our actions." },
  { text: "He has shown you, O mortal, what is good. And what does the Lord require of you? To act justly and to love mercy and to walk humbly with your God. — Micah 6:8", reflection: "God calls us to live a life of justice, compassion, and humility." }
];

function loadDailyVerse() {
  const today = new Date();
  const index = today.getDate() % verses.length;
  const verseEl = document.getElementById("daily-verse");
  const reflectionEl = document.getElementById("daily-reflection");
  
  if (verseEl && reflectionEl) {
    verseEl.textContent = `"${verses[index].text}"`;
    reflectionEl.textContent = verses[index].reflection;
  }
}

document.addEventListener("DOMContentLoaded", loadDailyVerse);

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