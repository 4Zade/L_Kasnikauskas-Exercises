function taskThree(arr1, arr2) {
  try {
    return [...arr1, ...arr2];
  } catch (err) {
    console.log(err);
  }
}

const junkFood = ['Pizza', 'Burgers', 'Cakes', 'Chocolate'];
const drinks = ['Coffee', 'Tea', 'Cola']

const foods = taskThree(junkFood, drinks);

console.log(foods);