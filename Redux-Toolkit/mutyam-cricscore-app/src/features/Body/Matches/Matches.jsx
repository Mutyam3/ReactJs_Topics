import React from 'react'
import { Link, Outlet } from 'react-router-dom'

function Matches()
{
    return(
        <section className='border border-2 m-4 p-4'>
             
            

                 <Outlet/>
            

        </section>
    )
}

export default Matches

// className='m-1 p-5 border border-2'