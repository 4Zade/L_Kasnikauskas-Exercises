let numbers = []

// Yra duoti tris skaičiai. Parašykite programą, kuri surušiuoja šiuos skaičius.

const x = 2; //vidurinis skaičius
const y = -2; //mažiausias skaičius
const z = 4; //didžiausias skaičius

if (x <= y && x <= z) {
  numbers.push(x);

  if (z <= y) {
    numbers.push(z);
    numbers.push(y);
  }
  else {
    numbers.push(y);
    numbers.push(z);
  }
}
else if (z <= y && z<= x) {
  numbers.push(z);

  if (x <= y) {
    numbers.push(x);
    numbers.push(y);
  }
  else {
    numbers.push(y);
    numbers.push(x);
  }
}
else {
  numbers.push(y);
  if (x <= z) {
    numbers.push(x);
    numbers.push(z);
  }
  else {
    numbers.push(z);
    numbers.push(x);
  }
}

console.log(numbers);