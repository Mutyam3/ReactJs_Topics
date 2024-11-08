import React from 'react'
import { Outlet } from 'react-router-dom'


function Teams()
{
    return (
        <section className='border border-2 m-4 p-4'>
           
           <Outlet/>

        </section>
    )
}


export default Teams