function taskFour(...arr) {
  let newArr = [];

  for (let i = 0; i < arr.length; i++) {
    newArr.push(arr[i].toUpperCase());
  }

  return newArr;
}

const orgArr = ["hello world", "I like turtles", "I Am JavaScript"];
const result = taskFour(...orgArr);
console.log(result);
