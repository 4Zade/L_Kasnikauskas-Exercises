function findLongestWord(str) {
    let longestWord = ['o'];
    let i = longestWord.length - 1;
    let end = ''

    // Ieškome ilgiausio žodžio/ių
    str.split(' ').forEach(word => {
        const cleanedWord = word.replace(/[!><,.;"'@#$%^&*_+=`~\\|{}\]\[\/?]/g, ''); //Nuima simbolius nuo žodžių naudojant regex

        if (cleanedWord.length > longestWord[i].length) {
            longestWord = [cleanedWord];
        }
        else if (cleanedWord.length == longestWord[i].length) {
            for (let l = 0; l < longestWord.length; l++) {
                if (!cleanedWord == longestWord[l]) {
                    longestWord.push(cleanedWord);
                }
            }
        }
    });

    // Priklausomai kiek atsakymų ši dalis pateikia juos visus:
    if (longestWord.length > 1) {
        console.log(`Ilgiausi žodžiai turi ${longestWord[i].length} simbolių:\n`)
        for (let resultWords of longestWord) {
            console.log("- ", resultWords);
        }
    }
    else {
        console.log(`Ilgiausias žodis "${longestWord[i].toString()}" turi ${longestWord[i].length} simbolių`);
    }
}

//TESTING
const text = 'hello world is a very lovely lovely place isn\'t lovely?';

findLongestWord(text);