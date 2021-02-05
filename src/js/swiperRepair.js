export function swiperRepair () {
    let slidesRepair = document.querySelectorAll('.repair-slide');

    if ( window.innerWidth >= 768 && window.innerWidth < 945) {

    for ( let i = 6; i < slidesRepair.length; i++ ) {
        slidesRepair[i].style.display = 'none';
    }

    let button = document.querySelector('.repair__more');
    let buttonText = document.querySelector('.repair__text');
    let buttonImage = document.querySelector('.repair__img');

    button.style.display = 'inline-block';

    button.addEventListener('click', function(evt) {
        evt.preventDefault();

        for ( let i = 6; i < slidesRepair.length; i++ ) {
        if ( slidesRepair[i].style.display == 'none' ) {
            slidesRepair[i].style.display = 'flex';  
            buttonText.innerText = 'Скрыть'; 
            buttonImage.classList.add('more__img--rotate');
        } else {
            slidesRepair[i].style.display = 'none';
            buttonText.innerText = 'Показать все'; 
            buttonImage.classList.remove('more__img--rotate');
        } 
        } 
    });
    }

    if ( window.innerWidth >= 945) {

        for ( let i = 8; i < slidesRepair.length; i++ ) {
            slidesRepair[i].style.display = 'none';
        }
    
        let button = document.querySelector('.repair__more');
        let buttonText = document.querySelector('.repair__text');
        let buttonImage = document.querySelector('.repair__img');
    
        button.style.display = 'inline-block';
    
        button.addEventListener('click', function(evt) {
            evt.preventDefault();
    
            for ( let i = 8; i < slidesRepair.length; i++ ) {
            if ( slidesRepair[i].style.display == 'none' ) {
                slidesRepair[i].style.display = 'flex';  
                buttonText.innerText = 'Скрыть'; 
                buttonImage.classList.add('more__img--rotate');
            } else {
                slidesRepair[i].style.display = 'none';
                buttonText.innerText = 'Показать все'; 
                buttonImage.classList.remove('more__img--rotate');
            } 
            } 
        });
        }
}

