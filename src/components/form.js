import React from 'react';
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
    return(
    <div className='for'>
    <div className='form-group'>
    <label htmlFor='password-strength'>
Password Strength
    </label>
    <input type="number" id='password-sterngth' name='password-sterngth' max={20} min={5} ></input>
    </div>
    <div className='form-group'>
    <label htmlFor='uppercase-letters'>
Include Uppercase Letters
    </label>
    <input type="checkbox" id='uppercase-letters' name='uppercase-letters'  ></input>
     </div>
     <div className='form-group'>
    <label htmlFor='lowercase-letters'>
Include Lowercase Letters
    </label>
    <input type="checkbox" id='lowercase-letters' name='lowercase-letters'  ></input>
     </div>
     <div className='form-group'>
    <label htmlFor='numbers'>
Include Numbers
    </label>
    <input type="checkbox" id='numbers' name='numbers'  ></input>
     </div>
     <div className='form-group'>
    <label htmlFor='symbols'>
Include Symbols
    </label>
    <input type="checkbox" id='symbols' name='symbols'  ></input>
     </div>
     <button className='generator-b'> Generate - Password</button>
     </div>);
}

export default Form;