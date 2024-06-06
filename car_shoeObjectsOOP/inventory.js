//creating an object consrtuctor function called shoes using class notation
class Shoes {
    constructor (name, code, quantity, value){ //properties of the object
        this.name = name;
        this.code = code;
        this.quantity = quantity;
        this.value = value;

    }
}

//empty array for where instances will be stored
let footwear = [];

//object instances created
let shoe1 = new Shoes("nike", 101, 2, 200);
footwear.push(shoe1);

let shoe2 = new Shoes("puma", 102, 3, 800);
footwear.push(shoe2);

let shoe3 = new Shoes("addidas", 103, 4, 400);
footwear.push(shoe3);

let shoe4 = new Shoes("reebok", 104, 5, 500);
footwear.push(shoe4);

let shoe5 = new Shoes("newBalance", 105, 6, 600);
footwear.push(shoe5);


//output table of array footwear
console.table(footwear);

//function to search for a shoe

function searchShoes(name) {
  let found = false;

  for (let Shoes in footwear) {
    if (Shoes.name == name) {
      return Shoes;
    }
  }

  if (!found) {
    throw new Error(`Could not find shoe ${name}`);
  }
}
//exception handling example
try {
  searchShoes("lacoste");
} catch (error) {
  if (error instanceof Error) {
    console.log("Error: ", error.message);
  }
}

//define a function to find the shoe with lowest value

function findLowestValue (array){
    //sorting the array of footwear based on value in ascending order
    array.sort((firstShoe, lastShoe) => firstShoe.value > lastShoe.value ? 1 : -1);

// Use template and string literals to display the details
console.log(`The lowest value is the ${array[0].name}, which is valued at ${array[0].value}`);
}

//define a function to find the shoe with highest value

function findHighesttValue (array){
    //sorting the array of footwear based on value in descending order
    array.sort((lastShoe, firstShoe) => lastShoe.value > firstShoe.value ? -1 : 1);


// Use template and string literals to display the details
console.log(`The highest value is the ${array[0].name}, which is valued at ${array[0].value}`);
}

// Call the findLowestValue function
findLowestValue(footwear);
findHighesttValue(footwear);


// Define an edit function
function editShoeProperties(footwear, newName, newCode, newQuantity, newValue) {
  // Loop through each shoe object in the array
  footwear.forEach((shoe, index) => {
    // Update properties of each shoe
    shoe.name = newName[index];
    shoe.code = newCode[index];
    shoe.quantity = newQuantity[index];
    shoe.value = newValue[index];
  });
}

// data for different values
let newName = ["SharonK", "NicoleG", "JulieR", "AshleneM", "SamO"];
let newCode = [601, 602, 603, 604, 605];
let newQuantity = [10, 20, 30, 40, 50];
let newValue = [900, 800, 700, 600, 500];

// Call the function to edit properties for all shoe instances
editShoeProperties(footwear, newName, newCode, newQuantity, newValue);

// Logging to verify changes
console.log("\nShoe instances after editing:");

console.table(footwear);

// Function to order all the objects in ascending order based on the "Value" property
function orderByValueAsc(array) {
    return array.slice().sort((a, b) => a.value - b.value);
}

// Call the function to order the shoe objects by value in ascending order
let orderedFootwear = orderByValueAsc(footwear);

// Logging the ordered objects
console.log("Objects ordered by value in ascending order:");
console.table(orderedFootwear);
