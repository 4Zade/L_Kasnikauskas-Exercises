//! No using Array methods!
// Method created: .pop()

function removeLastElement(arr) {
    if (arr.length == 0) {
        return `array is empty`;
    }

    let newArr = [];
    for (let i = 0; i < arr.length - 1; i++) {
        newArr[i] = arr[i]
    }
    return newArr;
}

const numbers = [1, 2, 3, 4, 5];
const result = removeLastElement(numbers)
console.log(results);