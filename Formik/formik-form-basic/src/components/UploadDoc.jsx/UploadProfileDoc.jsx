import React from 'react'
import PhotoDoc from './PhotoDoc'
import SignDoc from './SignDoc'
import { Link, useNavigate } from 'react-router-dom'
import { useFormik } from 'formik'
import { useFormContext } from '../../FormContext'
import SuccessDisplay from '../SuccessDisplay'

function UploadProfileDoc()
{

  const {formData, updateFormData} = useFormContext()
  const [dis, setDis] = React.useState(false)

 

  const navigator = useNavigate()

  // console.log('Form Data UF : :', formData)

  
     const myUploadFiles = useFormik({
        initialValues : {

          UploadFileDetails : {

              photo : formData.UploadFileDetails.photo,
              signature : formData.UploadFileDetails.signature

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

            <div className='Btns'>
                 <button type="button" style={{backgroundColor:'crimson', color: 'white'}} onClick = {()=>{navigator('/studentForm/Educational-Qualification')}}>Previous</button>
                 <button  style={{backgroundColor:'green',color:'white'}} >SAVE</button> 
                 <button type='button' style={{backgroundColor:'crimson', color: 'white'}} onClick = {()=>{navigator('/studentForm/Preview')}}>NEXT</button>
            </div>
          </form>
            
             
        
        </div>
    )
}

export default UploadProfileDoc