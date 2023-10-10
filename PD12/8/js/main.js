let t = 112;
let l = 11;
let days = 0;

for (let i = 0; t >= 11; i++) {
  if (i % 2 === 0) {
    t -= l;
  } else {
    t -= (l * 2);
  }

  if (t >= 0){
    days++;
  } else {
    break;
  }
}

console.log(days);
