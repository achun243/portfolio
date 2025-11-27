$(function(){
        $("#tgMenu dt").on("click", function() {
            $(this).next().slideToggle();
        });
    });