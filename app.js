//variables
const display = document.querySelector(".display");
const button = document.querySelectorAll(".numBtn");
const operators = document.querySelectorAll(".opBtn");
const equal = document.getElementById("equal");
const clearAll = document.querySelector(".btn-clear");
const del = document.querySelector(".btn-del");
const dec = document.querySelector(".btn-dec");

let num1 = "";
let num2 = "";
let operatorActive = false;
let operator = "";
let total = 0;
let calculationDone = false;
let decimal = false;

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

del.addEventListener("click", deleteN);

dec.addEventListener("click", addDecimal);

//calculate operation when hitting =
function equalCal() {
  if (!num1 && !num2 && !decimal) {
    display.value = "";
  }
  if (!num1 && !decimal) {
    num1 = display.value;
    display.value = num1;
  }
  if (num2 && !decimal) {
    num2 = parseFloat(display.value);
    display.value = parseFloat(calculate(num1, operator, num2));
  }
  if (num1 && num2 && decimal) {
    display.value = parseFloat(calculate(num1, operator, num2)).toFixed(2);
    console.log(decimal);
  }
  operator = false;
}
//clear all function
function clear() {
  num1 = "";
  num2 = "";
  operatorActive = false;
  operator = "";
  calculationDone = false;
  display.value = "";
  decimal = false;
  total = "";
}
//delete the last number
function deleteN(str) {
  if (!num2) {
    str = num1.toString();
    str = str.substring(0, str.length - 1);
    num1 = parseFloat(str);
    display.value = num1;
  }
  if (num2) {
    str = num2.toString();
    str = str.substring(0, str.length - 1);
    num2 = parseFloat(str);
    display.value = num2;
  }
  if (str.length < 1) {
    display.value = "";
    num1 = 0;
    console.log("wha yo erasi");
  }
}
//display numbers
function displayNum(num) {
  num = num.target.value;
  //if no operator selected, display will be num1
  if (!operatorActive) {
    display.value += num;
    num1 = parseFloat(display.value);
  }
  //if operator is selected but calculations are not done, display will be num2
  if (operatorActive && !calculationDone) {
    display.value += num;
    num2 = parseFloat(display.value);
  }
  //if oper and calcul are done, display will be num1, and we clear display
  //then num2 will be display
  if (calculationDone) {
    num1 = parseFloat(display.value);
    num2 = "";
    calculationDone = false;
    if (num2 == "") {
      display.value = "";
    }
    display.value += num;
    num2 = parseFloat(display.value);
  }
}
//check for decimal input and add a "." if there wasnt
function addDecimal(val) {
  if (display.value.indexOf(val.target.value) == -1) {
    display.value += val.target.value;
    decimal = true;
  }
}
//listen to operators
function displayOperator(oper) {
  if (!num1) {
    alert("Need a first number");
  } else {
    if (!operatorActive) {
      operator = oper.target.value;
      operatorActive = true;
      display.value = "";
    }
    //if we have both num and operator, calculate
    if (num1 && num2 && !calculationDone) {
      if (decimal) {
        display.value = parseFloat(calculate(num1, operator, num2)).toFixed(2);
        decimal = true;
      } else {
        parseFloat(calculate(num1, operator, num2));
      }
    }
    //if calc is done, change the operator when button is cliced
    if (calculationDone) {
      operator = oper.target.value;
    }
  }
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
    case "*":
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
      break;
  }
  return total;
}
window.addEventListener("keypress", keyPress);
//listen for keyboard number press
function keyPress(key) {
  key = key.keyCode;
  if (key >= 48 && key <= 57) {
    key = String.fromCharCode(key);
    if (!operatorActive) {
      display.value += key;
      num1 = parseFloat(display.value);
    }
    if (operatorActive && !calculationDone) {
      display.value += key;
      num2 = parseFloat(display.value);
    }
    if (calculationDone) {
      num1 = parseFloat(display.value);
      num2 = "";
      calculationDone = false;
      if (num2 == "") {
        display.value = "";
      }
      display.value += key;
      num2 = parseFloat(display.value);
    }
  }
  if (key == "43" || key == "45" || key == "42" || key == "47") {
    key = String.fromCharCode(key);
    keyPressOperator(key);
  }
  if (key == "13") {
    equalCal();
  }
  if (key == "46") {
    key = String.fromCharCode(key);
    if (display.value.indexOf(key) == -1) {
      display.value += key;
      decimal = true;
    }
  }
}
//listen for operator on keyboard
function keyPressOperator(key) {
  if (!num1) {
    alert("Need a first number");
  } else {
    if (!operatorActive) {
      operator = key;
      operatorActive = true;
      display.value = "";
    }
    if (num1 && num2 && !calculationDone) {
      if (decimal) {
        display.value = parseFloat(calculate(num1, operator, num2)).toFixed(2);
        decimal = true;
      } else {
        parseFloat(calculate(num1, operator, num2));
      }
    }
    if (calculationDone) {
      operator = key;
    }
  }
}
