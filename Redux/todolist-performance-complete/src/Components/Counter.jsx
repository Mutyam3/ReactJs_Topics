import React from 'react'
import {connect} from 'react-redux'


function Counter(props)
{
    console.log(props)

    return (
        <div className='App'>
            
            <h1>Count : {props.counterReducer.count}</h1>

            <button onClick = {()=>{props.dispatch({type: 'INC'})}}>Increment</button>
            <button onClick = {()=>{props.dispatch({type: 'DEC'})}}>Decrement</button>
            <button onClick = {()=>{props.dispatch({type:'RESET'})}}>Reset</button>

        </div>
    )
}

export default connect(function(store){
    return store
})(Counter)


// Connect() method em chestadi ante store nunchi store techukuntadi 
// [store uh store naku motham store ni ivvu ani aduguthadi connect ]
// finally vachina store counter ki  props dwara pass avuthadi 
