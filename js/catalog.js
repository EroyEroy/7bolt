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
still.onclick = () => {
  btnOpenCatalog.onclick();
};
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
const mobileCatalogBtn = document.querySelector(".catalog-2"),
  mobileCatalogBtn2 = document.querySelector(".catalog-3"),
  mobileCatalogBtnClose = document.querySelector(".mobile-catalog__close"),
  mobileCatalogBackground = document.querySelector(
    ".mobile-catalog__background"
  ),
  mobileCatalogModal = document.querySelector(".mobile-catalog__modal"),
  mobileCategoriesBtn = document.querySelectorAll(
    ".mobile-catalog__categories"
  );
mobileCatalogBtn.addEventListener("click", () => {
  mobileCatalogBackground.classList.add("active");
  mobileCatalogModal.classList.add("active");
  document.body.style.overflowY = "hidden";
});
mobileCatalogBtnClose.addEventListener("click", () => {
  mobileCatalogBackground.classList.remove("active");
  mobileCatalogModal.classList.remove("active");
  document.body.style.overflowY = "scroll";
});
// проверка кнопки на главной станицы категории
if (mobileCatalogBtn2 != null) {
  mobileCatalogBtn2.addEventListener("click", () => {
    mobileCatalogBackground.classList.add("active");
    mobileCatalogModal.classList.add("active");
    document.body.style.overflowY = "hidden";
  });
}
// закрытие по свайпу
let startX = 0,
  startY = 0,
  moveX = 0,
  moveY = 0;
  const catalogBackground = document.querySelectorAll('.mobile-catalog__background');
window.addEventListener("touchstart", (e) => {
  startX = e.changedTouches[0].screenX;
});
window.addEventListener("touchmove", (e) => {
  moveX = e.changedTouches[0].screenX;
  if (startX < moveX) {
	catalogBackground.forEach(item => {
		item.style.transform = "translate(0px, 0px)";
	})
    // mobileCatalogBackground.style.transform = "translate(0px, 0px)";
  } else if (startX > moveX + 50) {
	catalogBackground.forEach(item => {
		item.style.transform = "translate(-100px, 0px)";
	})
  }
});
window.addEventListener("touchend", () => {
  if (startX < moveX-200) {
	console.log(startX, moveX);
    // console.log('right');
	mobileCatalogBtn.click();
  } else if (startX-200 > moveX) {
    // console.log('left');
    console.log(startX, moveX);
	catalogBackground.forEach(item => {
		item.classList.remove("active");
		mobileCatalogModal.classList.remove("active");
		document.body.style.overflowY = "scroll";
	})
  }
  if (startY + 100 < moveY) {
    // console.log('down');
  } else if (startY - 100 > moveY) {
    // console.log('up');
  }
  catalogBackground.forEach(item => {
	item.style.transform = "none";
})
});
// категория мотоциклы
const mobileCatalogModalAll = document.querySelector("#all");

const CatalogLinks = document.querySelectorAll(".accordion__content-link");
CatalogLinks.forEach((CatalogLink) => {
  CatalogLink.addEventListener("click", () => {
    mobileCatalogBackground.classList.remove("active");
    mobileCatalogModal.classList.remove("active");
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
  if (window.innerWidth > 479) {
    mobileCatalogBackground.classList.remove("active");
    mobileCatalogModal.classList.remove("active");
    //
    mobileCatalogModalAll.classList.remove("active");
  }
});
if (window.matchMedia("only screen and (min-width: 480px)").matches) {
  mobileCatalogBackground.classList.remove("active");
  mobileCatalogModal.classList.remove("active");
  //
  mobileCatalogModalAll.classList.remove("active");
}
// закрытие каталога пк версии в мобильной
window.addEventListener("resize", () => {
  if (window.innerWidth < 480) {
    catalog.classList.remove("active");
    catalogTransition.classList.remove("active");
    document.querySelector(".catalog-icon").classList.remove("open");
  }
});
if (window.matchMedia("only screen and (max-width: 479px)").matches) {
  catalog.classList.remove("active");
  catalogTransition.classList.remove("active");
  document.querySelector(".catalog-icon").classList.remove("open");
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
