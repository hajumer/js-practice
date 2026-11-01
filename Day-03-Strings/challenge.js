const firstName = "aisha";
const lastName = "Umer";
const birthYear = 1985;
const course = "JavaScript Development";

const firstInitial = firstName.toUpperCase();
const lastThreeChars = lastName.slice(-2);
const birthDigits = birthYear.toString().slice(-2);
const username = `${firstName}${lastThreeChars}${birthDigits}`;
const hasScript = course.includes("Script");
const fullNameLength = `${firstName} ${lastName}`;
console.log(firstInitial);
console.log(lastThreeChars);
console.log(birthDigits);
console.log(username);
console.log(hasScript);
console.log(fullNameLength.length);

// 1. Convert the first name to lowercase.
// 2. Extract the first 3 characters of the last name.
// 3. Extract the last 2 digits of the birth year.
// 4. Generate a username using template literals.
// 5. Check whether the course name includes "Script".
// 6. Calculate the length of the full name.
