const listContainer = document.getElementsByTagName('ul')[0];

const input = document.getElementById('input');
const addButton = document.getElementById('add');
const deleteButton = document.getElementById('delete');

addButton.addEventListener('click', () => {
    let newListItem = document.createElement('li');
    if (input.value === '') {
        input.style.border = '1px solid crimson';
        input.style.animation = 'shake 1s ease-in-out';

        setTimeout(() => {
            input.style.border = '1px solid white';
            input.style.animation = 'none';
        }, 1000)

        return;
    }

    newListItem.innerHTML = input.value;
    input.value = '';

    listContainer.appendChild(newListItem);
});

deleteButton.addEventListener('click', () => {
    const firstItem = listContainer.querySelector('li');

    if(!firstItem) {
        deleteButton.style.backgroundColor = 'crimson';
        deleteButton.style.animation = 'shake 1s ease-in-out';

        setTimeout(() => {
            deleteButton.style.backgroundColor = 'cornflowerblue';
            deleteButton.style.animation = '';
        }, 1000)
    }

    listContainer.removeChild(firstItem);
})