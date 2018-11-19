var heures = 0;
var minutes = 0;
var secondes = 0;
var temps = 0;
var tempsFinal = 0;

var timer;
/*
function convertTime(temps) {
    temps = parseInt(temps);
    while(temps > 3600) {
        heures = heures + 1;
        temps = temps - 3600;
        alert(temps);
    }
    while (temps > 60) {
        minutes = minutes + 1;
        temps = temps - 60;
    }
    secondes = temps;
}

*/


var countdown = function() {
    tempsFinal = parseInt(document.getElementById('temps').innerHTML);
    temps = parseInt(document.getElementById('temps').innerHTML);
    heures = Math.floor(temps / 3600);
    temps = temps - (3600 * heures);
    minutes = Math.floor(temps / 60);
    temps = temps - (60 * minutes);
    secondes = temps;

    secondes--;
    tempsFinal--;
    document.getElementById('temps').innerHTML = tempsFinal;






    timer = setTimeout(countdown, 1000);
};

document.getElementById('Start').addEventListener('click', countdown);






//convertTime(5000);
