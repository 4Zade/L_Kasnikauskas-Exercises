let temp = '';
let symbol = '*'

for (let i = 5; i > 0; i--) {
    temp = '';
    temp += symbol.repeat(i);
    console.log(temp);
}