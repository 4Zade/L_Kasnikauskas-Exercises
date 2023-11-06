let a = 20;

let dalikliai = [];
let visuDalikliuSuma = 0;
let lyginiuDalikliuSuma = 0;

for (let i = 1; i <= a; i++) {
  if (a % i === 0) {
      dalikliai.push(i);
      visuDalikliuSuma += i;

      if (i % 2 === 0) {
          lyginiuDalikliuSuma += i;
      }
  }
}

console.log(`${a} dalikliai: ${dalikliai}`);
console.log(`Visų daliklių suma: ${visuDalikliuSuma}`);
console.log(`Lyginių daliklių suma: ${lyginiuDalikliuSuma}`);