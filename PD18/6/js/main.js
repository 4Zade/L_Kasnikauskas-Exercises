const employees = [
    { FirstName: 'Jaunius', LastName: 'Žemaitis', Salary: 1347 },
    { FirstName: 'Jonas', LastName: 'Jaunuolis', Salary: 1156 },
    { FirstName: 'Zita', LastName: 'Isbuhalterijos', Salary: 1413 },
    { FirstName: 'Ona', LastName: 'Vaidutiene', Salary: 1208 },
    { FirstName: 'Norbertas', LastName: 'Kazima', Salary: 1347 },
    { FirstName: 'Virgis', LastName: 'Kazimieris', Salary: 1347 },
    { FirstName: 'Romualda', LastName: 'Pipiriene', Salary: 1542 },
]

function filterEmployeesBySalary(employees, minimumSalary) {
    return employees.filter(employee => employee.Salary > minimumSalary);
}

const result = filterEmployeesBySalary(employees, 1300);

console.log(result);