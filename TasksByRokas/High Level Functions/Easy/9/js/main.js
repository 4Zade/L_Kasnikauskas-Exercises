const startEndBtn = document.querySelector('#startEnd');
const resetBtn = document.querySelector('#reset');

const minOutput = document.querySelector('#minutes');
const secOutput = document.querySelector('#seconds');

const header = document.querySelector('#header');

let timerOn = false;
let interval;

let s = 0;
let m = 0;

function changeStyle(btnColor, bgColor, btnMsg, headerMsg) {
    startEndBtn.style.backgroundColor = btnColor;
    document.body.style.backgroundColor = bgColor;
    startEndBtn.innerHTML = btnMsg;
    header.innerHTML = headerMsg;
}

function timerStart() {
    changeStyle('crimson', 'cornflowerblue', 'Stop', 'Timer running');
    interval = setInterval(() => {
        s++

        if(s === 60) {
            m++
            s = 0;
        }
        secOutput.textContent = s > 0 ? (s < 10 ? "0" + s : s) : "00";
        minOutput.textContent = m > 0 ? (m < 10 ? "0" + m : m) : "00";
    }, 1000);
}

function timerStop() {
    changeStyle('green', 'crimson', 'Start', 'Timer paused');
    clearInterval(interval)
}

function turnSwitch() {
    if(timerOn) {
        timerOn = false;
        timerStop()
    }
    else {
        timerOn = true;
        timerStart()
    }
}

function timerReset() {
    timerOn = false
    timerStop()
    s = 0;
    secOutput.innerHTML = '00';
    m = 0;
    minOutput.innerHTML = '00';
    header.innerHTML = 'Staret the Timer!';
}