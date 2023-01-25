let gameOver = false;

let chosenNumber = Math.floor(Math.random() * 100 + 1);
const maxNumberOfAttempts = 10;
const inputField = document.querySelector(".inputField");
const submit = document.querySelector(".submitButton");
const feedback = document.querySelector(".feedback");
const reset = document.querySelector(".resetButton");

let currentNumberOfAttempts = 0;
let previousGuesses = [];
let previousGuessDisplay = document.querySelector(".previousGuesses");

reset.addEventListener("click", resetGame);

function resetGame() {
  currentNumberOfAttempts = 0;
  gameOver = false;
  previousGuesses.length = 0;
  submit.classList.remove("disabled");
  feedback.classList.add("invisible");
  previousGuessDisplay.innerText = "";
  inputField.value = "";
  feedback.innerText = "";
  chosenNumber = Math.floor(Math.random() * 100 + 1);

  /* Logging reset */
  console.log(`Status:
  chosenNumber: ${chosenNumber},
  maxNumberOfAttempts: ${maxNumberOfAttempts},
  Attempt number: ${currentNumberOfAttempts},
  previousGuesses: ${previousGuesses}`);
}

submit.addEventListener("click", attemptAGuess);
// console.log(`Status:
//   chosenNumber: ${chosenNumber},
//   maxNumberOfAttempts: ${maxNumberOfAttempts},
//   Attempt number: ${currentNumberOfAttempts},
//   previousGuesses: ${previousGuesses}`);

function attemptAGuess() {
  validateInput();
  giveFeedback();
  console.log(`Status:
  chosenNumber: ${chosenNumber},
  maxNumberOfAttempts: ${maxNumberOfAttempts},
  Attempt number: ${currentNumberOfAttempts},
  previousGuesses: ${previousGuesses.toString()}`);
  if (
    currentNumberOfAttempts === 10 &&
    !(parseInt(inputField.value) === parseInt(chosenNumber))
  ) {
    gameOver = true;
    submit.classList.add("disabled");
    feedback.classList.add("error");
    feedback.innerText = "Sorry You lost";
    console.log(`GameOver Status: ${gameOver}`);
  }
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

    document.querySelector(
      ".previousGuesses"
    ).innerText = `previousGuesses: ${previousGuesses.toString()}`;
  }
}

function removeAlert() {
  feedback.classList.add("invisible");
  feedback.classList.remove("error");
}

let winner = parseInt(inputField.value) === parseInt(chosenNumber);

function giveFeedback() {
  if (parseInt(inputField.value) === parseInt(chosenNumber)) {
    console.log("Congratulations! You got it right!");
    submit.classList.add("disabled");
    feedback.classList.add("winner");
    feedback.classList.remove("invisible");
    feedback.classList.remove("error");
    feedback.innerText = "Congratulations! You got it right!";
    // setTimeout(removeAlert, 3000);
  }
  if (parseInt(inputField.value) < parseInt(chosenNumber)) {
    feedback.classList.add("error");
    feedback.classList.remove("invisible");
    feedback.classList.remove("winner");
    feedback.innerText = "Last guess was too low!";
    // console.log("Last guess was too low!");
  }
  if (parseInt(inputField.value) > parseInt(chosenNumber)) {
    feedback.innerText = "Last guess was too high!";
    //   console.log("Last guess was too high!");
    feedback.classList.add("error");
    feedback.classList.remove("invisible");
    feedback.classList.remove("winner");
  }
}
