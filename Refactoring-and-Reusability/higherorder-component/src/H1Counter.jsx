import React from 'react'
import CounterHoc from './CounterHoc'

function H1Counter(props)
{

    return (
        <div className='App'>
            <h1>H1Count : {props.count}</h1>
            <button onClick={props.inc}>Increment</button>
            <button onClick={props.dec}>Decrement</button>
        </div>
    )
}

export default CounterHoc(H1Counter)