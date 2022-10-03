// Buttons 

const main = document.querySelector(".calculator");
const numberButtons = document.querySelectorAll(".controls__button-number");
const actionButtons = document.querySelectorAll(".controls__button-action");
const resultButton = document.querySelector(".controls__button-result");
const resetButton = document.querySelector(".controls__button-reset");
const removeButton = document.querySelector(".controls__button-remove");
const historyButton = document.querySelector(".controls__button-history");
const checkbox = document.getElementById("checkbox");

// Containers

const body = document.querySelector("body");
const firstNumberWindow = document.querySelector(".window__calculation-firstNumber");
const secondNumberWindow = document.querySelector(".window__calculation-secondNumber");
const calculationActionWindow = document.querySelector(".window__calculation-action");
const resultOperatorWindow = document.querySelector(".window__result-operator");
const resultValueWindow = document.querySelector(".window__result-value");

// Global variables

let firstNumber;
let secondNumber;
let action;
let result;

// Event listners

checkbox.addEventListener("click", function() {
    main.classList.toggle("darktheme");
});

numberButtons.forEach(function (element) {
    element.addEventListener("click", function (event) {
        
            if (!action && !result) {
                firstNumber = event.target.dataset.number;
                firstNumberWindow.innerText += firstNumber;
        } else if (firstNumber && !result) {
            secondNumber = event.target.dataset.number;
            secondNumberWindow.innerText += secondNumber;
            }
        })
    });

    actionButtons.forEach(function (element) {
        element.addEventListener("click", function (event) {

            if (firstNumber && !secondNumber) {
                action = event.target.dataset.action;
                calculationActionWindow.innerText = action;
            }
        })
    });

    resetButton.addEventListener("click", function() {

        firstNumber = null;
        secondNumber = null;
        action = null;
        result = null;

        firstNumberWindow.innerText = "";
        secondNumberWindow.innerText = ""; 
        calculationActionWindow.innerText = "";
        resultValueWindow.innerText = "";

        resultOperatorWindow.classList.add(".window__result-operator_visible");

    });

    removeButton.addEventListener("click", function() {

        if (!result) {
            if (secondNumber) {
                secondNumber = null;
                secondNumberWindow.innerText = "";
            } else if (action) {
                action = null;
                calculationActionWindow.innerText = "";
            } else if (firstNumber) {
                firstNumber = null;
                firstNumberWindow.innerText = "";
            }
        }
    });


    resultButton.addEventListener("click", function() {
        if (firstNumber && action && secondNumber) {
            if (action === "+") {
                result = Number(firstNumber) + Number(secondNumber);
            } else if (action === "-") {
                result = Number(firstNumber) - Number(secondNumber);
            } else if (action === "*") {
                result = Number(firstNumber) * Number(secondNumber);
            } else if (action === "/") {
                result = Number(firstNumber) / Number(secondNumber);
            }

        }
        resultOperatorWindow.classList.add(".window__result-operator_visible");
        resultValueWindow.innerText = result;
    }
    )








