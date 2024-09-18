let a = 0;
let b = 24;

console.log('Fibonacci Sequence:');
console.log(a);

for (let i = 1; i < 10; i++) {
  console.log(b);
  let next = a + b;
  a = b;
  b = next;
}

let product = 1;

for (let i = 2; i <= 20; i += 2) {
  product *= i;
}

console.log(product);
