// Define Income class
class Income {
    constructor(name, amount, recurring) {
        this.name = name;
        this.amount = amount;
        this.recurring = recurring;
    }
}

// Define Expense class
class Expense {
    constructor(name, amount, recurring) {
        this.name = name;
        this.amount = amount;
        this.recurring = recurring;
    }
}

// Create income objects
let allIncome = JSON.parse(sessionStorage.getItem("myIncome")) || [
    new Income("Salary", 5000, true),
    new Income("Coding", 2000, true),
    new Income("Tutoring", 400, true),
    new Income("Rental", 500, true),
    new Income("Bonus", 500, false)
];

// Store income objects in session storage
sessionStorage.setItem("myIncome", JSON.stringify(allIncome));

// Create expense objects
let allExpense = JSON.parse(sessionStorage.getItem("myExpense")) || [
    new Expense("Mortgage", 1000, true),
    new Expense("Food", 600, true),
    new Expense("Car", 500, true),
    new Expense("Childcare", 400, true),
    new Expense("Dining", 200, false)
];

// Store expense objects in session storage
sessionStorage.setItem("myExpense", JSON.stringify(allExpense)); 

// Function to display income and expense lists
function displayLists() {
    let incomeList = document.getElementById("incomeList");
    let expenseList = document.getElementById("expenseList");

// Clear previous lists
    incomeList.innerHTML = "";
    expenseList.innerHTML = "";

// Display income list
allIncome.forEach(income => {
    let li = document.createElement("li");
        li.textContent = `${income.name}: £${income.amount} (Recurring: ${income.recurring})`;
        incomeList.appendChild(li);
});

// Display expense list
allExpense.forEach(expense => {
    let li = document.createElement("li");
        li.textContent = `${expense.name}: £${expense.amount} (Recurring: ${expense.recurring})`;
        expenseList.appendChild(li);
});

// Calculate and display disposable income
let totalIncome = allIncome.reduce((total, income) => total + income.amount, 0);
let totalExpenses = allExpense.reduce((total, expense) => total + expense.amount, 0);
let disposableIncome = totalIncome - totalExpenses;
let = interimDisposable = document.getElementById("disposableIncomeDisplay").textContent = `${disposableIncome}`;

}

// Function to prompt user to add another income entry
function addIncome() {
    let name = prompt("Please enter another income:");
    let amount = parseFloat(prompt("Please enter the amount of the income:"));
    let recurring = confirm("Is this income recurring?");

// Push the new income to the allIncome array and store it in session storage
    let newIncome = new Income(name, amount, recurring);
        allIncome.push(newIncome);
        sessionStorage.setItem("myIncome", JSON.stringify(allIncome));
    
//Call function to display lists        
displayLists();

}

// Function to prompt user to add another expense entry
function addExpense() {
    let name = prompt("Please enter another expense:");
    let amount = parseFloat(prompt("Please enter the amount of the expense:"));
    let recurring = confirm("Is this expense recurring?");

// Push the new expense to the allExpense array and store it in session storage
    let newExpense = new Expense(name, amount, recurring);
        allExpense.push(newExpense);
        sessionStorage.setItem("myExpense", JSON.stringify(allExpense));
        
displayLists();

}

function savings() {
    let myMoney = parseFloat(prompt("How much would you like to save?"));
    let finalDisposable = interimDisposable - myMoney;

    return alert (`Your final disposable after savings is £${finalDisposable}`)
    
    
}
// Call displayLists function when the page loads

window.onload = displayLists;