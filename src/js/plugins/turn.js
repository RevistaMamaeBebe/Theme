(function ($) {

    $.fn.magazine = function (options) {

        var base      = this;
        var serialize = {};

        var settings = $.extend(
            {
                complete: function () {
                },
                url: '',
                urlError: '',
                urlPremium: '',
                data: '',
                method: 'post',
                headers: {},
            }, options);

        var $selector = $("body"),
            dataFiles = {};


        this.each(function () {

            modal();

        });

        function modal () {

            $('#modal-magazine').remove();

            $selector.append(
                '<div class="modal fade modal-magazine" id="modal-magazine" tabindex="-1" role="dialog">' +
                '<div class="modal-close" data-dismiss="modal" aria-label="Close"></div>' +
                '<div class="modal-dialog" role="document">' +
                '<div class="modal-content">' +
                '</div>' +
                '</div>' +
                '</div>')

            $('#modal-magazine').modal('show');
            $('#modal-magazine').on('hidden.bs.modal', function (e) {
                $(this).remove();
            });
            $('#modal-magazine').on('shown.bs.modal', function (e) {
                var modal = $(this).find('.modal-content');
                initTurn(modal);
            })

        }

        function initTurn (managerMagazine) {
            managerMagazine.prepend(
                '<div class="magazine-content">' +
                '<div id="flipbook" class="animated flipbook">' +
                // '<div ignore="1" class="buttons next-button"></div>' +
                // '<div ignore="1" class="buttons previous-button"></div>' +
                '</div>' +
                '</div>'
            );

            initPages(managerMagazine);
        }

        function initPages (managerMagazine) {
            var flipbook = managerMagazine.find('.flipbook');
            var limit    = 10;

            flipbook.append('<div class="loader" ignore="1"></div>');

            $.post({
                       url: settings.url,
                       headers: settings.headers,
                       method: settings.method
                   }, settings.data, function (data) {

                flipbook.find('.loader').remove();

                if (data.files) {
                    dataFiles = data.files;
                    $.each(data.files, function (index, val) {
                        var index   = index + 1;
                        var element = $('<div />', {'data-id': index}).html('<div class="load-file"><div class="loader"></div></div>');
                        flipbook.append(element);
                    });
                    initPlugin();
                }
            });

        }

        function loadPage (element, val) {

            if (val.url != null) {

                if (element.find('img').length == 0) {

                    var loadingTask = pdfjsLib.getDocument(val.url);

                    loadingTask.promise.then(function (pdf) {

                        var pageNumber = 1;
                        pdf.getPage(pageNumber).then(function (page) {

                            var viewport  = page.getViewport(1),
                                canvas    = document.createElement('canvas'),
                                context   = canvas.getContext('2d');
                            canvas.height = viewport.height;
                            canvas.width  = viewport.width;

                            // Render PDF page into canvas context
                            var renderContext = {
                                canvasContext: context,
                                viewport: viewport
                            };
                            page.render(renderContext).then(function () {
                                element.append('<img src="' + canvas.toDataURL('image/jpeg', 1.0) + '">');
                                element.find('.load-file').remove();
                            });
                        });
                    }, function (reason) {
                        if (settings.urlError) {
                            element.load(settings.urlError);
                        }
                    });

                }

            } else {
                if (settings.urlPremium) {
                    if(element.find('.premium-content').length == 0) {
                        element.load(settings.urlPremium, function () {
                            element.find('.load-file').remove();
                        });
                    }
                }
            }
        }

        function initPlugin () {
            var flipbook         = $('.flipbook'),
                magazineViewport = $('.magazine-viewport');

            flipbook.turn(
                {
                    width: 1040,
                    height: 736,
                    duration: 1000,
                    autoCenter: true,
                    elevation: 50,
                    acceleration: false,
                    when: {

                        turning: function (e, page, view) {
                            var book        = $(this),
                                currentPage = book.turn('page'),
                                pages       = book.turn('pages');
                            Hash.go('page/' + page).update();
                        },

                        turned: function (e, page, view) {
                            var book = $(this);

                            $.each(view, function (index, val) {
                                if (val != 0) {
                                    var page    = book.find('.page-wrapper[page="' + val + '"] .page'),
                                        element = page.filter('[data-id="' + val + '"]'),
                                        file    = dataFiles[val - 1];
                                    loadPage(element, file);
                                }
                            });
                        }
                    }

                }).turn('page', 2);

            Hash.on('^page\/([0-9]*)$', {
                yep: function (path, parts) {
                    var page = parts[1];

                    if (page !== undefined) {
                        if (flipbook.turn('is'))
                            flipbook.turn('page', page);
                    }

                },
                nop: function (path) {

                    if (flipbook.turn('is'))
                        flipbook.turn('page', 1);
                }
            });
        }

        $('.next-button').on($.mouseEvents.over, function () {
            $(this).addClass('next-button-hover');

        }).on($.mouseEvents.out, function () {

            $(this).removeClass('next-button-hover');

        }).on($.mouseEvents.down, function () {

            $(this).addClass('next-button-down');

        }).on($.mouseEvents.up, function () {

            $(this).removeClass('next-button-down');

        }).on('click', function () {

            $('.flipbook').turn('next');

        });

        $('.previous-button').on($.mouseEvents.over, function () {

            $(this).addClass('previous-button-hover');

        }).on($.mouseEvents.out, function () {

            $(this).removeClass('previous-button-hover');

        }).on($.mouseEvents.down, function () {

            $(this).addClass('previous-button-down');

        }).on($.mouseEvents.up, function () {

            $(this).removeClass('previous-button-down');

        }).on('click', function () {

            $('.flipbook').turn('previous');

        });

        $(document).on('keydown', function (e) {

            var previous = 37, next = 39, esc = 27;

            switch (e.keyCode) {
                case previous:

                    // left arrow
                    $('.flipbook').turn('previous');
                    e.preventDefault();

                    break;
                case next:

                    //right arrow
                    $('.flipbook').turn('next');
                    e.preventDefault();

                    break;
            }
        });


    }

})(jQuery);