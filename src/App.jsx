import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)
  return (
    <>
      <h1>Welcome React</h1>
      <Student></Student>
      <Student></Student>
      <Student></Student>
      <Student></Student>
      <JobId></JobId>
    </>
  )
}

function Student() {
  return (
    <div className='student'>
       <p>HEllo World 1</p>
       <p>Hello world 2</p>
       <p>Hello World 3</p>
       <p>Hello World 4</p>
       <p>Hello World 5</p>
    </div>
  )
}
function JobId() {
 const jobStyle ={
   margin:'20px',
   padding:'20px',
   border:'2px solid green',
   borderRadius:'18px'
 }
 
  return(
    <div style={jobStyle}>
      <p>My Job id is 9403</p>
    </div>
  )
}

export default App
