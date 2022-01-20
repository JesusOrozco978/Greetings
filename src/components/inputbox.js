import React from "react";

const Inputbox = (props) => {


    //How can we accsees setUserName? First had to specify that props is a para. Then use Dot Notation to accese the setUsername function.
    const handleName = event => {
        props.setUsername(event.target.value)// t

}
console.log(props)

return (

<input type = "text" onChange = {handleName}  />
)}


export default Inputbox