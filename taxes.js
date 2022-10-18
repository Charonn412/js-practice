let salary = 7000;
console.log(salary);

let incomeTax = 0.23;
console.log(incomeTax);

let stolenFunds = incomeTax * salary;
console.log(stolenFunds.toFixed(2));

let salaryAfterRobbed = salary - stolenFunds;
console.log(salaryAfterRobbed);

console.log(`My month salary of $${salary.toFixed(2)} is $${salaryAfterRobbed.toFixed(2)} after income tax is taken out.`);