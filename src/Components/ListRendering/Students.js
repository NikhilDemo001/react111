import React from 'react'
import Students1 from './Students1'

function Students() {

  const student = [ "raina" , "yuvraj" , "gavaskar" , "sachin"]
  const number  = [ 2 ,4 ,6 ,8]

  const employees = [
  {
    name : "nikhil",
    age : 200
  },
  {
    name : "pavan",
    age : 220
  },
  {
    name : "rohan",
    age : 240
  }

]
  
  return (
    <div>
      
    {student.map(std => <h1>{std}</h1>)}
    {number.map(num => <h2>{num = num * 100}</h2>)}
    {employees.map(emp => <Students1 e={emp}/>)}
    </div>
  )
}

export default Students
