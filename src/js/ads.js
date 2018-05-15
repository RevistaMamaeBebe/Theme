$(document).ready(function () {

    var ads    = $(".ads");
    var ads_cm = [{"id": 1, "type": "mid"}, {"id": 2, "type": "mid"}, {"id": 3, "type": "mid"}, {
        "id": 4,
        "type": "mid"
    }, {"id": 5, "type": "wide"}, {"id": 6, "type": "wide"}, {"id": 7, "type": "wide"}, {
        "id": 8,
        "type": "mid"
    }, {"id": 9, "type": "wide"}, {"id": 10, "type": "mid"}, {"id": 11, "type": "mid"}, {
        "id": 12,
        "type": "wide"
    }, {"id": 13, "type": "mid"}, {"id": 14, "type": "wide"}, {"id": 15, "type": "wide"}, {
        "id": 16,
        "type": "mid"
    }, {"id": 17, "type": "wide"}, {"id": 18, "type": "wide"}, {"id": 19, "type": "mid"}, {"id": 20, "type": "mid"}];

    $.each(ads, function () {

        // var h = ($(this).hasClass('mid') == true ? '300px' : '110px');
        // $(this).append('<div class="item"><ins class="adsbygoogle" style="display:inline-block; height: ' + h + '; width: 100%" data-ad-client="ca-pub-3528492846630796" data-ad-slot="5079417620" data-ad-test="on"></ins></div>');
        // (adsbygoogle = window.adsbygoogle || []).push({});

    });

    var i = 0;

    $.each(ads_cm, function (index, data) {

        var item = ads.find('.item[data-item="' + data.id + '"]');
        if (item.length == 0) {
            ads.filter('.' + data.type).append('<div class="item" data-item="' + data.id + '"></div>');
        }

    });
});