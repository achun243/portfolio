//Share button
$(function () {
	var url = location.href;
	var tw = "https://twitter.com/share?url=" + url;
	var fb = "https://www.facebook.com/sharer/sharer.php?u=" + url;

	$(".shareIcons .twitter a").attr("href",tw);
	$(".shareIcons .facebook a").attr("href",fb);
});