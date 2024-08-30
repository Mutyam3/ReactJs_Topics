import React from 'react'


function Dis(props)
{
    
      
      return (
      <li className="items">{props.tod} 
        <button onClick = {()=> {props.done(props.ind, "green")}}>Done</button>
        <button onClick = {()=>{props.undo(props.ind, "red")}}>Undo</button>
        <button onClick = {()=>{props.del(props.i)}}>Delete</button>
      </li>
      
      )
}

export default Dis
