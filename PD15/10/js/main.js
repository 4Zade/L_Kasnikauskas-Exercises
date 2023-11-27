let arr = ['A', 'b', 'a', 'C', 'B', 'c', 'A'];

let newArr = arr.filter((element, index, array) => {
    return array.findIndex(e => e.toLowerCase() === element.toLowerCase()) === index;
});

console.log(newArr);