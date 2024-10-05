import React from 'react'
import PhotoDoc from './PhotoDoc'
import SignDoc from './SignDoc'
import { Link } from 'react-router-dom'

function UploadProfileDoc()
{

    function save()
    {
        
    }
    return(
        <div >
            <h5>Upload your scanned photo and signature</h5>

            <PhotoDoc/>
            <SignDoc/>

            <div className='Btns'>
                 <button onClick = {save} style={{backgroundColor:'green',color:'white'}}>SAVE</button>
                 <Link to="/studentForm/Preview" style={{textDecoration:'none',color:'white'}}>
                 <button style={{backgroundColor:'crimson', color: 'white'}}>NEXT</button></Link> 
            </div>
             
        
        </div>
    )
}

export default UploadProfileDoc