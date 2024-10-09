import React from 'react'
import PhotoDoc from './PhotoDoc'
import SignDoc from './SignDoc'
import { Link } from 'react-router-dom'
import { useFormik } from 'formik'
import { useFormContext } from '../../FormContext'

function UploadProfileDoc()
{

  const {formData, updateFormData} = useFormContext()

  console.log('Form Data UF : :', formData)

  
     const myUploadFiles = useFormik({
        initialValues : {
            photo : formData.photo,
            signature : formData.signature
        },
        onSubmit : (values)=>{
            console.log(values)
            updateFormData(values)
        }
     })

   
    return(
        <div >
            <h5>Upload your scanned photo and signature</h5>

          <form onSubmit={myUploadFiles.handleSubmit}>

            <PhotoDoc  Uf = {myUploadFiles}/>
            <SignDoc  Uf = {myUploadFiles}/>

            <div className='Btns'>
                 <button  style={{backgroundColor:'green',color:'white'}}>SAVE</button>
                 <Link to="/studentForm/Preview" style={{textDecoration:'none',color:'white'}}>
                 <button type='button' style={{backgroundColor:'crimson', color: 'white'}}>NEXT</button></Link> 
            </div>
          </form>
            
             
        
        </div>
    )
}

export default UploadProfileDoc