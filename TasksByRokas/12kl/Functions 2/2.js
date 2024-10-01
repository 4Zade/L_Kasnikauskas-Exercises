function taskTwo(x, y) {
    let newAge = x;

    for (let i = 2023; i < y; i++) {
        newAge += 1;
    }

    return `in ${futureYear} I will be ${newAge - 1} and ${newAge}`;
}

const myAge = 18;
const futureYear = 2036;
let newAge = taskTwo(myAge, futureYear);

console.log(newAge);