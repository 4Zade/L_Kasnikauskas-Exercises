//! No using Array methods!
// Method created: .push()

function addNewItem(arr, newItem) {
    let newArr = [];
    for (let i = 0; i < arr.length + 1; i++) {
        if(i < arr.length) {
            newArr[i] = arr[i];
        }
        else {
            newArr[i] = newItem
        }
    }

    return newArr;
}

const orgArray = [1, 2, 3, 4];
const item = 'bannana'
const result = addNewItem(orgArray, item);
console.log(result);