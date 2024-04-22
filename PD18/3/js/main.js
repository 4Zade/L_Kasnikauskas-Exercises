const knyga = {
    Pavadinimas: 'Baltoji iltis',
    Autorius: 'Jack London',
    PuslapiuSkaicius: 288
}

function bookAnnouncement() {
    for (const item in knyga) {
        console.log(`${item}: ${knyga[item]}`)
    }
}

bookAnnouncement()