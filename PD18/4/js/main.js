const user = {
    firstName: 'Jaunius',
    LastName: 'Pavardenis',
    Age: 18,
}

function bookAnnouncement() {
    for (const item in user) {
        console.log(`${item}: ${user[item]}`)
    }
}

bookAnnouncement()