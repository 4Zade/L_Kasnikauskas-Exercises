function maxValue(arr, callback) {
    let temp = arr[0]; // Initialize temp with the first element of the array
  
    for (let i = 1; i < arr.length; i++) {
      if (callback(arr[i], temp)) {
        temp = arr[i];
      }
    }
  
    return temp;
  }
  
  const numArr = [1, 5, 3, 2, 4];
  
  const callbackFunction = (element1, element2) => element1 > element2;
  
  const maxNum = maxValue(numArr, callbackFunction);
  
  console.log(maxNum);
  