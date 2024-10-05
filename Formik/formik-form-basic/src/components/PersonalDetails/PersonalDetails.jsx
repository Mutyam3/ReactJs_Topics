import React from 'react'
import {useFormik} from 'formik'
import Community from './Community'
import Personal from './Personal'
import PostalAddress from './PostalAddress'
import { Link } from 'react-router-dom'

function PersonalDetails()
{
    const myStudentForm = useFormik({
        initialValues : {
              nationality : '',
              dateOfBirth :'',
              age : '',
              firstName : '',
              lastName : '',
              fatherName : '',
              motherName : '',
              gender : '',
              email : '',
              mobileNumber : '',
              maritalStatus : '',
              religion : '',
              choiceOfLanguage:'',
              permanentMarkOfIdentification : ''
        },

        onSubmit : (values)=>{
            console.log(values)
        }
        

})

function save()
{

}
    return (
        <div>
             <form onSubmit={myStudentForm.handleSubmit}>
            {/* {manam bind chesam handleSubmit tho} */}

            <Personal/>
            <Community/>
            <PostalAddress/>

            <div className='Btns'>
                 <button onClick = {save} style={{backgroundColor:'green',color:'white'}}>SAVE</button>
                 <Link to="/studentForm/Other-Details" style={{textDecoration:'none',color:'white'}}><button style={{backgroundColor:'crimson', color: 'white'}}>NEXT</button>
                 </Link> 

            </div>

         </form>
        </div>
    )
}

export default PersonalDetails