const imagesCard = document.querySelectorAll(
  ".product-card__slider-line .product-card__slider-img"
);
const sliderLineCard = document.querySelector(".product-card__slider-line");
let dotsCard = document.querySelectorAll(".product-card__dots-item"),
  dotsAreaCard = document.querySelector(".product-card__dots");
let countCard = 0;
let widthCard;
function initCard() {
  //console.log('resize');
  widthCard = document.querySelector(".product-card__slider").offsetWidth;
  sliderLineCard.style.width = widthCard * imagesCard.length + "px";
  imagesCard.forEach((item) => {
    item.style.width = widthCard + "px";
    item.style.height = "auto";
  });
  rollSliderCard();
}
// var timerCard = 0;
// makeTimerCard(); //Создаем интервал
// function makeTimerCard() {
//   clearInterval(timerCard); //Очистим интервал, это позволит прервать его работу и отменить перелистывание
//   timerCard = setInterval(function () {
//     scrollSlideCard(1);
//     rollSliderCard(countCard);
//   }, 5000);
// }

initCard();
window.addEventListener("resize", () => {
  initCard();
  // проверка разрешения для зума картинки в слайдере
  if (window.innerWidth >= 1024) {
    zoomImgSlider();
  }
});

document
  .querySelector(".product-card__button-next")
  .addEventListener("click", () => scrollSlideCard(1));

document
  .querySelector(".product-card__button-prev")
  .addEventListener("click", () => scrollSlideCard(-1));

dotsCard.forEach((dotCard, indexCard) =>
  dotCard.addEventListener("click", () => {
    setSlideCard(indexCard);
    dotCard.addEventListener("click", () => {
      dotCard.scrollIntoView({
        behavior: "smooth",
        block: "nearest",
        inline: "start",
      });
    });
  })
);

function scrollSlideCard(directionCard) {
  countCard =
    (countCard + directionCard + imagesCard.length) % imagesCard.length;
  moveSlideCard();
}

function setSlideCard(indexCard) {
  countCard = indexCard;
  dotsCard.forEach((dotCard, indexCard) => {
    dotCard.addEventListener("click", () => {
      dotCard.scrollIntoView({
        behavior: "smooth",
        block: "nearest",
        inline: "start",
      });
    });
  });
  moveSlideCard();
}

const btnColors = document.querySelectorAll(".product-card__button-cards-item");
btn2 = document.querySelector(".btn2");
const colorCard = document.querySelector(".color-card");
const texts = document.querySelectorAll(".text");
if (btn2 != null) {
  btn2.addEventListener("click", () => {
    document.querySelector(".imgBtn2").click();
    for (i = 0; i < btnColors.length; i++) {
      btnColors[i].classList.remove("target");
    }
    btn2.classList.add("target");
    texts.forEach((text) => {
      if (text.closest(".btn2")) {
        colorCard.innerHTML = text.innerHTML;
      }
    });
  });
}

function moveSlideCard() {
  document
    .querySelector(".product-card__dots-item.active")
    .classList.remove("active");
  document
    .querySelectorAll(".product-card__dots-item")
    [countCard].classList.add("active");
  document
    .querySelectorAll(".product-card__dots-item")
    [countCard].scrollIntoView({
      behavior: "smooth",
      block: "nearest",
      inline: "start",
    });

  rollSliderCard();
  //   makeTimerCard();
}

function rollSliderCard() {
  sliderLineCard.style.transform =
    "translate(-" + countCard * widthCard + "px)";
}
// счетчик товара
let count = document.querySelector(".counter-result"),
  // переменные для расчета цены
  // актуальная цена
  PriceCard = document.querySelector(".product-card__price-new").textContent;
