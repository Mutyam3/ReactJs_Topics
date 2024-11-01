import React from 'react'
import { Link } from 'react-router-dom'


function Navbar()
{
    return(
        <section style={{display: 'flex', justifyContent:'space-evenly'}}>

            <Link to='/todolist'>Todolist</Link>
            <Link to='/products'>Products</Link>
        </section>
    )
}

export default Navbar