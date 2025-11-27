$(document).ready(function () {

    var c = $('.categoryItem');
    var param = window.location.search.replace("?", "");
    var str = param.split('&');
    var h = str[0];

    if (h) {
        if (str[0].indexOf('=') != -1){
            h = "all";
        }else if (c.filter("[data-category=" + h + "]").length == 0) {
            h = "all";
        }
        c.filter("[data-category=" + h + "]").trigger("click")
    } else c.eq(0).trigger("click")

    var key;
    var keyArr = [];
    function contentsItem() {
        $('.contentsItem').each(function () {
            key = $(this).children('a').children('.thumb').children('img').attr('src');
            if ($.inArray(key, keyArr) < 0) {
                keyArr.push(key);
                $(this).clone().addClass('clone').appendTo($('#allSection'));
            }
        });
    }
    function wait(sec) {
        var d = $.Deferred();
        setTimeout(function () {
            d.resolve();
        }, sec * 1000);
        return d.promise();
    }
    if ($(".section.category.contents .all")){
        $.when(
            contentsItem(),
            wait(1)
        )
        .done(function () {
            $(".section.category.contents #allSection").animate({opacity:1});
            $("#menu, footer.footer").fadeIn(500);
        })
    }
});
