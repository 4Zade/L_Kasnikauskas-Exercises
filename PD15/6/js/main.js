const arr = [1, 4, 9, 9, 7, 1, 5, 2, 6, 1, 4, 6, 2, 1, 10, 2, 36]; //1 kartojasi 4 kartus

let k = 1; //skaičius apie kurį norim gauti info
let n = 0;

for (let i = 0; i < arr.length; i++) {
    if(arr[i] == k) n++
}

console.log(n)