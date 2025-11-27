$(function(){
    $(".js-accordion_button").on("click", function() {
        var accordion_num = $(this).attr('id');
        console.log(accordion_num)
        $('.' + accordion_num + ' span').toggleClass('active');
        $(this).next('.accordion_contents').stop(false, true).slideToggle();
    });
});