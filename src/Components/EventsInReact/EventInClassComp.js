import React, { Component } from 'react'



//................. Events in Class Comp..................



export default class Events extends Component {
    
HelloFun(){
    alert("Hello, Good Morning........ ")
}

  render() {
    return (
      <div>
         <button type="button" class="btn btn-outline-danger" onClick={this.HelloFun}>Click Here</button>
      </div>
    )
  }
}
