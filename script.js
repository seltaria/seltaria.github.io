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

  gsap.timeline()
  // .from(".skills__item", { duration: .3, opacity: 0, ease: "power3.out", stagger: 0.3 }, "-=0.5")
  // .from(".hero__descr", {duration: 1, opacity: 0, ease: "power3.out"})
  // .from(".skills__item", { duration: 1, opacity: 0, scale: 0.7, stagger: 0.3 }, "-=0.5")
  // .from(".photos__author", {duration: 1, opacity: 0}, "-=0.5")

})