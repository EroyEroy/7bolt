const div = document.querySelector(".main__list");

window.addEventListener('resize', function(event) {
	if (div.scrollWidth > div.clientWidth) {
		while (div.children.length > 1) {
		  div.removeChild(div.firstChild);
		  document.querySelector('.main__item-btn').style.display='block';
		  return;
		}
	}
}, true);
