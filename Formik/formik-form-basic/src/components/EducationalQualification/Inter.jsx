import React from 'react'

function Inter(props)
{
    return(
        <div className='smallCompo'>
             <h5>Intermediate/10+2</h5>
            <section className='educateDiv'>


            <label>
                Group <br/>
                <select  {...props.Ed.getFieldProps('EducationalDetails.Inter_Group')}
                className={props.Ed.touched.EducationalDetails?.Inter_Group && props.Ed.errors.EducationalDetails?.Inter_Group && 'ErrorField'}>
                    <option value='select' selected >Select</option>
                    <option value="Mpc">Mpc</option>
                    <option value="Bipc">Bipc</option>
                    <option value="CEC">CEC</option>
                    <option value="ITI">ITI</option>
                </select>

                <div className='ErrorClass'>
                    <b>{props.Ed.touched.EducationalDetails?.Inter_Group && props.Ed.errors.EducationalDetails?.Inter_Group && props.Ed.errors.EducationalDetails.Inter_Group}</b>
                </div>
            </label>


            <label>
                State<br/>
                <select {...props.Ed.getFieldProps('EducationalDetails.Inter_State')}
                className={props.Ed.touched.EducationalDetails?.Inter_State && props.Ed.errors.EducationalDetails?.Inter_State && 'ErrorField'}> 
                    <option value='select' selected >Select</option>
                    <option value="Telangana">Telangana</option>
                    <option value="AndhraPradesh">AndhraPradesh</option>
                    <option value="Assam">Assam</option>
                    <option value="TamilNadu">TamilNadu</option>
                </select>

                
                <div className='ErrorClass'>
                    <b>{props.Ed.touched.EducationalDetails?.Inter_State && props.Ed.errors.EducationalDetails?.Inter_State && props.Ed.errors.EducationalDetails.Inter_State}</b>
                </div>

            </label>

            <label>
                 Board <br/>
                <input type="text" {...props.Ed.getFieldProps('EducationalDetails.Inter_Board')}
                className={props.Ed.touched.EducationalDetails?.Inter_Board && props.Ed.errors.EducationalDetails?.Inter_Board && 'ErrorField'}/>

                        
                <div className='ErrorClass'>
                    <b>{props.Ed.touched.EducationalDetails?.Inter_Board && props.Ed.errors.EducationalDetails?.Inter_Board && props.Ed.errors.EducationalDetails.Inter_Board}</b>
                </div>

            </label>

            <label>
                Date of Passing <br/>
                <input type="date"  {...props.Ed.getFieldProps('EducationalDetails.Inter_DateOfPassing')}
                className={props.Ed.touched.EducationalDetails?.Inter_DateOfPassing && props.Ed.errors.EducationalDetails?.Inter_DateOfPassing && 'ErrorField'}/>

                <div className='ErrorClass'>
                    <b>{props.Ed.touched.EducationalDetails?.Inter_DateOfPassing && props.Ed.errors.EducationalDetails?.Inter_DateOfPassing && props.Ed.errors.EducationalDetails.Inter_DateOfPassing}</b>
                </div>
            </label>

            <label>
                Roll No <br/>
                <input type="text"  {...props.Ed.getFieldProps('EducationalDetails.Inter_RollNo')}
                className={props.Ed.touched.EducationalDetails?.Inter_RollNo && props.Ed.errors.EducationalDetails?.Inter_RollNo && 'ErrorField'}/>

                <div className='ErrorClass'>
                    <b>{props.Ed.touched.EducationalDetails?.Inter_RollNo && props.Ed.errors.EducationalDetails?.Inter_RollNo && props.Ed.errors.EducationalDetails.Inter_RollNo}</b>
                </div>
            </label>

            

            </section>
        </div>
    )
}

export default Inter