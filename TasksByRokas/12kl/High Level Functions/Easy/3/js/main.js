function createEmailList(customers, domain) {
  const emailList = customers.map(customer => {
    const formattedName = customer.name.toLowerCase().split(' ').join('.');
    return `${formattedName}@${domain}`;
  });
  return emailList;
}

// Example usage
const customers = [
  { name: "Agne Rudaityte" },
  { name: "Jonas Joneikis" },
  { name: "Paulius Kavins" },
];

const emailList = createEmailList(customers, "techin.com");

console.log("Email List:");
console.log(emailList);