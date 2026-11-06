//IT Support Ticket Queue Processor

const tickets = [
  "Password Reset",
  "Laptop not starting",
  "Internet connection issue",
  "email not working",
  "printer offline",
];

console.log("<<<IT Support Ticket Queue Processor>>>");
// Process for each ticket

for (let i = 0; i < tickets.length; i++) {
  console.log(`Ticket ${i + 1}:${tickets[i]}`);
}

console.log("===================================");
console.log(`Total Tickets:${tickets.length}`);

console.log("\n =====Ticket Priorities=====");

for (let i = 0; i < tickets.length; i++) {
  const ticket = tickets[i];
  let priority = "High";
  if (ticket === "Laptop not starting" || ticket === "Password Reset") {
    priority = "High";
  } else if (
    ticket === "Internet connection issue" ||
    ticket === "email not working"
  ) {
    priority = "Medium";
  } else {
    periority = "Low";
  }
  console.log(`${ticket} - Perioroty:${priority}`);
}
