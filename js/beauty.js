//swiper button
$('.btn_prev').on('click', function () {
    $('.swiper-button-prev').click()
    return false;
});

$('.btn_next').on('click', function () {
    $('.swiper-button-next').click()
    return false;
});
//swiper
var mySwiper = new Swiper('.swiper-container', {
    autoplay: {
        delay: 5500,
        disableOnInteraction: true,
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
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
    speed: 600,
    spaceBetween: 230,
    on: {
        transitionStart: function () {
            ResetText();
            StartTextAnimation();
        },
    },
},
    false);
$(".swiper-container").hover(function () {
    (this).swiper.autoplay.stop();
}, function () {
    (this).swiper.autoplay.start();
});

//side nav fixed
$(function ($) {
    var content = $(".m_contents");
    var sidebar = $(".m_heading");
    var sticked = $(".m_heading_inner");

    // サイドバーの位置
    var sidebar_top = sidebar.offset().top;
    // 固定するコンテンツの元々の位置
    var sticked_original_top = sticked.offset().top;
    // 固定するコンテンツの高さ
    var sticked_height = sticked.height();

    $(window).on('scroll resize', function () { // スクロールかリサイズ時
        // 現在の位置
        var scrollTop = $(document).scrollTop();
        // メインコンテンツ最後尾
        var content_bottom = content.offset().top + content.height();

        if ((scrollTop > sticked_original_top - 76) && (scrollTop < content_bottom - sticked_height - 76)) {
            // 現在位置が、初期位置より下で、メインコンテンツ最後尾より上なら、画面上部にサイドバーを固定
            sticked.css({
                'position': 'fixed',
                'top': 76,
                'width': sidebar.width()
            });
        } else if (scrollTop >= content_bottom - sticked_height - 76) {
            // 現在位置がメインコンテンツ最後尾より下なら、メインコンテンツ最後尾にサイドバーを位置させる
            sticked.css({
                'position': 'absolute',
                'top': content_bottom - sticked_height - sidebar_top,
                'width': sidebar.width()
            });
        } else {
            // 現在位置が初期位置より上なら、何もしない
            sticked.css({ 'position': 'static' });
        }
    });
});

function StartTextAnimation() {
    var active_tag = $('#cosmetic .swiper-slide-active');
        setTimeout(function () {
            SetAnimation(active_tag.find('.textAnimation'));
        }, 1000);

        setTimeout(function () {
            SetAnimation(active_tag.find('.textAnimation-delay'));
        }, 2500);
}

function SetAnimation(target) {
    target.find('h6').text(target.find('h6').attr("data-text"));
    target.textAnimation();
}

function ResetText() {
    $('#cosmetic .textAnimation').find('h6').find('span').remove();
    $('#cosmetic .textAnimation-delay').find('h6').find('span').remove();
}