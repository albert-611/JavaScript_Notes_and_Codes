const age = 19;
const canVote = age >= 18 ? "Eligible" : "Ineligible";
console.log(canVote);
// Chained ternaries (use sparingly to preserve readability):
const score = 85;
const grade = score >= 90 ? "A"
            : score >= 80 ? "B"
            : score >= 70 ? "C"
            : "F";

console.log(grade);