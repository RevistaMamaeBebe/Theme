$(document).ready(function () {

    var sidebar = $('.sidebar-menu');
    var overlay = $('.overlay');

    $('.sidebar-collapse').on('click', function (e) {

        e.preventDefault();

        sidebar.addClass('active');
        overlay.fadeIn();
        $('.collapse.in').toggleClass('in');
        $('a[aria-expanded=true]').attr('aria-expanded', 'false');

    });

    $('.dismiss, .overlay').on('click', function () {

        sidebar.removeClass('active');
        overlay.fadeOut();

    });

    $(".sidebar-menu .content").mCustomScrollbar(
        {
            theme:"minimal-dark"
        });

});
