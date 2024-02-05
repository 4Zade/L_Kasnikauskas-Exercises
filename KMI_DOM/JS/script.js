const form = document.getElementById('form1')
const output = document.getElementById('kmi');

form.addEventListener('submit', (event) => {

    event.preventDefault();

    const heightInput = document.getElementById('height');
    const weightInput = document.getElementById('weight');

    const height = parseFloat(heightInput.value);
    const weight = parseFloat(weightInput.value);

    if(isNaN(height) || isNaN(weight)) return alert('Fill the input fields');

    let kmi = calculateKMI(height, weight);

    output.innerHTML = kmi.toFixed(2);
});

function calculateKMI(height, weight) {
    const heightInMeters = height / 100;
    const kmi = weight / (heightInMeters ** 2);

    return kmi
}