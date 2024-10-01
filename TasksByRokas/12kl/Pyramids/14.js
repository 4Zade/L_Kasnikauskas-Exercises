const rows = 5;

for (let i = rows; i >= 0; i--) {
  let s = ' '.repeat(rows - i);
  let n = '';
  for (let j = 1; j <= i; j++) {
    n += j;
  }
  console.log(s + n);
}
