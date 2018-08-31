!function ($) {
    "use strict";

    var Plugins = function () {
        },
        $self;

    Plugins.prototype.initChat = function () {
        (function () { // DON'T EDIT BELOW THIS LINE
            var d = document, s = d.createElement('script');
            s.src = 'https://revistamamaebebe.disqus.com/embed.js';
            s.setAttribute('data-timestamp', +new Date());
            (d.head || d.body).appendChild(s);
        })();

    }

    Plugins.prototype.initCarousel = function () {
        var carouselPosts = $('.carousel-posts');

        carouselPosts.owlCarousel(
            {
                items: 1,
                loop: true,
                dots: false,
                nav: true,
                autoHeight: true,
                animateOut: 'fadeOut',
                animateIn: 'fadeIn',
            });
    }

    Plugins.prototype.initMagazine = function () {

        $('.manager-magazine').on('click', function (e) {
            e.preventDefault();
            var $this = $(this);
            $this.magazine(
                {
                    data: $this.data(),
                    url: 'http://mamaebebe.l.com/magazine/show',
                    method: 'get',
                    urlPremium: 'premium.html',
                });
        });

    }

    Plugins.prototype.initLazy = function () {
        $('.lazy').lazy({
                            threshold: 0
                        });
    }

    Plugins.prototype.waitMe = function (type, element, effect) {
        if (type == 'load') {
            $(element).waitMe(
                {
                    effect: effect,

                });
        }
        if (type == 'hide') {
            $(element).waitMe("hide");
        }
    }

    Plugins.prototype.loadButton = function (type, element) {

        var element = element ? element : '.btn-loading',
            l       = Ladda.create(document.querySelector(element));

        switch (type) {
            case 'start':
                l.start();
                break;
            case 'stop':
                l.stop();
                Ladda.stopAll();
                break;
        }
    }

    Plugins.prototype.initModal = function () {
        $(document).on(
            {
                'show.bs.modal': function () {
                    var zIndex = 1040 + (10 * $('.modal:visible').length);
                    $(this).css('z-index', zIndex);
                    setTimeout(function () {
                        $('.modal-backdrop').not('.modal-stack').css('z-index', zIndex - 1).addClass('modal-stack');
                    }, 0);
                },
                'hidden.bs.modal': function () {
                    if ($('.modal:visible').length > 0) {
                        setTimeout(function () {
                            $(document.body).addClass('modal-open');
                        }, 0);
                    }
                }
            }, '.modal');
    }


    Plugins.prototype.initLoadButton = function () {
        Ladda.bind('.btn-loading');
    }

    Plugins.prototype.init = function () {

        $self = this;

        // this.initChat();
        this.initCarousel();
        // this.initMagazine();
        this.initModal();
        this.initLoadButton();
        this.initLazy();

    }


    //init
    $.Plugins = new Plugins, $.Plugins.Constructor = Plugins;
}(window.jQuery),

    //initializing
    function ($) {
        "use strict";
        $.Plugins.init();
    }(window.jQuery);