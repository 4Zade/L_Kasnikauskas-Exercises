let a = [167, 134, 145, 156, 155, 176] //Medžių aukščiai
let total = 0; //

for (let i = 0; i < a.length; i++) {
    total += a[i];
}

let averageHeight = total / a.length;

console.log('\x1b[36m%s\x1b[0m', `Vidutinis eglučių aukštis: ${averageHeight}`);