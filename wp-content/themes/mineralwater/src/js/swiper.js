import Swiper, {Navigation, Pagination} from 'swiper';

Swiper.use([Navigation, Pagination]);

const swiper = new Swiper('.product-swiper', {
    navigation: {
        nextEl: '.swiper-next',
        prevEl: '.swiper-prev'
    },
    watchOverflow: true,
    // loop: true,
    slidesPerGroup: 1,
    slidesPerView: 1,
    pagination: {
        el: '.swiper-pagination',
        clickable: true,
        type: 'fraction',
    },
    watchSlidesProgress: true,
});