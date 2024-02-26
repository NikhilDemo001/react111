import React, { Component } from 'react'




//.................Events in function Comp with passing arguments

  


export default function Events() {

  const HelloFun = (name) => {
        alert("Hello, Good Morning " + name)
    }

  return (
    <div>
      <button type="button" class="btn btn-outline-danger" onClick={ () => HelloFun("Nikhil")}>Click Here</button>
    </div>
  )
}