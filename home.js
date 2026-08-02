import { auth } from "./firebase.js";
import { signOut } from "https://www.gstatic.com/firebasejs/10.13.2/firebase-auth.js";

const logoutBtn = document.getElementById("logoutBtn");

logoutBtn.addEventListener("click", async () => {
    await signOut(auth);
    alert("Logged Out Successfully");
    window.location.href = "login.html";
});
