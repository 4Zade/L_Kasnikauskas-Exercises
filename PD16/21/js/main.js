function startTimer(callback, repeatNum) {
    let repeated = 0;
    let seconds = 0;
    
    const interval = setInterval(() => {
        callback(seconds);

        seconds++;

        if (seconds > 60) {
            seconds = 0;
            repeated++
        }

        if (repeated >= repeatNum) {
            clearInterval(interval);
        }
    }, 1000);
}

const timerCallback = (sec) => {
    console.log(`Timer: ${sec}sec`);
};

const timerIntervalId = startTimer(timerCallback, 2);