let ats = 0;

let n = 2;
let laikas = [110, 120];
let keleiviai = [17, 25]

// (a) Kiek keleiviu parveže?
console.log(`a) Keleivių skaičius: ` + keleiviai[0] + keleiviai[1]);

// (b) Kiek vidutiniškai laiko sugaišta 1 autobusas?
console.log(`b) Vidutiniškai sugaišta laiko: ${(laikas[0] + laikas[1]) / 2}min`);

// (c) Keliuose autobusuose važiavo mažiau nei 10 keleivių?
if (keleiviai[0] > 10 || keleiviai[1] > 10) {
    ats = 0
}
else if (keleiviai[0] < 10 && keleiviai[1] > 10 || keleiviai[0] > 10 && keleiviai[1] < 10) {
    ats = 1;
}
else {
    ats = 2;
}

console.log(`c) Keliuose autobusuose važiavo mažiau nei 10 keleivių: ${ats}`)