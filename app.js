//Basic functions
function add(a, b) {
  return a + b;
}
function subtract(a, b) {
  return a - b;
}
function multiply(a, b) {
  return a * b;
}
function divide(a, b) {
  return a / b;
}
function operate(operator, num1, num2) {
  return operator(num1, num2);
}
//get the display and the array of btns
const display = document.querySelector(".display");
const button = document.querySelectorAll("button[type=button]");
//assing listener to all butons
for (let i = 0; i < button.length; i++) {
  button[i].addEventListener("click", toDisplay);
}
let operator = "";
let firstNum = "";
let seconNum = "";
//display numbers on display
function toDisplay(btn) {
  let value = btn.target.value;
  if (
    value == "0" ||
    value == "1" ||
    value == "2" ||
    value == "3" ||
    value == "4" ||
    value == "5" ||
    value == "6" ||
    value == "7" ||
    value == "8" ||
    value == "9"
  ) {
    display.value += value;
  } if (value == "X") {
    operator = "X";
    display.value = "";
  } if (value == "/") {
    operator = "/";
    display.value = "";
  } if (value == "+") {
    operator = "+";
    display.value = "";
  } if (value == "-") {
    operator = "-";
    display.value = "";
  } 
  if (operator === "") {
    firstNum = parseInt(display.value);
    console.log(firstNum);
  }
  if (value == "=" && operator == "X") {
    display.value = operate(multiply, firstNum, seconNum);
  }
  if (value == "=" && operator == "/") {
    display.value = operate(divide, firstNum, seconNum);
  }
  if (value == "=" && operator == "+") {
    display.value = operate(add, firstNum, seconNum);
  }
  if (value == "=" && operator == "-") {
    display.value = operate(subtract, firstNum, seconNum);
  } else {
    seconNum = parseInt(display.value);
    console.log(seconNum);
  }
}

