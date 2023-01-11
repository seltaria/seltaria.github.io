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

})