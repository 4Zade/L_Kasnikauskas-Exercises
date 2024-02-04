const input = document.getElementById('input');
const button = document.getElementById('alert');

button.addEventListener('click', () => {
    console.log(input.value);
    if (input.value === '') {
        input.style.border = '1px crimson solid';
        button.style.backgroundColor = 'crimson';
        button.style.animation = 'shake 1s ease-in-out';

        setTimeout(() => {
            input.style.border = '1px white solid';
            button.style.backgroundColor = 'cornflowerblue';
            button.style.animation = ''
        }, 1000);

        return
    }

    alert(input.value);
});