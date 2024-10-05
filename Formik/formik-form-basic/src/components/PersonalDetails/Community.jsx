import React from 'react'


function Community()
{
    return(
        <div className='smallCompo'>
              
        <h5>Community Details</h5>
         <label>
              Community Details <br/>

               <select>
                     <option disabled selected>--Select your Community--</option>
                     <option value="UR(unreserved)">UR(unreserved)</option>
                     <option value="OBC">OBC</option>
                     <option value="ST">ST</option>
                     <option value="SC">SC</option>
               </select>

         </label>

    </div>
    )
}

export default Community 