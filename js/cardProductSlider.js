const imagesCard = document.querySelectorAll(".product-card__slider-line .product-card__slider-img");
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
window.addEventListener("resize", initCard);

document
  .querySelector(".product-card__button-next")
  .addEventListener("click", () => scrollSlideCard(1));

document
  .querySelector(".product-card__button-prev")
  .addEventListener("click", () => scrollSlideCard(-1));

dotsCard.forEach((dotCard, indexCard) => dotCard.addEventListener("click", () => {
	setSlideCard(indexCard);
	dotCard.addEventListener("click", () =>  {	 
		dotCard.scrollIntoView({ behavior: 'smooth', block: 'nearest', inline: 'start' })
	});
}));

function scrollSlideCard(directionCard) {
  countCard = (countCard + directionCard + imagesCard.length) % imagesCard.length;
  moveSlideCard();
}

function setSlideCard(indexCard) {
  countCard = indexCard;
  dotsCard.forEach((dotCard, indexCard) => {
	dotCard.addEventListener("click", () =>  {	 
		dotCard.scrollIntoView({ behavior: 'smooth', block: 'nearest', inline: 'start' });
	});
  });
  moveSlideCard();
}

// const btnColors = document.querySelectorAll('.product-card__button-cards-item');
// btnColors.forEach((btnColor) => {
// 	btnColor.addEventListener('click', (event) => {	
// 		if (event.target === btnColor.classList.closest('targetBtn2')){ 
// 			console.log(1);
// 		}
// 	});
// });
const btnColors = document.querySelectorAll('.product-card__button-cards-item');
btn2 = document.querySelector('.btn2');
const colorCard = document.querySelector('.color-card');
const texts = document.querySelectorAll('.text');
if (btn2 != null) {
	btn2.addEventListener('click', () => {
		document.querySelector('.imgBtn2').click();
		for (i = 0; i < btnColors.length; i++) {
			btnColors[i].classList.remove('target');
		}
		btn2.classList.add('target');
		texts.forEach((text) => {
			if (text.closest('.btn2')) {
				colorCard.innerHTML = text.innerHTML;
			}
		});
	});
}

function moveSlideCard() {
  document.querySelector(".product-card__dots-item.active").classList.remove("active");
  document.querySelectorAll(".product-card__dots-item")[countCard].classList.add("active");
  document.querySelectorAll(".product-card__dots-item")[countCard].scrollIntoView({ behavior: 'smooth', block: 'nearest', inline: 'start' });

  rollSliderCard();
//   makeTimerCard();
}

