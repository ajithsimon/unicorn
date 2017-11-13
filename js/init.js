$('.nav li a').bind('click', function (event) {
    var $anchor = $(this);
    $('html, body').stop().animate({
        scrollTop: $($anchor.attr('href')).offset().top - 150
    }, 1500, 'easeInOutExpo');
    event.preventDefault();
});
$(document).on('click', '.navbar-collapse.in', function (e) {
    if ($(e.target).is('a')) {
        $(this).collapse('hide');
    }
});