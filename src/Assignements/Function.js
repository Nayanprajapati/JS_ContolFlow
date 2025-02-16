// Function to check voting eligibility
const canVote = (age) => {
  if (age >= 18) {
    return true; // Eligible to vote
  } else {
    return false; // Not eligible to vote
  }
};

// Test the function with given ages
console.log(canVote(17)); // false
console.log(canVote(20)); // true
console.log(canVote(65)); // true
