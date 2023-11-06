//! No using Array methods!
// Remove wanted array items

function removeWhateverTheTaskWants(arr, x, y) {
    const newArr = [];
    for (let i = 0; i < arr.length - n; i++) {
        if (i >= x) {
            newArr[i] = arr[i + n];
        }
        else {
            newArr[i] = arr[i];
        }
    }
    return newArr;
}

const orgArray = [1, 2, 3, 4, 5, 6, 7, 8];
const f = 3;
const n = 2;

const result = removeWhateverTheTaskWants(orgArray, f, n)

console.log(result);