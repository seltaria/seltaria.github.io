import { scrollColor } from "./scroll-color.js";

const buttonUp = document.querySelector(".button-up");
buttonUp.addEventListener("click", () => {
  window.scrollTo(0, 0);
})
window.addEventListener("scroll", () => {
  if (window.pageYOffset > 300) {
    buttonUp.style.display = "block";
  } else {
    buttonUp.style.display = "none";
  }
})

let slides = 6;

if (innerWidth < 400) {
  slides = 2;
} else if (innerWidth < 500) {
  slides = 4;
} else if (innerWidth < 900) {
  slides = 6;
} else {
  slides = 8;
}


const swiper = new Swiper('.swiper', {
  loop: true,
  slidesPerView: slides,
  spaceBetween: 30,
  autoplay: {
    delay: 1,
    disableOnInteraction: false,
  },
  speed: 5000,
});

scrollColor();
