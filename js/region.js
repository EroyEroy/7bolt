const langContainers = document.querySelectorAll('.region');
langContainers.forEach((item) => {
	const langBtns = item.querySelectorAll('.region__button');
	langBtns.forEach((btn) => {
		btn.addEventListener('click', () => {
			item.classList.toggle('region_active');
		});
	});
	document.addEventListener( 'click', (e) => {
		const withinBoundaries = e.composedPath().includes(item);
	 
		if (!withinBoundaries) {
			item.classList.remove('region_active');
		}
	})
	const langLinks = document.querySelectorAll('.btnlang');
	langLinks.forEach((langLink) => {
		langLink.addEventListener('click', () => {
			item.classList.remove('region_active');
		});
	});
});