//Project: Salary & Budget Calculator
const monthlySalary = 2200;
const rent = 850;
const groceries = 300;
const transport = 150;
const bills = 250;

const totalExpenses = rent + groceries + transport + bills;
const savings = monthlySalary - totalExpenses;
const isWithinBudget = totalExpenses <= monthlySalary;

console.log("====Monthly Budget====");
console.log("Salary: £" + monthlySalary);
console.log("Expenses: £" + totalExpenses);
console.log("Remaining: £" + savings);
console.log("Within Budget: " + isWithinBudget);
