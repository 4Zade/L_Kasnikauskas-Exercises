const n = 5;
const symbol = '*';

// Print the upper half of the diamond
for (let i = 1; i <= n; i++) {
  let spacePrint = ' '.repeat(n - i);
  let symbolPrint = symbol.repeat(2 * i - 1);
  console.log(spacePrint + symbolPrint);
}

// Print the lower half of the diamond
for (let i = n - 1; i >= 1; i--) {
  let spacePrint = ' '.repeat(n - i);
  let symbolPrint = symbol.repeat(2 * i - 1);
  console.log(spacePrint + symbolPrint);
}
