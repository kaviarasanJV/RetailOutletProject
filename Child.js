import React from 'react'
//import {useState} from 'react';

function Child(props){
    //const [input1,updateInput1]=useState("");
    const handleSubmit=(event) => {
        event.preventDefault();
        alert(event.target.myname.value);
        props.parentCallback(event.target.myname.value);   
    }
  
    return(
        <div>
            <form onSubmit = {handleSubmit}>
                <input type = "text" name = "myname"  placeholder = "Enter Name"/>
                <br></br><br></br>
                <input type = "submit" value = "Submit"/>
                <br></br><br></br>
            </form>
        </div>
        )
}
export default Child;