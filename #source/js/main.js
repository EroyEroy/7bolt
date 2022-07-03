// первый слайдер
const images = document.querySelectorAll(".slider .slider-line img");
const sliderLine = document.querySelector(".slider .slider-line");
let dots = document.querySelectorAll(".dots-item"),
  dotsArea = document.querySelector(".dots-block");
let count = 0;
let width;

function init() {
  width = document.querySelector(".slider").offsetWidth;
  sliderLine.style.width = width * images.length + "px";
  images.forEach((item) => {
    item.style.width = width + "px";
    item.style.height = "auto";
  });
  rollSlider();
}
var timer = 0;
makeTimer();
function makeTimer() {
  clearInterval(timer);
  timer = setInterval(function () {
    scrollSlide(1);
    rollSlider(count);
  }, 5000);
}

init();
window.addEventListener("resize", init);

document
  .querySelector(".slider-next")
  .addEventListener("click", () => scrollSlide(1));

document
  .querySelector(".slider-prev")
  .addEventListener("click", () => scrollSlide(-1));

dots.forEach((dot, index) =>
  dot.addEventListener("click", () => setSlide(index))
);

function scrollSlide(direction) {
  count = (count + direction + images.length) % images.length;
  moveSlide();
}

function setSlide(index) {
  count = index;
  moveSlide();
}

function moveSlide() {
  document.querySelector(".dots-item.active").classList.remove("active");
  document.querySelectorAll(".dots-item")[count].classList.add("active");

  rollSlider();
  makeTimer();
}

function rollSlider() {
  sliderLine.style.transform = "translate(-" + count * width + "px)";
}

//   свайп слайдера
const isMobile = window.matchMedia("only screen and (max-width: 479px)");

if (isMobile.matches) {
  let startX = 0,
    moveX = 0;
  sliderLine.addEventListener("touchstart", touchStart);
  sliderLine.addEventListener("touchmove", touchMove);
  sliderLine.addEventListener("touchend", touchEnd);
  function touchStart(e) {
    startX = e.changedTouches[0].screenX;
  }

  function touchMove(e) {
    moveX = e.changedTouches[0].screenX;
  }
  function touchEnd() {
    if (startX + 100 < moveX) {
      // console.log('right');
      scrollSlide(-1);
    } else if (startX - 100 > moveX) {
      // console.log('left');
      scrollSlide(1);
    }
  }
}
// ********************
// ********************
// ********************
// ********************
// ********************
// второй слайдер
const images2 = document.querySelectorAll(".slider2 .slider-line2 img");
const sliderLine2 = document.querySelector(".slider2 .slider-line2");
let dots2 = document.querySelectorAll(".dots-item2"),
  dotsArea2 = document.querySelector(".dots-block2");
let count2 = 0;
let width2;

function init2() {
  width2 = document.querySelector(".slider2").offsetWidth;
  sliderLine2.style.width = width2 * images2.length + "px";
  images2.forEach((item) => {
    item.style.width = width2 + "px";
    item.style.height = "auto";
  });
  rollSlider2();
}
var timer2 = 0;
makeTimer2();
function makeTimer2() {
  clearInterval(timer2);
  timer2 = setInterval(function () {
    scrollSlide2(1);
    rollSlider2(count2);
  }, 5000);
}

init2();
window.addEventListener("resize", init2);

document
  .querySelector(".slider-next2")
  .addEventListener("click", () => scrollSlide2(1));

document
  .querySelector(".slider-prev2")
  .addEventListener("click", () => scrollSlide2(-1));

dots2.forEach((dot2, index2) =>
  dot2.addEventListener("click", () => setSlide2(index2))
);

function scrollSlide2(direction) {
  count2 = (count2 + direction + images2.length) % images2.length;
  moveSlide2();
}

function setSlide2(index2) {
  count2 = index2;
  moveSlide2();
}

function moveSlide2() {
  document.querySelector(".dots-item2.active").classList.remove("active");
  document.querySelectorAll(".dots-item2")[count2].classList.add("active");

  rollSlider2();
  makeTimer2();
}

function rollSlider2() {
  sliderLine2.style.transform = "translate(-" + count2 * width2 + "px)";
}
const isMobile2 = window.matchMedia("only screen and (max-width: 479px)");

if (isMobile2.matches) {
  let startX = 0,
    moveX = 0;
  sliderLine2.addEventListener("touchstart", touchStart);
  sliderLine2.addEventListener("touchmove", touchMove);
  sliderLine2.addEventListener("touchend", touchEnd);
  function touchStart(e) {
    startX = e.changedTouches[0].screenX;
  }

  function touchMove(e) {
    moveX = e.changedTouches[0].screenX;
  }
  function touchEnd() {
    if (startX + 100 < moveX) {
      // console.log('right');
      scrollSlide2(-1);
    } else if (startX - 100 > moveX) {
      // console.log('left');
      scrollSlide2(1);
    }
  }
}
// ********************
// ********************
// ********************
// ********************
// ********************
// для карточек на главной странице
const isNoMobile = window.matchMedia("only screen and (min-width: 480px)");
if (isNoMobile.matches) {
  newCardsShow();
  saleCardsShow();
}
window.addEventListener(
  "resize",
  () => {
    if (window.innerWidth > 480) {
      newCardsShow();
      saleCardsShow();
    }
  },
  true
);
// для первой секции
function newCardsShow() {
  const showMore = document.querySelector(".show");
  const productsLength = document.querySelectorAll(
    ".new-products__card"
  ).length;
  let items = 10;
  // скрытие всех карточек, кроме 10
  const hideClass = document.querySelectorAll(".new-products__card");
  for (i = items; i < hideClass.length; i++) {
    hideClass[i].classList.add("hide");
  }
  // событие клика на кнопку показать еще
  showMore.addEventListener("click", () => {
    items += 20;
    const array = Array.from(
      document.querySelector(".new-products__cards").children
    );
    const visItems = array.slice(0, items);

    // карточки открываются
    visItems.forEach((el) => {
      el.classList.add("show");
      // проверка, если карточек больше 20
      if (el.length !== 20) {
        showMore.innerHTML = "Показать еще";
      }
    });
    // проверка, если все карточки открыты, то появляется кнопка-ссылка
    if (visItems.length === productsLength) {
      showMore.style.display = "none";
      const fullCategoriesBtns = (document.querySelector(
        ".button-show-link"
      ).style.display = "block");
    }
  });
}
// для второй секции
function saleCardsShow() {
  const showMore2 = document.querySelector(".show2");
  const productsLength2 = document.querySelectorAll(".sale__card").length;
  let items2 = 10;
  // скрытие всех карточек, кроме 10
  const hideClass2 = document.querySelectorAll(".sale__card");
  for (i = items2; i < hideClass2.length; i++) {
    hideClass2[i].classList.add("hide");
  }
  // событие клика на кнопку показать еще
  showMore2.addEventListener("click", () => {
    items2 += 20;
    const array2 = Array.from(document.querySelector(".sale__cards").children);
    const visItems2 = array2.slice(0, items2);

    // карточки открываются
    visItems2.forEach((el) => {
      el.classList.add("show");
      // проверка, если карточек больше 20
      if (el.length !== 20) {
        showMore2.innerHTML = "Показать еще";
      }
    });
    // проверка, если все карточки открыты, то появляется кнопка-ссылка
    if (visItems2.length === productsLength2) {
      showMore2.style.display = "none";
      const fullCategoriesBtns2 = (document.querySelector(
        ".button-show-link-2"
      ).style.display = "block");
    }
  });
}
// ********************
// ********************
// ********************
// ********************
// ********************
// кнопки смены регионов
const langContainers = document.querySelectorAll(".region");
langContainers.forEach((item) => {
  const langBtns = item.querySelectorAll(".region__button");
  langBtns.forEach((btn) => {
    btn.addEventListener("click", () => {
      item.classList.toggle("region_active");
    });
  });
  document.addEventListener("click", (e) => {
    const withinBoundaries = e.composedPath().includes(item);

    if (!withinBoundaries) {
      item.classList.remove("region_active");
    }
  });
  const langLinks = document.querySelectorAll(".btnlang");
  langLinks.forEach((langLink) => {
    langLink.addEventListener("click", () => {
      item.classList.remove("region_active");
      const langText = document.querySelectorAll(".region__text");
      langText.forEach((text) => {
        text.innerText = langLink.innerText;
      });
    });
  });
});
// ********************
// ********************
// ********************
// ********************
// ********************
// кнопка вверх
if (window.matchMedia("only screen and (min-width: 480px)").matches) {
  buttonScrollTopDesktop();
} else {
  buttonScrollTopMobile();
}
window.addEventListener("resize", () => {
  if (window.innerWidth > 480) {
    buttonScrollTopDesktop();
  } else if (window.innerWidth < 480) {
    buttonScrollTopMobile();
  }
});
// появление кнопки на пк
function buttonScrollTopDesktop() {
  let btn = document.querySelector(".scroll");
  window.addEventListener("scroll", function () {
    if (window.pageYOffset > 1000) {
      btn.classList.add("scroll_active");
    } else {
      btn.classList.remove("scroll_active");
    }
  });

  btn.onclick = function (click) {
    click.preventDefault();
    scrollTo(0, 0);
  };
}
// появление кнопки на телефонах
function buttonScrollTopMobile() {
  let btn = document.querySelector(".scroll");
  window.addEventListener("scroll", function () {
    if (window.pageYOffset > 300) {
      btn.classList.add("scroll_active");
    } else {
      btn.classList.remove("scroll_active");
    }
  });

  btn.onclick = function (click) {
    click.preventDefault();
    scrollTo(0, 0);
  };
}
// ********************
// ********************
// ********************
// ********************
// ********************
// каталог
const btnOpenCatalog = document.querySelector(".catalog"),
  catalog = document.querySelector(".modal__catalog"),
  catalogTransition = document.querySelector(".catalog__background");
let items = document.querySelectorAll(".item-link-dropdown");

