// creating an array of different length words
let words = ["ash", "remote", "switch", "sofa", "candle", "love", "fire", "place", "television", "photo"]

//HOF here taking array and function called func as arguments
let myFilterFunction = (array) => (func) => {
  
    // new empty array to return filtered words
    const wordsAfterfilter = [];

    //for loop to go through each element in the words array above
 for (let i = 0; (i < array.length); i++) {
    //callback function func is applied to each element in array
    if (func(array[i])){
      wordsAfterfilter.push(array[i]);  
    }
    
  }

  return wordsAfterfilter; //returns new array after filter
};
// HOF used to return words greater or equal to 6 letters or more
const outputArray = myFilterFunction(words)((item) => item.length ==6);

//output to the console.
console.log("Here are the new words: " + outputArray);
