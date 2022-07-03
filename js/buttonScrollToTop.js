// кнопка вверх
if (window.matchMedia("only screen and (min-width: 480px)").matches) {
	buttonScrollTopDesktop();
  } else {
	buttonScrollTopMobile();
  }
  window.addEventListener("resize", () => {
	if (window.innerWidth > 480) {
	  buttonScrollTopDesktop();
	} else if (window.innerWidth < 480) {
	  buttonScrollTopMobile();
	}
  });
  // появление кнопки на пк
  function buttonScrollTopDesktop() {
	let btn = document.querySelector(".scroll");
	window.addEventListener("scroll", function () {
	  if (window.pageYOffset > 1000) {
		btn.classList.add("scroll_active");
	  } else {
		btn.classList.remove("scroll_active");
	  }
	});
  
	btn.onclick = function (click) {
	  click.preventDefault();
	  scrollTo(0, 0);
	};
  }
  // появление кнопки на телефонах
  function buttonScrollTopMobile() {
	let btn = document.querySelector(".scroll");
	window.addEventListener("scroll", function () {
	  if (window.pageYOffset > 300) {
		btn.classList.add("scroll_active");
	  } else {
		btn.classList.remove("scroll_active");
	  }
	});
  
	btn.onclick = function (click) {
	  click.preventDefault();
	  scrollTo(0, 0);
	};
  }