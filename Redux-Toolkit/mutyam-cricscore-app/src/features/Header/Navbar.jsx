import React from 'react'
import { Link } from 'react-router-dom'
import Logo from './../../assets/Mutyam cricscore (1).png'

function Navbar()
{
    return (
        <section className=' box d-flex justify-content-evenly align-items-center marginMania p-2 border border-light  rounded'> 

               <Link to='/home' ><img src= {Logo} width='200px' height='100px'/></Link>
               <Link to='/matches' className='navbartext'><li className='m-2 p-2' type='none'>Matches</li></Link>
               <Link to='/teams' className='navbartext'><li className='m-2 p-2' type='none'>Teams</li></Link>
               <Link to='/players' className='navbartext'><li className='m-2 p-2' type='none'>Players</li></Link>
               <Link to='/products' className='navbartext'><li className='m-2 p-2' type='none'>Products</li></Link>

               {/* <i class="bi bi-moon fs-3"></i> */}

               
        </section>
    )
}

export default Navbar