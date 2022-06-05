document.addEventListener('DOMContentLoaded', function () {
    let btn = document.querySelector('.scroll');
    window.addEventListener('scroll', function () {
        if (pageYOffset > 1000) {
            btn.classList.add('scroll_active');
        } else {
            btn.classList.remove('scroll_active');
        }
    });

    btn.onclick = function (click) {
        click.preventDefault();
        scrollTo(0, 0);
    }
});