import React from 'react'
import { userDetails } from './data'
import Child from './ChildComp'


function Parent()
{
    return (
        <div>
           {
               userDetails.map((el)=>{
                return (
                    <Child x = {[{...el}]}></Child>
                )
               })
           }
        </div>
    )
}

export default Parent 
