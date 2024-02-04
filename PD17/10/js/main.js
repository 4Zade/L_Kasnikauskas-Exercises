const container = document.getElementById('container');

const fromAtoZ = document.getElementById('from-a-to-z');
const fromZtoA = document.getElementById('from-z-to-a');

function getContent() {
    let items = [];
    for (let i = 0; i < container.children.length; i++) {
        const child = container.children[i].innerText;
        items.push(child);
    }   
    
    return items;
}

fromAtoZ.addEventListener('click', () => {
    let items = getContent();
    items.sort();

    container.innerHTML = '';

    items.forEach(child => {
        container.innerHTML += `<li>${child}</li>`;
    });
});

fromZtoA.addEventListener('click', () => {
    let items = getContent();
    items.sort();
    items.reverse();

    container.innerHTML = '';

    items.forEach(child => {
        container.innerHTML += `<li>${child}</li>`;
    });
});

const dropdownBtn = document.getElementById('dropdown-button');
const dropdownList = document.getElementById('dropdown-list');
let dropdownState = false;

dropdownBtn.addEventListener('click', () => {
    console.log('dropdown')
    dropdownState = !dropdownState;
    
    if(dropdownState) {
        dropdownList.style.display = 'flex'
    }
    else {
        dropdownList.style.display = 'none';
    }
});