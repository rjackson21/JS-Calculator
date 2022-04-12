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

    if (displayedNum === '0' && (!(key.classList.contains('clear')))) {
        display.textContent = keyContent
        displayedNum = display.textContent
        const num1 = displayedNum
       
    }
    else if (key.classList.contains('operator')){
        clickedOperator = true
        key.classList.add("change")
        num1 = displayedNum
        displayedNum = display.textContent
        operation = keyContent
        
    }
    else if (key.classList.contains('clear')){
        display.textContent = '0'
        displayedNum = display.textContent
        num1 = undefined
        num2 = undefined 
        const greenButton = document.querySelector('.change')
        greenButton.classList.remove("change")
    }
    else if (key.classList.contains('equal')) {
        if (operation === '-') {
            display.textContent = operate(num1, num2, subtract)
            displayedNum = display.textContent
            num1 = displayedNum
            
        }
        else if (operation === 'X') {
            display.textContent = operate(num1, num2, multiply)
            displayedNum = display.textContent
            num1 = displayedNum
            
        }
        else if (operation === '%') {
            display.textContent = operate(num1, num2, divide)
            displayedNum = display.textContent
            num1 = displayedNum
            
        }
        else if (operation === '+') {
            display.textContent = operate(num1, num2, add)
            displayedNum = display.textContent
            num1 = displayedNum
            
        }
        const greenButton = document.querySelector('.change')
        greenButton.classList.remove("change") //remove style on operator button when equals is clicked
    }
    else if (!(key.classList.contains('operator'))){
         if (clickedOperator != true) { // if operator has not been clicked 
            display.textContent = displayedNum + keyContent
            displayedNum = display.textContent
            num1 = displayedNum
            
        }
        else if (clickedOperator = true) { // if operator has been clicked 
            display.textContent = keyContent
            displayedNum = display.textContent
            num2 = displayedNum
            
        }
    }
        


})

    


