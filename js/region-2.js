let langContainer2 = document.querySelector('.region-2');

function showDescription() {
	langContainer2.classList.toggle('region-2_active');
}

document.addEventListener( 'click', (e) => {
	const withinBoundaries = e.composedPath().includes(langContainer2);
 
	if ( ! withinBoundaries ) {
		langContainer2.classList.remove('region-2_active');
	}
})