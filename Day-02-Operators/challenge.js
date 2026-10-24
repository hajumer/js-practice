const hourlyRate = 15;
const hoursWorked = 35;
const overtimeHours = 5;
const overtimeMultiplier = 1.5;

// 1. Normal earnings: 15 × 35
const normalEarnings = hourlyRate * hoursWorked;

// 2. Overtime rate: 15 × 1.5
const overtimeRate = hourlyRate * overtimeMultiplier;

// 3. Overtime earnings: 22.50 × 5
const overtimeEarnings = overtimeRate * overtimeHours;

// 4. Total weekly earnings
const totalEarnings = normalEarnings + overtimeEarnings;

// 5. Kya earnings £600 se zyada hain?
const isAbove600 = totalEarnings > 600;

// Bonus: 10% savings
const savings = totalEarnings * 0.1;

// 6. Results
console.log("Normal earnings: £" + normalEarnings);
console.log("Overtime hourly rate: £" + overtimeRate);
console.log("Overtime earnings: £" + overtimeEarnings);
console.log("Total weekly earnings: £" + totalEarnings);
console.log("Above £600: " + isAbove600);
console.log("10% savings: £" + savings);
