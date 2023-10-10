let pam = [5, 6, 4, 5, 4];
let pamSum = 0;
let time = 45;
let timeSum;

for (let i = 0; i < pam.length; i++) {
    pamSum += pam[i];
}

timeSum = pamSum * time;

console.log(`Pamokos: ${pamSum} \nLaikas: ${timeSum}`);