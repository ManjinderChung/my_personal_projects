import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Products from "./pages/Products";
import About from "./pages/About";
import NavBar from "./components/NavBar";
import { TotalPriceProvider } from "./components/TotalPriceContext";

function App() {
  return (
    // Wrap the entire app with the TotalPriceProvider
    <TotalPriceProvider>
      <div>
        <NavBar />
        {/* Define routes for the application */}
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route path="/products" element={<Products />} />
          <Route path="/about" element={<About />} />
        </Routes>
      </div>
    </TotalPriceProvider>
  );
}

export default App;
