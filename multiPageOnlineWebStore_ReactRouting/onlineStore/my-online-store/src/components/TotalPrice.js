// TotalPrice.js
import React from "react";
import { Badge } from "react-bootstrap";

// TotalPrice component to display the total price of purchased products
const TotalPrice = ({ totalPrice }) => {
  // Do not display anything if the total price is zero
  if (totalPrice === 0) {
    return null;
  }

  return (
    // Position the total price at the top-right corner
    <div style={{ position: "absolute", top: "10px", right: "10px" }}>
      <h2>
        Total price: <Badge bg="secondary">£{totalPrice.toFixed(2)}</Badge>
      </h2>
    </div>
  );
};

export default TotalPrice;
