let usage = prompt("Please enter how much water you have used")
// stores input from user as a variable

// here this will calculate the tariff for usage below 6 litres
if (usage <=6) {
    const step1 = 15.73 * usage
    console.log(`Your total is ${step1} Rand`);
}

/* here this is substracting 6 off the number entered by the user if it is above 6 but below 10.5. 
It will then use the standing charge of 94.38 and then multiply anything above 6 with 22.38 and add them together.
*/

else if (usage>6 && usage<= 10.5) {
  let standard = 94.38  
  let step2 = usage - 6
  let secondCost = standard + step2*22.38
  let thisCost = secondCost

  console.log(`Your total cost is ${thisCost} Rand`)
}

/* here this is substracting 10.5 off the number entered by the user if it is above 10.5 but below 35. 
It will then use the standing charges of 94.38 and 100.71 and then multiply anything above 10.5 with 31.77 and add them together.
*/

else if (usage>10.5 && usage <=35) {
    let standard = 94.38
    let standard2 = 100.71
    let step3 = usage - 10.5
    let thirdCost = standard + standard2 + step3*31.77
    let newCost = thirdCost
    console.log(`Your total cost is ${newCost} Rand`)
}

else (usage>35); {
    let standard = 94.38
    let standard2 = 100.71
    let standard3 = 778.365
    let step4 = usage - 35
    let fourthCost = standard + standard2 + standard3 + step4*69.76
    let hugeCost = fourthCost
    console.log(`Your total cost is ${hugeCost} Rand`)
}

/* same principles as above were followed for the above example.
*/