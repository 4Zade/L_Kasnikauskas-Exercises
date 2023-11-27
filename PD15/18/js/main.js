let arr = [1, 2, 3, 4, 2, 5, 6, 1, 3];
let newArr = [];

for (let i = 0; i < arr.length; i++) {
  if (newArr.indexOf(arr[i]) === -1) {
    newArr.push(arr[i]);
  }
}

console.log(newArr);