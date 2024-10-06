import React from 'react'
import { Link } from 'react-router-dom'

function Footer()
{

    return(
        <div className='FooterMain'>

           <h4 style={{color:'white'}}>Quick Links</h4>

          <section className='FooterSection'>

          <ul type="none" className = "footerDiv">
             <Link to="/home" style={{textDecoration:'none'}}><li><i class="bi bi-house-door-fill"></i> Home</li></Link> 
             <Link to="/AboutUs" style={{textDecoration:'none'}}><li><i class="bi bi-file-earmark-person-fill"></i>About Us</li></Link>
             <Link to="/StudentForm" style={{textDecoration:'none'}}><li><i class="bi bi-file-earmark-fill"></i>Student Form</li></Link> 
             
          </ul>

          <ul type="none" className = "footerDiv" >
             <Link to="/" style={{textDecoration:'none'}}><li><i class="bi bi-file-earmark-post"></i> Recruitment</li></Link> 
             <Link to="/" style={{textDecoration:'none'}}><li><i class="bi bi-facebook"></i>Facebook</li></Link>
             <Link to="/" style={{textDecoration:'none'}}><li><i class="bi bi-twitter"></i>Twitter</li></Link> 
             <Link to="/" style={{textDecoration:'none'}}><li><i class="bi bi-youtube"></i>Youtube</li></Link>
             <Link to="/" style={{textDecoration:'none'}}><li><i class="bi bi-question-circle"></i>FAQs</li></Link> 
          </ul>

          <div>
          
             <h4><i class="bi bi-telephone-fill"></i> &nbsp;CONTACT</h4> 
             <p><i class="bi bi-geo-alt-fill"></i> &nbsp;&nbsp; 
                    First Floor, MPM Building, <br/>
                    Rowdy Industrial Estate,<br/>
                    Shamshabad, Hyderabad 501218 
            </p> 
            <b> <i class="bi bi-telephone-fill" style={{fontSize:"large"}}> &nbsp; </i>010-78338899</b> <br/>
            <b><i class="bi bi-envelope"></i> &nbsp; mutyam@bhargav.ac.in</b>
          </div>


          </section>
           
        </div>
    )
}

export default Footer



