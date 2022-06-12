let langContainer = document.querySelector('.region');
let langContainer2 = document.querySelector('.region-2');
function showDescription() {
	langContainer.classList.toggle('region_active');
	langContainer2.classList.toggle('region-2_active');
}

document.querySelector('.region__button').addEventListener( 'click', (e) => {
	const withinBoundaries = e.composedPath().includes(langContainer);
	const withinBoundaries2 = e.composedPath().includes(langContainer2);
	if ( ! withinBoundaries ) {
		langContainer.classList.remove('region_active');
	}
	if ( ! withinBoundaries2 ) {
		langContainer2.classList.remove('region-2_active');
	}
})