Price = parseInt(String(PriceCard).replace(/ /g, ""));
newPriceCard = document.querySelector(".product-card__price-new");
// старая цена
PriceCardOld = document.querySelector(".product-card__price-old").textContent;
PriceOld = parseInt(String(PriceCardOld).replace(/ /g, ""));
oldPriceCard = document.querySelector(".product-card__price-old");
//
count.setAttribute(
  "max",
  document.querySelector("#allItemsProducts").innerHTML
);
count.setAttribute("min", 1);
count.value = 1;
// вписать значение в инпут
count.addEventListener("focus", () => {
  document.querySelector(".product-card__counter").classList.add("focus");
});
count.addEventListener("blur", () => {
  document.querySelector(".product-card__counter").classList.remove("focus");
});
// изменение количества в инпуте путем добавление числа вводом
count.addEventListener("keydown", (event) => {
  if (event.keyCode === 13) {
    event.preventDefault();
    count.value = count.value;
    newPriceCard.textContent = (Price * count.value + " ₽")
      .toString()
      .replace(/\B(?=(\d{3})+(?!\d))/g, " ");
    oldPriceCard.textContent = (PriceOld * count.value + " ₽")
      .toString()
      .replace(/\B(?=(\d{3})+(?!\d))/g, " ");
  }
  if (
    event.keyCode === 13 &&
    count.value > document.querySelector("#allItemsProducts").innerHTML - 1
  ) {
    count.value = count.max;
    newPriceCard.textContent = (Price * count.max + " ₽")
      .toString()
      .replace(/\B(?=(\d{3})+(?!\d))/g, " ");
    oldPriceCard.textContent = (PriceOld * count.max + " ₽")
      .toString()
      .replace(/\B(?=(\d{3})+(?!\d))/g, " ");
    return;
  }
  if (event.keyCode === 13 && count.value == 0) {
    count.value = 1;
    newPriceCard.textContent = (Price + " ₽")
      .toString()
      .replace(/\B(?=(\d{3})+(?!\d))/g, " ");
    oldPriceCard.textContent = (PriceOld + " ₽")
      .toString()
      .replace(/\B(?=(\d{3})+(?!\d))/g, " ");
    return;
  }
});
// прибавить +1 к значение инпута
document.getElementById("buttonCountPlus").onclick = function () {
  let countPlus = count.value;
  if (+countPlus <= document.querySelector("#allItemsProducts").innerHTML - 1) {
    count.value++;
    newPriceCard.textContent = (Price * count.value + " ₽")
      .toString()
      .replace(/\B(?=(\d{3})+(?!\d))/g, " ");
    oldPriceCard.textContent = (PriceOld * count.value + " ₽")
      .toString()
      .replace(/\B(?=(\d{3})+(?!\d))/g, " ");
  }
};
// убаить -1 к значению инпута
document.getElementById("buttonCountMinus").onclick = function () {
  let countMinus = count.value;
  if (+countMinus >= 2) {
    count.value--;
    // отнятие суммы от новый цены
    let priceAll = newPriceCard.textContent;
    priceAllConvert = parseInt(String(priceAll).replace(/ /g, ""));
    newPriceCard.textContent = (priceAllConvert - Price + " ₽")
      .toString()
      .replace(/\B(?=(\d{3})+(?!\d))/g, " ");
    // отнятие суммые от старой цены
    let priceAllOld = oldPriceCard.textContent;
    priceAllConvertOld = parseInt(String(priceAllOld).replace(/ /g, ""));
    oldPriceCard.textContent = (priceAllConvertOld - PriceOld + " ₽")
      .toString()
      .replace(/\B(?=(\d{3})+(?!\d))/g, " ");
  }
};
// рассчитывание скидки
let OldPrice = document.querySelector(".product-card__price-old").textContent;
let NewPrice = document.querySelector(".product-card__price-new");
let SaleCount = document.querySelector(".product-card__sale").textContent;
SaleCountChar = parseInt(SaleCount.match(/\d+/));
OldPriceChar = parseInt(OldPrice.match(/\d+/));
NewPrice.textContent =
  Math.floor(OldPriceChar - (OldPriceChar * SaleCountChar) / 100) + " ₽";

// переключение секций
const btnDescription = document.querySelector("#btn-description"),
  btnFeedback = document.querySelector("#btn-feedback"),
  btnApplicability = document.querySelector("#btn-applicability"),
  btnInstruction = document.querySelector("#btn-instruction"),
  photoBtn = document.querySelector("#photo-instructions"),
  videoBtn = document.querySelector("#video-instructions");

(sectionDescription = document.querySelector(".description")),
  (sectionFeedback = document.querySelector(".feedback")),
  (sectionApplicability = document.querySelector(".applicability")),
  (sectionInstruction = document.querySelector(".instruction")),
  (points = document.querySelectorAll(".points__item")),
  (btnFeedBack2 = document.querySelector(".product-card__top-link"));
