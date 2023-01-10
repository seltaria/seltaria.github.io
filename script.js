document.addEventListener("DOMContentLoaded", () => {

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

  /* GSAP */

  // document.querySelector('.description__container').addEventListener('mouseover', () => {
  //   gsap.to('#img-fox', { opacity: 0, x: 300, duration: 2 });
  //   gsap.to('#img-raccoon', { opacity: 0, x: -300, duration: 2 });
  // })
  // document.querySelector('.skills__item-pug').addEventListener('mouseover', () => {
  //   gsap.to('#img-pug', { opacity: 0, scale: 1.5, duration: 1 });
  // })

})