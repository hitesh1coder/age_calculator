function calculateAge(birthdate) {
  // Parse the birthdate string to a Date object
  var dob = new Date(birthdate);

  // Get the current date
  var currentDate = new Date();

  // Calculate the difference in milliseconds
  var timeDiff = currentDate - dob;

  // Calculate age in years
  var ageInYears = Math.floor(timeDiff / (1000 * 60 * 60 * 24 * 365.25));

  // Calculate the remaining days
  var remainingDays = Math.floor(
    (timeDiff % (1000 * 60 * 60 * 24 * 365.25)) / (1000 * 60 * 60 * 24)
  );

  // Calculate age in months
  var ageInMonths = Math.floor(timeDiff / (1000 * 60 * 60 * 24 * 30.44)); // Approximate average number of days in a month

  // Calculate remaining months
  var remainingMonths = Math.floor(
    (timeDiff % (1000 * 60 * 60 * 24 * 30.44)) / (1000 * 60 * 60 * 24)
  );

  // Display the result
  console.log(
    "Age: " +
      ageInYears +
      " years, " +
      remainingMonths +
      " months, and " +
      remainingDays +
      " days"
  );
}

// Example usage
var inputBirthdate = "1990-01-15"; // Replace this with your input
calculateAge(inputBirthdate);
