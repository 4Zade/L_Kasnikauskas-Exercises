let n = 3;
let m1 = 18;
let m2 = 10;
let k = 0;
let tempArr = [m1, m2];
let tempMin = 0;

for (let i = 0; i < n - 1; i++) {
  tempMin += tempArr[i];

  if (tempArr[i] > 20) {
    k++;
  }
}

let m = tempMin / n;

console.log(`
  Žmonių apsilanko per dieną: ${n}\n
  Žmonių užtrunka 20min ar daugiau: ${k}\n
  Vidutiniškai praleistas laikas su pacientu: ${Math.floor(m)}
`);
