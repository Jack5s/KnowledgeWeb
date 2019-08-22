$(function () {
    var offset = 5;
    var svgWidth = 15;
    var size = 5;
    var fillColor = "#bbbbbb";
    $("my-menu").css("cursor", "default");
    $("my-menu").css("display", "block");
    // $("my-menu-header").css("height","20px");
    $("my-menu").each(function () {
        var expandState = $(this).attr("expandState");
        var header = $(this).children("my-menu-header");
        var height = header.children().not("svg").height()
        // height = header.attr("height");
        if (isNaN(height) == true || height < 10) {
            height = 20;
        }
        var semiHeight = height / 2;
        var yPosition = (height - size * 2) / 2;

        var svgStr;
        switch (expandState) {
            case "expand":
                svgStr = "<svg style='height: " + height + "px;width: " + svgWidth + "px'><g><path d='M" + offset + "," + semiHeight + " l" + (2 * size) + ",0 l-" + size + "," + size + "Z' style='fill:" + fillColor + ";stroke-width:0'/></g></svg>"
                $(this).children().not("my-menu-header").css("display", "block");
                break;
            case "collapse":
                svgStr = "<svg style='height: " + height + "px;width: " + svgWidth + "px'><g><path d='M" + offset + "," + yPosition + " l" + size + "," + size + " l-" + size + "," + size + "Z' style='fill:" + fillColor + ";stroke-width:0'/></g></svg>"
                $(this).children().not("my-menu-header").css("display", "none");
                break;
            default:
                $(this).attr("expandState","expand");
                svgStr = "<svg style='height: " + height + "px;width: " + svgWidth + "px'><g><path d='M" + offset + "," + semiHeight + " l" + (2 * size) + ",0 l-" + size + "," + size + "Z' style='fill:" + fillColor + ";stroke-width:0'/></g></svg>"
                $(this).children().not("my-menu-header").css("display", "block");
                break;
        }
        if ($(this).children().not("my-menu-header").length > 0) {
            header.prepend(svgStr);
        }
        header.children().css("display", "inline");
        header.children().css("verticalAlign", "center");
        var level = getLevel($(this));
        // $(this).css("marginLeft", (level - 1) * 10 + "px");
        header.css("fontSize", (5 - level) * 6 + "px");
    });


    $("my-menu-header").mousedown(function () {
        var scrollTop=$("html").scrollTop;
        var menuElement = $(this).parent();
        var expandState = menuElement.attr("expandState");
        var height = $(this).children().height();
        var semiHeight = height / 2;
        var yPosition = (height - size * 2) / 2;
        var d;
        switch (expandState) {
            case "expand":
                d = "M" + offset + "," + yPosition + " l" + size + "," + size + " l-" + size + "," + size + "Z"
                menuElement.attr("expandState", "collapse");
                menuElement.children().not("my-menu-header").css("display", "none");
                break;
            case "collapse":
                d = "M" + offset + "," + semiHeight + " l" + (2 * size) + ",0 l-" + size + "," + size + "Z";
                menuElement.attr("expandState", "expand");
                menuElement.children().not("my-menu-header").css("display", "block");
                break;
        }
        $("html").scrollTop=scrollTop;
        $(this).children("svg").children().children("path").attr("d", d);
    });
});

function getLevel(mymenu) {
    var level = 0;
    while (mymenu[0].tagName == "MY-MENU") {
        level = level + 1;
        if (level > 5) {
            break;
        }
        mymenu = $(mymenu.parent()[0]);
    }
    return level;
}
