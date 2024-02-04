const selectedDiv = document.getElementById('container');

addEventListener('load', () => {
    console.log('Site is loaded')
    
    for (const child of selectedDiv.children) {
        console.log(child);
    }
});