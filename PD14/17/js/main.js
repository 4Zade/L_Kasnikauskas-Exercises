let n = 0;

for (let i = 1; n < 10; i++) {
  let sq = i * i;
  let sqStr = sq.toString();
  let isPalindrome = true;

  for (let i = 0; i < sqStr.length / 2; i++) {
    if (sqStr[i] !== sqStr[sqStr.length - 1 - i]) {
      isPalindrome = false;
      break;
    }
  }

  if (isPalindrome) {
    console.log(`${i} * ${i} = ${sq}`);
    n++;
  }
}
