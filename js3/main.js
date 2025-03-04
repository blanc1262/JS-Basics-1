const numInput = document.getElementById("num1");
const elementTxt = document.getElementById("element");
const sumTxt = document.getElementById("sum");
const highTxt = document.getElementById("high");
const lowTxt = document.getElementById("low");
const insertBtn = document.getElementById("insertBtn");
const deleteBtn = document.getElementById("deleteBtn");

let numbers = [];

insertBtn.onclick = () => {
    let num = parseInt(numInput.value);
    if (!isNaN(num)) {
        numbers.push(num);
        updateDisplay();
        numInput.value = "";
    }
};

deleteBtn.onclick = () => {
    numbers = [];
    updateDisplay();
};

function updateDisplay() {
    elementTxt.innerHTML = numbers.join("<br>") || "-";
    sumTxt.innerHTML = numbers.reduce((a, b) => a + b, 0);
    highTxt.innerHTML = numbers.length ? Math.max(...numbers) : "-";
    lowTxt.innerHTML = numbers.length ? Math.min(...numbers) : "-";
}
