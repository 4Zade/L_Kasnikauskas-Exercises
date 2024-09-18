function squareNumber(x) {
    console.log(`The result of squaring the number ${x} is ${Math.pow(x, 2)}.`)
    return Math.pow(x, 2);
}

function halfNumber(x) {
    console.log(`Half of ${x} is ${x / 2}.`);
    return x / 2;
}
function precentOf(x, y) {
    if (y === 0) {
        return 0;
    }
    
    const result = Math.round((x / y) * 100);
    
    console.log(`${x} is ${result} of ${y}`);
    return result;
}

function areaOfCircle(r) {
    let S = (r * Math.PI).toFixed(2);
    console.log(`The area for a circle with radius of ${r} is ${S}`);
    return S;
}

function comboFunction(n) {
    let result1 = halfNumber(n);
    let result2 = squareNumber(result1);
    return precentOf(areaOfCircle(result2), n);
}

let endResult = comboFunction(10);
console.log(endResult);