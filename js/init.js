$('.nav li a').bind('click', function (event) {
    var $anchor = $(this);
    $('html, body').stop().animate({
        scrollTop: $($anchor.attr('href')).offset().top - 150
    }, 1500, 'easeInOutExpo');
    event.preventDefault();
});
