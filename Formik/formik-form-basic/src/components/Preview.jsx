import React from 'react'
import { useFormContext } from '../FormContext'
import axios from 'axios'
import { Navigate, useNavigate } from 'react-router-dom'
import SuccessDisplay from './SuccessDisplay'

function Preview()
{

    const {formData,ResetFormData} = useFormContext()
    const [formDataTable, setFormDataTable] = React.useState([{...formData}])
    const [dis, setDis] = React.useState(false)
     console.log(formData)
    // React.useState(()=>{

    //     const manaMap = new Map(Object.entries(formData)) 
    //     console.log('ManaMap :: ',manaMap)
    //     setFormDataTable([...manaMap])

    // },[])

    const navigator = useNavigate()

    function formSubmit(manaFinalData)
    {
           const finalData = 
           {
              "user" : {... manaFinalData} 
           }

     
          axios.post('http://localhost:4000/users', finalData).then((res)=>{

                     console.log('After Post :: ', res.data)
                     ResetFormData()
                     setDis(true)

                     setTimeout(()=>{
                        navigator('/studentForm/personal-Details')
                     }, 2000)
                     
                    

          }).catch((err)=>{

                   console.log(err)

          })

         
    }


    return (
        <div className='Preview'>
             <h3 style={{textAlign : "center"}}>Preview</h3>

             <table border="2px">
                  <thead >
                      <tr align = 'center'>
                        <th colSpan='7'> <h5 style={{fontWeight:'bold'}}>Mutyam Board of Competitive Examinations</h5>  <p> [ One Application For All Competitive and Government Exams ]</p></th>
                      </tr>
                      <tr align='center'>
                        <th colSpan='7'>Application Form - 2024</th>
                      </tr>
                  </thead>
                  <tbody>

                       {
                        
                           formDataTable.map((el)=>{
                            return (
                                <>
                                 <tr>
                                    <td colSpan='7'> <b>Choosen Exam</b> </td>
                                 </tr>
                                 <tr>
                                    <td colSpan='1'>Selected Exam</td>
                                    <td colSpan='6'>{el.SelectedExam.selected_Exam}</td>
                                 </tr>
                                <tr>
                                    <td colSpan='7'>Personal Details</td>    
                                </tr>
                                <tr>
                                    
                                     <td colspan='1'>Full Name of the Applicant :  </td> 
                                     <td colSpan='4'>{el.PersonalDetails.fullName}</td>

                                     <td rowSpan='6' colSpan='4'>
                                        <img src =  {el.UploadFileDetails.photo } width = '180' height='180'/> <br/>
                                        <img src= {el.UploadFileDetails.signature} width = '180' height='80'/>
                                       
                                     </td>
                                     
                                </tr>

                                <tr>
                                    <td>Father's Name  </td>
                                    <td colSpan='4'> {el.PersonalDetails.fatherName}</td>
                                    
                                </tr>

                                <tr>
                                    <td>Mother's Name  </td> 
                                    <td colSpan='4'> {el.PersonalDetails.motherName}</td>
                                    
                                </tr>

                                <tr>
                                    <td >Date Of Birth  </td>
                                    <td >{el.PersonalDetails.dateOfBirth}</td>

                                    <td >Age </td>
                                    <td colspan='2'>{el.PersonalDetails.age}</td>
                                    
                                </tr>
                                <tr>
                                    <td>Nationality  </td>
                                    <td colSpan='4'>{el.PersonalDetails.nationality}</td>
                                   
                                </tr>

                                <tr>
                                    <td >Mobile Number  </td>
                                    <td colSpan='4'>{el.PersonalDetails.mobileNumber}</td>
                                </tr>

                                <tr>
                                    <td >Gender : </td>
                                    <td colSpan='3'>{el.PersonalDetails.gender}</td>
                                    <td >Email Address : </td>
                                    <td colSpan='3'>{el.PersonalDetails.email}</td>
                                </tr>
  

                                <tr>
                                    <td>Marital Status : </td>
                                    <td colspan = '3'>{el.PersonalDetails.maritalStatus}</td>

                                    <td>Religion : </td>
                                    <td colspan = '3'>{el.PersonalDetails.religion}</td>
                                </tr>


                                <tr>
                                    <td>Choice Of Language for Examination </td>
                                    <td colspan = '3'> {el.PersonalDetails.choiceOfLanguage}</td>

                                    <td>Community Details  </td>
                                    <td colspan = '3'>{el.PersonalDetails.communityDetails}</td>
                                </tr>

                                <tr>
                                    <td colspan='7'>Present Address Details</td>
                                    
                                </tr>
                                <tr>
                                     <td>State / UT  </td>
                                     <td colspan = '3'>{el.PersonalDetails.presentAddressDetails.presentState}</td>
                               
                                     <td>District   </td>
                                     <td colspan = '3'>{el.PersonalDetails.presentAddressDetails.presentDistrict}</td>

                                </tr>
                              
                                <tr>
                                       <td>Address </td>
                                       <td colspan = '7'>{el.PersonalDetails.presentAddressDetails.presentAddress}</td>
                                     
                                </tr>

                                <tr>
                                      <td>Village / Town / city </td>
                                      <td colspan = '3'>{el.PersonalDetails.presentAddressDetails.presentVillage} </td>

                                      <td>Pincode </td>
                                      <td colspan = '3'>{el.PersonalDetails.presentAddressDetails.presentPincode}</td>
                                </tr>

                                <tr>
                                     <td colSpan='7'>Permanent Address Details</td>
                                </tr>

                                <tr>
                                      <td>State / UT </td>
                                      <td colspan = '3'>{el.PersonalDetails.permanentAddressDetails.permanentState}</td>

                                      <td>District </td>
                                      <td colspan = '3'>{el.PersonalDetails.permanentAddressDetails.permanentDistrict}</td>

                                </tr>

                                <tr>
                                     <td>Address </td>
                                     <td colspan = '7'> {el.PersonalDetails.permanentAddressDetails.permanentAddress}</td>

                                </tr>

                                <tr>
                                      <td>Village / Town / city  </td>
                                      <td colspan = '3'>{el.PersonalDetails.permanentAddressDetails.permanentVillage}</td>
                                      <td>Pincode </td>
                                      <td colspan = '3'>{el.PersonalDetails.permanentAddressDetails.permanentPincode}</td>
                                
                                </tr>

                                <tr>
                                       <td colspan = '7'>Other Details</td>
                                </tr>
                                <tr>
                                      <td>Ex-Serviceman Details</td>
                                      <td>Are you an Ex-Serviceman ? </td>
                                      <td colspan = '5'>
                                          {el.OtherDetails.ex_serviceman}
                                      </td>
                                </tr> 
                                <tr>
                                      <td>Person with benchmark disability(PWD) Details</td>

                                      <td>Person with benchmark disability(PwBD) Details </td>
                                      <td colspan = '5'>
                                         {el.OtherDetails.personWithBenchmarkDisability}
                                      </td>
                                </tr>
                                <tr>
                                      <td>Economically Backward Class (EBC) Details </td> 
                                      <td>Are you an EBC certificate holder ? </td>
                                      <td colspan = '5'> {el.OtherDetails. EBC_Certificate_Holder}</td>
                                </tr>
                                <tr>
                                      <td >Bank Details</td>
                                </tr>
                                <tr>
                                    <td>Name of Account Holder </td>
                                     <td colspan = '3'> {el.OtherDetails.AccountHolderName} </td>

                                     <td>Account Number  </td>
                                     <td colspan = '3'>{el.OtherDetails.AccountNumber}</td>
                                </tr>
                                <tr>
                                    <td>IFSC Code  </td>
                                    <td colspan = '3'> {el.OtherDetails.IFSC_Code}</td>
                                    <td>Name Of Bank </td>
                                    <td colspan = '3'>{el.OtherDetails.BankName}</td>
                                </tr>
                                <tr>
                                    <td>Bank Address </td>
                                    <td colspan = '7' >{el.OtherDetails.BankAddress}</td>
                                </tr>

                                <tr>
                                     <td colspan = '7'>Education Qualifications </td>
                                </tr>

                                <tr>
                                    <td>
                                        SSC / Matriculation 
                                    </td>
                                </tr>

                                <tr>
                                    <td>State </td>
                                    <td colspan = '3'> {el.EducationalDetails.SSC_State}</td>
                                    <td>Board </td>
                                    <td colspan = '3'>{el.EducationalDetails.SSC_Board}</td>
                                    
                                </tr>

                                <tr>
                                    <td>Date of Passing </td>
                                    <td colspan = '3'>{el.EducationalDetails.SSC_DateOfPassing}</td>

                                     <td>Roll No  </td>
                                    <td colspan = '3'>{el.EducationalDetails.SSC_RollNo}</td>
                                </tr>

                                <tr>
                                    <td>
                                        Intermediate/10+2 
                                    </td>

                                </tr>

                                <tr>
                                    <td colspan = '1'> Group </td>
                                    <td colspan = '1'>{el.EducationalDetails.Inter_Group}</td>

                                    <td> State  </td>
                                    <td colspan = '2'>{el.EducationalDetails.Inter_State}</td>

                                    <td>Board  </td>
                                    <td colspan = '2'>{el.EducationalDetails.Inter_Board}</td>

                                </tr>

                                <tr>
                                    <td> Roll No </td>
                                    <td colspan = '3'>{el.EducationalDetails.Inter_RollNo}</td>

                                    <td>Date of Passing  </td>
                                    <td colspan = '3'>{el.EducationalDetails.Inter_DateOfPassing}</td>
                                </tr>

                                <tr>
                                    <td>
                                          Degree / Bachelors : 
                                    </td>
                                </tr>

                                <tr>
                                    <td> Group </td>
                                    <td colspan = '3'>{el.EducationalDetails.Degree_Group}</td>

                                    <td>Discipline  </td>
                                    <td colspan = '3'>{el.EducationalDetails.Degree_Discipline}</td>
                                </tr>

                                <tr>
                                    <td>State </td>
                                    <td colspan = '3'>{el.EducationalDetails.Degree_State}</td>

                                    <td> University Name </td>
                                    <td colspan = '3'>{el.EducationalDetails.Degree_Board}</td>

                                </tr>

                                <tr>
                                    <td> Date of Passing </td>
                                    <td colspan = '3'>{el.EducationalDetails.Degree_DateOfPassing}</td>
                                    <td>Roll No  </td> 
                                    <td colspan = '3'>{el.EducationalDetails.Degree_RollNo}</td>
                                </tr>
                                 <tr>
                                       <td colSpan='7'>
                                       <div style={{position : 'relative'}}>
                                         {
                                             dis && <SuccessDisplay/>
                                         }
                                       </div>

                                           <button onClick = {()=>{formSubmit(el)}}> Submit Your Application Form</button>

                                       </td>
                                 </tr>
                                
                                </>
                                
                             )
                           })
                       }
                      
                  </tbody>
             </table>

             
        </div>
    )
}

export default Preview