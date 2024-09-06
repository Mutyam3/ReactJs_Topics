import React from 'react'
import Third from './ThirdCompo'
import ManaContext from './MyContext'

function Second(prop)
{
    var obj = React.useContext(ManaContext)

    console.log("rerender ayyana")
    return (
        <div className="App" style={{borderColor:"green"}}>
           <h2>How are you hero {obj.firstName}</h2>
           <h2>Second Component : {prop.v}</h2>
           <Third c = {prop.v}></Third>
        </div>
    )
}

export default Second 