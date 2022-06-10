const childCategories = document.querySelector('.child__categories');
let items = document.querySelectorAll('.child-item');
let height = 0;

for (i = 0; i < items.length; i++) {
	height += items[i].offsetHeight / 2;
	childCategories.style.height = height + 'px';
}