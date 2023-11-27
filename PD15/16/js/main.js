let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];
let newArr = [];
let n = 3 //Kiek skaičių ištraukti

for (let i = 0; i < n; i++) {
    newArr.push(arr[Math.floor(Math.random() * arr.length)]);
}

console.log(newArr);