// import chesukovali React library ni form react 
import React from 'react'

// Remeber :  prathi counter ki state | logic and template lu untai 
function  Counter()
{
      // state 

      const [count, setCount] = React.useState(0)

      //logic 

       const inc = ()=>{
            setCount(count+1)
       }

       const dec = ()=>{
             setCount(count-1)
       }

      // template create chesukuntam ikkada return lo 
      return (
        <div className = "myBox btnBox">
            <h1>Counter : {count}</h1>
            <button style={{backgroundColor:"green", color:"white"}} onClick = {inc}>Increment</button>
            <button  style={{backgroundColor:"red", color:"white"}}onClick = {dec}>Decrement</button>
        </div>
      )
}

// surya bhai export and imports laga 
// ikkada counter ni pampistam [export chestam]
export default Counter;