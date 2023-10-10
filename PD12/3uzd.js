const areaLength = 40; //in cm
const areaHeight = 30;

const brickLength = 2;
const brickHeigh = 1;

const price = 0.5; //price in eur

let totalBricks = 0;
let totalPrice = 0;

for (let a = 0; a < areaLength; a += brickLength) {
    for (let b = 0; b < areaHeight; b += brickHeigh) {
        totalBricks++
    }
}

totalPrice = totalBricks * price;
console.log('\x1b[36m%s\x1b[0m', `Plytos: ${totalBricks} \nKaina: ${totalPrice}`);