function rollSliderCard() {
  sliderLineCard.style.transform = "translate(-" + countCard * widthCard + "px)";
}
// счетчик товара
let count = document.querySelector(".counter-result"),
// переменные для расчета цены
// актуальная цена
PriceCard = document.querySelector('.product-card__price-new').textContent;
Price = parseInt(String(PriceCard).replace(/ /g, ''));
newPriceCard = document.querySelector('.product-card__price-new');
// старая цена
PriceCardOld = document.querySelector('.product-card__price-old').textContent;
PriceOld = parseInt(String(PriceCardOld).replace(/ /g, ''));
oldPriceCard = document.querySelector('.product-card__price-old');
// 
count.setAttribute('max', document.querySelector('#allItemsProducts').innerHTML);
count.setAttribute('min', 1);
count.value = 1;
// вписать значение в инпут
count.addEventListener('focus', () => {
	document.querySelector('.product-card__counter').classList.add('focus');
});
count.addEventListener('blur', () => {
	document.querySelector('.product-card__counter').classList.remove('focus');
});
// изменение количества в инпуте путем добавление числа вводом
count.addEventListener('keydown', (event) => {
	if (event.keyCode === 13) {
		event.preventDefault();
		count.value = count.value;
		newPriceCard.textContent = (Price * count.value + ' ₽').toString().replace(/\B(?=(\d{3})+(?!\d))/g, " ");
		oldPriceCard.textContent = (PriceOld * count.value + ' ₽').toString().replace(/\B(?=(\d{3})+(?!\d))/g, " ");
	}
	if (event.keyCode === 13 && count.value > document.querySelector('#allItemsProducts').innerHTML - 1) {
		count.value = count.max;
		newPriceCard.textContent = (Price * count.max + ' ₽').toString().replace(/\B(?=(\d{3})+(?!\d))/g, " ");
		oldPriceCard.textContent = (PriceOld * count.max + ' ₽').toString().replace(/\B(?=(\d{3})+(?!\d))/g, " ");
		return;
	}
	if (event.keyCode === 13 && count.value == 0) {
		count.value = 1;
		newPriceCard.textContent = (Price + ' ₽').toString().replace(/\B(?=(\d{3})+(?!\d))/g, " ");
		oldPriceCard.textContent = (PriceOld + ' ₽').toString().replace(/\B(?=(\d{3})+(?!\d))/g, " ");
		return;
	}
});
// прибавить +1 к значение инпута
document.getElementById("buttonCountPlus").onclick = function() {
  let countPlus = count.value;
  if(+countPlus <= document.querySelector('#allItemsProducts').innerHTML - 1){
	count.value++;
	newPriceCard.textContent = (Price * count.value + ' ₽').toString().replace(/\B(?=(\d{3})+(?!\d))/g, " ");
	oldPriceCard.textContent = (PriceOld * count.value + ' ₽').toString().replace(/\B(?=(\d{3})+(?!\d))/g, " ");
  }
}
// убаить -1 к значению инпута
document.getElementById("buttonCountMinus").onclick = function() {
  let countMinus = count.value;
  if(+countMinus >= 2){
	count.value--
	// отнятие суммы от новый цены
	let priceAll = newPriceCard.textContent;
	priceAllConvert = parseInt(String(priceAll).replace(/ /g, ''));
	newPriceCard.textContent = (priceAllConvert - Price + ' ₽').toString().replace(/\B(?=(\d{3})+(?!\d))/g, " ");
	// отнятие суммые от старой цены
	let priceAllOld = oldPriceCard.textContent;
	priceAllConvertOld = parseInt(String(priceAllOld).replace(/ /g, ''));
	oldPriceCard.textContent = (priceAllConvertOld - PriceOld + ' ₽').toString().replace(/\B(?=(\d{3})+(?!\d))/g, " ");
  }
}
// рассчитывание скидки
let OldPrice = document.querySelector('.product-card__price-old').textContent;
let NewPrice = document.querySelector('.product-card__price-new');
let SaleCount = document.querySelector('.product-card__sale').textContent;
SaleCountChar = parseInt(SaleCount.match(/\d+/));
OldPriceChar = parseInt(OldPrice.match(/\d+/));
NewPrice.textContent = Math.floor(OldPriceChar - ((OldPriceChar * SaleCountChar) / 100)) + ' ₽';

// переключение секций
const btnDescription = document.querySelector('#btn-description'),
btnFeedback = document.querySelector('#btn-feedback'),
sectionDescription = document.querySelector('.description'),
sectionFeedback = document.querySelector('.feedback'),
points = document.querySelectorAll('.points__item'),
btnFeedBack2 = document.querySelector('.product-card__top-link');
btnDescription.addEventListener('click', () => {
	sectionDescription.classList.add('active');
	sectionFeedback.classList.remove('active');
	document.querySelector('.points-description').classList.add('active');
	document.querySelector('.points-feedback').classList.remove('active');
});
btnFeedback.addEventListener('click', () => {
	sectionDescription.classList.remove('active');
	sectionFeedback.classList.add('active');
	document.querySelector('.points-description').classList.remove('active');
	document.querySelector('.points-feedback').classList.add('active');
});
btnFeedBack2.addEventListener('click', () => {
	btnFeedback.click();
	sectionFeedback.scrollIntoView({block: "center", behavior: "smooth"});
});