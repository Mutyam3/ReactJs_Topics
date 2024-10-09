import React from 'react'
import Matriculation from './SSC'
import Inter from './Inter'
import Degree from './Degree'
import { Link } from 'react-router-dom'
import { useFormik } from 'formik'
import { useFormContext } from '../../FormContext'

function EducatQualification()
{

    const {formData, updateFormData} = useFormContext()

    console.log('Form Data ED ::', formData)
    const myEducation = useFormik({
        initialValues : {

            SSC_State : formData.SSC_State,
            SSC_Board : formData.SSC_Board,
            SSC_DateOfPassing : formData.SSC_DateOfPassing,
            SSC_RollNo: formData.SSC_RollNo,
            Inter_Group: formData.Inter_Group,
            Inter_State : formData.Inter_State,
            Inter_Board : formData.Inter_Board,
            Inter_DateOfPassing : formData.Inter_DateOfPassing,
            Inter_RollNo : formData.Inter_RollNo,
            Degree_Group : formData.Degree_Group,
            Degree_Discipline : formData.Degree_Discipline,
            Degree_State : formData.Degree_State,
            Degree_Board : formData.Degree_Board,
            Degree_DateOfPassing : formData.Degree_DateOfPassing,
            Degree_RollNo : formData.Degree_RollNo

        },
        onSubmit : (values)=>{
              console.log( "Education : :" ,values)
              updateFormData(values)
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

        