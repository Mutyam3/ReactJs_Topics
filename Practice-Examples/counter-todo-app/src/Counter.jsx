// import chesukovali React library ni form react 
import React from 'react' 

// Remeber :  prathi counter ki state | logic and template lu untai 
function Counter()
{
    // state

    const [count, setCount] = React.useState(0)

    //logic 

    const inc =()=>{

         setCount(count+1)
    }

    const dec =()=>{

          setCount(count-1)
    }

    const res =()=>{

           setCount(0)

    }

    //template
     return (
        <div id="counterBox">
             <h1>Counter - App</h1>
             <h2>Counter : {count}</h2>

             <button onClick = {inc} style={{backgroundColor:"green", color:"white"}}>Increment</button>
             <button onClick = {dec} style={{backgroundColor:"red", color:"white"}}>Decrement</button>
             <button onClick = {res} style={{backgroundColor:"yellow", color:"black"}}>Reset</button>

        </div>
     )
}


// surya bhai export and imports laga 
// ikkada counter ni pampistam [export chestam]
export default Counter