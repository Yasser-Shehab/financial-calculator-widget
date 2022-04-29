const vendorCost = document.getElementById("vendor");
const medicalCost = document.getElementById("medical");
const corpCost = document.getElementById("corp");
const teamProjectCost = document.getElementById("teamProject");

const inputValues = {
  vendorValue: "",
  medicalValue: "",
  corpValue: "",
  teamValue: "",
};

function checkInputs() {
  const vendorValue = parseInt(vendorCost.value);
  const medicalValue = parseInt(medicalCost.value);
  const corpValue = parseInt(corpCost.value);
  const teamValue = parseInt(teamProjectCost.value);
  console.log(vendorCost.value.length);
  if (vendorValue > 0) alert("Working");
}

vendorCost.addEventListener("keypress", checkInputs);
medicalCost.addEventListener("keypress", checkInputs);
corpCost.addEventListener("keypress", checkInputs);
teamProjectCost.addEventListener("keypress", checkInputs);
