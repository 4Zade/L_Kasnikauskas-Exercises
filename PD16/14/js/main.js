function generateMatrix(callback) {
    let row = '';
    let matrix = '';

    for (let i = 0; i < 9; i++) {
        for (let j = 1; j <= 9; j++) {
            if (j === 1) {
                row = `${callback(j, i)}`;
            }
            else {
                row += ` | ${callback(j, i)}`;
            }
        }

        row += '\n';
        matrix += row;
    }
    return matrix
}

const checkNum = (x, y) => {
    if (x + y > 9) {
        return x + y - 9;
    }
    
    return x + y;
}

console.log(generateMatrix(checkNum));