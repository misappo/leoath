$('#w_production').on('inview', function (event, isInView) {
    $(this).find('.img_wrapper').addClass('color');
    $(this).find('.img_wrapper').css('opacity', 1);
});
$('#w_ad').on('inview', function (event, isInView) {
    $(this).find('.img_wrapper').addClass('color');
    $(this).find('.img_wrapper').css('opacity', 1);
});
setTimeout(function(){
    $('.textAnimation').textAnimation();
  }, 1500);
  setTimeout(function(){
$('.textAnimation-delay').textAnimation();
}, 2500);

