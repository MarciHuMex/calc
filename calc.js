function add(a, b) {
    return a + b;
}

function substract(a, b) {
    return a-b;
}

function multiply(a, b) {
    return a*b;
}

function divide(a, b) {
    if(b === 0) {
        return "Error: Division by zero";
    } else {
        return a / b;
    }
}

let firstNumber = '';
let operator = '';
let secondNumber = '';

function operate(operator, num1, num2) {
    switch (operator) {
        case '+': 
            return add(num1, num2);
        case '-':
            return substract(num1, num2);
        case '*':
            return multiply(num1, num2);
        case '/':
            return divide(num1, num2);
        default:
            return "Invalid operator";
    }
}

// Store the display Value
let displayValue = '';

// Function to update the display with the clicked number
