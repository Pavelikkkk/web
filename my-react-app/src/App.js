import React, { useState } from 'react';

function App() {

  const [count , countChange] = useState(0);
  const [value , setValue] = useState('Text');
  console.log(value)
  
  function decrease()
  {
    countChange(count - 1)
  }

  function increase()
  {
    countChange(count + 1)
  }

  return ( 
    <div> 
      <h1>{count}</h1>
      <h1>{value}</h1>
      <button onClick={increase}>Increase</button>
      <button onClick={decrease}>Decrease</button> 
      <input 
        type='text'
        value={value}
        onChange={event => setValue(event.target.value)}
      />
    </div>
    
  );
}
export default App;
