$(window).load(function() {
    siteJS();
});

var boxTop = new Array;

$(window).resize(function() {
　　$('.itemBox').each(function(i) {
　　　　boxTop[i] = $(this).offset().top;
　　});
});

/*=======================================================================
	siteJS
=======================================================================*/
function siteJS() {
	/*===============================
		gNav
	===============================*/
    var navB = $('#navBox'),
        navBTop = navB.offset().top;

    function navFiexed () {
        var scrollT =  $(window).scrollTop();

        if(scrollT >= navBTop - 50) {
			$('#head_wrap').css('top', -(scrollT - navBTop + 50) + 'px');
		}

        if(scrollT >= navBTop) {
			navB.addClass('navFiexed');
			$('#cat1').css('margin-top', '0');
		} else {
			navB.removeClass('navFiexed');
			$('#cat1').css('margin-top', '');
		}
	}

	$(window).scroll(navFiexed);
    $('body').bind('touchmove', navFiexed);


	/*===============================
		PageLink
	===============================*/
	$(".catList li").click( function() {
		var target = '#' + $(this).attr("id").replace('nav-', ''),
			targetTop = $(target).offset().top;

		$('html,body').stop().animate({scrollTop: targetTop - 96}, 500);
		return false;
	});


	/*===============================
		itemList
	===============================*/
//	$('.itemBox li:nth-child(5n+1)').each(function(){
//		$(this).css('clear', 'both');
//	})


	/*===============================
	itemBox current
	===============================*/
	var set = 200;
	var current = -1;

	$('.itemBox').each(function(i) {
	boxTop[i] = $(this).offset().top;
	});

	$(window).scroll(changeBoxScroll);

	function changeBoxScroll(){
	scrollPosition = $(window).scrollTop();
	for (var i = boxTop.length - 1 ; i >= 0; i--) {
	if ($(window).scrollTop() > boxTop[i] - set) {
	changeBox(i);
	break;
	}
	};
	};

	function changeBox(secNum) {
	if (secNum != current) {
	current = secNum;
	secNum2 = secNum + 1;
	$('.catList li').removeClass('on');
	$('.catList li:nth-child('+ secNum2 +')').addClass('on');
	}
	};

	changeBoxScroll()
}
