
import './App.css';
import React from 'react';
import Form from './components/form.js';
import ReactDOM from 'react-dom/client';
function App() {
  return (
    <div className="App">
     <div className = "Container">
     <div className = "Generator">
      <h2 className='h2'>Password Generator</h2>
      <div className = "generator_password">
<h3>Password</h3>
<button className='b1'><i className='far fa-clipboard'></i></button>
      </div>
      <div className='form'><Form /></div>
     </div>
</div>

    </div>
  );
}

export default App;
