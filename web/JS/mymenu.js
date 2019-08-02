$(function () {
    var offset = 5;
    var svgWidth = 15;
    var size = 5;
    var fillColor="#bbbbbb";
    $("my-menu").css("cursor", "default");
    $("my-menu").css("display", "block");
    $("my-menu").each(function () {
        var expandState = $(this).attr("expandState");
        var header = $(this).children("my-menu-header");
        var height = header.children().height();
        var semiHeight = height / 2;

        var yPosition = (height - size * 2) / 2;

        var svgStr;
        switch (expandState) {
            case "expend":
                svgStr = "<svg style='height: " + height + ";width: " + svgWidth + "px'><g><path d='M" + offset + "," + semiHeight + " l" + (2 * size) + ",0 l-" + size + "," + size + "Z' style='fill:" + fillColor + ";stroke-width:0'/></g></svg>"
                $(this).children().css("display", "block");
                break;
            case "collapse":
                svgStr = "<svg style='height: " + height + ";width: " + svgWidth + "px'><g><path d='M" + offset + "," + yPosition + " l" + size + "," + size + " l-" + size + "," + size + "Z' style='fill:" + fillColor + ";stroke-width:0'/></g></svg>"
                $(this).children().css("display", "none");
                break;
        }
        if ($(this).children().not("my-menu-header").length > 0) {
            header.prepend(svgStr);
        }
        $(this).children("my-menu-header").children().css("display","inline-flex");
        $(this).children("my-menu-header").children().css("verticalAlign", "top");
    });


    $("my-menu-header").mousedown(function () {
        var menuElement = $(this).parent();
        var expandState = menuElement.attr("expandState");
        var height = $(this).children().height();
        var semiHeight = height / 2;
        var yPosition = (height - size * 2) / 2;

        switch (expandState) {
            case "expend":
                var svgStr = "<svg style='height: " + height + ";width: " + svgWidth + "px'><g><path d='M" + offset + "," + yPosition + " l" + size + "," + size + " l-" + size + "," + size + "Z' style='fill:" + fillColor + ";stroke-width:0'/></g></svg>"
                $(this).children().remove("svg");
                $(this).prepend(svgStr);
                menuElement.attr("expandState", "collapse");
                menuElement.children().not("my-menu-header").css("display", "none");
                break;
            case "collapse":
                $(this).children().remove("svg");
                var svgStr = "<svg style='height: " + height + ";width: " + svgWidth + "px'><g><path d='M" + offset + "," + semiHeight + " l" + (2 * size) + ",0 l-" + size + "," + size + "Z' style='fill:" + fillColor + ";stroke-width:0'/></g></svg>"
                $(this).prepend(svgStr);
                menuElement.attr("expandState", "expend");
                menuElement.children().not("my-menu-header").css("display", "block");
                break;
        }
    });
})
