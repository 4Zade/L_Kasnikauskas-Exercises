function taskFiveOne(f) {
    return (f - 32) * 5/9;
}

let celsius = taskFiveOne(17)

function taskFiveTwo(c) {
    return (c * 9/5) + 32
}

let farenheit = taskFiveTwo(celsius);

console.log(`Celsius: ${celsius}, Farenheit: ${farenheit}`);