// Function to display current time
function displayTime() {
  const now = new Date();
  const hours = String(now.getHours()).padStart(2, "0");
  const minutes = String(now.getMinutes()).padStart(2, "0");
  const seconds = String(now.getSeconds()).padStart(2, "0");
  const timeString = `${hours}:${minutes}:${seconds}`;
  document.getElementById("time").innerText = `Current Time: ${timeString}`;
}

// Update time every second
setInterval(displayTime, 1000);

// calling the function
displayTime();
