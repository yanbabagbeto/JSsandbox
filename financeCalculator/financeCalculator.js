// localStorage.setItem("name", "Yan");

// localStorage.removeItem("name");

// let loanAmount = document.querySelector("#loan-amount");
// let annualInterest = document.querySelector("#annualInterest");
// let repaymentYear = document.querySelector("#repaymentYears");

// const subButton = document.getElementById("calculate");

const myForm = document.querySelector(".form");
//Calculate the result on submit
myForm.addEventListener("submit", calculateResults);
//Reset the input and the display
myForm.addEventListener("reset", resetForm);

//How we calculate the results
function calculateResults(e) {
  let loanAmount = document.querySelector("#loan-amount");
  let annualInterest = document.querySelector("#annualInterest");
  let repaymentYear = document.querySelector("#repaymentYears");
  let result = document.getElementById("result");

  let principal = Number(loanAmount.value);
  let interest = Number(annualInterest.value) / 100;
  let term = Number(repaymentYear.value);
  let calculatedResult = principal * (1 + interest) ** term;
  calculatedResult = calculatedResult.toFixed(2);
  console.log(`Calculating...result: ${calculatedResult}`);

  let toBeHidden = document.querySelectorAll(".toToggle");
  toBeHidden.forEach(makeVisible);

  result.innerText = calculatedResult;
  e.preventDefault();
}

//How we reset the form
function resetForm(e) {
  //We reset all the input
  let loanAmount = document.querySelector("#loan-amount");
  let annualInterest = document.querySelector("#annualInterest");
  let repaymentYear = document.querySelector("#repaymentYears");
  let result = document.getElementById("result");

  loanAmount.value = "";
  annualInterest.value = "";
  repaymentYear.value = "";
  result.value = "";
  let toBeHidden = document.querySelectorAll(".toToggle");
  toBeHidden.forEach(makeInvisible);
}

function makeVisible(item) {
  item.classList.remove("removed");
}

function makeInvisible(item) {
  item.classList.add("removed");
}
