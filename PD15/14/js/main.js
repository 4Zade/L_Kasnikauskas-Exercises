let arr1 = [1, 2, 3, 4, 5];
let arr2 = [4, 5, 6, 7, 8];

var newArr = arr1.concat(arr2);
var uniqueArr = newArr.filter(function(element, index, self) {
    return self.indexOf(element) === index;
});

console.log(uniqueArr);