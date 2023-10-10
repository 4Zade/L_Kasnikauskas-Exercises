let text;

// Parašykite programą, kuri nustato kuris dviženklis skaičius skaitmuo yra didesnis

const x = 50;

const number = [...x.toString()];

if (number[0] > number[1]) {
  text = `Pirmas skaitmuo didesnis už antrą: ${number[0]}`;
}
else {
  text = `antras skaitmuo didesnis už antrą: ${number[1]}`;
}

console.log(text);