function amebaCalc(time) {
  let sum = 1;
  for (let i = 0; i <= time; i++) {
    if (i % 3 === 0 && i !== 0) {
      sum *= 2;
      console.log(`Po ${i} valandų bus ${sum} ląstelių.`);
    }
  }
}

amebaCalc(24);

// Įdomi geometrinės progresijos užduotis :)