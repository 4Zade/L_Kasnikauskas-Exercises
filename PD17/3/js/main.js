const button = document.getElementById('alert');
let isDarkTheme = true;

button.addEventListener('click', () => {
    isDarkTheme = !isDarkTheme

    if(!isDarkTheme) {
        document.body.style.backgroundColor = '#ffffff';
        button.innerHTML = 'Diena';
    }
    else {
        document.body.style.backgroundColor = '#121212';
        button.innerHTML = 'Naktis';
    }
});