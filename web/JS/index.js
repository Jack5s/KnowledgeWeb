$(document).ready(function(){
	headerInitialize();
	searchInitialize();
	clockInitialize();
	setInterval(getTime,1000);
})