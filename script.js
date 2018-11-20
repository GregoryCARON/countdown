let heures = 0, minutes = 0, secondes = 0;
let temps = 0;
let tempsFinal = 0;
var timerBoot = 0;
var h = 0, m = 0, s = 0;
var MP3 = 'GVFouet.mp3';

document.getElementById('userHeures').innerHTML = '0';
document.getElementById('userMinutes').innerHTML = '0';
document.getElementById('userSecondes').innerHTML = '0';

let timer;

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
function lecture(son, vol, loop) {
    let snd = new Audio();
    snd.src = son;
    snd.loop = loop;
    snd.volume = vol;
    snd.play();
}

var countdown = function () {
    temps = tempsFinal;
    console.log('temp : ' + temps + ', tempsFinal : ' + tempsFinal);
    heures = Math.floor(temps / 3600);
    temps = temps - (3600 * heures);
    console.log('temps : ' + temps + ', heure : ' + heures);
    minutes = Math.floor(temps / 60);
    temps = temps - (60 * minutes);
    secondes = temps;
    console.log('temps : ' + temps + ', minutes : ' + minutes + ', secondes : ' + secondes);

    tempsFinal--;

    if (heures < 0) {
        heures = 0;
    }
    if (minutes < 0) {
        minutes = 0;
    }
    if (secondes < 0) {
        secondes = 0;
    }

    document.getElementById('userHeures').innerHTML = heures;
    document.getElementById('userMinutes').innerHTML = minutes;
    document.getElementById('userSecondes').innerHTML = secondes;

    if (heures === 0 && minutes === 0 && secondes === 0) {
        document.getElementById('btnStart').innerHTML = 'Start';
        clearTimeout(timer);
        timerBoot = 0;
        lecture(MP3, 1, 0);
        alert('BOUM !!!');
    } else {
        timer = setTimeout(countdown, 1000);
        timerBoot = 1;
    }
};

document.getElementById('btnStart').addEventListener('click', function () {
    if (h !== 0 || m !== 0 || s !== 0) {
        if (timerBoot === 1) {
            document.getElementById('btnStart').innerHTML = 'Start';
            clearTimeout(timer);
            timerBoot = 0;
        } else {
            document.getElementById('btnStart').innerHTML = 'Stop';
            countdown();
        }
    }
    //console.log(timer);
});

document.getElementById('btnAddHeure').addEventListener('click', function () {
    h = parseInt(document.getElementById('userHeures').innerHTML);
    h = h + 1;
    tempsFinal = (h * 3600) + (m * 60) + s;
    document.getElementById('userHeures').innerHTML = h;
});
document.getElementById('btnRemHeure').addEventListener('click', function () {
    h = parseInt(document.getElementById('userHeures').innerHTML);
    h = h - 1;
    if (h < 0) {
        h = 0;
    }
    tempsFinal = (h * 3600) + (m * 60) + s;
    document.getElementById('userHeures').innerHTML = h;
});
document.getElementById('btnAddMinute').addEventListener('click', function () {
    m = parseInt(document.getElementById('userMinutes').innerHTML);
    m = m + 1;
    if (m === 60) {
        m = 0;
        h = h + 1;
        tempsFinal = (h * 3600) + (m * 60) + s;
        document.getElementById('userHeures').innerHTML = h;
    }
    tempsFinal = (h * 3600) + (m * 60) + s;
    document.getElementById('userMinutes').innerHTML = m;
});
document.getElementById('btnRemMinute').addEventListener('click', function () {
    m = parseInt(document.getElementById('userMinutes').innerHTML);
    m = m - 1;
    if (m === -1) {
        m = 59;
        if (h > 0) {
            h = h - 1;
            tempsFinal = (h * 3600) + (m * 60) + s;
            document.getElementById('userHeures').innerHTML = h;
        }
    }
    tempsFinal = (h * 3600) + (m * 60) + s;
    document.getElementById('userMinutes').innerHTML = m;
});
document.getElementById('btnAddSeconde').addEventListener('click', function () {
    s = parseInt(document.getElementById('userSecondes').innerHTML);
    s = s + 1;
    if (s === 60) {
        s = 0;
        m = m + 1;
        tempsFinal = (h * 3600) + (m * 60) + s;
        document.getElementById('userMinutes').innerHTML = m;
    }
    tempsFinal = (h * 3600) + (m * 60) + s;
    document.getElementById('userSecondes').innerHTML = s;
});
document.getElementById('btnRemSeconde').addEventListener('click', function () {
    s = parseInt(document.getElementById('userSecondes').innerHTML);
    s = s - 1;
    if (s === -1) {
        s = 59;
        if (m > 0) {
            m = m - 1;
            tempsFinal = (h * 3600) + (m * 60) + s;
            document.getElementById('userMinutes').innerHTML = m;
        }
    }
    tempsFinal = (h * 3600) + (m * 60) + s;
    document.getElementById('userSecondes').innerHTML = s;
});

function mHover(id) {
    document.getElementById(id).style.cursor = 'pointer';
}

function mOut(id) {
    document.getElementById(id).style.cursor = 'default';
}

document.getElementById('btnAddHeure').addEventListener('mouseover', mHover('btnAddHeure'));
document.getElementById('btnRemHeure').addEventListener('mouseover', mHover('btnRemHeure'));
document.getElementById('btnAddMinute').addEventListener('mouseover', mHover('btnAddMinute'));
document.getElementById('btnRemMinute').addEventListener('mouseover', mHover('btnRemMinute'));
document.getElementById('btnAddSeconde').addEventListener('mouseover', mHover('btnAddSeconde'));
document.getElementById('btnRemSeconde').addEventListener('mouseover', mHover('btnRemSeconde'));