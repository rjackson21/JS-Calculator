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
var displayedNum = display.textContent
const keys = document.querySelector('.keys')


keys.addEventListener('click', function(e) {
    const key = e.target
    const keyContent = key.textContent

    if (key.classList.contains('equal')) {
        const question = displayedNum
       // operate(num1, num2, operator)
    }
    else {
        if (displayedNum === '0') {
            display.textContent = keyContent
            displayedNum = display.textContent
            const num1 = displayedNum
            console.log(num1)
        }
        else if (key.classList.contains('clear')){
            display.textContent = '0'
            displayedNum = display.textContent
        }
        else if (!(key.classList.contains('operator'))){
            display.textContent = displayedNum + keyContent
            displayedNum = display.textContent
            num1 = displayedNum
            console.log(num1)
        }
        else if (key.classList.contains('operator')){
            key.classList.add("change")
            num1 = displayedNum
            displayedNum = display.textContent
            const operation = keyContent
            console.log(num1)
            console.log(operation)
        }
    }
    
})

