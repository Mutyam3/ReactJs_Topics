import React from 'react'
import { userDetails } from './Data'
import ManaContext from './MyContext'


function Third(pro)
{
     var obj = React.useContext(ManaContext)
     console.log(obj)

     console.log("rerender ayyana")
     
    return (
        <div className="App" style={{borderColor:"orange"}}>
            <h2>Hi, Hero : {obj.firstName + " " + obj.lastName}</h2>
            <h2>Third Component : {pro.c}</h2>
            <button onClick = {obj.sayFn}>Say Hi to Hero</button>
        </div>
    )
}

export default Third 