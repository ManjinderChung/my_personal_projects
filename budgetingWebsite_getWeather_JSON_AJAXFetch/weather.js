// Function to fetch weather data for Paris
async function getWeather() {
  try {
    const response = await fetch(
      "https://api.open-meteo.com/v1/forecast?latitude=48.8534&longitude=2.3488&hourly=temperature_2m&wind_speed_unit=mph&timezone=auto"
    );
    const data = await response.json();
    const temperature = data.hourly.temperature_2m[0];
    document.getElementById(
      "weather"
    ).innerText = `Current Temperature in Paris: ${temperature}°C`;

  } catch (error) {
    console.error("Error fetching weather:", error);
  }
}

// Call the function to get weather data when the page loads
getWeather();

