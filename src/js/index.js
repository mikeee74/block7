import '../scss/style.scss';
import Swiper from 'swiper/bundle';
import {swiperRepair} from './swiperRepair.js';
import {swiperTech} from './swiperTech.js';
import {burger} from './burger.js';
import {popup} from './popup.js';

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


swiper();
swiperRepair();
swiperTech();
burger();
popup();
console.log('Works!');
