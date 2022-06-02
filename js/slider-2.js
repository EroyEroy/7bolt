// второй слайдер
const images2 = document.querySelectorAll('.slider2 .slider-line2 img');
const sliderLine2 = document.querySelector('.slider2 .slider-line2');
let dots2 = document.querySelectorAll('.dots-item2'),
  dotsArea2 = document.querySelector('.dots-block2');
let count2 = 0;
let width2;

function init() {
  //console.log('resize');
  width2 = document.querySelector('.slider2').offsetWidth;
  sliderLine2.style.width = width * images2.length + 'px';
  images2.forEach(item => {
    item.style.width = width + 'px';
    item.style.height = 'auto';
  });
  rollSlider2();
}
var timer2 = 0;
makeTimer2(); //Создаем интервал 
function makeTimer2() {
  clearInterval(timer2) //Очистим интервал, это позволит прервать его работу и отменить перелистывание
  timer2 = setInterval(function() {
    scrollSlide2(1);
    rollSlider2(count2);
  }, 5000);
}

init();
window.addEventListener('resize', init);

document.querySelector('.slider-next2').addEventListener('click', () => scrollSlide2(1));

document.querySelector('.slider-prev2').addEventListener('click', () => scrollSlide2(-1));

dots2.forEach((dot2, index2) => dot2.addEventListener('click', () => setSlide2(index2)));

function scrollSlide2(direction) {
  count2 = (count2 + direction + images2.length) % images2.length;
  moveSlide2();
}

function setSlide2(index2) {
  count2 = index2;
  moveSlide2();
}

function moveSlide2() {  
  document.querySelector('.dots-item2.active').classList.remove('active');
  document.querySelectorAll('.dots-item2')[count2].classList.add('active');
  
  rollSlider2();
  makeTimer2();
}

function rollSlider2() {
  sliderLine2.style.transform = 'translate(-' + count2 * width2 + 'px)';
}
//   свайп слайдера
const isMobile2 = window.matchMedia("only screen and (max-width: 479px)");

if (isMobile2.matches) {
  sliderLine2.addEventListener("touchstart", handleTouchStart, false);
  sliderLine2.addEventListener("touchmove", handleTouchMove, false);

  let x1 = null;
  let y1 = null;

  function handleTouchStart(event) {
	const firstTouch = event.touches[0];
	// вытягивание координат клика
	x1 = firstTouch.clientX;
	y1 = firstTouch.clientY;
  }
  function handleTouchMove(event) {
	if (!x1 || !y1) {
	  return false;
	}
	// координаты того, куда пользователь тянет
	let x2 = event.touches[0].clientX;
	let y2 = event.touches[0].clientY;

	// нахождение разницы координат (в какую сторону)
	let xDiff = x2 - x1;
	let yDiff = y2 - y1;
	// движиние вправо и влево
	if (Math.abs(xDiff) >= Math.abs(yDiff)) {
	  if (xDiff > 0) {
		scrollSlide2(-1);
	  } else {
		scrollSlide2(1);
	  }
	}
	x1 = null;
	y1 = null;
  }
}