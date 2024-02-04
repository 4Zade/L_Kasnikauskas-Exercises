const container = document.getElementById('container');
const input = document.getElementById('input');

input.addEventListener('input', () => {
    container.style.backgroundColor = input.value;
    container.style.borderRadius = input.value + 'px';
})