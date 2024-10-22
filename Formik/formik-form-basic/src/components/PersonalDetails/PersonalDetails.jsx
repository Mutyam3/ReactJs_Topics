import React from 'react'
import {useFormik} from 'formik'
import Community from './Community'
import Personal from './Personal'
import PostalAddress from './PostalAddress'
import { Link, useNavigate } from 'react-router-dom'
import { useLocation } from 'react-router-dom'
import { connect } from 'react-redux'
import axios from 'axios'
import OtherDetails from '../OtherDetails/OtherDetails'
import { useFormContext } from '../../FormContext'
import SuccessDisplay from '../SuccessDisplay'
import SelectExam from './SelectExam'
import * as Yup from 'yup' 
import ErrorDisplay from '../ErrorDisplay'

function PersonalDetails()
{
    const { formData, updateFormData }  = useFormContext()
    const [successDis, setSuccessDis] = React.useState(false)
    const [errorDis, setErrorDis] = React.useState(false)
    const navigator = useNavigate()


    // console.log("FORM DATA :: ",formData)
    
    const myStudentForm = useFormik({
        initialValues : {
            SelectedExam : {
               selected_Exam : formData.SelectedExam.selected_Exam
            },
            PersonalDetails : {

              nationality : formData.PersonalDetails.nationality,
              dateOfBirth : formData.PersonalDetails.dateOfBirth,
              age : formData.PersonalDetails.age,
              fullName: formData.PersonalDetails.fullName,
              fatherName : formData.PersonalDetails.fatherName,
              motherName : formData.PersonalDetails.motherName,
              gender : formData.PersonalDetails.gender,
              email : formData.PersonalDetails.email,
              mobileNumber : formData.PersonalDetails.mobileNumber,
              maritalStatus : formData.PersonalDetails.maritalStatus,
              religion : formData.PersonalDetails.religion,
              choiceOfLanguage: formData.PersonalDetails.choiceOfLanguage,
              permanentMarkOfIdentification1: formData.PersonalDetails.permanentMarkOfIdentification1,
              permanentMarkOfIdentification2 : formData.PersonalDetails.permanentMarkOfIdentification2,
              communityDetails: formData.PersonalDetails.communityDetails,

              presentAddressDetails : {
                presentState : formData.PersonalDetails.presentAddressDetails.presentState,
                presentDistrict : formData.PersonalDetails.presentAddressDetails.presentDistrict,
                presentAddress : formData.PersonalDetails.presentAddressDetails.presentAddress,
                presentVillage : formData.PersonalDetails.presentAddressDetails.presentVillage,
                presentPincode : formData.PersonalDetails.presentAddressDetails.presentPincode,
              },

              permanentAddressDetails : {

                permanentState : formData.permanentState,
                permanentDistrict : formData.permanentDistrict,
                permanentAddress : formData.permanentAddress,
                permanentVillage : formData.permanentVillage,
                permanentPincode : formData.permanentPincode,

              },

              sameAsPresent : formData.PersonalDetails.sameAsPresent

            }
              
        },

        validationSchema : Yup.object({
          
          SelectedExam : Yup.object({
            selected_Exam : Yup.string().required(' * Em exam ki apply chestavo enter chey babugaru')
          }),

           PersonalDetails: Yup.object({
                 nationality : Yup.string().required(' * Dhora Ni Nationality ivvu'),
                 dateOfBirth : Yup.date().required(' * Nee PuttinaRoju ivvu mama'),
                 fullName : Yup.string().required(' * Rei Babu Nee Peru ivvu'),
                 fatherName : Yup.string().required(' * Mee Nanna Peru kooda ivvu'),
                 motherName : Yup.string().required(' * Mee Amma Peru kooda konchem ivvu'),
                 gender : Yup.string().required(' * Ammayiva ah Abbayiva ah lekha others ah edokati ivvu'),
                 email : Yup.string().required(' * mail id ivvu mail chesta  '),
                 mobileNumber : Yup.number().required(' * mobileNumber ivvu connect aitha').min(10 , 'mobilenumber 10 digits untai tammudu'),
                 maritalStatus : Yup.string().required(' * Pelli ainda leda cheppu '),
                 religion : Yup.string().required(' * Nee religion ivvu '),
                 choiceOfLanguage : Yup.string().required( ' * exam lo rase language ivvu '),
                 permanentMarkOfIdentification1 : Yup.string().required( ' * oka Birth mark ivvu '),
                 permanentMarkOfIdentification2 : Yup.string().required( ' * inko Birth mark ivvu '),
                 communityDetails : Yup.string().required(' * Mee community ivvu ade caste ivvu '),
              
                 presentAddressDetails : Yup.object({
                  presentState : Yup.string().required(' * Mee Present State ivvu'),
                  presentDistrict : Yup.string().required(' * Mee present District ivvu'),
                  presentAddress : Yup.string().required( ' * Mee present Address ivvu'),
                  presentVillage : Yup.string().required( ' * Nee present Village ivvu'),
                  presentPincode : Yup.string().required( ' * Mee Present Pincode ivvandi')
                }),
                
           }),


        }),

        onSubmit : (values)=>{
            console.log('Personal Details',values)
            console.log('Final Ga Dirty :: ',myStudentForm)


            updateFormData(values)
            // const userData = {
            //     "userOne" : 
            //     {
            //         PersonalDetails : values,
            //         otherDetails : ''
            //     }
            // }
           

            //  axios.post('http://localhost:4000/users', userData).then((res)=>{
                    
            //         console.log('after post', values)
                 
            //  })
            setSuccessDis(true)

            setTimeout(()=>{
              setSuccessDis(false)
            }, 2000)

            setErrorDis(false)
        }

        

    })

    function handleNext()
    {  
      if(myStudentForm.isValid && myStudentForm.submitCount && myStudentForm.isSubmitting)
      {
        console.log('mana form ::',myStudentForm)
        navigator('/studentForm/Other-Details')
       
      }
      else{

        setErrorDis(true)

        setTimeout(()=>{
          setErrorDis(false)
        }, 2000)
      }
         
    }



    return (
        <div>


         <form  onSubmit = {myStudentForm.handleSubmit}>
            {/* {manam bind chesam handleSubmit tho} */}

            <SelectExam st={myStudentForm}/>
            <Personal st = {myStudentForm}/>
            <Community st = {myStudentForm}/>
            <PostalAddress st = {myStudentForm}/>

            <div style={{position: 'relative'}}>
              {
                  successDis  &&  <SuccessDisplay/>
              }
            </div>

            <div style={{position : 'relative'}}>
              {
                  errorDis && <ErrorDisplay></ErrorDisplay>
              }
            </div>
            

            <div className='Btns'>

                 <button type='button' style={{backgroundColor:'crimson', color:'white'}} onClick = {()=>{navigator('/home')}}>Previous</button>
                 <button style={{backgroundColor:'green',color:'white'}}>SAVE</button>
                 <button type='button' style={{backgroundColor:'crimson', color: 'white'}} onClick = {()=>{handleNext()}}  >NEXT</button>   
            
            </div>

         </form>
        </div>
    )
}

export default  PersonalDetails