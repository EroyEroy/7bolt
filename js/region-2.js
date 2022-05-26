let langContainer2 = document.querySelector('.region-2'),
	langDescription2 = document.querySelector('.region__overflow-2'),
	langButton2 = document.querySelector('.region__button-2');

function showDescription() {
	langContainer2.classList.toggle('region-2_active');
}

document.addEventListener( 'click', (e) => {
	const withinBoundaries = e.composedPath().includes(langContainer2);
 
	if ( ! withinBoundaries ) {
		langContainer2.classList.remove('region_active');
	}
})