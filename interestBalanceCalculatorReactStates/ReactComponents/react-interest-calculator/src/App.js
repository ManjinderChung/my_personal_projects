//import css style sheet
import "./App.css";

// import react and useState
import React from 'react';
import { useState } from "react";

//Import child components
import Balance from './Components/Balance';
import Transactions from './Components/Transactions';
import InterestAndFees from './Components/InterestAndFees';

// Main component that manages money transactions
function App() {
  // State variables
  const [balance, setBalance] = useState(3000); // Starting balance
  const [alert, setAlert] = useState(false); // Alert for negative balance

  // Function to add money to the balance
  function depositMoney(amount) {
    setBalance(balance + amount);
  }

  // Function to withdraw from the balance
  function withdrawMoney(amount) {
    if (balance - amount < 0) {
      // Alert to show if balance goes negative
      setAlert(true);
    } else {
      setBalance(balance - amount);
    }
  }

  // Function to add interest to the balance
  function addInterest() {
    const interestRate = 0.10; // 10% interest rate
    setBalance(balance + (balance * interestRate));
  }

  // Function to charge fees from the balance
  function chargeFees() {
    const feeAmount = 30; // Fixed fee amount
    setBalance(balance - feeAmount);
  }

  // Rendering components
  return (
    <div>
      {alert && <div className="alert">Warning: Negative Balance!</div>}
      <Balance balance={balance} />
      <Transactions
        onDeposit={depositMoney}
        onWithdraw={withdrawMoney}
      />
      <InterestAndFees
        onAddInterest={addInterest}
        onChargeFees={chargeFees}
      />
    </div>
  );
}

export default App;