btnOpenCatalog.onclick = () => {
  catalogTransition.classList.toggle("active");
  catalog.classList.toggle("active");
  document.querySelector(".catalog-icon").classList.toggle("open");
};
const btnCloseCatalog = document.querySelector(".mobile-catalog__back");
window.onclick = function (event) {
  if (
    event.target !== btnOpenCatalog &&
    !event.target.closest(".modal__catalog") &&
    event.target !== still
  ) {
    if (
      catalogTransition.classList.contains("active") &&
      catalog.classList.contains("active")
    ) {
      catalogTransition.classList.remove("active");
      catalog.classList.remove("active");
      document.querySelector(".catalog-icon").classList.remove("open");
    }
    if (event.target === btnCloseCatalog) {
      mobileCatalogModal.classList.add("active");
      //
      mobileCatalogModalAll.classList.remove("active");
    }
    // сами кнопки в мобильном каталоге
    const mobileBtn1 = document.querySelector(".mobile-btn-1"),
      mobileBtn2 = document.querySelector(".mobile-btn-2");
    // категория авто
    if (event.target === mobileBtn1) {
      mobileCatalogModalAll.classList.add("active");
      btnCloseCatalog.innerHTML =
        `<img class="mobile-catalog__close-img" src="img/icons/arrow_menu.svg" alt="arrow back">` +
        mobileBtn1.innerText;
      document.querySelector(".content1").style.display = "block";
      document.querySelector(".content2").style.display = "none";
    }
    // категория мотоциклы
    if (event.target === mobileBtn2) {
      mobileCatalogModalAll.classList.add("active");
      btnCloseCatalog.innerHTML =
        `<img class="mobile-catalog__close-img" src="img/icons/arrow_menu.svg" alt="arrow back">` +
        mobileBtn2.innerText;
      document.querySelector(".content1").style.display = "none";
      document.querySelector(".content2").style.display = "block";
    }
  }
};
// кнопка еще
const still = document.querySelector(".main__btn");
if (window.matchMedia("only screen and (min-width: 960px)").matches) {
  still.onclick = () => {
    btnOpenCatalog.onclick();
  };
}
if (window.matchMedia("only screen and (max-width: 959px)").matches) {
  still.onclick = () => {
    document.querySelector(".catalog-2").click();
  };
}
window.addEventListener("resize", () => {
  if (window.innerWidth >= 960) {
    still.onclick = () => {
      btnOpenCatalog.onclick();
    };
  } else if (window.innerWidth <= 959) {
    still.onclick = () => {
      document.querySelector(".catalog-2").click();
    };
  }
});
items.forEach((item) => {
  item.addEventListener("click", () => {
    if (
      catalogTransition.classList.contains("active") &&
      catalog.classList.contains("active")
    ) {
      catalogTransition.classList.remove("active");
      catalog.classList.remove("active");
      document.querySelector(".catalog-icon").classList.remove("open");
    }
  });
});
// кнопка еще, но для каталога
const categoryGroupList = document.querySelectorAll(".child-item__container");
categoryGroupList.forEach((item) => {
  const listItems = item.querySelectorAll(".child-item__text");
  const listItemButton = item.querySelectorAll(".child-item-show");
  for (i = 4; i < listItems.length; i++) {
    listItems[i].classList.add("hide");
    listItemButton.forEach((btn) => {
      btn.style.display = "inline-block";
      btn.textContent = "Показать ещё " + (listItems.length - 4);
      btn.addEventListener("click", (event) => {
        if (event.target === btn) {
          for (i = 4; i < listItems.length; i++) {
            listItems[i].classList.remove("hide");
            btn.style.display = "none";
          }
        }
      });
    });
  }
});
// мобильная версия каталога
const mobileCatalogBtn = document.querySelectorAll(".catalog-2"),
  mobileCatalogBtn2 = document.querySelector(".catalog-3"),
  mobileCatalogBtnClose = document.querySelector(".mobile-catalog__close"),
  mobileCatalogBackground = document.querySelector(
    ".mobile-catalog__background"
  ),
  mobileCatalogModal = document.querySelector(".mobile-catalog__modal"),
  mobileCategoriesBtn = document.querySelectorAll(
    ".mobile-catalog__categories"
  );
mobileCatalogBtn.forEach((btn) => {
  btn.addEventListener("click", () => {
    mobileCatalogBackground.classList.add("active");
    mobileCatalogModal.classList.add("active");
    document.body.style.overflowY = "hidden";
    document.querySelector(".catalog-icon").classList.toggle("open");
    document.querySelector(".catalog-icon-2").classList.toggle("open");
  });
});
mobileCatalogBtnClose.addEventListener("click", () => {
  mobileCatalogBackground.classList.remove("active");
  mobileCatalogModal.classList.remove("active");
  document.body.style.overflowY = "scroll";
  document.querySelector(".catalog-icon-2").classList.remove("open");
});
// проверка кнопки на главной станицы категории
if (mobileCatalogBtn2 != null) {
  mobileCatalogBtn2.addEventListener("click", () => {
    mobileCatalogBackground.classList.add("active");
    mobileCatalogModal.classList.add("active");
    document.body.style.overflowY = "hidden";
  });
}
// категория мотоциклы
const mobileCatalogModalAll = document.querySelector("#all");

const CatalogLinks = document.querySelectorAll(".accordion__content-link");
CatalogLinks.forEach((CatalogLink) => {
  CatalogLink.addEventListener("click", () => {
    mobileCatalogBackground.classList.remove("active");
    mobileCatalogModal.classList.remove("active");
    document.querySelector(".catalog-icon-2").classList.remove("open");
    const accordionItems = document.querySelectorAll(".accordion__item");
    accordionItems.forEach((accordionItem) => {
      if (accordionItem.classList.contains("accordion__item_show")) {
        accordionItem.classList.remove("accordion__item_show");
      }
    });
    document.body.style.overflowY = "scroll";
    //
    mobileCatalogModalAll.classList.remove("active");
  });
});

const footerInner = document.querySelector(".footer__inner"),
  bottomMenu = document.querySelector(".bottom-menu");
footerInner.style.paddingBottom = bottomMenu.offsetHeight + "px";

// закрытие мобильного каталога на пк
window.addEventListener("resize", () => {
  if (window.innerWidth > 959) {
    mobileCatalogBackground.classList.remove("active");
    mobileCatalogModal.classList.remove("active");
    //
    mobileCatalogModalAll.classList.remove("active");
  }
});
if (window.matchMedia("only screen and (min-width: 960px)").matches) {
  mobileCatalogBackground.classList.remove("active");
  mobileCatalogModal.classList.remove("active");
  //
  mobileCatalogModalAll.classList.remove("active");
}
// закрытие каталога пк версии в мобильной
window.addEventListener("resize", () => {
  if (window.innerWidth < 960) {
    catalog.classList.remove("active");
    catalogTransition.classList.remove("active");
    document.querySelector(".catalog-icon").classList.remove("open");
    document.querySelector(".catalog-icon-2").classList.remove("open");
  }
});
if (window.matchMedia("only screen and (max-width: 959px)").matches) {
  catalog.classList.remove("active");
  catalogTransition.classList.remove("active");
  document.querySelector(".catalog-icon").classList.remove("open");
  document.querySelector(".catalog-icon-2").classList.remove("open");
}
// переключение пунктов в каталоге
const link1 = document.querySelector(".link-1"),
  link2 = document.querySelector(".link-2"),
  link3 = document.querySelector(".link-3"),
  link4 = document.querySelector(".link-4"),
  link5 = document.querySelector(".link-5"),
  link6 = document.querySelector(".link-6"),
  link7 = document.querySelector(".link-7"),
  link8 = document.querySelector(".link-8"),
  link9 = document.querySelector(".link-9"),
  link10 = document.querySelector(".link-10"),
  link11 = document.querySelector(".link-11"),
  link12 = document.querySelector(".link-12"),
  link13 = document.querySelector(".link-13"),
  link14 = document.querySelector(".link-14"),
  link15 = document.querySelector(".link-15"),
  link16 = document.querySelector(".link-16"),
  link17 = document.querySelector(".link-17"),
  link18 = document.querySelector(".link-18"),
  link19 = document.querySelector(".link-19"),
  link20 = document.querySelector(".link-20"),
  link21 = document.querySelector(".link-21"),
  link22 = document.querySelector(".link-22"),
  link23 = document.querySelector(".link-23"),
  link24 = document.querySelector(".link-24"),
  link25 = document.querySelector(".link-25");
let mainCategories = document.querySelectorAll(".main-categories");

