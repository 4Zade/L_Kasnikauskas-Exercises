let arr = [5, 2, 8, 1, 9, 3, 6, 7, 4];

arr.sort((a, b) => a - b);

let unique = [];
for (let i = 0; i < arr.length; i++) {
  if (arr[i] !== arr[i + 1]) {
    unique.push(arr[i]);
  }
}

if (unique.length >= 3) {
  let n = unique[2];
  console.log(n);
} else {
  console.log("Nepakanka unikalių reikšmiu.");
}
