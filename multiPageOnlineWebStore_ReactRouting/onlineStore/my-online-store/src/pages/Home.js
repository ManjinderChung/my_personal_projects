import React, { useState } from "react";

//Home page
function Home () {
// State variables to store name entered by the user
  const [name, setName] = useState(null);
  const [loggedIn, setLoggedIn] = useState(false);  

//Handle function when logging in
const handleLogin = () => {
    if (name.trim() !== '') {
      setLoggedIn(true);
    }
  };
//Handle when name is empty, user can't log in
  const handleLogout = () => {
    setName('');
    setLoggedIn(false);
  };

// Returning Home title and buttons for logging in and out and entering name
  return (
    <div>
      <section>
        <h1>Home</h1>
      </section>

      {loggedIn ? (
        <div>
          <h1>Welcome {name}</h1>
          <button onClick={handleLogout}>Logout</button>
        </div>
      ) : (
        <div>
          <input
            type="text"
            placeholder="Enter your name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <button onClick={handleLogin}>Login</button>
        </div>
      )}
    </div>
  );
}
export default Home;