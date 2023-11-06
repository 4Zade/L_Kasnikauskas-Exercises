function taskSix(obj) {
    let cloneObj = {...obj}
    cloneObj.status = 'Nebe awtyst';
    return cloneObj;
}

const user = {
    'name': 'Jaunius',
    'age': 18,
    'status': 'Awtyst',
}

const userChanged = taskSix(user);

console.log(user);
console.log(userChanged);