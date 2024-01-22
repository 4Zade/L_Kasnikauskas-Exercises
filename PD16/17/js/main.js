function biggerThanNum(arr, num) {
    const newArr = [];

    arr.forEach(number => {
        if (number > num) newArr.push(number);
    });

    return newArr;
}

let numArray = [1, 13, 11, 7, 18, 4, 9, 18, 21, 5];

console.log(biggerThanNum(numArray, 10));