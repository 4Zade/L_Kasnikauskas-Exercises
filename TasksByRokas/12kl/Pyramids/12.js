let arr = [];

for (let i = 1; i <= 100; i++) {

    if (i % 3 === 0 && i % 7 === 0) {
        arr.push('Three and Seven');
    }
    else if(i % 3 === 0) {
        arr.push('Three');
    }
    else if(i % 7 === 0) {
        arr.push('Seven');
    }
    else {
        arr.push(i);
    }
}

console.log(arr);