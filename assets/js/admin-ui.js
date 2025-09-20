import { verses } from "./verses.js";
import { loginAdmin, setDailyOverride } from "./admin.js";

const loginSection = document.getElementById("login-section");
const adminSection = document.getElementById("admin-section");
const loginBtn = document.getElementById("login-btn");
const emailInput = document.getElementById("admin-email");
const passwordInput = document.getElementById("admin-password");
const loginError = document.getElementById("login-error");
const versesList = document.getElementById("verses-list");

loginBtn.addEventListener("click", async () => {
  try {
    await loginAdmin(emailInput.value, passwordInput.value);
    loginSection.style.display = "none";
    adminSection.style.display = "block";
    renderVerses();
  } catch (err) {
    loginError.textContent = "Login failed: " + err.message;
  }
});

function renderVerses() {
  versesList.innerHTML = "";
  verses.forEach((v, i) => {
    const card = document.createElement("div");
    card.className = "verse-card";
    card.innerHTML = `
      <p><strong>Verse ${i + 1}</strong></p>
      <p>"${v.text}"</p>
      <p><em>${v.reflection}</em></p>
      <button data-index="${i}">Set as Daily Verse</button>
    `;
    card.querySelector("button").addEventListener("click", () => {
      setDailyOverride(i);
      alert(`Set Verse ${i + 1} as today's verse`);
    });
    versesList.appendChild(card);
  });
}