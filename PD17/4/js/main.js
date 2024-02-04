const button = document.getElementById('alert');
const allParagraphs = document.getElementsByTagName('p');

button.addEventListener('click', () => {
    for (const paragraph of allParagraphs) {
        paragraph.style.color = window.getComputedStyle(paragraph).color === 'rgb(219, 20, 60)' ? 'white' : 'rgb(219, 20, 60)';
    }
});