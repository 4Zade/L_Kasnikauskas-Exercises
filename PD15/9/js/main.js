let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const suma = arr.reduce((sum, num) => sum + num, 0);
const sandauga = arr.reduce((sum, num) => sum * num, 1);

console.log(suma, sandauga)