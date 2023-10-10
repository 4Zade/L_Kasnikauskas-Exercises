let text;

//Pateikti trys realieji skaičiai a, b, c. Parašykite programą, kuri patikrina ar tenkiname nelygybę a < b < c arba b > a > c.

const a = 1;
const b = 4;
const c = 6;

if (a < b && b < c || b > a && a > c) {
    text = 'tenkiname';
}
else {
    text = 'netenkiname';
}

console.log(text);