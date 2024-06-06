import { Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Landing from "./components/Landing";
import ShoppingCart from "./components/ShoppingCart";

export default function App() {
return (
<div className="App">
<Header />
{/* // ADD OTHER COMPONENTS HERE */}
<Routes>
<Route exact path="/" element={<Landing />} />
<Route path="/cart" element={<ShoppingCart />} />
</Routes>
</div>
);
}



