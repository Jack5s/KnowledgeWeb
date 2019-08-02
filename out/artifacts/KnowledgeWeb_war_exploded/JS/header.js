var selectedItem = null;

function headerInitialize() {
    addHeaderItem();
    $(".headerListItem2").hide();
    $(".headerListItem1").mouseenter(
        function () {
            $($(this).children()[0]).css("background-color",
                "var(--mouseoverColor)");
            $($(this).children()).show();
        });
    $(".headerListItem1").mouseleave(function () {
        $($(this).children()[0]).css("background-color", "var(--darkBlue)");
        $(".headerListItem2Text").parent().hide();
    });
    $(".headerListItem2").mouseenter(
        function () {
            $($(this).children()[0]).css("background-color",
                "var(--mouseoverColor)");
        });
    $(".headerListItem2").mouseleave(function () {
        $($(this).children()[0]).css("background-color", "var(--darkBlue)");
    });
    $(".headerListItem1Text").click(function () {
        var itemName = $(this).attr("dataName");
        var title = $(this).text();
        var data = window[itemName];
        if (data != null) {
            loadLeft(data, title);
        } else {
            $("#left").hide();
        }
    });
    $(".headerListItem2Text").click(function () {
        var itemName = $(this).attr("dataName");
        var title = $(this).text();
        var data = window[itemName];
        if (data != null) {
            loadLeft(data, title);
        }
    })
}

function addHeaderItem() {
    for (var i = 0; i < headerData.length; i++) {
        var item = headerData[i];
        var divStr = "<div class='headerListItem1'><div class='headerListItem1Text' dataName='"
            + item.dataName + "'>" + item.title + "</div></div>";
        $("#headerList").append(divStr);
        var divItem = $($("#headerList").children()[$("#headerList").children().length - 1]);
        for (var j = 0; j < item.subItem.length; j++) {
            var subItem = item.subItem[j];
            var subDivStr = "<div class='headerListItem2'><div class='headerListItem2Text' dataName='"
                + subItem.dataName + "'>" + subItem.title + "</div></div>";
            divItem.append(subDivStr);
        }
    }
}