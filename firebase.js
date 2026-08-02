// Firebase SDK
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.13.2/firebase-app.js";
import { getAuth } from "https://www.gstatic.com/firebasejs/10.13.2/firebase-auth.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/10.13.2/firebase-firestore.js";

const firebaseConfig = {
  apiKey: "AIzaSyBw5INYZYFdR6Jwj6mqXFhlefNw8F6pBE4",
  authDomain: "exp-vold.firebaseapp.com",
  projectId: "exp-vold",
  storageBucket: "exp-vold.firebasestorage.app",
  messagingSenderId: "813643929201",
  appId: "1:813643929201:web:90fc7befa34998fe3c6dd0"
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const db = getFirestore(app);
