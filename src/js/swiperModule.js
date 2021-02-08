import Swiper from 'swiper/bundle';
export function swiperModule () {
    
    function swiper() {
        if (window.innerWidth < 768) {
          new Swiper('.swiper-container', {
              pagination: {
                  el: '.swiper-pagination',
                  clickable: true,
              },
              slidesPerView: 'auto',
              paginationClickable: true,
              spaceBetween: 24
          }); 
        }
      }

    let slidesRepair = document.querySelectorAll('.repair-slide');
    let button = document.querySelector('.repair__more');
    let buttonText = document.querySelector('.repair__text');
    let buttonImage = document.querySelector('.repair__img');

    let slidesTech = document.querySelectorAll('.tech-slide');
    let buttonTech = document.querySelector('.tech__more');
    let buttonTextTech = document.querySelector('.tech__text');
    let buttonImageTech = document.querySelector('.tech__img');

    

    function countsSwiper (slides, button, buttonText, buttonImage, firstNum, secondNum) {
        if ( window.innerWidth >= 768 && window.innerWidth < 1120) {

            for ( let i = firstNum; i < slides.length; i++ ) {
                slides[i].style.display = 'none';
            }
    
            button.style.display = 'inline-block';
    
            button.addEventListener('click', function(evt) {
                evt.preventDefault();
    
                for ( let i = firstNum; i < slides.length; i++ ) {
                if ( slides[i].style.display == 'none' ) {
                    slides[i].style.display = 'flex';  
                    buttonText.innerText = 'Скрыть'; 
                    buttonImage.classList.add('more__img--rotate');
                } else {
                    slides[i].style.display = 'none';
                    buttonText.innerText = 'Показать все'; 
                    buttonImage.classList.remove('more__img--rotate');
                } 
                } 
            });
        }
    
        if ( window.innerWidth >= 1120) {
    
            for ( let i = secondNum; i < slides.length; i++ ) {
                slides[i].style.display = 'none';
            }
        
            button.style.display = 'inline-block';
        
            button.addEventListener('click', function(evt) {
                evt.preventDefault();
        
                for ( let i = secondNum; i < slides.length; i++ ) {
                if ( slides[i].style.display == 'none' ) {
                    slides[i].style.display = 'flex';  
                    buttonText.innerText = 'Скрыть'; 
                    buttonImage.classList.add('more__img--rotate');
                } else {
                    slides[i].style.display = 'none';
                    buttonText.innerText = 'Показать все'; 
                    buttonImage.classList.remove('more__img--rotate');
                } 
                } 
            });
        }
    }

    countsSwiper(slidesTech, buttonTech, buttonTextTech, buttonImageTech, 3, 4);
    countsSwiper(slidesRepair, button, buttonText, buttonImage, 6, 8);
    swiper();
}