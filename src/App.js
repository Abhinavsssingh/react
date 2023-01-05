import React,{useState} from 'react'
import "./App.css"

 function App() {
  const[counter,SetCounter] = useState(0)
  const[decr,SetDecr] = useState(100)
  return (
    <div>
      <p className='kuchbhi' onClick={()=>SetCounter(counter+1)}>This is a counter{counter}</p>
      <p onClick={()=>SetDecr(decr-1)}>This is a counter{decr}</p>
    </div>
  )
}
export default App


