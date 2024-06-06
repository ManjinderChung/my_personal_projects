import React from "react";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import AddCar from "./components/AddCar";
import UpdateCar from "./components/UpdateCar";
import UpdateManyCars from "./components/UpdateManyCars";
import DeleteCar from "./components/DeleteCar";
import ListOldCars from "./components/ListOldCars";
import ListAllCars from "./components/ListAllCars";
import "./App.css";

function App() {
  return (
    <Router>
      <div className="App">
        <header className="App-header">
          <h1> Car Management System</h1>
          <nav>
            <ul>
              <li>
                <Link to="/add">Add Car</Link>
              </li>
              <li>
                <Link to="/update">Update Car</Link>
              </li>
              <li>
                <Link to="/update-many">Update Many Cars</Link>
              </li>
              <li>
                <Link to="/delete">Delete Car</Link>
              </li>
              <li>
                <Link to="/list-old">List Old Cars</Link>
              </li>
              <li>
                <Link to="/list-all">List All Cars</Link>
              </li>
            </ul>
          </nav>
          <Routes>
            <Route path="/add" element={<AddCar />} />
            <Route path="/update" element={<UpdateCar />} />
            <Route path="/update-many" element={<UpdateManyCars />} />
            <Route path="/delete" element={<DeleteCar />} />
            <Route path="/list-old" element={<ListOldCars />} />
            <Route path="/list-all" element={<ListAllCars />} />
            <Route
              path="/"
              element={<h2>Welcome to the Car Management System</h2>}
            />
          </Routes>
        </header>
      </div>
    </Router>
  );
}

export default App;
