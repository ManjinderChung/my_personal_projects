/* 
Here I am going to write my pseudocode for this task.

request input from user for:
   1 mother's maiden name 
   2 the street they grew up on
   3 favorite colour as a child
   4 current age
   5 number between 1 and 10

store these inputs as suitably named variables

Using this information, the following will be displayed:

The number of years in which they will meeting their best friend - 5
Their best friend's name will be 1 + 2
They will get married in 4+5 years - need to convert data types here
Remainder of 4/5 will be the number of children they will have
4/5 and rounded up is the number of years until they dye their hair

Print this out as a multi line string.

*/

// prompts to ask user and store them as variables

let mothersName = prompt("What is your mother's first name?");

let street = prompt("What is the name of the street you grew up on?");

let colour = prompt("What was your favourite colour as a child?");

let age = Number(prompt("How old are you?")); //converting string to number

let number = Number(prompt("Choose a number between 1 and 10")); // converting string to number

// details from above inputs are as follows

let yearsToMeetFriend = number;
let bestFriendsName = mothersName +  street;
let marriedYears = age + number;
let children = age % number;
let hair = Math.round(age / number);

console.log(`In ${yearsToMeetFriend} years you are going to meet your best friend named ${bestFriendsName}.
  You will get married in ${marriedYears} years and will have ${children} children.
  In ${hair} years you will dye your hair ${colour}.`
);
  
  
