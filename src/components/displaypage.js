import React, {useState} from "react";
import Inputbox from "./inputbox";
import Title from "./title";
import Response from "./response";



//This is a parent componet. 

const Displaypage = () => {

    const number = 101 
    const [username,setUsername] = useState('') // username is the name of the state. //  setUsername is the function that updates username 
//useState is the the react hook that we use to create state.

    return (
    <div>
    <Title/>
    <Inputbox setUsername = {setUsername} /> 
    <Response username = {username} number = {number}/>  
    </div>
)}



export default Displaypage

