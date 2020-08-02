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
particlesJS.load('body', './lib/particles.json', function () {
    //console.log('callback - particles.js config loaded');
});
 /* =============== ローディングアニメーション =============== */
 imagesProgress();

 function imagesProgress () {

     var $container    = $('#progress'),
         $progressStart  = $container.find('.progress_start'),
         $progressLoading  = $container.find('.progress_loading'),
         $progressImg  = $container.find('.progress_img'),
         imgLoad       = imagesLoaded('body'),
         imgTotal      = imgLoad.images.length,
         imgLoaded     = 0,
         current       = 0,
         progressTimer = setInterval(updateProgress, 1000 / 60);

     imgLoad.on('progress', function () {
         imgLoaded++;
     });

     function updateProgress () {
         var target = (imgLoaded / imgTotal) * 100;
         current += (target - current) * 0.1;

         if(current >= 10){
             $progressStart.animate({ left: '100%' }, 1000, 'easeInOutQuint');
         }

         if(current >= 100){
             clearInterval(progressTimer);
             $container.addClass('progress_complete');
             $progressImg
                 .animate({ opacity: 0 }, 250, function () {
                     $container.animate({ left: '100%' }, 1000, 'easeInOutQuint');
             });

       setTimeout(function(){
         $('#header').addClass('active');
       },2000);

       setTimeout(function(){
         $('.top_content').addClass('open');
       },1400);

       setTimeout(function(){
         $('.top_low_content').addClass('open');
       },1800);

       setTimeout(function(){
         $('.contact_low_content').addClass('active');
       },1800);
         }

         if (current > 99.9) {
             current = 100;
         }
     }
 }
