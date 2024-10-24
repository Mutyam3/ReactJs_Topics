import React from 'react'
import { Link } from 'react-router-dom'


function Header()
{
    return (
        <section className='App'>
            <div>Logo</div>
           <ul className='Navdiv' >
               
               <Link to='/'><li>Home</li></Link>  
               <Link to='/matches'><li>Matches</li></Link>
               <Link to='/score-board'><li>ScoreBoard</li></Link>
               <Link to='/match-centers'><li>Teams</li></Link> 
               <Link to='/about-us'><li>About Us</li> </Link>
               <Link to='contact-us'><li>Contact Us</li></Link> 
           </ul>
        </section>
    )
}

export default Header 