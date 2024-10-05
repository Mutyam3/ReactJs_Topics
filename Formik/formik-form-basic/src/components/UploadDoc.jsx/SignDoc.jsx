import React from 'react'
import { signatureInstructions } from '../../data'

function SignDoc()
{
    return(
        <section className='UploadProfile'>

        <div >
           <p>Applicant's Signature</p>

             <div className='SignDiv'>
                
             </div>   

              <div className='fileInput'>
                  <input type="file"/>
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