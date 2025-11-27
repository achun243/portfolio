$(function(){
    $(".js-accordion_button").on("click", function() {
      $('.toggle_button span').toggleClass('active');
      $(this).next('.accordion_contents').stop(false, true).slideToggle();
    });
  });