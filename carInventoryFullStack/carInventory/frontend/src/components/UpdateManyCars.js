import React, { useState } from "react";
import axios from "axios";

// Component to update multiple cars
const UpdateManyCars = () => {
  const [carDetails, setCarDetails] = useState({
    reg: "",
    model: "",
    make: "",
    colour: "",
    owner: "",
    address: "",
  });
  const [message, setMessage] = useState("");

  // Handle input change
  const handleChange = (e) => {
    setCarDetails({ ...carDetails, [e.target.name]: e.target.value });
  };

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.put("/cars/updatemany", carDetails);
      setMessage(response.data.message || "Cars updated");
    } catch (error) {
      setMessage("Error updating cars");
    }
  };

  return (
    <div>
      <h2>Update Multiple Cars</h2>
      <form onSubmit={handleSubmit}>
        {Object.keys(carDetails).map((key) => (
          <div key={key}>
            <label>{key}:</label>
            <input
              name={key}
              value={carDetails[key]}
              onChange={handleChange}
              required
            />
          </div>
        ))}
        <button type="submit">Update Cars</button>
      </form>
      {message && <p>{message}</p>}
    </div>
  );
};

export default UpdateManyCars;
