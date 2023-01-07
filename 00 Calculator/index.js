"use strict";
exports.__esModule = true;
var inquirer_1 = require("inquirer");
var answers = await inquirer_1["default"].prompt([
    {
        type: "number",
        name: "numberOne",
        message: "Kindly enter your first no: "
    },
    {
        type: "number",
        name: "numberTwo",
        message: "Kindly enter your second no: "
    },
    {
        type: "list",
        name: "operator",
        choices: ["*", "+", "-", "/"],
        message: "Select Operator: "
    },
]);
var numberOne = answers.numberOne, numberTwo = answers.numberTwo, operator = answers.operator;
if (numberOne && numberTwo && operator) {
    var result = 0;
    if (operator === "+") {
        result = numberOne + numberTwo;
    }
    else if (operator === "-") {
        result = numberOne - numberTwo;
    }
    if (operator === "/") {
        result = numberOne / numberTwo;
    }
    if (operator === "*") {
        result = numberOne * numberTwo;
    }
    console.log("Your result is :", result);
}
else {
    console.log("Kindly enter valid input");
}
