document.querySelector('.accordion__item').onclick = function(event){
    console.log(event.target.nextElementSibling);
    if (event.target.nodeName !=='accordion__item') return;
    closeAllSubMenu(event.target.nextElementSibling);
    // event.target.classList.add('sub-menu-active-span');
    event.target.nextElementSibling.classList.toggle('accordion__item_show');
}

function closeAllSubMenu(current = null){
    let parents = [];
    if (current) {
        // console.dir(current);
        let currentParent = current.parentNode;
        while(currentParent){
            if (currentParent.classList.contains('accordion__item')) break;
            if (currentParent.nodeName === '.accordion__body') parents.push(currentParent);
            currentParent = currentParent.parentNode;
        }

    }
    const subMenu = document.querySelectorAll('.accordion__item .accordion__body');
    Array.from(subMenu).forEach(item => {
        // не только текущую
        // но и всех ее родителей
        if(item != current && !parents.includes(item)) {
            item.classList.remove('accordion__item_show');
            // if(item.previousElementSibling.nodeName === 'SPAN') {
            //     item.previousElementSibling.classList.remove('sub-menu-active-span');
            // }
        }
    });
}

// document.querySelector('.root-nav').onmouseleave = closeAllSubMenu;