let slideIndex = 0;
let slides = document.querySelectorAll('.slider-item');

function nextSlide() {
  slideIndex++;
  if (slideIndex > slides.length - 1) {
    slideIndex = 0;
  }
  updateSlides();
}

function prevSlide() {
  slideIndex--;
  if (slideIndex < 0) {
    slideIndex = slides.length - 1;
  }
  updateSlides();
}

function updateSlides() {
  for (let i = 0; i < slides.length; i++) {
    slides[i].classList.remove('active');
  }
  slides[slideIndex].classList.add('active');
}

updateSlides();

//MENU HAMBURGUER

const hamburguer = document.querySelector(".hamburguer");
const menu = document.querySelector(".menu");

hamburguer.addEventListener("click", () => menu.classList.toggle("active"));