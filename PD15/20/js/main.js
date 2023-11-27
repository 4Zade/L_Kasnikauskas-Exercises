let arr = [1, 2, 'Banana', NaN];
let newArr = [];

for (let i = 0; i < arr.length; i++) {
  if (isNaN(arr[i])) {
    newArr.push(i);
  }
}

console.log(newArr); //index
