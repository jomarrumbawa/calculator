const numBtns = document.querySelectorAll(".num-btn");
const opBtns = document.querySelectorAll(".op-btn");
const eqlBtn = document.querySelector(".eql-btn");
const clrBtn = document.querySelector(".clr-btn");
const display = document.querySelector(".calc-display");

let firstOperand = null;
let secondOperand = null;
let currentOperation = null;

opBtns.forEach((button) => {
  button.addEventListener("click", function (e) {
    currentOperation = e.target.textContent;

    if (firstOperand === null) {
      firstOperand = parseInt(display.textContent);
      display.textContent = "0";
    }
  });
});

numBtns.forEach((button) => {
  button.addEventListener("click", function (e) {
    if (display.textContent !== "0") {
      display.textContent += e.target.textContent;
    } else {
      display.textContent = e.target.textContent;
    }
  });
});

eqlBtn.addEventListener("click", function () {
  if (firstOperand !== null && currentOperation !== null) {
    secondOperand = parseInt(display.textContent);
  }
  operate(firstOperand, secondOperand, currentOperation);
});

clrBtn.addEventListener("click", function () {
  firstOperand = null;
  secondOperand = null;
  currentOperation = null;
  display.textContent = "0";
});

function operate(first, second, sign) {
  console.log(first, second, sign);

  switch (sign) {
    case "+":
      result = first + second;
      break;
    case "-":
      result = first - second;
      break;
    case "×":
      result = first * second;
      break;
    case "÷":
      result = first / second;
      break;
  }
  display.textContent = result;
}
