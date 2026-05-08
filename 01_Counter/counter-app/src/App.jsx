import { useState } from 'react'

import './App.css'

function App() {
  const [count, setCount] = useState(0);

  function handleIncrement(){
    setCount(count + 1);
  }

  function handleDecrement(){
    setCount(count - 1);
  }

  function handleReset(){
    setCount(0);
  }
  return (
    <>
     <div className='wrapper'>
      <p className='label'> Counter </p>
      <h1 className='count'>{count}</h1>
      <div className='buttons'>
          <button onClick={handleDecrement}> - </button>
          <button onClick={handleReset}> Reset </button>
          <button onClick={handleIncrement}> + </button>
      </div>
     </div>
     
    </>
  )
}

export default App
