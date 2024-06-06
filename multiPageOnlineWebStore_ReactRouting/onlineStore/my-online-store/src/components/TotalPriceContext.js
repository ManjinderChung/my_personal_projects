// TotalPriceContext.js
import React, { createContext, useState, useContext } from "react";

// Create a context for the total price
const TotalPriceContext = createContext();

// Create a provider component to wrap around the app
export const TotalPriceProvider = ({ children }) => {
  // State to store the total price
  const [totalPrice, setTotalPrice] = useState(0);

  return (
    // Provide the total price state to child components
    <TotalPriceContext.Provider value={{ totalPrice, setTotalPrice }}>
      {children}
    </TotalPriceContext.Provider>
  );
};

// Custom hook to use the TotalPriceContext
export const useTotalPrice = () => {
  return useContext(TotalPriceContext);
};
