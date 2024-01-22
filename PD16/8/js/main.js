function generateCombinations(word) {
    const combinations = [...word];

    for (let i = 0; i < word.length; i++) {
        const newWord = word.slice(0, i) + word.slice(i + 1);
        const newCombinations = generateCombinations(newWord);
        newCombinations.forEach((combination) => {
            combinations.push(word[i] + combination);
        });
    }

    return combinations.sort(function(a, b) {
        return a.length - b.length || a.localeCompare(b);
    });
}

const result = generateCombinations('word')

/**
 * Šito tikrai nelabai reikia, bet visgi norėjau gražiau atspausdinti
 */

let columns = {
    'd': [],
    'o': [],
    'r': [],
    'w': []
  };
  
  result.forEach(item => {
      const key = item.charAt(0);
      columns[key].push(item);
  });
  
  console.table(columns);