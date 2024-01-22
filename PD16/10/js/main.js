function makeWordsStartInCaps(str) {
    return str.split(" ").map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(" ");
}

const text = "hello world";
console.log(makeWordsStartInCaps(text));