let text;

/* Parduotuvėje viena prekė kainuoja p1, antroji – p2 eurų. Parduotuvė skelbia p procentų
nuolaidą visoms prekėms. Pirkėjas nori įsigyti abi prekes už s eurų. Parenkite programą,
skaičiuojančią, ar pirkėjui užteks pinigų abiems prekėms įsigyti ir kiek jos iš viso kainuos.*/

let p1 = 14;
let p2 = 12;

let p = 50;

let s = 16;

if ((p1 + p2) / 2 <= s) {
    text = 'pinigų užteks';
}
else {
    text = 'pinigų neužteks';
}

console.log(text);