import React, { Component } from 'react'


//..................Events in Class Comp with passing arguments inside render .............

export default class Events extends Component {
    
    
      render() {
      const HelloFun = (name) =>{
            alert("Hello, Good Morning " + name)
        }
        
        return (
          <div>
             <button type="button" class="btn btn-outline-danger" onClick={ () => HelloFun("Nikhil")}>Click Here</button>
          </div>
        )
      }
    }