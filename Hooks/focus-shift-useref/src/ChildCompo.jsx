import React from 'react'

function Child(props)
{
    return (
        <div>
          <label>Phone Number : <input type="text" ref={props.ref3}  onKeyUp={props.phoneFn}/></label><br/> 
          <label>City : <input type="text" ref={props.ref4}  onKeyUp={props.cityFn}/></label><br/>
          <button type="button" ref={props.ref5}>Submit</button>
        </div>
    )
}

export default Child