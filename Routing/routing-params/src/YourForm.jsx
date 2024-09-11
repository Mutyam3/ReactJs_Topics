import React, { forwardRef } from 'react'


   var YourForm = forwardRef((props, refs)=>{

    return (
        <div className="App">

            <h1>Your Form</h1>
           <label>Name : <input type="text" ref={refs} /></label>
        </div>
    )

   })
    

export default YourForm 