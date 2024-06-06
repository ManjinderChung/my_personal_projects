//importing react
import React from "react";

//creating a header component

function SubHeading (props) {
   return (
     <div>
       <h1 id="secondHeading"> {props.sub}</h1>
     </div>
   );
}

export default SubHeading;
