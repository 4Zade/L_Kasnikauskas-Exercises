const mainImage = document.querySelector('div.card img');
const imageBtn = document.querySelectorAll('div.col-3 img');

imageBtn.forEach(image => {
    image.addEventListener('click', () => {
        mainImage.src = image.src;
    });
})