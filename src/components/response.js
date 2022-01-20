import React from "react";
import Childresponse from "./childresponse";



const Response = (props) => {   // props is an object.
   return(
       <div>
       <h1>This is my response.{props.username} </h1>
       
     <Childresponse number = {props.number}/> </div>
   ) 
}

export default Response