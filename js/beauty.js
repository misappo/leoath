var mySwiper = new Swiper('.swiper-container', {
    autoplay: {
        delay: 3000,
    },
    effect: 'coverflow',
    slidesPerView: 'auto',
    loopedSlides: '4',
    centeredSlides: true,
    loop: true,
    coverflowEffect: {
        rotate: 0,
        slideShadows: false,
        stretch: 0,
        modifier: 3,
    },
    pagination: {
        el: '.swiper-pagination',
        type: 'bullets',
        paginationClickable: true,
    },
    nextButton: '.swiper-button-next',
    prevButton: '.swiper-button-prev',
    loop: true,
    centeredSlides: true,
    //slideToClickedSlide: true,
    spaceBetween: 230,
},
    false);
