function checkIfPalindrome(str) {
    return str === str.split('').reverse().join('');
}

console.log(checkIfPalindrome('abba'));