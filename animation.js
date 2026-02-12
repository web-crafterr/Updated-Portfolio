/* ===============================
   HOME PAGE - JavaScript
   Handles animations and interactions
   =============================== */

/* ================= NAV LOAD SEQUENCE ================= */
window.addEventListener("load", () => {

    const nav = document.querySelector("nav");

    // Step 1: Show navbar sliding from top
    nav.classList.add("nav-show");

    // Step 2: After navbar finishes, show elements
    setTimeout(() => {
        nav.classList.add("elements-show");
    }, 800); // matches nav transition time

});

/* ===================================== */
/* 1️⃣ SKILL CARDS SECTION */
/* ===================================== */

const cards = document.querySelectorAll(".skill-card");

const skillObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add("show");
        } 
        // else {
        //     entry.target.classList.remove("show"); // enables scroll-up animation
        // }
    });
}, { threshold: 0.2 });

cards.forEach(card => skillObserver.observe(card));



/* ===================================== */
/* 2️⃣ STATS SECTION */
/* ===================================== */

const statsSection = document.querySelector(".stats-container");
const statItems = document.querySelectorAll(".stats > div");
const numbers = document.querySelectorAll(".stats strong");

let statsAnimated = false;

const statsObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {

        if (entry.isIntersecting) {

            statsSection.classList.add("show");

            statItems.forEach((item, index) => {
                setTimeout(() => {
                    item.classList.add("show");
                }, 200 * index);
            });

            if (!statsAnimated) {
                animateNumbers();
                statsAnimated = true;
            }

        } 
        else {
            // Reset when scrolling up
            statsSection.classList.remove("show");
            statItems.forEach(item => item.classList.remove("show"));

            numbers.forEach(number => {
                const original = number.getAttribute("data-target");
                if (original) {
                    number.textContent = original + "+";
                }
            });

            statsAnimated = false;
        }
    });
}, { threshold: 0.3 });

statsObserver.observe(statsSection);


/* NUMBER COUNT ANIMATION */
function animateNumbers() {
    numbers.forEach(number => {

        const text = number.textContent.trim();
        const target = parseInt(text.replace(/\D/g, ""));

        // Store original number for reset
        number.setAttribute("data-target", target);

        let count = 0;
        const duration = 1500;
        const increment = target / (duration / 16);

        const counter = setInterval(() => {
            count += increment;

            if (count >= target) {
                number.textContent = target + "+";
                clearInterval(counter);
            } else {
                number.textContent = Math.floor(count) + "+";
            }
        }, 16);
    });
}



/* ===================================== */
/* 3️⃣ ABOUT SECTION */
/* ===================================== */

const aboutSection = document.querySelector(".about");
const aboutImg = document.querySelector(".about-img");
const aboutText = document.querySelector(".about-text");

const aboutObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {

        if (entry.isIntersecting) {
            setTimeout(() => {
                aboutImg.classList.add("show");
            }, 200);

            setTimeout(() => {
                aboutText.classList.add("show");
            }, 400);
        } 
        // else {
        //     aboutImg.classList.remove("show");
        //     aboutText.classList.remove("show");
        // }

    });
}, { threshold: 0.3 });

aboutObserver.observe(aboutSection);

const headingObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add("show");
    }
  });
}, { threshold: 0.3 });

const headingSection = document.querySelector(".heading-container");

headingObserver.observe(headingSection);


/* ===================================== */
/* 4️⃣ PROJECT SECTION */
/* ===================================== */

const projectSections = document.querySelectorAll(".project");

const projectObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {

        if (entry.isIntersecting) {
            setTimeout(() => {
                entry.target.classList.add("show");
            }, 200);
        } 
        // else {
        //     entry.target.classList.remove("show");
        // }

    });
}, { threshold: 0.35 });

projectSections.forEach(section => {
    projectObserver.observe(section);
});

/* ===================================== */
/* 5️⃣ WHY SECTION */
/* ===================================== */

const whySection = document.querySelector(".why");

let lastScrollY = window.scrollY;
let hasPlayed = false;

const whyObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {

        const currentScrollY = window.scrollY;

        // Check scroll direction (down only)
        if (
            entry.isIntersecting &&
            currentScrollY > lastScrollY &&
            !hasPlayed
        ) {
            entry.target.classList.add("show");
            hasPlayed = true;
        }

        lastScrollY = currentScrollY;
    });
}, { threshold: 0.35 });

whyObserver.observe(whySection);

/* ================= FOOTER SCROLL ANIMATION ================= */

document.addEventListener("DOMContentLoaded", () => {

  const footerContainer = document.querySelector(".footer-container");

  if (!footerContainer) return; // stop safely if footer not found

  let footerPlayed = false;

  const footerObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting && !footerPlayed) {

        footerContainer.classList.add("show-container");

        setTimeout(() => {
          footerContainer.classList.add("show-content");
        }, 200);

        footerPlayed = true;
      }
    });
  }, { threshold: 0.2 });

  footerObserver.observe(footerContainer);

});

/* ===============================
   About PAGE - JavaScript
   Handles animations and interactions
   =============================== */
console.log("JS FILE CONNECTED");


