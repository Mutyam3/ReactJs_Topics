import React from 'react'


function Community(props)
{
    return(
        <div className='smallCompo'>
              
        <h5>Community Details</h5>
        <form >
         <label>
              Community Details <br/>

               <select {...props.st.getFieldProps('PersonalDetails.communityDetails')}
               className = {props.st.touched.PersonalDetails?.communityDetails && props.st.errors.PersonalDetails?.communityDetails && 'ErrorField'}>
                     <option value='select' selected >--Select your Community--</option>
                     <option value="UR(unreserved)">UR(unreserved)</option>
                     <option value="OBC">OBC</option>
                     <option value="ST">ST</option>
                     <option value="SC">SC</option>
               </select>

         </label>
         <div className = 'ErrorClass'>
               <b>{props.st.touched.PersonalDetails?.communityDetails && props.st.errors.PersonalDetails?.communityDetails && props.st.errors.PersonalDetails.communityDetails}</b>
         </div>
         </form>

    </div>
    )
}

export default Community 