$('.fade-in').on('inview', function(event, isInView) {
    alert("on view");
    $(this).addClass('inview-in');
});
