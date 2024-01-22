function calculateLetters(str) {
    return str.trim().split(" ").join("").length
}

console.log(calculateLetters(" Hello World "))