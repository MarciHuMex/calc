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
    let result = '';
    let decimalAddedFist = false;
    let decimalAddedSecond = false;

    
    
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
    displayValue += number;
    document.getElementById('display').innerText = displayValue;

// Adjust font size dynamically based on the length of the displayed number
const display = document.getElementById('display');
const maxLength = 22; // Maximum number of digits to display
const fontSize = 24; // Initial font size
const scaleFactor = 0.95; // Font size scaling factor

if (displayValue.length > maxLength) {
    // Calculate the new font size based on the length of the displayed number
    const newFontSize = Math.floor(fontSize * scaleFactor ** (displayValue.length - maxLength));
    display.style.fontSize = newFontSize + 'px';
} else {
    // Reset font size to the initial value if the number fits within the display
    display.style.fontSize = fontSize + 'px';
}
}

    
    function performCalulation() {
        if(firstNumber !== '' && operator !== '' && secondNumber !== '') {
            result = operate(operator, parseFloat(firstNumber), parseFloat(secondNumber));
            document.getElementById('display').innerText = result;
            firstNumber = result;
            secondNumber = '';
            displayValue = result;
            //decimalAddedFist = displayValue.includes('.');
            decimalAddedSecond = false;
            operator = '';
        }
    }
    
    // Attach event listeners to number buttonss
    document.querySelectorAll('.number').forEach(button => {
        button.addEventListener('click', () => {
            // Get the clicked number from the button's text content
            const number = button.textContent;
            // Update the display with the clicked number
            updateDisplay(number);
            if (operator === '') {
                firstNumber += number;
            } else {
                secondNumber += number;
            }
        });
    });
    
    document.querySelectorAll('.operator').forEach(button => {
        button.addEventListener('click', () => {
            if (operator !== '') {
                performCalulation(); // Perform calculation before updating operator
                operator = button.textContent;
                updateDisplay(operator);
               // if (result !== '') {
               //     document.getElementById('display').innerText = result + operator; // Update display with result + operator
               // }
            } else {
            operator = button.textContent;
            updateDisplay(operator);
            decimalAddedSecond = false;
    }});
    });
    
    
    
    
    
    document.getElementById('equals').addEventListener('click', () => {
        performCalulation();
    });
    
    document.getElementById('clear').addEventListener('click', () => {
        document.getElementById('display').innerText = '';
        firstNumber = '';
        operator = '';
        secondNumber = '';
        displayValue = '';
        decimalAddedFist = false;
        decimalAddedSecond = false;
    });

    document.getElementById('back').addEventListener('click', () => {
        if (displayValue.endsWith('.')) {
            if(operator === '') {
            decimalAddedFist = false;
            } else {
                decimalAddedSecond = false;
            }
        }
        displayValue = displayValue.slice(0, -1);
        document.getElementById('display').innerText =displayValue;

        if (operator ==='') {
            firstNumber = displayValue;
        } else if (secondNumber === '' && operator !== '') {
                operator = '';
            } else {
            secondNumber = displayValue;
        }
    });
    
    document.getElementById('point').addEventListener('click', () => {
        if(operator === '' && !decimalAddedFist) {
            updateDisplay('.');
            firstNumber += '.';
            decimalAddedFist = true;
        } else if (operator !== '' && !decimalAddedSecond) {
            updateDisplay('.');
            secondNumber += '.';
            decimalAddedSecond = true;
        }

    });

});