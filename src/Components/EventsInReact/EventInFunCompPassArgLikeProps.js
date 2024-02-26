import React from 'react'



//........................Events in function Comp with passing arguments lke props......

   export default function Events(props) {

    const HelloFun = () => {
          alert("Hello, Good Morning " + props.name)
      }
  
    return (
      <div>
        <button type="button" class="btn btn-outline-danger" onClick={ () => HelloFun(props.name)}>Click Here</button>
      </div>
    )
  }
  