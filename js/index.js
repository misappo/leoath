//swiper button
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

//particles-js variable
window.onresize =//<- resize時も対応
window.onload = function () {
    var cnv = document.getElementsByClassName('particles-js-canvas-el')[0];
    if (!cnv) {
        return false;
    }
    var ctx = cnv.getContext('2d');
    cnv.setAttribute('width', cnv.clientWidth);  //<- sizeを教えてあげる
    cnv.setAttribute('height', cnv.clientHeight);//<- sizeを教えてあげる

    var p = false;
    cnv.addEventListener('mousemove', (e) => {
        console.log(e.which, cnv);
        if (e.which == 1) {
            if (!p) {
                ctx.beginPath();
                ctx.strokeStyle = "#fff";
                ctx.moveTo(e.x, e.y);
                p = true;
            } else {
                ctx.lineTo(e.x, e.y);
                ctx.stroke();
            }
        } else {
            p = false;
        }
    });
};    

/* particlesJS.load(@dom-id, @path-json, @callback (optional)); */
particlesJS.load('particles-js', './lib/particles.json', function () {
    //console.log('callback - particles.js config loaded');
});
/* =============== ローディングアニメーション =============== */

setTimeout(function () { document.body.className = 'page-loaded' }, 0);
imagesProgress();

function upateLoadingImage(current) {
    var maxWidthPar = 60;
    var progress = current / 100;
    var width = maxWidthPar * progress;
    $('.header .title .title2 .char1').css("width", width + "%");
    $('.progress-label').attr("data-progress-text", Math.round(current) + "%");
    $('.progress-label').text( Math.round(current) + "%");
}

 function imagesProgress () {

     var $container    = $('#progress'),
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
         upateLoadingImage(current);

         if(current >= 100){
             clearInterval(progressTimer);
             $container.animate({ left: '100%' }, 1000);
             setTimeout(function () { $container.remove(); }, 1000);
         }

         if (current > 99.9) {
             current = 100;
         }
     }
 }
