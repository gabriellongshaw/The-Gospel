import { verses } from './verses.js';
import { initializeApp } from "https://www.gstatic.com/firebasejs/12.3.0/firebase-app.js";
import { getFirestore, doc, getDoc, setDoc } from "https://www.gstatic.com/firebasejs/12.3.0/firebase-firestore.js";

const hardcodedExplanations = {
  "John 3:16": "God loves the world so much that He gave His only Son, Jesus. Anyone who trusts in Jesus won't be lost forever but will get to live with God eternally.",
  "Romans 6:23": "The penalty for doing wrong (sin) is spiritual death, but God's free gift is a forever life, which you get through Jesus Christ.",
  "John 14:6": "Jesus is saying He is the only path to God, the complete truth about life, and the source of real, eternal life.",
  "Isaiah 9:6": "This is a prophecy about Jesus, saying He would be born as a human but have divine roles: a brilliant guide, a powerful God, a never-ending father figure, and a ruler who brings peace.",
  "Luke 1:30-33": "An angel told Mary she was special and would have a Son, Jesus, who is the Son of God. He'll be a great king whose rule will last forever.",
  "Matthew 2:10-11": "When the wise men found Jesus, they were overjoyed. They bowed down and gave Him expensive, symbolic gifts (gold, frankincense, and myrrh).",
  "Romans 5:8": "God proved His love: even when we were doing things wrong (sinning) and deserved nothing, Jesus died for us.",
  "1 Peter 1:3": "Praise God! Because He is so kind and merciful, He gave us a new life and a solid hope for the future by raising Jesus from the dead.",
  "Luke 15:20": "The father spotted his son returning from a long way off, felt overwhelming pity, ran to him, and hugged him immediately. This shows God's eager forgiveness.",
  "Luke 10:36-37": "Jesus asks who acted like a true neighbor (the Samaritan, who was kind). He then tells us to go and act the same way—show real kindness and help to anyone in need.",
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

function formatDate(date) {
  return date.toISOString().split('T')[0];
}

function setupSimpleExplanationButtons(dailyVerseExplanation) {
  const buttons = document.querySelectorAll('.simple-explanation-btn');
  
  buttons.forEach(button => {
    const verseRef = button.dataset.verseRef;
    const explanationContainer = document.getElementById(`explanation-${verseRef}`);
    
    if (!explanationContainer) return;
    
    let explanationText = "";
    
    if (verseRef === 'daily') {
      explanationText = dailyVerseExplanation || "Loading simpler explanation...";
    }
    else if (hardcodedExplanations[verseRef]) {
      explanationText = hardcodedExplanations[verseRef];
    } else {
      explanationText = "No simpler explanation found for this verse.";
    }
    
    explanationContainer.innerHTML = `<p>${explanationText}</p>`;
    
    explanationContainer.style.maxHeight = null;
    explanationContainer.classList.remove('open');
    button.classList.remove('is-open');
    
    if (!button.hasAttribute('data-listener-added')) {
      
      const transitionEndHandler = () => {
        if (!explanationContainer.classList.contains('open')) {
          
          explanationContainer.style.maxHeight = null;
        }
        explanationContainer.removeEventListener('transitionend', transitionEndHandler);
      };
      
      button.addEventListener('click', () => {
        const isOpening = !explanationContainer.classList.contains('open');
        
        if (isOpening) {
          explanationContainer.removeEventListener('transitionend', transitionEndHandler);
          
          explanationContainer.style.maxHeight = explanationContainer.scrollHeight + "px";
          explanationContainer.classList.add('open');
          
          button.textContent = 'Hide Explanation';
          button.classList.add('is-open');
        } else {
          
          explanationContainer.style.maxHeight = explanationContainer.scrollHeight + "px";
          explanationContainer.classList.remove('open');
          
          requestAnimationFrame(() => {
            explanationContainer.style.maxHeight = '0';
          });
          
          explanationContainer.addEventListener('transitionend', transitionEndHandler);
          
          button.textContent = 'Show Simpler Explanation';
          button.classList.remove('is-open');
        }
      });
      button.setAttribute('data-listener-added', 'true');
    }
    
    if (verseRef === 'daily' && dailyVerseExplanation) {
      button.style.display = 'inline-block';
    }
  });
}

export async function loadDailyVerse() {
  const today = new Date();
  const todayStr = formatDate(today);
  
  const overrideRef = doc(db, "overrides", todayStr);
  const overrideSnap = await getDoc(overrideRef);
  
  let index;
  
  if (overrideSnap.exists() && overrideSnap.data().index !== null) {
    index = overrideSnap.data().index;
  } else {
    index = today.getDate() % verses.length;
  }
  
  const verseData = verses[index];
  
  const verseEl = document.getElementById("daily-verse");
  const reflectionEl = document.getElementById("daily-reflection");
  
  if (verseEl && reflectionEl) {
    verseEl.textContent = `"${verseData.text}"`;
    
    reflectionEl.textContent = verseData.reflection;
    
    setupSimpleExplanationButtons(verseData.simple_explanation);
  }
}

document.addEventListener("DOMContentLoaded", () => {
  loadDailyVerse();
  setupSimpleExplanationButtons(null);
});