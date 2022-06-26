const isNoMobile = window.matchMedia("only screen and (min-width: 480px)");
if (isNoMobile.matches) {
	newCardsShow();
	saleCardsShow();
}
window.addEventListener('resize', () => {
    if (window.innerWidth > 480) {
		newCardsShow();
		saleCardsShow();
	}
}, true);
// для первой секции
function newCardsShow() {
	const showMore = document.querySelector(".show");
	const productsLength = document.querySelectorAll(
	  ".new-products__card"
	).length;
	let items = 10;
	// скрытие всех карточек, кроме 10
	const hideClass = document.querySelectorAll('.new-products__card');
	for (i = items; i < hideClass.length; i++) {
	  hideClass[i].classList.add('hide');
	}
	// событие клика на кнопку показать еще
	showMore.addEventListener("click", () => {
	  items += 20;
	  const array = Array.from(document.querySelector(".new-products__cards").children);
	  const visItems = array.slice(0, items);
  
	  // карточки открываются
	  visItems.forEach((el) => {
		  el.classList.add("show");
		  // проверка, если карточек больше 20
		  if (el.length !== 20) {
			  showMore.innerHTML = 'Показать еще';
		  }
	  });
	  // проверка, если все карточки открыты, то появляется кнопка-ссылка
	  if (visItems.length === productsLength) {
		showMore.style.display = "none";
		const fullCategoriesBtns = document.querySelector('.button-show-link').style.display = 'block';
	  }
	});
}
// для второй секции
function saleCardsShow() {
	const showMore2 = document.querySelector(".show2");
	const productsLength2 = document.querySelectorAll(
	  ".sale__card"
	).length;
	let items2 = 10;
	// скрытие всех карточек, кроме 10
	const hideClass2 = document.querySelectorAll('.sale__card');
	for (i = items2; i < hideClass2.length; i++) {
	  hideClass2[i].classList.add('hide');
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
			  showMore2.innerHTML = 'Показать еще';
		  }
	  });
	  // проверка, если все карточки открыты, то появляется кнопка-ссылка
	  if (visItems2.length === productsLength2) {
		showMore2.style.display = "none";
		const fullCategoriesBtns2 = document.querySelector('.button-show-link-2').style.display = 'block';
	  }
	});
}