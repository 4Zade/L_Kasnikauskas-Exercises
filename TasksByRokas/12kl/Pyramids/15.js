const rows = 5

for (let i = rows; i >= 1; i--) {
  let s = ' '.repeat(rows - i);
  let l = '';
  for (let j = 0; j < i; j++) {
    l += String.fromCharCode(65 + j);
  }
  console.log(s + l);
}
