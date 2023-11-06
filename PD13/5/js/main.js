const r = 5;
const squareSide = 6;
const rectX = 8;
const rectY = 4;

const circleS = Math.PI * Math.pow(r, 2);
const squareS = Math.pow(squareSide, 2);
const rectS = rectX * rectY;

let maxS;
let maxShapeName;

if (circleS > squareS) {
  if (circleS > rectS) {
    maxS = circleS;
    maxShapeName = "Apskritimas";
  } else {
    maxS = rectS;
    maxShapeName = "Stačiakampis";
  }
} else {
  if (squareS > rectS) {
    maxS = squareS;
    maxShapeName = "Kvadratas";
  } else {
    maxS = rextS;
    maxShapeName = "Stačiakampis";
  }
}

console.log("Apskritimo plotas:", circleS);
console.log("Kvadrato plotas:", squareS);
console.log("Stačiakampio plotas:", rectS);
console.log(`Didžiausios figūros pavadinimas: ${maxShapeName}`);
console.log(`Didžiausias plotas: ${maxS}`);
