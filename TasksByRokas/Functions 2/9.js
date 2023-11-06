function mixUp(str1, str2) {
    let str1Arr = [...str1];
    let str2Arr = [...str2];

    let temp = str1Arr[0];

    str1Arr[0] = str2Arr[0];
    str2Arr[0] = temp;

    let newStr = str1Arr.join('') + ' ' + str2Arr.join('');
    
    return newStr;
}

const result = mixUp('Hello', 'World');

console.log(result);