import React from 'react'

function PostalAddress()
{
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
                                <input type="text"/>
                                
                            </label>
                        </td>

                        <td>
                            <label>
                                District  <br/>
                                <input type="text"/>

                            </label>
                        </td>
                    </tr>
                    <tr>
                        <td colSpan="2" >
                            <label>
                                 Address  <br/>
                               <textarea rows="4" cols = "78" >
                                     
                               </textarea>
                            </label>
                        </td>
                        </tr>

                      <tr>
                        <td >
                            <label>
                                Village  <br/>
                                <input type = "text"/>
                            </label>
                        </td>
                        <td>
                            <label>
                                PinCode  <br/>
                                <input type="text"/>
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
                                <input type="text"/>
                                
                            </label>
                        </td>

                        <td>
                            <label>
                                District  <br/>
                                <input type="text"/>

                            </label>
                        </td>
                    </tr>
                    <tr >
                        <td colSpan="2">
                            <label>
                                 Address  <br/>
                               <textarea rows="4" cols = "78">
                                     
                               </textarea>
                            </label>
                        </td>
                        </tr>

                      <tr>
                        <td>
                            <label>
                                Village  <br/>
                                <input type = "text"/>
                            </label>
                        </td>
                        <td>
                            <label>
                                PinCode  <br/>
                                <input type="text"/>
                            </label>
                        </td>
                    </tr>
               </tbody>
            </table>

         </div>
    </div>

        <div className='tickBox'>
              <input type="checkbox"/> Tick if Permanent Address is same as Present Address
        </div>
        
      </section>

    
    
    )
}

export default PostalAddress