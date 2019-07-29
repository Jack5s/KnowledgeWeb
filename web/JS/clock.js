var colorSecond = "rgba(255,170,255,1)";
var colorMinute = "rgba(128,255,128,1)";
var colorHour = "rgba(255,255,100,1)";

// var colorHour="rgba(255,128,255,1)";
// var colorMinute="rgba(128,255,128,1)";
// var colorSecond="rgba(255,255,100,1)";
var r = 63;
var r1 = 45;
var r2 = 30;
var r3 = 15;

function clockInitialize() {
    var strokeWidth = 1;
    var svg = d3.select("#headerClockSvg");
    var g = svg.append("g");
    var arcG = svg.append("g");
    arcG.attr("transform", "translate(75,75)");
    var nowDate = new Date();
    var hour = nowDate.getHours();
    var minute = nowDate.getMinutes();
    var second = nowDate.getSeconds();
    var hourArcData = d3.arc().innerRadius(r3).outerRadius(r2).startAngle(0)
        .endAngle(2 * Math.PI * hour / 24);
    var minuteArcData = d3.arc().innerRadius(r2).outerRadius(r1).startAngle(0)
        .endAngle(2 * Math.PI * minute / 60);
    var secondArcData = d3.arc().innerRadius(r1).outerRadius(r).startAngle(0)
        .endAngle(2 * Math.PI * second / 60);
    var color = d3.schemeCategory10;
    arcG.append("path").attr("d", hourArcData).attr("id", "hourArc").style(
        "fill", colorHour);
    arcG.append("path").attr("d", minuteArcData).attr("id", "minuteArc").style(
        "fill", colorMinute);
    arcG.append("path").attr("d", secondArcData).attr("id", "secondArc").style(
        "fill", colorSecond);
    var year = nowDate.getFullYear();
    var month = nowDate.getMonth();
    var day = nowDate.getDate();
    month = ((month < 10) ? "0" : "") + month;
    day = ((day < 10) ? "0" : "") + day;
    hour = ((hour < 10) ? "0" : "") + hour;
    minute = ((minute < 10) ? "0" : "") + minute;
    second = ((second < 10) ? "0" : "") + second;
    $("#headerDateText").text(year + "/" + month + "/" + day);
    $("#headerTimeText").text(hour + ":" + minute + ":" + second);

    $("#headerTimeText").addClass("headerTimeText1");
    $("#headerDateText").addClass("headerDateText1");
    $("#headerImg").addClass("headerImg1");
    $("#headerClock").mouseenter(function () {
        $("#headerClockSvg").animate({
            opacity: 0.1
        }, 500);

        $("#headerDateText").removeClass("headerDateText1");
        $("#headerDateText").addClass("animation");
        $("#headerDateText").addClass("headerDateText2");

        $("#headerTimeText").removeClass("headerTimeText1");
        $("#headerTimeText").addClass("animation");
        $("#headerTimeText").addClass("headerTimeText2");

        $("#headerImg").removeClass("headerImg1");
        $("#headerImg").addClass("animation");
        $("#headerImg").addClass("headerImg2");
    });

    $("#headerClock").mouseleave(function () {
        $("#headerClockSvg").animate({
            opacity: 1
        }, 500);
        $("#headerDateText").removeClass("headerDateText2");
        $("#headerDateText").addClass("headerDateText1");

        $("#headerTimeText").removeClass("headerTimeText2");
        $("#headerTimeText").addClass("headerTimeText1");

        $("#headerImg").removeClass("headerImg2");
        $("#headerImg").addClass("headerImg1");
    });
}

function getTime() {
    var nowDate = new Date();
    var hour = nowDate.getHours();
    var minute = nowDate.getMinutes();
    var second = nowDate.getSeconds();
    var color = d3.schemeCategory10;
    var hourArcData = d3.arc().innerRadius(r3).outerRadius(r2).startAngle(0)
        .endAngle(2 * Math.PI * hour / 24);
    var minuteArcData = d3.arc().innerRadius(r2).outerRadius(r1).startAngle(0)
        .endAngle(2 * Math.PI * minute / 60);
    var secondArcData = d3.arc().innerRadius(r1).outerRadius(r).startAngle(0)
        .endAngle(2 * Math.PI * second / 60);
    var hourArc = d3.select("#hourArc");
    var minuteArc = d3.select("#minuteArc");
    var secondArc = d3.select("#secondArc");
    hourArc.attr("d", hourArcData).style("fill", colorHour);
    minuteArc.attr("d", minuteArcData).style("fill", colorMinute);
    secondArc.attr("d", secondArcData).style("fill", colorSecond);

    var year = nowDate.getFullYear();
    var month = nowDate.getMonth();
    var day = nowDate.getDate();
    month = ((month < 10) ? "0" : "") + month;
    day = ((day < 10) ? "0" : "") + day;
    hour = ((hour < 10) ? "0" : "") + hour;
    minute = ((minute < 10) ? "0" : "") + minute;
    second = ((second < 10) ? "0" : "") + second;
    $("#headerDateText").text(year + "/" + month + "/" + day);
    $("#headerTimeText").text(hour + ":" + minute + ":" + second);
}
