function loadLeft(data, title) {
    $("#left").show();
    $("#leftList").empty();
    $("#leftTitle").text(title);
    for (var i = 0; i < data.length; i++) {
        addLeftItem($("#leftList"), data[i], 1);
    }
}

function addLeftItem(parentDivItem, dataItem, level) {
    var itemDivStr = "<div class='leftListItem1'><div class='leftListItem"
        + level + "Text' url='" + dataItem.url + "' longTitle='"
        + dataItem.longTitle + "'>" + dataItem.title + "</div></div>";
    parentDivItem.append(itemDivStr);
    var divItem = $(parentDivItem.children()[parentDivItem.children().length - 1]);
    var divItemText = $(divItem.children()[0]);
    divItemText.mouseenter(function () {
        if (selectedItem != null) {
            if ($(this).text() != selectedItem.text()) {
                $(this).css("background-color", "var(--mouseoverColor)");
            }
        } else {
            $(this).css("background-color", "var(--mouseoverColor)");
        }

    });
    divItemText.mouseleave(function () {
        if (selectedItem != null) {
            if ($(this).text() != selectedItem.text()) {
                $(this).css("background-color", "var(--lightBlue)");
            }
        } else {
            $(this).css("background-color", "var(--lightBlue)");
        }
    });

    divItemText.click(function () {
        $("#contentIframe").attr("src", $(this).attr("url"));
        $("#test").text($(this).attr("url"));
        if (selectedItem != null) {
            selectedItem.css("background-color", "var(--lightBlue)");
            selectedItem.css("color", "white");
        }
        selectedItem = $(this);
        selectedItem.css("background-color", "var(--selectedColor)");
        selectedItem.css("color", "black");
        divItem.children().show();
    });

    if (level != 1) {
        divItem.hide();
    }
    for (var i = 0; i < dataItem.subItem.length; i++) {
        addLeftItem(divItem, dataItem.subItem[i], level + 1);
    }
}
