document.addEventListener("DOMContentLoaded", () => {
  window.addEventListener("scroll", reveal);

  function reveal() {
    const reveals = document.querySelectorAll(
      ".section, .about-card, .service-card, .timeline-item, .industry-card, .contact-form"
    );

    for (let i = 0; i < reveals.length; i++) {
      const windowHeight = window.innerHeight;
      const elementTop = reveals[i].getBoundingClientRect().top;
      const elementVisible = 150;

      if (elementTop < windowHeight - elementVisible) {
        reveals[i].classList.add("active");
      } else {
        reveals[i].classList.remove("active");
      }
    }
  }
});
