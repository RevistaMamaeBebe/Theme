$.fn.limit = function (l) {
    var txt = this.find('p').text();

    if (txt.length > l) {
        var $new = this.find('p').text(txt.substring(0, l) + ' [...]');
        // this.find('p').text($new.substring($new, l) + ' [...]');
    }
}


var json       = [
        {title: 'Mamãe, eu quero dar uma voltinha!', image: '../../../build/images/demo/01.jpg', tag: 'Gestação'},
        {title: 'Meu pequeno é destro ou canhoto?', image: '../../../build/images/demo/02.jpg', tag: '0–3 ANOS'},
        {title: 'Gestante ao volante!', image: '../../../build/images/demo/03.jpg', tag: '0–3 ANOS'},
        {title: 'A importância de manter a criança hidratada.', image: '../../../build/images/demo/04.jpg', tag: '3–6 ANOS'},
        {title: 'É melhor prevenir do que remediar', image: '../../../build/images/demo/05.jpg', tag: 'Dicas'},
        {title: 'Conversando com o bebê ainda na barriga!', image: '../../../build/images/demo/06.jpg', tag: '0–3 ANOS'},
        {title: 'Higiene Oral em Bebês', image: '../../../build/images/demo/07.jpg', tag: 'Gestação'},
        {title: 'Higiene Oral em Bebês', image: '../../../build/images/demo/08.jpg', tag: 'Dicas'},
        {title: 'Higiene Oral em Bebês', image: '../../../build/images/demo/09.jpg', tag: '0–6 ANOS'},
        {title: 'Higiene Oral em Bebês', image: '../../../build/images/demo/10.jpg', tag: '0–3 ANOS'},
        {title: 'Higiene Oral em Bebês', image: '../../../build/images/demo/11.jpg', tag: 'Gestação'},
        {title: 'Higiene Oral em Bebês', image: '../../../build/images/demo/12.jpg', tag: 'Dicas'}
    ],
    grid_posts = $(".grid-posts").empty(),
    posts      = $(".posts").empty(),
    posts_w    = $(".posts-w").empty();
posts_c        = $(".posts-category");

for (var i = 0; i < 5; i++) {

    grid_posts.append(
        '                <article>\n' +
        '                        <div class="content">\n' +
        '                    <a href="#">\n' +
        '                        <div class="box-image"><img src="' + json[i].image + '"></div>\n' +
        '                        </a>\n' +
        '                        <div class="caption">\n' +
        '                            <span class="post-tag"><a href="">' + json[i].tag + '</a></span>\n' +
        '                            <h4>\n' +
        '                                <a href="">' + json[i].title + '</a>\n' +
        '                            </h4>\n' +
        '                            <div class="meta">\n' +
        '                                <span class="date"><i class="fa fa-clock-o"></i> June 26, 2017</span>\n' +
        '                                <span class="author"><i class="fa fa-user"></i> Admin</span>\n' +
        '                            </div>\n' +
        '                        </div>\n' +
        '                        </div>\n' +
        '                </article>'
    );
}

for (var i = 0; i < 10; i++) {

    posts.filter("#main").append(
        '                        <article data-tag="' + json[i].tag + '">\n' +
        '                            <div class="post">\n' +
        '                            <a href="">\n' +
        '                        <div class="box-image"><img src="' + json[i].image + '"></div>\n' +
        '                            </a>\n' +
        '                            <div class="content">\n' +
        '                            <span class="post-tag"><a href="">' + json[i].tag + '</a></span>\n' +
        '                            <h3>' + json[i].title + '</h3>\n' +
        '                            <p>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea [...]</p>\n' +
        '                            <div class="meta">\n' +
        '                                <span class="date"><i class="fa fa-clock-o"></i> June 26, 2017</span>\n' +
        '                                <span class="author"><i class="fa fa-user"></i> Admin</span>\n' +
        '                            </div>\n' +
        '                            </div>\n' +
        '                            <ul class="social list-inline">\n' +
        '                                <li><a href="" class="facebook"><i class="fa fa-facebook"></i></a></li>\n' +
        '                                <li><a href="" class="twitter"><i class="fa fa-twitter"></i></a></li>\n' +
        '                                <li><a href="" class="googlep"><i class="fa fa-google-plus"></i></a></li>\n' +
        '                                <li><a href="" class="whatsapp"><i class="fa fa-whatsapp"></i></a></li>\n' +
        '                            </ul>\n' +
        '                            </div>\n' +
        '                        </article>'
    );
}

