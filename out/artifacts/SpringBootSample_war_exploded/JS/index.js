var pathName = window.document.location.pathname;
var webRoot = "/" + pathName.substr(1, pathName.indexOf("/HTML/") - 1);
$(document).ready(function () {
    $("#confirm").click(function () {
        var userName=$("#userName").val();
        var password=$("#password").val();
        $.ajax(
            {
                url: webRoot + "/checkUser",
                data: {
                    "userName": userName,
                    "password": password,
                },
                success: function (result) {
                    alert(result);
                }
            })
    })
})