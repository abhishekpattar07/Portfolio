/* =========================================================
   SCROLL.JS
   Handles:
   - Highlighting the active nav link while scrolling
   - Showing/hiding the Back to Top button
   - Scrolling back to top when clicked
========================================================= */

const sections = document.querySelectorAll("section[id]");
const navLinksList = document.querySelectorAll(".nav-link");
const backToTopBtn = document.getElementById("back-to-top");

// Highlight the nav link for the section currently in view
window.addEventListener("scroll", () => {
  let currentSection = "";

  sections.forEach((section) => {
    const sectionTop = section.offsetTop - 100;
    const sectionHeight = section.offsetHeight;

    if (window.scrollY >= sectionTop && window.scrollY < sectionTop + sectionHeight) {
      currentSection = section.getAttribute("id");
    }
  });

  navLinksList.forEach((link) => {
    link.classList.remove("active-link");
    if (link.getAttribute("href") === `#${currentSection}`) {
      link.classList.add("active-link");
    }
  });

  // Show back-to-top button after scrolling down 400px
  if (window.scrollY > 400) {
    backToTopBtn.style.display = "block";
  } else {
    backToTopBtn.style.display = "none";
  }
});

// Scroll smoothly back to the top of the page
backToTopBtn.addEventListener("click", () => {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
});
