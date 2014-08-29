/**
 * 页面高度自适应
 */
$(window.parent.document).find("#iframe").load(function(){
	/**
	 * iframe 子页面高度
	 * */
	var thisheight = $(document.body).find("#content-wrapper").height();
	/**
	 * 浏览器高度
	 * */
	var _thisheight = $(window.parent).height() - 252; 
	/**
	 * 指定 iframe 高度
	 * */
	var main = $(window.parent.document).find("#iframe"); // iframe 高度
	main.height(thisheight > _thisheight ? thisheight : _thisheight);
	/**
	 * 指定 iframe 子页面中 content-wrapper 的高度
	 * */
	$(document.body).find("#content-wrapper").height(thisheight > _thisheight ? thisheight : _thisheight);
});

/**
 * 切换菜单
 * */
function menu(menuURL) {
	$(window.parent.document).find("#iframe").attr("src", menuURL);
}

function menu(menuURL, menuID) {
	$(window.parent.document).find("#iframe").attr("src", menuURL);
	$(window.parent.document).find(".menuClick").removeClass("menuClick");
	$(window.parent.document).find("#" + menuID + "").addClass("menuClick");
}