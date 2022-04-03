function add (number1, number2) {
    return (number1 + number2);
}

function subtract (number1, number2) {
    return (number1 - number2);
}

function multiply (number1, number2) {
    return (number1 * number2);
}

function divide (number1, number2) {
    return (number1 / number2);
}

function operate(num1, num2, operator) {
    return operator(num1, num2);
}

console.log(operate(2, 4, multiply))