$(function () {
    $("img").each(function () {
        var imgPath= webRoot + "/Image/" + $(this).attr("imgName") + ".png";
        $(this).attr("src", imgPath);
    })
});