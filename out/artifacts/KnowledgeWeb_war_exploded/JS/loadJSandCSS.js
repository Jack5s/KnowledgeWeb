var linkElement = document.createElement('link');
linkElement.rel = "StyleSheet";
linkElement.href = webRoot + "/CSS/common.css";
document.head.appendChild(linkElement);

var scriptElement = document.createElement('script');
scriptElement.src = webRoot + "/JS/run_prettify.js";
document.head.appendChild(scriptElement);

loadScript(webRoot + "/JS/jquery-3.3.1.js", function () {
    var scriptElement = document.createElement('script');
    scriptElement.src = webRoot + "/JS/imgLoad.js";
    document.head.appendChild(scriptElement);

    var scriptElement = document.createElement('script');
    scriptElement.src = webRoot + "/JS/mymenu.js";
    // scriptElement.src = "https://raw.githack.com/Jack5s/JavascriptMenu/master/web/JS/mymenu.js";
    document.head.appendChild(scriptElement);
});

function loadScript(url, callback) {
    var script = document.createElement("script");
    script.type = "text/javascript";
    if (script.readyState) {
        script.onreadystatechange = function () {
            if (script.readyState == "loaded" || script.readyState == "complete") {
                script.onreadystatechange = null;
                callback();
            }
        };
    } else { // others
        script.onload = function () {
            callback();
        };
    }
    script.src = url;
    document.head.appendChild(script);
}