let a = 96;
let z = 103;
let p = 0;

for (let i = a; i <= z; i++) {
  p += i.toString().length;
}

console.log(p);