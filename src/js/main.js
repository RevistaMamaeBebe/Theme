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
        $self.navContent.css('min-height', $self.navBar.innerHeight());

        $(window).on('scroll resize', function () {
            if ($(window).scrollTop() > ($self.navBar.innerHeight())) {
                $self.header.addClass('fixed');
            } else {
                $self.header.removeClass('fixed');
            }
            $self.navContent.css('min-height', $self.navBar.innerHeight());
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

        $(".sidebar-menu .content").mCustomScrollbar(
            {
                theme: "minimal-dark"
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