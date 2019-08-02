$(document).ready(
    function () {
        var pathName = window.document.location.pathname;
        var projectName = pathName.substring(1, pathName.substr(1).indexOf(
            '/') + 1);
        var urlStr = "/" + projectName + "/index";
        $("#confirmBtnDiv").click(function () {
            var userName = $("#userNameText").val();
            var password = $("#passwordText").val();
            $.ajax({
                url: urlStr,
                async: true,
                data: {
                    "userName": userName,
                    "password": password
                },
                success: function (data) {
                    $("#loginInformationDiv").text(data);
                    $("#loginInformationDiv").animate({
                        "opacity": "1",
                    }, 3000);
                    $("#loginInformationDiv").animate({
                        "opacity": "0",
                    }, 2000, function () {
                        $("#loginInformationDiv").text("").css({
                            "opacity": "1",
                        });
                    });

                },
                error: function (xhr, status, error) {
                    $("#loginInformationDiv").text("Connection fail");
                }
            });
        });
        $("#confirmBtnDiv").mouseenter(function () {
            $(this).css("background-color", "#ffff70");
        }).mouseleave(function () {
            $(this).css("background-color", "#7f70ff");
        });
        $("#cancelBtnDiv").mouseenter(function () {
            $(this).css("background-color", "#ffff70");
        }).mouseleave(function () {
            $(this).css("background-color", "#7f70ff");
        });

    });