var fullExtentStr = "<svg id='fullExtentSvg'><g id='fullExtentSvgD' stroke-width='3' fill='rgb(255, 255, 255)' stroke='rgba(255,255,255,1)' stroke-linecap='round'><path d='M3,3 l9,0'></path><path d='M3,3 l11,11'></path><path d='M3,3 l0,9'></path><path d='M37,3 l-9,0'></path><path d='M37,3 l-11,11'></path><path d='M37,3 l0,9'></path><path d='M3,37 l9,0'></path><path d='M3,37 l11,-11'></path><path d='M3,37 l0,-9'></path><path d='M37,37 l-9,0'></path><path d='M37,37 l-11,-11'></path><path d='M37,37 l0,-9'></path></g></svg>";

var noFullExtentStr = "<svg id='fullExtentSvg'><g id='fullExtentSvgD' stroke-width='3' fill='rgb(255, 255, 255)'stroke='rgba(255,255,255,1)' stroke-linecap='round'><path d='M14,14 l-9,0'></path><path d='M14,14 l-11,-11'></path><path d='M14,14 l0,-9'></path><path d='M26,14 l9,0'></path><path d='M26,14 l11,-11'></path><path d='M26,14 l0,-9'></path><path d='M14,26 l-9,0'></path><path d='M14,26 l-11,11'></path><path d='M14,26 l0,9'></path><path d='M26,26 l9,0'></path><path d='M26,26 l11,11'></path><path d='M26,26 l0,9'></path></g></svg>";
$(document).ready(function() {
	$("#fullExtent").click(function() {
		$("#fullExtent").empty();
		$("#fullExtent").append(fullExtentStr);
		if ($("#header").css("display") == "none") {
			$("#header").show();
			$("#left").show();
			$("#content").css("top", "150px");
			$("#content").css("left", "200px");
		} else {
			$("#fullExtent").empty();
			$("#fullExtent").append(noFullExtentStr);
			$("#header").hide();
			$("#left").hide();
			$("#content").css("top", "0px");
			$("#content").css("left", "0px");
		}
	});
	$("#fullExtent").mouseenter(function() {
		$("#fullExtent").css("background-color", "rgba(127, 127, 127, 0.3)")
	});
	$("#fullExtent").mouseleave(function() {
		$("#fullExtent").css("background-color", "rgba(0, 0, 0, 0.3)")
	})
})