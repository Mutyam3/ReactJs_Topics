import React from 'react'

function Degree(props)
{

    return(
        <div className='smallCompo'>
        <h5>Degree/Bachelors</h5>
        <section className='educateDiv'>


       <label>
           Group <br/>
           <select  {...props.Ed.getFieldProps('EducationalDetails.Degree_Group')}
           className={props.Ed.touched.EducationalDetails?.Degree_Group && props.Ed.errors.EducationalDetails?.Degree_Group && 'ErrorField'}>
               <option value='select' selected >Select</option>
               <option value="Bsc">Bsc</option>
               <option value="BTech">BTech</option>
               
           </select>

           <div className='ErrorClass'>
                <b>{props.Ed.touched.EducationalDetails?.Degree_Group && props.Ed.errors.EducationalDetails?.Degree_Group && props.Ed.errors.EducationalDetails.Degree_Group}</b>
           </div>
       </label>

       <label>
           Discipline <br/>
          <input type="text" {...props.Ed.getFieldProps('EducationalDetails.Degree_Discipline')}
          className={props.Ed.touched.EducationalDetails?.Degree_Discipline && props.Ed.errors.EducationalDetails?.Degree_Discipline && 'ErrorField'}/> 

          <div className='ErrorClass'>
                <b>{props.Ed.touched.EducationalDetails?.Degree_Discipline && props.Ed.errors.EducationalDetails?.Degree_Discipline && props.Ed.errors.EducationalDetails.Degree_Discipline}</b>
           </div>
       </label>


       <label>
           State<br/>
           <select  {...props.Ed.getFieldProps('EducationalDetails.Degree_State')}
           className={props.Ed.touched.EducationalDetails?.Degree_State && props.Ed.errors.EducationalDetails?.Degree_State && 'ErrorField'}>
               <option value='select' selected >Select</option>
               <option value="Telangana">Telangana</option>
               <option value="AndhraPradesh">AndhraPradesh</option>
               <option value="Assam">Assam</option>
               <option value="TamilNadu">TamilNadu</option>
           </select>

           <div className='ErrorClass'>
                <b>{props.Ed.touched.EducationalDetails?.Degree_State && props.Ed.errors.EducationalDetails?.Degree_State && props.Ed.errors.EducationalDetails.Degree_State}</b>
           </div>
           
       </label>

       <label>
            University Name <br/>
           <input type="text"  {...props.Ed.getFieldProps('EducationalDetails.Degree_Board')}
           className={props.Ed.touched.EducationalDetails?.Degree_Board && props.Ed.errors.EducationalDetails?.Degree_Board && 'ErrorField'}/>

           <div className='ErrorClass'>
                <b>{props.Ed.touched.EducationalDetails?.Degree_Board && props.Ed.errors.EducationalDetails?.Degree_Board && props.Ed.errors.EducationalDetails.Degree_Board}</b>
           </div>

       </label>

       <label>
           Date of Passing <br/>
           <input type="date" {...props.Ed.getFieldProps('EducationalDetails.Degree_DateOfPassing')}
           className={props.Ed.touched.EducationalDetails?.Degree_DateOfPassing && props.Ed.errors.EducationalDetails?.Degree_DateOfPassing && 'ErrorField'}/>

           <div className='ErrorClass'>
                <b>{props.Ed.touched.EducationalDetails?.Degree_DateOfPassing && props.Ed.errors.EducationalDetails?.Degree_DateOfPassing && props.Ed.errors.EducationalDetails.Degree_DateOfPassing}</b>
           </div>
       </label>

       <label>
           Roll No <br/>
           <input type="text"  {...props.Ed.getFieldProps('EducationalDetails.Degree_RollNo')}
           className={props.Ed.touched.EducationalDetails?.Degree_RollNo && props.Ed.errors.EducationalDetails?.Degree_RollNo && 'ErrorField'}/>

           <div className='ErrorClass'>
                <b>{props.Ed.touched.EducationalDetails?.Degree_RollNo && props.Ed.errors.EducationalDetails?.Degree_RollNo && props.Ed.errors.EducationalDetails.Degree_RollNo}</b>
           </div>
       </label>

       

       </section>
   </div>
    )
}

export default Degree

