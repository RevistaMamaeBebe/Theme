!function ($) {
    "use strict";

    var Functions = function () {
        },
        $self;

    Functions.prototype.nl2br = function (value) {
        if (value) {
            value = value.trim();
            return value.replace(/(\r\n|\n\r|\r|\n)/g, "<p>");
        }
    }

    Functions.prototype.br2nl = function (value) {
        if (value) {
            value = value.trim();
            return value.replace(/<br>/g, "\r");
        }
    }

    Functions.prototype.limitText = function ($self, limit) {
        var txt = $self.find('p').text();

        if (txt.length > limit) {
            var $new = $self.find('p').text(txt.substring(0, limit) + ' [...]');
        }
    }

    Functions.prototype.init = function () {

        $self = this;

    }

    //init
    $.Functions = new Functions, $.Functions.Constructor = Functions;
}(window.jQuery),

    //initializing
    function ($) {
        "use strict";
        $.Functions.init();
    }(window.jQuery);