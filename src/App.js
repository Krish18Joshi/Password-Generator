
import './App.css';
import React from 'react';
import Form from './components/form.js';

function App() {

  return (
    <div className="App">
     <div className = "Container">
     <div className = "Generator">
      <h2 className='h2'>Password Generator</h2>
      
      <div className='form'><Form /></div>
     </div>
</div>

    </div>
  );
}

export default App;
