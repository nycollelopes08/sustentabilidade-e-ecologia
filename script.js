document.addEventListener("DOMContentLoaded", () => {
  // Scroll suave para âncoras internas
  const links = document.querySelectorAll('a[href^="#"]');
  links.forEach(link => {
    link.addEventListener("click", function (e) {
      const destino = document.querySelector(this.getAttribute("href"));
      if (destino) {
        e.preventDefault();
        destino.scrollIntoView({
          behavior: "smooth",
          block: "start"
        });
      }
    });
  });

  // Slider automático de depoimentos
  const slides = document.querySelectorAll(".depoimento-item");
  let currentIndex = 0;

  function hideAllSlides() {
    slides.forEach(slide => (slide.style.display = "none"));
  }

  function showSlide(i) {
    hideAllSlides();
    if (slides[i]) slides[i].style.display = "block";
  }

  function startSlider() {
    showSlide(currentIndex);
    setInterval(() => {
      currentIndex = (currentIndex + 1) % slides.length;
      showSlide(currentIndex);
    }, 5000);
  }

  if (slides.length > 0) {
    startSlider();
  }
});
