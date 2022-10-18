let foodBill = 50.00;
console.log(typeof foodBill);

let tipPercentage = 0.20;

let tipAmount = tipPercentage * foodBill;

console.log(tipAmount);

console.log(`The tip on $${foodBill.toFixed(2)} food bill is $${tipAmount}`);
