var enabled = false;
var secondsleft = 1500;

document.getElementsByClassName('start-btn')[0]
    .addEventListener('click', function (event) {
        enabled = true;
    });

document.getElementsByClassName('pause-btn')[0]
    .addEventListener('click', function (event) {
        enabled = false;
        document.getElementById('mySound').pause();
    });

document.getElementsByClassName('reset-btn')[0]
    .addEventListener('click', function (event) {
        enabled = false;
        secondsleft = 1500;
        document.getElementById("timetext").innerHTML = "25:00";
        document.getElementById('mySound').pause();
    });

var intervalID = window.setInterval(function () {
    if (enabled) {
        var minutes = Math.floor(secondsleft / 60);
        var seconds = secondsleft % 60;
        document.getElementById("timetext").innerHTML = minutes + ":" + (seconds.toString().length == 1 ? "0" + seconds : seconds);
        secondsleft = secondsleft - 1;
        if (secondsleft < 0) {
            document.getElementById("timetext").innerHTML = "0:0";

            document.getElementById('mySound').play();
        }
        else {
            document.getElementById("timetext").innerHTML = minutes + ":" + (seconds.toString().length == 1 ? "0" + seconds : seconds);
            document.getElementById('tickSound').play();
        }
    }
}, 1000);