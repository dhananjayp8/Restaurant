document.addEventListener("DOMContentLoaded", () => {
  const menuToggle = document.querySelector(".menu-toggle");
  const navLinks = document.querySelector(".nav-links");

  menuToggle.addEventListener("click", () => {
    navLinks.classList.toggle("active");
  });
});
// Faq

document.querySelectorAll(".accordion-head").forEach((button) => {
  button.addEventListener("click", () => {
    const accordionContent = button.nextElementSibling;

    // Close all accordion contents
    document.querySelectorAll(".accordion-content").forEach((content) => {
      content.style.display = "none";
    });

    // Open the clicked accordion content
    accordionContent.style.display = "block";
  });
});
