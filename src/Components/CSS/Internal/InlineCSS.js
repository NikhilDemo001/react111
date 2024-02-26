import React, { Component } from 'react'

export default class InlineCSS extends Component {

   
  render() {

    let obj1 = {
        color : "red",
        backgroundColor : "yellow",
        fontSize : "50px"
    }

    let obj2 = {
        fontFamily : "cooper"
    }

    return (
      <div>

        <h1 style={{color : "red"}}> Inline Css </h1>

        <h1 style={{...obj1,...obj2}}>internal CSS</h1>

      </div>
    )
  }
}
