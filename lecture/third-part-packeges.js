const _ = require("lodash");

// _.chunk(array, size);

const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];

// Using lodash's chunk function to split the array
const chunkedArray = _.chunk(numbers, 3);

console.log(chunkedArray);
/* Outputs [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9]
] */
