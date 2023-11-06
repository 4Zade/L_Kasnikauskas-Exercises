function stringArrToUppercase(strArr, callback) {
    let newArr = [];

    for (let i = 0; i < strArr.length; i++) {
        newArr.push(callback(strArr[i]));
    }

    return newArr
}

function callbackFunction(element) {
    return element.toUpperCase();
}

const orgArr = ['Hello world', "I am JavaScript"];

const result = stringArrToUppercase(orgArr, callbackFunction);

console.log(result);