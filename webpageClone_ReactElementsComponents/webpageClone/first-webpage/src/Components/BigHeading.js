//importing react
import React from "react";

//creating a header component

function BigHeading (props) {

   return (
     <div>
       <h1 id="firstHeading"> {props.title}</h1>
     </div>
   );
}


export default BigHeading;

