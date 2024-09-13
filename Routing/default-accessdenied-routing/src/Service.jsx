import React from 'react'
import { Link, Outlet } from 'react-router-dom'


function Service()
{
    return (
        <div className="App">
            <h1>Service istham</h1>

            <ol>
                <li><Link to='/service/consultation'>Consultation</Link></li>
                <li><Link to='/service/training'>Training</Link></li>
                <li><Link to='/service/seo-and-digital-marketing'>SEO and Digital Marketing</Link></li>
            </ol>

            <Outlet></Outlet>
        </div>
    )
}

export default Service 