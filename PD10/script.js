let isTrue = true;
let isFalse = false;
console.log(isTrue && isTrue); // true
console.log(isTrue && isFalse); // false
console.log(isFalse && isFalse); // false
console.log(isTrue || isTrue); // true
console.log(isTrue || isFalse); // true
console.log(isFalse || isFalse); // false
console.log(!isTrue); // false
console.log(!isFalse); // true
console.log(!isFalse && isTrue); // true
console.log(!isFalse && !isTrue); // false
console.log(!isFalse || isTrue); // true