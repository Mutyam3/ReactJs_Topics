import React, { forwardRef } from 'react'

    const YourForm = forwardRef((props,refer)=>
    {
         
        console.log("Namaste Anna")
          
      return (
        <div className='App' style={{borderColor:"red"}}>
            <h2>Your Form</h2>
           <label> Nee peru cheppu: <input type="text"  ref = {refer}/></label>
        </div>
       )
   })

   export default React.memo(YourForm)

   // props lo em changes lekapothe React.memo anedi child component ni rerender cheyakunda 
   // aputhundi only first time render aithadi anthe