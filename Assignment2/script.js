// 1. Even numbers
function showEven() {
    let result = "";
    for (let i = 1; i <= 100; i++) {
        if (i % 2 === 0) {
            result += i + " ";
        }
    }
    document.getElementById("evenResult").innerText = result;
}


// 2. Calculator
function calculate() {
    let num1 = Number(document.getElementById("num1").value);
    let num2 = Number(document.getElementById("num2").value);
    let operator = document.getElementById("operator").value;

    let result;

    switch (operator) {
        case "+": result = num1 + num2; break;
        case "-": result = num1 - num2; break;
        case "*": result = num1 * num2; break;
        case "/":
            result = num2 === 0 ? "Cannot divide by zero" : num1 / num2;
            break;
        default: result = "Invalid operator";
    }

    document.getElementById("calcResult").innerText = result;
}


// 3. Find Tax
function findTax() {
    let salary = Number(document.getElementById("salary").value);
    let tax;

    switch (true) {
        case (salary > 0 && salary <= 500000):
            tax = 0;
            break;

        case (salary > 500000 && salary <= 1000000):
            tax = salary * 0.10;
            break;

        case (salary > 1000000 && salary <= 1500000):
            tax = salary * 0.20;
            break;

        case (salary > 1500000):
            tax = salary * 0.30;
            break;

        default:
            tax = "Invalid salary";
    }

    document.getElementById("taxResult").innerText = tax;
}


// 4. Sum of product of digits
function sumProduct() {
    let n1 = document.getElementById("n1").value;
    let n2 = document.getElementById("n2").value;

    let str1 = n1.split("").reverse();
    let str2 = n2.split("").reverse();

    let maxLength = Math.max(str1.length, str2.length);
    let sum = 0;

    for (let i = 0; i < maxLength; i++) {
        let d1 = i < str1.length ? Number(str1[i]) : 0;
        let d2 = i < str2.length ? Number(str2[i]) : 0;

        sum += d1 * d2;
    }

    document.getElementById("sumResult").innerText = sum;
}