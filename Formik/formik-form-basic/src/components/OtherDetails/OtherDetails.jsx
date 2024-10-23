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
import * as Yup from 'yup'
import ErrorDisplay from '../ErrorDisplay'

function OtherDetails()
{
     const {formData, updateFormData} = useFormContext()
     const navigator  = useNavigate()
     const [successDis, setSuccessDis] = React.useState(false)
     const [errorDis, setErrorDis] = React.useState(false)


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

             validationSchema : Yup.object({

                   OtherDetails : Yup.object({
                       ex_serviceman : Yup.string().required( ' * please fill this field'),
                       personWithBenchmarkDisability : Yup.string().required( ' * please fill this field'),
                       EBC_Certificate_Holder : Yup.string().required( ' * please fill this field'),
                       AccountHolderName : Yup.string().required( ' * Account holder name ivvu babu'),
                       AccountNumber : Yup.number().required(' * Account number ivvu'),
                       IFSC_Code : Yup.string().required('Chinna nee bank ifsc code ivvu').test('Ifsc_Code validation', 'Default Ifsc_Code Error', (value, ctx)=>{
                               return new Promise((resolve, reject)=>{
                                // console.log(`http://localhost:4000/bank_details?ifsc_code=${value.toUpperCase()}`)
                                    axios.get(`http://localhost:4000/bank_details?ifsc_code=${value.toUpperCase()}`)
                                    .then((res)=>{
                                            console.log('res :: ', res.data)
                                            if(res.data.length > 0)
                                            {
  
                                                resolve(true)

                                            }
                                            else
                                            {
                                                reject(ctx.createError({path:ctx.path, message : 'This IFSC_Code is not there'}))
                                            }
                                          }
                                    )
                               })
                       })
                   })
             }),

             onSubmit : (values)=>{
                   console.log(values)
                   updateFormData(values)
                   setSuccessDis(true)

                   setTimeout(()=>{
                    setSuccessDis(false)
                  }, 2000)
                
                  setErrorDis(false)
             }

             
      })


      function handleNext()
      {  
        if(myOtherDetails.isValid && myOtherDetails.submitCount && myOtherDetails.isSubmitting)
        {
          
          navigator('/studentForm/Educational-Qualification')
         
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


           <form onSubmit={myOtherDetails.handleSubmit}>
              
              <CategoryDetails od = {myOtherDetails}/>
              <EBCDetails od = {myOtherDetails}/>
              <BankDetails od = {myOtherDetails}/>

              
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
              
                 <button style={{backgroundColor:"crimson", color:"whitesmoke"}} type='button' onClick = {()=>{navigator('/studentForm/personal-Details')}}>Previous</button>
                 <button style={{backgroundColor:'green',color:'white'}}>SAVE</button>
                 <button style={{backgroundColor:'crimson', color: 'white'}} type='button' onClick = {handleNext}>NEXT</button>
                
            </div>
            </form>
            

        </div>
    )
}

export default  OtherDetails