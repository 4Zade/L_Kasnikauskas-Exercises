const n = 15;
const m = 5;
let k = 0;

/* Vairuotojas iš sandėlio į parduotuvę turi pervežti n dėžių prekių. Į mašiną telpa m dėžių
prekių. Sukurkite programą, kuri apskaičiuotų ir kompiuterio ekrane parodytų, kiek kartų
k turės nuvažiuoti vairuotojas į sandėlį, kad parvežtų visas prekių dėžes į parduotuvę */

for (let i = 0; i < n; i += m) {
    k++
}

console.log(k);