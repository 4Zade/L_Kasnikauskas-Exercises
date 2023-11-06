function filterEven(arr) {
  let newArr = [];
  
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] % 2 == 0) {
      newArr.push(arr[i]);
    }
  }

  return newArr;
}

const orgArr = [1, 16, 24, 75, 14, 96, 58, 17, 25, 53];
const filteredArr = filterEven(orgArr);

console.log(filteredArr);