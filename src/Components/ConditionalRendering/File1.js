import React from 'react'
import File2 from './File2'
import File3 from './File3'
export default function File1() {

    // Method 1 .........................
    
// const name = "Nikhil"

// if ( name === "Nikhil") {

//    return <File2/>
// } 

// else {
//     return <File3 />
// }



// Method 2 ................................

const name = "Nikhilnn"
let data;

if ( name === "Nikhil") {

   data = <File2/>
} 

else {
    data = <File3 />
}


return(
    <div>
        {data}
    </div>
)

}
