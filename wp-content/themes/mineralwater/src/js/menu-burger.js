window.onload = function () {

    //таймер на прелоадере для swiperProduct
    function startTimer () {
        document.querySelector('.product-swiper__timer-in').classList.remove('active');
        setTimeout(() => {
            document.querySelector('.product-swiper__timer-in').classList.add('active');
        }, 500);
    }
    //запуск таймера при загрузке страницы swiperProduct
    startTimer();

    //таймер на прелоадере для swiperAbout
    function startTimerSwiperAbout () {
        document.querySelector('.about-swiper__timer-in').classList.remove('active');
        setTimeout(() => {
            document.querySelector('.about-swiper__timer-in').classList.add('active');
        }, 500);
    }
    //запуск таймера при загрузке страницы swiperAbout
    startTimerSwiperAbout ();

    const iconMenu = document.querySelector('.menu__icon');
    const bodyMenu = document.querySelector('.mobile-menu__nav');

    //mobile menu
    const toggleMenu = () => {
        document.body.classList.toggle('lock');
        document.getElementsByTagName('html')[0].classList.toggle('lock');
        bodyMenu.classList.toggle('active');
        iconMenu.classList.toggle('active');
    }

    if (iconMenu) {
        iconMenu.addEventListener('click', e => {
            e.stopPropagation();
            toggleMenu();
        });

        document.addEventListener('click', e => {
            let target = e.target;
            let itsMenu = target === bodyMenu || bodyMenu.contains(target);
            let itsIconMenu = target === iconMenu;
            let menuIsActive = bodyMenu.classList.contains('active');

            if (!itsMenu && !itsIconMenu && menuIsActive) {
                bodyMenu.classList.toggle('active');
                iconMenu.classList.toggle('active');
            }
        });
    }

}