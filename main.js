const calcDisplay = document.querySelector("#display")
const numBtns = document.querySelectorAll("#num-btn")
const opBtns = document.querySelectorAll("#op-btn")
const eqlBtn = document.querySelector("#eql-btn")
let firstNum = ''
let secondNum = ''
let operator = null

function add(a, b) {
  return a + b
}

function subtract(a, b) {
  return a - b
}

function multiply(a, b) {
  return a * b
}

function divide(a, b) {
  return a / b
}

function operate(a, b, operator) {
  a = parseInt(a)
  b = parseInt(b)
  switch (operator) {
    case '+':
      return add(a, b)
    case '-':
      return subtract(a, b)
    case '×':
      return multiply(a, b)
    case '÷':
      return divide(a, b)
  }
}

numBtns.forEach(num => num.addEventListener("click", function(event) {
  if (firstNum.length == 0) {
    firstNum += event.target.textContent
    calcDisplay.textContent = firstNum
  } else if (firstNum.length != 0 && operator != null) {
    secondNum += event.target.textContent
    calcDisplay.textContent = secondNum
  }
  
}))

opBtns.forEach(op => op.addEventListener("click", function(event) {
  operator = event.target.textContent
  calcDisplay.textContent = '0'
}))

eqlBtn.addEventListener("click", function(event) {
  calcDisplay.textContent = operate(firstNum, secondNum, operator)
})