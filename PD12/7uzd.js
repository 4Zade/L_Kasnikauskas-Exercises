let n = 4;//bėgikų skaičius
let t = [22, 20, 25, 25] //bėgikų greičiai
let total = 0;

for (let i = 0; i < t.length; i++) {
    total += t[i];
}

let average = total / t.length;
let fastest = Math.min(...t);
let difference = average - fastest

console.log('\x1b[36m%s\x1b[0m', `Vidutinis bėgikų greitis: ${average}s \nGreičiausias bėgikas nubėgo per: ${fastest}s \nSkirtumas; ${difference}s`);