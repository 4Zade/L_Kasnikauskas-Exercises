function findIndex(array, callback) {
    for (let i = 0; i < array.length; i++) {
      const currentElement = array[i];
  
      if (callback(currentElement)) {
        return i;
      }
    }
  
    return -1;
  }
  
  const fruitNames = ["apple", "banana", "cherry", "date", "elderberry"];
  
  const searchCallback = (element) => element === "cherry";
  
  const index = findIndex(fruitNames, searchCallback);
  
  if (index !== -1) {
    console.log(`Index of "cherry" is ${index}`);
  } else {
    console.log(`"cherry" not found in the array.`);
  }