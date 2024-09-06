import React from 'react'
import Child from './ChildCompo'

   function Parent()
   {

         const ref1 = React.useRef()
         const ref2 = React.useRef()

         React.useEffect(()=>{

                ref1.current.focus()

         }, []) // execute only once at the time of mounting [Note : jsx render aina tarvathe]
           
         function txt(e)
         {
              if(e.key=='Enter')
              {
                  ref2.current.focus()
              }
         }

       return (
           <div>
               <h1>Parent Component</h1>
               <input type="text" ref={ref1} onKeyUp={txt}/>
               <Child ref={ref2}></Child>
           </div>
       )
   }

export default Parent 