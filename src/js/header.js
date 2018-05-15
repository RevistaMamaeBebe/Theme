var header     = $('.header'),
    navContent = $('.nav-content'),
    navBar     = $('.navbar');

$(document).ready(function () {
    navContent.css('min-height', navBar.innerHeight());
});

console.log(header.innerHeight());

$(window).on('scroll resize', function () {

    if ($(window).scrollTop() > (navBar.innerHeight())) {
        header.addClass('fixed');
    } else {
        header.removeClass('fixed');
    }
    navContent.css('min-height', navBar.innerHeight());
});