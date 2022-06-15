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
	// dotCard.addEventListener("click", () =>  {	 
	// 	dotCard.scrollIntoView({ behavior: 'smooth', block: 'nearest', inline: 'start' })
	// });
}));

function scrollSlideCard(directionCard) {
  countCard = (countCard + directionCard + imagesCard.length) % imagesCard.length;
  moveSlideCard();
}

function setSlideCard(indexCard) {
  countCard = indexCard;
  dotsCard.forEach((dotCard, indexCard) => {
	dotCard.addEventListener("click", () =>  {	 
		dotCard.scrollIntoView({ behavior: 'smooth', block: 'nearest', inline: 'start' })
	});
  });
  moveSlideCard();
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
let count = document.querySelector(".counter-result");

document.getElementById("buttonCountPlus").onclick = function() {
  let countPlus = count.innerHTML;
  if(+countPlus <= document.querySelector('#allItemsProducts').innerHTML - 1){
    count.innerHTML++;
  }
}

document.getElementById("buttonCountMinus").onclick = function() {
  let countMinus = count.innerHTML;
  if(+countMinus >= 2){
    count.innerHTML--;
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