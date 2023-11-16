let displayValue = '';
let currentOperator = '';
let firstOperand = null;

function display(value) {
    displayValue += value;
    document.getElementById("display").value = displayValue;
}

function setOperator(operator) {
    if (currentOperator === '') {
        firstOperand = parseFloat(displayValue);
        currentOperator = operator;
        displayValue = '';
    }
}

function calculate() {
    if (currentOperator !== '') {
        const secondOperand = parseFloat(displayValue);
        let result;

        switch (currentOperator) {
            case '+':
                result = firstOperand + secondOperand;
                break;
            case '-':
                result = firstOperand - secondOperand;
                break;
            case '*':
                result = firstOperand * secondOperand;
                break;
            case '/':
                if (secondOperand !== 0) {
                    result = firstOperand / secondOperand;
                } else {
                    result = "Division by zero";
                }
                break;
            default:
                result = "Invalid operator";
        }

        displayValue = result.toString();
        currentOperator = '';
        document.getElementById("display").value = displayValue;
    }
}

function clearDisplay() {
    displayValue = '';
    currentOperator = '';
    firstOperand = null;
    document.getElementById("display").value = '';
}
