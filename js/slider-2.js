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
	let startX = 0,
	startY = 0,
	moveX = 0,
	moveY = 0;
	sliderLine2.addEventListener('touchstart', touchStart);
	sliderLine2.addEventListener('touchmove', touchMove);
	sliderLine2.addEventListener('touchend', touchEnd);
	function touchStart(e){
		startX = e.changedTouches[0].screenX ;
		// startY = e.changedTouches[0].clientY ;
	}

	function touchMove(e){
		moveX = e.changedTouches[0].screenX ;
		// moveY = e.changedTouches[0].clientY ;
	}
	function touchEnd(){
		if(startX+100 < moveX){
			// console.log('right');
			scrollSlide2(-1);
		}else if(startX-100 > moveX){
			// console.log('left');
			scrollSlide2(1);
		}
		if(startY+100 < moveY){
			// console.log('down');
		}else if(startY-100 > moveY){
			// console.log('up');
		}
	}
}