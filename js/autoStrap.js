var g = document.documentElement.clientWidth,
	h = document.documentElement.clientHeight,
	clientWidth = document.documentElement.clientWidth,
	viewport = document.getElementById("MobileViewport");
function isWeixin() {
	var a = navigator.userAgent.toLowerCase();
	return "micromessenger" == a.match(/MicroMessenger/i) ? !0 : !1
}
function renderPage() {
	var f = 1;
	g / h >= 320 / 486 ? (f = g / 486) : (f = g / 320);
	if(g == 320){
		f = 1;
	}
	viewport.content = "width=320, initial-scale=" + f + ", maximum-scale=" + f + ", user-scalable=no";
	if (320 != clientWidth && clientWidth == document.documentElement.clientWidth ||
	 isWeixin() && (navigator.userAgent.indexOf("Android") > -1 ||
	  navigator.userAgent.indexOf("Linux") > -1)) {
		var i = 320 / g,
			j = 486 / h,
			k = Math.max(i, j);
		k = k > 1 ? k : 160 * k, k = parseInt(k), viewport.content= "width=320, target-densitydpi=" + k ;
	}
}
renderPage();
window.onresize = function(){
	if (g == document.documentElement.clientHeight && h == document.documentElement.clientWidth){
		renderPage();
	}
};