btnDescription.addEventListener("click", () => {
  sectionDescription.classList.add("active");
  sectionFeedback.classList.remove("active");
  sectionApplicability.classList.remove("active");
  sectionInstruction.classList.remove("active");
  document.querySelector(".points-description").classList.add("active");
  document.querySelector(".points-feedback").classList.remove("active");
  document.querySelector(".points-instruction").classList.remove("active");
  document.querySelector(".points-applicability").classList.remove("active");
});
btnFeedback.addEventListener("click", () => {
  sectionDescription.classList.remove("active");
  sectionFeedback.classList.add("active");
  sectionApplicability.classList.remove("active");
  sectionInstruction.classList.remove("active");
  document.querySelector(".points-description").classList.remove("active");
  document.querySelector(".points-feedback").classList.add("active");
  document.querySelector(".points-instruction").classList.remove("active");
  document.querySelector(".points-applicability").classList.remove("active");
});
btnApplicability.addEventListener("click", () => {
  sectionDescription.classList.remove("active");
  sectionFeedback.classList.remove("active");
  sectionApplicability.classList.add("active");
  sectionInstruction.classList.remove("active");
  document.querySelector(".points-description").classList.remove("active");
  document.querySelector(".points-feedback").classList.remove("active");
  document.querySelector(".points-instruction").classList.remove("active");
  document.querySelector(".points-applicability").classList.add("active");
});
btnInstruction.addEventListener("click", () => {
  sectionDescription.classList.remove("active");
  sectionFeedback.classList.remove("active");
  sectionApplicability.classList.remove("active");
  sectionInstruction.classList.add("active");
  document.querySelector(".points-description").classList.remove("active");
  document.querySelector(".points-feedback").classList.remove("active");
  document.querySelector(".points-instruction").classList.add("active");
  document.querySelector(".points-applicability").classList.remove("active");
  initInstruction();
});
btnFeedBack2.addEventListener("click", () => {
  btnFeedback.click();
  sectionFeedback.scrollIntoView({ block: "center", behavior: "smooth" });
});

photoBtn.addEventListener("click", () => {
  photoBtn.classList.add("active");
  document.querySelector(".instruction__slider").classList.add("active");
  videoBtn.classList.remove("active");
  document.querySelector(".instruction__video").classList.remove("active");
  initInstruction();
});
videoBtn.addEventListener("click", () => {
  photoBtn.classList.remove("active");
  document.querySelector(".instruction__slider").classList.remove("active");
  videoBtn.classList.add("active");
  document.querySelector(".instruction__video").classList.add("active");
});

