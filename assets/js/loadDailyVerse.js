import { verses } from './verses.js';
import { initializeApp } from "https://www.gstatic.com/firebasejs/12.3.0/firebase-app.js";
import { getFirestore, doc, getDoc, setDoc } from "https://www.gstatic.com/firebasejs/12.3.0/firebase-firestore.js";

// Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyB8FbZL7Ll8BqJHMvTab-PFu8Muudh9JuA",
  authDomain: "the-gospel-daily-verses.firebaseapp.com",
  projectId: "the-gospel-daily-verses",
  storageBucket: "the-gospel-daily-verses.firebasestorage.app",
  messagingSenderId: "199411880332",
  appId: "1:199411880332:web:0dd66f0dc9508ef9c0c6a9",
  measurementId: "G-SFEH21DXB5"
};

// Initialize Firebase services
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

// Helper function to format date
function formatDate(date) {
  return date.toISOString().split('T')[0];
}

// Main function to load and display the daily verse
export async function loadDailyVerse() {
  const today = new Date();
  const todayStr = formatDate(today);
  
  const overrideRef = doc(db, "overrides", todayStr);
  const overrideSnap = await getDoc(overrideRef);
  
  let index;
  
  if (overrideSnap.exists() && overrideSnap.data().index !== null) {
    index = overrideSnap.data().index;
  } else {
    // Revert to automatic verse
    index = today.getDate() % verses.length;
  }
  
  const verseEl = document.getElementById("daily-verse");
  const reflectionEl = document.getElementById("daily-reflection");
  
  if (verseEl && reflectionEl) {
    verseEl.textContent = `"${verses[index].text}"`;
    reflectionEl.textContent = verses[index].reflection;
  }
}

// Load the daily verse when the DOM is ready
document.addEventListener("DOMContentLoaded", loadDailyVerse);
