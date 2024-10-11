import React from 'react'

function Degree(props)
{

    return(
        <div className='smallCompo'>
        <h5>Degree/Bachelors</h5>
        <section className='educateDiv'>


       <label>
           Group <br/>
           <select  {...props.Ed.getFieldProps('EducationalDetails.Degree_Group')}>
               <option disbaled selected>Select</option>
               <option value="Bsc">Bsc</option>
               <option value="BTech">BTech</option>
               
           </select>
       </label>

       <label>
           Discipline <br/>
          <input type="text" {...props.Ed.getFieldProps('EducationalDetails.Degree_Discipline')}/> 
       </label>


       <label>
           State<br/>
           <select  {...props.Ed.getFieldProps('EducationalDetails.Degree_State')}>
               <option disabled selected>Select</option>
               <option value="Telangana">Telangana</option>
               <option value="AndhraPradesh">AndhraPradesh</option>
               <option value="Assam">Assam</option>
               <option value="TamilNadu">TamilNadu</option>
           </select>
       </label>

       <label>
            University Name <br/>
           <input type="text"  {...props.Ed.getFieldProps('EducationalDetails.Degree_Board')}/>
       </label>

       <label>
           Date of Passing <br/>
           <input type="date" {...props.Ed.getFieldProps('EducationalDetails.Degree_DateOfPassing')}/>
       </label>

       <label>
           Roll No <br/>
           <input type="text"  {...props.Ed.getFieldProps('EducationalDetails.Degree_RollNo')}/>
       </label>

       

       </section>
   </div>
    )
}

export default Degree

