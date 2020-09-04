//variables
const display = document.querySelector(".display");
const button = document.querySelectorAll(".numBtn");
const operators = document.querySelectorAll(".opBtn");
const equal = document.getElementById("equal");
const clearAll = document.querySelector(".btn-clear");
const del = document.querySelector(".btn-del");

let num1 = "";
let num2 = "";
let operatorActive = false;
let operator = "";
let total = 0;
let calculationDone = false;

//assing listener to all numButtons 0 - 9
button.forEach((btn) => {
  btn.addEventListener("click", displayNum);
});
//assing listener to operators + * - / =
operators.forEach((op) => {
  op.addEventListener("click", displayOperator);
});
equal.addEventListener("click", equalCal);

clearAll.addEventListener("click", clear);

del.addEventListener("click", deleteN)

//calculate operation when hitting =
function equalCal() {
  if (!num2) {
    display.value = num1;
  } else {
    display.value = calculate(num1, operator, num2);
  }
}
//clear all function
function clear() {
  num1 = "";
  num2 = "";
  operatorActive = false;
  operator = "";
  calculationDone = false;
  display.value = "";
}
//IN PRGORESS
function deleteN() {
  if (num1) {
    let strn = num1.toString()
    str
  }
}
//display numbers
function displayNum(num) {
  num = num.target.value;
  //if no operator selected, display will be num1
  if (!operatorActive) {
    display.value += num;
    num1 = parseInt(display.value);
  }
  //if operator is selected but calculations are not done, display will be num2
  if (operatorActive && !calculationDone) {
    display.value += num;
    num2 = parseInt(display.value);
  }
  //if oper and calcul are done, display will be num1, and we clear display
  //then num2 will be display
  if (calculationDone) {
    num1 = parseInt(display.value);
    num2 = "";
    calculationDone = false;
    if (num2 == "") {
      display.value = "";
    }
    display.value += num;
    num2 = parseInt(display.value);
    console.log("w");
  }
  console.log(num1, operator, num2);
}
//listen to operators
function displayOperator(oper) {
  //if no operator, set it to true, get the operator and reset display.
  if (!operatorActive) {
    operator = oper.target.value;
    operatorActive = true;
    display.value = "";
  }
  //if we have both num and operator, calculate
  if (num1 && num2 && !calculationDone) {
    calculate(num1, operator, num2);
  }
  //if calc is done, change the operator when button is cliced
  if (calculationDone) {
    operator = oper.target.value;
  }
  console.log(operator, operatorActive);
}
//do the magic math
function calculate(value1, oper, value2) {
  switch (oper) {
    case "+":
      total = value1 + value2;
      calculationDone = true;
      display.value = total;
      break;
    case "X":
      total = value1 * value2;
      calculationDone = true;
      display.value = total;

      break;
    case "-":
      total = value1 - value2;
      calculationDone = true;
      display.value = total;

      break;
    case "/":
      total = value1 / value2;
      calculationDone = true;
      display.value = total;

      break;
    default:
      console.log("here");
      return;
  }
  return total;
}
