const p = 5;
const pz = 50;
const a = 3;
const az = 45;
const k = 3;

let roadSum = 0;

for (let i = 0; i < k; i++) {
  roadSum += p * pz - a * az;
}

const m = Math.floor(roadSum / 100);
const cm = Math.round(roadSum % 100);


console.log(`
    metrai: ${m}\n
    centimetrai: ${cm}
`);