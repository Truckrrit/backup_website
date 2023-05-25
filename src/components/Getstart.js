import React, { useState } from 'react'
// import "./getstart.css"
import { FaTimes, } from "react-icons/fa";
function Getstart() {

const[Name ,setName]= useState('');
const[MobileNumber,setMobileNumber]= useState('');
const[Email,setEmail]=useState('');
const[state,setstate]=useState('');

const handleName =() =>{
  setName(e.target.value);
}
const handleMobileNumber=()=>{
  setMobileNumber(e.target.value)
}
const handleEmail=()=>{
  setEmail(e.target.value)
}

const handlestate=()=>{
  setstate(e.target.value)
}


const handlesubmit=(e)=>{
  e.prevendefault();
  console.log();

}
  return (

    <div className='get'>
      <div className='bg-color'>
        <div className='get-image'>
          { <img src={require("../image/get.png")} alt='' /> }
        </div>

        <div className='from-page'>
          <button className='x'> <FaTimes /></button>
          <h2>We'll get back to you ASAP</h2>

          <form>
            <input onClick={handleName} value={Name} type="text" id='Name' placeholder='Name' />
            <input onClick={handleMobileNumber} value={MobileNumber} id='mobileNumber' type="text" placeholder='Mobile Number' />
            <input onClick={handleEmail} value={Email} id='Email' type="text" placeholder='Email id' />
            <input onClick={handlestate} value={state} id='state' type="text" placeholder='State' />
          </form>
          <button className='get-button' onClick={handlesubmit}>submit</button>
        </div>

      </div>

    </div>

  )
}

export default Getstart