for (var i = 0; i < 4; i++) {

    posts.filter("#sub").append(
        '                        <article data-tag="' + json[i].tag + '">\n' +
        '                            <div class="post">\n' +
        '                            <a href="">\n' +
        '                        <div class="box-image"><img src="' + json[i].image + '"></div>\n' +
        '                            </a>\n' +
        '                            <div class="content">\n' +
        '                            <span class="post-tag"><a href="">' + json[i].tag + '</a></span>\n' +
        '                            <h3>' + json[i].title + '</h3>\n' +
        '                            <p>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea [...]</p>\n' +
        '                            <div class="meta">\n' +
        '                                <span class="date"><i class="fa fa-clock-o"></i> June 26, 2017</span>\n' +
        '                                <span class="author"><i class="fa fa-user"></i> Admin</span>\n' +
        '                            </div>\n' +
        '                            </div>\n' +
        '                            <ul class="social list-inline">\n' +
        '                                <li><a href="" class="facebook"><i class="fa fa-facebook"></i></a></li>\n' +
        '                                <li><a href="" class="twitter"><i class="fa fa-twitter"></i></a></li>\n' +
        '                                <li><a href="" class="googlep"><i class="fa fa-google-plus"></i></a></li>\n' +
        '                                <li><a href="" class="whatsapp"><i class="fa fa-whatsapp"></i></a></li>\n' +
        '                            </ul>\n' +
        '                            </div>\n' +
        '                        </article>'
    );
}

$.each(posts_c.find(".posts"), function (index, value) {
    for (var i = 0; i < 4; i++) {

        $(this).append(
            '                        <article data-tag="' + json[i].tag + '" class="col-md-12">\n' +
            '                            <div class="post">\n' +
            '                            <a href="">\n' +
            '                        <div class="box-image"><img src="' + json[i].image + '"></div>\n' +
            '                            </a>\n' +
            '                            <div class="content">\n' +
            '                            <span class="post-tag"><a href="">' + json[i].tag + '</a></span>\n' +
            '                            <h3>' + json[i].title + '</h3>\n' +
            '                            <p>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea [...]</p>\n' +
            '                            <div class="meta">\n' +
            '                                <span class="date"><i class="fa fa-clock-o"></i> June 26, 2017</span>\n' +
            '                                <span class="author"><i class="fa fa-user"></i> Admin</span>\n' +
            '                            </div>\n' +
            '                            </div>\n' +
            '                            <ul class="social list-inline">\n' +
            '                                <li><a href="" class="facebook"><i class="fa fa-facebook"></i></a></li>\n' +
            '                                <li><a href="" class="twitter"><i class="fa fa-twitter"></i></a></li>\n' +
            '                                <li><a href="" class="googlep"><i class="fa fa-google-plus"></i></a></li>\n' +
            '                                <li><a href="" class="whatsapp"><i class="fa fa-whatsapp"></i></a></li>\n' +
            '                            </ul>\n' +
            '                            </div>\n' +
            '                        </article>'
        );
    }
});


posts.filter('#main').find('article:eq(0)').after('<div class="ads mid"></div>');
posts.filter('#main').find('article:eq(3), article:eq(9)').after('<div class="ads wide"></div>');

posts.filter('#main').find('article:eq(0)').addClass('col-lg-8 col-md-6');
posts.filter('#main').find('article:eq(1), article:eq(2), article:eq(3)').addClass('col-lg-4 col-md-6').addClass('col-lg-3 col-md-6').limit(200);
posts.filter('#main').find('article:eq(4)').addClass('col-lg-9 col-md-6');
posts.filter('#main').find('article:eq(5), article:eq(6), article:eq(7), article:eq(8), article:eq(9)').addClass('col-lg-3 col-md-6').limit(85);
posts.filter('#sub').find('article').addClass('col-lg-6');

//** Ads **//
var ads = $(".ads");

posts.find('.ads.mid').wrap('<div class="col-lg-4"></div>');
posts.find('.ads.wide').wrap('<div class="col-lg-12"></div>');
