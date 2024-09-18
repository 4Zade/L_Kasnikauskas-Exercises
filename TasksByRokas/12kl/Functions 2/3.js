function taskThree(x, y) {
    let years = 0;

    for (let i = x; i <= y; i++) {
        years++
    }

    let kinderiai = 356 * years;

    return kinderiai;
}

let myAge = 18;
let maxAge = 113;

console.log(taskThree(myAge, maxAge));