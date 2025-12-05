// Buton pentru meniu responsive
document.addEventListener("DOMContentLoaded", function() {
    const menuBtn = document.getElementById("menuToggle");
    const nav = document.querySelector("nav");

    menuBtn.addEventListener("click", () => {
        nav.classList.toggle("active");
    });
});
