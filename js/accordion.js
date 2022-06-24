const acc = document.querySelectorAll(".accordion__item");
acc.forEach((item) => {
	item.addEventListener('click', () => {
		item.classList.toggle('accordion__item_show');
		const accordionBody = item.querySelectorAll('.accordion__body');
		accordionBody.forEach(box => {
			if (box.style.maxHeight) {
				box.style.maxHeight = null;
			} else {
				box.style.maxHeight = box.scrollHeight + 'px';
			}
		});
	});
});