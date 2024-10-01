function randomNum(min, max) {
    const randomNum = Math.random();

    const range = max - min;
    const scaledRandom = randomNum * range;

    const result = min + scaledRandom

    return Math.floor(result);
}

const result = randomNum(5, 50);

console.log(result);