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

    Plugins.prototype.waitMe = function (type, element, effect) {
        if(type == 'load') {
            $(element).waitMe(
                {
                    effect: effect,

                });
        }
        if(type == 'hide'){
            $(element).waitMe("hide");
        }
    }

    Plugins.prototype.init = function () {

        $self = this;

        this.initChat();
        this.initCarousel();

    }


    //init
    $.Plugins = new Plugins, $.Plugins.Constructor = Plugins;
}(window.jQuery),

    //initializing
    function ($) {
        "use strict";
        $.Plugins.init();
    }(window.jQuery);