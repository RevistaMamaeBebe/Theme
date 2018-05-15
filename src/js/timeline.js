var separator     = 3,
    timeline      = $(".timeline"),
    timeline_item = $(".timeline .item");

for (var i = 0; i < 41; i++) {
    timeline.append('<article class="item">' +
        '<div class="content">' +
        '<div class="box">' +
        '<a href="">4 semanas de gravidez ' + i + '</a>' +
        '<p>Você já fez um teste de gravidez? É provável que suspeite que algo "diferente" está acontecendo dentro de você.</p>' +
        '</div>' +
        '</div>' +
        '</article>')
}

var timeline_item = $(".timeline .item");

for (x = 0; x < timeline_item.length; x += separator) {
    timeline_item.slice(x, x + separator).wrapAll('<div class="group"></div>');
}

var group = timeline.find('.group');

for (i = 0; i < group.length; i++) {

    var g = group.eq(i);

    if(i == 0){
        g.append('<div class="box-time"></div>');
    }

    if(i === group.length - 1){
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
    }else{
        g.attr('data-align', 'right');
    }
}

