const user = {
    FirstName: 'Jaunius',
    LastName: 'Pavardenis',
    Age: 18,
}

function copyAndChangeObject(oldObject) {
    const newObject = Object.assign({}, oldObject);
    newObject.Age = 19;

    return newObject;
}

const newObject = copyAndChangeObject(user);

console.log(newObject);