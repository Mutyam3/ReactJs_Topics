import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { incCount, resetCount } from './counterSlice'
import { decCount } from './counterSlice'
import { resCount } from './counterSlice'

function Counter()
{

    const {count} = useSelector((state=>state.counter))

    const dispatch = useDispatch()

    return (
        <section>
             
             <h1>Counter : {count}</h1>

              <button onClick = {()=>{dispatch(incCount())}}>Increment</button>
              <button onClick = {()=>{dispatch(decCount())}}>Decrement</button>
              <button onClick = {()=>{dispatch(resCount())}}>Reset</button>

        </section>
    )
}

export default Counter 