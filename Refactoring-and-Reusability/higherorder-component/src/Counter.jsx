import React from 'react'
import CounterHoc from './CounterHoc'

function Counter(props)
{

    return (
        <div className='App'>
           <h1>Count : {props.count}</h1>
           <button onClick = {props.inc}>Increment</button>
           <button onClick = {props.dec}>Decrement</button>
        </div>
    )
}

export default CounterHoc(Counter)
