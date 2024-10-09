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

function OtherDetails()
{
     const {formData, updateFormData} = useFormContext()
     const navigate  = useNavigate()

     console.log('Form Data Od ::', formData)
     const myOtherDetails = useFormik({
          
             initialValues : {
                  ex_serviceman : formData.ex_serviceman,
                  personWithBenchmarkDisability : formData.personWithBenchmarkDisability,
                  EBC_Certificate_Holder : formData.EBC_Certificate_Holder,
                  AccountHolderName : formData.AccountHolderName,
                  AccountNumber : formData.AccountNumber,
                  IFSC_Code : formData.IFSC_Code,
                  BankName : formData.BankName,
                  BankAddress : formData.BankAddress
             },

             onSubmit : (values)=>{
                   console.log(values)
                   updateFormData(values)
                   navigate('/studentForm/Educational-Qualification')
                
             }
      })

    function save()
    {
        
    }
    return (
        <div>
           <form onSubmit={myOtherDetails.handleSubmit}>
              
              <CategoryDetails od = {myOtherDetails}/>
              <EBCDetails od={myOtherDetails}/>
              <BankDetails od={myOtherDetails}/>

            <div className='Btns'>

                 <button style={{backgroundColor:'green',color:'white'}} >SAVE</button>
                 <button style={{backgroundColor:'crimson', color: 'white'}} onClick = {()=>{navigate('/studentForm/Educational-Qualification')}}>NEXT</button>
                
            </div>
            </form>
            

        </div>
    )
}

export default  OtherDetails