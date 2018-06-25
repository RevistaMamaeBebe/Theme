!function ($) {
    "use strict";

    var Posts = function () {
        },
        $self,
        $app,
        $functions;

    Posts.prototype.initPosts = function () {
        $self.posts.filter('#main').find('article:eq(0)').addClass('col-lg-8 col-md-6');
        $self.posts.filter('#main').find('article:eq(1), article:eq(2), article:eq(3)').addClass('col-lg-4 col-md-6').addClass('col-lg-3 col-md-6').each(function () {
            $functions.limitText($(this), 200);
        });
        $self.posts.filter('#main').find('article:eq(4)').addClass('col-lg-9 col-md-6');
        $self.posts.filter('#main').find('article:eq(5), article:eq(6), article:eq(7), article:eq(8), article:eq(9)').addClass('col-lg-3 col-md-6').each(function () {
            $functions.limitText($(this), 85);
        });
        $self.posts.filter('#sub').find('article').addClass('col-lg-6');

        $self.posts.filter('#main').find('article:eq(0)').after('<div class="ads mid"></div>');
        $self.posts.filter('#main').find('article:eq(3), article:eq(9)').after('<div class="ads wide"></div>');

        $self.posts.find('.ads.mid').wrap('<div class="col-lg-4"></div>');
        $self.posts.find('.ads.wide').wrap('<div class="col-lg-12"></div>');
    }


    Posts.prototype.init = function () {

        $self = this;
        $app = $.App;
        $functions = $.Functions;


        this.grid_posts = $(".grid-posts");
        this.posts      = $(".posts");
        this.posts_w    = $(".posts-w");
        this.posts_c    = $(".posts-category");
        this.demo       = false;

        this.initPosts();

    }

    //init
    $.Posts = new Posts, $.Posts.Constructor = Posts;
}(window.jQuery),

    //initializing
    function ($) {
        "use strict";
        $.Posts.init();
    }(window.jQuery);

