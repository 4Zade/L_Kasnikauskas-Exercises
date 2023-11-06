let s1 = 222;
let s2 = 245;

for (let i = s1; i <= s2; i++) {
  if(i % 3 === 0) {
    const numbers = [...i.toString()];

    for (let number of numbers) {
      if (number !== '0'  && parseInt(number) % 3 === 0){
        console.log(i);
      }
    }
  }
}