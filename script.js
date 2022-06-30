function getSecondsSinceStartOfDay() {
    return new Date().getSeconds() + 
      new Date().getMinutes() * 60 + 
      new Date().getHours() * 3600;
}

setInterval( function() {
    var time = getSecondsSinceStartOfDay();
    var hour = time / 3600;
    var minute = (hour - Math.floor(hour)) * 60;
    var second = (minute - Math.floor(minute)) * 60;

    hourTransform = ((360 / 12) * hour) + 180;
    minuteTransform = ((360 / 60) * minute) + 180;
    secondTransform = ((360 / 60) * second) + 180;

    document.getElementById("hour").style.transform = "rotate(" + hourTransform + "deg)";
    document.getElementById("minutes").style.transform = "rotate(" + minuteTransform + "deg)";
    document.getElementById("seconds").style.transform = "rotate(" + secondTransform + "deg)";
}, 1000);
