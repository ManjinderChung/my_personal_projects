// Get input from the user
let number = prompt("Enter a number of at least 3 digits:");

// Convert number to string to access individual digit index
let numberStr = number.toString();

// Extract digits
let firstDigit = numberStr[0];
let secondDigit = numberStr[1];
let lastDigit = numberStr[numberStr.length - 1];

// Swap second and last digits
let newNumberStr = firstDigit + lastDigit; // puts the last digit in place of the second by adding the first and last together to start with 
  for (let i = 2; i < numberStr.length - 1; i++) { //then loops through starting at postion 2 upto to penultimate digit, adding each digit
    newNumberStr += numberStr[i];
  }
  newNumberStr += secondDigit; // finally add the second digit to the end

// Convert back to number and output
let newNumber = parseInt(newNumberStr);
  console.log("The original number was:", number);
  console.log("The new number now is:", newNumber); 