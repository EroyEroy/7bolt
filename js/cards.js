const loadmore = document.querySelector('.show');
let currentItems = 20;
loadmore.addEventListener('click', (e) => {
	const elementList = [...document.querySelectorAll('.new-products__card')];
	for (let i = currentItems; i < currentItems + 20; i++) {
		if (elementList[i]) {
			elementList[i].style.display = 'flex';
		}
	}
	currentItems += 20;

	if (currentItems >= elementList.length) {
		event.target.style.display = 'none';
		const saleInner = document.querySelector('.new-products__inner').style.padding = '0 0 85px 0';
	}
})
const loadmore2 = document.querySelector('.show2');
let currentItems2 = 20;
loadmore2.addEventListener('click', (e) => {
	const elementList2 = [...document.querySelectorAll('.sale__card')];
	for (let i = currentItems2; i < currentItems2 + 20; i++) {
		if (elementList2[i]) {
			elementList2[i].style.display = 'flex';
		}
	}
	currentItems2 += 20;

	if (currentItems2 >= elementList2.length) {
		event.target.style.display = 'none';
		const saleInner2 = document.querySelector('.sale__inner').style.padding = '0 0 85px 0';
	}
})
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