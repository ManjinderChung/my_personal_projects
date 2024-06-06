//import react
import React from "react";

// Component for interest and fees buttons
function InterestAndFees({ onAddInterest, onChargeFees }) {
  return (
    <div>
      <button id="IntButton" onClick={onAddInterest}>Add Interest</button> 
      <br></br>
      <button id="FeeButton" onClick={onChargeFees}>Bank Fees</button>
    </div>
  );
}

export default InterestAndFees;
