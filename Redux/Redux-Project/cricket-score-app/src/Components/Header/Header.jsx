import React from 'react'
import { Link } from 'react-router-dom'


function Header()
{
    return (
        <section style={{border:'2px solid black', padding:'0px'}}>
           
           <ul className='Navdiv'>

           <div>
           <img src="https://i.ibb.co/qWVdPJm/mutyam-cricscore.png" alt="mutyam-cricscore" border="0" width = '100px' height = '100px'/>
           </div>
               
               <Link to='/'><li>Home</li></Link>  
               <Link to='/matches'><li>Matches</li></Link>
               <Link to='/match-centers'><li>Teams</li></Link> 
               <Link to='/about-us'><li>About Us</li> </Link>
               <Link to='contact-us'><li>Contact Us</li></Link> 
           </ul>
        </section>
    )
}

export default Header 