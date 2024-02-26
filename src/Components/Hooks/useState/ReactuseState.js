import React, { useState } from 'react'

export default function ReactuseState() {

    const myArray = useState("Nikhil")

   let changeState = ()=>{
    myArray[1]("Nilesh")
    }
  return (
    <div>
      <h1>{myArray[0]}</h1>
      <button style={{color:"Red",backgroundColor:"p"}} onClick={changeState}>UPDATE</button>
    </div> 
  )
}
