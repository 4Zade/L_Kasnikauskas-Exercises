//! No using Array methods!
// Method created: .unshift()

function addFirstItem(arr, newItem) {
    let newArr = [];
    for (let i = 0; i < arr.length + 1; i++) {
        if(i == 0) {
            newArr[i] = newItem;
        }
        else {
            newArr[i] = arr[i - 1];
        }
    }

    return newArr;
}

const orgArray = [1, 2, 3, 4];
const item = 'banana';
const result = addFirstItem(orgArray, item);
console.log(result);