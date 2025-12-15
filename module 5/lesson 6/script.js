function clearScreen() {
    document.getElementById("result").value = "";
}

function setScreenValue(value) {
    document.getElementById("result").value += value;
}

function calculateResult() {
    const resultElement = document.getElementById("result");
    const expression = resultElement.value;

    if (expression === "") {
        resultElement.value = "please enter an expression"; return;
    }

    try {
        resultElement.value = eval(expression);
    } catch (e) {
        resultElement.value = "Invalid expression"
    }
}