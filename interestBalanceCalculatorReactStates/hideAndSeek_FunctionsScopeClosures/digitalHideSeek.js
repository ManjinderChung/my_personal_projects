function hide(a) {
  let hideLocation = a; // Store the value passed to hide function
  function seek() {
    return hideLocation; // Return the value stored in hideLocation variable. Creating a closure here.
  }
  return seek; // Return the inner function seek
}

const startGame = hide("in the fridge"); // Pass "in the fridge" as a string

console.log(startGame()); // Call startGame variable to retrieve the hidden value and log it

//console.log(hideLocation); hideLocation is a variable with function scope so not accessible outside of the function. 