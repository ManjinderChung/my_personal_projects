//initiatising an array of items
let shoppingList = ["eggs", "bread", "jam", "coffee"];

function displayItems () {
  let list1 = document.querySelector("ol"); // selecting by tag is also possible. Here done by query and specifying ol
  
  //looping through each item in array above to add it to a numbered list
  for (let item of shoppingList) {
   
    //creating a new element in html file - an ordered list
    let newList = document.createElement("li");
    
    //adding the content to the new element
  newList.textContent = item;
  
  //appending the list
  list1.appendChild(newList);

  let span = document.querySelector("li");
  let span1 = document.createElement("span");

  span.appendChild(span1);

    span.classList.add("delete");

    span1.textContent = ' \u00D7'

    deleteItem ();

    }
}
//calling the function to execute
displayItems();

function setDefaultChecked() {
  // Get the list items
  let listItems = document.querySelectorAll("li");

  // Check the first two list items
  for (let i = 0; i < 2; i++) {
    // Change CSS styling to indicate that the item has been bought
    listItems[i].style.textDecoration = "line-through"; // Strikethrough
    listItems[i].style.color = "red"; // Change text colour to red
  }
}

// Call the function to set the default checked styling
setDefaultChecked();

let newItems = function addItem(){
  
}

function addItem () {
  let input = document.createElement("input");
 let cust = input.textContent = (alert ("Enter your shopping item "));
  
  if (cust.value = array.length("''"))
  alert("Please enter an item")

  else cust.value += push(shoppingList);

  displayItems();
}

function deleteItem(){
  let remove = document.getElementsByClassName("delete");

  remove.addEventListener("click", deleteItem() )

}

