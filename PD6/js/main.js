let funnyNumber = 12345;
funnyNumber = funnyNumber.toString();
console.log(typeof funnyNumber);

let funnyString = '12345'; // Convert to Number
funnyString = Math.floor(funnyString);
console.log(typeof funnyString);

let funnyTrue = '1'; // Convert to Boolean
funnyTrue = Boolean(funnyTrue);
console.log(funnyTrue);

let funnyFalse = '0'; // Convert to Boolean
funnyFalse = Boolean(funnyFalse)

let isTrue = false; // Convert to String
isTrue = isTrue.toString();
console.log(isTrue);

let isFalse = true; // Convert to Number
isFalse = Math.floor(isFalse);
console.log(typeof isFalse);

let funnyText = 'JavaScript is dynamic programming language.'; // Convert to Number
funnyText = Math.floor(funnyText);
console.log(typeof funnyText);

let funnyNull = null; // Convert to String
funnyNull = 'Hello world';
console.log(typeof funnyNull);

let funnyUndefined = undefined; // Convert to String
funnyUndefined = 'Hello World';
console.log(typeof funnyUndefined);

let isTrue2 = true; // Convert to String
isTrue2 = isTrue2.toString();
console.log(typeof isTrue2)

let isFalse2 = false; // Convert to String
isFalse2 = isFalse2.toString();
console.log(typeof isFalse2);

let booleanString = 'true' // Convert to Number
booleanString = Number(booleanString);
console.log(typeof booleanString);

let otherBooleanString = 'false' // Convert to Boolean
otherBooleanString = Boolean(otherBooleanString)
console.log(typeof otherBooleanString);