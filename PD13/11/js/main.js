let text;

/* Bankas suteikia paskolą tokiu atveju, kai pajamos vienam šeimos nariui yra ne mažesnės
kaip s eurų per mėnesį, ir dar lieka k eurų paskolai mokėti. Šeimą sudaro n asmenų. Tėvo
atlyginimas yra t, motinos – m eurų per mėnesį. Parašykite programą, kuri ekrane parodytų
pranešimą ”Bankas suteiks paskolą”, jei šeima tenkina sąlygas, reikalingas paskolai gauti,
arba ”Bankas paskolos nesuteiks”, jei šeima netenkina sąlygų, reikalingų paskolai gauti. */

const s = 750; //pajamos vienam šeimos nariui
const k = 100; //liko pinigų iš kurių mokėti paskolą per mėnesį
const n = 3; //žmonių skaičius šeimoje
const t = 1400; //Tėvo atlyginimas
const m = 1300; //motinos atlyginimas

if ((t + m) / n >= s + k ) {
    text = 'Bankas suteiks paskolą';
}
else {
    text = 'Bankas nesuteiks paskolos';
}

console.log(text);