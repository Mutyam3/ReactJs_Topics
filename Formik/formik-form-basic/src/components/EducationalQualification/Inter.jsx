import React from 'react'

function Inter(props)
{
    return(
        <div className='smallCompo'>
             <h5>Intermediate/10+2</h5>
            <section className='educateDiv'>


            <label>
                Group <br/>
                <select  {...props.Ed.getFieldProps('EducationalDetails.Inter_Group')}>
                    <option value='select' selected >Select</option>
                    <option value="Mpc">Mpc</option>
                    <option value="Bipc">Bipc</option>
                    <option value="CEC">CEC</option>
                    <option value="ITI">ITI</option>
                </select>
            </label>


            <label>
                State<br/>
                <select {...props.Ed.getFieldProps('EducationalDetails.Inter_State')}> 
                    <option value='select' selected >Select</option>
                    <option value="Telangana">Telangana</option>
                    <option value="AndhraPradesh">AndhraPradesh</option>
                    <option value="Assam">Assam</option>
                    <option value="TamilNadu">TamilNadu</option>
                </select>
            </label>

            <label>
                 Board <br/>
                <input type="text" {...props.Ed.getFieldProps('EducationalDetails.Inter_Board')}/>
            </label>

            <label>
                Date of Passing <br/>
                <input type="date"  {...props.Ed.getFieldProps('EducationalDetails.Inter_DateOfPassing')}/>
            </label>

            <label>
                Roll No <br/>
                <input type="text"  {...props.Ed.getFieldProps('EducationalDetails.Inter_RollNo')}/>
            </label>

            

            </section>
        </div>
    )
}

export default Inter