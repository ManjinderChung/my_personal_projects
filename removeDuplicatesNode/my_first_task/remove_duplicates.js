// Import lodash
const _ = require('lodash');

// Create the array
const array = [1, 2, 10, 100, 10, 2, 5, 6, 10, 1000, 7, 2, 100, 1, 5, 7, 10];

// Remove duplicates using lodash's uniq function
const uniqueArray = _.uniq(array);

// Print the unique array
console.log(uniqueArray);
