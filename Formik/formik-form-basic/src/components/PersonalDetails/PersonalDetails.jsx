import React from 'react'
import {useFormik} from 'formik'
import Community from './Community'
import Personal from './Personal'
import PostalAddress from './PostalAddress'
import { Link } from 'react-router-dom'
import { useLocation } from 'react-router-dom'
import { connect } from 'react-redux'

function PersonalDetails()
{
    const myStudentForm = useFormik({
        initialValues : {
              nationality : '',
              dateOfBirth :'',
              age : '',
              fullName:'',
              fatherName : '',
              motherName : '',
              gender : '',
              email : '',
              mobileNumber : '',
              maritalStatus : '',
              religion : '',
              choiceOfLanguage:'',
              permanentMarkOfIdentification1: '',
              permanentMarkOfIdentification2 : '',
              communityDetails: '',
              presentState : '',
              presentDistrict : '',
              presentAddress : '',
              presentVillage : '',
              presentPincode : '',
            
              permanentState : '',
              permanentDistrict : '',
              permanentAddress : '',
              permanentVillage : '',
              permanentPincode : '',
              sameAsPresent : false
            

        },

        onSubmit : (values)=>{
            console.log(values)
        }

    })



    // React.useEffect(()=>{

    //     dispatch({type:'SENDDATA', payload : myStudentForm})

    // },[])

    

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

export default connect((store)=>{return store}) (PersonalDetails)