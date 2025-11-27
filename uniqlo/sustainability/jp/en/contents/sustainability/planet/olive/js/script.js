$(function(){

    $(".js-accordion_button").on("click", function() {
        var accordion_num = $(this).attr('id');
        $('.' + accordion_num + ' span').toggleClass('active');
        $(this).prev('.accordion_contents').stop(false, true).slideToggle();
    });
});