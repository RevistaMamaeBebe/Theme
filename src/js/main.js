!function ($) {
    "use strict";

    var App = function () {
        },
        $self;

    App.prototype.initLoader = function () {
        $(window).on('load', function () {
            $self.loader.fadeOut();
        });
    }

    App.prototype.initHeader = function () {

        $(window).on('scroll resize load', function () {

            var scroll    = $(window).scrollTop(),
                headerTop = ($('.header-top').length > 0 ? $('.header-top').innerHeight() : 0);

            if (scroll >= headerTop) {
                $self.header.addClass('fixed');
            }else{
                $self.header.removeClass('fixed');
            }

        });

    }

    App.prototype.initNavBar = function () {
        $self.navBar.filter('#nav-top').find('.navbar-nav > li.dropdown').slice(-1).addClass('last-elements');
    }

    App.prototype.initSideBar = function () {
        $('.sidebar-collapse').on('click', function (e) {
            e.preventDefault();

            $self.sidebar.addClass('active');
            $self.overlay.fadeIn();

            $('.collapse.in').toggleClass('in');
            $('a[aria-expanded=true]').attr('aria-expanded', 'false');

        });

        $('.dismiss, .overlay').on('click', function () {
            $self.sidebar.removeClass('active');
            $self.overlay.fadeOut();

        });
    }

    App.prototype.init = function () {

        $self = this;

        this.loader     = $('.loader-content');
        this.header     = $('.header');
        this.navContent = $('.nav-content');
        this.navBar     = $('.navbar');
        this.sidebar    = $('.sidebar-menu');
        this.overlay    = $('.overlay');

        this.initLoader();
        this.initHeader();
        this.initNavBar();
        this.initSideBar();

    }

    //init
    $.App = new App, $.App.Constructor = App;
}(window.jQuery),

    //initializing
    function ($) {
        "use strict";
        $.App.init();
    }(window.jQuery);