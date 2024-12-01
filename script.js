let displayValue = '';

function appendSymbol(symbol) {
    displayValue += symbol;
    updateDisplay();
}

function clearDisplay() {
    displayValue = '';
    updateDisplay();
}

function calculate() {
    try {
        displayValue = eval(displayValue);
        updateDisplay();
    } catch (error) {
        displayValue = 'Error';
        updateDisplay();
    }
}

function updateDisplay() {
    document.getElementById('display').value = displayValue;
}

function backspace() {
    displayValue = displayValue.slice(0, -1); // Remove the last character from the displayValue
    updateDisplay();
}
