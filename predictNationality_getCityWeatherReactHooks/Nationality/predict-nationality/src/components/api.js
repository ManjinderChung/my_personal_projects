import React, { useState, useEffect, useRef } from "react"; // Importing all hooks on one line

function API() {
  const [nation, setNation] = useState(null);
  const [you, setYou] = useState("");
  const inputRef = useRef(null); // Creating a ref for the input element

  useEffect(() => {
    inputRef.current.focus(); // Autofocus the input field
  }, []);

  async function fetchNation(name) {
    try { // Creating a try-catch error block
      if (!name) return; // Don't fetch if name is empty

      const response = await fetch(`https://api.nationalize.io?name=${name}`);
      const data = await response.json();
      if (data.country && data.country.length > 0) {
        setNation(data.country[0]); // Capturing the first country in the array
      } else {
        setNation(null);
      }
    } catch (error) {
      console.error("Error in fetching nationality", error);
    }
  }
 
  function handleChange(e) {
    setYou(e.target.value); // Updates the state variable with the user input
  }

  function handleButtonClick() {
    fetchNation(you); // Call fetchNation function with the current value of 'you' when the button is clicked to predict your nationality
  }

  return (
    <div>
      <input
        type="text"
        ref={inputRef} // Assigning the ref to the input element
        value={you}
        onChange={handleChange} // Calls the handleChange function
        placeholder="Enter your name"
      />
      <button onClick={handleButtonClick}>Find out my nationality</button>
      {nation && (
        
      <h1>Based on your name, your nationality is: {nation.country_id}</h1>
        
      )}
    </div>
  );
}

export default API;
