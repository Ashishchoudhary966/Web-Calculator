let displayValue = '';   // Store the current value displayed on the calculator

// Add symbols (like number or operator) on the display
function appendSymbol(symbol) {
    displayValue += symbol;   // Append the symbol to the current display value
    updateDisplay();   // Update the calculator display
}

// Clear the display
function clearDisplay() {
    displayValue = '';   // Reset the display value
    updateDisplay();     // Update the display
}

// Calculate the result of the expression
function calculate() {
    try {
        displayValue = eval(displayValue);    // Evaluate the mathematical expression
        updateDisplay();           // Update the display with the result
    } catch (error) {
        displayValue = 'Error';      // Show Error if the expression is invalid
        updateDisplay();            // Update the display 
    }
}

/ Update the calculator's display
function updateDisplay() {
    document.getElementById('display').value = displayValue;   // Set the input value to the display value
}

// Remove the last digit from the display
function backspace() {
    displayValue = displayValue.slice(0, -1);    // Remove the last character from the displayValue
    updateDisplay();    // Update the display
}
