const num1Txt = document.getElementById("num1");
const num2Txt = document.getElementById("num2");

const sumtxt = document.getElementById("sum");
const difftxt = document.getElementById("dif");
const protxt = document.getElementById("pro");
const quotxt = document.getElementById("quo");

let sum = 0;
let diffence = 0;
let product = 0;
let quotient = 0;

function calculate() {
    if(!(num1Txt.value === "" || num2Txt.value === "")) {
        
        sum = parseInt(num1Txt.value) + parseInt(num2Txt.value);
        sumtxt.innerHTML = sum;

        diffence = parseInt(num1Txt.value) - parseInt(num2Txt.value);
        difftxt.innerHTML = diffence;

        product = parseInt(num1Txt.value) * parseInt(num2Txt.value);
        protxt.innerHTML = product;

        quotient = parseInt(num1Txt.value) / parseInt(num2Txt.value);
        quotxt.innerHTML = quotient;
    }
}

function clearEntries() {
    num1Txt.value = "";
    num2Txt.value = "";

    sumtxt.innerHTML = "";
    difftxt.innerHTML = "";
    protxt.innerHTML = "";
    quotxt.innerHTML = "";

    sum = 0;
    difference = 0;
    product = 0;
    quotient = 0;

}

