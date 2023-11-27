function checkIfArray(item) {
    if (!Array.isArray(item)) {
        return `It is not an array!`;
    }

    return 'It is indeed an array!';
}

const arr = [1, 2, 3, 4, 5];
//const arr = 'hello';

const result = checkIfArray(arr);

console.log(result);