//variables general

let result, operand, operation;

const smallDisplay = document.querySelector(".smallTextResult");
const bigDisplay = document.querySelector(".bigTextInput");
const numberDigits = document.querySelectorAll(".number");
const percent = document.querySelector(".percent");
const divide = document.querySelector(".divide");
const back = document.querySelector(".back");
const multiply = document.querySelector(".times");
const plus = document.querySelector(".plus");
const minus = document.querySelector(".minus");
const equal = document.querySelector(".equals");
const dot = document.querySelector(".dot");
const plusmnus = document.querySelector(".plusmnus");

//Reset the bigDisplay and result to 0 at the beginning;
result = 0;
bigDisplay.innerText = "0";

//Reset with AC
const ac = document.querySelector(".ac");
ac.addEventListener("click", () => {
  result = 0;
  bigDisplay.innerText = "0";
  smallDisplay.innerText = "";
  console.log(result);
  return result;
});

//Add the dot

dot.addEventListener("click", (event) => {
  displayResult();
  bigDisplay.innerText = bigDisplay.innerText + ".";
});

// Entering digits

numberDigits.forEach((numberDigit) => {
  numberDigit.addEventListener("click", (event) => {
    displayResult();
    bigDisplay.innerText = bigDisplay.innerText + numberDigit.innerText;
    if (bigDisplay.innerText[0] === "0" && bigDisplay.innerText[1] !== ".") {
      bigDisplay.innerText = bigDisplay.innerText.substr(
        1,
        bigDisplay.innerText.length
      );
    }
    operand = parseFloat(bigDisplay.innerText);
  });
});

//Implement the back button

back.addEventListener("click", () => {
  if (bigDisplay.innerText.length <= 1) {
    bigDisplay.innerText = "0";
  } else
    bigDisplay.innerText = bigDisplay.innerText.substr(
      0,
      bigDisplay.innerText.length - 1
    );
  displayResult();
  console.log(bigDisplay.innerText);
});

back.addEventListener("dblclick", () => {
  result = 0;
  bigDisplay.innerText = "0";
  smallDisplay.innerText = "";
  console.log(result);
  return result;
});

// Parse the operand
function parseOperand(str) {
  return parseFloat(str);
}

//Implement addition

plus.addEventListener("click", () => {
  if (smallDisplay.innerText === "") {
    smallDisplay.innerText = bigDisplay.innerText;
  }

  bigDisplay.innerText = "";
  operation = "add";
});

//Implement multiplication
multiply.addEventListener("click", () => {
  if (smallDisplay.innerText === "") {
    smallDisplay.innerText = bigDisplay.innerText;
  }

  bigDisplay.innerText = "";
  operation = "multiply";
});

//Implement substraction
minus.addEventListener("click", () => {
  if (smallDisplay.innerText === "") {
    smallDisplay.innerText = bigDisplay.innerText;
  }

  bigDisplay.innerText = "";
  operation = "minus";
});

//Implement percentage
percent.addEventListener("click", () => {
  if (smallDisplay.innerText === "") {
    smallDisplay.innerText = bigDisplay.innerText;
  }

  bigDisplay.innerText = "";
  operation = "percent";
  result = parseFloat(smallDisplay.innerText) / 100;
  smallDisplay.innerText = result;
});

//Implement division
divide.addEventListener("click", () => {
  if (smallDisplay.innerText === "") {
    smallDisplay.innerText = bigDisplay.innerText;
  }

  bigDisplay.innerText = "";
  operation = "divide";
});

let currentSign;
if (parseFloat(smallDisplay.innerText) > 0) {
  currentSign = "positive";
} else {
  currentSign = "negative";
}

//Implement sign inversion
plusmnus.addEventListener("click", () => {
  result *= -1;
  console.log(result);
  smallDisplay.innerText = result.toString();
});

//Display the result

function displayResult() {
  if (
    bigDisplay.innerText[0] === "0" &&
    bigDisplay.innerText.length !== 1 &&
    bigDisplay.innerText[1] !== "."
  ) {
    bigDisplay.innerText = bigDisplay.innerText.substr(
      1,
      bigDisplay.innerText.length
    );
  }
  //   smallDisplay.innerText = result.toString();
}

function getResult() {
  equal.addEventListener("click", () => {
    if (operation === "add") {
      result =
        parseFloat(smallDisplay.innerText) + parseFloat(bigDisplay.innerText);
    } else if (operation === "multiply") {
      result =
        parseFloat(smallDisplay.innerText) * parseFloat(bigDisplay.innerText);
    } else if (operation === "divide") {
      result =
        parseFloat(smallDisplay.innerText) / parseFloat(bigDisplay.innerText);
    } else if (operation === "minus") {
      result =
        parseFloat(smallDisplay.innerText) - parseFloat(bigDisplay.innerText);
    }

    console.log(operation);
    console.log(result);
    smallDisplay.innerText = result.toString();
    console.log(smallDisplay.innerText.length);
    // if (smallDisplay.innerText.length > 10) {
    //   result = result.toFixed(9);
    // }
    // smallDisplay.innerText = result.toString();
  });
}

getResult();