// зум картинки в слайдере
const sliderCardImg = document.querySelectorAll(".product-card__slider-img");
const zoomContainer = document.querySelector(".img-zoom-result");
function zoomImgSlider() {
  sliderCardImg.forEach((item) => {
    item.addEventListener("mousemove", (e) => {
      e.preventDefault();
      zoomContainer.style.display = "block";
      let imageSrc = item.getAttribute("src");
      zoomContainer.style.backgroundImage = `url("${imageSrc}")`;
      e.offsetX ? (offsetX = e.offsetX) : (offsetX = e.pageX);
      e.offsetY ? (offsetY = e.offsetY) : (offsetX = e.pageX);
      x = (offsetX / item.offsetWidth) * 100;
      y = (offsetY / item.offsetHeight) * 100;
      zoomContainer.style.backgroundPosition = x + "% " + y + "%";
    });
    item.addEventListener("mouseleave", () => {
      zoomContainer.style.backgroundImage = `url("")`;
      zoomContainer.style.display = "none";
    });
  });
}
// проверка разрешения для зума картинки в слайдере
if (window.matchMedia("only screen and (min-width: 1024px)").matches) {
  zoomImgSlider();
} else {
  let startX = 0,
    startY = 0,
    moveX = 0,
    moveY = 0;
  sliderLineCard.addEventListener("touchstart", touchStart);
  sliderLineCard.addEventListener("touchmove", touchMove);
  sliderLineCard.addEventListener("touchend", touchEnd);
  function touchStart(e) {
    startX = e.changedTouches[0].screenX;
    // startY = e.changedTouches[0].clientY ;
  }

  function touchMove(e) {
    moveX = e.changedTouches[0].screenX;
    // moveY = e.changedTouches[0].clientY ;
  }
  function touchEnd() {
    if (startX + 100 < moveX) {
      // console.log('right');
      scrollSlideCard(-1);
    } else if (startX - 100 > moveX) {
      // console.log('left');
      scrollSlideCard(1);
    }
    if (startY + 100 < moveY) {
      // console.log('down');
    } else if (startY - 100 > moveY) {
      // console.log('up');
    }
  }
}
const clickImgPopupSlider = document.querySelectorAll(
  ".product-card__slider-img"
);
const sliderWrapper = document.querySelector(".slider__wrapper");
const popupClose = document.querySelector(".popup-close");
clickImgPopupSlider.forEach((img) => {
  img.addEventListener("click", (e) => {
    if (e.target === img) {
      sliderWrapper.classList.add("popup");
      sliderWrapper.style.maxHeight = "100%";
      document.querySelector(".product-card__slider").style.maxHeight = "100%";
      document.querySelector(
        ".product-card__wrapper-img-slide"
      ).style.maxHeight = "100%";
      document.querySelector(".product-card__slider-line").style.maxHeight =
        "100%";
      document.body.style.overflow = "hidden";
      zoomContainer.style.backgroundImage = `url("")`;
      zoomContainer.style.display = "none";
      zoomContainer.style.opacity = "0";
      zoomContainer.style.zIndex = "-100";
      popupClose.style.display = "block";
      initCard();
    }
  });
});
// закрытие окна при нажатии на крестик
popupClose.addEventListener("click", () => {
  sliderWrapper.classList.remove("popup");
  document.body.style.overflow = "";
  popupClose.style.display = "none";
  sliderWrapper.style.maxHeight = "100%";
  document.querySelector(".product-card__slider").style.maxHeight = "658px";
  document.querySelector(".product-card__wrapper-img-slide").style.maxHeight =
    "658px";
  document.querySelector(".product-card__slider-line").style.maxHeight =
    "658px";
  document.querySelector(".product-card__dots").style.maxHeight = "658px";
  moveSlideCard();
  initCard();
  if (window.matchMedia("only screen and (min-width: 1024px)").matches) {
    zoomContainer.style.backgroundImage = `url("")`;
    zoomContainer.style.opacity = "1";
    zoomContainer.style.zIndex = "9999";
  }
});
// закрытие окна при нажатии на кнопку ESC
document.addEventListener("keydown", (event) => {
  if (event.key === "Escape") {
    sliderWrapper.classList.remove("popup");
    document.body.style.overflow = "";
    popupClose.style.display = "none";
    moveSlideCard();
    initCard();
    if (window.matchMedia("only screen and (min-width: 1024px)").matches) {
      zoomContainer.style.backgroundImage = `url("")`;
      zoomContainer.style.opacity = "1";
      zoomContainer.style.zIndex = "9999";
    }
  }
});
//
let startMousePos = 0;
sliderLineCard.addEventListener("mousedown", (event) => {
  startMousePos = event.clientX;
});
sliderLineCard.addEventListener("mouseup", (event) => {
  if (startMousePos - event.clientX > 100) {
    scrollSlideCard(1);
  }
  if (startMousePos - event.clientX < -100) {
    scrollSlideCard(-1);
  }
});

// пагинация
// выбор требуемого элемента
const element = document.querySelector(".instruction__dots-block");
const imgCountPages = document.querySelectorAll(
  ".instruction__slider-img"
).length;
let totalPages = imgCountPages;
let page = 1;

// вызов функции с передачей параметров и добавлением внутреннего элемента, который является тегом ul
element.innerHTML = createPagination(totalPages, page);
function createPagination(totalPages, page) {
  let liTag = "";
  let active;
  let beforePage = page - 1;
  let afterPage = page + 1;
  if (page > 1) {
    // показать следующую кнопку, если значение страницы больше 1
    liTag += `<div class="btn prev" onclick="createPagination(totalPages, ${page - 1})">Предыдущая</div>`;
  }

  if (page > 2) {
    //	если значение страницы меньше 2, то добавьте 1 после предыдущей кнопки
    liTag += `<div class="instruction__dots-item" onclick="createPagination(totalPages, 1)"><span>1</span></div>`;
    if (page > 3) {
      // если значение страницы больше 3, добавьте это (...) после первого li или страницы
      liTag += `<div class="dots"><span>...</span></div>`;
    }
  }

  // сколько страниц или файлов отображается перед текущей строкой
  if (page == totalPages) {
    beforePage = beforePage - 2;
  } else if (page == totalPages - 1) {
    beforePage = beforePage - 1;
  }
  // сколько страниц или файлов отображается после текущей строки
  if (page == 1) {
    afterPage = afterPage + 1;
  } else if (page == 3) {
    afterPage = afterPage;
  }

  for (let plength = beforePage; plength <= afterPage; plength++) {
    if (plength > totalPages) {
      // если длина больше общей длины страницы, продолжайте
      continue;
    }
    if (plength == 0) {
      // если длина p равна 0, то добавьте +1 к значению длины
      plength = plength + 1;
    }
    if (page == plength) {
      // если страница равна длине, то назначьте активную строку в активной переменной
      active = "active";
    } else {
      // в противном случае оставьте активную переменную пустой
      active = "";
    }
    liTag += `<div class="instruction__dots-item ${active}" onclick="createPagination(totalPages, ${plength})"><span>${plength}</span></div>`;
  }

  if (page < totalPages - 1) {
    // если значение страницы меньше значения totalPage на -1, то отображается последняя страница lior
    if (page < totalPages - 2) {
      // если значение страницы меньше значения totalPage на -2, добавьте это (...) перед последней страницей lior
      liTag += `<div class="dots"><span>...</span></div>`;
    }
    liTag += `
	<div class="instruction__dots-item" onclick="createPagination(totalPages, ${totalPages})"><span>${totalPages}</span></div>`;
  }

  if (page < totalPages) {
    // показать следующую кнопку, если значение страницы меньше, чем общая страница(20)
    liTag += `<div class="btn next" onclick="createPagination(totalPages, ${page + 1});">Следующая</div>`;
  }
  element.innerHTML = liTag; // добавить тег li внутри тега ul
  return liTag; // верните тег li
}

