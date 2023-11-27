let arr1 = [4, 5, 6];
let arr2 = [1, 2, 3];

let result = [];

for (let i = 0; i < arr1.length; i++) {
    result.push(arr1[i] - arr2[i]);
}

console.log(result)