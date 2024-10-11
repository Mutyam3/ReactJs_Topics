import React from 'react'
import CategoryDetails from './CategoryDetails'
import EBCDetails from './EBCDetails'
import BankDetails from './BankDetails'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import { useFormik } from 'formik'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'
import { useFormContext } from '../../FormContext'
import SuccessDisplay from '../SuccessDisplay'

function OtherDetails()
{
     const {formData, updateFormData} = useFormContext()
     const navigate  = useNavigate()
     const [dis, setDis] = React.useState(false)



    //  console.log('Form Data Od ::', formData)

     const myOtherDetails = useFormik({
          
             initialValues : {
               OtherDetails : {

                  ex_serviceman : formData.OtherDetails.ex_serviceman,
                  personWithBenchmarkDisability : formData.OtherDetails.personWithBenchmarkDisability,
                  EBC_Certificate_Holder : formData.OtherDetails.EBC_Certificate_Holder,
                  AccountHolderName : formData.OtherDetails.AccountHolderName,
                  AccountNumber : formData.OtherDetails.AccountNumber,
                  IFSC_Code : formData.OtherDetails.IFSC_Code,
                  BankName : formData.OtherDetails.BankName,
                  BankAddress : formData.OtherDetails.BankAddress

               }
                  
             },

             onSubmit : (values)=>{
                   console.log(values)
                   updateFormData(values)
                   setDis(true)

                   setTimeout(()=>{
                    setDis(false)
                  }, 2000)
                
             }
      })

   

    return (
        <div>


           <form onSubmit={myOtherDetails.handleSubmit}>
              
              <CategoryDetails od = {myOtherDetails}/>
              <EBCDetails od = {myOtherDetails}/>
              <BankDetails od = {myOtherDetails}/>

              
            <div style={{position: 'relative'}}>
              {
                  dis  &&  <SuccessDisplay/>
              }
            </div>

            <div className='Btns'>
                 <button style={{backgroundColor:"crimson", color:"whitesmoke"}} onClick = {()=>{navigate('/studentForm/personal-Details')}}>Previous</button>
                 <button style={{backgroundColor:'green',color:'white'}}>SAVE</button>
                 <button style={{backgroundColor:'crimson', color: 'white'}} onClick = {()=>{navigate('/studentForm/Educational-Qualification')}}>NEXT</button>
                
            </div>
            </form>
            

        </div>
    )
}

export default  OtherDetails