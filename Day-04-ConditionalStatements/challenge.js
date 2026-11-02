const studentName = "Aisha";
const trainingScore = 55;
const attendance = 90;
const mtrain = true;

let trainingStatus;

if (trainingScore >= 80 && attendance >= 75 && mtrain) {
  trainingStatus = "Certificate Issued";
} else if (trainingScore >= 50 && attendance >= 50) {
  trainingStatus = "Certificate Not Issued";
} else {
  trainingStatus = "In Progress";
}
console.log(
  `${studentName} : ${trainingStatus} : Training Score: ${trainingScore}, Attendance: ${attendance}%`,
);
