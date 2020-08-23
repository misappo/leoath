//inview animation
var isInviewProduction = false;
var isInviewAd = false;

$('#d_contact').on('inview', function (event, isInView) {
    if(!isInviewProduction){
        setTimeout(function () {
            $('#d_contact').find('.textAnimation').textAnimation();
        }, 900);
        setTimeout(function () {
            $('#d_contact').find('.textAnimation-delay').textAnimation();
        }, 1500);
        isInviewProduction = true;
    }
});

