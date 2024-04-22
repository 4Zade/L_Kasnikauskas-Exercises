const user1 = {
    FirstName: 'Jaunius',
    LastName: 'Pavardenis',
    Age: 19,
}

// const user2 = {
//     FirstName: 'Jaunius',
//     LastName: 'Žemaitis',
//     Age: 18,
// }

const user2 = {
    FirstName: 'Jaunius',
    LastName: 'Pavardenis',
    Age: 19,
}

function checkIfObjectIsTheSame(object1, object2) {
    const keys1 = Object.keys(object1);
    const keys2 = Object.keys(object2);
    if (keys1.length !== keys2.length) {
        return "Not the same object";
    }

    for (const key of keys1) {
        if (object1[key] !== object2[key]) {
            return "Not the same object";
        }
    }

    return "Same object";
}

const result =checkIfObjectIsTheSame(user1, user2);

console.log(result);