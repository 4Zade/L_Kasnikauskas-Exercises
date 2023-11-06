function filterArray(arr, callback) {
    const filteredArr = [];
  
    for (let i = 0; i < arr.length; i++) {
      if (callback(arr[i])) {
        filteredArr.push(arr[i]);
      }
    }
  
    return filteredArr;
  }

  const numArr = [1, 2, 3, 4, 5, 6];
  const callbackFunction = (element) => element % 2 === 0;
  
  const filteredNum = filterArray(numArr, callbackFunction);
  console.log(filteredNum);
  