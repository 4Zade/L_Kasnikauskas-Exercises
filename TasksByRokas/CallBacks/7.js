function reduceArray(array, callback, initialValue) {
    let accumulator = initialValue;
  
    for (let i = 0; i < array.length; i++) {
      const currentValue = array[i];
  
      accumulator = callback(accumulator, currentValue);
    }
  
    return accumulator;
  }
  
  const numbers = [1, 2, 3, 4, 5];
  
  const sumCallback = (accumulator, currentValue) => {
    return accumulator + currentValue;
  };
  
  const result = reduceArray(numbers, sumCallback, 0);
  console.log(result);