import React, { useState } from 'react';
import swal from 'sweetalert';

import './form.css';

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { COPY_SUCCESS }  from './me.js'

import {
    number,
    upperCaseLetters,
    lowerCaseLetters,
    specialCharacters,
  } from './char'
// Made by krish joshi Gmail : krishjoshi791@gmail.com
// Made by krish joshi Gmail : krishjoshi791@gmail.com
// Made by krish joshi Gmail : krishjoshi791@gmail.com



function Form(){
    
  const [password , setPassword ] =useState('');
  const [passwordLength , setPasswordLength ] =useState(10);
  const [uppercase , setUppercase ] =useState(false);
  const [lowercase , setLowercase] =useState(false);
  const [numbers , setNumbers] =useState(false);
  const [symbols , setSymbols] =useState(false);
// Made by krish joshi Gmail : krishjoshi791@gmail.com
// Made by krish joshi Gmail : krishjoshi791@gmail.com

  const generatepassword = (e) =>{
    let charlist = '';
    if (
        !uppercase &&
        !lowercase &&
        !numbers &&
        !symbols
      ) {
        swal('Select atleast one option')
      }
    if(lowercase){
        charlist = charlist + lowerCaseLetters;
    }// Made by krish joshi Gmail : krishjoshi791@gmail.com
// Made by krish joshi Gmail : krishjoshi791@gmail.com

    if(uppercase){
        charlist = charlist + upperCaseLetters;
    }
    if(numbers){
        charlist = charlist + number;
    }if(symbols){
        charlist = charlist + specialCharacters;
    }
    setPassword(createPassword(charlist));

    }// Made by krish joshi Gmail : krishjoshi791@gmail.com
// Made by krish joshi Gmail : krishjoshi791@gmail.com

    const createPassword = (charlist) =>{
        let password=''
        const charlistlength = charlist.length

        for(let i =0 ; i< passwordLength;i++){
const charIndex = Math.round( Math.random()*charlistlength)
password  = password + charlist.charAt(charIndex);

        }
        return password;
    }// Made by krish joshi Gmail : krishjoshi791@gmail.com
// Made by krish joshi Gmail : krishjoshi791@gmail.com

    const copyToClipboard  = ()=>{
        const newTextarea = document.createElement('textarea')
        newTextarea.innerText = password ;
        document.body.appendChild(newTextarea)
        newTextarea.select()
        document.execCommand('copy')
        newTextarea.readOnly()
    }// Made by krish joshi Gmail : krishjoshi791@gmail.com
// Made by krish joshi Gmail : krishjoshi791@gmail.com

    const handlecopy = (e)=>{
        notify(COPY_SUCCESS);
        copyToClipboard();
        
     
    }// Made by krish joshi Gmail : krishjoshi791@gmail.com
// Made by krish joshi Gmail : krishjoshi791@gmail.com

    const notify = (message)=>{
        toast.success(message, {
            position:"bottom-center",

            autoClose: 4000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: false,
            draggable: true,
            progress: undefined,
            });
    }// Made by krish joshi Gmail : krishjoshi791@gmail.com
// Made by krish joshi Gmail : krishjoshi791@gmail.com
// Made by krish joshi Gmail : krishjoshi791@gmail.com
// Made by krish joshi Gmail : krishjoshi791@gmail.com
// Made by krish joshi Gmail : krishjoshi791@gmail.com

    return(
    <div className='for'>
    <div className = "generator_password">
<h3>{password}</h3>
<button onClick={handlecopy} className='b1'><i className='far fa-clipboard'></i></button>
      </div>
    <div className='form-group'>
    <label htmlFor='password-strength'>
Password Strength
    </label>
    <input 
    className='bb'
    defaultValue={passwordLength} 
    onChange = {(e)=>{
        setPasswordLength(e.target.value)
    }}
    type="number" id='password-sterngth'  name='password-sterngth' max="20" min="5" />
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
     <button className='generator-b'
     onClick={generatepassword}> Generate - Password</button>
 <ToastContainer position="bottom-center"

autoClose={5000}
hideProgressBar={false}
newestOnTop={false}
closeOnClick
rtl={false}
pauseOnFocusLoss
draggable
pauseOnHover
/>
     </div>);
}

export default Form;