import React from 'react'

function Main(props)
{
       return(
           <div className="AppBox">
                 <h1>{props.y}</h1>
               <ul>
                   {
                      props.x.map((el)=>{
                            return <li>{el}</li>
                      })
                   }
               </ul>
           </div>
       )
}

export default Main