import React from 'react'
import {useFormik} from 'formik'
import Community from './Community'
import Personal from './Personal'
import PostalAddress from './PostalAddress'
import { Link } from 'react-router-dom'
import { useLocation } from 'react-router-dom'
import { connect } from 'react-redux'

function PersonalDetails(props)
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
              permanentMarkOfIdentification1: ''
        },

        onSubmit : (values)=>{
            console.log(values)
        }

    })

    console.log('form :: ' , props)

    React.useEffect(()=>{

        props.dispatch({type:'SENDDATA', payload : myStudentForm})

    },[])

     function save()
     {
        
     }
    return (
        <div>
         <form  onSubmit = {myStudentForm.handleSubmit}>
            {/* {manam bind chesam handleSubmit tho} */}

            <Personal />
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

export default connect((store)=>{return store}) (PersonalDetails)