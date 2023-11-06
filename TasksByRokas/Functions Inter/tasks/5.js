//! No using Array methods!
// Extracting array

function extractArray(arr, n) {
    let newArr = [];
    for (let i = 0; i < n; i++) {
        newArr[i] = arr[i];
    }

    return newArr;
}

const orgArray = [1, 2, 3, 4];
const n = 2
const result = extractArray(orgArray, n);
console.log(result);