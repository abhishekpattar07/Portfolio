/* =========================================================
   MENU.JS
   Handles opening and closing the mobile navigation menu
========================================================= */

const hamburger = document.getElementById("hamburger");
const navMenu = document.getElementById("nav-menu");

// Toggle menu when hamburger icon is clicked
hamburger.addEventListener("click", () => {
  hamburger.classList.toggle("active");
  navMenu.classList.toggle("active");
});

// Close the mobile menu whenever a nav link is clicked
const navLinks = document.querySelectorAll(".nav-link");

navLinks.forEach((link) => {
  link.addEventListener("click", () => {
    hamburger.classList.remove("active");
    navMenu.classList.remove("active");
  });
});
