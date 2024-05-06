document.addEventListener('DOMContentLoaded', function() {


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
let displayValue = '';

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



// Function to update the display with the clicked number
function updateDisplay(number) {
    // Append the clicked number to the display value
    displayValue += number;
    // Update the display text
    document.getElementById('display').innerText = displayValue;
}

// Attach event listeners to number buttons
document.querySelectorAll('.number').forEach(button => {
    button.addEventListener('click', () => {
        // Get the clicked number from the button's text content
        const number = button.textContent;
        // Update the display with the clicked number
        updateDisplay(number);
    });
});

document.querySelectorAll('.operator').forEach(button => {
        button.addEventListener('click', () => {
            operator = button.textContent;
            firstNumber = parseFloat(displayValue);
            updateDisplay(operator);
        });
});

document.getElementById('equals').addEventListener('click', () => {
    secondNumber = parseFloat(displayValue.substring(displayValue.lastIndexOf(operator) + 1));
    const result = operate(operator, firstNumber, secondNumber);
    document.getElementById('display').innerText  = displayValue + ' = ' + result;
    firstNumber = '';
    operator = '';
    secondNumber = '';
    displayValue = '';
});

document.getElementById('clear').addEventListener('click', () => {
    document.getElementById('display').innerText = '';
    firstNumber = '';
    operator = '';
    secondNumber = '';
    displayValue = '';
});

});