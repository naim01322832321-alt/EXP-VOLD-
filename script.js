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
