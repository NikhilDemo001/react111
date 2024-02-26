import React, { Component } from 'react'

export default class ChildComponent extends Component {
  render() {
    return (
      <div>

        {/* without parametre */}
        
        {/* <button type="button" class="btn btn-outline-primary" onClick={this.props.callMethod}>Click Me</button> */}

        {/* with Parametre */}

        <button type="button" className="btn btn-outline-primary" onClick={()=>this.props.callMethod("Nikhil","Nannajkar")}>Click</button>
      </div>
    )
  }
}
