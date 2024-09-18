//! No using Array methods!
// This function Itterates the array

function iterateArray(arr) {
    const newArray = [];
    for (let i = 0; i < arr.length; i++) {
        newArray[i] = arr[i];
        console.log(`${i + 1}: ${arr[i]}`);
    }
}

const orgArray = ['Coffee', 'Tea', 'Banana', 'Pizza'];

const result = iterateArray(orgArray);