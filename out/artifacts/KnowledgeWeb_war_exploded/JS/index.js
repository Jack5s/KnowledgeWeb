$(document).ready(function () {
    headerInitialize();
    searchInitialize();
    clockInitialize();
//	var fs = require("fs");
//
//	fs.readdir("../Data/OpenGIS", (err, files) => {
//	  files.forEach(file => {
//	    console.log(file);
//	  });
//	});
//	$.get("../Data/OpenGIS").success((response)=> {
//	    alert(response);
//	});
//	$.get("../Data/OpenGIS/", function(response){
//	    alert(response);
//	  });
//	$("#fullExtent").append(fullExtentStr);
    setInterval(getTime, 1000);
})