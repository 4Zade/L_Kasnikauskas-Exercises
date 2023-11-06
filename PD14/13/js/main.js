let result = [];

for (let i = 1; i <= 300; i++) {
  let n = 0;

  for (let j = 1; j <= i; j++) {
    if (i % j === 0) {
      n++;
    }
  }

  if (n === 5) {
    result.push(i);
  }
}

console.log(result);
