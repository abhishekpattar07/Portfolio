/* =========================================================
   ANIMATION.JS
   Handles the fade-in animation for elements as they
   enter the viewport while scrolling, using
   IntersectionObserver (simple, no external library).
========================================================= */

const fadeElements = document.querySelectorAll(".fade-in");

const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("show");
        // Stop observing once it has faded in (animation runs once)
        observer.unobserve(entry.target);
      }
    });
  },
  {
    threshold: 0.15, // element becomes visible when 15% is in view
  }
);

fadeElements.forEach((el) => observer.observe(el));
