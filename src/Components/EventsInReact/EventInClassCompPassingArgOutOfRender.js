import React, { Component } from 'react'


// Events in Class Comp with passing arguments outside render ...


    export default class Events extends Component {
    
        HelloFun = (name) =>{
            alert("Hello, Good Morning " + name)
        }
        
    
        render() {
      
          return (
            <div>
               <button type="button" class="btn btn-outline-danger" onClick={ () => this.HelloFun("Nikhilnn")}>Click Here</button>
            </div>
          )
        }
      }
