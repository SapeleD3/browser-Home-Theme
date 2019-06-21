var noon = 12;
var evening = 18;

function showTime () {
    var currentTime = new Date();

    var hours = currentTime.getHours();
    var mins = currentTime.getMinutes();
    var secs = currentTime.getSeconds();

    var meridian = "AM";

    if (hours >= noon) {
        meridian = "PM";
    }

    if (hours > noon) {
         hours = hours-12;
    }
    document.getElementById('clock').innerHTML =
    hours + ' : '  + mins + ' ' + meridian; 
};


var oneSecond = 1000;
setInterval(showTime, oneSecond);

