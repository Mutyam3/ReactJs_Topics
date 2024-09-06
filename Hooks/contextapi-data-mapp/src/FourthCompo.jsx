import React from 'react'
import ManaContext from './MyContext'

function Fourth()
{
    var obj = React.useContext(ManaContext)

    console.log("rerender ayyana")
    
    return (
        <div className="App" style={{borderColor:"red"}}>
           <h1>Fourth Component</h1>
           <h2>{obj.firstName}</h2>
        </div>
    )
}

export default Fourth 