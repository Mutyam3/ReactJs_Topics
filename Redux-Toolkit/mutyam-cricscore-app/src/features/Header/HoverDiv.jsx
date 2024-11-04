import React from 'react'
import {Link} from 'react-router-dom'


function HoverDiv({hoverVar})
{
    console.log(hoverVar)
    return(
        <section className='hoverDivLi rounded'>
            <Link to={`${hoverVar.dashboardPath}`} className='navbartext text-dark'><li className='p-3 m-2 border border-2 rounded'>{hoverVar.dashboard}</li></Link>
            <Link to={`${hoverVar.customPath}`} className='navbartext text-dark'><li className='p-3 m-2 border border-2 rounded'>{hoverVar.custom}</li></Link>
        </section>
    )
}

export default HoverDiv