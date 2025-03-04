const numInput = document.getElementById("num");
const elementTxt = document.getElementById("element");
const sumTxt = document.getElementById("sum");
const highTxt = document.getElementById("high");
const lowTxt = document.getElementById("low");
const insertBtn = document.getElementById("insertBtn");
const deleteBtn = document.getElementById("deleteBtn");

let array = [];

insertBtn.onclick = function() {
    let num = parseInt(numInput.value);
    if (num == num) { 
        array.push(num);
        updateDisplay();
    } else
        alert("tarunga uy")
    numInput.value = ""; 
};

deleteBtn.onclick = function() {
    array = [];
    updateDisplay();
};

function updateDisplay() {
    elementTxt.innerHTML = "";
    sumTxt.innerHTML = "";
    highTxt.innerHTML = "";
    lowTxt.innerHTML = "";

    if (array.length > 0) {
        elementTxt.innerHTML = "";
        let sum = 0;
        let highest = array[0];
        let lowest = array[0];

        for (let i = 0; i < array.length; i++) {
            sum += array[i];
            if (array[i] > highest) highest = array[i];
            if (array[i] < lowest) lowest = array[i];
            elementTxt.innerHTML += array[i] + "<br>";
        }

        sumTxt.innerHTML = sum;
        highTxt.innerHTML = highest;
        lowTxt.innerHTML = lowest;
    }
}
