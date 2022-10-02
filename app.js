// Buttons 

const numberButtons = document.querySelectorAll(".controls__button-number");
const actionButtons = document.querySelectorAll(".controls__button-action");
const resultButton = document.querySelector(".controls__button-result");
const resetButton = document.querySelector(".controls__button-reset");
const removeButton = document.querySelector(".controls__button-remove");
const historyButton = document.querySelector(".controls__button-history");

// Containers

const body = document.querySelector("body");
const firstNumberWindow = document.querySelector(".window__calculation-firstNumber");
const secondNumberWindow = document.querySelector(".window__calculation-secondNumber");
const resultOperatorWindow = document.querySelector(".window__result-operator");
const resultValueWindow = document.querySelector(".window__result-value");

// Global variables

let firstNumber;
let secondNumber;
let action;
let result;

// Event listners

numberButtons.forEach(function (element) {
    element.addEventListener("click", function (event) {
        
            if (!action && !result) {
                firstNumber = event.target.dataset.number;
                fisrNumberWindow.innerText += firstNumber;
        } else if (numberA) {
            numberB = event.target.dataset.number;
            calculationWindow.innerText += numberB;
            }
        })
    });

    actionButtons.forEach(function (element) {
        element.addEventListener("click", function (event) {

            if (numberA) {
                action = event.target.dataset.action;
                calculationWindow.innerText += action;
            }
        })
    });

    resultButton.addEventListener("click", function (element) {

        if (numberA && action && numberB) {
            if (action === "+") {
                result = numberA + NumberB;
            }
        }
    }
    )






