let gameOver = false;
const chosenNumber = Math.floor(Math.random() * 100 + 1);
const maxNumberOfAttempts = 10;
const inputField = document.querySelector(".inputField");

const submit = document.querySelector(".submitButton");
const feedback = document.querySelector(".feedback");
const reset = document.querySelector(".resetButton");

let currentNumberOfAttempts = 0;
let previousGuesses = [];

let previousGuessDisplay = document.querySelector(".previousGuesses").innerText;

// //Creating the Boolean for success or fail
let successfulGuess = inputField.value === chosenNumber;

//We keep playing until game over
// while (currentNumberOfAttempts < 11 && !successfulGuess) {
for (let i = 0; i < 10; i++) {
  submit.addEventListener("click", attemptAGuess);
  console.log(`Status:
  chosenNumber: ${chosenNumber},
  maxNumberOfAttempts: ${maxNumberOfAttempts},
  Attempt number: ${currentNumberOfAttempts},
  previousGuesses: ${previousGuesses}`);
}
submit.classList.add("disabled");
// if (gameOver) {
//   submit.classList.add("disabled");
//   feedback.classList.add("error");
//   feedback.innerText = "Sorry, You lost";
// }

function attemptAGuess() {
  validateInput();
  giveFeedback();
}

function validateInput() {
  console.log(inputField.value);
  if (
    isNaN(inputField.value) ||
    inputField.value < 1 ||
    inputField.value > 100
  ) {
    feedback.classList.remove("invisible");
    feedback.innerText = "Please enter a valid integer number";
    feedback.classList.add("error");
    setTimeout(removeAlert, 3000);
  } else {
    currentNumberOfAttempts += 1;
    previousGuesses.push(inputField.value);
    previousGuessDisplay.innerHTML = previousGuesses.toString();
  }
}

function removeAlert() {
  feedback.classList.add("invisible");
  feedback.classList.remove("error");
}

function giveFeedback() {
  if (parseInt(inputField.value) === parseInt(chosenNumber)) {
    console.log("Congratulations! You got it right!");
    submit.classList.add("disabled");
  } else if (inputField.value < chosenNumber) {
    console.log("Last guess was too low!");
  } else {
    console.log("Last guess was too high!");
  }
}

reset.addEventListener("click", resetGame);

function resetGame() {
  currentNumberOfAttempts = 0;
  gameOver = false;
  previousGuesses.length = 0;
  submit.classList.remove("disabled");
  previousGuessDisplay = "";
  inputField.value = "";
}
