import { initializeApp } from "https://www.gstatic.com/firebasejs/9.22.1/firebase-app.js";
import { getFirestore, doc, setDoc, getDoc } from "https://www.gstatic.com/firebasejs/9.22.1/firebase-firestore.js";
import { getAuth, signInWithEmailAndPassword, signOut } from "https://www.gstatic.com/firebasejs/9.22.1/firebase-auth.js";
import { verses } from "./verses.js";

// ===== FIREBASE CONFIG =====
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
const auth = getAuth(app);

// ===== DOM ELEMENTS =====
const loginSection = document.getElementById('login-section');
const adminSection = document.getElementById('admin-section');
const loginForm = document.getElementById('login-form');
const logoutBtn = document.getElementById('logout-btn');
const homeBtn = document.getElementById('home-btn');
const homeBtnAdmin = document.getElementById('home-btn-admin');
const autoBtn = document.getElementById('auto-btn');
const loginError = document.getElementById('login-error');
const emailInput = document.getElementById('email');
const passwordInput = document.getElementById('password');
const versesList = document.getElementById('verses-list');
const currentVerseText = document.getElementById('current-verse-text');
const currentVerseReflection = document.getElementById('current-verse-reflection');

// ===== HELPER =====
function formatDate(date) { return date.toISOString().split('T')[0]; }

// ===== SHOW LOGIN SCREEN =====
function showLogin() {
  loginSection.style.display = 'flex';
  adminSection.style.display = 'none';
  document.body.classList.add('login-mode');
  document.body.classList.remove('admin-mode');
  emailInput.value = '';
  passwordInput.value = '';
  loginError.textContent = '';
}

// ===== SHOW ADMIN SCREEN =====
function showAdmin() {
  loginSection.style.display = 'none';
  adminSection.style.display = 'flex';
  document.body.classList.add('admin-mode');
  document.body.classList.remove('login-mode');
  loadTodayVerse();
  renderVerses();
}

// ===== LOGIN FORM SUBMISSION =====
loginForm.addEventListener('submit', async (e) => {
  e.preventDefault();
  loginError.textContent = '';
  try {
    await signInWithEmailAndPassword(auth, emailInput.value, passwordInput.value);
    showAdmin();
  } catch (err) {
    loginError.textContent = "Invalid login!";
  }
});

// ===== LOGOUT =====
logoutBtn.addEventListener('click', async () => {
  await signOut(auth);
  showLogin();
});

// ===== HOME BUTTONS =====
homeBtn.addEventListener('click', () => window.location.href = "/");
homeBtnAdmin.addEventListener('click', () => window.location.href = "/");

// ===== AUTOMATIC VERSE BUTTON =====
autoBtn.addEventListener('click', async () => {
  const today = formatDate(new Date());
  await setDoc(doc(db, "overrides", today), { index: null });
  loadTodayVerse();
});

// ===== RENDER VERSES =====
function renderVerses() {
  versesList.innerHTML = '';
  verses.forEach((v, i) => {
    const card = document.createElement('div');
    card.className = 'verse-card';
    card.innerHTML = `
      <p class="verse-text">${v.text}</p>
      <p class="verse-reflection">${v.reflection}</p>
      <button class="button button-primary">Select for Today</button>
    `;
    card.querySelector('button').addEventListener('click', () => setDailyOverride(i));
    versesList.appendChild(card);
  });
}

// ===== SET DAILY OVERRIDE =====
async function setDailyOverride(index) {
  const today = formatDate(new Date());
  await setDoc(doc(db, "overrides", today), { index });
  loadTodayVerse();
}

// ===== LOAD TODAY'S VERSE =====
async function loadTodayVerse() {
  const today = formatDate(new Date());
  const overrideSnap = await getDoc(doc(db, "overrides", today));
  let verseIndex = overrideSnap.exists() ? overrideSnap.data().index : null;
  if (verseIndex === null) verseIndex = new Date().getDate() % verses.length; // automatic
  const verse = verses[verseIndex];
  currentVerseText.textContent = verse.text;
  currentVerseReflection.textContent = verse.reflection;
}

// ===== INITIALIZE SCREEN =====
auth.onAuthStateChanged(user => {
  if (user) {
    showAdmin();
  } else {
    showLogin();
  }
});