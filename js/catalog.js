const btnOpenCatalog = document.querySelector(".catalog"),
  catalog = document.querySelector(".modal__catalog"),
  catalogTransition = document.querySelector(".catalog__background");
let items = document.querySelectorAll(".item-link-dropdown");

btnOpenCatalog.onclick = () => {
  catalogTransition.classList.toggle("active");
  catalog.classList.toggle("active");
  document.querySelector(".catalog-icon").classList.toggle("open");
};

function test() {
  document.querySelectorAll(".content").forEach((item) => {
    item.style.display = "none";
  });
}
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
      setTimeout(test, 200);
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
// переключение пунктов в каталоге при наведении мыши
const links = document.querySelectorAll(".catalog__item-link"),
  catagoriesView = document.querySelectorAll(".main-categories");
const mapArray = [...links].map((link, idX) => {
  return {
    link,
    category: catagoriesView[idX],
  };
});
links.forEach((item) => {
  item.addEventListener("mouseover", (event) => {
    mapArray.forEach((element) => {
      if (element.link.className === event.currentTarget.className) {
        element.link.classList.add("active");
        element.category.classList.add("active");
      } else {
        element.link.classList.remove("active");
        element.category.classList.remove("active");
      }
    });
  });
});
// переключение пунктов в каталоге по клику на кнопки
const buttons = document.querySelectorAll(".mobile-catalog__categories"),
  buttonsView = document.querySelectorAll(".content");
const mobilMapArray = [...buttons].map((button, idBtnX) => {
  return {
    button,
    mobileCategory: buttonsView[idBtnX],
  };
});
buttons.forEach((item) => {
  item.addEventListener("click", (event) => {
    document.querySelector("#all").classList.add("active");
    mobilMapArray.forEach((element) => {
      if (element.button.className === event.currentTarget.className) {
        element.mobileCategory.style.display = "block";
        btnCloseCatalog.innerHTML =
          `<img class="mobile-catalog__close-img" src="img/icons/arrow_menu.svg" alt="arrow back">` +
          element.button.innerText;
      }
    });
  });
});
