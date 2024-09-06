import React from 'react'
import Second from './SecondCompo'

function First(props)
{
    console.log("rerender ayyana")
     return (
        <div className="App" style={{borderColor:"red"}}>
            <h1>First Component: {props.v}</h1>
             <Second v = {props.v}></Second>
        </div>
     )
}

export default First