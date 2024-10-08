import React from 'react'
import Matriculation from './SSC'
import Inter from './Inter'
import Degree from './Degree'
import { Link } from 'react-router-dom'
import { useFormik } from 'formik'

function EducatQualification()
{

    const myEducation = useFormik({
        initialValues : {

            SSC_State : '',
            SSC_Board : '',
            SSC_DateOfPassing : '',
            SSC_RollNo: '',
            Inter_Group: '',
            Inter_State : '',
            Inter_Board : '',
            Inter_DateOfPassing : '',
            Inter_RollNo : '',
            Degree_Group : '',
            Degree_Discipline : '',
            Degree_State : '',
            Degree_Board : '',
            Degree_DateOfPassing : '',
            Degree_RollNo : ''

        },
        onSubmit : (values)=>{
              console.log( "Education : :" ,values)
        }
    })

  
    return (
        <div>
            <form onSubmit={myEducation.handleSubmit}>

            <Matriculation Ed = {myEducation}/>
            <Inter  Ed = {myEducation}/>
            <Degree Ed = {myEducation}></Degree>

            <div className='Btns'>
                 <button style={{backgroundColor:'green',color:'white'}}>SAVE</button>
                 <Link to="/studentForm/Upload-Profile-Documents" style={{textDecoration:'none',color:'white'}}>
                 <button style={{backgroundColor:'crimson', color: 'white'}}>NEXT</button>
                 </Link>
            </div>
            
            </form>
            
        </div>
    )
}

export default EducatQualification

        