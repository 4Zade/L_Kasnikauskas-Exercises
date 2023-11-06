const a = 6;
const b = -6;
const c = 13;

const discriminant = b * b - 4 * a * c;

if (discriminant > 0) {
  const x1 = (-b + Math.sqrt(discriminant)) / (2 * a);
  const x2 = (-b - Math.sqrt(discriminant)) / (2 * a);
  console.log(`Lygtis turi du skirtingus sprendinius: x1 = ${x1}, x2 = ${x2}`);
} else if (discriminant === 0) {
  const x = -b / (2 * a);
  console.log(`Lygtis turi vieną sprendinį: x = ${x}`);
} else {
  console.log('Lygtis neturi sprendinių realiųjų skaičių aibėje.');
}