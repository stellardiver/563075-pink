var button = document.querySelector(".header__toggle");
var svgOpen = document.querySelector(".header__svg-open");
var svgClose = document.querySelector(".header__svg-close");
var menu = document.querySelector(".header__navigation");
var headerTransparent = document.querySelector(".header__transparent");

menu.classList.add("header__navigation--hide");
headerTransparent.classList.add("header__transparent--active");


button.addEventListener("click", function(evt) {
  evt.preventDefault();
  headerTransparent.classList.toggle("header__transparent--active");
  menu.classList.toggle("header__navigation--show");
  svgOpen.classList.toggle("header__svg-open--hide");
  svgClose.classList.toggle("header__svg-close--show");
});
