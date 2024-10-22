import React from 'react'
import { useParams } from 'react-router-dom'
import { useFormContext } from '../../FormContext'

function Personal(props)
{
      
  
     function handleDate(e)
     {
          // console.log(e.target.value)
          props.st.setFieldValue('PersonalDetails.dateOfBirth', e.target.value)

          const naaDate =   e.target.value
          const BirthDate =  new Date(naaDate)
          const currentDate =  new Date()
          const naaAge = parseInt((currentDate.getTime() - BirthDate.getTime() )/(1000*60*60*24*365))

          props.st.setFieldValue('PersonalDetails.age', (naaAge + '  years'))
     }
     
   console.log(props.st)
   console.log(props.st.errors.PersonalDetails)
   

    return (
        <section className='smallCompo'>
        <h5>Personal Details</h5>

        <form onSubmit={props.st.handleSubmit}>

        <table  width ="100%">
              <tbody>
                   <tr className='smallCompo_Tab'>
                      <td className='smallCompo_Tab'>
                          <label>Country of Nationality <br/>
                                              <select  {...props.st.getFieldProps('PersonalDetails.nationality')}  
                                   className={props.st.touched.PersonalDetails?.nationality && props.st.errors.PersonalDetails?.nationality? 'ErrorField' : 'NoErrorField'}>
                                                  <option value='select' selected >---Select Your Nationality---</option>
                                                  <option value = "India">India</option>
                                                  <option value = "Germany">Germany</option>
                                                  <option value = "Usa">USA</option>
                                                  <option value = "canada">Canada</option>
                                              </select>
                          </label> 

                          <div className='ErrorClass'>
                            
                              <b>{ props.st.touched.PersonalDetails?.nationality && props.st.errors.PersonalDetails?.nationality && props.st.errors.PersonalDetails.nationality}</b>
                            
                         
                          </div>
                      </td>
                      <td className='smallCompo_Tab'>
                           <label>Date of Birth as recorded in Matriculation <br/>(10th class) Marks list/certificate <br/> 
                                  <input type="date" {...props.st.getFieldProps('PersonalDetails.dateOfBirth')} onChange= {handleDate}
                                   className={props.st.touched.PersonalDetails?.dateOfBirth && props.st.errors.PersonalDetails?.dateOfBirth ? 'ErrorField' : 'NoErrorField'} />
                           </label> 

                           <div className='ErrorClass'>
                           <b>{ props.st.touched.PersonalDetails?.dateOfBirth && props.st.errors.PersonalDetails?.dateOfBirth && props.st.errors.PersonalDetails.dateOfBirth}</b>
                            
                           </div>

                      </td>
                      <td className='smallCompo_Tab'>
                          <label>Age as on 01.01.2025 <br/> 
                                 <input type="text"  disabled {...props.st.getFieldProps('PersonalDetails.age')} />
                          </label>
                      </td>
                   </tr>

                   <tr className='smallCompo_Tab'>
                       <td className='smallCompo_Tab'>
                             <label>FullName as recorded in Matriculation <br/> (10th class)  Marks list/certificate <br/> 
                                   <input type="text" {...props.st.getFieldProps('PersonalDetails.fullName')}/>
                             </label>

                           <div className='ErrorClass'>
                           <b>{ props.st.touched.PersonalDetails?.fullName && props.st.errors.PersonalDetails?.fullName && props.st.errors.PersonalDetails.fullName}</b>
                            
                               
                           </div>
                       </td>
                     
                       <td className='smallCompo_Tab'>
                               <label>Father's Name as recorded in Matriculation <br/> (10th class)  Marks list/certificate <br/>
                                            <input type='text' {...props.st.getFieldProps('PersonalDetails.fatherName')}
                                            className={props.st.touched.PersonalDetails?.fatherName && props.st.errors.PersonalDetails?.fatherName ? 'ErrorField' : 'NoErrorField'}/>
                                            
                               </label> 

                           <div className='ErrorClass'>
                              <b>{ props.st.touched.PersonalDetails?.fatherName && props.st.errors.PersonalDetails?.fatherName && props.st.errors.PersonalDetails.fatherName}</b>
                           </div>  
                       </td>
                       <td className='smallCompo_Tab'>
                                <label>Mother's Name as recorded in Matriculation <br/> (10th class)  Marks list/certificate <br/>
                                             <input type="text"  {...props.st.getFieldProps('PersonalDetails.motherName')}
                                             className={props.st.touched.PersonalDetails?.motherName && props.st.errors.PersonalDetails?.motherName ? 'ErrorField' : 'NoErrorField'}/>
                                </label>

                           <div className='ErrorClass'>
                                 <b>{ props.st.touched.PersonalDetails?.motherName && props.st.errors.PersonalDetails?.motherName && props.st.errors.PersonalDetails.motherName}</b>
                           </div>
                       </td>
                   </tr>

                   <tr className='smallCompo_Tab'>
                        <td className='smallCompo_Tab'>
                                <label>
                                    Gender :  <br/>
                                       <select  {...props.st.getFieldProps('PersonalDetails.gender')} 
                                       className = {props.st.touched.PersonalDetails?.gender && props.st.errors.PersonalDetails?.gender  ? 'ErrorField' : 'NoErrorField'}>
                                               <option value='select' selected>--Select your gender--</option>
                                               <option value="male">Male</option>
                                               <option value="female">Female</option>
                                               <option value="others">Others</option>
                                       </select>
                                </label>

                           <div className='ErrorClass'>
                                <b>{ props.st.touched.PersonalDetails?.gender && props.st.errors.PersonalDetails?.gender && props.st.errors.PersonalDetails.gender}</b>
                           </div>

                        </td>
                        <td className='smallCompo_Tab'>
                                  <label>
                                        Email Address : <br/>
                                           <input type="email" {...props.st.getFieldProps('PersonalDetails.email')}
                                           className={props.st.touched.PersonalDetails?.email && props.st.errors.PersonalDetails?.email ? 'ErrorField' : 'NoErrorField'}/>
                                  </label>

                           <div className='ErrorClass'>
                                <b>{ props.st.touched.PersonalDetails?.email && props.st.errors.PersonalDetails?.email && props.st.errors.PersonalDetails.email}</b>
                           </div>

                        </td>
                        <td className='smallCompo_Tab'>
                                 <label>
                                        Mobile Number : <br/>
                                             <input type="text" {...props.st.getFieldProps('PersonalDetails.mobileNumber')}
                                             className = {props.st.touched.PersonalDetails?.mobileNumber && props.st.errors.PersonalDetails?.mobileNumber ? 'ErrorField' : 'NoErrorField'}/>
                                 </label>

                           <div className='ErrorClass'>
                                <b>{ props.st.touched.PersonalDetails?.mobileNumber && props.st.errors.PersonalDetails?.mobileNumber && props.st.errors.PersonalDetails.mobileNumber}</b>
                           </div>
                        </td>
                       
                   </tr>

                   <tr className='smallCompo_Tab'>
                          <td className='smallCompo_Tab'>
                                <label>
                                      Marital Status  <br/> 
                                             <select  {...props.st.getFieldProps('PersonalDetails.maritalStatus')} 
                                             className={props.st.touched.PersonalDetails?.maritalStatus && props.st.errors.PersonalDetails?.maritalStatus}>
                                                  <option value='select' selected >--Select Marital Status--</option>
                                                  <option value="married">Married</option>
                                                  <option value="unMarried">UnMarried</option>
                                             </select>
                                </label>
                           <div className='ErrorClass'>
                              <b>{ props.st.touched.PersonalDetails?.maritalStatus && props.st.errors.PersonalDetails?.maritalStatus && props.st.errors.PersonalDetails.maritalStatus}</b>
                           </div>
                          </td>

                          <td className='smallCompo_Tab'>
                               <label>
                                      Religion <br/>
                                            <select  {...props.st.getFieldProps('PersonalDetails.religion')}
                                            className={props.st.touched.PersonalDetails?.religion && props.st.errors.PersonalDetails?.religion}>
                                                  <option value='select' selected >---Select Religion ---</option>
                                                  <option value = "hindu">Hindu</option>
                                                  <option value = "christian">Christian</option>
                                                  <option value = "muslim">Muslim</option>
                                            </select>
                               </label>
                            <div className='ErrorClass'>
                                  <b>{ props.st.touched.PersonalDetails?.religion && props.st.errors.PersonalDetails?.religion && props.st.errors.PersonalDetails.religion}</b>
                            </div>
                           
                          </td>
                          <td className='smallCompo_Tab'>
                               <label>
                                      Choice of Language for Examination <br/>
                                            <select {...props.st.getFieldProps('PersonalDetails.choiceOfLanguage')}
                                            className={props.st.touched.PersonalDetails?.choiceOfLanguage && props.st.errors.PersonalDetails?.choiceOfLanguage ? 'ErrorField' : 'NoErrorField'}>
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

                             <div className='ErrorClass'>
                               <b>{ props.st.touched.PersonalDetails?.choiceOfLanguage && props.st.errors.PersonalDetails?.choiceOfLanguage && props.st.errors.PersonalDetails.choiceOfLanguage}</b>
                               
                             </div>
                          </td>
 
                   </tr>

                   <tr className='smallCompo_Tab'>
                          <td className='smallCompo_Tab'>
                               <label>
                                      Permanent Visible Mark of Identification 1 <br/>
                                      <input type="text" {...props.st.getFieldProps('PersonalDetails.permanentMarkOfIdentification1')}
                                      
                               className={props.st.touched.PersonalDetails?.permanentMarkOfIdentification1 && props.st.errors.PersonalDetails?.permanentMarkOfIdentification1 ? 'ErrorField' : 'NoErrorField'}/> 
                               
                               </label>

                             <div className='ErrorClass'>
                             <b>{ props.st.touched.PersonalDetails?.permanentMarkOfIdentification1 && props.st.errors.PersonalDetails?.permanentMarkOfIdentification1 && props.st.errors.PersonalDetails.permanentMarkOfIdentification1}</b>
                             </div>
                          </td>
                          <td className='smallCompo_Tab'>
                               <label>
                                      Permanent Visible Mark of Identification 2 <br/>
                                      <input type="text"  {...props.st.getFieldProps('PersonalDetails.permanentMarkOfIdentification2')}
                                        className={props.st.touched.PersonalDetails?.permanentMarkOfIdentification2 && props.st.errors.PersonalDetails?.permanentMarkOfIdentification2 ? 'ErrorField' : 'NoErrorField'}/> 
                                     
                               </label>

                             <div className='ErrorClass'>
                             <b>{ props.st.touched.PersonalDetails?.permanentMarkOfIdentification2 && props.st.errors.PersonalDetails?.permanentMarkOfIdentification2 && props.st.errors.PersonalDetails.permanentMarkOfIdentification2}</b>
                             </div>
                          </td>
                   </tr>
              </tbody>
        </table>
        </form>
      </section>

    )
}

export default Personal 