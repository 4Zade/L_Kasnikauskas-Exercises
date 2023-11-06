const nuolaida = 10;
const sutaupyta = 370;
const telefonas = 400;

const telNuolaida = telefonas - (telefonas * (nuolaida / 100));

console.log(`Kaina su nuolaida: ${telNuolaida}eur`);
if (sutaupyta >= telNuolaida) {
  console.log("Užtenka.");
} else {
  console.log("Nepakanka.");
}