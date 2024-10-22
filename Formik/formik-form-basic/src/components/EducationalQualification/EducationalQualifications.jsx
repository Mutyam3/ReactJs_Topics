import React from 'react'
import Matriculation from './SSC'
import Inter from './Inter'
import Degree from './Degree'
import { Link, useNavigate } from 'react-router-dom'
import { useFormik } from 'formik'
import { useFormContext } from '../../FormContext'
import OtherDetails from '../OtherDetails/OtherDetails'
import SuccessDisplay from '../SuccessDisplay'
import * as Yup from 'yup'
import ErrorDisplay from '../ErrorDisplay'

function EducatQualification()
{

    const {formData, updateFormData} = useFormContext()

    const navigator = useNavigate()

    const [dis, setDis] = React.useState(false)
    const [errorDis, setErrorDis] =  React.useState(false)

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

        validationSchema : Yup.object({
           
            EducationalDetails : Yup.object({

                   SSC_State : Yup.string().required(' * Nuvvu 10th ekkada chadivav bossuu'),   
                   SSC_Board : Yup.string().required(' * 10th board name ivvu bossuu '),
                   SSC_DateOfPassing : Yup.string().required( ' * 10th pass aina date ivvu bossuu'),
                   SSC_RollNo: Yup.string().required(' * 10th rollnumber kooda ivvu bossuu'),
                   Inter_Group: Yup.string().required(' * Nuvvu Inter eh group tesukunav bossuu'),
                   Inter_State : Yup.string().required(' * Nuvvu Inter ekkada chadivav bossuu'),
                   Inter_Board : Yup.string().required(' * Inter board name ivvu bossuu '),
                   Inter_DateOfPassing : Yup.string().required( ' * Inter pass aina date ivvu bossuu'),
                   Inter_RollNo : Yup.string().required(' * Inter rollnumber kooda ivvu bossuu'),
                   Degree_Group : Yup.string().required(' * Nuvvu Degree eh group tesukunav bossuu'),
                   Degree_Discipline : Yup.string().required(' * Nuvvu degree lo eh course tesukunav bossuu'),
                   Degree_State : Yup.string().required(' * Nuvvu Degree ekkada chadivav bossuu'),
                   Degree_Board : Yup.string().required(' * Degree university name ivvu bossuu '),
                   Degree_DateOfPassing : Yup.string().required( ' * Degree pass aina date ivvu bossuu'),
                   Degree_RollNo : Yup.string().required( ' * Degree studentId ivvu bossuu')
            })

        }),

        onSubmit : (values)=>{
              console.log( "Education : :" ,values)
              updateFormData(values)
              setDis(true)

              setTimeout(()=>{
                setDis(false)
              }, 2000)
             setErrorDis(false) 
        }
    })

    function handleNext()
    {
        if(myEducation.isValid && myEducation.submitCount && myEducation.isSubmitting)
        {
              
            navigator('/studentForm/Upload-Profile-Documents')
        }
        else{
             setErrorDis(true)

             setTimeout(()=>{
                setErrorDis(false)
             },2000)
        }
    }

  
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

            <div style={{position : 'relative'}}>
                {
                    errorDis && <ErrorDisplay/>
                }
            </div>

            <div className='Btns'>
                 <button style={{backgroundColor:"crimson" , color:'whitesmoke'}} type='button' onClick = {()=>{navigator('/studentForm/Other-Details')}}>Previous</button>
                 <button style={{backgroundColor:'green',color:'white'}}>SAVE</button>
                 <button style={{backgroundColor:'crimson', color: 'white'}} type='button' onClick = {()=>{handleNext()}}>NEXT</button>
            </div>
            
            </form>
            
        </div>
    )
}

export default EducatQualification

        