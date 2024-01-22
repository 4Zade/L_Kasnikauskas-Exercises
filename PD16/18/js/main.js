function findNonRepeating(text) {
    const line = [...text];

    for (let i = 0; i < line.length; i++) {
        let isRepeated = false;

        for (let j = 0; j < line.length; j++) {
            if (i !== j && line[i] === line[j]) {
                isRepeated = true;
                break;
            }
        }

        if (!isRepeated) {
            return line[i];
        }
    }

    return null;
}

const text = 'aabccde';

console.log(findNonRepeating(text));
