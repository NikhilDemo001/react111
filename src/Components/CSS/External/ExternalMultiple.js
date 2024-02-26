import React, { Component } from 'react'
import './ExternalMultipleCss.css'

export default class ExternalMultiple extends Component {
  render() {
    let x = this.props.check ? "Bike1" : "Bike2"
    return (
      <div>

        <h1 className="Bike1 Bike2 ">External Multiple CSS</h1>

        <h1 className={x}>External Multiple CSS With Condition</h1>

        <h1 className={`${x}  Bike3 `}>External Multiple CSS With Condition and More CSS Adding</h1>


    </div>
    )
  }
}
