function taskOne(person) {
    let p = {...person};
    return `You will be a ${p.jobTitle} in ${p.geoLocation}, and married to ${p.partnersName} with ${p.children} kids.`;
}

const user = {
    'children': 72,
    'partnersName': 'Sigita',
    'geoLocation': 'Kaunas',
    'jobTitle': 'Suvirintojas'
}

console.log(taskOne(user));