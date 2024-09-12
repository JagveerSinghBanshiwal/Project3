function clearDisplay() {
    document.getElementById("result").value = "";
}

function deleteLast() {
    let currentValue = document.getElementById("result").value;
    document.getElementById("result").value = currentValue.slice(0, -1);
}

function appendCharacter(char) {
    document.getElementById("result").value += char;
}

function calculateResult() {
    try {
        let result = eval(document.getElementById("result").value);
        // Check if the result is a decimal and format it to 3 decimal places
        if (result % 1 !== 0) {
            result = result.toFixed(3);
        }
        document.getElementById("result").value = result;
    } catch (error) {
        document.getElementById("result").value = "";
    }
}
