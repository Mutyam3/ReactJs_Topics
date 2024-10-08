import React from 'react'

function PostalAddress(props)
{
     
   
      

      function handleAddress(e)
      {
         if(e.target.checked == true)
         {
            props.st.setFieldValue('sameAsPresent', true)
            props.st.setFieldValue('permanentState', props.st.values.presentState )
            props.st.setFieldValue('permanentDistrict', props.st.values.presentDistrict)
            props.st.setFieldValue('permanentAddress', props.st.values.presentAddress)
            props.st.setFieldValue('permanentVillage', props.st.values.presentValue)
            props.st.setFieldValue('permanentPincode', props.st.values.presentPincode)
         }
      }

    return (
        <section className='smallCompo'>

        <h5>Postal Address Details</h5>

      <div className='addressDiv'>
         <div >

            <table border="2">
               <thead >
                   <th>Present Address</th>
               </thead>
               <tbody>
                    <tr>
                        <td>
                            <label>
                                State/UT  <br/> 
                                <input type="text"  {...props.st.getFieldProps('presentState')}/>
                                
                            </label>
                        </td>

                        <td>
                            <label>
                                District  <br/>
                                <input type="text" {...props.st.getFieldProps('presentDistrict')}/>

                            </label>
                        </td>
                    </tr>
                    <tr>
                        <td colSpan="2" >
                            <label>
                                 Address  <br/>
                               <textarea rows="4" cols = "78" {...props.st.getFieldProps('presentAddress')} >
                                     
                               </textarea>
                            </label>
                        </td>
                        </tr>

                      <tr>
                        <td >
                            <label>
                                Village  <br/>
                                <input type = "text" {...props.st.getFieldProps('presentVillage')}/>
                            </label>
                        </td>
                        <td>
                            <label>
                                PinCode  <br/>
                                <input type="text" {...props.st.getFieldProps('presentPincode')}/>
                            </label>
                        </td>
                    </tr>
               </tbody>
            </table>

         </div>

         <div>

         <table border="2">
               <thead >
                   <th>Permanent Address</th>
               </thead>
               <tbody>
                    <tr>
                        <td>
                            <label>
                                State/UT  <br/> 

                                <input type="text" {...props.st.getFieldProps('permanentState')} 
                                value={props.st.values.sameAsPresent ? props.st.values.presentState : props.st.values.permanentState} />
                                
                            </label>
                        </td>

                        <td>
                            <label>
                                District  <br/>

                                <input type="text" {...props.st.getFieldProps('permanentDistrict')}
                                 value={props.st.values.sameAsPresent ? props.st.values.presentDistrict : props.st.values.permanentDistrict}/>

                            </label>
                        </td>
                    </tr>
                    <tr >
                        <td colSpan="2">
                            <label>
                                 Address  <br/>
                               <textarea rows="4" cols = "78" {...props.st.getFieldProps('permanentAddress')}
                               value={props.st.values.sameAsPresent ? props.st.values.presentAddress : props.st.values.permanentAddress}>
                                     
                               </textarea>
                            </label>
                        </td>
                        </tr>

                      <tr>
                        <td>
                            <label>
                                Village  <br/>
                                <input type = "text" {...props.st.getFieldProps('permanentVillage')}
                                value={props.st.values.sameAsPresent ? props.st.values.presentVillage : props.st.values.permanentVillage}/>
                            </label>
                        </td>
                        <td>
                            <label>
                                PinCode  <br/>
                                <input type="text" {...props.st.getFieldProps('permanentPincode')}
                                value={props.st.values.sameAsPresent ? props.st.values.presentPincode : props.st.values.permanentPincode}/>
                            </label>
                        </td>
                    </tr>
               </tbody>
            </table>

         </div>
    </div>

        <div className='tickBox'>
              <input type="checkbox" onChange = {handleAddress} name = "sameAsPresent"/> Tick if Permanent Address is same as Present Address
        </div>
        
      </section>

    
    
    )
}

export default PostalAddress