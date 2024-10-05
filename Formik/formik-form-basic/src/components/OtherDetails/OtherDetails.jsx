import React from 'react'
import CategoryDetails from './CategoryDetails'
import EBCDetails from './EBCDetails'
import BankDetails from './BankDetails'
import { Link } from 'react-router-dom'

function OtherDetails()
{

    function save()
    {
        
    }
    return (
        <div>
           
              
              <CategoryDetails/>
              <EBCDetails/>
              <BankDetails/>

            <div className='Btns'>
                 <button onClick = {save} style={{backgroundColor:'green',color:'white'}}>SAVE</button>
                 <Link to="/studentForm/Educational-Qualification" style={{textDecoration:'none',color:'white'}}>
                 <button style={{backgroundColor:'crimson', color: 'white'}}>NEXT</button>
                 </Link>
            </div>
            

        </div>
    )
}

export default OtherDetails