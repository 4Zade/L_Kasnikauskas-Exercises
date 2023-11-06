const rows = 3; //rows

for (let i = 1; i <= rows; i++) {
  let s = ' '.repeat(rows - i);
  let n = '';
  for (let j = 1; j <= 2 * i - 1; j++) {
    n += j;
  }
  console.log(s + n);
}
