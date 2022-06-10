// const loadmore = document.querySelector('.show');
// let currentItems = 20;
// loadmore.addEventListener('click', (event) => {
// 	const elementList = [...document.querySelectorAll('.new-products__card')];
// 	for (let i = currentItems; i < currentItems + 20; i++) {
// 		if (elementList[i]) {
// 			elementList[i].style.display = 'flex';
// 		}
// 	}
// 	currentItems += 20;
// 	if (currentItems >= elementList.length) {
// 		event.target.style.display = 'none';
// 		const saleInner = document.querySelector('.new-products__inner').style.padding = '0 0 85px 0';
// 	}
// })
// const loadmore2 = document.querySelector('.show2');
// let currentItems2 = 20;
// loadmore2.addEventListener('click', (event) => {
// 	const elementList2 = [...document.querySelectorAll('.sale__card')];
// 	for (let i = currentItems2; i < currentItems2 + 20; i++) {
// 		if (elementList2[i]) {
// 			elementList2[i].style.display = 'flex';
// 		}
// 	}
// 	currentItems2 += 20;

// 	if (currentItems2 >= elementList2.length) {
// 		event.target.style.display = 'none';
// 		const saleInner2 = document.querySelector('.sale__inner').style.padding = '0 0 85px 0';
// 	}
// })

const isNoMobile = window.matchMedia("only screen and (min-width: 480px)");
if (isNoMobile.matches) {
  document.addEventListener("DOMContentLoaded", function () {
    let box = document.querySelectorAll(".new-products__card");
    const btn = document.querySelector(".show");
    for (let i = 10; i < box.length; i++) {
      box[i].classList.add("hide");
    }
    let countD = 10;
    btn.addEventListener("click", function () {
      let box = document.querySelectorAll(".new-products__card");
      countD += 20;
      if (countD <= box.length) {
        for (let i = 0; i < countD; i++) {
          box[i].classList.add("show");
        }
      }
      if ((countD = box.length)) {
        btn.style.display = "none";
		const fullCategoriesBtns2 = document.querySelector('.button-show-link').style.display = 'block';
		// document.querySelector('.new-products__inner').style.padding = '0 0 85px 0';
      }
    });
    let box2 = document.querySelectorAll(".sale__card");
    const btn2 = document.querySelector(".show2");
    for (let i = 10; i < box2.length; i++) {
      box2[i].classList.add("hide");
    }
    let countD2 = 10;
    btn2.addEventListener("click", function () {
      let box2 = document.querySelectorAll(".sale__card");
      countD2 += 20;
      if (countD2 <= box2.length) {
        for (let i = 0; i < countD2; i++) {
          box2[i].classList.add("show");
        }
      }
      if ((countD2 = box2.length)) {
        btn2.style.display = "none";
		// document.querySelector('.sale__inner').style.padding = '0 0 85px 0';
		const fullCategoriesBtns2 = document.querySelector('.button-show-link-2').style.display = 'block';
      }
    });
  });
}

//   if ($(window).width() > 479) {
//     $(document).ready(function () {
//       var list = $(".new-products__card");
//       var numToShow = 20; //сколько показывать элементов
//       var button = $(".show");
//       var numInList = list.length;
//       list.hide();
//       if (numInList > numToShow) {
//         button.show();
//       }
//       list.slice(0, 10).show();
//       button.click(function () {
//         var showing = list.filter(":visible").length;
//         list.slice(showing - 1, showing + numToShow).fadeIn();
//         var nowShowing = list.filter(":visible").length;
//         if (nowShowing >= numInList) {
//           button.hide();
//           $(".new-products__inner").css("padding", "0 0 85px 0");
//         }
//       });
//     });
//     $(document).ready(function () {
//       var list = $(".sale__card");
//       var numToShow = 20; //сколько показывать элементов
//       var button = $(".show2");
//       var numInList = list.length;
//       list.hide();
//       if (numInList > numToShow) {
//         button.show();
//       }
//       list.slice(0, 10).show();
//       button.click(function () {
//         var showing = list.filter(":visible").length;
//         list.slice(showing - 1, showing + numToShow).fadeIn();
//         var nowShowing = list.filter(":visible").length;
//         if (nowShowing >= numInList) {
//           button.hide();
//           $(".sale__inner").css("padding", "0 0 85px 0");
//         }
//       });
//     });
//   }
