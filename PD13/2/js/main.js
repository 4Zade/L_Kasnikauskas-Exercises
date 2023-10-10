let text;

// Yra duoti trys skaičiai. Parašykite programą, kuri rastų šių skaičių sandaugos ženklą + arba -

const x = 5; //skaičius 1
const y = 10; //skaičius 2
const z = -12; //skaičius 3

if (x * y * z < 0) {
  text = 'xyz bus neigiamas';
}
else {
  text = 'xyz bus teigiamas';
}

console.log(text)