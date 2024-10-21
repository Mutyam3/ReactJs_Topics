import React from 'react'


function Community(props)
{
    return(
        <div className='smallCompo'>
              
        <h5>Community Details</h5>
        <form >
         <label>
              Community Details <br/>

               <select {...props.st.getFieldProps('PersonalDetails.communityDetails')}>
                     <option value='select' selected >--Select your Community--</option>
                     <option value="UR(unreserved)">UR(unreserved)</option>
                     <option value="OBC">OBC</option>
                     <option value="ST">ST</option>
                     <option value="SC">SC</option>
               </select>

         </label>
         </form>

    </div>
    )
}

export default Community 