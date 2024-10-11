import React from 'react'
import Matriculation from './SSC'
import Inter from './Inter'
import Degree from './Degree'
import { Link, useNavigate } from 'react-router-dom'
import { useFormik } from 'formik'
import { useFormContext } from '../../FormContext'
import OtherDetails from '../OtherDetails/OtherDetails'
import SuccessDisplay from '../SuccessDisplay'

function EducatQualification()
{

    const {formData, updateFormData} = useFormContext()

    const navigator = useNavigate()

    const [dis, setDis] = React.useState(false)

    // console.log('Form Data ED ::', formData)


    const myEducation = useFormik({
        initialValues : {

            EducationalDetails : {

            SSC_State : formData.EducationalDetails.SSC_State,
            SSC_Board : formData.EducationalDetails.SSC_Board,
            SSC_DateOfPassing : formData.EducationalDetails.SSC_DateOfPassing,
            SSC_RollNo: formData.EducationalDetails.SSC_RollNo,
            Inter_Group: formData.EducationalDetails.Inter_Group,
            Inter_State : formData.EducationalDetails.Inter_State,
            Inter_Board : formData.EducationalDetails.Inter_Board,
            Inter_DateOfPassing : formData.EducationalDetails.Inter_DateOfPassing,
            Inter_RollNo : formData.EducationalDetails.Inter_RollNo,
            Degree_Group : formData.EducationalDetails.Degree_Group,
            Degree_Discipline : formData.EducationalDetails.Degree_Discipline,
            Degree_State : formData.EducationalDetails.Degree_State,
            Degree_Board : formData.EducationalDetails.Degree_Board,
            Degree_DateOfPassing : formData.EducationalDetails.Degree_DateOfPassing,
            Degree_RollNo : formData.EducationalDetails.Degree_RollNo
        }
            

        },
        onSubmit : (values)=>{
              console.log( "Education : :" ,values)
              updateFormData(values)
              setDis(true)

              setTimeout(()=>{
                setDis(false)
              }, 2000)
        }
    })

  
    return (
        <div>

       

            <form onSubmit={myEducation.handleSubmit}>

            <Matriculation Ed = {myEducation}/>
            <Inter  Ed = {myEducation}/>
            <Degree Ed = {myEducation}></Degree>

            <div style={{position : 'relative'}}>
                {
                    dis && <SuccessDisplay/>
                }
            </div>

            <div className='Btns'>
                 <button style={{backgroundColor:"crimson" , color:'whitesmoke'}} onClick = {()=>{navigator('/studentForm/Other-Details')}}>Previous</button>
                 <button style={{backgroundColor:'green',color:'white'}}>SAVE</button>
                 <button style={{backgroundColor:'crimson', color: 'white'}}  onClick = {()=>{navigator('/studentForm/Upload-Profile-Documents')}}>NEXT</button>
            </div>
            
            </form>
            
        </div>
    )
}

export default EducatQualification

        