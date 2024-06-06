//import react and useState
import React from "react";
import { useState } from "react";

// Component for deposit and withdrawal form
function Transactions({ onDeposit, onWithdraw }) {
  const [amount, setAmount] = useState(0); // Input field for amount

  // Functions to handle deposit and withdrawal
  function handleDeposit() {
    onDeposit(parseInt(amount));
    setAmount(0);
  }

  function handleWithdraw() {
    onWithdraw(parseInt(amount));
    setAmount(0);
  }

  // Rendering form
  return (
    <div>
      <input
        type="number"
        value={amount}
        onChange={(e) => setAmount(e.target.value)}
      />
      <button id="DepButton" onClick={handleDeposit}>Deposit</button>
      <button id="WithButton" onClick={handleWithdraw}>Withdraw</button>
    </div>
  );
}

export default Transactions;
