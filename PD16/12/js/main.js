function primeNumber(number) {
    let check = 0;

    for (let i = 0; i < number; i++) {
        if (number % i === 0) check++;
    }

    if (check > 2) return false
    return true;
}

console.log(primeNumber(6));