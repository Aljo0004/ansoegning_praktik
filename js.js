// menu //
const burger = document.querySelector(".burger");
const nav = document.querySelector("nav");
const menu = document.querySelector(".menu");

burger.addEventListener("click", burgerClick);
function burgerClick() {
  burger.classList.toggle("active");
  nav.classList.toggle("active");
}
menu.addEventListener("click", menuClick);
function menuClick() {
  burger.classList.remove("active");
  nav.classList.remove("active");
}

//kompetencer//
const contents = document.querySelectorAll(".content");

contents.forEach((indhold) => {
  const carousel = indhold.querySelector(".img_carousel");
  indhold.addEventListener("click", () => {
    carousel.classList.toggle("active");
    indhold.classList.toggle("active"); // toggler tekstboksen
  });
});
