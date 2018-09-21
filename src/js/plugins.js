!function ($) {
    "use strict";

    var Plugins = function () {
        },
        $self, $functions;

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

    Plugins.prototype.initCountdown = function () {

        $('[data-countdown]').each(function () {
            var $this = $(this), finalDate = $(this).data('countdown');

            $self.itemCountdown($this, 'days', 'Dias', 'default');
            $self.itemCountdown($this, 'hours', 'Horas', 'default');
            $self.itemCountdown($this, 'minutes', 'Minutos', 'default');
            $self.itemCountdown($this, 'seconds', 'Segundos', 'default');

            $this.countdown(finalDate, function (event) {

                var secoundsDay    = (60 * 60 * 24),
                    secoundsMinute = (60 * 60),
                    seconds        = Math.floor(((60 - event.offset.seconds) / 60) * 100),
                    minutes        = Math.floor(((60 - event.offset.minutes) / 60) * 100),
                    hours          = Math.floor(((24 - event.offset.hours) / 24) * 100),
                    days           = Math.floor(((event.offset.totalSeconds - (86400 * event.offset.totalDays)) / event.offset.totalSeconds) * 100);

                if (event.offset.days == 0) {
                    days = days - (event.offset.hours / 24);
                }
                if (event.offset.hours == 0) {
                    days = days - (event.offset.minutes / 60 / 24);
                }
                if (event.offset.minutes == 0) {
                    days = 100;
                }

                var json = [
                    {
                        id: 'days',
                        percent: days,
                        time: event.strftime('%D'),
                        label: event.offset.days > 1 ? 'Dias' : 'Dia'
                    },
                    {
                        id: 'hours',
                        percent: hours,
                        time: event.strftime('%H'),
                        label: event.offset.hours > 1 ? 'Horas' : 'Hora'
                    },
                    {
                        id: 'minutes',
                        percent: minutes,
                        time: event.strftime('%M'),
                        label: event.offset.minutes > 1 ? 'Minutos' : 'Minuto'
                    },
                    {
                        id: 'seconds',
                        percent: seconds,
                        time: event.strftime('%S'),
                        label: event.offset.seconds > 1 ? 'Segundos' : 'Segundo'
                    }
                ];

                $.each(json, function (index, value) {
                    $this.find('[data-item="' + value.id + '"] .water').each(function () {
                        this.style.transform = 'translate(0' + ',' + (100 - value.percent) + '%)';
                        $(this).closest('.wave-item').find('.time').html(value.time);
                        $(this).closest('.wave-item').find('.label').html(value.label);
                    });
                });

                //
                // $this.html(event.strftime(
                //     '<span id="days"><strong>%D</strong> Dias</span>'
                //     + '<span id="hours"><strong>%H</strong> Horas</span>'
                //     + '<span id="minutes"><strong>%M</strong> Minutos</span>'
                //     + '<span id="seconds"><strong>%S</strong> Segundos</span>'));

            });
        });
    }

    Plugins.prototype.itemCountdown = function ($element, $class, $label, $color) {
        $element.append(
            '<div class="wave-item" data-item="' + $class + '" data-color="' + $color + '">' +
            '<svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" style="display: none;">' +
            '<symbol id="wave">' +
            '<path d="M420,20c21.5-0.4,38.8-2.5,51.1-4.5c13.4-2.2,26.5-5.2,27.3-5.4C514,6.5,518,4.7,528.5,2.7c7.1-1.3,17.9-2.8,31.5-2.7c0,0,0,0,0,0v20H420z"></path>' +
            '<path d="M420,20c-21.5-0.4-38.8-2.5-51.1-4.5c-13.4-2.2-26.5-5.2-27.3-5.4C326,6.5,322,4.7,311.5,2.7C304.3,1.4,293.6-0.1,280,0c0,0,0,0,0,0v20H420z"></path>' +
            '<path d="M140,20c21.5-0.4,38.8-2.5,51.1-4.5c13.4-2.2,26.5-5.2,27.3-5.4C234,6.5,238,4.7,248.5,2.7c7.1-1.3,17.9-2.8,31.5-2.7c0,0,0,0,0,0v20H140z"></path>' +
            '<path d="M140,20c-21.5-0.4-38.8-2.5-51.1-4.5c-13.4-2.2-26.5-5.2-27.3-5.4C46,6.5,42,4.7,31.5,2.7C24.3,1.4,13.6-0.1,0,0c0,0,0,0,0,0l0,20H140z"></path>' +
            '</symbol>' +
            '</svg>' +
            '<div class="water-jar">' +
            '<div class="water-filling">' +
            '<span class="time">0</span>' +
            '<span class="label">' + $label + '</span>' +
            '</div>' +
            '<div id="water" class="water">' +
            '<svg viewBox="0 0 560 20" class="water_wave water_wave_back">' +
            '<use xlink:href="#wave"></use>' +
            '</svg>' +
            '<svg viewBox="0 0 560 20" class="water_wave water_wave_front">' +
            '<use xlink:href="#wave"></use>' +
            '</svg>' +
            '</div>' +
            '</div>' +
            '</div>');
    }

    Plugins.prototype.init = function () {

        $self      = this;
        $functions = $.Functions;

        // this.initChat();
        this.initCarousel();
        // this.initMagazine();
        this.initModal();
        this.initLoadButton();
        this.initLazy();
        this.initCountdown();

    }


    //init
    $.Plugins = new Plugins, $.Plugins.Constructor = Plugins;
}(window.jQuery),

    //initializing
    function ($) {
        "use strict";
        $.Plugins.init();
    }(window.jQuery);