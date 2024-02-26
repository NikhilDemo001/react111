import React, { Component } from 'react'

//..........1st direct Binding method 

export default class BindingEvents extends Component {
    
    constructor() {
        super();
        this.state = {
            name :"Welcome"
        }
    }

    HandlerEvent(){
        console.log("clicked",this)
    this.setState({
        
        name :"thank you"
    })
    }
  render() {
    return (
      <div>
        <h1>{this.state.name}</h1>
        <button type="button" class="btn btn-success" onClick={this.HandlerEvent.bind(this)}>Submit</button>
      </div>
    )
  }
}
