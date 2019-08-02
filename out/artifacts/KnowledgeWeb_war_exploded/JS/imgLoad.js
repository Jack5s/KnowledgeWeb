$(function () {
    $("img").each(function () {
        var imgPath="/" + projectName + "/Image/" + $(this).attr("imgName") + ".png";
        $(this).attr("src", imgPath);
    })

})