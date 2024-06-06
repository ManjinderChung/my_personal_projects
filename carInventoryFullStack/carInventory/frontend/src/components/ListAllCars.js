import React, { useState } from "react";
import axios from "axios";

// Component to list all cars
const ListAllCars = () => {
  const [cars, setCars] = useState([]);
  const [message, setMessage] = useState("");
  const [isFetched, setIsFetched] = useState(false);

  // Function to fetch all cars
  const fetchAllCars = async () => {
    try {
      const response = await axios.get("/cars");
      setCars(response.data);
      setIsFetched(true);
      setMessage(""); // Clear the error message on successful fetch
    } catch (error) {
      setMessage("Error fetching cars");
      setIsFetched(true);
    }
  };

  return (
    <div>
      <h2>List of All Cars</h2>
      <button onClick={fetchAllCars}>Show All Cars</button>
      {message && <p>{message}</p>}
      {isFetched &&
        (cars.length > 0 ? (
          cars.map((car, index) => (
            <div key={index}>
              <h3>{car.model}</h3>
              <p>Make: {car.make}</p>
              <p>Colour: {car.colour}</p>
              <p>Registration Number: {car.reg}</p>
              <p>Owner: {car.owner}</p>
              <p>Address: {car.address}</p>
            </div>
          ))
        ) : (
          <p>No cars available</p>
        ))}
    </div>
  );
};

export default ListAllCars;
