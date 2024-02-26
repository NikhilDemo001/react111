import React, { Component } from 'react'


export default class Mounting1 extends Component {
    constructor(props){
        super(props);
      

        console.log("Mounting 1 Constructor Called")
    }

    static getDerivedStateFormProps(){

      
        console.log("Mounting 2 getDerivedStateFormProps Called")
        return null
        
    }

    componentDidMount(){
        console.log("Mounting 4 componentDidMount Called")}


  render() {

    console.log("Mounting 3 Render is Called")
    
    return (
      <div>
        
      </div>
    )
  }
}
