export function burger () {

    let burger = document.querySelector('.nav__link');
    let elem = document.querySelector('.nav-bar');

    let close = document.querySelector('.button--close');

    burger.addEventListener('click', function (evt) {
        evt.preventDefault();

        elem.classList.add('nav-bar--active');
        document.querySelector('body').classList.add('body--hidden');
    });

    close.addEventListener('click', function (evt) {
        evt.preventDefault();

        elem.classList.remove('nav-bar--active');
        document.querySelector('body').classList.remove('body--hidden');
    });

}