const images = document.querySelectorAll(".slider .slider-line img");
const sliderLine = document.querySelector(".slider .slider-line");
let dots = document.querySelectorAll(".dots-item"),
  dotsArea = document.querySelector(".dots-block");
let count = 0;
let width;

function init() {
  //console.log('resize');
  width = document.querySelector(".slider").offsetWidth;
  sliderLine.style.width = width * images.length + "px";
  images.forEach((item) => {
    item.style.width = width + "px";
    item.style.height = "auto";
  });
  rollSlider();

  const isMobile = window.matchMedia("only screen and (max-width: 479px)");

  if (isMobile.matches) {
    // sliderLine.addEventListener("touchstart", handleTouchStart, false);
    // sliderLine.addEventListener("touchmove", handleTouchMove, false);

    // let x1 = null;
    // let y1 = null;

    // function handleTouchStart(event) {
    //   const firstTouch = event.touches[0];
    //   // вытягивание координат клика
    //   x1 = firstTouch.clientX;
    //   y1 = firstTouch.clientY;
    // }
    // function handleTouchMove(event) {
    //   if (!x1 || !y1) {
    //     return false;
    //   }
    //   // координаты того, куда пользователь тянет
    //   let x2 = event.touches[0].clientX;
    //   let y2 = event.touches[0].clientY;

    //   // нахождение разницы координат (в какую сторону)
    //   let xDiff = x2 - x1;
    //   let yDiff = y2 - y1;
    //   // движиние вправо и влево
    //   if (Math.abs(xDiff) >= Math.abs(yDiff)) {
    //     console.log(xDiff, yDiff);
    //     if (xDiff > 0) {
    //       scrollSlide(-1);
    //     } else if (xDiff < 0){
    //       scrollSlide(1);
    //     }
    //   }
    //   x1 = null;
    //   y1 = null;
    // }
	let touchstartX = 0;
let touchstartY = 0;
let touchendX = 0;
let touchendY = 0;

sliderLine.addEventListener('touchstart', function(event) {
    touchstartX = event.changedTouches[0].screenX;
    touchstartY = event.changedTouches[0].screenY;
}, false);

sliderLine.addEventListener('touchend', function(event) {
    touchendX = event.changedTouches[0].screenX;
    touchendY = event.changedTouches[0].screenY;
    handleGesture();
}, false); 

function handleGesture() {
    if (touchendX <= touchstartX) {
        scrollSlide(1)
    }
    
    if (touchendX >= touchstartX) {
        scrollSlide(-1);
    }
    
    if (touchendY <= touchstartY) {
        console.log('Swiped up');
    }
    
    if (touchendY >= touchstartY) {
        console.log('Swiped down');
    }
    
    if (touchendY === touchstartY) {
        console.log('Tap');
    }
}
  }
}
var timer = 0;
makeTimer(); //Создаем интервал
function makeTimer() {
  clearInterval(timer); //Очистим интервал, это позволит прервать его работу и отменить перелистывание
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
// swiper

// свайп на пк версии
// let startMousePos = 0;
// sliderLine.addEventListener("mousedown", (e) => (startMousePos = e.clientX));
// sliderLine.addEventListener("mouseup", (e) => {
// 	if (startMousePos - e.clientX > 30) {
// 	  scrollSlide(1);
// 	}
// 	if (startMousePos - e.clientX < -30) {
// 	  scrollSlide(-1);
// 	}
//   });
