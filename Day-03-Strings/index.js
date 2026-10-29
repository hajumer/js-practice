// Day 3 - Employee ID Generator

const firstName = "Hajra";
const lastName = "Umer";
const department = "Probation";
const employeeNumber = 1025;

//convert names to uppercase
const firstInitial = firstName[0].toUpperCase();
const lastInitial = lastName[0].toUpperCase();

//Extract department Code
const departmentCode = department.slice(0, 3).toUpperCase();

//Generate employee ID
const employeeId = `${departmentCode}-${firstInitial}${lastInitial}-${employeeNumber}`;

//Generate email address
const email = `${firstName.toLowerCase()}.${lastName.toLowerCase()}@example.com`;

console.log(">>>>Employee ID Generator<<<<");
console.log(`Full Name: ${firstName} ${lastName}`);
console.log(`Department: ${department}`);

console.log(`Employee ID: ${employeeId}`);
console.log(`Email Address: ${email}`);
