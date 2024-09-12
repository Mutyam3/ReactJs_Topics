import React from 'react'
import { useParams, useLocation } from 'react-router-dom'


function ServiceDetails()
{
   
    var x = useParams()

    var p = useLocation()
       

    console.log(p.state)

    return (
        <div className='App'>
           <h1>{p.state.title}</h1>
           <ol>
              {
                 p.state.items.map((el)=>{
                       return (
                        <li>{el}</li>
                       )
                 })
              }
           </ol>
        </div>
    )
}

export  default ServiceDetails