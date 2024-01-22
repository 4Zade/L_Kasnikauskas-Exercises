// Apverčia kuria pusia ?


// Šitaip ?
function flipNumber1(number) {
    return -number
}

console.log(flipNumber1(5))

// Ar šitaip ?

function flipNumber2(number) {
    return number.toString().split('').reverse().join('');
}

console.log(flipNumber2(12));