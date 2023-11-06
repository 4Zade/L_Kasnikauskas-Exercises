function taskNine(...numbers) {
  let arr = [...numbers];
  let output = 0

  for (let i = 0; i < arr.length; i++) {
    output += arr[i];
  }

  return output;
}

let Numbers = [6, 8, 3, 20];

let answer = taskNine(...Numbers);

console.log(answer);