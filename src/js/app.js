import "../css/otbis.scss";

const hamburgerButton = document.querySelector(".hamburger");
const headerMobileNavsShadow = document.querySelector(
  ".header__mobile-navs--shadow"
);
const headerMobileNavs = document.querySelector(".header__mobile-navs");
const headerMobileNavsCloseButton = document.querySelector(
  ".header__mobile-navs-close-button"
);

hamburgerButton.addEventListener("click", () => {
  headerMobileNavsShadow.style.display = "block";
  setTimeout(() => (headerMobileNavsShadow.style.opacity = 1), 10);
  headerMobileNavs.style.transform = "translateX(0)";
});
headerMobileNavsCloseButton.addEventListener("click", () => {
  headerMobileNavsShadow.style.opacity = 0;
  headerMobileNavs.style.transform = "translateX(80vw)";
  setTimeout(() => {
    headerMobileNavsShadow.style.display = "none";
  }, 700);
});
