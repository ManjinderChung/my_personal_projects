import React, { useState } from "react";
import axios from "axios";

// Component to update a single car
const UpdateCar = () => {
  const [reg, setReg] = useState("");
  const [car, setCar] = useState({
    model: "",
    make: "",
    colour: "",
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
      const response = await axios.put(`/cars/update/${reg}`, car);
      setMessage(response.data.message || "Car updated");
    } catch (error) {
      setMessage("Error updating car");
    }
  };

  return (
    <div>
      <h2>Update Car</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Registration Number:</label>
          <input
            name="reg"
            value={reg}
            onChange={(e) => setReg(e.target.value)}
            required
          />
        </div>
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
        <button type="submit">Update Car</button>
      </form>
      {message && <p>{message}</p>}
    </div>
  );
};

export default UpdateCar;
