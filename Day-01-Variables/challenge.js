const employee = "Hajra Umer";
const Deptartment = "IT Support";
let annualSalary = 28000;
let LondonAllowance = 4000;
const isPermanent = true;

console.log(">>>>>>Employee Profie>>>>>>>");
console.log("Name:", employee);
console.log("Department:", Deptartment);
console.log("Annual Salary: £" + annualSalary);
console.log("London Allowance:£" + LondonAllowance);
console.log("Permanent Employee:", isPermanent);

const totalSalary = annualSalary + LondonAllowance;
const permonthSalary = totalSalary / 12;
console.log("Total Salary: £" + totalSalary);
console.log("Monthly Salary: £" + permonthSalary.toFixed(2));
