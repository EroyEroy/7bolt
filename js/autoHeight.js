const childContainer = document.querySelectorAll('.child__categories'),
	  childItems = document.querySelectorAll('.child-item');
for (i = 0; i < childContainer.length; i++) {
	for (i = 0; i < childItems.length; i++) {
		let height = 0
		childItems[i].offsetHeight += height;
		console.log(height);
	};
};