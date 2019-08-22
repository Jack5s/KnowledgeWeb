var keywordArray = [];
function searchInitialize(){
	$("#headerSearchList").hide();
	$("#headerSearchTextArea").keyup(
			function() {
				$("#headerSearchList").empty();
				var keyword = $("#headerSearchTextArea").val()
						.toLowerCase();
				for (var i = 0; i < keywordArray.length; i++) {
					var index = keywordArray[i].longTitle.toLowerCase()
							.indexOf(keyword);
					if (index >= 0) {
						var dataStr = keywordArray[i].dataStr;
						var longTitle = keywordArray[i].longTitle;
						$("#headerSearchList").append(
								"<div class='headerSearchItem' dataStr='"
										+ dataStr + "'>" + longTitle
										+ "<div/>");
						var headerSearchItem = $($("#headerSearchList")
								.children()[$("#headerSearchList")
								.children().length - 1]);
						var dataStr = keywordArray[i].dataStr
						headerSearchItem.click(function() {
							$("#headerSearchList").empty();
							$("#headerSearchTextArea").val(
									$(this).text());
							var keyword = $(this).text().toLowerCase();
							loadLeft(window[$(this).attr("dataStr")],
									"Search Result");
							var itemArray = $("#leftList").children();
							for (var i = 0; i < itemArray.length; i++) {
								var leftItem = $(itemArray[i]);
								findKeyword(leftItem, keyword);
							}
						})
					}
				}
				$("#headerSearchList").show()
			})
	$("#headerSearch").mouseleave(function() {
		$("#headerSearchList").hide();
	})

	for (var i = 0; i < dataStrArray.length; i++) {
		var dataStr = dataStrArray[i];
		var data = window[dataStr];
		getKeywords(data, dataStr);
	}
}
function getKeywords(data, dataStr) {
	for (var i = 0; i < data.length; i++) {
		var keywordItem = {
			title : data[i].title.toLowerCase(),
			longTitle : data[i].longTitle,
			dataStr : dataStr,
		}
		keywordArray.push(keywordItem);
		if (data[i].subItem.length > 0) {
			getKeywords(data[i].subItem, dataStr)
		}
	}
}

function findKeyword(leftItem, keyword) {
	var textItem = $(leftItem.children()[0]);
	if (textItem.attr("longTitle").toLowerCase() == keyword) {
		$("#contentIframe").attr("src", textItem.attr("url"));
		if (selectedItem != null) {
			selectedItem.css("background-color", "var(--lightBlue)");
			selectedItem.css("color", "white");
		}
		selectedItem = textItem;
		selectedItem.css("background-color", "var(--selectedColor)");
		selectedItem.css("color", "black");
		expandItem(leftItem);
		return;
	} else {
		for (var i = 1; i < leftItem.children().length; i++) {
			findKeyword($(leftItem.children()[i]), keyword);
		}

	}
}

function expandItem(leftItem) {
	var parentItem = leftItem.parent();
	parentItem.children().show();
	if (parentItem.attr("id") == "leftList") {
		return;
	} else {
		expandItem(parentItem);
	}
}
