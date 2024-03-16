const hamburgerBtn = document.getElementById("hamburger");
const navMenu = document.querySelector(".menu");
const dropdownBtn = document.querySelectorAll(".dropdown-btn");
const dropdown = document.querySelectorAll(".dropdown");
const links = document.querySelectorAll(".dropdown a");


function toggleHamburger() {
    navMenu.classList.toggle("show");
    hamburgerBtn.setAttribute(
        "aria-expanded",
        hamburgerBtn.getAttribute("aria-expanded") === "false" ? "true" : "false"
    );
}



// toggle hamburger menu
hamburgerBtn.addEventListener("click", toggleHamburger);
