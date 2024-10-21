import React from 'react'
import { useParams } from 'react-router-dom'

function Personal(props)
{
      
     // console.log(props)
     
     //  console.log(props.st.values)
     
      
    return (
        <section className='smallCompo'>
        <h5>Personal Details</h5>

        <form onSubmit={props.st.handleSubmit}>

        <table  width ="100%">
              <tbody>
                   <tr className='smallCompo_Tab'>
                      <td className='smallCompo_Tab'>
                          <label>Country of Nationality <br/>
                                              <select  {...props.st.getFieldProps('PersonalDetails.nationality')} defaultValue='select'>
                                                  <option value='select' selected >---Select Your Nationality---</option>
                                                  <option value = "India">India</option>
                                                  <option value = "Germany">Germany</option>
                                                  <option value = "Usa">USA</option>
                                                  <option value = "canada">Canada</option>
                     
                                           </select>
                          </label> 
                      </td>
                      <td className='smallCompo_Tab'>
                           <label>Date of Birth as recorded in Matriculation <br/>(10th class) Marks list/certificate <br/> 
                                  <input type="date" {...props.st.getFieldProps('PersonalDetails.dateOfBirth')}  />
                           </label> 
                      </td>
                      <td className='smallCompo_Tab'>
                          <label>Age as on 01.01.2025 <br/> 
                                 <input type="text" {...props.st.getFieldProps('PersonalDetails.age')} />
                          </label>
                      </td>
                   </tr>

                   <tr className='smallCompo_Tab'>
                       <td className='smallCompo_Tab'>
                             <label>FullName as recorded in Matriculation <br/> (10th class)  Marks list/certificate <br/> 
                                   <input type="text" {...props.st.getFieldProps('PersonalDetails.fullName')}/>
                             </label>
                       </td>
                     
                       <td className='smallCompo_Tab'>
                               <label>Father's Name as recorded in Matriculation <br/> (10th class)  Marks list/certificate <br/>
                                            <input type='text' {...props.st.getFieldProps('PersonalDetails.fatherName')}/>
                                </label>   
                       </td>
                       <td className='smallCompo_Tab'>
                                <label>Mother's Name as recorded in Matriculation <br/> (10th class)  Marks list/certificate <br/>
                                             <input type="text"  {...props.st.getFieldProps('PersonalDetails.motherName')}/>
                                </label>
                       </td>
                   </tr>

                   <tr className='smallCompo_Tab'>
                        <td className='smallCompo_Tab'>
                                <label>
                                    Gender :  <br/>
                                       <select  {...props.st.getFieldProps('PersonalDetails.gender')}>
                                               <option value='select' selected>--Select your gender--</option>
                                               <option value="male">Male</option>
                                               <option value="female">Female</option>
                                               <option value="others">Others</option>
                                       </select>
                                </label>
                        </td>
                        <td className='smallCompo_Tab'>
                                  <label>
                                        Email Address : <br/>
                                           <input type="text" {...props.st.getFieldProps('PersonalDetails.email')}/>
                                  </label>
                        </td>
                        <td className='smallCompo_Tab'>
                                 <label>
                                        Mobile Number : <br/>
                                             <input type="text" {...props.st.getFieldProps('PersonalDetails.mobileNumber')}/>
                                 </label>
                        </td>
                       
                   </tr>

                   <tr className='smallCompo_Tab'>
                          <td className='smallCompo_Tab'>
                                <label>
                                      Marital Status  <br/> 
                                             <select  {...props.st.getFieldProps('PersonalDetails.maritalStatus')}>
                                                  <option value='select' selected >--Select Marital Status--</option>
                                                  <option value="married">Married</option>
                                                  <option value="unMarried">UnMarried</option>
                                             </select>
                                </label>
                          </td>

                          <td className='smallCompo_Tab'>
                               <label>
                                      Religion <br/>
                                            <select  {...props.st.getFieldProps('PersonalDetails.religion')}>
                                                  <option value='select' selected >---Select Religion ---</option>
                                                  <option value = "hindu">Hindu</option>
                                                  <option value = "christian">Christian</option>
                                                  <option value = "muslim">Muslim</option>
                                            </select>
                               </label>
                          </td>
                          <td className='smallCompo_Tab'>
                               <label>
                                      Choice of Language for Examination <br/>
                                            <select {...props.st.getFieldProps('PersonalDetails.choiceOfLanguage')}>
                                                 <option value='select' selected >--Select a language--</option>
                                                 <option value="Telugu">Telugu</option>
                                                 <option value="English">English</option>
                                                 <option value="Hindi">Hindi</option>
                                                 <option value="Urdu">Urdu</option>
                                                 <option value="Kannada">Kannada</option>
                                                 <option value="Tamil">Tamil</option>
                                                 <option value="Malyalam">Malyalam</option>
                                            </select>
                               </label>
                          </td>
 
                   </tr>

                   <tr className='smallCompo_Tab'>
                          <td className='smallCompo_Tab'>
                               <label>
                                      Permanent Visible Mark of Identification 1 <br/>
                                      <input type="text" {...props.st.getFieldProps('PersonalDetails.permanentMarkOfIdentification1')}/> 

                               </label>
                          </td>
                          <td className='smallCompo_Tab'>
                               <label>
                                      Permanent Visible Mark of Identification 2 <br/>
                                      <input type="text"  {...props.st.getFieldProps('PersonalDetails.permanentMarkOfIdentification2')}/> 

                               </label>
                          </td>
                   </tr>
              </tbody>
        </table>
        </form>
      </section>

    )
}

export default Personal 