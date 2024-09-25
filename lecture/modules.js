// Introduction to module.exports in Node.js

// Basic Example

const filterEvenNumbers = (arr) => arr.filter((num) => num % 2 === 0);

console.log(filterEvenNumbers([1, 2, 3, 4, 5])); // Outputs [2, 4]

const sumEvenNumbers = (arr) =>
    arr.reduce((acc, num) => (num % 2 === 0 ? acc + num : acc), 0);

console.log(sumEvenNumbers([1, 2, 3, 4, 5])); // Outputs 6

// Using module.exports for Reusability

const isEven = (num) => num % 2 === 0;

module.exports = { isEven };

// Importing and Using Shared Logic

// const { isEven } = require("./utilities");
// const filterEvenNumbers = (arr) => arr.filter(isEven);
// console.log(filterEvenNumbers([1, 2, 3, 4, 5])); // Outputs [2, 4]

// const { isEven } = require('./utilities');

// const sumEvenNumbers = (arr) => arr.reduce((acc, num) => (isEven(num) ? acc + num : acc), 0);

// console.log(sumEvenNumbers([1, 2, 3, 4, 5])); // Outputs 6

// ********************** --------- ************************** //

// Expanding the Shared Utilities

// const isEven = (num) => num % 2 === 0;
const double = (num) => num * 2;
const square = (num) => num * num;

module.exports = { isEven, double, square };

// Example Usage

const { double } = require("./utilities");

const doubleNumbers = (arr) => arr.map(double);

console.log(doubleNumbers([1, 2, 3, 4])); // Outputs [2, 4, 6, 8]

const { square } = require("./utilities");

const squareNumbers = (arr) => arr.map(square);

console.log(squareNumbers([1, 2, 3, 4])); // Outputs [1, 4, 9, 16]
