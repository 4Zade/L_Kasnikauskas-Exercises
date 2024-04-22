const student = {
    firstName: 'Jaunius',
    lastName: 'Pavardeninis',
    age: 18,

    get fullName() {
        return `${student.firstName} ${student.lastName}`;
    }
}

console.log(student);
console.log(student.fullName);