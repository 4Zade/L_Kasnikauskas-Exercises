function sumArray(n, callback) {
  let sum = 0;

  for (let i = 0; i < n.length; i++) {
    sum += n[i];
  }

  return callback(sum);
}

const n = [1, 2, 3, 4, 5];
const callbackFunction = (result) => result * 2;

const result = sumArray(n, callbackFunction);
console.log(result);