link1.addEventListener("mouseover", () => {
  link1.classList.add("active");
  link2.classList.remove("active");
  link3.classList.remove("active");
  link4.classList.remove("active");
  link5.classList.remove("active");
  link6.classList.remove("active");
  link7.classList.remove("active");
  link8.classList.remove("active");
  link9.classList.remove("active");
  link10.classList.remove("active");
  link11.classList.remove("active");
  link12.classList.remove("active");
  link13.classList.remove("active");
  link14.classList.remove("active");
  link15.classList.remove("active");
  link16.classList.remove("active");
  link17.classList.remove("active");
  link18.classList.remove("active");
  link19.classList.remove("active");
  link20.classList.remove("active");
  link21.classList.remove("active");
  link22.classList.remove("active");
  link23.classList.remove("active");
  link24.classList.remove("active");
  link25.classList.remove("active");

  document.querySelector(".categories-link-1").classList.add("active");
  document.querySelector(".categories-link-2").classList.remove("active");
  document.querySelector(".categories-link-3").classList.remove("active");
  document.querySelector(".categories-link-4").classList.remove("active");
  document.querySelector(".categories-link-5").classList.remove("active");
  document.querySelector(".categories-link-6").classList.remove("active");
  document.querySelector(".categories-link-7").classList.remove("active");
  document.querySelector(".categories-link-8").classList.remove("active");
  document.querySelector(".categories-link-9").classList.remove("active");
  document.querySelector(".categories-link-10").classList.remove("active");
  document.querySelector(".categories-link-11").classList.remove("active");
  document.querySelector(".categories-link-12").classList.remove("active");
  document.querySelector(".categories-link-13").classList.remove("active");
  document.querySelector(".categories-link-14").classList.remove("active");
  document.querySelector(".categories-link-15").classList.remove("active");
  document.querySelector(".categories-link-16").classList.remove("active");
  document.querySelector(".categories-link-17").classList.remove("active");
  document.querySelector(".categories-link-18").classList.remove("active");
  document.querySelector(".categories-link-19").classList.remove("active");
  document.querySelector(".categories-link-20").classList.remove("active");
  document.querySelector(".categories-link-21").classList.remove("active");
  document.querySelector(".categories-link-22").classList.remove("active");
  document.querySelector(".categories-link-23").classList.remove("active");
  document.querySelector(".categories-link-24").classList.remove("active");
  document.querySelector(".categories-link-25").classList.remove("active");
});
link2.addEventListener("mouseover", () => {
  link1.classList.remove("active");
  link2.classList.add("active");
  link3.classList.remove("active");
  link4.classList.remove("active");
  link5.classList.remove("active");
  link6.classList.remove("active");
  link7.classList.remove("active");
  link8.classList.remove("active");
  link9.classList.remove("active");
  link10.classList.remove("active");
  link11.classList.remove("active");
  link12.classList.remove("active");
  link13.classList.remove("active");
  link14.classList.remove("active");
  link15.classList.remove("active");
  link16.classList.remove("active");
  link17.classList.remove("active");
  link18.classList.remove("active");
  link19.classList.remove("active");
  link20.classList.remove("active");
  link21.classList.remove("active");
  link22.classList.remove("active");
  link23.classList.remove("active");
  link24.classList.remove("active");
  link25.classList.remove("active");

  document.querySelector(".categories-link-1").classList.remove("active");
  document.querySelector(".categories-link-2").classList.add("active");
  document.querySelector(".categories-link-3").classList.remove("active");
  document.querySelector(".categories-link-4").classList.remove("active");
  document.querySelector(".categories-link-5").classList.remove("active");
  document.querySelector(".categories-link-6").classList.remove("active");
  document.querySelector(".categories-link-7").classList.remove("active");
  document.querySelector(".categories-link-8").classList.remove("active");
  document.querySelector(".categories-link-9").classList.remove("active");
  document.querySelector(".categories-link-10").classList.remove("active");
  document.querySelector(".categories-link-11").classList.remove("active");
  document.querySelector(".categories-link-12").classList.remove("active");
  document.querySelector(".categories-link-13").classList.remove("active");
  document.querySelector(".categories-link-14").classList.remove("active");
  document.querySelector(".categories-link-15").classList.remove("active");
  document.querySelector(".categories-link-16").classList.remove("active");
  document.querySelector(".categories-link-17").classList.remove("active");
  document.querySelector(".categories-link-18").classList.remove("active");
  document.querySelector(".categories-link-19").classList.remove("active");
  document.querySelector(".categories-link-20").classList.remove("active");
  document.querySelector(".categories-link-21").classList.remove("active");
  document.querySelector(".categories-link-22").classList.remove("active");
  document.querySelector(".categories-link-23").classList.remove("active");
  document.querySelector(".categories-link-24").classList.remove("active");
  document.querySelector(".categories-link-25").classList.remove("active");
});
link3.addEventListener("mouseover", () => {
  link1.classList.remove("active");
  link2.classList.remove("active");
  link3.classList.add("active");
  link4.classList.remove("active");
  link5.classList.remove("active");
  link6.classList.remove("active");
  link7.classList.remove("active");
  link8.classList.remove("active");
  link9.classList.remove("active");
  link10.classList.remove("active");
  link11.classList.remove("active");
  link12.classList.remove("active");
  link13.classList.remove("active");
  link14.classList.remove("active");
  link15.classList.remove("active");
  link16.classList.remove("active");
  link17.classList.remove("active");
  link18.classList.remove("active");
  link19.classList.remove("active");
  link20.classList.remove("active");
  link21.classList.remove("active");
  link22.classList.remove("active");
  link23.classList.remove("active");
  link24.classList.remove("active");
  link25.classList.remove("active");

  document.querySelector(".categories-link-1").classList.remove("active");
  document.querySelector(".categories-link-2").classList.remove("active");
  document.querySelector(".categories-link-3").classList.add("active");
  document.querySelector(".categories-link-4").classList.remove("active");
  document.querySelector(".categories-link-5").classList.remove("active");
  document.querySelector(".categories-link-6").classList.remove("active");
  document.querySelector(".categories-link-7").classList.remove("active");
  document.querySelector(".categories-link-8").classList.remove("active");
  document.querySelector(".categories-link-9").classList.remove("active");
  document.querySelector(".categories-link-10").classList.remove("active");
  document.querySelector(".categories-link-11").classList.remove("active");
  document.querySelector(".categories-link-12").classList.remove("active");
  document.querySelector(".categories-link-13").classList.remove("active");
  document.querySelector(".categories-link-14").classList.remove("active");
  document.querySelector(".categories-link-15").classList.remove("active");
  document.querySelector(".categories-link-16").classList.remove("active");
  document.querySelector(".categories-link-17").classList.remove("active");
  document.querySelector(".categories-link-18").classList.remove("active");
  document.querySelector(".categories-link-19").classList.remove("active");
  document.querySelector(".categories-link-20").classList.remove("active");
  document.querySelector(".categories-link-21").classList.remove("active");
  document.querySelector(".categories-link-22").classList.remove("active");
  document.querySelector(".categories-link-23").classList.remove("active");
  document.querySelector(".categories-link-24").classList.remove("active");
  document.querySelector(".categories-link-25").classList.remove("active");
});
link4.addEventListener("mouseover", () => {
  link1.classList.remove("active");
  link2.classList.remove("active");
  link3.classList.remove("active");
  link4.classList.add("active");
  link5.classList.remove("active");
  link6.classList.remove("active");
  link7.classList.remove("active");
  link8.classList.remove("active");
  link9.classList.remove("active");
  link10.classList.remove("active");
  link11.classList.remove("active");
  link12.classList.remove("active");
  link13.classList.remove("active");
  link14.classList.remove("active");
  link15.classList.remove("active");
  link16.classList.remove("active");
  link17.classList.remove("active");
  link18.classList.remove("active");
  link19.classList.remove("active");
  link20.classList.remove("active");
  link21.classList.remove("active");
  link22.classList.remove("active");
  link23.classList.remove("active");
  link24.classList.remove("active");
  link25.classList.remove("active");

  document.querySelector(".categories-link-1").classList.remove("active");
  document.querySelector(".categories-link-2").classList.remove("active");
  document.querySelector(".categories-link-3").classList.remove("active");
  document.querySelector(".categories-link-4").classList.add("active");
  document.querySelector(".categories-link-5").classList.remove("active");
  document.querySelector(".categories-link-6").classList.remove("active");
  document.querySelector(".categories-link-7").classList.remove("active");
  document.querySelector(".categories-link-8").classList.remove("active");
  document.querySelector(".categories-link-9").classList.remove("active");
  document.querySelector(".categories-link-10").classList.remove("active");
  document.querySelector(".categories-link-11").classList.remove("active");
  document.querySelector(".categories-link-12").classList.remove("active");
  document.querySelector(".categories-link-13").classList.remove("active");
  document.querySelector(".categories-link-14").classList.remove("active");
  document.querySelector(".categories-link-15").classList.remove("active");
  document.querySelector(".categories-link-16").classList.remove("active");
  document.querySelector(".categories-link-17").classList.remove("active");
  document.querySelector(".categories-link-18").classList.remove("active");
  document.querySelector(".categories-link-19").classList.remove("active");
  document.querySelector(".categories-link-20").classList.remove("active");
  document.querySelector(".categories-link-21").classList.remove("active");
  document.querySelector(".categories-link-22").classList.remove("active");
  document.querySelector(".categories-link-23").classList.remove("active");
  document.querySelector(".categories-link-24").classList.remove("active");
  document.querySelector(".categories-link-25").classList.remove("active");
});
link5.addEventListener("mouseover", () => {
  link1.classList.remove("active");
  link2.classList.remove("active");
  link3.classList.remove("active");
  link4.classList.remove("active");
  link5.classList.add("active");
  link6.classList.remove("active");
  link7.classList.remove("active");
  link8.classList.remove("active");
  link9.classList.remove("active");
  link10.classList.remove("active");
  link11.classList.remove("active");
  link12.classList.remove("active");
  link13.classList.remove("active");
  link14.classList.remove("active");
  link15.classList.remove("active");
  link16.classList.remove("active");
  link17.classList.remove("active");
  link18.classList.remove("active");
  link19.classList.remove("active");
  link20.classList.remove("active");
  link21.classList.remove("active");
  link22.classList.remove("active");
  link23.classList.remove("active");
  link24.classList.remove("active");
  link25.classList.remove("active");

  document.querySelector(".categories-link-1").classList.remove("active");
  document.querySelector(".categories-link-2").classList.remove("active");
  document.querySelector(".categories-link-3").classList.remove("active");
  document.querySelector(".categories-link-4").classList.remove("active");
  document.querySelector(".categories-link-5").classList.add("active");
  document.querySelector(".categories-link-6").classList.remove("active");
  document.querySelector(".categories-link-7").classList.remove("active");
  document.querySelector(".categories-link-8").classList.remove("active");
  document.querySelector(".categories-link-9").classList.remove("active");
  document.querySelector(".categories-link-10").classList.remove("active");
  document.querySelector(".categories-link-11").classList.remove("active");
  document.querySelector(".categories-link-12").classList.remove("active");
  document.querySelector(".categories-link-13").classList.remove("active");
  document.querySelector(".categories-link-14").classList.remove("active");
  document.querySelector(".categories-link-15").classList.remove("active");
  document.querySelector(".categories-link-16").classList.remove("active");
  document.querySelector(".categories-link-17").classList.remove("active");
  document.querySelector(".categories-link-18").classList.remove("active");
  document.querySelector(".categories-link-19").classList.remove("active");
  document.querySelector(".categories-link-20").classList.remove("active");
  document.querySelector(".categories-link-21").classList.remove("active");
  document.querySelector(".categories-link-22").classList.remove("active");
  document.querySelector(".categories-link-23").classList.remove("active");
  document.querySelector(".categories-link-24").classList.remove("active");
  document.querySelector(".categories-link-25").classList.remove("active");
});
link6.addEventListener("mouseover", () => {
  link1.classList.remove("active");
  link2.classList.remove("active");
  link3.classList.remove("active");
  link4.classList.remove("active");
  link5.classList.remove("active");
  link6.classList.add("active");
  link7.classList.remove("active");
  link8.classList.remove("active");
  link9.classList.remove("active");
  link10.classList.remove("active");
  link11.classList.remove("active");
  link12.classList.remove("active");
  link13.classList.remove("active");
  link14.classList.remove("active");
  link15.classList.remove("active");
  link16.classList.remove("active");
  link17.classList.remove("active");
  link18.classList.remove("active");
  link19.classList.remove("active");
  link20.classList.remove("active");
  link21.classList.remove("active");
  link22.classList.remove("active");
  link23.classList.remove("active");
  link24.classList.remove("active");
  link25.classList.remove("active");

  document.querySelector(".categories-link-1").classList.remove("active");
  document.querySelector(".categories-link-2").classList.remove("active");
  document.querySelector(".categories-link-3").classList.remove("active");
  document.querySelector(".categories-link-4").classList.remove("active");
  document.querySelector(".categories-link-5").classList.remove("active");
  document.querySelector(".categories-link-6").classList.add("active");
  document.querySelector(".categories-link-7").classList.remove("active");
  document.querySelector(".categories-link-8").classList.remove("active");
  document.querySelector(".categories-link-9").classList.remove("active");
  document.querySelector(".categories-link-10").classList.remove("active");
  document.querySelector(".categories-link-11").classList.remove("active");
  document.querySelector(".categories-link-12").classList.remove("active");
  document.querySelector(".categories-link-13").classList.remove("active");
  document.querySelector(".categories-link-14").classList.remove("active");
  document.querySelector(".categories-link-15").classList.remove("active");
  document.querySelector(".categories-link-16").classList.remove("active");
  document.querySelector(".categories-link-17").classList.remove("active");
  document.querySelector(".categories-link-18").classList.remove("active");
  document.querySelector(".categories-link-19").classList.remove("active");
  document.querySelector(".categories-link-20").classList.remove("active");
  document.querySelector(".categories-link-21").classList.remove("active");
  document.querySelector(".categories-link-22").classList.remove("active");
  document.querySelector(".categories-link-23").classList.remove("active");
  document.querySelector(".categories-link-24").classList.remove("active");
  document.querySelector(".categories-link-25").classList.remove("active");
});
link7.addEventListener("mouseover", () => {
  link1.classList.remove("active");
  link2.classList.remove("active");
  link3.classList.remove("active");
  link4.classList.remove("active");
  link5.classList.remove("active");
  link6.classList.remove("active");
  link7.classList.add("active");
  link8.classList.remove("active");
  link9.classList.remove("active");
  link10.classList.remove("active");
  link11.classList.remove("active");
  link12.classList.remove("active");
  link13.classList.remove("active");
  link14.classList.remove("active");
  link15.classList.remove("active");
  link16.classList.remove("active");
  link17.classList.remove("active");
  link18.classList.remove("active");
  link19.classList.remove("active");
  link20.classList.remove("active");
  link21.classList.remove("active");
  link22.classList.remove("active");
  link23.classList.remove("active");
  link24.classList.remove("active");
  link25.classList.remove("active");

  document.querySelector(".categories-link-1").classList.remove("active");
  document.querySelector(".categories-link-2").classList.remove("active");
  document.querySelector(".categories-link-3").classList.remove("active");
  document.querySelector(".categories-link-4").classList.remove("active");
  document.querySelector(".categories-link-5").classList.remove("active");
  document.querySelector(".categories-link-6").classList.remove("active");
  document.querySelector(".categories-link-7").classList.add("active");
  document.querySelector(".categories-link-8").classList.remove("active");
  document.querySelector(".categories-link-9").classList.remove("active");
  document.querySelector(".categories-link-10").classList.remove("active");
  document.querySelector(".categories-link-11").classList.remove("active");
  document.querySelector(".categories-link-12").classList.remove("active");
  document.querySelector(".categories-link-13").classList.remove("active");
  document.querySelector(".categories-link-14").classList.remove("active");
  document.querySelector(".categories-link-15").classList.remove("active");
  document.querySelector(".categories-link-16").classList.remove("active");
  document.querySelector(".categories-link-17").classList.remove("active");
  document.querySelector(".categories-link-18").classList.remove("active");
  document.querySelector(".categories-link-19").classList.remove("active");
  document.querySelector(".categories-link-20").classList.remove("active");
  document.querySelector(".categories-link-21").classList.remove("active");
  document.querySelector(".categories-link-22").classList.remove("active");
  document.querySelector(".categories-link-23").classList.remove("active");
  document.querySelector(".categories-link-24").classList.remove("active");
  document.querySelector(".categories-link-25").classList.remove("active");
});
link8.addEventListener("mouseover", () => {
  link1.classList.remove("active");
  link2.classList.remove("active");
  link3.classList.remove("active");
  link4.classList.remove("active");
  link5.classList.remove("active");
  link6.classList.remove("active");
  link7.classList.remove("active");
  link8.classList.add("active");
  link9.classList.remove("active");
  link10.classList.remove("active");
  link11.classList.remove("active");
  link12.classList.remove("active");
  link13.classList.remove("active");
  link14.classList.remove("active");
  link15.classList.remove("active");
  link16.classList.remove("active");
  link17.classList.remove("active");
  link18.classList.remove("active");
  link19.classList.remove("active");
  link20.classList.remove("active");
  link21.classList.remove("active");
  link22.classList.remove("active");
  link23.classList.remove("active");
  link24.classList.remove("active");
  link25.classList.remove("active");

  document.querySelector(".categories-link-1").classList.remove("active");
  document.querySelector(".categories-link-2").classList.remove("active");
  document.querySelector(".categories-link-3").classList.remove("active");
  document.querySelector(".categories-link-4").classList.remove("active");
  document.querySelector(".categories-link-5").classList.remove("active");
  document.querySelector(".categories-link-6").classList.remove("active");
  document.querySelector(".categories-link-7").classList.remove("active");
  document.querySelector(".categories-link-8").classList.add("active");
  document.querySelector(".categories-link-9").classList.remove("active");
  document.querySelector(".categories-link-10").classList.remove("active");
  document.querySelector(".categories-link-11").classList.remove("active");
  document.querySelector(".categories-link-12").classList.remove("active");
  document.querySelector(".categories-link-13").classList.remove("active");
  document.querySelector(".categories-link-14").classList.remove("active");
  document.querySelector(".categories-link-15").classList.remove("active");
  document.querySelector(".categories-link-16").classList.remove("active");
  document.querySelector(".categories-link-17").classList.remove("active");
  document.querySelector(".categories-link-18").classList.remove("active");
  document.querySelector(".categories-link-19").classList.remove("active");
  document.querySelector(".categories-link-20").classList.remove("active");
  document.querySelector(".categories-link-21").classList.remove("active");
  document.querySelector(".categories-link-22").classList.remove("active");
  document.querySelector(".categories-link-23").classList.remove("active");
  document.querySelector(".categories-link-24").classList.remove("active");
  document.querySelector(".categories-link-25").classList.remove("active");
});
link9.addEventListener("mouseover", () => {
  link1.classList.remove("active");
  link2.classList.remove("active");
  link3.classList.remove("active");
  link4.classList.remove("active");
  link5.classList.remove("active");
  link6.classList.remove("active");
  link7.classList.remove("active");
  link8.classList.remove("active");
  link9.classList.add("active");
  link10.classList.remove("active");
  link11.classList.remove("active");
  link12.classList.remove("active");
  link13.classList.remove("active");
  link14.classList.remove("active");
  link15.classList.remove("active");
  link16.classList.remove("active");
  link17.classList.remove("active");
  link18.classList.remove("active");
  link19.classList.remove("active");
  link20.classList.remove("active");
  link21.classList.remove("active");
  link22.classList.remove("active");
  link23.classList.remove("active");
  link24.classList.remove("active");
  link25.classList.remove("active");

  document.querySelector(".categories-link-1").classList.remove("active");
  document.querySelector(".categories-link-2").classList.remove("active");
  document.querySelector(".categories-link-3").classList.remove("active");
  document.querySelector(".categories-link-4").classList.remove("active");
  document.querySelector(".categories-link-5").classList.remove("active");
  document.querySelector(".categories-link-6").classList.remove("active");
  document.querySelector(".categories-link-7").classList.remove("active");
  document.querySelector(".categories-link-8").classList.remove("active");
  document.querySelector(".categories-link-9").classList.add("active");
  document.querySelector(".categories-link-10").classList.remove("active");
  document.querySelector(".categories-link-11").classList.remove("active");
  document.querySelector(".categories-link-12").classList.remove("active");
  document.querySelector(".categories-link-13").classList.remove("active");
  document.querySelector(".categories-link-14").classList.remove("active");
  document.querySelector(".categories-link-15").classList.remove("active");
  document.querySelector(".categories-link-16").classList.remove("active");
  document.querySelector(".categories-link-17").classList.remove("active");
  document.querySelector(".categories-link-18").classList.remove("active");
  document.querySelector(".categories-link-19").classList.remove("active");
  document.querySelector(".categories-link-20").classList.remove("active");
  document.querySelector(".categories-link-21").classList.remove("active");
  document.querySelector(".categories-link-22").classList.remove("active");
  document.querySelector(".categories-link-23").classList.remove("active");
  document.querySelector(".categories-link-24").classList.remove("active");
  document.querySelector(".categories-link-25").classList.remove("active");
});
link10.addEventListener("mouseover", () => {
  link1.classList.remove("active");
  link2.classList.remove("active");
  link3.classList.remove("active");
  link4.classList.remove("active");
  link5.classList.remove("active");
  link6.classList.remove("active");
  link7.classList.remove("active");
  link8.classList.remove("active");
  link9.classList.remove("active");
  link10.classList.add("active");
  link11.classList.remove("active");
  link12.classList.remove("active");
  link13.classList.remove("active");
  link14.classList.remove("active");
  link15.classList.remove("active");
  link16.classList.remove("active");
  link17.classList.remove("active");
  link18.classList.remove("active");
  link19.classList.remove("active");
  link20.classList.remove("active");
  link21.classList.remove("active");
  link22.classList.remove("active");
  link23.classList.remove("active");
  link24.classList.remove("active");
  link25.classList.remove("active");

  document.querySelector(".categories-link-1").classList.remove("active");
  document.querySelector(".categories-link-2").classList.remove("active");
  document.querySelector(".categories-link-3").classList.remove("active");
  document.querySelector(".categories-link-4").classList.remove("active");
  document.querySelector(".categories-link-5").classList.remove("active");
  document.querySelector(".categories-link-6").classList.remove("active");
  document.querySelector(".categories-link-7").classList.remove("active");
  document.querySelector(".categories-link-8").classList.remove("active");
  document.querySelector(".categories-link-9").classList.remove("active");
  document.querySelector(".categories-link-10").classList.add("active");
  document.querySelector(".categories-link-11").classList.remove("active");
  document.querySelector(".categories-link-12").classList.remove("active");
  document.querySelector(".categories-link-13").classList.remove("active");
  document.querySelector(".categories-link-14").classList.remove("active");
  document.querySelector(".categories-link-15").classList.remove("active");
  document.querySelector(".categories-link-16").classList.remove("active");
  document.querySelector(".categories-link-17").classList.remove("active");
  document.querySelector(".categories-link-18").classList.remove("active");
  document.querySelector(".categories-link-19").classList.remove("active");
  document.querySelector(".categories-link-20").classList.remove("active");
  document.querySelector(".categories-link-21").classList.remove("active");
  document.querySelector(".categories-link-22").classList.remove("active");
  document.querySelector(".categories-link-23").classList.remove("active");
  document.querySelector(".categories-link-24").classList.remove("active");
  document.querySelector(".categories-link-25").classList.remove("active");
});
link11.addEventListener("mouseover", () => {
  link1.classList.remove("active");
  link2.classList.remove("active");
  link3.classList.remove("active");
  link4.classList.remove("active");
  link5.classList.remove("active");
  link6.classList.remove("active");
  link7.classList.remove("active");
  link8.classList.remove("active");
  link9.classList.remove("active");
  link10.classList.remove("active");
  link11.classList.add("active");
  link12.classList.remove("active");
  link13.classList.remove("active");
  link14.classList.remove("active");
  link15.classList.remove("active");
  link16.classList.remove("active");
  link17.classList.remove("active");
  link18.classList.remove("active");
  link19.classList.remove("active");
  link20.classList.remove("active");
  link21.classList.remove("active");
  link22.classList.remove("active");
  link23.classList.remove("active");
  link24.classList.remove("active");
  link25.classList.remove("active");

  document.querySelector(".categories-link-1").classList.remove("active");
  document.querySelector(".categories-link-2").classList.remove("active");
  document.querySelector(".categories-link-3").classList.remove("active");
  document.querySelector(".categories-link-4").classList.remove("active");
  document.querySelector(".categories-link-5").classList.remove("active");
  document.querySelector(".categories-link-6").classList.remove("active");
  document.querySelector(".categories-link-7").classList.remove("active");
  document.querySelector(".categories-link-8").classList.remove("active");
  document.querySelector(".categories-link-9").classList.remove("active");
  document.querySelector(".categories-link-10").classList.remove("active");
  document.querySelector(".categories-link-11").classList.add("active");
  document.querySelector(".categories-link-12").classList.remove("active");
  document.querySelector(".categories-link-13").classList.remove("active");
  document.querySelector(".categories-link-14").classList.remove("active");
  document.querySelector(".categories-link-15").classList.remove("active");
  document.querySelector(".categories-link-16").classList.remove("active");
  document.querySelector(".categories-link-17").classList.remove("active");
  document.querySelector(".categories-link-18").classList.remove("active");
  document.querySelector(".categories-link-19").classList.remove("active");
  document.querySelector(".categories-link-20").classList.remove("active");
  document.querySelector(".categories-link-21").classList.remove("active");
  document.querySelector(".categories-link-22").classList.remove("active");
  document.querySelector(".categories-link-23").classList.remove("active");
  document.querySelector(".categories-link-24").classList.remove("active");
  document.querySelector(".categories-link-25").classList.remove("active");
});
link12.addEventListener("mouseover", () => {
  link1.classList.remove("active");
  link2.classList.remove("active");
  link3.classList.remove("active");
  link4.classList.remove("active");
  link5.classList.remove("active");
  link6.classList.remove("active");
  link7.classList.remove("active");
  link8.classList.remove("active");
  link9.classList.remove("active");
  link10.classList.remove("active");
  link11.classList.remove("active");
  link12.classList.add("active");
  link13.classList.remove("active");
  link14.classList.remove("active");
  link15.classList.remove("active");
  link16.classList.remove("active");
  link17.classList.remove("active");
  link18.classList.remove("active");
  link19.classList.remove("active");
  link20.classList.remove("active");
  link21.classList.remove("active");
  link22.classList.remove("active");
  link23.classList.remove("active");
  link24.classList.remove("active");
  link25.classList.remove("active");

  document.querySelector(".categories-link-1").classList.remove("active");
  document.querySelector(".categories-link-2").classList.remove("active");
  document.querySelector(".categories-link-3").classList.remove("active");
  document.querySelector(".categories-link-4").classList.remove("active");
  document.querySelector(".categories-link-5").classList.remove("active");
  document.querySelector(".categories-link-6").classList.remove("active");
  document.querySelector(".categories-link-7").classList.remove("active");
  document.querySelector(".categories-link-8").classList.remove("active");
  document.querySelector(".categories-link-9").classList.remove("active");
  document.querySelector(".categories-link-10").classList.remove("active");
  document.querySelector(".categories-link-11").classList.remove("active");
  document.querySelector(".categories-link-12").classList.add("active");
  document.querySelector(".categories-link-13").classList.remove("active");
  document.querySelector(".categories-link-14").classList.remove("active");
  document.querySelector(".categories-link-15").classList.remove("active");
  document.querySelector(".categories-link-16").classList.remove("active");
  document.querySelector(".categories-link-17").classList.remove("active");
  document.querySelector(".categories-link-18").classList.remove("active");
  document.querySelector(".categories-link-19").classList.remove("active");
  document.querySelector(".categories-link-20").classList.remove("active");
  document.querySelector(".categories-link-21").classList.remove("active");
  document.querySelector(".categories-link-22").classList.remove("active");
  document.querySelector(".categories-link-23").classList.remove("active");
  document.querySelector(".categories-link-24").classList.remove("active");
  document.querySelector(".categories-link-25").classList.remove("active");
});
link13.addEventListener("mouseover", () => {
  link1.classList.remove("active");
  link2.classList.remove("active");
  link3.classList.remove("active");
  link4.classList.remove("active");
  link5.classList.remove("active");
  link6.classList.remove("active");
  link7.classList.remove("active");
  link8.classList.remove("active");
  link9.classList.remove("active");
  link10.classList.remove("active");
  link11.classList.remove("active");
  link12.classList.remove("active");
  link13.classList.add("active");
  link14.classList.remove("active");
  link15.classList.remove("active");
  link16.classList.remove("active");
  link17.classList.remove("active");
  link18.classList.remove("active");
  link19.classList.remove("active");
  link20.classList.remove("active");
  link21.classList.remove("active");
  link22.classList.remove("active");
  link23.classList.remove("active");
  link24.classList.remove("active");
  link25.classList.remove("active");

  document.querySelector(".categories-link-1").classList.remove("active");
  document.querySelector(".categories-link-2").classList.remove("active");
  document.querySelector(".categories-link-3").classList.remove("active");
  document.querySelector(".categories-link-4").classList.remove("active");
  document.querySelector(".categories-link-5").classList.remove("active");
  document.querySelector(".categories-link-6").classList.remove("active");
  document.querySelector(".categories-link-7").classList.remove("active");
  document.querySelector(".categories-link-8").classList.remove("active");
  document.querySelector(".categories-link-9").classList.remove("active");
  document.querySelector(".categories-link-10").classList.remove("active");
  document.querySelector(".categories-link-11").classList.remove("active");
  document.querySelector(".categories-link-12").classList.remove("active");
  document.querySelector(".categories-link-13").classList.add("active");
  document.querySelector(".categories-link-14").classList.remove("active");
  document.querySelector(".categories-link-15").classList.remove("active");
  document.querySelector(".categories-link-16").classList.remove("active");
  document.querySelector(".categories-link-17").classList.remove("active");
  document.querySelector(".categories-link-18").classList.remove("active");
  document.querySelector(".categories-link-19").classList.remove("active");
  document.querySelector(".categories-link-20").classList.remove("active");
  document.querySelector(".categories-link-21").classList.remove("active");
  document.querySelector(".categories-link-22").classList.remove("active");
  document.querySelector(".categories-link-23").classList.remove("active");
  document.querySelector(".categories-link-24").classList.remove("active");
  document.querySelector(".categories-link-25").classList.remove("active");
});
link14.addEventListener("mouseover", () => {
  link1.classList.remove("active");
  link2.classList.remove("active");
  link3.classList.remove("active");
  link4.classList.remove("active");
  link5.classList.remove("active");
  link6.classList.remove("active");
  link7.classList.remove("active");
  link8.classList.remove("active");
  link9.classList.remove("active");
  link10.classList.remove("active");
  link11.classList.remove("active");
  link12.classList.remove("active");
  link13.classList.remove("active");
  link14.classList.add("active");
  link15.classList.remove("active");
  link16.classList.remove("active");
  link17.classList.remove("active");
  link18.classList.remove("active");
  link19.classList.remove("active");
  link20.classList.remove("active");
  link21.classList.remove("active");
  link22.classList.remove("active");
  link23.classList.remove("active");
  link24.classList.remove("active");
  link25.classList.remove("active");

  document.querySelector(".categories-link-1").classList.remove("active");
  document.querySelector(".categories-link-2").classList.remove("active");
  document.querySelector(".categories-link-3").classList.remove("active");
  document.querySelector(".categories-link-4").classList.remove("active");
  document.querySelector(".categories-link-5").classList.remove("active");
  document.querySelector(".categories-link-6").classList.remove("active");
  document.querySelector(".categories-link-7").classList.remove("active");
  document.querySelector(".categories-link-8").classList.remove("active");
  document.querySelector(".categories-link-9").classList.remove("active");
  document.querySelector(".categories-link-10").classList.remove("active");
  document.querySelector(".categories-link-11").classList.remove("active");
  document.querySelector(".categories-link-12").classList.remove("active");
  document.querySelector(".categories-link-13").classList.remove("active");
  document.querySelector(".categories-link-14").classList.add("active");
  document.querySelector(".categories-link-15").classList.remove("active");
  document.querySelector(".categories-link-16").classList.remove("active");
  document.querySelector(".categories-link-17").classList.remove("active");
  document.querySelector(".categories-link-18").classList.remove("active");
  document.querySelector(".categories-link-19").classList.remove("active");
  document.querySelector(".categories-link-20").classList.remove("active");
  document.querySelector(".categories-link-21").classList.remove("active");
  document.querySelector(".categories-link-22").classList.remove("active");
  document.querySelector(".categories-link-23").classList.remove("active");
  document.querySelector(".categories-link-24").classList.remove("active");
  document.querySelector(".categories-link-25").classList.remove("active");
});
link15.addEventListener("mouseover", () => {
  link1.classList.remove("active");
  link2.classList.remove("active");
  link3.classList.remove("active");
  link4.classList.remove("active");
  link5.classList.remove("active");
  link6.classList.remove("active");
  link7.classList.remove("active");
  link8.classList.remove("active");
  link9.classList.remove("active");
  link10.classList.remove("active");
  link11.classList.remove("active");
  link12.classList.remove("active");
  link13.classList.remove("active");
  link14.classList.remove("active");
  link15.classList.add("active");
  link16.classList.remove("active");
  link17.classList.remove("active");
  link18.classList.remove("active");
  link19.classList.remove("active");
  link20.classList.remove("active");
  link21.classList.remove("active");
  link22.classList.remove("active");
  link23.classList.remove("active");
  link24.classList.remove("active");
  link25.classList.remove("active");

  document.querySelector(".categories-link-1").classList.remove("active");
  document.querySelector(".categories-link-2").classList.remove("active");
  document.querySelector(".categories-link-3").classList.remove("active");
  document.querySelector(".categories-link-4").classList.remove("active");
  document.querySelector(".categories-link-5").classList.remove("active");
  document.querySelector(".categories-link-6").classList.remove("active");
  document.querySelector(".categories-link-7").classList.remove("active");
  document.querySelector(".categories-link-8").classList.remove("active");
  document.querySelector(".categories-link-9").classList.remove("active");
  document.querySelector(".categories-link-10").classList.remove("active");
  document.querySelector(".categories-link-11").classList.remove("active");
  document.querySelector(".categories-link-12").classList.remove("active");
  document.querySelector(".categories-link-13").classList.remove("active");
  document.querySelector(".categories-link-14").classList.remove("active");
  document.querySelector(".categories-link-15").classList.add("active");
  document.querySelector(".categories-link-16").classList.remove("active");
  document.querySelector(".categories-link-17").classList.remove("active");
  document.querySelector(".categories-link-18").classList.remove("active");
  document.querySelector(".categories-link-19").classList.remove("active");
  document.querySelector(".categories-link-20").classList.remove("active");
  document.querySelector(".categories-link-21").classList.remove("active");
  document.querySelector(".categories-link-22").classList.remove("active");
  document.querySelector(".categories-link-23").classList.remove("active");
  document.querySelector(".categories-link-24").classList.remove("active");
  document.querySelector(".categories-link-25").classList.remove("active");
});
link16.addEventListener("mouseover", () => {
  link1.classList.remove("active");
  link2.classList.remove("active");
  link3.classList.remove("active");
  link4.classList.remove("active");
  link5.classList.remove("active");
  link6.classList.remove("active");
  link7.classList.remove("active");
  link8.classList.remove("active");
  link9.classList.remove("active");
  link10.classList.remove("active");
  link11.classList.remove("active");
  link12.classList.remove("active");
  link13.classList.remove("active");
  link14.classList.remove("active");
  link15.classList.remove("active");
  link16.classList.add("active");
  link17.classList.remove("active");
  link18.classList.remove("active");
  link19.classList.remove("active");
  link20.classList.remove("active");
  link21.classList.remove("active");
  link22.classList.remove("active");
  link23.classList.remove("active");
  link24.classList.remove("active");
  link25.classList.remove("active");

  document.querySelector(".categories-link-1").classList.remove("active");
  document.querySelector(".categories-link-2").classList.remove("active");
  document.querySelector(".categories-link-3").classList.remove("active");
  document.querySelector(".categories-link-4").classList.remove("active");
  document.querySelector(".categories-link-5").classList.remove("active");
  document.querySelector(".categories-link-6").classList.remove("active");
  document.querySelector(".categories-link-7").classList.remove("active");
  document.querySelector(".categories-link-8").classList.remove("active");
  document.querySelector(".categories-link-9").classList.remove("active");
  document.querySelector(".categories-link-10").classList.remove("active");
  document.querySelector(".categories-link-11").classList.remove("active");
  document.querySelector(".categories-link-12").classList.remove("active");
  document.querySelector(".categories-link-13").classList.remove("active");
  document.querySelector(".categories-link-14").classList.remove("active");
  document.querySelector(".categories-link-15").classList.remove("active");
  document.querySelector(".categories-link-16").classList.add("active");
  document.querySelector(".categories-link-17").classList.remove("active");
  document.querySelector(".categories-link-18").classList.remove("active");
  document.querySelector(".categories-link-19").classList.remove("active");
  document.querySelector(".categories-link-20").classList.remove("active");
  document.querySelector(".categories-link-21").classList.remove("active");
  document.querySelector(".categories-link-22").classList.remove("active");
  document.querySelector(".categories-link-23").classList.remove("active");
  document.querySelector(".categories-link-24").classList.remove("active");
  document.querySelector(".categories-link-25").classList.remove("active");
});
link17.addEventListener("mouseover", () => {
  link1.classList.remove("active");
  link2.classList.remove("active");
  link3.classList.remove("active");
  link4.classList.remove("active");
  link5.classList.remove("active");
  link6.classList.remove("active");
  link7.classList.remove("active");
  link8.classList.remove("active");
  link9.classList.remove("active");
  link10.classList.remove("active");
  link11.classList.remove("active");
  link12.classList.remove("active");
  link13.classList.remove("active");
  link14.classList.remove("active");
  link15.classList.remove("active");
  link16.classList.remove("active");
  link17.classList.add("active");
  link18.classList.remove("active");
  link19.classList.remove("active");
  link20.classList.remove("active");
  link21.classList.remove("active");
  link22.classList.remove("active");
  link23.classList.remove("active");
  link24.classList.remove("active");
  link25.classList.remove("active");

  document.querySelector(".categories-link-1").classList.remove("active");
  document.querySelector(".categories-link-2").classList.remove("active");
  document.querySelector(".categories-link-3").classList.remove("active");
  document.querySelector(".categories-link-4").classList.remove("active");
  document.querySelector(".categories-link-5").classList.remove("active");
  document.querySelector(".categories-link-6").classList.remove("active");
  document.querySelector(".categories-link-7").classList.remove("active");
  document.querySelector(".categories-link-8").classList.remove("active");
  document.querySelector(".categories-link-9").classList.remove("active");
  document.querySelector(".categories-link-10").classList.remove("active");
  document.querySelector(".categories-link-11").classList.remove("active");
  document.querySelector(".categories-link-12").classList.remove("active");
  document.querySelector(".categories-link-13").classList.remove("active");
  document.querySelector(".categories-link-14").classList.remove("active");
  document.querySelector(".categories-link-15").classList.remove("active");
  document.querySelector(".categories-link-16").classList.remove("active");
  document.querySelector(".categories-link-17").classList.add("active");
  document.querySelector(".categories-link-18").classList.remove("active");
  document.querySelector(".categories-link-19").classList.remove("active");
  document.querySelector(".categories-link-20").classList.remove("active");
  document.querySelector(".categories-link-21").classList.remove("active");
  document.querySelector(".categories-link-22").classList.remove("active");
  document.querySelector(".categories-link-23").classList.remove("active");
  document.querySelector(".categories-link-24").classList.remove("active");
  document.querySelector(".categories-link-25").classList.remove("active");
});
link18.addEventListener("mouseover", () => {
  link1.classList.remove("active");
  link2.classList.remove("active");
  link3.classList.remove("active");
  link4.classList.remove("active");
  link5.classList.remove("active");
  link6.classList.remove("active");
  link7.classList.remove("active");
  link8.classList.remove("active");
  link9.classList.remove("active");
  link10.classList.remove("active");
  link11.classList.remove("active");
  link12.classList.remove("active");
  link13.classList.remove("active");
  link14.classList.remove("active");
  link15.classList.remove("active");
  link16.classList.remove("active");
  link17.classList.remove("active");
  link18.classList.add("active");
  link19.classList.remove("active");
  link20.classList.remove("active");
  link21.classList.remove("active");
  link22.classList.remove("active");
  link23.classList.remove("active");
  link24.classList.remove("active");
  link25.classList.remove("active");

  document.querySelector(".categories-link-1").classList.remove("active");
  document.querySelector(".categories-link-2").classList.remove("active");
  document.querySelector(".categories-link-3").classList.remove("active");
  document.querySelector(".categories-link-4").classList.remove("active");
  document.querySelector(".categories-link-5").classList.remove("active");
  document.querySelector(".categories-link-6").classList.remove("active");
  document.querySelector(".categories-link-7").classList.remove("active");
  document.querySelector(".categories-link-8").classList.remove("active");
  document.querySelector(".categories-link-9").classList.remove("active");
  document.querySelector(".categories-link-10").classList.remove("active");
  document.querySelector(".categories-link-11").classList.remove("active");
  document.querySelector(".categories-link-12").classList.remove("active");
  document.querySelector(".categories-link-13").classList.remove("active");
  document.querySelector(".categories-link-14").classList.remove("active");
  document.querySelector(".categories-link-15").classList.remove("active");
  document.querySelector(".categories-link-16").classList.remove("active");
  document.querySelector(".categories-link-17").classList.remove("active");
  document.querySelector(".categories-link-18").classList.add("active");
  document.querySelector(".categories-link-19").classList.remove("active");
  document.querySelector(".categories-link-20").classList.remove("active");
  document.querySelector(".categories-link-21").classList.remove("active");
  document.querySelector(".categories-link-22").classList.remove("active");
  document.querySelector(".categories-link-23").classList.remove("active");
  document.querySelector(".categories-link-24").classList.remove("active");
  document.querySelector(".categories-link-25").classList.remove("active");
});
link19.addEventListener("mouseover", () => {
  link1.classList.remove("active");
  link2.classList.remove("active");
  link3.classList.remove("active");
  link4.classList.remove("active");
  link5.classList.remove("active");
  link6.classList.remove("active");
  link7.classList.remove("active");
  link8.classList.remove("active");
  link9.classList.remove("active");
  link10.classList.remove("active");
  link11.classList.remove("active");
  link12.classList.remove("active");
  link13.classList.remove("active");
  link14.classList.remove("active");
  link15.classList.remove("active");
  link16.classList.remove("active");
  link17.classList.remove("active");
  link18.classList.remove("active");
  link19.classList.add("active");
  link20.classList.remove("active");
  link21.classList.remove("active");
  link22.classList.remove("active");
  link23.classList.remove("active");
  link24.classList.remove("active");
  link25.classList.remove("active");

  document.querySelector(".categories-link-1").classList.remove("active");
  document.querySelector(".categories-link-2").classList.remove("active");
  document.querySelector(".categories-link-3").classList.remove("active");
  document.querySelector(".categories-link-4").classList.remove("active");
  document.querySelector(".categories-link-5").classList.remove("active");
  document.querySelector(".categories-link-6").classList.remove("active");
  document.querySelector(".categories-link-7").classList.remove("active");
  document.querySelector(".categories-link-8").classList.remove("active");
  document.querySelector(".categories-link-9").classList.remove("active");
  document.querySelector(".categories-link-10").classList.remove("active");
  document.querySelector(".categories-link-11").classList.remove("active");
  document.querySelector(".categories-link-12").classList.remove("active");
  document.querySelector(".categories-link-13").classList.remove("active");
  document.querySelector(".categories-link-14").classList.remove("active");
  document.querySelector(".categories-link-15").classList.remove("active");
  document.querySelector(".categories-link-16").classList.remove("active");
  document.querySelector(".categories-link-17").classList.remove("active");
  document.querySelector(".categories-link-18").classList.remove("active");
  document.querySelector(".categories-link-19").classList.add("active");
  document.querySelector(".categories-link-20").classList.remove("active");
  document.querySelector(".categories-link-21").classList.remove("active");
  document.querySelector(".categories-link-22").classList.remove("active");
  document.querySelector(".categories-link-23").classList.remove("active");
  document.querySelector(".categories-link-24").classList.remove("active");
  document.querySelector(".categories-link-25").classList.remove("active");
});
link20.addEventListener("mouseover", () => {
  link1.classList.remove("active");
  link2.classList.remove("active");
  link3.classList.remove("active");
  link4.classList.remove("active");
  link5.classList.remove("active");
  link6.classList.remove("active");
  link7.classList.remove("active");
  link8.classList.remove("active");
  link9.classList.remove("active");
  link10.classList.remove("active");
  link11.classList.remove("active");
  link12.classList.remove("active");
  link13.classList.remove("active");
  link14.classList.remove("active");
  link15.classList.remove("active");
  link16.classList.remove("active");
  link17.classList.remove("active");
  link18.classList.remove("active");
  link19.classList.remove("active");
  link20.classList.add("active");
  link21.classList.remove("active");
  link22.classList.remove("active");
  link23.classList.remove("active");
  link24.classList.remove("active");
  link25.classList.remove("active");

  document.querySelector(".categories-link-1").classList.remove("active");
  document.querySelector(".categories-link-2").classList.remove("active");
  document.querySelector(".categories-link-3").classList.remove("active");
  document.querySelector(".categories-link-4").classList.remove("active");
  document.querySelector(".categories-link-5").classList.remove("active");
  document.querySelector(".categories-link-6").classList.remove("active");
  document.querySelector(".categories-link-7").classList.remove("active");
  document.querySelector(".categories-link-8").classList.remove("active");
  document.querySelector(".categories-link-9").classList.remove("active");
  document.querySelector(".categories-link-10").classList.remove("active");
  document.querySelector(".categories-link-11").classList.remove("active");
  document.querySelector(".categories-link-12").classList.remove("active");
  document.querySelector(".categories-link-13").classList.remove("active");
  document.querySelector(".categories-link-14").classList.remove("active");
  document.querySelector(".categories-link-15").classList.remove("active");
  document.querySelector(".categories-link-16").classList.remove("active");
  document.querySelector(".categories-link-17").classList.remove("active");
  document.querySelector(".categories-link-18").classList.remove("active");
  document.querySelector(".categories-link-19").classList.remove("active");
  document.querySelector(".categories-link-20").classList.add("active");
  document.querySelector(".categories-link-21").classList.remove("active");
  document.querySelector(".categories-link-22").classList.remove("active");
  document.querySelector(".categories-link-23").classList.remove("active");
  document.querySelector(".categories-link-24").classList.remove("active");
  document.querySelector(".categories-link-25").classList.remove("active");
});
link21.addEventListener("mouseover", () => {
  link1.classList.remove("active");
  link2.classList.remove("active");
  link3.classList.remove("active");
  link4.classList.remove("active");
  link5.classList.remove("active");
  link6.classList.remove("active");
  link7.classList.remove("active");
  link8.classList.remove("active");
  link9.classList.remove("active");
  link10.classList.remove("active");
  link11.classList.remove("active");
  link12.classList.remove("active");
  link13.classList.remove("active");
  link14.classList.remove("active");
  link15.classList.remove("active");
  link16.classList.remove("active");
  link17.classList.remove("active");
  link18.classList.remove("active");
  link19.classList.remove("active");
  link20.classList.remove("active");
  link21.classList.add("active");
  link22.classList.remove("active");
  link23.classList.remove("active");
  link24.classList.remove("active");
  link25.classList.remove("active");

  document.querySelector(".categories-link-1").classList.remove("active");
  document.querySelector(".categories-link-2").classList.remove("active");
  document.querySelector(".categories-link-3").classList.remove("active");
  document.querySelector(".categories-link-4").classList.remove("active");
  document.querySelector(".categories-link-5").classList.remove("active");
  document.querySelector(".categories-link-6").classList.remove("active");
  document.querySelector(".categories-link-7").classList.remove("active");
  document.querySelector(".categories-link-8").classList.remove("active");
  document.querySelector(".categories-link-9").classList.remove("active");
  document.querySelector(".categories-link-10").classList.remove("active");
  document.querySelector(".categories-link-11").classList.remove("active");
  document.querySelector(".categories-link-12").classList.remove("active");
  document.querySelector(".categories-link-13").classList.remove("active");
  document.querySelector(".categories-link-14").classList.remove("active");
  document.querySelector(".categories-link-15").classList.remove("active");
  document.querySelector(".categories-link-16").classList.remove("active");
  document.querySelector(".categories-link-17").classList.remove("active");
  document.querySelector(".categories-link-18").classList.remove("active");
  document.querySelector(".categories-link-19").classList.remove("active");
  document.querySelector(".categories-link-20").classList.remove("active");
  document.querySelector(".categories-link-21").classList.add("active");
  document.querySelector(".categories-link-22").classList.remove("active");
  document.querySelector(".categories-link-23").classList.remove("active");
  document.querySelector(".categories-link-24").classList.remove("active");
  document.querySelector(".categories-link-25").classList.remove("active");
});
link22.addEventListener("mouseover", () => {
  link1.classList.remove("active");
  link2.classList.remove("active");
  link3.classList.remove("active");
  link4.classList.remove("active");
  link5.classList.remove("active");
  link6.classList.remove("active");
  link7.classList.remove("active");
  link8.classList.remove("active");
  link9.classList.remove("active");
  link10.classList.remove("active");
  link11.classList.remove("active");
  link12.classList.remove("active");
  link13.classList.remove("active");
  link14.classList.remove("active");
  link15.classList.remove("active");
  link16.classList.remove("active");
  link17.classList.remove("active");
  link18.classList.remove("active");
  link19.classList.remove("active");
  link20.classList.remove("active");
  link21.classList.remove("active");
  link22.classList.add("active");
  link23.classList.remove("active");
  link24.classList.remove("active");
  link25.classList.remove("active");

  document.querySelector(".categories-link-1").classList.remove("active");
  document.querySelector(".categories-link-2").classList.remove("active");
  document.querySelector(".categories-link-3").classList.remove("active");
  document.querySelector(".categories-link-4").classList.remove("active");
  document.querySelector(".categories-link-5").classList.remove("active");
  document.querySelector(".categories-link-6").classList.remove("active");
  document.querySelector(".categories-link-7").classList.remove("active");
  document.querySelector(".categories-link-8").classList.remove("active");
  document.querySelector(".categories-link-9").classList.remove("active");
  document.querySelector(".categories-link-10").classList.remove("active");
  document.querySelector(".categories-link-11").classList.remove("active");
  document.querySelector(".categories-link-12").classList.remove("active");
  document.querySelector(".categories-link-13").classList.remove("active");
  document.querySelector(".categories-link-14").classList.remove("active");
  document.querySelector(".categories-link-15").classList.remove("active");
  document.querySelector(".categories-link-16").classList.remove("active");
  document.querySelector(".categories-link-17").classList.remove("active");
  document.querySelector(".categories-link-18").classList.remove("active");
  document.querySelector(".categories-link-19").classList.remove("active");
  document.querySelector(".categories-link-20").classList.remove("active");
  document.querySelector(".categories-link-21").classList.remove("active");
  document.querySelector(".categories-link-22").classList.add("active");
  document.querySelector(".categories-link-23").classList.remove("active");
  document.querySelector(".categories-link-24").classList.remove("active");
  document.querySelector(".categories-link-25").classList.remove("active");
});
link23.addEventListener("mouseover", () => {
  link1.classList.remove("active");
  link2.classList.remove("active");
  link3.classList.remove("active");
  link4.classList.remove("active");
  link5.classList.remove("active");
  link6.classList.remove("active");
  link7.classList.remove("active");
  link8.classList.remove("active");
  link9.classList.remove("active");
  link10.classList.remove("active");
  link11.classList.remove("active");
  link12.classList.remove("active");
  link13.classList.remove("active");
  link14.classList.remove("active");
  link15.classList.remove("active");
  link16.classList.remove("active");
  link17.classList.remove("active");
  link18.classList.remove("active");
  link19.classList.remove("active");
  link20.classList.remove("active");
  link21.classList.remove("active");
  link22.classList.remove("active");
  link23.classList.add("active");
  link24.classList.remove("active");
  link25.classList.remove("active");

  document.querySelector(".categories-link-1").classList.remove("active");
  document.querySelector(".categories-link-2").classList.remove("active");
  document.querySelector(".categories-link-3").classList.remove("active");
  document.querySelector(".categories-link-4").classList.remove("active");
  document.querySelector(".categories-link-5").classList.remove("active");
  document.querySelector(".categories-link-6").classList.remove("active");
  document.querySelector(".categories-link-7").classList.remove("active");
  document.querySelector(".categories-link-8").classList.remove("active");
  document.querySelector(".categories-link-9").classList.remove("active");
  document.querySelector(".categories-link-10").classList.remove("active");
  document.querySelector(".categories-link-11").classList.remove("active");
  document.querySelector(".categories-link-12").classList.remove("active");
  document.querySelector(".categories-link-13").classList.remove("active");
  document.querySelector(".categories-link-14").classList.remove("active");
  document.querySelector(".categories-link-15").classList.remove("active");
  document.querySelector(".categories-link-16").classList.remove("active");
  document.querySelector(".categories-link-17").classList.remove("active");
  document.querySelector(".categories-link-18").classList.remove("active");
  document.querySelector(".categories-link-19").classList.remove("active");
  document.querySelector(".categories-link-20").classList.remove("active");
  document.querySelector(".categories-link-21").classList.remove("active");
  document.querySelector(".categories-link-22").classList.remove("active");
  document.querySelector(".categories-link-23").classList.add("active");
  document.querySelector(".categories-link-24").classList.remove("active");
  document.querySelector(".categories-link-25").classList.remove("active");
});
link24.addEventListener("mouseover", () => {
  link1.classList.remove("active");
  link2.classList.remove("active");
  link3.classList.remove("active");
  link4.classList.remove("active");
  link5.classList.remove("active");
  link6.classList.remove("active");
  link7.classList.remove("active");
  link8.classList.remove("active");
  link9.classList.remove("active");
  link10.classList.remove("active");
  link11.classList.remove("active");
  link12.classList.remove("active");
  link13.classList.remove("active");
  link14.classList.remove("active");
  link15.classList.remove("active");
  link16.classList.remove("active");
  link17.classList.remove("active");
  link18.classList.remove("active");
  link19.classList.remove("active");
  link20.classList.remove("active");
  link21.classList.remove("active");
  link22.classList.remove("active");
  link23.classList.remove("active");
  link24.classList.add("active");
  link25.classList.remove("active");

  document.querySelector(".categories-link-1").classList.remove("active");
  document.querySelector(".categories-link-2").classList.remove("active");
  document.querySelector(".categories-link-3").classList.remove("active");
  document.querySelector(".categories-link-4").classList.remove("active");
  document.querySelector(".categories-link-5").classList.remove("active");
  document.querySelector(".categories-link-6").classList.remove("active");
  document.querySelector(".categories-link-7").classList.remove("active");
  document.querySelector(".categories-link-8").classList.remove("active");
  document.querySelector(".categories-link-9").classList.remove("active");
  document.querySelector(".categories-link-10").classList.remove("active");
  document.querySelector(".categories-link-11").classList.remove("active");
  document.querySelector(".categories-link-12").classList.remove("active");
  document.querySelector(".categories-link-13").classList.remove("active");
  document.querySelector(".categories-link-14").classList.remove("active");
  document.querySelector(".categories-link-15").classList.remove("active");
  document.querySelector(".categories-link-16").classList.remove("active");
  document.querySelector(".categories-link-17").classList.remove("active");
  document.querySelector(".categories-link-18").classList.remove("active");
  document.querySelector(".categories-link-19").classList.remove("active");
  document.querySelector(".categories-link-20").classList.remove("active");
  document.querySelector(".categories-link-21").classList.remove("active");
  document.querySelector(".categories-link-22").classList.remove("active");
  document.querySelector(".categories-link-23").classList.remove("active");
  document.querySelector(".categories-link-24").classList.add("active");
  document.querySelector(".categories-link-25").classList.remove("active");
});
link25.addEventListener("mouseover", () => {
  link1.classList.remove("active");
  link2.classList.remove("active");
  link3.classList.remove("active");
  link4.classList.remove("active");
  link5.classList.remove("active");
  link6.classList.remove("active");
  link7.classList.remove("active");
  link8.classList.remove("active");
  link9.classList.remove("active");
  link10.classList.remove("active");
  link11.classList.remove("active");
  link12.classList.remove("active");
  link13.classList.remove("active");
  link14.classList.remove("active");
  link15.classList.remove("active");
  link16.classList.remove("active");
  link17.classList.remove("active");
  link18.classList.remove("active");
  link19.classList.remove("active");
  link20.classList.remove("active");
  link21.classList.remove("active");
  link22.classList.remove("active");
  link23.classList.remove("active");
  link24.classList.remove("active");
  link25.classList.add("active");

  document.querySelector(".categories-link-1").classList.remove("active");
  document.querySelector(".categories-link-2").classList.remove("active");
  document.querySelector(".categories-link-3").classList.remove("active");
  document.querySelector(".categories-link-4").classList.remove("active");
  document.querySelector(".categories-link-5").classList.remove("active");
  document.querySelector(".categories-link-6").classList.remove("active");
  document.querySelector(".categories-link-7").classList.remove("active");
  document.querySelector(".categories-link-8").classList.remove("active");
  document.querySelector(".categories-link-9").classList.remove("active");
  document.querySelector(".categories-link-10").classList.remove("active");
  document.querySelector(".categories-link-11").classList.remove("active");
  document.querySelector(".categories-link-12").classList.remove("active");
  document.querySelector(".categories-link-13").classList.remove("active");
  document.querySelector(".categories-link-14").classList.remove("active");
  document.querySelector(".categories-link-15").classList.remove("active");
  document.querySelector(".categories-link-16").classList.remove("active");
  document.querySelector(".categories-link-17").classList.remove("active");
  document.querySelector(".categories-link-18").classList.remove("active");
  document.querySelector(".categories-link-19").classList.remove("active");
  document.querySelector(".categories-link-20").classList.remove("active");
  document.querySelector(".categories-link-21").classList.remove("active");
  document.querySelector(".categories-link-22").classList.remove("active");
  document.querySelector(".categories-link-23").classList.remove("active");
  document.querySelector(".categories-link-24").classList.remove("active");
  document.querySelector(".categories-link-25").classList.add("active");
});
// ********************
// ********************
// ********************
// ********************
// ********************
// аккордеон
class ItcAccordion {
  constructor(target, config) {
    this._el =
      typeof target === "string" ? document.querySelector(target) : target;
    const defaultConfig = {
      alwaysOpen: true,
      duration: 350,
    };
    this._config = Object.assign(defaultConfig, config);
    this.addEventListener();
  }
  addEventListener() {
    this._el.addEventListener("click", (e) => {
      const elHeader = e.target.closest(".accordion__header");
      if (!elHeader) {
        return;
      }
      if (!this._config.alwaysOpen) {
        const elOpenItem = this._el.querySelector(".accordion__item_show");
        if (elOpenItem) {
          elOpenItem !== elHeader.parentElement
            ? this.toggle(elOpenItem)
            : null;
        }
      }
      this.toggle(elHeader.parentElement);
    });
  }
  show(el) {
    const elBody = el.querySelector(".accordion__body");
    if (
      elBody.classList.contains("collapsing") ||
      el.classList.contains("accordion__item_show")
    ) {
      return;
    }
    elBody.style["display"] = "block";
    const height = elBody.offsetHeight;
    elBody.style["height"] = 0;
    elBody.style["overflow"] = "hidden";
    elBody.style["transition"] = `height ${this._config.duration}ms ease`;
    elBody.classList.add("collapsing");
    el.classList.add("accordion__item_slidedown");
    elBody.offsetHeight;
    elBody.style["height"] = `${height}px`;
    window.setTimeout(() => {
      elBody.classList.remove("collapsing");
      el.classList.remove("accordion__item_slidedown");
      elBody.classList.add("collapse");
      el.classList.add("accordion__item_show");
      elBody.style["display"] = "";
      elBody.style["height"] = "";
      elBody.style["transition"] = "";
      elBody.style["overflow"] = "";
    }, this._config.duration);
  }
  hide(el) {
    const elBody = el.querySelector(".accordion__body");
    if (
      elBody.classList.contains("collapsing") ||
      !el.classList.contains("accordion__item_show")
    ) {
      return;
    }
    elBody.style["height"] = `${elBody.offsetHeight}px`;
    elBody.offsetHeight;
    elBody.style["display"] = "block";
    elBody.style["height"] = 0;
    elBody.style["overflow"] = "hidden";
    elBody.style["transition"] = `height ${this._config.duration}ms ease`;
    elBody.classList.remove("collapse");
    el.classList.remove("accordion__item_show");
    elBody.classList.add("collapsing");
    window.setTimeout(() => {
      elBody.classList.remove("collapsing");
      elBody.classList.add("collapse");
      elBody.style["display"] = "";
      elBody.style["height"] = "";
      elBody.style["transition"] = "";
      elBody.style["overflow"] = "";
    }, this._config.duration);
  }
  toggle(el) {
    el.classList.contains("accordion__item_show")
      ? this.hide(el)
      : this.show(el);
  }
}

new ItcAccordion(document.querySelector(".accordion"), {
  alwaysOpen: true,
});