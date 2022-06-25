import React, { useState } from 'react';
import ReactDOM from 'react-dom/client';
import './form.css';



function myFunction() {
    /* Get the text field */
    var copyText = document.getElementById("myInput");
  
    copyText.select();
    copyText.setSelectionRange(0, 99999); /* For mobile devices */
  
     /* Copy the text inside the text field */
    navigator.clipboard.writeText(copyText.value);
  }

function Form(){
    const [password , setPassword ] =useState('');
  const [passwordLength , setPasswordLength ] =useState(20);
  const [uppercase , setUppercase ] =useState(false);
  const [lowercase , setLowercase] =useState(false);
  const [numbers , setNumbers] =useState(false);
  const [symbols , setSymbols] =useState(false);

    return(
    <div className='for'>
    <div className = "generator_password">
<h3>{password}</h3>
<button className='b1'><i className='far fa-clipboard'></i></button>
      </div>
    <div className='form-group'>
    <label htmlFor='password-strength'>
Password Strength
    </label>
    <input
    defaultValue={passwordLength} 
    onChange = {(e)=>{
        setPasswordLength(e.target.value)
    }}
    type="number" id='password-sterngth' name='password-sterngth' max={20} min={5} ></input>
    </div>
    <div className='form-group'>
    <label htmlFor='uppercase-letters'>
Include Uppercase Letters
    </label>
    <input 
     checked={uppercase}
     onChange = {(e)=>{
        setUppercase(e.target.checked)
    }}
    type="checkbox" id='uppercase-letters' name='uppercase-letters'  ></input>
     </div>
     <div className='form-group'>
    <label htmlFor='lowercase-letters'>
Include Lowercase Letters
    </label>
    <input 
     checked={lowercase}
     onChange = {(e)=>{
        setLowercase(e.target.checked)
    }}
    type="checkbox" id='lowercase-letters' name='lowercase-letters'  ></input>
     </div>
     <div className='form-group'>
    <label htmlFor='numbers'>
Include Numbers
    </label>
    <input
     checked={numbers}
     onChange = {(e)=>{
        setNumbers(e.target.checked)
    }}
     type="checkbox" id='numbers' name='numbers'  ></input>
     </div>
     <div className='form-group'>
    <label htmlFor='symbols'>
Include Symbols
    </label>
    <input
     checked={symbols}
     onChange = {(e)=>{
        setSymbols(e.target.checked)
    }}
     type="checkbox" id='symbols' name='symbols'  ></input>
     </div>
     <button className='generator-b'> Generate - Password</button>
     </div>);
}

export default Form;