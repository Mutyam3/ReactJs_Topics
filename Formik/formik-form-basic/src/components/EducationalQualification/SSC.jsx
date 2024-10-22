import React from 'react'


function Matriculation(props)
{
    return(
         <div className='smallCompo'>
             <h5>Matriculation/SSC</h5>
            <section className='educateDiv'>

            <label>
                State<br/>
                <select  {...props.Ed.getFieldProps('EducationalDetails.SSC_State')}
                className={props.Ed.touched.EducationalDetails?.SSC_State && props.Ed.errors.EducationalDetails?.SSC_State && 'ErrorField'}>
                    <option value='select' selected >Select</option>
                    <option value="Telangana">Telangana</option>
                    <option value="AndhraPradesh">AndhraPradesh</option>
                    <option value="Assam">Assam</option>
                    <option value="TamilNadu">TamilNadu</option>
                </select>

            <div className='ErrorClass'>
                <b>{props.Ed.touched.EducationalDetails?.SSC_State && props.Ed.errors.EducationalDetails?.SSC_State && props.Ed.errors.EducationalDetails.SSC_State}</b>
            </div>
            </label>
          

            <label>
                 Board <br/>
                <input type="text" {...props.Ed.getFieldProps('EducationalDetails.SSC_Board')}
                className={props.Ed.touched.EducationalDetails?.SSC_Board && props.Ed.errors.EducationalDetails?.SSC_Board && 'ErrorField'}/>

             <div className='ErrorClass'>
                <b>{props.Ed.touched.EducationalDetails?.SSC_Board && props.Ed.errors.EducationalDetails?.SSC_Board && props.Ed.errors.EducationalDetails.SSC_Board}</b>
            </div>
            </label>

         


            <label>
                Date of Passing <br/>
                <input type="date"  {...props.Ed.getFieldProps('EducationalDetails.SSC_DateOfPassing')}
                className={props.Ed.touched.EducationalDetails?.SSC_DateOfPassing && props.Ed.errors.EducationalDetails?.SSC_DateOfPassing && 'ErrorField'}/>
            
            <div className='ErrorClass'>
                <b>{props.Ed.touched.EducationalDetails?.SSC_DateOfPassing && props.Ed.errors.EducationalDetails?.SSC_DateOfPassing && props.Ed.errors.EducationalDetails.SSC_DateOfPassing}</b>
            </div>
            </label>

           

            <label>
                Roll No <br/>
                <input type="text" {...props.Ed.getFieldProps('EducationalDetails.SSC_RollNo')}
                className={props.Ed.touched.EducationalDetails?.SSC_RollNo && props.Ed.errors.EducationalDetails?.SSC_RollNo && 'ErrorField'}/>

             <div className='ErrorClass'>
                <b>{props.Ed.touched.EducationalDetails?.SSC_RollNo && props.Ed.errors.EducationalDetails?.SSC_RollNo && props.Ed.errors.EducationalDetails.SSC_RollNo}</b>
            </div>

            </label>

    
            </section>
        </div>
    )
}

export default Matriculation