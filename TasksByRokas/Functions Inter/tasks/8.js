//! No using Array methods!
// Copied elements from one array to another.

function copyArray(arr) {
    const newArr = [];
    for (let i = 0; i < arr.length; i++) {
        newArr[i] = arr[i];
    }
    return newArr;
}

const orgArray = [1,2,3,4,5,6];
const result = copyArray(orgArray);

console.log(result);

//Realiai tai darytumėm const result = orgArray; ir nesuktumėm galvos :))