function calculate(operator) {
    const n1 = parseFloat(document.getElementById("n1").value);
    const n2 = parseFloat(document.getElementById("n2").value);
    let result;

    switch (operator) {
        case 'add':
            result = n1 + n2;
            break;
        case 'subtract':
            result = n1 - n2;
            break;
        case 'multiply':
            result = n1 * n2;
            break;
        case 'divide':
            if (n2 !== 0) {
                result = n1 / n2;
            } else {
                result = "Division by zero";
            }
            break;
        default:
            result = "Invalid operator";
    }

    document.getElementById("result").value = result;
}