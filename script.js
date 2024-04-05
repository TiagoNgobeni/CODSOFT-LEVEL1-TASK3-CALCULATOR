let currentNumber = "";
let previousNumber = "";
let operator = "";

function displayNumber(number) {
  currentNumber += number;
  document.getElementById("display").value = currentNumber;
}

function displayOperator(op) {
  if (currentNumber !== "") {
    previousNumber = currentNumber;
    currentNumber = "";
    operator = op;
  }
}

function clearDisplay() {
  currentNumber = "";
  previousNumber = "";
  operator = "";
  document.getElementById("display").value = "";
}

function calculate() {
  if (currentNumber !== "" && operator !== "") {
    let result = eval(previousNumber + operator + currentNumber);
    currentNumber = result.toString();
    previousNumber = "";
    operator = "";
    document.getElementById("display").value = currentNumber;
  }
}
