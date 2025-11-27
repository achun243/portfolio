var checkbox = $('.checkbox');
$(checkbox).on('click', function(){

  var $this = $(this),
    inner = $this.children('.table_markImg');
    inner.toggleClass('on');
});