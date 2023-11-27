let text = 'Hello World';
let textArr = [...text];

let newText = '';

for (let i = 0; i < textArr.length; i++) {
    if (textArr[i] == textArr[i].toUpperCase()) {
        newText += textArr[i].toLowerCase()
    }
    else {
        newText += textArr[i].toUpperCase();
    }
}

console.log(newText);