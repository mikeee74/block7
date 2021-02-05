export function swiperTech () {
    let slidesTech = document.querySelectorAll('.tech-slide');

    if ( window.innerWidth >= 768 && window.innerWidth < 945) {

    for ( let i = 4; i < slidesTech.length; i++ ) {
        slidesTech[i].style.display = 'none';
    }

    let button = document.querySelector('.tech__more');
    let buttonText = document.querySelector('.tech__text');
    let buttonImage = document.querySelector('.tech__img');

    button.style.display = 'inline-block';

    button.addEventListener('click', function(evt) {
        evt.preventDefault();

        for ( let i = 4; i < slidesTech.length; i++ ) {
        if ( slidesTech[i].style.display == 'none' ) {
            slidesTech[i].style.display = 'flex';  
            buttonText.innerText = 'Скрыть'; 
            buttonImage.classList.add('more__img--rotate');
        } else {
            slidesTech[i].style.display = 'none';
            buttonText.innerText = 'Показать все'; 
            buttonImage.classList.remove('more__img--rotate');
        } 
        } 
    });
    }

    if ( window.innerWidth >= 945) {

        for ( let i = 4; i < slidesTech.length; i++ ) {
            slidesTech[i].style.display = 'none';
        }
    
        let button = document.querySelector('.tech__more');
        let buttonText = document.querySelector('.tech__text');
        let buttonImage = document.querySelector('.tech__img');
    
        button.style.display = 'inline-block';
    
        button.addEventListener('click', function(evt) {
            evt.preventDefault();
    
            for ( let i = 4; i < slidesTech.length; i++ ) {
            if ( slidesTech[i].style.display == 'none' ) {
                slidesTech[i].style.display = 'flex';  
                buttonText.innerText = 'Скрыть'; 
                buttonImage.classList.add('more__img--rotate');
            } else {
                slidesTech[i].style.display = 'none';
                buttonText.innerText = 'Показать все'; 
                buttonImage.classList.remove('more__img--rotate');
            } 
            } 
        });
        }
}