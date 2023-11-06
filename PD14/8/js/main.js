const rows = 11;
const columns = 11;

let table = '';

function colorText(text, color) {
  return `\x1b[${color}m${text}\x1b[0m`;
}

for (let i = 0; i < rows; i++) {
  for (let j = 0; j < columns; j++) {

    if (i === 0) {

      if (j === 0) {
        table += colorText(j.toString().padStart(3, '0') + ' | ', '32');
      } else if (j === columns - 1) {
        table += colorText(j.toString().padStart(3, '0') + ' | ', '32');
      } else {
        table += colorText(j.toString().padStart(3, '0') + ' | ', '32');
      }

    } 

    else if (j === 0) {
      table += colorText(i.toString().padStart(3, '0') + ' | ', '32');
    } 

    else {
      table += (i * j).toString().padStart(3, '0') + ' | ';
    }
  }

  if (i !== rows - 1) {
    table += '\n' + '-'.repeat(65) + '\n';
  }
}

console.log(table);
