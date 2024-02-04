const button = document.getElementById('alert');
const text = document.getElementById('text')

button.addEventListener('click',() => {
    text.innerHTML = 'Sveiki, aš esu naujas tekstas!';
});