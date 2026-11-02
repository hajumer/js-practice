//IT Helpdesk Ticket Priority Checker
const ticketID = "IT-1025";
const employeeName = "Aisha";
const issue = "Cannot access email";

const severity = 5;
const systemDown = false;
const securityBreach = false;
let periority;

if (severity > 9 || systemDown || securityBreach) {
  periority = "High";
} else if (severity >= 12) {
  periority = "Medium";
} else {
  periority = "Low";
}
console.log(
  `${ticketID} : ${periority} : ${employeeName} reported an issue: ${issue}`,
);
