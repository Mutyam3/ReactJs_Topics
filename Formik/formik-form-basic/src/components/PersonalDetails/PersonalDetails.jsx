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

function PersonalDetails()
{
    const { formData, updateFormData }  = useFormContext()
    const [dis, setDis] = React.useState(false)

    const navigator = useNavigate()

  


    // console.log("FORM DATA :: ",formData)
    
    const myStudentForm = useFormik({
        initialValues : {

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

        onSubmit : (values)=>{
            console.log(values)
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
            setDis(true)

            setTimeout(()=>{
              setDis(false)
            }, 2000)
        }

    })



    return (
        <div>


         <form  onSubmit = {myStudentForm.handleSubmit}>
            {/* {manam bind chesam handleSubmit tho} */}

            <Personal st = {myStudentForm}/>
            <Community st = {myStudentForm}/>
            <PostalAddress st = {myStudentForm}/>

            <div style={{position: 'relative'}}>
              {
                  dis  &&  <SuccessDisplay/>
              }
            </div>
            

            <div className='Btns'>

                 <button type='button' style={{backgroundColor:'crimson', color:'white'}} onClick = {()=>{navigator('/home')}}>Previous</button>
                 <button style={{backgroundColor:'green',color:'white'}}>SAVE</button>
                 <button type='button' style={{backgroundColor:'crimson', color: 'white'}} onClick = {()=>{navigator('/studentForm/Other-Details')}}>NEXT</button>   
            
            </div>

         </form>
        </div>
    )
}

export default  PersonalDetails