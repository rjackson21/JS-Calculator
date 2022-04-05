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

const display = document.querySelector('.display')
const displayedNum = display.textContent
const keys = document.querySelector('.keys')


keys.addEventListener('click', function(e) {
    const key = e.target
    const keyContent = key.textContent
    if (displayedNum === '0')
    display.textContent = keyContent
})

