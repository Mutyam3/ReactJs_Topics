import React from 'react'
import {connect} from 'react-redux'
import { decrement, increment, reset } from '../store/reducers/actions'
import { selectCounter } from '../store/reducers/Counter.reducer'


function Counter(props)
{
    console.log(props)

    return (
        <div className='App'>
            
            <h1>Count : {props.count}</h1>

            <button onClick = {props.inc}>Increment</button>
            <button onClick = {props.dec}>Decrement</button>
            <button onClick = {props.res}>Reset</button>

        </div>
    )
}

function mapStateToProps(state)
{     
    //    return state.counterReducer
      return selectCounter(state) 
}

function mapDispatchToProps(dispatch)
{
      return { // event handlers manam vatini component lo event listener ki bind cheyali 
           inc : ()=>{dispatch(increment())},
           dec : ()=>{dispatch(decrement())},
           res : ()=>{dispatch(reset())}
      }
}
export default connect(mapStateToProps,mapDispatchToProps)(Counter)

// ikkada connect method ki two functions ni pass chestam
// oka function definition ki state pass aithadi ah state dantlo counter ne return chestam 
// inko function definition ki dipsatch pass aithadi dantlo manam event handlers ni define chestam oka object lo property and value laaga 
// Selectors kooda untai manaki paina mapStateToProps lo direct ga return state.counterReducer icham 
// select vadi state nunchi only count ne ivvu ani cheptha daniki manam counterreducer lo function rasukoni dantlo return state.counter ichi
// mana component lo mapstate function lo return function select ni petti daniki state ni pass chestam 



// Connect() method em chestadi ante store nunchi store techukuntadi 
// [store uh store naku motham store ni ivvu ani aduguthadi connect ]
// finally vachina store counter ki  props dwara pass avuthadi 
