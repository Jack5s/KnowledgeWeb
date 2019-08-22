function loadLeft(data, title) {
    $("#left").show();
    $("#leftList").empty();
    $("#leftTitle").text(title);
    for (var i = 0; i < data.length; i++) {
        addLeftItem($("#leftList"), data[i], 1);
    }
}

function addLeftItem(parentDivItem, dataItem, level) {
    var height = 50;
    var svgStr;
    if (dataItem.subItem.length > 0) {
        svgStr = "<svg style='height: " + height + "px;width: 15px;fill:#ffffff;stroke-width:0'><g>" +
            "<path d='M5," + (height - 10) / 2 + " l5,5 l-5,5Z' /></g></svg>";
    } else {
        svgStr = "<svg style='height: " + height + "px;width: 15px;fill:#ffffff;stroke-width:0'></svg>";
    }
    var divItemStr = "<div class='leftListItem'><div class='leftListItemHeader' url='" + dataItem.url + "' longTitle='"
        + dataItem.longTitle + "'>" + svgStr + "<div class='leftListItemText'>" + dataItem.title + "</div></div></div>";

    parentDivItem.append(divItemStr);
    var divItem = $(parentDivItem.children()[parentDivItem.children().length - 1]);
    var divHeaderItem = $(divItem.children()[0]);
    var svgItem = $(divHeaderItem.children()[0]);
    var divHeaderTextItem = $(divHeaderItem.children()[1]);
    divHeaderItem.css("paddingLeft", level * 10 - 5 + "px")
    divHeaderItem.mouseenter(function () {
        if (selectedItem != null) {
            if ($(this).text() != selectedItem.text()) {
                $(this).css("background-color", "var(--mouseoverColor)");
            }
        } else {
            $(this).css("background-color", "var(--mouseoverColor)");
        }
    });
    divHeaderItem.mouseleave(function () {
        if (selectedItem != null) {
            if ($(this).text() != selectedItem.text()) {
                $(this).css("background-color", "var(--lightBlue)");
            }
        } else {
            $(this).css("background-color", "var(--lightBlue)");
        }
    });

    divHeaderItem.click(function () {
        $("#contentIframe").attr("src", $(this).attr("url"));
        $("#test").text($(this).attr("url"));
        if (selectedItem != null) {
            selectedItem.css("background-color", "var(--lightBlue)");
            $(selectedItem.children()[0]).css("fill", "#ffffff");
            $(selectedItem.children()[1]).css("color", "#ffffff");
        }
        selectedItem = $(this);
        selectedItem.css("background-color", "var(--selectedColor)");
        $(selectedItem.children()[0]).css("fill", "#000000");
        $(selectedItem.children()[1]).css("color", "#000000");
        // divItem.children().show();show
    });
    divHeaderItem.click(function () {
        var childItem = $(this).siblings();
        var displayStr = childItem.css("display");
        var height = 50;
        var d;
        if (displayStr != "none") {
            displayStr = childItem.css("display", "none");
            d = "M5," + (height - 10) / 2 + " l5,5 l-5,5Z";
        } else {
            displayStr = childItem.css("display", "block");
            d = "M5," + height / 2 + " l10,0 l-5,5Z";
        }
        var path = svgItem.children("g").children();
        path.attr("d", d);
    })
    if (level != 1) {
        divItem.hide();
    }
    for (var i = 0; i < dataItem.subItem.length; i++) {
        addLeftItem(divItem, dataItem.subItem[i], level + 1);
    }
}
