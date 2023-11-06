function taskEight(...arr) {
  let Num = [...arr];
  let maxNum = 0;

  for (let i = 0; i < Num.length; i++) {
    if (maxNum < Num[i]) {
      maxNum = Num[i];
    }
  }
  return maxNum;
}

const numbers = [6, 5, 369, 9, 25, 1];

let maxNumber = taskEight(...numbers);

console.log(maxNumber);