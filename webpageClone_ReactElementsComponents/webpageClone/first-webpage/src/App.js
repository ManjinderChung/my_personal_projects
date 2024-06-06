//import logo from './logo.svg';
import './App.css';
import logo from "./xLogo.png";
import { Link } from "react-router-dom";

import BigHeading from "./Components/BigHeading";
import SubHeading from "./Components/SubHeading";
import Buttons from "./Components/Buttons";

function App() {
  return (
    <div>
      <img id="xLogo" src={logo} alt="" />

      <BigHeading title={`Happening now`} />

      <SubHeading sub="Join today." />

      <Buttons />

      <p>
        Recreating this page <a href="https://twitter.com/">here</a>.
      </p>

    </div>
  );
}

export default App;

