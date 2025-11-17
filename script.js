// Toggle mobile nav
const navToggle = document.getElementById("nav-toggle");
const navLinks = document.getElementById("nav-links");

if (navToggle && navLinks) {
  navToggle.addEventListener("click", () => {
    navLinks.classList.toggle("open");
  });

  navLinks.querySelectorAll("a").forEach((link) => {
    link.addEventListener("click", () => {
      navLinks.classList.remove("open");
    });
  });
}

// FAQ toggle
const faqItems = document.querySelectorAll(".faq-item");

faqItems.forEach((item) => {
  const btn = item.querySelector(".faq-question");
  btn.addEventListener("click", () => {
    item.classList.toggle("open");
  });
});

// Dynamic year
const yearSpan = document.getElementById("year");
if (yearSpan) {
  yearSpan.textContent = new Date().getFullYear();
}
