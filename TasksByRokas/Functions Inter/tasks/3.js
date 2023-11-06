//! No using Array methods!
// Method created: .shift()

function removeFirstItem(arr) {
    let newArr = [];
    for (let i = 0; i < arr.length - 1; i++) {
        newArr[i] = arr[i+1];
    }

    return newArr;
}

const orgArray = [1, 2, 3, 4, 5];
const result = removeFirstItem(orgArray);
console.log(result);