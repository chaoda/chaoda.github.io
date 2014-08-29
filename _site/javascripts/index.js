$(document).ready(function(){
	/**
	 * 导航栏
	 * */
	$(".menu>ul>li").mouseover(function() {
		if ($(this).find(".childcontent") != null) {
			$(this).find(".childcontent").removeClass("display");
		}
	});
	
	$(".menu>ul>li").mouseleave(function() {
		if ($(this).find(".childcontent") != null) {
			$(this).find(".childcontent").addClass("display");
		}
	});
	
	$(".menu>ul>li").click(function() {
		$(this).parent().find(".menuClick").removeClass("menuClick");
		$(this).addClass("menuClick");
	});
});

/**
 * 切换菜单
 * */
//function menu(menuURL) {
//	$("#iframe").attr("src", menuURL);
//}