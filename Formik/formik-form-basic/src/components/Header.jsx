import React from 'react'
import {Link} from 'react-router-dom'


function Header()
{
    return(
        <div className='header'>

          <div style={{marginLeft :"70px"}}>
               <img src="https://i.ibb.co/LxzsMFn/logoformta.png" alt="logoformta" border="0" width='120px'/>
          </div>
        
        

          <ul type="none" className = "navDiv">
             <Link to="/home" style={{textDecoration:'none'}}><li>Home</li></Link> 
             <Link to="/AboutUs" style={{textDecoration:'none'}}><li>About Us</li></Link>
             <Link to="/StudentForm" style={{textDecoration:'none'}}><li>Student Form</li></Link> 
             <Link to="/ContactUs" style={{textDecoration:'none'}}><li>Contact us</li></Link> 
          </ul>

        </div>
    )
}

export default Header 
