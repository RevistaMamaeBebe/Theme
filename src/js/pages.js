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

        var separator = 3,
            timeline  = $('.timeline');

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

        var timeline_item = timeline.find('.item'),
            timeline_box  = timeline.find('.box-time');

        timeline_box.eq(0).css('borderColor', timeline_item.eq(0).css('backgroundColor'));
        if(timeline_box.length >= 2) {
            timeline_box.eq(1).css('borderColor', timeline_item.last().css('backgroundColor'));
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