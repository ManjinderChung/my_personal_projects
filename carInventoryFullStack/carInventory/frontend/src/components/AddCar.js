import React, { useState } from "react";
import axios from "axios";

// Component to add a car
const AddCar = () => {
  const [car, setCar] = useState({
    model: "",
    make: "",
    colour: "",
    reg: "",
    owner: "",
    address: "",
  });
  const [message, setMessage] = useState("");

  // Handle input change
  const handleChange = (e) => {
    setCar({ ...car, [e.target.name]: e.target.value });
  };

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post("/cars/create", car);
      setMessage(response.data.message);
    } catch (error) {
      setMessage("Error adding car");
    }
  };

  return (
    <div>
      <h2>Add Car</h2>
      <form onSubmit={handleSubmit}>
        {Object.keys(car).map((key) => (
          <div key={key}>
            <label>{key}:</label>
            <input
              name={key}
              value={car[key]}
              onChange={handleChange}
              required
            />
          </div>
        ))}
        <button type="submit">Add Car</button>
      </form>
      {message && <p>{message}</p>}
    </div>
  );
};

export default AddCar;
