import React, { useState, useEffect } from "react";
import axios from "axios";

// Component to list old cars
const ListOldCars = () => {
  const [cars, setCars] = useState([]);
  const [message, setMessage] = useState("");

  // Fetch old cars
  useEffect(() => {
    const fetchOldCars = async () => {
      try {
        const response = await axios.get("/cars/olderthan5");
        setCars(response.data);
      } catch (error) {
        setMessage("Error fetching old cars");
      }
    };

    fetchOldCars();
  }, []);

  return (
    <div>
      <h2>List of Cars Older Than 5 Years</h2>
      {message && <p>{message}</p>}
      {cars.length > 0 ? (
        cars.map((car, index) => (
          <div key={index}>
            <h3>{car.model}</h3>
            <p>Make: {car.make}</p>
            <p>Registration Number: {car.reg}</p>
            <p>Owner: {car.owner}</p>
          </div>
        ))
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
};

export default ListOldCars;
