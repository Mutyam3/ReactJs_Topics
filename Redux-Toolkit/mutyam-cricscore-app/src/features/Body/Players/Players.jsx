import React from 'react'
import { Outlet } from 'react-router-dom'


function Players()
{
    return(
        <section className='border border-2 m-4 p-4'>
           
           <Outlet/>

        </section>
    )
}

export default Players