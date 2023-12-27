let daysInput = document.querySelector("#days");
let monthsInput = document.querySelector("#months");
let yearsInput = document.querySelector("#years");

const submitBtn = document.querySelector(".icon");
let dayError = document.querySelector(".days_error");
let monthError = document.querySelector(".months_error");
let yearError = document.querySelector(".years_error");

let isValid = false;

daysInput.addEventListener("input", (e) => {
  if (daysInput.value > 31) {
    dayError.innerText = "must be a valid date";
    isValid = false;
    return;
  } else {
    isValid = true;
    dayError.innerText = "";
  }
  if (daysInput.value == 0) {
    isValid = false;
    dayError.innerText = "this field is required";
    isValid = false;
    return;
  } else {
    dayError.innerText = "";
  }
});
monthsInput.addEventListener("input", (e) => {
  if (monthsInput.value > 12) {
    monthError.innerText = "must be a valid month";
    isValid = false;
    return;
  } else {
    isValid = true;
    monthError.innerText = "";
  }
  if (monthsInput.value == 0) {
    isValid = false;
    monthError.innerText = "this field is required";
    isValid = false;
    return;
  } else {
    monthError.innerText = "";
  }
});
yearsInput.addEventListener("input", (e) => {
  if (yearsInput.value > 2024) {
    yearError.innerText = "must be a valid year";
    isValid = false;
    return;
  } else {
    isValid = true;
    yearError.innerText = "";
  }
  if (yearsInput.value == 0) {
    isValid = false;
    yearError.innerText = "this field is required";
    isValid = false;
    return;
  } else {
    yearError.innerText = "";
  }
});

submitBtn.addEventListener("click", () => {
  const currentDate = new Date();
  if (!isValid) {
    return;
  } else {
    const inputDate =
      yearsInput.value + "-" + monthsInput.value + "-" + daysInput.value;

    const dateOfBirth = new Date(inputDate);

    //   diff in milliseconds
    const ageInMilliseconds = currentDate - dateOfBirth;

    const ageInYears = Math.floor(
      ageInMilliseconds / (365.25 * 24 * 60 * 60 * 1000)
    );
    const ageInMonths = Math.floor(
      (ageInMilliseconds % (365.25 * 24 * 60 * 60 * 1000)) /
        (30.44 * 24 * 60 * 60 * 1000)
    );
    const ageInDays = Math.floor(
      (ageInMilliseconds % (30.44 * 24 * 60 * 60 * 1000)) /
        (24 * 60 * 60 * 1000)
    );

    document.querySelector(".year_output").innerText =
      ageInYears > 9 ? ageInYears : "0" + ageInYears;
    document.querySelector(".month_output").innerText =
      ageInMonths > 9 ? ageInMonths : "0" + ageInMonths;
    document.querySelector(".day_output").innerText =
      ageInDays > 9 ? ageInDays : "0" + ageInDays;
  }
});
