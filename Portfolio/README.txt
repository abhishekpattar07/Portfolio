PORTFOLIO WEBSITE - README
============================

This is a Personal Portfolio Website built using only:
- HTML5
- CSS3
- Vanilla JavaScript (no frameworks or libraries)

------------------------------------------------------------
FOLDER STRUCTURE
------------------------------------------------------------

Portfolio/
│
├── index.html          -> Main HTML file (all sections)
│
├── css/
│   ├── style.css        -> Global styles, colors, buttons
│   ├── navbar.css       -> Navbar styles
│   ├── hero.css         -> Hero (top banner) section styles
│   ├── about.css        -> About Me section styles
│   ├── skills.css       -> Skills pill/tag styles
│   ├── projects.css     -> Project card styles
│   ├── contact.css      -> Contact form + info styles
│   ├── footer.css       -> Footer styles
│   └── responsive.css   -> Mobile/tablet responsive rules
│
├── js/
│   ├── main.js           -> Contact form handling
│   ├── menu.js           -> Mobile hamburger menu
│   ├── scroll.js         -> Active nav link + back-to-top
│   └── animation.js      -> Fade-in-on-scroll animation
│
├── images/               -> Profile photo + project screenshots
│
├── icons/                -> Put any custom icon files here
│
├── files/
│   └── resume.pdf        -> Replace with your real resume
│
└── README.txt            -> This file

------------------------------------------------------------
HOW TO RUN
------------------------------------------------------------
Just double-click index.html to open it in your browser.
No build tools, no npm install, no server required.

------------------------------------------------------------
HOW TO CUSTOMIZE
------------------------------------------------------------

1. NAME / LOGO
   Edit the text "Abhishek Pattar" in index.html
   (appears in the navbar logo, hero section, and footer).

2. PROFILE PHOTO
   Replace images/profile.jpg with your own photo
   (keep it roughly square for the circular frame).

3. ABOUT SECTION
   Edit the two <div class="about-card"> blocks in index.html
   to update your education, objective, and interests.

4. SKILLS
   Add or remove a line like:
     <span class="skill-pill">Your Skill</span>
   inside the .skills-list div in index.html.

5. PROJECTS
   Each project is one <div class="project-card"> block.
   Update the image, title, description, tech stack, and
   the GitHub / Live Demo links (currently set to "#").

6. RESUME
   Replace files/resume.pdf with your actual resume file
   (keep the same file name, or update the link in index.html).

7. CONTACT INFO
   Update email, phone, location, and social links inside
   the .contact-info div in index.html.

8. COLORS
   The green theme color is controlled from ONE place:
   css/style.css -> the ":root" section at the top.
   Change --primary-color to update the theme everywhere.

------------------------------------------------------------
NOTES
------------------------------------------------------------
- The contact form currently just shows a thank-you alert.
  To actually receive messages, connect it to a backend or
  a free service like Formspree, EmailJS, or Google Forms.
- All images in the /images folder are simple green
  placeholders — replace them with your real photos and
  project screenshots before submitting/deploying.
