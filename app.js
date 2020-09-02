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
//variables
const display = document.querySelector(".display");
const button = document.querySelectorAll(".numBtn");
const operators = document.querySelectorAll(".opBtn");

display.value = "";
let operator = "";
let firstNum = "";
let seconNum = "";

//assing listener to all numButtons 0 - 9
button.forEach((btn) => {
  btn.addEventListener("click", displayNum);
});
//assing listener to operators + * - / =
operators.forEach((op) => {
  op.addEventListener("click", assingOp);
});
//display numbers on screen
function displayNum(btn) {
  let value = btn.target.value;
  display.value += value;
}
//save display to firstnumber and add  operator
function assingOp(op) {
  if (operator == "") {
    operator = op.target.value;
    firstNum = display.value;
    display.value = "";
  } if (operator != "") {
    seconNum = display.value;
    if (operator == "X") {
      console.log("wrong")
      display.value = operate(multiply, firstNum, seconNum)
    }
  }
  
}

