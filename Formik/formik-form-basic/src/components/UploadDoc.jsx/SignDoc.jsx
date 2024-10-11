import React from 'react'
import { signatureInstructions } from '../../data'

function SignDoc(props)
{

  // const [url, setUrl] = React.useState('')
  function handleSign(e)
  {
     const signUrl =  window.URL.createObjectURL(e.target.files[0]);
      props.Uf.setFieldValue('UploadFileDetails.signature',signUrl)
      // setUrl(signUrl)

  }
    return(
        <section className='UploadProfile'>

        <div >
           <p>Applicant's Signature</p>

             <div className='SignDiv'>
               {props.Uf.values.UploadFileDetails.signature ?<img src = {props.Uf.values.UploadFileDetails.signature} width = '270'  height = '80' />  : 
               <img src = 'https://raw.githubusercontent.com/ww6015132/SilkySignature/master/signature.png' width='290' height ='80'/>}
             </div>   

              <div className='fileInput'>
                  <input type="file"  name = 'UploadFileDetails.signature' onChange = {handleSign} />
              </div>

        </div>

        <div className='specificIns'>
            <h5>Specifications for Signature Image</h5>
             <ul>
                {
                  signatureInstructions.map((el)=>{
                      return(
                          <li>{el}</li>
                      )
                  })
                }
             </ul>

        </div>

      </section>
    )
}

export default SignDoc