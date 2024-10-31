import React from 'react'
import { Link } from 'react-router-dom'

function NavBar()
{
    return(
        <section className='navbar'>
               
               <Link to='/counter'>Counter</Link>
               <Link to='/todolist'>Todolist</Link>
               <Link to='/products'>Products</Link>
               <Link to='/cart'>Cart</Link>

        </section>
    )
}

export default NavBar