const users = [
    {
        name: 'Jaunius',
        age: 18,
        location: 'Lithuania'
    },
    {
        name: 'Linh',
        age: 21,
        location: 'Romania'
    },
    {
        name: 'Kyle',
        age: 22,
        location: 'Australia'
    },
    {
        name: 'Yao',
        age: 16,
        location: 'Japan'
    },
    {
        name: 'Paul',
        age: 23,
        location: 'US'
    }
];

function filterAndSortUsers(users, minAge, maxAge, location) {
    const filteredUsers = users.filter(user => {
        return user.age >= minAge && user.age <= maxAge && user.location === location;
    });

    filteredUsers.sort((a, b) => a.age - b.age);

    return filteredUsers;
}

const minAge = 18;
const maxAge = 21;
const location = 'Lithuania';

const filteredAndSortedUsers = filterAndSortUsers(users, minAge, maxAge, location);
console.log(filteredAndSortedUsers);
