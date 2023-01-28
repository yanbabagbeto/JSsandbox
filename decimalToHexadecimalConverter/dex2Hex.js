// let number = parseInt(prompt("Please enter a decimal integer."));

const convertButton = document.querySelector(".convert");
const resetButton = document.querySelector(".reset");
const mainInput = document.getElementById("main_input");
const resultField = document.querySelector(".hexOutput");
const array = [];

convertButton.addEventListener("click", convert);
resetButton.addEventListener("click", resetFields);

function resetFields() {
  array.length = 0;
  if (mainInput.value != "") {
    mainInput.value = "";
  }
  // resultField.innerText = "";
  location.reload(true);
}

function convert() {
  let number = parseInt(document.getElementById("main_input").value);
  let divider = number;
  let quotient, remainder;

  if (divider < 16) {
    toHex(divider);
    quotient = Math.floor(divider / 16);
    remainder = divider % 16;
    console.log(
      array,
      `divider: ${divider}, quotient: ${quotient}, remainder: ${remainder}`
    );
  } else {
    while (divider >= 16) {
      quotient = Math.floor(divider / 16);
      remainder = divider % 16;
      toHex(remainder);
      console.log(
        array,
        `divider: ${divider}, quotient: ${quotient}, remainder: ${remainder}`
      );

      divider = quotient;
    }
    array.push(divider.toString());
    console.log(array);
    console.log(array.reverse());
  }

  displayResult();
}

function displayResult() {
  let result = "";
  for (item of array) {
    result += item;
  }
  console.log(result);
  resultField.innerText = result;
}

function toHex(val) {
  switch (val) {
    case 10:
      array.push("A");
      break;
    case 11:
      array.push("B");
      break;
    case 12:
      array.push("C");
      break;
    case 13:
      array.push("D");
      break;
    case 14:
      array.push("E");
      break;
    case 15:
      array.push("F");
      break;
    default:
      array.push(val.toString());
  }
}
