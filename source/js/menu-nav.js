var button = document.querySelector(".header__toggle");
var svgOpen = document.querySelector(".header__svg-open");
var svgClose = document.querySelector(".header__svg-close");
var menu = document.querySelector(".header__navigation");
var header = document.querySelector(".header");

menu.classList.add("header__navigation--hide");
header.classList.add("header--active");
button. classList.add("header__toggle--show");

button.addEventListener("click", function(evt) {
  evt.preventDefault();
  header.classList.toggle("header--active");
  menu.classList.toggle("header__navigation--show");
  svgOpen.classList.toggle("header__svg-open--hide");
  svgClose.classList.toggle("header__svg-close--show");
});
