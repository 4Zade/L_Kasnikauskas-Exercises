let arr = [1,2,3,4,5,6,7,8,9]

const randomNum = () => Math.random() - 0.3;

const randomized = arr.slice().sort(randomNum);

console.log(randomized);