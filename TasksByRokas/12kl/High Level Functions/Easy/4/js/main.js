function averageSalary(arr) {
  let sum = 0;

  for (let i = 0; i < arr.length; i++) {
    sum += arr[i].salary;
  }

  return (sum / arr.length).toFixed(2);
}

const employees = [
  {
    name: 'Jonas',
    salary: 1200,
  },
  {
    name: 'Regina',
    salary: 1400,
  },
  {
    name: 'Robertas',
    salary: 1250,
  },
]

const average = averageSalary(employees);

console.log(average);