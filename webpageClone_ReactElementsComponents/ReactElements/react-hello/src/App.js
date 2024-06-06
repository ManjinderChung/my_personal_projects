import logo from './logo.svg';
import './App.css';
import profilePic from "./me.jpg"

//creating an object with properties and values
const user = {
  name: "Manga",
  surname: "Panga",
  dob: "01.01.1982",
  address: "Nurmahal",
  country: "Punjab",
  email: "manjinderchung@hotmail.com",
  telephone: +447855802068,
  company: "HyperionDev",
  profile_picture: {profilePic}, 
  shopping_cart: ["apples", "bananas", "grapes", "bagels"],
};


function App() { //edited component to display the object above. Below I have also used ordered and unorder lists

  return (
    <div>
      <h1 id="Heading1"> Hello {user.name}!</h1>

      <p id="firstPara">
        Hey dude, this is all the information I have for you. First of all, I
        know your name is {user.name} {user.surname}. The rest of your details
        are:
      </p>

      <p id="secondPara">
        <ul>
          <li>Your date of birth is {user.dob}</li>
          <li>Your pind (address) is {user.address}</li>
          <li>Your country is {user.country}</li>
          <li>Your contact details are as follows:</li>
          <ol>
            <li>Email address is {user.email}</li>
            <li>Telephone number is {user.telephone}</li>
          </ol>

          <li>Your company is {user.company}</li>
          <li>Your shopping list is:</li>
          <ol>
            <li>{user.shopping_cart[0]}</li>
            <li>{user.shopping_cart[1]}</li>
            <li>{user.shopping_cart[2]}</li>
            <li>{user.shopping_cart[3]}</li>
          </ol>
        </ul>
      </p>

      <img src={profilePic} alt="" />
    </div>
  );
}

export default App;
