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
var clickedOperator = false
var operation

keys.addEventListener('click', function(e) {
    const key = e.target
    const keyContent = key.textContent

    if (displayedNum === '0') {
        display.textContent = keyContent
        displayedNum = display.textContent
        const num1 = displayedNum
        console.log(num1)
    }
    else if (key.classList.contains('operator')){
        clickedOperator = true
        key.classList.add("change")
        num1 = displayedNum
        displayedNum = display.textContent
        operation = keyContent
        console.log(operation)
    }
    else if (key.classList.contains('clear')){
        display.textContent = '0'
        displayedNum = display.textContent
    }
    else if (key.classList.contains('equal')) {
        console.log(operation)
        // if (operation = 'X') {
        //     operator = multiply
        //     display.textContent = (operate(num1, num2, operator))
        //     console.log("I think im multiplying")
        // }
        // else if (operation = "%") {
        //     operator = divide
        //     display.textContent = (operate(num1, num2, operator))
    }
    else if (!(key.classList.contains('operator'))){
         if (clickedOperator != true) { // if operator has not been clicked 
            display.textContent = displayedNum + keyContent
            displayedNum = display.textContent
            num1 = displayedNum
            console.log(num1)
        }
        else if (clickedOperator = true) { // if operator has been clicked 
            display.textContent = keyContent
            displayedNum = display.textContent
            num2 = displayedNum
            console.log(num2)
        }
    }
        


})

    


