import { verses } from './data/verses.js';
import { initializeApp } from "https://www.gstatic.com/firebasejs/12.3.0/firebase-app.js";
import { getFirestore, doc, getDoc } from "https://www.gstatic.com/firebasejs/12.3.0/firebase-firestore.js";

const hardcodedExplanations = {
  "Psalm 23:1 (NKJV)": "God takes care of me completely, like a shepherd cares for his sheep — so I have everything I truly need.",
  "John 3:16 (NKJV)": "God loves us so much that He gave His own Son. Anyone who trusts in Jesus won't face eternal separation from God, but will live with Him forever.",
  "Philippians 4:13 (NKJV)": "I can handle any situation because Christ gives me His strength — it's not about my own ability.",
  "Deuteronomy 31:6 (NKJV)": "Be brave — God is always with you and will never walk away from you.",
  "Proverbs 3:5-6 (NKJV)": "Trust God completely rather than relying on your own logic. Put Him first in everything, and He will guide your path.",
  "Isaiah 41:10 (NKJV)": "Don't be afraid — God is with you. He will make you strong and hold you up.",
  "Galatians 5:22-23 (NKJV)": "When God's Spirit lives in us, He produces real fruit in our lives: love, joy, peace, patience, kindness, goodness, faithfulness, gentleness, and self-control.",
  "Romans 8:28 (NKJV)": "For those who love God, He works every situation — even hard ones — for their good.",
  "John 10:10 (NKJV)": "Jesus came so we could have a full, rich, abundant life — not just to rescue us from punishment.",
  "2 Corinthians 5:17 (NKJV)": "When someone puts their faith in Christ, they become a completely new person. Their old self is gone — they are brand new.",
  "Romans 5:1 (NKJV)": "Because we have been made right with God through faith in Jesus, we now have peace with God. That conflict is over.",
  "Hebrews 8:12 (NKJV)": "Under the new covenant, God promises to completely forgive our sins and remember them no more.",
  "Ephesians 2:8-9 (NKJV)": "Salvation is a free gift from God — not something we earn by being good. We receive it by trusting in Jesus.",
  "Romans 6:14 (NKJV)": "Sin is no longer your master. You are not under law but under grace — freely loved and accepted.",
};

const firebaseConfig = {
  apiKey: "AIzaSyB8FbZL7Ll8BqJHMvTab-PFu8Muudh9JuA",
  authDomain: "the-gospel-daily-verses.firebaseapp.com",
  projectId: "the-gospel-daily-verses",
  storageBucket: "the-gospel-daily-verses.firebasestorage.app",
  messagingSenderId: "199411880332",
  appId: "1:199411880332:web:0dd66f0dc9508ef9c0c6a9",
  measurementId: "G-SFEH21DXB5"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

function animateBtnText(button, newText) {
  const span = button.querySelector('.simple-expl-btn-text');
  if (!span) return;

  button.classList.add('animating');

  setTimeout(() => {
    span.textContent = newText;
    button.classList.remove('animating');
  }, 200);
}

function setupSimpleExplBtn(button, explanationText) {
  const containerId = `explanation-${button.dataset.verseRef}`;
  const container = document.getElementById(containerId);
  if (!container) return;

  const inner = container.querySelector('.simple-expl-container-inner');
  if (inner) inner.textContent = explanationText;

  if (button.hasAttribute('data-listener-added')) return;
  button.setAttribute('data-listener-added', 'true');

  button.addEventListener('click', () => {
    const isOpen = container.classList.contains('open');
    container.classList.toggle('open', !isOpen);

    const nextText = isOpen ? 'Show Simpler Explanation' : 'Hide Explanation';

    if (!isOpen) {
      button.classList.add('shrinking');
      setTimeout(() => {
        animateBtnText(button, nextText);
        button.classList.remove('shrinking');
        button.classList.add('expanding');
        setTimeout(() => button.classList.remove('expanding'), 350);
      }, 180);
    } else {
      button.classList.add('shrinking');
      setTimeout(() => {
        animateBtnText(button, nextText);
        button.classList.remove('shrinking');
        button.classList.add('expanding');
        setTimeout(() => button.classList.remove('expanding'), 350);
      }, 180);
    }
  });
}

async function loadDailyVerse() {
  const today = new Date();
  const todayStr = today.toISOString().split('T')[0];

  let index;
  try {
    const overrideRef = doc(db, "overrides", todayStr);
    const overrideSnap = await getDoc(overrideRef);
    if (overrideSnap.exists() && overrideSnap.data().index !== null) {
      index = overrideSnap.data().index;
    } else {
      index = today.getDate() % verses.length;
    }
  } catch {
    index = today.getDate() % verses.length;
  }

  const verseData = verses[index];
  const verseEl = document.getElementById('daily-verse');
  const reflectionEl = document.getElementById('daily-reflection');
  const btn = document.getElementById('daily-explainer-btn');

  if (verseEl && reflectionEl) {
    verseEl.textContent = `"${verseData.text}" — ${verseData.reference}`;
    reflectionEl.textContent = verseData.reflection;
    requestAnimationFrame(() => {
      verseEl.classList.add('show');
      reflectionEl.classList.add('show');
    });
  }

  if (btn && verseData.simple_explanation) {
    btn.style.display = 'inline-flex';
    const explanation = verseData.simple_explanation || hardcodedExplanations[verseData.reference] || '';
    setupSimpleExplBtn(btn, explanation);
  }
}

document.addEventListener('DOMContentLoaded', loadDailyVerse);