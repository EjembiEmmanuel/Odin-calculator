function add (num1, num2) {
    let result;
    result = num1 + num2;
    return result;
}

function substract (num1, num2) {
    let result;
    result = num1 - num2;
    return result;
}

function multiply (num1, num2) {
    let result;
    result = num1 * num2;
    return result;
}

function divide (num1, num2) {
    let result;
    result = num1 / num2;
    return result;
}

function operate(operator, num1, num2) {
    let result;
    switch(operator) {
        case "+":
            result = add(num1, num2);
            break;
        case "-":
            result = substract(num1, num2);
            break;
        case "*":
            result = multiply(num1, num2);
            break;
        case "/":
            result = divide(num1, num2);
            break;
        default:
            result = "That's not a valid operation"
    }
    return result;
}

const buttons = document.querySelectorAll('button');
const displayInput = document.querySelector('.display-input');


function populateDisplay(e) {
    if(e.target.textContent !== "CLEAR" && e.target.textContent !== "DELETE" && e.target.textContent !== "=") {
        console.log(e.target.textContent);
        displayInput.textContent = e.target.textContent;
    } else if(e.target.textContent === "CLEAR") {
        displayInput.textContent = 0;
    }
    

}

buttons.forEach(button => button.addEventListener('click', populateDisplay));


