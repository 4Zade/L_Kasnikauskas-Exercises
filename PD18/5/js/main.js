const user = {
    FirstName: 'Jaunius',
    LastName: 'Pavardenis',
    Age: 18,
    Role: 'Student',
    Year: 2,
}

function filterObject(object) {
    const filteredObject = {};

    for(const item in object) {
        if(typeof object[item] == 'number') {
            filteredObject[item] = object[item];
        };
    }

    return filteredObject;
}

const result = filterObject(user)

console.log(result)