/* =========================================================
   MAIN.JS
   General site behavior that doesn't belong in the other
   more specific JS files (menu.js, scroll.js, animation.js).
========================================================= */

// ===== Contact Form Handling =====
// NOTE: This is a front-end only demo. To actually receive
// messages, connect this form to a backend, or a service
// like Formspree / EmailJS / Google Forms.

const contactForm = document.getElementById("contact-form");

contactForm.addEventListener("submit", (e) => {
  e.preventDefault();

  const name = document.getElementById("name").value;

  alert(`Thanks for reaching out, ${name}! I'll get back to you soon.`);

  contactForm.reset();
});

// ===== Log a friendly console message (optional touch) =====
console.log("Portfolio website loaded. Built by Abhishek Pattar.");
