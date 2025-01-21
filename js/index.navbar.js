const body = document.querySelector("body");
const header = document.querySelector(".header");
const headerСontainer = document.querySelector(".header__container");
const headerСontainerNav = document.querySelector(".header__container nav");
const btnSub = document.querySelector(".header__menu-btn");
const navLinks = document.querySelector(".header__nav-menu");

btnSub.addEventListener("click", () => {
  body.classList.toggle("overflow-hidden");
  header.classList.toggle("nav-visible");
});

navLinks.addEventListener("click", () => {
  body.classList.remove("overflow-hidden");
  header.classList.remove("nav-visible");
});


const handleResize = () => {
  const mediaQuery1110 = window.matchMedia("min-width: 1110px");
  if (mediaQuery1110.matches) {
    body.append(headerСontainerNav);
  } else {
    const bodyСontainerNav = document.querySelector(".body nav");
    if (bodyСontainerNav) {
      headerСontainer.append(bodyСontainerNav);
    }
  }
};

window.addEventListener("resize", handleResize);

handleResize();
