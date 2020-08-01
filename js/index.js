$('.fade-in').on('inview', function(event, isInView) {
    $(this).addClass('inview-in');
});

$('.btn_prev').on('click', function () {
    $('.swiper-button-prev').click()
    return false;
});

$('.btn_next').on('click', function () {
    $('.swiper-button-next').click()
    return false;
});

//swiper js
var mySwiper = new Swiper('.swiper-container', {
    autoplay: {
        delay: 3000,
    },
    scrollbar: {
        el: '.swiper-scrollbar',
        hide: false,
        draggable: true,
        dragSize: 500,
    },
    effect: 'coverflow',
    slidesPerView: 2,
    centeredSlides: true,
    loop: true,
    coverflowEffect: {
        rotate: 0,
        slideShadows: false,
        stretch: 0,
        modifier: 5,
    },
    pagination: {
        el: '.swiper-pagination',
        clickable: true,
    },
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
})

/* particlesJS.load(@dom-id, @path-json, @callback (optional)); */
particlesJS.load('main', './lib/particles.json', function () {
    //console.log('callback - particles.js config loaded');
});
