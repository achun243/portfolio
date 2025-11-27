
$(window).load(function() {
/**************************
* SNS BUTTON
**************************/
$.fn.sns = function(target) {
	this.each(function(){
		var $sns_target = $(this);
		var url = location.href;
		$sns_target.attr('href', $sns_target.attr('href').replace("{current_url}", url));
		$sns_target.live('click', function(){
			window.open($sns_target.attr('href'), 'PINwindow', 'width=600, height=600, menubar=no, toolbar=no, scrollbars=yes');
			return false;
		});
	});
}


$('.sns a').sns();
});