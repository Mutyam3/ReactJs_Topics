import React from 'react'
import { useParams } from 'react-router-dom'

function Personal(props)
{
      
     console.log(props)
     

     
      
    return (
        <section className='smallCompo'>
        <h5>Personal Details</h5>
        <table  width ="100%">
              <tbody>
                   <tr>
                      <td>
                          <label>Country of Nationality <br/>
                                              <select >
                                                  <option disabled selected>---Select Your Nationality---</option>
                                                  <option value = "India">India</option>
                                                  <option value = "Germany">Germany</option>
                                                  <option value = "Usa">USA</option>
                                                  <option value = "canada">Canada</option>
                     
                                           </select>
                          </label> 
                      </td>
                      <td>
                           <label>Date of Birth as recorded in Matriculation <br/>(10th class) Marks list/certificate <br/> 
                                  <input type="text"  />
                           </label> 
                      </td>
                      <td>
                          <label>Age as on 01.01.2025 <br/> 
                                 <input type="text" />
                          </label>
                      </td>
                   </tr>

                   <tr>
                       <td>
                             <label>FullName as recorded in Matriculation <br/> (10th class)  Marks list/certificate <br/> 
                                             <input type="text"/>
                             </label>
                       </td>
                     
                       <td>
                               <label>Father's Name as recorded in Matriculation <br/> (10th class)  Marks list/certificate <br/>
                                            <input type='text'/>
                                </label>   
                       </td>
                       <td>
                                <label>Mother's Name as recorded in Matriculation <br/> (10th class)  Marks list/certificate <br/>
                                             <input type="text"/>
                                </label>
                       </td>
                   </tr>

                   <tr>
                        <td>
                                <label>
                                    Gender :  <br/>
                                       <select >
                                               <option disabled selected>--Select your gender--</option>
                                               <option value="male">Male</option>
                                               <option value="female">Female</option>
                                               <option value="others">Others</option>
                                       </select>
                                </label>
                        </td>
                        <td>
                                  <label>
                                        Email Address : <br/>
                                           <input type="text"/>
                                  </label>
                        </td>
                        <td>
                                 <label>
                                        Mobile Number : <br/>
                                             <input type="text"/>
                                 </label>
                        </td>
                       
                   </tr>

                   <tr>
                          <td>
                                <label>
                                      Marital Status  <br/> 
                                             <select>
                                                  <option>--Select Marital Status--</option>
                                                  <option value="married">Married</option>
                                                  <option value="unMarried">UnMarried</option>
                                             </select>
                                </label>
                          </td>

                          <td>
                               <label>
                                      Religion <br/>
                                            <select>
                                                  <option>---Select Religion ---</option>
                                                  <option value = "hindu">Hindu</option>
                                                  <option value = "christian">Christian</option>
                                                  <option value = "muslim">Muslim</option>
                                            </select>
                               </label>
                          </td>
                          <td>
                               <label>
                                      Choice of Language for Examination <br/>
                                            <select>
                                                 <option>--Select a language--</option>
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

                   <tr>
                          <td>
                               <label>
                                      Permanent Visible Mark of Identification 1 <br/>
                                      <input type="text"/> 

                               </label>
                          </td>
                          <td>
                               <label>
                                      Permanent Visible Mark of Identification 2 <br/>
                                      <input type="text"/> 

                               </label>
                          </td>
                   </tr>
              </tbody>
        </table>
      </section>

    )
}

export default Personal 