let weightInput = document.getElementById('weight');
let heightInput = document.getElementById('height');
let resultText = document.getElementById('result');

function calculateBMI() {
  console.log('hello')
  let weight = weightInput.value;
  let heightCm = heightInput.value;

  let height = heightCm / 100;

  if (isNaN(weight) || isNaN(height)) {
    console.log('Give me the right values');
    return;
  }

  let bmi = weight / Math.pow(height, 2);
  let result = 'Your BMI is: ' + bmi.toFixed(2);

  resultText.innerHTML = result;
}
