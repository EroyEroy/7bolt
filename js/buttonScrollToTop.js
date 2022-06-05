const isBtnScroll = window.matchMedia("only screen and (min-width: 480px)");
if (isBtnScroll.matches) {
	document.addEventListener("DOMContentLoaded", function () {
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
	  });	
} else {
	document.addEventListener("DOMContentLoaded", function () {
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
	  });
}
