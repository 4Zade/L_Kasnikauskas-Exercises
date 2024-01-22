let guessInput = document.getElementById('guess');
let output = document.getElementById('result');

function guessGame() {
  let guess = guessInput.value;

  const randomNumber = Math.floor(Math.random() * 10) + 1;
  if (guess != randomNumber) return output.innerHTML = `Wrong! The number was ${randomNumber}`;
  return output.innerHTML = `Correct! The number was ${randomNumber}`
}