// слайдер в секции инструкции
const imagesInstruction = document.querySelectorAll(".instruction__slider-img");
const sliderLineInstruction = document.querySelector(
  ".instruction__slider-line"
);
let dotsInstruction = document.querySelectorAll(".instruction__dots-item"),
  dotsAreaInstruction = document.querySelector(".instruction__dots-block");
let countInstruction = 0;
let widthInstruction;

function initInstruction() {
  //console.log('resize');
  widthInstruction = document.querySelector(".instruction__slider").offsetWidth;
  sliderLineInstruction.style.width =
    widthInstruction * imagesInstruction.length + "px";
  imagesInstruction.forEach((item) => {
    item.style.width = widthInstruction + "px";
    item.style.height = "auto";
  });
  rollSliderInstruction();
}

initInstruction();
window.addEventListener("resize", initInstruction);

document
  .querySelector(".instruction__slider-next")
  .addEventListener("click", () => {
    scrollSlideInstruction(1);
  });

document
  .querySelector(".instruction__slider-prev")
  .addEventListener("click", () => scrollSlideInstruction(-1));

dotsInstruction.forEach((dot, index) =>
  dot.addEventListener("click", () => {
    setSlideInstruction(index);
  })
);
function scrollSlideInstruction(direction) {
  countInstruction =
    (countInstruction + direction + imagesInstruction.length) %
    imagesInstruction.length;
  moveSlideInstruction();
}

function setSlideInstruction(index) {
  countInstruction = index;
  moveSlideInstruction();
}

function moveSlideInstruction() {
  document
    .querySelector(".instruction__dots-item.active")
    .classList.remove("active");
  document
    .querySelectorAll(".instruction__dots-item")
    [countInstruction].classList.add("active");

  rollSliderInstruction();
}

function rollSliderInstruction() {
  sliderLineInstruction.style.transform =
    "translate(-" + countInstruction * widthInstruction + "px)";
}
//   свайп слайдера
const isMobile = window.matchMedia("only screen and (max-width: 479px)");

if (isMobile.matches) {
  let startXInstruction = 0,
    startYInstruction = 0,
    moveXInstruction = 0,
    moveYInstruction = 0;
  sliderLineInstruction.addEventListener("touchstart", touchStartInstruction);
  sliderLineInstruction.addEventListener("touchmove", touchMoveInstruction);
  sliderLineInstruction.addEventListener("touchend", touchEndInstruction);
  function touchStartInstruction(e) {
    startXInstruction = e.changedTouches[0].screenX;
    // startY = e.changedTouches[0].clientY ;
  }

  function touchMoveInstruction(e) {
    moveXInstruction = e.changedTouches[0].screenX;
    // moveY = e.changedTouches[0].clientY ;
  }
  function touchEndInstruction() {
    if (startXInstruction + 100 < moveXInstruction) {
      // console.log('right');
      scrollSlideInstruction(-1);
    } else if (startXInstruction - 100 > moveXInstruction) {
      // console.log('left');
      scrollSlideInstruction(1);
    }
    if (startYInstruction + 100 < moveYInstruction) {
      // console.log('down');
    } else if (startYInstruction - 100 > moveYInstruction) {
      // console.log('up');
    }
  }
}
