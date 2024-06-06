//Pokemon Task
let pokemon = []; //creating an empty array. This might not be needed!

fetch("https://pokeapi.co/api/v2/pokemon/squirtle/") //Fetching the information
  .then((response) => response.json()) //fetch returns this object called response. Parse the response as JSON object

  .then((result) => {
    //callback used to parse the data
    pokemon = result; //storing the data in the array( but don't think i need this!)

    console.log(`Name: ${result.name}`); //print the name
    console.log(`Weight: ${result.weight}`); //print the weight
    console.log("Abilities:"); // looping through the abilities and listing them out.
    result.abilities.forEach((ability) => {
      console.log(`- ${ability.ability.name}`);
    }),
      (error) => {
        //catching an error
        console.log(error);
      };
  });

//Cats GIF Task

async function cuteCat() {
  try {
    let cat = await fetch(
      "http://thecatapi.com/api/images/get?format=src&type=gif");
      
    if (!cat.ok) {
      throw new Error("This is wrong");
    }
    let meow = cat.url; // The URL of the image is directly available in the response

    console.log("Cat image GIF is here:", meow);
  } catch (error) {
    console.error("Error fetching cat GIF:", error);
  }
}
cuteCat();

/*
//Pokeman Task using asyc/await function

//Defining an async function

async function myfunction (){
    try{ //try block used as recommended by lecturer when using async await syntax.
    
    //fetch data from API
    let response = await fetch("https://pokeapi.co/api/v2/pokemon/squirtle/");
    let info = await response.json(); //parsing to json to get transfer of information
//accessing each of the details and printing to console
    console.log("Name is", info.name);
    console.log("Weight is: ", info.weight);
    console.log ("Abilities are: ");
    //abilities will be an array so using ForEach to iterate over the array
    //and access each ability and its name and print to console

        info.abilities.forEach((ability) => {
            console.log(" ", ability.ability.name);
               
    });
   
    } catch (err) {
        console.log(err);
    }
}
myfunction(); 
*/

