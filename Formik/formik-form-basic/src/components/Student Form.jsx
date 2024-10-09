import React from 'react' // ila direct ga techukunte avi default exports

import { Link, Outlet } from 'react-router-dom'  //ila {link} techukunte avi non-default exports 
import { Formik,useFormik } from 'formik'
import PersonalDetails from './PersonalDetails/PersonalDetails'
import OtherDetails from './OtherDetails/OtherDetails'
import EducatQualification from './EducationalQualification/EducationalQualifications'
import UploadProfileDoc from './UploadDoc.jsx/UploadProfileDoc'


function StudentForm()
{
    

    
    return (
        <div className='stdFormDiv'>

            <div className='StdFormLinks'>

                <div className='parentCircle'>
                  <Link to = "/studentForm/personal-Details" ><div className='circleDiv'>
                          <i class="bi bi-person-circle"></i>
                        </div></Link><br/>
                        <h5>PersonalDetails</h5>
                </div>


                <div className='parentCircle'>
                   <Link to="/studentForm/Other-Details"><div className='circleDiv'><i class="bi bi-person-lines-fill"></i></div></Link><br/>
                   <h5>Other Details</h5>
                </div>



                <div className='parentCircle'>
                    <Link to="/studentForm/Educational-Qualification"><div className='circleDiv'>
                    <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" color='black' class="bi bi-mortarboard" viewBox="0 0 16 16">
                           <path d="M8.211 2.047a.5.5 0 0 0-.422 0l-7.5 3.5a.5.5 0 0 0 .025.917l7.5 3a.5.5 0 0 0 .372 0L14 7.14V13a1 1 0 0 0-1 1v2h3v-2a1 1 0 0 0-1-1V6.739l.686-.275a.5.5 0 0 0 .025-.917zM8 8.46 1.758 5.965 8 3.052l6.242 2.913z"/>
                           <path d="M4.176 9.032a.5.5 0 0 0-.656.327l-.5 1.7a.5.5 0 0 0 .294.605l4.5 1.8a.5.5 0 0 0 .372 0l4.5-1.8a.5.5 0 0 0 .294-.605l-.5-1.7a.5.5 0 0 0-.656-.327L8 10.466zm-.068 1.873.22-.748 3.496 1.311a.5.5 0 0 0 .352 0l3.496-1.311.22.748L8 12.46z"/>
                    </svg></div></Link>
                    <h5>Educational Qualification</h5>
                </div>



                <div className='parentCircle'>
                    <Link to="/studentForm/Upload-Profile-Documents"><div className='circleDiv'><i class="bi bi-cloud-upload"></i></div></Link>
                    <h5>Upload Profile Documents</h5>
                </div>



                <div className='parentCircle'>
                     <Link to="/studentForm/Preview"><div className='circleDiv'><i class="bi bi-file-earmark-text"></i></div></Link>
                     <h5>Preview</h5>
                </div>
              
               
            </div>


            <Outlet></Outlet>
           
            
        </div>
    )
}


export default StudentForm