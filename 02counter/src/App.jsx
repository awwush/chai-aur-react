import { useState } from 'react'
import './App.css'

function App() {

  let [counter, setCounter] = useState(15)

  const removeValue = () => {
    if (counter > 0) {
      setCounter(counter - 1);
      console.log("clicked", counter - 1);
    }
  }

  const addValue = () => {
    if (counter < 20) {
      setCounter(counter + 1);
      console.log("clicked", counter + 1);
    }
  }

  // let counter = 15

  return (
    <>
      <h1>Chai aur react</h1>
      <h2>Counter value: {counter}</h2>

      <button
        onClick={addValue}>Add value {counter}</button>
      <br />
      <button
        onClick={removeValue}>Remove value {counter}</button>
    </>
  )
}

export default App
