function sortNumberArray(arr) {
    return arr.sort((a, b) => a - b);
}

function findSecondSmallestAndBiggestNum(arr) {
    const sortedArr = sortNumberArray(arr);

    return `second smallest: ${sortedArr[1]}\nsecond biggest: ${sortedArr[sortedArr.length - 2]}`;
}

let numArray = [1,9,2,8,3,7,4,6,5];

console.log(findSecondSmallestAndBiggestNum(numArray));