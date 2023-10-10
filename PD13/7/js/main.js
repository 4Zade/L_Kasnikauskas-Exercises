let text;

// Parašykite programą, kuri nustato ar skaičius a yra skaičiaus b daliklis

const a = 10; //skaičius a
const b = 5; //skaičius b

if (a % b === 0) {
    text = `${a} yra skaičiaus ${b} daliklis.`;
}
else {
    text = `${a} nėra skaičiaus ${b} daliklis.`;
}

console.log(text);