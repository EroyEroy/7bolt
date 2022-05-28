let header = document.querySelector(".header"),
  main = document.querySelector(".main"),
  footerInner = document.querySelector(".footer__inner"),
  bottomMenu = document.querySelector(".bottom-menu");
document.addEventListener("scroll", () => {
  if (window.scrollY >= 43) {
    header.style.position = "fixed";
    main.style.paddingTop = header.offsetHeight + "px";
    footerInner.style.paddingBottom = bottomMenu.offsetHeight + "px";
  } else if (window.scrollY < 43) {
    header.style.position = "static";
    main.style.padding = "0";
  }
});