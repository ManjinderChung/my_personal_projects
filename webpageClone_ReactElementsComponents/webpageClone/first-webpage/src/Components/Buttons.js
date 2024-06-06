//importing react
import React from "react";

//creating a header component

function Buttons() {
  return (
    <div>
      <button id="firstButton">Sign up with Google</button>

      <br></br>

      <button id="secondButton">Sign up with Apple</button>

      <p id="orLine">--------- or --------</p>

      <button id="thirdButton">Create account</button>

      <p id="disclaimer">
        By signing up, you agree to the Terms of Service and Privacy Policy,
        including Cookie Use.
      </p>

      <br></br>

      <p id="account">Already have an account?</p>

      <button id="fourthButton">Sign in</button>

<br></br>

      <p id="footer">
        About  Download the X app Help Center Terms of Service Privacy Policy
        Cookie Policy Accessibility Ads info Blog Careers Brand Resources
        Advertising Marketing X for Business Developers Directory Settings ©
        2024 X Corp.
      </p>
    </div>
  );
}

export default Buttons;
