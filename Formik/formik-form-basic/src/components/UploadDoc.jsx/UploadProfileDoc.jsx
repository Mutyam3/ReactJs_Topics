import React from 'react'
import PhotoDoc from './PhotoDoc'
import SignDoc from './SignDoc'
import { Link, useNavigate } from 'react-router-dom'
import { useFormik } from 'formik'
import { useFormContext } from '../../FormContext'
import SuccessDisplay from '../SuccessDisplay'
import * as Yup from 'yup'
import ErrorDisplay from '../ErrorDisplay'

function UploadProfileDoc()
{

  const {formData, updateFormData} = useFormContext()
  const [dis, setDis] = React.useState(false)
  const [errorDis, setErrorDis] = React.useState(false)
 

  const navigator = useNavigate()

  // console.log('Form Data UF : :', formData)

  
     const myUploadFiles = useFormik({
        initialValues : {

          UploadFileDetails : {

              photo : formData.UploadFileDetails.photo,
              signature : formData.UploadFileDetails.signature

          }
            
        },

        // validationSchema: Yup.object({

        //   UploadFileDetails : Yup.object({

        //     photo : Yup.string().required(' * Nee andhala Photo pettu guru'),
        //     signature : Yup.string().required( ' * Nee sign pettu guru')

        // })
        // }),

        onSubmit : (values)=>{
            console.log(values)
            console.log('manaphot::', myUploadFiles)
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
        if(myUploadFiles.submitCount && myUploadFiles.isSubmitting)
        {
          navigator('/studentForm/Preview')
        }
        else{
          setErrorDis(true)

          setTimeout(()=>{
            setErrorDis(false)
          },2000)
        }
     }



   
    return(
        <div >
            <h5 style={{backgroundColor:'rgb(27,56,125)', color:'whitesmoke', borderRadius: '12px', padding:'10px', width:'fit-content'}}>Upload your scanned photo and signature</h5>

          <form onSubmit={myUploadFiles.handleSubmit}>

            <PhotoDoc  Uf = {myUploadFiles}/>
            <SignDoc  Uf = {myUploadFiles}/>

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
                 <button type="button" style={{backgroundColor:'crimson', color: 'white'}} onClick = {()=>{navigator('/studentForm/Educational-Qualification')}}>Previous</button>
                 <button  style={{backgroundColor:'green',color:'white'}} >SAVE</button> 
                 <button type='button' style={{backgroundColor:'crimson', color: 'white'}} onClick = {()=>{handleNext()}}>NEXT</button>
            </div>
          </form>
            
             
        
        </div>
    )
}

export default UploadProfileDoc