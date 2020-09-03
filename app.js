//variables
const display = document.querySelector(".display");
const button = document.querySelectorAll(".numBtn");
const operators = document.querySelectorAll(".opBtn");

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

function displayNum(num) {
  num = num.target.value;
  if (!operatorActive && !calculationDone) {
    display.value += num;
    num1 = parseInt(display.value);
  }
  if (operatorActive) {
    display.value += num;
    num2 = parseInt(display.value);
  }
 
  console.log(num1, num2, operator);
}

function displayOperator(oper) {
  oper = oper.target.value;
  operatorActive = true;
  display.value = "";
  if (num1 && num2) {
    display.value = calculate(num1, oper, num2)
    operatorActive = true;
    calculationDone = true;
  }
  if (oper === "=") {
    display.value = total;
  }
  
}

function calculate(value1, oper, value2) {
  switch (oper) {
    case "+":
      total = value1 + value2;
      break;
    default:
      return false;
  }
  return total;
}
