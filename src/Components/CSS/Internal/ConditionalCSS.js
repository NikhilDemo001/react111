import React, { Component } from 'react'

export default class ConditionalCSS extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         active:false
      }
    }

    changeState =()=>{

        this.setState({
            active:true
        })

    }
    
    
  
  render() {

    let obj = {
        color : "red",
        backgroundColor : "yellow",
        fontSize : "50px"
    }

    if(this.state.active){
        obj.backgroundColor = "red";
        obj.color = "yellow";
        obj.fontSize = "250px";
    }
    

    return (
    <div>
        <h1>ConditionalCSS</h1>

        <button type="button" style={obj} onClick={this.changeState}>Click</button>

    </div>
    )
  }
}
