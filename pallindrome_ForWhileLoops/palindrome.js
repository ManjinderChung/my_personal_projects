let string = prompt("Please enter a word of your choice"); //input from user

let reversedString = ""; // reversing the ordering of the input 
for  (let i = string.length - 1; i >= 0; i--) {

    reversedString += string[i]; // word is now spelt backwards

}
while (string == reversedString) { //if the input word is the same as the reversed word then it will print to console.

     console.log(string + " is a palindrome"); 
  
 break; // breaks this loop if true
}    
    
if (string !== reversedString) { // if words are not equal, prints word is not a palindrome
  console.log(string + " is not a palindrome");
}
