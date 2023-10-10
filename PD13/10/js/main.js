// Yra duoti tris skaičiai a, b, c. Parašykite programą, kuri rastų dviejų didžiausių skaičių sumą.

const x = 9;
const y = -3;
const z = 12;

let total = 0;

if (x <= y && x <= z) {
    total = y + z;
}
else if (z <= x && z <= y) {
    total = x + y;
}
else {
    total = x + z;
}

console.log(`Sudėjus 2 didžiausius skaičius gavome: ${total}`);