import { useState } from 'react';
import './App.css'

function App() {
  let [counter,setCounter] =useState(15);
  // let counter=15;
  const addValue = () => {
    console.log(counter+1);
    setCounter(counter+1);
  }
  const subtractValue = () => {
    console.log(counter-1);
    setCounter(counter-1);
  }
  return (
    <>
      <h1>React</h1>
      <h2>Counter Value:{counter}</h2>
        <button onClick={addValue}>Add Value</button> {" "}
        {counter>0 && <button onClick={subtractValue}>Remove Value</button>}
      <p>Footer: {counter}</p>
    </>
  )
}

export default App
