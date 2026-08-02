// EXP VOLD Gaming Website

console.log("EXP VOLD Loaded Successfully");

// Welcome Message
window.onload = function () {
    alert("🎮 Welcome to EXP VOLD Gaming Website!");
};

// Login Button
const loginBtn = document.querySelector(".login");

if (loginBtn) {
    loginBtn.addEventListener("click", function () {
        alert("Login Page Coming Soon...");
    });
}

// Sign Up Button
const signupBtn = document.querySelector(".signup");

if (signupBtn) {
    signupBtn.addEventListener("click", function () {
        alert("Sign Up Page Coming Soon...");
    });
}

// Menu Cards
const cards = document.querySelectorAll(".card");

cards.forEach((card) => {
    card.addEventListener("click", function () {
        alert("🚀 This feature will be available soon!");
    });
});

// WhatsApp Group
const groupBtn = document.querySelector(".group");

if (groupBtn) {
    groupBtn.addEventListener("click", function () {
        console.log("Opening WhatsApp Group...");
    });
}
import { auth } from "./firebase.js";
import { createUserWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/10.13.2/firebase-auth.js";

const signupBtn = document.getElementById("signupBtn");

if (signupBtn) {
  signupBtn.addEventListener("click", async () => {
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;

    try {
      await createUserWithEmailAndPassword(auth, email, password);
      alert("✅ Account Created Successfully!");
      window.location.href = "login.html";
    } catch (error) {
      alert(error.message);
    }
  });
}
import { auth } from "./firebase.js";
import {
  GoogleAuthProvider,
  signInWithPopup
} from "https://www.gstatic.com/firebasejs/10.13.2/firebase-auth.js";

const provider = new GoogleAuthProvider();

document.getElementById("googleLogin").addEventListener("click", async () => {
  try {
    await signInWithPopup(auth, provider);
    window.location.href = "home.html";
  } catch (error) {
    alert(error.message);
  }
});
