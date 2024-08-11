
import { useState } from 'react'
import './App.css'

function App() {
  let [counter , setCounter] = useState(15)

  function addvalue (){
    counter = counter+1
    setCounter(counter)
  }
  function Decreasevalue (){
    counter = counter-1 
    setCounter(counter)
  }

  return (
    <>
     
     <h1>Counter value update || Decrease  and Increase  </h1>
     <h3>conter vlaue {counter}</h3>
     <button 
     onClick={addvalue}
     > Increse value   </button>

     <button 
     onClick={Decreasevalue}
     > Decreas Value </button>

     
    </>
  )
}

export default App
