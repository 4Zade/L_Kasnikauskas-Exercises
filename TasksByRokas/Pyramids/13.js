const n = 5;
const symbol = '*'

for (let i = 1; i <= n; i++) {
  let spacePrint = ' '.repeat(n - i);
  let symbolPrint = symbol.repeat(2 * i - 1);
  console.log(spacePrint + symbolPrint);
}