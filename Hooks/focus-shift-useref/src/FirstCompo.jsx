import React from 'react'
import { useRef } from 'react'
import Child from './ChildCompo'

function First()
{
   const ref1 = React.useRef()
   const ref2 = React.useRef()
   const ref3 = React.useRef()
   const ref4 = React.useRef()
   const ref5 = React.useRef()

//    const [firstName, setFirstName] = React.useState('')
//    const [lastName, setLastName] = React.useState('')
//    const [phoneNumber, setPhoneNumber] = React.useState('')
//    const [city, setCity] = React.useState('')

   React.useEffect(()=>{

       ref1.current.focus()

   }, []) // with empty dependency use cheste only mounting 
   //time lo only once jaruguthundi

   
   function fName(e)
   {
       if(e.key==='Enter')
        {
            ref2.current.focus()
        }
   }

   function lName(e)
   {
       if(e.key=='Enter')
       {
          ref3.current.focus()
       }
   }

   function phoneFn(e)
   {
      if(e.key=='Enter')
      {
        console.log(e.target.value)
        ref4.current.focus()
      }
   }

   function cityFn(e)
   {
       
       if(e.key=='Enter')
       {
         
          ref5.current.focus()
         
          
       }
   }

   
    return (
        <div>
          <label> FirstName: <input type="text"  ref={ref1} onKeyUp={fName}/></label><br/>
          <label > LastName: <input type="text"  ref={ref2} onKeyUp = {lName}/></label><br/>
          <Child ref3= {ref3} ref4={ref4} ref5={ref5} cityFn={cityFn} phoneFn={phoneFn}></Child>
        </div>
    )
}

export default First 