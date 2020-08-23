//inview animation
var isInviewProduction = false;
var isInviewAd = false;

$('#w_production').on('inview', function (event, isInView) {
    if(!isInviewProduction){
        setTimeout(function () {
            $('#w_production').find('.textAnimation').textAnimation();
        }, 1500);
        setTimeout(function () {
            $('#w_production').find('.textAnimation-delay').textAnimation();
        }, 2500);
        isInviewProduction = true;
    }
    $('#w_production').find('.img_wrapper').addClass('color');
    $('#w_production').find('.img_wrapper').css('opacity', 1);
});

$('#w_ad').on('inview', function (event, isInView) {
    if(!isInviewAd){
        setTimeout(function () {
            $('#w_ad').find('.textAnimation').textAnimation();
        }, 1500);
        setTimeout(function () {
            $('#w_ad').find('.textAnimation-delay').textAnimation();
        }, 2500);
        isInviewAd = true;    
    }
    $('#w_ad').find('.img_wrapper').addClass('color');
    $('#w_ad').find('.img_wrapper').css('opacity', 1);
});
    





