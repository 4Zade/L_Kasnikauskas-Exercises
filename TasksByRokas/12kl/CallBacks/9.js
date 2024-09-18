function customOperation(a, b, callback) {
    return callback(a, b);
  }
  
  const result = customOperation(10, 5, (x, y) => x * y);
  console.log(result);