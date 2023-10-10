let text;

//Yra duoti du skaičiai. Parašykite programą kuri parodytų didesnį skaičių.

const x = 5; //skaičius 1
const y = 10; //skaičius 2

if (x < y) {
    text = 'skaičius Y yra didesnis nei X.';
}
else if (y < x) {
    text = 'skaičius X yra didesnis nei Y.';
}
else {
    text = 'X ir Y yra lygus';
}

console.log(text);