import React, { useState } from "react";
import axios from "axios";

// Component to delete a car
const DeleteCar = () => {
  const [reg, setReg] = useState("");
  const [message, setMessage] = useState("");

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.delete(`/cars/delete/${reg}`);
      setMessage(response.data.message || "Car deleted");
    } catch (error) {
      setMessage("Error deleting car");
    }
  };

  return (
    <div>
      <h2>Delete Car</h2>
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
        <button type="submit">Delete Car</button>
      </form>
      {message && <p>{message}</p>}
    </div>
  );
};

export default DeleteCar;
