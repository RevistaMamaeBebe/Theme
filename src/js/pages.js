!function ($) {
    "use strict";

    var Pages = function () {
        },
        $self,
        $app,
        $functions;

    Pages.prototype.initPages = function () {

        $self.pageText.html($functions.br2nl($self.pageText.html()));
        $self.pageText.html($functions.nl2br($self.pageText.html()));

        $self.pageText.find('p').filter(function () {
            return $.trim($(this).html()) == '';
        }).remove();

        $self.pageText.find('img').on('error', function () {
            $(this).remove();
        });

    }

    Pages.prototype.initTimeline = function () {

        var separator     = 3,
            timeline      = $(".timeline"),
            timeline_item = $(".timeline .item");

        // for (var i = 0; i < 43; i++) {
        //     timeline.append('<article class="item">' +
        //         '<div class="content">' +
        //         '<div class="box">' +
        //         '<a href="">4 semanas de gravidez ' + i + '</a>' +
        //         '<p>Você já fez um teste de gravidez? É provável que suspeite que algo "diferente" está acontecendo dentro de você.</p>' +
        //         '</div>' +
        //         '</div>' +
        //         '</article>')
        // }

        var timeline_item = $(".timeline .item");

        for (var x = 0; x < timeline_item.length; x += separator) {
            timeline_item.slice(x, x + separator).wrapAll('<div class="group"></div>');
        }

        var group = timeline.find('.group');

        for (var i = 0; i < group.length; i++) {

            var g = group.eq(i);

            if (i == 0) {
                g.append('<div class="box-time"></div>');
            }

            if (i === group.length - 1) {
                g.append('<div class="box-time"></div>');
            }

            if (g.find('.item').length == separator && i !== group.length - 1) {

                if ((i % 2) == 0) {
                    g.attr('data-separator', 'right');
                } else {
                    g.attr('data-separator', 'left');
                }
            }

            if ((i % 2) == 0) {
                g.attr('data-align', 'left');
            } else {
                g.attr('data-align', 'right');
            }
        }

    }

    Pages.prototype.initLogin = function () {
        var modalLogin    = $('.modal-login'),
            leftContent   = modalLogin.find('.left-content'),
            modalLoginTab = leftContent.find('.modal-login-tab');

        modalLoginTab.on('click', function (e) {
            e.preventDefault();

            var tab = $(this).data('tab');
            leftContent.attr('data-tab', tab);

        });

        modalLogin.on('show.bs.modal', function (event) {
            var button    = $(event.relatedTarget),
                recipient = button.data('event'),
                modal     = $(this);

            leftContent.attr('data-tab', recipient);
        });
    }

    Pages.prototype.init = function () {

        $self      = this;
        $app       = $.App;
        $functions = $.Functions;

        this.pageText = $(".page-text");

        this.initPages();
        this.initTimeline();
        this.initLogin();

    }

    //init
    $.Pages = new Pages, $.Pages.Constructor = Pages;
}(window.jQuery),

    //initializing
    function ($) {
        "use strict";
        $.Pages.init();
    }(window.jQuery);