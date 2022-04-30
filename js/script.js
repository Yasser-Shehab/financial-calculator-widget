//! Selecting Elements
const inputs = document.querySelectorAll(".input-field");
const error = document.querySelector(".error");
const unlimited = document.getElementById("unlimited");
const lifetime = document.getElementById("lifetime");
const brands = document.querySelectorAll(".brand-card");
const brandCardName = document.getElementById("brand-business-card");
const brandCardValue = document.getElementById("brand-card-value");
const calculationResult = document.querySelector(".calculations-result");
const businessSection = document.querySelector(".business-card-section");
const brandsTitle = document.querySelector(".brand__title");
const brandProgressBar = document.querySelector(".brand-progress-bar");
let selectedBrand = "";
//! Object To Store the Numbers
const inputValues = {
  vendor: "",
  medical: "",
  corp: "",
  teamProject: "",
};
//! Object To Store Ratio for Each Brand
const brandRatio = {
  brex: 0.3,
  stripe: 2.9,
  amex: 1.3,
};

inputs.forEach((input) => {
  input.addEventListener("keyup", () => {
    inputValues[input.id] = parseInt(input.value);
    console.log(inputValues);
    checkinputs();
  });
});

//!Check Inputs for Wrong data
const checkinputs = () => {
  let checkForSymbols = true;
  let AllNumbers = true;
  for (const [key, value] of Object.entries(inputValues)) {
    if (isNaN(value)) {
      checkForSymbols = false;
    }
    if (typeof value != "number") {
      AllNumbers = false;
    }
  }

  if (checkForSymbols) {
    error.style.display = "none";
  } else {
    error.style.display = "block";
  }
  if (AllNumbers) {
    brandCardValue.textContent = `$ ${numberWithComma(
      Math.round(getSum() * brandRatio[selectedBrand])
    )}`;
    unlimited.textContent = `$ ${numberWithComma(Math.round(getSum() * 1.1))}`;
    lifetime.textContent = `$ ${numberWithComma(Math.round(getSum() * 1.2))}`;
    calculationResult.style.display = "block";
  }
};

//!Calculating The Sum
const getSum = () => {
  const sum = Object.values(inputValues).reduce((a, b) => a + b);

  return sum;
};

//! Adds a comma After 3th Digit
const numberWithComma = (number) => {
  return number.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
};

//!َBrand onClick Functionality
brands.forEach((brand) => {
  brand.addEventListener("click", () => {
    selectedBrand = brand.id;
    console.log(typeof selectedBrand);
    brandCardName.textContent = `${capitalizeFirst(selectedBrand)} Business Card`;
    brandCardValue.textContent = `$ ${numberWithComma(
      Math.round(getSum() * brandRatio[selectedBrand])
    )}`;
    businessSection.style.display = "flex";
    brandsTitle.textContent = `Comparing Results to ${capitalizeFirst(selectedBrand)}`;
    brandProgressBar.style.width = `calc(${60 * brandRatio[selectedBrand]}px)`;
  });
});

//! Capitalize First Letter
const capitalizeFirst = (value) => {
  return value.charAt(0).toUpperCase() + value.slice(1);
};
