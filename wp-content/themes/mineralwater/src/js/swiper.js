import Swiper, {Navigation, Pagination, Autoplay} from 'swiper';

Swiper.use([Navigation, Pagination, Autoplay]);
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

const swiperProduct = new Swiper('.product-swiper', {
    watchOverflow: true,
    loop: false,
    slidesPerGroup: 1,
    slidesPerView: 1,
    direction: 'vertical',
    pagination: {
        el: '.product-swiper__pagination',
        clickable: true,
        type: 'bullets',
    },
    autoplay: {
        delay: 5000,
        stopOnLastSlide: false,
        disableOnInteraction: false,
    },
    on: {
        slideChange: () => {
            //фракции
            let sliderAllSlides = document.querySelector('.product-swiper__total');
            let sliderCurrentSlide = document.querySelector('.product-swiper__current');
            sliderAllSlides.innerHTML = swiperProduct.slides.length;
            sliderCurrentSlide.innerHTML = ++swiperProduct.realIndex;

            //запуск таймера при переключении слайда
            startTimer();
        },
    },
});

//таймер на прелоадере для swiperProduct
function startTimer () {
    document.querySelector('.product-swiper__timer-in').classList.remove('active');
    setTimeout(() => {
        document.querySelector('.product-swiper__timer-in').classList.add('active');
    }, 500);
}

const swiperAbout = new Swiper('.about-swiper', {
    navigation: {
        nextEl: '.about-swiper__next',
        prevEl: '.about-swiper__prev'
    },
    watchOverflow: true,
    loop: false,
    slidesPerGroup: 1,
    pagination: {
        el: '.about-swiper__pagination',
        clickable: true,
        type: 'fraction',
    },
    breakpoints: {
        320: {
            slidesPerView: 1,
            spaceBetween: 20,
        },
        1400: {
            slidesPerView: 2.2,
            spaceBetween: 10,
        }
    },
    autoplay: {
        delay: 5000,
        stopOnLastSlide: false,
        disableOnInteraction: false,
    },
    on: {
        slideChange: () => {
            //запуск таймера при переключении слайда
            startTimerSwiperAbout();
        },
    },
});

//таймер на прелоадере для swiperAbout
function startTimerSwiperAbout () {
    document.querySelector('.about-swiper__timer-in').classList.remove('active');
    setTimeout(() => {
        document.querySelector('.about-swiper__timer-in').classList.add('active');
    }, 500);
}

// swiper.on('slideChange', function () {
// });

