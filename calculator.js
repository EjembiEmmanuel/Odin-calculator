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
    if(num2 == 0) {
        result = "Math Error";
    } else {
        result = num1 / num2;
    }
    
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
const displayOutput = document.querySelector('.display-output');

let firstNumber = "";
let secondNumber = "";
let operator = "";
let input = ""
let result = 0;

displayOutput.textContent = result;

function populateDisplay(e) {
    if(e.target.textContent !== "CLEAR" && e.target.textContent !== "DELETE" && e.target.textContent !== "=") {
        if(!"+-/*".includes(e.target.textContent)) {
            input += e.target.textContent;
        } else {
            input += " " + e.target.textContent + " ";
            operator = e.target.textContent;
        }
    } else if("=".includes(e.target.textContent)) {
        result = operate(operator, firstNumber, secondNumber);
        displayOutput.textContent = result;

    } else if(e.target.textContent === "DELETE") {
        input = input.slice(0, -1);
        displayInput.textContent = input;

    } else if(e.target.textContent === "CLEAR") {
        firstNumber = "";
        secondNumber = "";
        input = "";
        result = 0;
        displayInput.textContent = "";
        displayOutput.textContent = result;
    } 

    displayInput.textContent = input;
    let numbers = input.split(" ");

    if(numbers[0] % 1 == 0 || numbers[2] % 1 == 0) {
        firstNumber = parseInt(numbers[0]);
        secondNumber = parseInt(numbers[2]);
    } else {
        firstNumber = parseFloat(numbers[0]);
        secondNumber = parseFloat(numbers[2]);
    }
}

buttons.forEach(button => button.addEventListener('click', populateDisplay));


