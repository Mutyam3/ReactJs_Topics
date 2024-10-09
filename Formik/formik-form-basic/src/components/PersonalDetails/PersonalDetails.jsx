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

function PersonalDetails()
{
    const { formData, updateFormData}  = useFormContext()
    const navigator = useNavigate()


    console.log("FORM DATA :: ",formData)
    
    const myStudentForm = useFormik({
        initialValues : {
              nationality : formData.nationality,
              dateOfBirth : formData.dateOfBirth,
              age : formData.age,
              fullName: formData.fullName,
              fatherName : formData.fatherName,
              motherName : formData.motherName,
              gender : formData.gender,
              email : formData.email,
              mobileNumber : formData.mobileNumber,
              maritalStatus : formData.maritalStatus,
              religion : formData.religion,
              choiceOfLanguage: formData.choiceOfLanguage,
              permanentMarkOfIdentification1: formData.permanentMarkOfIdentification1,
              permanentMarkOfIdentification2 : formData.permanentMarkOfIdentification2,
              communityDetails: formData.communityDetails,
              presentState : formData.presentState,
              presentDistrict : formData.presentDistrict,
              presentAddress : formData.presentAddress,
              presentVillage : formData.presentVillage,
              presentPincode : formData.presentPincode,
              permanentState : formData.permanentState,
              permanentDistrict : formData.permanentDistrict,
              permanentAddress : formData.permanentAddress,
              permanentVillage : formData.permanentVillage,
              permanentPincode : formData.permanentPincode,
              sameAsPresent : false
        },

        onSubmit : (values)=>{
            console.log(values)
            updateFormData(values)
            const userData = {
                "userOne" : 
                {
                    personalDetails : values,
                    otherDetails : ''
                }
            }
           

             axios.post('http://localhost:4000/users', userData).then((res)=>{
                    
                    console.log('after post', values)
                 
             })
        }

    })


    

    

    return (
        <div>
         <form  onSubmit = {myStudentForm.handleSubmit}>
            {/* {manam bind chesam handleSubmit tho} */}

            <Personal st = {myStudentForm}/>
            <Community st = {myStudentForm}/>
            <PostalAddress st = {myStudentForm}/>

            <div className='Btns'>
                 <button style={{backgroundColor:'green',color:'white'}}>SAVE</button>
                 <Link to="/studentForm/Other-Details" style={{textDecoration:'none',color:'white'}}><button type='button' style={{backgroundColor:'crimson', color: 'white'}}>NEXT</button>
                 </Link> 

            </div>

         </form>
        </div>
    )
}

export default  PersonalDetails