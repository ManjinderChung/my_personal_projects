import React, { useState, useRef } from "react";

function GetWeather() {
  // State variables to store weather data and the city entered by the user
  const [weather, setWeather] = useState(null);
  const [city, setCity] = useState("");
  // Reference to the input field to focus on it when needed
  const inputRef = useRef(null);

// asyncFunction to fetch weather data from the API
  
  const fetchData = async (cityName) => {
    try {
      // If city name is empty, do not proceed with API call
      if (!cityName) return;

      // API call to fetch weather data for the specified city
      const response = await fetch(
        `http://api.weatherapi.com/v1/current.json?key=e26c6f619a394491885232158241105&q=${cityName}`
      );
      const data = await response.json(); // Parse the JSON response
      console.log(data);
      setWeather(data); // Update the weather state with the fetched data
    } catch (error) {
      // Log any errors that occur during the API call
      console.error("Error in fetching weather", error);
    }
  }

  // Function to handle changes in the input field
  function handleChange(e) {
    // Update the 'city' state with the value entered by the user
    setCity(e.target.value);
  }

  function handleButtonClick() {
    if (city) {
      fetchData(city); // Call fetchNation function with the current value of 'you' when the button is clicked to predict your nationality
  }
}

  // JSX code to render the input field and weather information
  return (
    <div>
      {/* Input field for the user to enter the city name */}
      <input
        type="text"
        ref={inputRef} // Associate the input field with the 'inputRef' reference
        value={city} // Bind the input value to the 'city' state
        onChange={handleChange} // Call 'handleChange' function when input changes
        placeholder="Enter a city"
      />
      <button onClick={handleButtonClick}>Display weather</button>
      
      {/* Display weather information if available */}
      {weather && weather.current &&(
        <div>
          {/* Display the city name */}
          <h1>The weather in {city} is:</h1>
          <ul>
            <li>Temperature: {weather.current.temp_c} C</li>
            <li>Humidity: {weather.current.humidity}</li>
            <li>UV index: {weather.current.uv}</li>
            <li>Wind Speed: {weather.current.wind_mph} mph</li>
            <li>Rainfall: {weather.current.precip_mm} mm</li>
          </ul>
        </div>
      )}
    </div>
  );


  
}

export default GetWeather;
