// 1)

let numberType = 7;
console.log(typeof numberType); //Number

let bigIntType = 56n;
console.log(typeof bigIntType); //BigInt

let stringType = 'Hello world';
console.log(typeof stringType); //String

let booleanType = true;
console.log(typeof booleanType); //Boolean

let undefiedType;
console.log(typeof undefinedType); //Undefined

let nullType = {};
nullType = null;
console.log(nullType); //Null

let objectType = {};
console.log(typeof objectType); //Object

// 2)

let number = 12; //number
console.log(typeof number);

let otherNumber = 45.89; //number
console.log(typeof otherNumber);

let textOne = 'Beautiful JavaScript World'; //string
console.log(typeof textOne);

let textTwo = "Beautiful JavaScript World"; //string
console.log(typeof textTwo);

let textThree = `Beautiful JavaScript World`; //string
console.log(typeof textThree);

let isTrue = (true == false); //boolean
console.log(typeof isTrue);

let isEqual = (2 >= 0); //boolean
console.log(typeof isEqual);

let petName = undefined; //undefined
console.log(typeof petName);

let petAge = null; //object (null)
console.log(typeof petAge)

let human = { //object
humanName: undefined,
humanAge: null
};
console.log(typeof human)