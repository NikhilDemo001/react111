import React from 'react'


//  Events in Function Comp ......................


export default function Events() {

  function HelloFun(){
        alert("Hello, Good Morning ")
    }

  return (
    <div>
      <button type="button" class="btn btn-outline-danger" onClick={HelloFun}>Click Here</button>
    </div>
  )
}
