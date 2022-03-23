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
