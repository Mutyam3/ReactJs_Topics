import React from 'react'


function Matriculation(props)
{
    return(
         <div className='smallCompo'>
             <h5>Matriculation/SSC</h5>
            <section className='educateDiv'>

            <label>
                State<br/>
                <select  {...props.Ed.getFieldProps('EducationalDetails.SSC_State')}>
                    <option value='select' selected >Select</option>
                    <option value="Telangana">Telangana</option>
                    <option value="AndhraPradesh">AndhraPradesh</option>
                    <option value="Assam">Assam</option>
                    <option value="TamilNadu">TamilNadu</option>
                </select>
            </label>

            <label>
                 Board <br/>
                <input type="text" {...props.Ed.getFieldProps('EducationalDetails.SSC_Board')}/>
            </label>

            <label>
                Date of Passing <br/>
                <input type="date"  {...props.Ed.getFieldProps('EducationalDetails.SSC_DateOfPassing')}/>
            </label>

            <label>
                Roll No <br/>
                <input type="text" {...props.Ed.getFieldProps('EducationalDetails.SSC_RollNo')}/>
            </label>

            

            </section>
        </div>
    )
}

export default Matriculation